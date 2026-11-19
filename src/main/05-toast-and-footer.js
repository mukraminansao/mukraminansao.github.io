  /* ---------------- copy email + toast ---------------- */
  var toastEl = $('.toast'), toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('is-on'); }, 2200); }
  function legacyCopy(t) {
    var ta = document.createElement('textarea'); ta.value = t; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} ta.remove(); return ok;
  }
  $$('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = C[b.getAttribute('data-copy')] || '';
      var done = function () { toast('EMAIL COPIED: ' + t); SFX.play('copy'); }, fail = function () { toast(legacyCopy(t) ? 'EMAIL COPIED: ' + t : 'COPY THIS: ' + t); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(t).then(done, fail); else fail();
    });
  });

  /* ---------------- footer: my local time + my latest public GitHub commit ----------------
     the time is always Pasig time (Asia/Manila); the commit comes from GitHub's public API
     and is remembered for 10 minutes; if GitHub can't be reached, that part simply stays hidden */
  (function () {
    var tEl = $('[data-localtime]'), cEl = $('[data-lastcommit]');
    if (tEl) {
      var tick = function () {
        try { tEl.textContent = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Manila', hour: 'numeric', minute: '2-digit' }).format(new Date()) + ' in Pasig'; } catch (e) {}
      };
      tick(); setInterval(tick, 30000);
    }
    if (!cEl || !window.fetch || !C.github) return;
    var user = C.github.replace(/\/+$/, '').split('/').pop();
    var ago = function (t) {
      var s = (Date.now() - t) / 1000, n;
      if (s < 3600) { n = Math.max(1, Math.round(s / 60)); return n + ' min ago'; }
      if (s < 86400) { n = Math.round(s / 3600); return n + ' h ago'; }
      n = Math.round(s / 86400); return n + (n === 1 ? ' day' : ' days') + ' ago';
    };
    var show = function (c) {
      cEl.innerHTML = 'last commit ' + esc(ago(c.t)) + ' · <a href="https://github.com/' + esc(c.full) + '" target="_blank" rel="noopener">' + esc(c.full.split('/').pop()) + '</a>';
      cEl.hidden = false;
    };
    var KEY = 'mk-lastcommit', cached = null;
    try { cached = JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) {}
    if (cached && Date.now() - cached.at < 600000) { show(cached); return; }
    fetch('https://api.github.com/users/' + encodeURIComponent(user) + '/events/public?per_page=30', { headers: { Accept: 'application/vnd.github+json' } })
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (ev) {
        var push = (ev || []).filter(function (e) { return e && e.type === 'PushEvent' && e.repo; })[0];
        if (!push) return;
        var c = { full: push.repo.name, t: new Date(push.created_at).getTime(), at: Date.now() };
        try { sessionStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
        show(c);
      })
      .catch(function () {});
  })();

