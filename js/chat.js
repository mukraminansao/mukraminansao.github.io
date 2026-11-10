/* =========================================================
   Mini-X — portfolio chat
   Talks to the Cloudflare Worker in worker/portfolio-chat.js.
   Stays hidden until contact.chatEndpoint is set in js/data.js.
   ========================================================= */
(function () {
  'use strict';
  var D = window.PORTFOLIO || {}, C = D.contact || {};
  var ENDPOINT = (C.chatEndpoint || '').trim();
  if (!ENDPOINT) return;

  var SUGGESTIONS = [
    'What has he built?',
    'Is he open to remote work?',
    'What is his tech stack?',
    'Tell me about FAIRY',
    'What certificates does he have?'
  ];
  var GREETING = 'Hi, I’m Mini-X! Ask me about Mukramin’s projects, skills, education, or how to reach him.';
  var KEY = 'mk-chat';

  var history = [];
  try { history = JSON.parse(sessionStorage.getItem(KEY) || '[]') || []; } catch (e) { history = []; }
  var busy = false, current = null;      // current = the question being answered (null when idle)

  var esc = function (t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var save = function () { try { sessionStorage.setItem(KEY, JSON.stringify(history.slice(-16))); } catch (e) {} };

  /* Answers built from the portfolio data already on the page (js/data.js).
     Used whenever the live assistant can't be reached, so a visitor always gets a real answer. */
  function portfolioAnswer(question) {
    var query = ' ' + question.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
    var has = function (re) { return re.test(query); };
    var projects = D.projects || [], edu = D.education, certs = D.certifications || [], journey = D.journey || [];
    var project = projects.find(function (p) {
      return query.includes(' ' + p.name.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() + ' ');
    });
    if (project) {
      return '**' + project.name + '** · ' + project.kind + '\n' + project.desc + '\nBuilt with ' + project.tags.join(', ') + '.';
    }
    if (has(/\b(remote|availability|available|hire|hiring|freelance|hybrid|on site|onsite|start)\b/) && D.availability) {
      return '**Availability**\n' + D.availability + '.' + (C.email ? '\nYou can reach Mukramin at ' + C.email + '.' : '');
    }
    if (has(/\b(tech stack|stack|skills?|tools?|technologies|frameworks?|programming)\b/) && D.toolkitGroups) {
      return D.toolkitGroups.filter(function (group) { return group.items.length; }).map(function (group) {
        return '- **' + group.name + '**: ' + group.items.join(', ');
      }).join('\n');
    }
    if (has(/\b(certificates?|certifications?|certs?|security|cybersecurity|soc|siem)\b/) && certs.length) {
      return 'Mukramin’s certificates:\n' + certs.map(function (cert) { return '- **' + cert.title + '** · ' + cert.issuer + (cert.date ? ' · ' + cert.date : ''); }).join('\n');
    }
    if (has(/\b(education|school|degree|study|studied|graduate|graduated|college|university|course|honou?rs?|cum laude|awards?)\b/) && edu) {
      return '**Education**\n' + edu.degree + (edu.major ? ', ' + edu.major : '') + ' · ' + edu.school + ' (' + edu.years + ')'
        + (edu.honor ? '\n' + edu.honor + (edu.honorNote ? ' · ' + edu.honorNote : '') : '')
        + (edu.awards || []).map(function (award) { return '\n- ' + award; }).join('');
    }
    if (has(/\b(experience|ojt|intern|internship|work history|worked|journey|background|career)\b/) && journey.length) {
      return 'Mukramin’s experience so far:\n' + journey.slice(0, 5).map(function (j) { return '- **' + j.title + '** · ' + j.org + ' (' + j.when + ')'; }).join('\n');
    }
    if (has(/\b(projects?|built|build|builds|portfolio|apps?|websites?|systems?|work)\b/) && projects.length) {
      return 'Here are Mukramin’s projects:\n' + projects.map(function (p) { return '- **' + p.name + '** · ' + p.kind; }).join('\n');
    }
    if (has(/\b(linkedin|github|facebook|cv|resume|socials?|links?)\b/)) {
      return [C.linkedin && '- LinkedIn: ' + C.linkedin, C.github && '- GitHub: ' + C.github, '- CV: ' + location.origin + '/assets/Mukramin_Ansao_CV.pdf', C.email && '- Email: ' + C.email]
        .filter(Boolean).join('\n');
    }
    if (has(/\b(email|contact|reach|message|talk)\b/) && C.email) return 'You can reach Mukramin at ' + C.email + ', or use the contact form at the bottom of this page.';
    if (has(/\b(where|location|based|lives?|city|country|from)\b/) && C.location) return 'Mukramin is based in ' + C.location + ', Philippines (originally from Jolo, Sulu).';
    if (has(/\b(languages?|speaks?|english|tagalog|filipino)\b/) && D.languages) return 'Mukramin speaks ' + D.languages.replace(' · ', ' and ') + '.';
    if (has(/\b(why|strengths?|good fit|stand out|best)\b/) && (D.why || []).length) {
      return 'Why work with Mukramin:\n' + D.why.map(function (w) { return '- **' + w.title + '**: ' + w.text; }).join('\n');
    }
    if (has(/\b(who are you|your name|what are you|mini x|minix)\b/)) return 'I’m Mini-X, the robot companion on Mukramin’s portfolio. Ask me about his projects, skills, education or how to reach him.';
    return '';
  }
  // Nothing matched: a short overview, so the visitor still leaves with something useful.
  function overview() {
    var projects = D.projects || [], edu = D.education;
    return 'Mukramin Ansao is a web and app developer' + (C.location ? ' based in ' + C.location : '') + '.'
      + (edu ? '\n- ' + edu.degree + ', ' + edu.school + (edu.honor ? ' · ' + edu.honor : '') : '')
      + (projects.length ? '\n- ' + projects.length + ' projects: ' + projects.map(function (p) { return p.name; }).join(', ') : '')
      + (D.availability ? '\n- ' + D.availability : '')
      + '\nAsk me about a project by name, his skills, certificates, education or availability.'
      + (C.email ? ' For anything else, email ' + C.email + '.' : '');
  }

  // simple, safe formatting: bullets, **bold**, links and emails
  function format(text) {
    var lines = esc(text).split(/\n/), html = '', inList = false;
    lines.forEach(function (raw) {
      var line = raw.trim();
      var m = line.match(/^(?:[-*•]|\d+[.)])\s+(.*)$/);
      if (m) { if (!inList) { html += '<ul>'; inList = true; } html += '<li>' + inline(m[1]) + '</li>'; return; }
      if (inList) { html += '</ul>'; inList = false; }
      if (line) html += '<p>' + inline(line) + '</p>';
    });
    if (inList) html += '</ul>';
    return html;
  }
  function inline(s) {
    return s
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/(^|[\s(])(https?:\/\/[^\s<)]+[^\s<).,])/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>')
      .replace(/(^|[\s(])([\w.+-]+@[\w-]+\.[\w.]+[\w])/g, '$1<a href="mailto:$2">$2</a>');
  }

  /* ---------- markup ---------- */
  var root = document.createElement('div');
  root.className = 'aichat';
  root.innerHTML =
    '<section class="aichat__panel" id="aichat-panel" role="dialog" aria-modal="false" aria-labelledby="aichat-title" hidden>' +
      '<header class="aichat__head">' +
        '<span class="aichat__avatar" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2a9 9 0 0 0-9 9v4a7 7 0 0 0 7 7h4a7 7 0 0 0 7-7v-4a9 9 0 0 0-9-9Z" fill="#343d48"/><rect x="5" y="9" width="14" height="10" rx="4" fill="#05090d"/><path d="M9 12v2m6-2v2m-5 2q2 2 4 0M11 5l2 2m0-2-2 2" stroke="#22e5ff" stroke-width="1.4" stroke-linecap="round" fill="none"/></svg></span>' +
        '<div class="aichat__title"><h2 id="aichat-title">Mini-X</h2><p><i aria-hidden="true"></i>Ask me about Mukramin</p></div>' +
        '<button type="button" class="aichat__icon" data-chat-reset aria-label="Start a new chat" title="New chat"><svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg></button>' +
        '<button type="button" class="aichat__icon" data-chat-close aria-label="Close chat"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button>' +
      '</header>' +
      '<div class="aichat__log" role="log" aria-live="polite" aria-relevant="additions" data-lenis-prevent tabindex="0"></div>' +
      '<div class="aichat__chips" data-chat-chips></div>' +
      '<form class="aichat__form">' +
        '<label class="aichat__sr" for="aichat-input">Your question</label>' +
        '<textarea id="aichat-input" rows="1" maxlength="600" placeholder="Ask about projects, skills, availability…" autocomplete="off"></textarea>' +
        '<button type="submit" class="aichat__send" aria-label="Send question"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>' +
      '</form>' +
      '<p class="aichat__foot">AI can make mistakes. For anything important, email <a href="mailto:' + esc(C.email || '') + '">' + esc(C.email || '') + '</a>.</p>' +
    '</section>';
  document.body.appendChild(root);
  document.body.classList.add('has-minix-chat');

  var panel = root.querySelector('.aichat__panel'), opener = null;
  var log = root.querySelector('.aichat__log'), form = root.querySelector('.aichat__form');
  var input = root.querySelector('textarea'), send = root.querySelector('.aichat__send'), chips = root.querySelector('[data-chat-chips]');

  function bubble(role, html, extra) {
    var el = document.createElement('div');
    el.className = 'aichat__msg aichat__msg--' + role + (extra ? ' ' + extra : '');
    el.innerHTML = html;
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }
  function renderChips() {
    chips.innerHTML = '';
    if (history.length) { chips.hidden = true; return; }
    chips.hidden = false;
    SUGGESTIONS.forEach(function (q) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = q;
      b.addEventListener('click', function () { ask(q); });
      chips.appendChild(b);
    });
  }
  function renderAll() {
    log.innerHTML = '';
    bubble('bot', format(GREETING));
    history.forEach(function (m) { bubble(m.role === 'user' ? 'user' : 'bot', m.role === 'user' ? '<p>' + esc(m.content) + '</p>' : format(m.content)); });
    renderChips();
  }

  function open(trigger) {
    if (root.classList.contains('is-open')) return;
    opener = trigger;
    panel.hidden = false;
    root.classList.add('is-open');
    document.body.classList.add('aichat-open');
    log.scrollTop = log.scrollHeight;
    input.focus({ preventScroll: true });
    try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: 'chat-open', title: 'Opened Mini-X chat', event: true }); } catch (e) {}
  }
  function close() {
    root.classList.remove('is-open');
    document.body.classList.remove('aichat-open');
    panel.hidden = true;
    var target = opener && opener.getClientRects().length ? opener : document.querySelector('.minix-dock');
    if (target) target.focus({ preventScroll: true });
    opener = null;
  }
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('button[data-mini-x-chat]');
    if (trigger) open(trigger);
  });
  root.querySelector('[data-chat-close]').addEventListener('click', close);
  root.querySelector('[data-chat-reset]').addEventListener('click', function () {
    var active = current; current = null;
    if (active && active.ctrl) active.ctrl.abort();
    history = []; save(); setBusy(false); renderAll(); input.focus();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('is-open')) close(); });

  // grow the box with the text; Enter sends, Shift+Enter adds a line
  input.addEventListener('input', function () { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 120) + 'px'; });
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit')); } });
  form.addEventListener('submit', function (e) { e.preventDefault(); ask(input.value); });

  function setBusy(b) { busy = b; send.disabled = b; root.classList.toggle('is-busy', b); }

  function problem(kind, note) { var e = new Error(kind); e.kind = kind; e.note = note || ''; return e; }

  /* One attempt at the live assistant. Calls paint(text) as the answer streams in and returns the full text.
     Gives up only when nothing arrives for a while (not after a fixed total time, so long answers are never cut off). */
  async function live(job, paint) {
    var request = new AbortController(), idle = 0, text = '';
    job.ctrl = request;
    var wait = function (ms) { clearTimeout(idle); idle = setTimeout(function () { request.abort(); }, ms); };
    wait(25000);                                    // the first words can take a while when the model is waking up
    try {
      var r = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.slice(-8) }),
        signal: request.signal
      });
      var type = r.headers.get('Content-Type') || '';
      if (!r.ok || !type.includes('event-stream') || !r.body) {
        var note = '';
        try { note = String((await r.json()).error || ''); } catch (e) { /* not JSON */ }
        throw problem(r.status === 429 ? 'busy' : r.status === 403 ? 'blocked' : 'down', note);
      }
      var reader = r.body.getReader(), dec = new TextDecoder(), buf = '';
      var readLine = function (line) {
        if (!line.startsWith('data:')) return;
        var data = line.slice(5).trim();
        if (!data || data === '[DONE]') return;
        try {
          var j = JSON.parse(data), piece = j.response || (j.choices && j.choices[0] && j.choices[0].delta && j.choices[0].delta.content);
          if (typeof piece === 'string') text += piece;
        } catch (e) { /* ignore malformed events */ }
      };
      while (current === job) {
        var res;
        try { res = await reader.read(); }
        catch (e) { if (text.trim()) break; throw e; }           // the stream was cut: keep what already arrived
        if (res.done) { readLine((buf + dec.decode()).trim()); break; }
        wait(15000);
        buf += dec.decode(res.value, { stream: true });
        var parts = buf.split('\n'); buf = parts.pop();
        parts.forEach(readLine);
        if (text) paint(text);
      }
      if (!text.trim()) throw problem('down');
      return text.trim();
    } finally { clearTimeout(idle); }
  }

  async function ask(q) {
    q = String(q || '').trim();
    if (!q || busy) return;
    input.value = ''; input.style.height = 'auto';
    history.push({ role: 'user', content: q.slice(0, 600) }); save();
    chips.hidden = true;
    bubble('user', '<p>' + esc(q) + '</p>');
    var out = bubble('bot', '<span class="aichat__typing" aria-label="Thinking"><i></i><i></i><i></i></span>', 'is-pending');
    setBusy(true);
    var job = { ctrl: null };
    current = job;

    function paint(value) { out.classList.remove('is-pending'); out.innerHTML = format(value); log.scrollTop = log.scrollHeight; }
    function answer(value) { paint(value); history.push({ role: 'assistant', content: value }); save(); }
    try {
      var reply = '', why = null;
      if (location.protocol === 'file:') why = problem('local');
      else {
        try { reply = await live(job, paint); }
        catch (first) {
          if (current !== job) return;
          why = first;
          // a dropped connection or a hiccup on the server: wait a moment and try once more before falling back
          if (first.kind !== 'busy' && first.kind !== 'blocked') {
            await new Promise(function (done) { setTimeout(done, 900); });
            if (current !== job) return;
            try { reply = await live(job, paint); why = null; } catch (second) { why = second; }
          }
        }
      }
      if (current !== job) return;
      if (reply) { answer(reply); return; }
      // Live chat is unavailable: answer from the portfolio data instead of showing an error.
      var lead = why && why.kind === 'local' ? 'Live answers switch on when the site is opened from its web address instead of a file on this computer. From the portfolio:'
        : why && why.kind === 'busy' ? (why.note || 'I’ve answered a lot of questions today.') + ' Meanwhile, from the portfolio:'
        : 'My live connection dropped just now, so this comes straight from the portfolio:';
      try { console.warn('[Mini-X chat] live answer unavailable:', why && (why.kind || why.name), why && (why.note || why.message)); } catch (e) { /* noop */ }
      answer(lead + '\n' + (portfolioAnswer(q) || overview()));
    } finally {
      if (current === job) { setBusy(false); current = null; log.scrollTop = log.scrollHeight; }
    }
  }

  renderAll();
})();
