/* =========================================================
   Portfolio assistant — chat widget
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
  var GREETING = 'Hi! I can answer questions about Mukramin: his projects, skills, education and how to reach him. What would you like to know?';
  var KEY = 'mk-chat';

  var history = [];
  try { history = JSON.parse(sessionStorage.getItem(KEY) || '[]') || []; } catch (e) { history = []; }
  var busy = false, ctrl = null;

  var esc = function (t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var save = function () { try { sessionStorage.setItem(KEY, JSON.stringify(history.slice(-16))); } catch (e) {} };

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
    '<button type="button" class="aichat__launch" aria-expanded="false" aria-controls="aichat-panel">' +
      '<span class="aichat__spark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg></span>' +
      '<span class="aichat__launch-txt">Ask about me</span>' +
    '</button>' +
    '<section class="aichat__panel" id="aichat-panel" role="dialog" aria-modal="false" aria-labelledby="aichat-title" hidden>' +
      '<header class="aichat__head">' +
        '<span class="aichat__avatar" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg></span>' +
        '<div class="aichat__title"><h2 id="aichat-title">Portfolio assistant</h2><p><i aria-hidden="true"></i>Answers from Mukramin’s portfolio</p></div>' +
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
  document.body.classList.add('has-aichat');

  var launch = root.querySelector('.aichat__launch'), panel = root.querySelector('.aichat__panel');
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

  function open() {
    panel.hidden = false;
    requestAnimationFrame(function () { root.classList.add('is-open'); });
    launch.setAttribute('aria-expanded', 'true');
    document.body.classList.add('aichat-open');
    log.scrollTop = log.scrollHeight;
    setTimeout(function () { input.focus({ preventScroll: true }); }, 60);
    try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: 'chat-open', title: 'Opened the portfolio assistant', event: true }); } catch (e) {}
  }
  function close() {
    root.classList.remove('is-open');
    launch.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('aichat-open');
    setTimeout(function () { if (!root.classList.contains('is-open')) panel.hidden = true; }, 260);
    launch.focus({ preventScroll: true });
  }
  launch.addEventListener('click', function () { root.classList.contains('is-open') ? close() : open(); });
  root.querySelector('[data-chat-close]').addEventListener('click', close);
  root.querySelector('[data-chat-reset]').addEventListener('click', function () {
    if (ctrl) ctrl.abort();
    history = []; save(); busy = false; setBusy(false); renderAll(); input.focus();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root.classList.contains('is-open')) close(); });

  // grow the box with the text; Enter sends, Shift+Enter adds a line
  input.addEventListener('input', function () { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 120) + 'px'; });
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit')); } });
  form.addEventListener('submit', function (e) { e.preventDefault(); ask(input.value); });

  function setBusy(b) { busy = b; send.disabled = b; root.classList.toggle('is-busy', b); }

  function ask(q) {
    q = String(q || '').trim();
    if (!q || busy) return;
    input.value = ''; input.style.height = 'auto';
    history.push({ role: 'user', content: q.slice(0, 600) }); save();
    chips.hidden = true;
    bubble('user', '<p>' + esc(q) + '</p>');
    var out = bubble('bot', '<span class="aichat__typing" aria-label="Thinking"><i></i><i></i><i></i></span>', 'is-pending');
    setBusy(true);
    ctrl = window.AbortController ? new AbortController() : null;
    var text = '';

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history.slice(-8) }),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (r) {
      var type = r.headers.get('Content-Type') || '';
      if (!r.ok || type.indexOf('event-stream') < 0) {
        return r.json().catch(function () { return {}; }).then(function (j) { throw new Error(j.error || 'The assistant is unavailable right now.'); });
      }
      var reader = r.body.getReader(), dec = new TextDecoder(), buf = '';
      function pump() {
        return reader.read().then(function (res) {
          if (res.done) return;
          buf += dec.decode(res.value, { stream: true });
          var parts = buf.split('\n'); buf = parts.pop();
          parts.forEach(function (line) {
            line = line.trim();
            if (line.indexOf('data:') !== 0) return;
            var data = line.slice(5).trim();
            if (!data || data === '[DONE]') return;
            try {
              var j = JSON.parse(data), piece = j.response;
              if (piece == null && j.choices && j.choices[0]) piece = (j.choices[0].delta && j.choices[0].delta.content) || '';
              if (piece) { text += piece; out.classList.remove('is-pending'); out.innerHTML = format(text); log.scrollTop = log.scrollHeight; }
            } catch (e) {}
          });
          return pump();
        });
      }
      return pump();
    }).then(function () {
      text = text.trim();
      if (!text) throw new Error('I couldn’t find an answer to that. You can email Mukramin at ' + (C.email || '') + '.');
      out.innerHTML = format(text);
      history.push({ role: 'assistant', content: text }); save();
    }).catch(function (err) {
      if (err && err.name === 'AbortError') { out.remove(); return; }
      history.pop(); save();
      out.classList.remove('is-pending'); out.classList.add('is-error');
      out.innerHTML = format((err && err.message) || 'Something went wrong. Please try again.');
    }).then(function () { setBusy(false); ctrl = null; log.scrollTop = log.scrollHeight; });
  }

  renderAll();
})();
