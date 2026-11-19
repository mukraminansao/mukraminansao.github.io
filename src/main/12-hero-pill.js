
/* Hide the floating MINI-X pill while the hero is on screen (see css/mini-x.css: body.at-hero).
   Plain scroll/resize check (no IntersectionObserver) so it also works in background tabs and older browsers. */
(function () {
  var hero = document.getElementById('home');
  if (!hero) return;
  function update() {
    var r = hero.getBoundingClientRect();
    var visible = Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0));
    document.body.classList.toggle('at-hero', r.height > 0 && visible > r.height * 0.35);
  }
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
})();
