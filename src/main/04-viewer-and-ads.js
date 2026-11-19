  /* ---------------- screenshot viewer ---------------- */
  var lb = $('.lightbox'), lbImg = $('.lightbox__fig img', lb), lbState = { name: '', list: [], i: 0, from: null };
  function showShot() {
    var s = lbState.list[lbState.i];
    lbImg.src = s.src; lbImg.alt = (s.name || lbState.name) + ' — ' + s.label;
    $('.lightbox__name', lb).textContent = s.name || lbState.name; $('.lightbox__label', lb).textContent = s.label;
    $('.lightbox__count', lb).textContent = (lbState.i + 1) + ' / ' + lbState.list.length;
    if (window.gsap && !reduced) window.gsap.fromTo(lbImg, { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
  }
  function openList(name, list, i, from) {
    lbState = { name: name, list: list, i: i, from: from }; lb.hidden = false; showShot(); SFX.play('open');
    document.body.style.overflow = 'hidden'; if (lenis) lenis.stop();
    $('.lightbox__close', lb).focus();
  }
  function closeViewer() {
    SFX.play('close');
    lb.hidden = true; document.body.style.overflow = ''; if (lenis) lenis.start();
    if (lbState.from) lbState.from.focus();
  }
  function openViewer(p, i, from) { openList(D.projects[p].name, D.projects[p].shots, i, from); }
  function step(d) { var n = lbState.list.length; lbState.i = (lbState.i + d + n) % n; showShot(); }
  var certShots = CE.map(function (c) { return { src: c.img, label: c.issuer + ' · ' + c.date, name: c.title }; });
  $$('[data-cert]').forEach(function (b) { b.addEventListener('click', function () { openList('Certificates', certShots, +b.getAttribute('data-cert'), b); }); });
  $('.lightbox__close', lb).addEventListener('click', closeViewer);
  var tx = 0, ty = 0, tOn = false;
  lb.addEventListener('touchstart', function (e) { if (e.touches.length !== 1) return; tOn = true; tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (!tOn) return; tOn = false;
    var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) step(dx < 0 ? 1 : -1);
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx) * 1.3) closeViewer();
  }, { passive: true });
  $('.lightbox__prev', lb).addEventListener('click', function () { step(-1); });
  $('.lightbox__next', lb).addEventListener('click', function () { step(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lightbox__fig')) closeViewer(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeViewer(); else if (e.key === 'ArrowLeft') { step(-1); SFX.play('shift'); } else if (e.key === 'ArrowRight') { step(1); SFX.play('shift'); }
    else if (e.key === 'Tab') { var f = $$('button', lb), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); } }
  });

  /* ---------------- project ad player ---------------- */
  var adm = $('.admodal');
  if (adm) {
    var adVid = $('video', adm), adFrom = null;
    var closeAd = function () {
      if (adm.hidden) return;
      SFX.play('close'); adVid.pause(); adm.hidden = true; document.body.style.overflow = ''; if (lenis) lenis.start();
      if (adFrom) adFrom.focus();
    };
    $$('[data-ad]').forEach(function (b) {
      b.addEventListener('click', function () {
        var p = D.projects[+b.getAttribute('data-ad')]; adFrom = b;
        $('.admodal__name', adm).textContent = p.name;
        if (adVid.getAttribute('src') !== p.ad) { adVid.setAttribute('src', p.ad); if (p.adPoster) adVid.setAttribute('poster', p.adPoster); }
        $$('[data-preview]').forEach(function (v) { v.pause(); });
        adm.hidden = false; document.body.style.overflow = 'hidden'; if (lenis) lenis.stop(); SFX.play('open');
        adVid.currentTime = 0; var pr = adVid.play(); if (pr && pr.catch) pr.catch(function () {});
        $('.admodal__close', adm).focus();
        if (typeof track === 'function') track('project-ad', 'Watched project ad: ' + p.name);
      });
    });
    $('.admodal__close', adm).addEventListener('click', closeAd);
    adm.addEventListener('click', function (e) { if (e.target === adm || e.target.classList.contains('admodal__fig')) closeAd(); });
    document.addEventListener('keydown', function (e) {
      if (adm.hidden) return;
      if (e.key === 'Escape') closeAd();
      else if (e.key === 'Tab') { var f = [$('.admodal__close', adm), adVid]; if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[1].focus(); } else if (!e.shiftKey && document.activeElement === f[1]) { e.preventDefault(); f[0].focus(); } }
    });
  }

