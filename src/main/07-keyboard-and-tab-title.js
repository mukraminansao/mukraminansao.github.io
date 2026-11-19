  /* ---------------- keyboard shortcuts: 1–8 jump to sections, ? shows the list ---------------- */
  var keysBox = $('.keys'), sectionsByKey = $$('main [data-section]');
  if (keysBox) {
    $('.keys__list', keysBox).innerHTML = sectionsByKey.map(function (sec, i) {
      var name = sec.id === 'home' ? 'Home' : sec.id === 'why' ? 'Why work with me' : sec.id.charAt(0).toUpperCase() + sec.id.slice(1);
      return '<li><kbd>' + (i + 1) + '</kbd><span>' + esc(name) + '</span></li>';
    }).join('') + '<li><kbd>~</kbd><span>Terminal</span></li><li><kbd>?</kbd><span>This list</span></li><li><kbd>Esc</kbd><span>Close</span></li>';
  }
  function openKeys() { if (!keysBox) return; keysBox.hidden = false; SFX.play('open'); $('.keys__close', keysBox).focus(); }
  function closeKeys() { if (!keysBox || keysBox.hidden) return; keysBox.hidden = true; SFX.play('close'); }
  if (keysBox) {
    $('.keys__close', keysBox).addEventListener('click', closeKeys);
    keysBox.addEventListener('click', function (e) { if (e.target === keysBox) closeKeys(); });
  }
  $$('[data-open-keys]').forEach(function (b) { b.addEventListener('click', openKeys); });
  function sectionOffset(id) {
    return id === 'home' || id === 'about' ? 0 : -80;
  }
  /* Smooth, light section jumps: short trips glide all the way; long trips skip the middle
     instantly and glide the last stretch, so the browser never has to draw a dozen screens
     of content in one second (that is what made long jumps stutter). */
  function glideTo(el, offset) {
    if (!lenis) return false;
    var vh = window.innerHeight;
    var target = window.scrollY + el.getBoundingClientRect().top + (offset || 0);
    var dist = target - window.scrollY, far = vh * 1.6;
    if (Math.abs(dist) > far * 1.25) {
      lenis.scrollTo(target - (dist > 0 ? far : -far), { immediate: true, force: true });
      dist = dist > 0 ? far : -far;
    }
    var duration = Math.min(0.85, Math.max(0.45, 0.35 + Math.abs(dist) / vh * 0.28));
    lenis.scrollTo(target, { duration: duration, easing: function (t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }, force: true });
    return true;
  }
  function goToSection(sec) {
    if (!sec) return;
    var hash = '#' + sec.id;
    if (location.hash !== hash) history.pushState(null, '', hash);
    var offset = sectionOffset(sec.id);
    if (glideTo(sec, offset)) return;
    window.scrollTo({ top: window.scrollY + sec.getBoundingClientRect().top + offset, behavior: reduced ? 'instant' : 'smooth' });
  }
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var el = document.activeElement;
    if (el && (/INPUT|TEXTAREA|SELECT/.test(el.tagName) || el.isContentEditable)) return;
    if (!term.hidden || !lb.hidden || document.body.classList.contains('menu-open')) return;
    if (e.key === 'Escape') { closeKeys(); return; }
    if (e.key === '?') { e.preventDefault(); keysBox && keysBox.hidden ? openKeys() : closeKeys(); return; }
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= sectionsByKey.length) { closeKeys(); SFX.play('shift'); goToSection(sectionsByKey[n - 1]); }
  });

  /* ---------------- tab title when the visitor switches away ---------------- */
  var baseTitle = document.title, titleT;
  document.addEventListener('visibilitychange', function () {
    clearTimeout(titleT);
    if (document.hidden) document.title = '⟡ Signal lost… come back';
    else { document.title = '⟡ Connection restored'; titleT = setTimeout(function () { document.title = baseTitle; }, 1600); }
  });

