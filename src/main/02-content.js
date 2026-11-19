  /* ---------------- content from data.js ---------------- */
  var C = D.contact;
  var linkFor = { email: 'mailto:' + C.email, github: C.github, linkedin: C.linkedin, facebook: C.facebook };
  $$('[data-link]').forEach(function (a) {
    var k = a.getAttribute('data-link');
    if (linkFor[k]) a.href = linkFor[k];
    if (k !== 'email') { a.target = '_blank'; a.rel = 'noopener'; }
  });
  $$('[data-text]').forEach(function (el) { el.textContent = C[el.getAttribute('data-text')] || ''; });
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  $$('[data-d]').forEach(function (el) { el.textContent = D[el.getAttribute('data-d')] || ''; });
  var statEl = $('[data-stat="projects"]');
  if (statEl) statEl.textContent = pad(D.stats.projects);

  var ICONS = {
    front: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M8 9l-2 2 2 2M16 9l2 2-2 2"/>',
    back: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    system: '<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
    client: '<path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM10 5h4v2h-4z"/><path d="M3 13h18"/>',
    ship: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    ai: '<path d="M10 3.5l1.6 4.4 4.4 1.6-4.4 1.6L10 15.5l-1.6-4.4L4 9.5l4.4-1.6z"/><path d="M18 13.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/><path d="M17.5 3v3M16 4.5h3"/>'
  };
  var GH = '<svg viewBox="0 0 24 24"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>';
  var tags = function (list) { return list.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join(''); };

  // Skills: four cards in a 2 x 2 grid + the security card
  var SHIELD = '<path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>';
  var drawable = function (svg) { return svg.replace(/<(rect|path|ellipse|circle)\b/g, '<$1 pathLength="100"'); };
  var html = '<div class="bento__grid">' + D.skills.map(function (s, i) {
    return '<article class="sk" data-card style="--i:' + i + '">' +
      '<div class="sk__top"><span class="sk__ico"><svg viewBox="0 0 24 24" aria-hidden="true">' + drawable(ICONS[s.icon] || ICONS.front) + '</svg></span><span class="sk__num" aria-hidden="true">' + pad(i + 1) + '</span></div>' +
      '<h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p>' + (s.tags && s.tags.length ? '<div class="sk__foot">' + tags(s.tags) + '</div>' : '') + '</article>';
  }).join('') + '</div>';
  if (D.security) html += '<article class="sk sk--sec" data-card style="--i:' + D.skills.length + '"><span class="sk__scan" aria-hidden="true"></span>' +
    '<div class="sk__top"><span class="sk__ico sk__ico--lg"><i class="sk__pulse"></i><i class="sk__pulse"></i><svg viewBox="0 0 24 24" aria-hidden="true">' + drawable(SHIELD) + '</svg></span><span class="sk__badge">EDGE</span></div>' +
    '<h3>' + esc(D.security.title) + '</h3>' + (D.security.text ? '<p>' + esc(D.security.text) + '</p>' : '') +
    '<ul class="sk__checks">' + D.security.points.map(function (x, j) { return '<li style="--j:' + j + '">' + esc(x) + '</li>'; }).join('') + '</ul></article>';
  $('[data-skills]').innerHTML = html;
  (function () {
    var bento = $('[data-skills]');
    // cards rise in one after another, icons draw themselves, the security checks slide in
    if (!reduced && 'IntersectionObserver' in window) {
      bento.classList.add('will-reveal');
      var skio = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { bento.classList.add('is-in'); skio.disconnect(); }
      }, { threshold: 0.12 });
      skio.observe(bento);
    }
    // a soft light follows the mouse across each card and its border
    if (finePointer) $$('.sk', bento).forEach(function (c) {
      c.addEventListener('pointermove', function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  })();

  // Now list
  var nowEl = $('[data-now]');
  if (nowEl && D.now) nowEl.innerHTML = D.now.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('');
  $$('[data-updated]').forEach(function (el) { el.textContent = D.updated || ''; });

  // Toolkit: one card per group, each with its own small animated icon
  var TK_ICONS = {
    // code brackets that breathe apart, with a blinking slash
    front: '<path class="tk-l" d="M8 7l-5 5 5 5"/><path class="tk-r" d="M16 7l5 5-5 5"/><path class="tk-c" d="M13.5 5l-3 14"/>',
    // database whose layers light up one after another, like data moving through it
    back: '<ellipse class="tk-d0" cx="12" cy="5.5" rx="7" ry="2.6"/><path d="M5 5.5v13c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-13"/><path class="tk-d1" d="M5 10c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6"/><path class="tk-d2" d="M5 14.4c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6"/>',
    // git branch: the branch line draws itself and the commits pulse in order
    tools: '<path d="M6 7.2v9.6"/><path class="tk-br" pathLength="100" d="M18 10.2c0 5-12 2.6-12 6.6"/><circle class="tk-n tk-n1" cx="6" cy="5" r="2.2"/><circle class="tk-n tk-n2" cx="18" cy="8" r="2.2"/><circle class="tk-n tk-n3" cx="6" cy="19" r="2.2"/>',
    // shield with a scan line passing through and a check that redraws
    security: '<path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6z"/><path class="tk-ok" pathLength="100" d="m8.8 12 2.2 2.2 4.2-4.4"/><path class="tk-scan" d="M7.5 8.5h9"/>'
  };
  var tkIcon = function (name) {
    var n = name.toLowerCase();
    return /secur/.test(n) ? 'security' : /tool|workflow/.test(n) ? 'tools' : /back|data/.test(n) ? 'back' : 'front';
  };
  var groups = D.toolkitGroups || [{ name: 'Toolkit', items: D.toolkit }];
  $('[data-toolkit]').innerHTML = groups.map(function (g, gi) {
    var all = (g.items || []).map(function (t) { return { t: t, fam: false }; }).concat((g.familiar || []).map(function (t) { return { t: t, fam: true }; }));
    var kind = tkIcon(g.name), nm = g.name.match(/^(.*?)\s*\((.+)\)\s*$/); // "Security (training & labs)" -> title + small subtitle
    return '<div class="stack__group tk tk--' + kind + '" style="--g:' + gi + '">' +
      '<div class="tk__head"><span class="tk__ico" aria-hidden="true"><svg viewBox="0 0 24 24">' + TK_ICONS[kind] + '</svg></span>' +
      '<h4>' + (nm ? esc(nm[1]) + '<small>' + esc(nm[2]) + '</small>' : esc(g.name)) + '</h4><span class="tk__count"><b>' + pad(all.length) + '</b><small>TOOLS</small></span></div>' +
      '<ul>' + all.map(function (x, k) { return '<li' + (x.fam ? ' class="is-fam"' : '') + ' style="--k:' + k + '">' + esc(x.t) + '</li>'; }).join('') + '</ul></div>';
  }).join('') + (groups.some(function (g) { return g.familiar && g.familiar.length; })
    ? '<p class="stack__legend"><span><i></i>Used in my projects</span><span><i class="is-fam"></i>Familiar / from training</span></p>' : '');
  (function () {
    var stack = $('.stack');
    if (!stack) return;
    // cards rise in, tool chips appear one by one, then the icons start moving
    if (!reduced && 'IntersectionObserver' in window) {
      stack.classList.add('will-reveal');
      var tkio = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { stack.classList.add('is-in'); tkio.disconnect(); }
      }, { threshold: 0.12 });
      tkio.observe(stack);
    }
    if (finePointer) $$('.tk', stack).forEach(function (c) {
      c.addEventListener('pointermove', function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  })();

  // Live preview clip markup (the video loads only when its project nears the screen)
  var previewHtml = function (p) {
    if (!p.preview) return '';
    return '<video class="preview" data-preview data-src="' + esc(p.preview) + '" muted loop playsinline disablepictureinpicture preload="none" aria-hidden="true" tabindex="-1"></video>' +
      '<button type="button" class="preview__badge" data-preview-btn aria-label="Play live preview of ' + esc(p.name) + '" hidden><i></i><span class="preview__txt">LIVE PREVIEW</span></button>';
  };

  // Projects
  $('[data-projects]').innerHTML = D.projects.map(function (p, i) {
    var media;
    if (p.layout === 'app') {
      var pShot = Math.min(p.previewShot == null ? 1 : p.previewShot, p.shots.length - 1);
      media = '<div class="apps">' + p.shots.map(function (s, j) {
        return '<figure class="app" data-reveal-item><div class="cut"><div class="cut__in"><button type="button" class="app__open" data-app-shot="' + j + '" aria-label="Enlarge ' + esc(s.label) + ' screenshot"><img decoding="async" src="' + esc(s.src) + '" alt="' + esc(p.name + ' — ' + s.label) + '" loading="lazy"></button>' + (j === pShot ? previewHtml(p) : '') + '</div></div><span>' + esc(s.label) + '</span></figure>';
      }).join('') + '</div>';
    } else {
      media = '<div class="frame cut" data-frame><div class="cut__in">' +
        '<div class="frame__bar"><i></i><i></i><i></i><span class="frame__path">' + esc(p.path || '') + '</span><span class="frame__label" data-shot-label>' + esc(p.shots[0].label) + '</span></div>' +
        '<div class="frame__screen">' + p.shots.map(function (s, j) {
          var sm = s.tall ? '' : ' srcset="' + esc(s.src.replace('.webp', '-sm.webp')) + ' 640w, ' + esc(s.src) + ' 1200w" sizes="(max-width: 700px) 100vw, 640px"';
          return '<img decoding="async" src="' + esc(s.src) + '"' + sm + ' alt="' + esc(p.name + ' — ' + s.label) + '" loading="lazy" class="' + (s.tall ? 'is-tall ' : '') + (j === 0 ? 'is-on' : '') + '">';
        }).join('') + previewHtml(p) + '<button type="button" class="frame__zoom" data-zoom aria-label="Enlarge screenshot"><svg viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>ENLARGE</button></div></div></div>' +
        '<div class="thumbs" role="tablist" aria-label="' + esc(p.name) + ' screenshots">' + p.shots.map(function (s, j) {
          return '<button type="button" class="thumb' + (j === 0 ? ' is-on' : '') + '" data-shot="' + j + '" role="tab" aria-selected="' + (j === 0) + '" aria-label="Show ' + esc(s.label) + '"><img decoding="async" src="' + esc(s.src) + '" alt="" loading="lazy"></button>';
        }).join('') + '</div>';
    }
    // With a live demo, "Live demo" is the main button and the code link sits beside it.
    var live = p.live
      ? '<a class="btn btn--solid btn--primary" href="' + esc(p.live) + '" target="_blank" rel="noopener">LIVE DEMO <span class="btn__ico"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"/></svg></span></a>'
      : '';
    var action = live + (p.github
      ? '<a class="btn btn--ghost" href="' + esc(p.github) + '" target="_blank" rel="noopener">' + GH + ' SOURCE CODE</a>'
      : '<span class="soon">SOURCE CODE COMING SOON</span>');
    if (p.ad) action += '<button type="button" class="btn btn--ghost" data-ad="' + i + '"><span class="btn__ico"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg></span> WATCH THE AD</button>';
    if (p.liveNote) action += '<span class="project__note">' + esc(p.liveNote) + '</span>';
    var statusClass = p.status === 'In development' ? 'development' : /^Working demo/.test(p.status || '') ? 'demo' : p.status === 'Local release candidate' ? 'local' : 'complete';
    return '<article class="project' + (p.layout === 'app' ? ' project--app' : '') + (p.featured ? ' project--featured' : '') + '" id="project-panel-' + i + '" data-project>' +
      '<div class="project__media">' + media + '</div>' +
      '<div class="project__body">' +
        '<div class="project__meta"><span class="project__num">' + pad(i + 1) + '</span>' + (p.featured ? '<span class="project__feat">FEATURED</span>' : '') + '<span class="project__kind">' + esc(p.kind) + '</span>' +
          '<span class="project__status project__status--' + statusClass + '"><i></i>' + esc(p.status || 'Complete') + '</span></div>' +
        '<h3 data-scramble-view>' + esc(p.name) + '</h3>' +
        '<p class="project__desc">' + esc(p.desc) + '</p>' +
        (p.facts ? '<ul class="pfacts">' + p.facts.map(function (f) { return '<li><b>' + esc(f[0]) + '</b><span>' + esc(f[1]) + '</span></li>'; }).join('') + '</ul>' : '') +
        '<ul class="feats' + (p.features.length > 3 ? ' is-collapsed' : '') + '">' + p.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
        (p.features.length > 3 ? '<button type="button" class="feats__more" aria-expanded="false">SHOW ALL ' + p.features.length + ' FEATURES</button>' : '') +
        '<div class="project__foot"><div class="project__tags">' + tags(p.tags) + '</div><div class="project__actions">' + action + '</div></div>' +
      '</div>' +
      (p.learned ? '<div class="learned"><span>WHAT I LEARNED //</span><p>' + esc(p.learned) + '</p></div>' : '') +
    '</article>';
  }).join('');

  // Keep every real project and gallery mounted, with a keyboard-accessible index.
  var projectPanels = $$('[data-project]');
  if (projectPanels.length > 1) {
    var projectIndex = document.createElement('div');
    projectIndex.className = 'project-index';
    projectIndex.innerHTML = '<p class="project-index__label" id="project-index-label">SELECT A PROJECT <span aria-hidden="true">' + pad(projectPanels.length) + ' PROJECTS</span></p><div class="project-index__list" role="tablist" aria-labelledby="project-index-label">' + D.projects.map(function (p, i) {
      return '<button type="button" class="project-index__item" role="tab" id="project-tab-' + i + '" aria-controls="project-panel-' + i + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? '0' : '-1') + '"><img decoding="async" src="' + esc(p.shots[0].src) + '" alt="" width="240" height="135" loading="lazy"><strong>' + esc(p.name) + '</strong><span>' + esc(p.kind) + '</span><small>' + esc(p.statusShort || p.status || 'Complete') + '</small></button>';
    }).join('') + '</div>';
    $('[data-projects]').insertAdjacentElement('beforebegin', projectIndex);
    var projectTabs = $$('.project-index__item', projectIndex);
    projectPanels.forEach(function (p, i) {
      p.setAttribute('role', 'tabpanel');
      p.setAttribute('aria-labelledby', 'project-tab-' + i);
      p.setAttribute('tabindex', '0');
      p.hidden = i !== 0;
    });
    var selectProject = function (index) {
      projectPanels.forEach(function (p, i) {
        p.hidden = i !== index;
        if (i !== index) $$('[data-preview]', p).forEach(function (v) { v.pause(); });
      });
      projectTabs.forEach(function (b, i) {
        b.setAttribute('aria-selected', i === index ? 'true' : 'false');
        b.tabIndex = i === index ? 0 : -1;
      });
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    };
    // After choosing a project, bring its panel up under the top menu (like a section jump).
    var scrollToProject = function (index) {
      var panel = projectPanels[index];
      requestAnimationFrame(function () {
        var nav = $('.nav'), navH = nav ? nav.getBoundingClientRect().height : 80;
        var offset = -(navH + 24);
        if (reduced || !lenis || !glideTo(panel, offset)) {
          var y = window.scrollY + panel.getBoundingClientRect().top + offset;
          window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
        }
      });
    };
    projectTabs.forEach(function (b, i) {
      b.addEventListener('click', function () { selectProject(i); scrollToProject(i); });
      b.addEventListener('keydown', function (e) {
        var next = e.key === 'ArrowRight' ? (i + 1) % projectTabs.length : e.key === 'ArrowLeft' ? (i + projectTabs.length - 1) % projectTabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? projectTabs.length - 1 : -1;
        if (next < 0) return;
        e.preventDefault(); selectProject(next); projectTabs[next].focus();
      });
    });
  }

  // Feature list toggle (phones)
  $$('.feats__more').forEach(function (b) {
    var list = b.previousElementSibling, label = b.textContent;
    b.addEventListener('click', function () {
      var open = list.classList.toggle('is-collapsed') === false;
      b.setAttribute('aria-expanded', open); b.textContent = open ? 'SHOW FEWER' : label;
    });
  });

  // Gallery switching
  var activeShot = {};
  $$('[data-project]').forEach(function (proj, pi) {
    activeShot[pi] = 0;
    $$('[data-app-shot]', proj).forEach(function (b) { b.addEventListener('click', function () { openViewer(pi, +b.getAttribute('data-app-shot'), b); }); });
    var frame = $('[data-frame]', proj);
    if (!frame) return;
    var zoom = $('[data-zoom]', frame);
    zoom.addEventListener('click', function (e) { e.stopPropagation(); openViewer(pi, activeShot[pi], zoom); });
    $('.frame__screen', frame).addEventListener('click', function () { openViewer(pi, activeShot[pi], zoom); });
    var imgs = $$('.frame__screen img', frame), thumbs = $$('.thumb', proj), label = $('[data-shot-label]', frame);
    thumbs.forEach(function (t) {
      t.addEventListener('click', function () {
        var j = +t.getAttribute('data-shot'); activeShot[pi] = j;
        imgs.forEach(function (im, k) { im.classList.toggle('is-on', k === j); im.setAttribute('aria-hidden', k === j ? 'false' : 'true'); });
        thumbs.forEach(function (b, k) { b.classList.toggle('is-on', k === j); b.setAttribute('aria-selected', k === j); });
        var txt = D.projects[pi].shots[j].label;
        if (animate) scramble(label, txt.toUpperCase(), 0.5); else label.textContent = txt;
      });
    });
    imgs.forEach(function (im, k) { im.setAttribute('aria-hidden', k === 0 ? 'false' : 'true'); });
    thumbs.forEach(function (t, i) {
      t.tabIndex = i === 0 ? 0 : -1;
      t.addEventListener('click', function () { thumbs.forEach(function (b) { b.tabIndex = b === t ? 0 : -1; }); });
      t.addEventListener('keydown', function (e) {
        var j = e.key === 'ArrowRight' ? (i + 1) % thumbs.length : e.key === 'ArrowLeft' ? (i + thumbs.length - 1) % thumbs.length : e.key === 'Home' ? 0 : e.key === 'End' ? thumbs.length - 1 : -1;
        if (j < 0) return;
        e.preventDefault(); thumbs[j].click(); thumbs[j].focus();
      });
    });
  });

