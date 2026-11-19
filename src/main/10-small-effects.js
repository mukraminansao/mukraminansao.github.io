  /* ---------------- text scramble ---------------- */
  var GLYPHS = '!<>-_\\/[]{}=+*^?#01ABXZ';
  function scramble(el, finalText, dur) {
    if (!el) return;
    var from = el.textContent, len = Math.max(from.length, finalText.length), start = performance.now(), ms = (dur || 0.6) * 1000;
    if (el._raf) cancelAnimationFrame(el._raf);
    (function tick(now) {
      var p = Math.min(1, (now - start) / ms), out = '';
      for (var i = 0; i < len; i++) {
        var reveal = i / len < p;
        out += reveal ? (finalText[i] || '') : (finalText[i] === ' ' ? ' ' : GLYPHS[(Math.random() * GLYPHS.length) | 0]);
      }
      el.textContent = out;
      if (p < 1) el._raf = requestAnimationFrame(tick); else el.textContent = finalText;
    })(start);
  }

  /* ---------------- visitor stats: count a few important clicks as events (no personal data) ---------------- */
  function track(name, title) {
    try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: name, title: title || name, event: true }); } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a'); if (!a) return;
    var href = a.getAttribute('href') || '';
    if (/\.pdf$/i.test(href)) track('cv-download', 'Downloaded CV');
    else if (a.classList.contains('certcard__verify')) track('cert-verify', 'Verified a certificate: ' + (a.closest('.certcard').querySelector('h3') || {}).textContent);
    else if (/github\.com\/[^/]+\/[^/]+/.test(href)) track('project-code', 'Opened project code: ' + href.split('/').pop());
    else if (a.classList.contains('nav__cta') || a.classList.contains('nav__hire')) track('hire-me', 'Clicked Hire Me');
    else if (/linkedin\.com/.test(href)) track('linkedin', 'Opened LinkedIn');
  });

  /* ---------------- general click / hover sounds ---------------- */
  var SILENT = '[data-sound-toggle], .lightbox, .admodal, .term, .burger, .menu a, .thumb, .frame__screen, .app__open, .preview__badge, .certcard__img, .copybtn, .form__submit';
  document.addEventListener('click', function (e) {
    var t = e.target.closest('a, button, .thumb, label.chip');
    if (t && !t.closest(SILENT)) SFX.play('click');
  });
  $$('.lightbox__nav, .thumb').forEach(function (b) { b.addEventListener('click', function () { SFX.play('shift'); }); });
  if (finePointer) document.addEventListener('mouseover', function (e) {
    var t = e.target.closest('.nav__links a, .footer__links a, .btn, .thumb, .whycard__link, .socials a, .rail__icon, .links a, .snd, .certcard__img, .frame__screen, .app__open, .sk, .tk, .term-hint, .footer__top, .totop, .feats__more');
    if (t && !t.contains(e.relatedTarget)) SFX.play(t.closest('.nav__links, .footer__links') ? 'chirp' : 'hover');
  });

  // certificate cards get a VERIFIED stamp as they scroll into view
  var stamps = $$('.certcard');
  if ('IntersectionObserver' in window && !reduced) {
    var sio = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('is-stamped'); sio.unobserve(x.target); } }); }, { threshold: 0.45 });
    stamps.forEach(function (c) { sio.observe(c); });
  } else stamps.forEach(function (c) { c.classList.add('is-stamped'); });

  /* ---------------- stop the loading shimmer once a picture has loaded ----------------
     The shimmer repaints its box every frame, so it must not keep running behind loaded images. */
  (function () {
    var BOX = '.frame__screen, .app .cut__in, .certcard__img, .thumb';
    function done(img) { var box = img.closest(BOX); if (box) box.classList.add('is-loaded'); }
    $$(BOX).forEach(function (box) { var img = box.querySelector('img'); if (img && img.complete && img.naturalWidth) box.classList.add('is-loaded'); });
    document.addEventListener('load', function (e) { if (e.target.tagName === 'IMG') done(e.target); }, true);
    document.addEventListener('error', function (e) { if (e.target.tagName === 'IMG') done(e.target); }, true);
  })();

