  /* ---------------- no-animation path ---------------- */
  var lenis = null;
  var loader = $('.loader');
  /* One scroll value drives the sidebar and the interactive right-edge bar.
     Keep this outside the animation branch so reduced motion works too. */
  (function () {
    var control = $('.page-scroll'), track = $('.page-scroll__track');
    var leftFill = $('.rail__progress'), rightFill = $('.page-scroll__fill');
    var lastPercent = -1, lastTotal = -1;
    if (!control || !track) return;
    var queued = false, pointer = null;
    function range() { return Math.max(0, document.documentElement.scrollHeight - window.innerHeight); }
    function update() {
      queued = false;
      var total = range();
      var progress = total ? Math.max(0, Math.min(1, window.scrollY / total)) : 0;
      var percent = Math.round(progress * 100);
      // Move only the two bars (a transform needs no restyle of the rest of the page).
      // Setting a CSS variable on <html> here made the browser restyle every element on every frame.
      var scale = 'scaleY(' + progress + ')';
      if (leftFill) leftFill.style.transform = scale;
      if (rightFill) rightFill.style.transform = scale;
      if (percent !== lastPercent) {
        lastPercent = percent;
        control.setAttribute('aria-valuenow', percent);
        control.setAttribute('aria-valuetext', percent + '% of page');
      }
      if ((total > 0) !== (lastTotal > 0) || lastTotal < 0) {
        control.setAttribute('aria-disabled', total ? 'false' : 'true');
        control.tabIndex = total ? 0 : -1;
      }
      lastTotal = total;
    }
    function schedule() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    }
    function moveTo(y, immediate) {
      var top = Math.max(0, Math.min(range(), y));
      if (lenis) lenis.scrollTo(top, { immediate: immediate, duration: 0.35 });
      else window.scrollTo({ top: top, behavior: immediate || reduced ? 'instant' : 'smooth' });
      schedule();
    }
    function seek(clientY) {
      var rect = track.getBoundingClientRect();
      if (rect.height) moveTo((clientY - rect.top) / rect.height * range(), true);
    }
    control.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      e.preventDefault();
      control.focus({ preventScroll: true });
      pointer = e.pointerId;
      control.setPointerCapture(pointer);
      control.classList.add('is-dragging');
      seek(e.clientY);
    });
    control.addEventListener('pointermove', function (e) {
      if (pointer === e.pointerId) seek(e.clientY);
    });
    function release(e) {
      if (pointer !== e.pointerId) return;
      if (e.type === 'pointerup') seek(e.clientY);
      if (control.hasPointerCapture(pointer)) control.releasePointerCapture(pointer);
      pointer = null;
      control.classList.remove('is-dragging');
    }
    control.addEventListener('pointerup', release);
    control.addEventListener('pointercancel', release);
    control.addEventListener('lostpointercapture', function () { pointer = null; control.classList.remove('is-dragging'); });
    control.addEventListener('keydown', function (e) {
      var next;
      if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = range();
      else if (e.key === 'ArrowUp') next = window.scrollY - 80;
      else if (e.key === 'ArrowDown') next = window.scrollY + 80;
      else if (e.key === 'PageUp') next = window.scrollY - window.innerHeight * 0.85;
      else if (e.key === 'PageDown') next = window.scrollY + window.innerHeight * 0.85;
      else return;
      e.preventDefault();
      e.stopPropagation();
      moveTo(next, reduced);
    });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('load', schedule, { once: true });
    if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(document.body);
    document.documentElement.classList.add('has-page-scroll');
    update();
  })();
  // Restore section links after the dynamic content and scroll engine are ready.
  // Native anchor restoration can otherwise run before Lenis initializes.
  function restoreSectionFromHash() {
    var target = document.getElementById(location.hash.slice(1) || 'home');
    if (!target || !target.hasAttribute('data-section')) return;
    setActive(target);
    requestAnimationFrame(function () {
      if (lenis) lenis.scrollTo(target, { offset: sectionOffset(target.id), immediate: true });
      else target.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
  }
  function scheduleSectionRestoration() {
    var fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    fontsReady.then(function () { requestAnimationFrame(restoreSectionFromHash); });
  }
  if (document.readyState === 'complete') scheduleSectionRestoration();
  else window.addEventListener('load', scheduleSectionRestoration, { once: true });
  window.addEventListener('popstate', restoreSectionFromHash);
  if (!animate) {
    if (loader) loader.remove();
    return;
  }

  /* =========================================================
     ANIMATIONS (GSAP)
     ========================================================= */
  var gsap = window.gsap, ST = window.ScrollTrigger;
  gsap.registerPlugin(ST);
  document.documentElement.classList.add('is-anim');

  // smooth scrolling
  if (window.Lenis) {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    lenis = new window.Lenis({ lerp: 0.17, smoothWheel: true, wheelMultiplier: 1, autoRaf: false });
    lenis.on('scroll', ST.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href'); if (id.length < 2) return;
        var t = $(id); if (!t) return;
        e.preventDefault();
        if (t.hasAttribute('data-section') && location.hash !== id) history.pushState(null, '', id);
        glideTo(t, sectionOffset(t.id));
      });
    });
  }

  // click ripple + magnetic buttons + tilt (desktop pointers only)
  if (finePointer) {
    // A mouse click sends out a small ripple.
    window.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      var r = document.createElement('span');
      r.className = 'click-ripple'; r.style.left = e.clientX + 'px'; r.style.top = e.clientY + 'px';
      document.body.appendChild(r);
      r.addEventListener('animationend', function () { r.remove(); });
      setTimeout(function () { if (r.parentNode) r.remove(); }, 900);
    }, { passive: true });

    $$('[data-magnetic]').forEach(function (b) {
      var xTo = gsap.quickTo(b, 'x', { duration: 0.5, ease: 'elastic.out(1,0.4)' }), yTo = gsap.quickTo(b, 'y', { duration: 0.5, ease: 'elastic.out(1,0.4)' });
      b.addEventListener('mousemove', function (e) { var r = b.getBoundingClientRect(); xTo((e.clientX - r.left - r.width / 2) * 0.25); yTo((e.clientY - r.top - r.height / 2) * 0.35); });
      b.addEventListener('mouseleave', function () { xTo(0); yTo(0); });
    });

    $$('[data-frame]').forEach(function (f) {
      gsap.set(f, { transformPerspective: 900 });
      var rY = gsap.quickTo(f, 'rotateY', { duration: 0.5, ease: 'power2.out' }), rX = gsap.quickTo(f, 'rotateX', { duration: 0.5, ease: 'power2.out' });
      f.addEventListener('mousemove', function (e) {
        var r = f.getBoundingClientRect();
        rY(((e.clientX - r.left) / r.width - 0.5) * 6); rX(-((e.clientY - r.top) / r.height - 0.5) * 6);
      });
      f.addEventListener('mouseleave', function () { rY(0); rX(0); });
    });

    $$('[data-scramble]').forEach(function (a) {
      var t = a.textContent;
      a.addEventListener('mouseenter', function () { scramble(a, t, 0.35); });
    });
  }

  // split section headings into masked lines
  $$('[data-split]').forEach(function (h) {
    var parts = h.innerHTML.split(/<br\s*\/?>/i);
    h.innerHTML = parts.map(function (p) { return '<span class="split-line"><span>' + p + '</span></span>'; }).join('');
  });

  /* ---------- initial hidden states ---------- */
  var heroLetters = $$('.hero__letter');
  gsap.set(heroLetters, { yPercent: 110, opacity: 0 });
  gsap.set('.hero__figure img', { opacity: 0, y: 60, filter: 'blur(14px)' });
  gsap.set('[data-hero-copy]', { opacity: 0, y: 30 });
  gsap.set('[data-hero-hud]', { opacity: 0 });
  gsap.set('[data-statbar]', { opacity: 0, y: 40 });
  gsap.set('.nav, .rail', { opacity: 0 });
  gsap.set('.lineart path', { strokeDasharray: 1400, strokeDashoffset: 1400 });

  /* ---------- loader → hero intro ---------- */
  var count = { v: 0 }, countEl = $('[data-count]');
  var intro = gsap.timeline({ paused: true });
  intro
    .to('.lineart path', { strokeDashoffset: 0, duration: 1.8, ease: 'power2.inOut', stagger: 0.03, clearProps: 'strokeDasharray,strokeDashoffset' }, 0)
    .to(heroLetters, { yPercent: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.07 }, 0.05)
    .to(heroLetters, { keyframes: [{ x: -6, skewX: 8, duration: 0.05 }, { x: 4, skewX: -6, duration: 0.05 }, { x: 0, skewX: 0, duration: 0.06 }], stagger: { each: 0.04, from: 'random' } }, 0.75)
    .to('.hero__figure img', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.4, ease: 'expo.out' }, 0.35)
    .to('.nav, .rail', { opacity: 1, duration: 0.8 }, 0.6)
    .to('[data-hero-hud]', { opacity: 1, duration: 0.4 }, 0.8)
    .to('[data-hero-copy]', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12 }, 0.85)
    .to('[data-statbar]', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 1.0)
    .add(function () {
      var b = $('[data-stat="projects"]'); if (b) { var n = { v: 0 }; gsap.to(n, { v: D.stats.projects, duration: 1.2, ease: 'power2.out', onUpdate: function () { b.textContent = pad(Math.round(n.v)); } }); }
      var h = $('[data-decode]'); if (h) scramble(h, h.getAttribute('data-decode'), 1.1);
    }, 1.15);

  var seen = true; // no boot screen: the hero intro starts straight away
  if (seen) {
    gsap.to(loader, { opacity: 0, duration: 0.35, onComplete: function () { loader.remove(); } });
    loader.style.animation = 'none';
    intro.play(0.1);
  }
  var boot = seen ? gsap.timeline({ paused: true }) : gsap.timeline({ onComplete: function () { loader.remove(); } });
  boot
    .to('[data-line]', { opacity: 1, duration: 0.01, stagger: 0.2 }, 0.05)
    .to('.loader__bar span', { width: '100%', duration: 0.55, ease: 'power2.inOut' }, 0)
    .to(count, { v: 100, duration: 0.55, ease: 'power2.inOut', onUpdate: function () { countEl.textContent = ('00' + Math.round(count.v)).slice(-3); } }, 0)
    .to('.loader__inner', { opacity: 0, y: -10, duration: 0.2 }, 0.6)
    .to(loader, { clipPath: 'inset(0 0 100% 0)', duration: 0.55, ease: 'expo.inOut' }, 0.65)
    .add(function () { intro.play(); }, 0.75);
  loader.style.animation = 'none';

  /* ---------- hero parallax on scroll (set up once the intro has finished) ---------- */
  intro.eventCallback('onComplete', function () {
    if (!window.matchMedia('(min-width: 981px)').matches) return;
    gsap.to('.hero__title', { yPercent: 28, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.hero__figure', { y: -60, scale: 1.04, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.fromTo('.hero__copy, .hero__hud', { opacity: 1, y: 0 }, { opacity: 0, y: -40, ease: 'none', immediateRender: false, scrollTrigger: { trigger: '.hero', start: '20% top', end: '60% top', scrub: true } });
  });

  // Both edge progress bars are updated together by the shared scroll control.

  // Interior sections use normal document flow and stay visible immediately.
  // Keep Home animation above; hidden project panels must not receive reveal states.
  window.addEventListener('load', function () { ST.refresh(); });
})();
