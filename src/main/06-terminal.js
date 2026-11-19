  /* ---------------- terminal easter egg ( press ~ or ` ) ---------------- */
  var term = $('.term'), termOut = $('.term__out'), termIn = $('.term__in');
  function tprint(html, cls) { var l = document.createElement('div'); l.className = 'term__line' + (cls ? ' ' + cls : ''); l.innerHTML = html; termOut.appendChild(l); termOut.scrollTop = termOut.scrollHeight; }
  var CMDS = {
    help: function () {
      tprint('commands: <b>about</b> · <b>projects</b> · <b>skills</b> · <b>certs</b> · <b>now</b> · <b>contact</b> · <b>cv</b> · <b>resume</b> · <b>clear</b> · <b>exit</b>');
      tprint('extras: <b>matrix</b> · <b>hack</b> · <b>shortcuts</b> · <b>goto &lt;section&gt;</b>');
    },
    resume: function () { CMDS.cv(); },
    matrix: function () { tprint('entering the matrix…', 'term__ok'); setTimeout(function () { closeTerm(); matrixRain(); }, 350); },
    hack: function () { runHack(); },
    shortcuts: function () { closeTerm(); openKeys(); },
    certs: function () { CE.forEach(function (c) { tprint('<b>' + esc(c.title) + '</b> — ' + esc(c.issuer) + ', ' + esc(c.date)); }); },
    about: function () { tprint('Mukramin B. Ansao — web &amp; app developer, Pasig City. BSIT Cum Laude 2026, Major in Networking.'); },
    projects: function () { D.projects.forEach(function (p, i) { tprint(pad(i + 1) + '  <b>' + esc(p.name) + '</b> — ' + esc(p.kind)); }); tprint('type <b>goto projects</b> to see them'); },
    skills: function () { (D.toolkitGroups || []).forEach(function (g) { tprint('<b>' + esc(g.name) + '</b>  ' + esc((g.items || []).concat(g.familiar || []).join(' · '))); }); },
    now: function () { (D.now || []).forEach(function (n) { tprint('› ' + esc(n)); }); },
    contact: function () { tprint('email    ' + esc(C.email)); tprint('linkedin ' + esc(C.linkedin)); tprint('github   ' + esc(C.github)); },
    cv: function () { tprint('opening CV…'); window.open('assets/Mukramin_Ansao_CV.pdf?v=2026-11-09b', '_blank'); },
    clear: function () { termOut.innerHTML = ''; },
    exit: function () { closeTerm(); },
    whoami: function () { tprint('a recruiter with good taste, probably.'); },
    'sudo hire mukramin': function () { tprint('access granted. redirecting to contact…', 'term__ok'); setTimeout(function () { closeTerm(); location.hash = 'contact'; var c = $('#contact'); if (c) c.scrollIntoView({ behavior: 'smooth' }); }, 700); }
  };
  function runCmd(raw) {
    var cmd = raw.trim().toLowerCase(); if (!cmd) return;
    tprint('<span class="term__prompt">guest@mukramin.dev:~$</span> ' + esc(raw));
    if (cmd.indexOf('goto ') === 0) { var t = $('#' + cmd.slice(5).trim()); if (t) { closeTerm(); t.scrollIntoView({ behavior: 'smooth' }); } else tprint('no such section', 'term__err'); return; }
    (CMDS[cmd] || function () { tprint('command not found: ' + esc(cmd) + ' — try <b>help</b>', 'term__err'); })();
  }
  function openTerm() {
    SFX.play('open');
    term.hidden = false; if (lenis) lenis.stop();
    if (!termOut.children.length) { tprint('MUKRAMIN.DEV terminal v1.0 — type <b>help</b> to begin', 'term__ok'); }
    setTimeout(function () { termIn.focus(); }, 30);
  }
  function closeTerm() { if (!term.hidden) SFX.play('close'); term.hidden = true; if (lenis) lenis.start(); }
  termIn.addEventListener('keydown', function (e) { if (e.key.length === 1 || e.key === 'Backspace') SFX.play('key'); else if (e.key === 'Enter') SFX.play('click'); });
  $('.term__form').addEventListener('submit', function (e) { e.preventDefault(); runCmd(termIn.value); termIn.value = ''; });
  $('.term__close').addEventListener('click', closeTerm);
  $$('[data-open-term]').forEach(function (b) { b.addEventListener('click', openTerm); });
  document.addEventListener('keydown', function (e) {
    var typing = /INPUT|TEXTAREA/.test(document.activeElement && document.activeElement.tagName);
    if ((e.key === '`' || e.key === '~') && !typing) { e.preventDefault(); term.hidden ? openTerm() : closeTerm(); }
    else if (e.key === 'Escape' && !term.hidden) closeTerm();
  });

  /* ---------------- terminal extras: hack + matrix ---------------- */
  var hacking = false;
  function runHack() {
    if (hacking) return; hacking = true;
    var steps = [
      ['connecting to mukramin.dev mainframe…', 350],
      ['bypassing firewall  [                    ]', 0, 'bar'],
      ['decrypting portfolio.dat… done', 450],
      ['scanning skills: Laravel · React Native · PHP · MySQL · security', 450],
      ['<b>ACCESS GRANTED.</b> but honestly, you could just hire me ;)', 0, 'ok'],
      ['type <b>sudo hire mukramin</b> to continue', 0]
    ];
    var i = 0;
    (function next() {
      if (i >= steps.length) { hacking = false; return; }
      var st = steps[i++];
      if (st[2] === 'bar') {
        tprint('&gt; ' + st[0]); var line = termOut.lastChild, k = 0;
        (function fill() {
          k++; line.innerHTML = '&gt; bypassing firewall  [' + new Array(k + 1).join('█') + new Array(21 - k).join('&nbsp;') + '] ' + k * 5 + '%';
          SFX.play('key');
          if (k < 20) setTimeout(fill, 45); else setTimeout(next, 250);
        })();
        return;
      }
      tprint((st[2] === 'ok' ? '' : '&gt; ') + st[0], st[2] === 'ok' ? 'term__ok' : '');
      SFX.play(st[2] === 'ok' ? 'success' : 'shift');
      setTimeout(next, st[1] || 300);
    })();
  }
  function matrixRain() {
    if (reduced) { toast('MATRIX MODE IS OFF WITH REDUCED MOTION'); return; }
    var cv = document.createElement('canvas'), c = cv.getContext('2d'), w, h, cols, drops, size = 16, start = performance.now(), DUR = 4200;
    cv.className = 'matrix'; cv.setAttribute('aria-hidden', 'true'); document.body.appendChild(cv);
    var fit = function () { w = cv.width = innerWidth; h = cv.height = innerHeight; cols = Math.ceil(w / size); drops = []; for (var i = 0; i < cols; i++) drops[i] = Math.random() * -40; };
    fit();
    var chars = 'アカサタナハマヤラワ0123456789ABCDEF<>/{}[]=+*MUKRAMIN'.split('');
    var acc = getComputedStyle(document.documentElement).getPropertyValue('--acc').trim() || '#22E5FF';
    SFX.play('open');
    var lastBlip = 0;
    (function frame(now) {
      var t = now - start;
      c.fillStyle = 'rgba(6,8,11,.18)'; c.fillRect(0, 0, w, h);
      c.font = '600 ' + size + 'px monospace';
      for (var i = 0; i < cols; i++) {
        var y = drops[i] * size;
        c.fillStyle = Math.random() < 0.06 ? '#E9FDFF' : acc;
        c.fillText(chars[(Math.random() * chars.length) | 0], i * size, y);
        if (y > h && Math.random() > 0.97) drops[i] = 0; else drops[i] += 1;
      }
      if (now - lastBlip > 220) { SFX.play('key'); lastBlip = now; }
      cv.style.opacity = t > DUR - 600 ? Math.max(0, (DUR - t) / 600) : 1;
      if (t < DUR) requestAnimationFrame(frame); else { cv.remove(); SFX.play('close'); }
    })(start);
  }

