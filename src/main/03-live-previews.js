  /* ---------------- live previews: short silent clips of each app working ----------------
     each clip plays by itself while its project is on screen, on desktop and phones alike,
     and pauses when it scrolls away (not with reduced motion or data saver).
     the LIVE PREVIEW badge also plays / pauses it by click, tap or keyboard */
  var saveData = !!(navigator.connection && navigator.connection.saveData);
  var previews = [];
  $$('[data-preview]').forEach(function (vid) {
    var host = vid.parentNode, btn = $('[data-preview-btn]', host);
    var proj = vid.closest('[data-project]'), pi = $$('[data-project]').indexOf(proj);
    var hoverEl = host.closest('.app') || host;
    var label = $('[data-shot-label]', proj), name = D.projects[pi].name;
    var ready = false, wanted = false, held = false;
    var pv = { vid: vid, host: hoverEl };
    var load = function () {
      if (vid.getAttribute('src')) return;
      vid.preload = 'auto'; vid.src = vid.getAttribute('data-src');
    };
    var setLive = function (on) {
      host.classList.toggle('is-live', on);
      btn.setAttribute('aria-label', (on ? 'Pause' : 'Play') + ' live preview of ' + name);
      btn.setAttribute('aria-pressed', on);
      if (label) label.textContent = on ? '● LIVE PREVIEW' : D.projects[pi].shots[activeShot[pi] || 0].label;
    };
    pv.play = function (byUser) {
      if (proj.hidden) return;
      if (byUser) held = false;
      if (held) return;
      wanted = true; load();
      if (ready && !host.classList.contains('is-live')) { try { vid.currentTime = 0; } catch (e) {} }
      var pr = vid.play();
      if (pr && pr.catch) pr.catch(function () { setLive(false); });
    };
    pv.stop = function (byUser) {
      wanted = false; if (byUser) held = true;
      vid.pause();
    };
    var found = function () { if (ready) return; ready = true; btn.hidden = false; host.classList.add('has-preview'); };
    vid.addEventListener('loadedmetadata', found);
    vid.addEventListener('playing', function () { found(); if (wanted) setLive(true); else vid.pause(); });
    vid.addEventListener('pause', function () { setLive(false); });
    vid.addEventListener('error', function () { vid.remove(); btn.remove(); pv.play = pv.stop = function () {}; });
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (host.classList.contains('is-live')) pv.stop(true); else pv.play(true);
    });
    // leaving the screen clears a manual pause, so the clip plays again next time it comes into view
    pv.leave = function () { held = false; pv.stop(); };
    // switching screenshots stops the clip so the chosen screenshot is visible
    $$('.thumb', proj).forEach(function (t) { t.addEventListener('click', function () { pv.stop(true); }); });
    previews.push(pv);
  });
  if (previews.length) {
    if ('IntersectionObserver' in window) {
      // start loading a clip a little before its project scrolls into view
      var pre = new IntersectionObserver(function (en) {
        en.forEach(function (x) {
          if (!x.isIntersecting) return;
          previews.forEach(function (pv) { if (pv.host === x.target) { pv.vid.preload = 'metadata'; if (!pv.vid.getAttribute('src')) pv.vid.src = pv.vid.getAttribute('data-src'); } });
          pre.unobserve(x.target);
        });
      }, { rootMargin: '300px 0px' });
      previews.forEach(function (pv) { pre.observe(pv.host); });
      if (!reduced && !saveData) {
        var auto = new IntersectionObserver(function (en) {
          en.forEach(function (x) {
            previews.forEach(function (pv) {
              if (pv.host !== x.target) return;
              pv.inView = x.isIntersecting;
              if (x.isIntersecting) pv.play(); else pv.leave();
            });
          });
        }, { threshold: 0.5 });
        previews.forEach(function (pv) { auto.observe(pv.host); });
      }
    }
    document.addEventListener('visibilitychange', function () {
      previews.forEach(function (pv) { if (document.hidden) pv.stop(); else if (pv.inView) pv.play(); });
    });
  }

  // Education + timeline
  var E = D.education, CE = D.certifications || [];
  $('[data-education]').innerHTML =
    '<div class="edu cut" data-reveal-item><div class="cut__in">' +
      '<div class="edu__top"><span>EDUCATION</span><b>' + esc(E.years) + '</b></div>' +
      '<h3>' + esc(E.degree) + '</h3><p>' + esc(E.major) + '<br>' + esc(E.school) + '</p>' +
      '<div class="honor"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="M8.5 13.8 7 22l5-3 5 3-1.5-8.2"/></svg><div><b>' + esc(E.honor.toUpperCase()) + '</b><small>' + esc(E.honorNote) + '</small></div></div>' +
      '<div class="awards">' + E.awards.map(function (a) { return '<span>' + esc(a) + '</span>'; }).join('') + '</div>' +
    '</div></div>' +
    (CE.length ? '<a class="cert" href="#certifications" data-reveal-item><span class="cert__ico"><svg viewBox="0 0 24 24"><path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg></span>' +
      '<div><small>CERTIFICATIONS</small><b>' + CE.length + ' verified security certificates</b><p>' + esc(CE.map(function (c) { return c.issuer.split(' · ')[0]; }).join(' · ')) + '</p></div></a>' : '');

  // Certifications
  var EXT = '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
  $('[data-certs]').innerHTML = CE.map(function (c, i) {
    return '<article class="certcard cut" data-reveal-item><div class="cut__in">' +
      '<button type="button" class="certcard__img" data-cert="' + i + '" aria-label="View the ' + esc(c.title) + ' certificate"><img decoding="async" src="' + esc(c.thumb) + '" alt="' + esc(c.title + ' certificate') + '" loading="lazy"><span class="frame__zoom" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>VIEW</span></button>' +
      '<span class="certcard__stamp" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 12 4 4 8-8"/></svg>VERIFIED</span>' +
      '<div class="certcard__body"><p class="certcard__meta"><span>' + esc(c.issuer) + '</span><b>' + esc(c.date) + '</b></p>' +
      '<h3>' + esc(c.title) + '</h3><p class="certcard__note">' + esc(c.note) + '</p>' +
      '<div class="card__tags">' + tags(c.tags) + '</div>' +
      (c.verify ? '<a class="btn btn--line certcard__verify" href="' + esc(c.verify) + '" target="_blank" rel="noopener" aria-label="Verify ' + esc(c.title) + '"><span class="btn__ring">' + EXT + '</span>VERIFY CREDENTIAL</a>' : '') +
      '</div></div></article>';
  }).join('');

  // Why work with me
  $('[data-why]').innerHTML = (D.why || []).map(function (w, i) {
    return '<article class="whycard" data-reveal-item><span class="whycard__num">' + pad(i + 1) + '</span><h3>' + esc(w.title) + '</h3><p>' + esc(w.text) + '</p>' +
      '<a class="whycard__link" href="' + esc(w.link) + '"' + (/^https?:/.test(w.link) ? ' target="_blank" rel="noopener"' : '') + '>' + esc(w.linkText) + ' <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></article>';
  }).join('');

  $('[data-timeline]').innerHTML = D.journey.map(function (it) {
    return '<li class="tl' + (it.live ? ' tl--live' : '') + '" data-tl><span class="tl__dot"></span>' +
      '<div class="tl__meta"><span class="tl__when">' + esc(it.when) + '</span><span class="tl__kind">' + esc(it.kind) + '</span></div>' +
      '<h3>' + esc(it.title) + '</h3><p class="tl__org">' + esc(it.org) + '</p><p class="tl__text">' + esc(it.text) + '</p>' +
      (it.bullets ? '<ul class="tl__bullets">' + it.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' : '') +
    '</li>';
  }).join('');

