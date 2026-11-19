  /* ---------------- phone edge tab (mobile sidebar) ---------------- */
  var rail = $('.rail'), railBtn = $('.rail__toggle');
  function setRail(open) {
    rail.classList.toggle('is-open', open);
    railBtn.setAttribute('aria-expanded', open);
    railBtn.setAttribute('aria-label', open ? 'Hide social links' : 'Show social links');
  }
  railBtn.addEventListener('click', function (e) { e.stopPropagation(); setRail(!rail.classList.contains('is-open')); });
  document.addEventListener('click', function (e) { if (rail.classList.contains('is-open') && !rail.contains(e.target)) setRail(false); });
  var railY = 0;
  window.addEventListener('scroll', function () {
    if (!rail.classList.contains('is-open')) { railY = window.scrollY; return; }
    if (Math.abs(window.scrollY - railY) > 160) setRail(false);
  }, { passive: true });
  // The floating arrow goes back one section; Contact completes the loop to Home.
  var heroEl = $('#home'), toTop = $('.totop');
  var currentSection = heroEl;
  function previousSection() {
    var index = sectionsByKey.indexOf(currentSection);
    return currentSection && currentSection.id === 'contact' ? heroEl : sectionsByKey[Math.max(0, index - 1)];
  }
  function updateSectionArrow() {
    if (!toTop) return;
    var previous = previousSection();
    var name = previous ? previous.id : 'home';
    name = name === 'why' ? 'Why Me' : name.charAt(0).toUpperCase() + name.slice(1);
    var label = currentSection && currentSection.id === 'contact' ? 'Back to Home' : 'Previous section: ' + name;
    toTop.setAttribute('aria-label', label);
    toTop.setAttribute('title', label);
    toTop.classList.toggle('is-on', !!currentSection && currentSection.id !== 'home');
  }
  var onScrollPast = function () {
    var past = window.scrollY > (heroEl ? heroEl.offsetHeight * 0.8 : 600);
    document.body.classList.toggle('past-hero', past);
    updateSectionArrow();
  };
  window.addEventListener('scroll', onScrollPast, { passive: true }); onScrollPast();
  if (toTop) toTop.addEventListener('click', function () { goToSection(previousSection()); });

  /* ---------------- nav, menu ---------------- */
  var nav = $('.nav'), burger = $('.burger'), menu = $('.menu');
  var setMenu = function (open) {
    SFX.play(open ? 'open' : 'close');
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (lenis) open ? lenis.stop() : lenis.start();
    if (open) $('.menu__links a', menu).focus(); else burger.focus();
  };
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  $$('.menu a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab' || !menu.classList.contains('is-open')) return;
    var links = $$('a', menu), last = links[links.length - 1];
    if (e.shiftKey && document.activeElement === burger) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); burger.focus(); }
  });
  var onScrollNav = function () { nav.classList.toggle('is-scrolled', window.scrollY > 40); };
  window.addEventListener('scroll', onScrollNav, { passive: true }); onScrollNav();

  // active section (nav + rail number)
  var sections = $$('[data-section]'), numEl = $('[data-section-num]');
  var setActive = function (sec) {
    var id = sec.id, num = sec.getAttribute('data-section');
    currentSection = sec;
    updateSectionArrow();
    document.body.classList.toggle('interior-active', id !== 'home');
    document.body.classList.toggle('about-active', id === 'about');
    $$('[data-nav]').forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('data-nav') === id); });
    if (numEl && numEl.textContent !== num && numEl.textContent && id !== 'projects') SFX.play('ping');
    if (numEl && numEl.textContent !== num) { if (animate) scramble(numEl, num, 0.35); else numEl.textContent = num; }
  };
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------------- network trace: every section is a hop ----------------
     each section label shows how long it took you to reach it, like traceroute;
     hops you have not reached yet show "* * *". Reaching Contact completes the trace. */
  (function () {
    var t0 = performance.now();
    var hops = $$('[data-section]');
    var maxScroll = function () { return Math.max(1, document.documentElement.scrollHeight - window.innerHeight); };
    var reach = function (sec) {
      var k = hops.indexOf(sec);
      if (k < 0 || sec.hasAttribute('data-reached')) return;
      sec.setAttribute('data-reached', '');
      var hop = $('.hop', sec);
      if (!hop) return;
      var secs = (performance.now() - t0) / 1000, em = $('em', hop);
      if (em) em.textContent = (secs < 10 ? secs.toFixed(2) : secs.toFixed(1)) + ' s';
      hop.classList.add('is-reached');
      if (sec.id === 'contact') {
        var done = document.createElement('span'); done.className = 'hop__done'; done.textContent = 'trace complete · connection established';
        hop.appendChild(done);
        requestAnimationFrame(function () { requestAnimationFrame(function () { hop.classList.add('is-done'); }); });
      }
    };
    if ('IntersectionObserver' in window) {
      var tio = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) reach(x.target); }); }, { rootMargin: '-30% 0px -45% 0px' });
      hops.forEach(function (s) { tio.observe(s); });
      // the last section can sit low on tall screens: reaching the bottom of the page counts as reaching it
      window.addEventListener('scroll', function () { if (window.scrollY >= maxScroll() - 4) reach(hops[hops.length - 1]); }, { passive: true });
    } else hops.forEach(reach);
  })();

