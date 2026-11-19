  /* ---------------- interface sounds (always on, made in the browser: no audio files) ---------------- */
  var SFX = (function () {
    var ctx = null, out = null, echo = null, on = false, last = {}, armed = false;
    // browsers only allow sound after the visitor's first click, tap or key press (hover and scroll don't count),
    // so the audio engine starts on that first interaction and every sound after it plays, hover included
    // sounds are switched off site-wide (a calm, quiet site); set this to true to bring them back
    on = false;
    var arm = function () { armed = true; };
    ['pointerdown', 'keydown', 'touchend'].forEach(function (t) { window.addEventListener(t, arm, { capture: true, passive: true }); });
    function init() {
      if (ctx) return true;
      var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
      ctx = new AC();
      out = ctx.createGain(); out.gain.value = 0.8;
      var comp = ctx.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 4; // keeps every sound at a steady, safe level
      // short digital echo gives the "inside a machine" feel
      echo = ctx.createDelay(0.5); echo.delayTime.value = 0.085;
      var fb = ctx.createGain(), wet = ctx.createGain(); fb.gain.value = 0.28; wet.gain.value = 0.22;
      var tone = ctx.createBiquadFilter(); tone.type = 'lowpass'; tone.frequency.value = 3800;
      echo.connect(tone); tone.connect(fb); fb.connect(echo); tone.connect(wet); wet.connect(comp);
      out.connect(comp); out.connect(echo); comp.connect(ctx.destination);
      return true;
    }
    /* one synth voice: oscillator (optionally FM for a metallic, robotic tone) -> filter sweep -> fast envelope */
    function voice(o) {
      var t = ctx.currentTime + (o.at || 0), d = o.dur;
      var osc = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
      osc.type = o.type || 'square';
      osc.frequency.setValueAtTime(o.f1, t);
      if (o.f2 && o.f2 !== o.f1) osc.frequency.exponentialRampToValueAtTime(o.f2, t + d);
      if (o.fm) { // frequency modulation
        var m = ctx.createOscillator(), mg = ctx.createGain();
        m.frequency.value = o.f1 * o.fm[0]; mg.gain.value = o.f1 * o.fm[1];
        m.connect(mg); mg.connect(osc.frequency); m.start(t); m.stop(t + d + 0.05);
      }
      f.type = o.ft || 'lowpass'; f.Q.value = o.q || 6;
      f.frequency.setValueAtTime(o.c1 || 4000, t);
      if (o.c2) f.frequency.exponentialRampToValueAtTime(o.c2, t + d);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(o.vol, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      osc.connect(f); f.connect(g); g.connect(out);
      osc.start(t); osc.stop(t + d + 0.05);
    }
    function noise(o) {
      var t = ctx.currentTime + (o.at || 0), n = Math.floor(ctx.sampleRate * o.dur), buf = ctx.createBuffer(1, n, ctx.sampleRate), dd = buf.getChannelData(0);
      for (var i = 0; i < n; i++) dd[i] = (Math.random() * 2 - 1) * (o.swell ? Math.pow(Math.sin(Math.PI * i / n), 2) : Math.pow(1 - i / n, 2));
      var src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
      src.buffer = buf; f.type = 'bandpass'; f.Q.value = o.q || 2; g.gain.value = o.vol;
      f.frequency.setValueAtTime(o.freq || 3000, t);
      if (o.f2) f.frequency.exponentialRampToValueAtTime(o.f2, t + o.dur);
      src.connect(f); f.connect(g); g.connect(out); src.start(t);
    }
    var pick = function (a) { return a[(Math.random() * a.length) | 0]; };
    var SOUNDS = {
      // hovering a button: a tiny robotic "bip-bip"
      hover: function () { var n = pick([1320, 1480, 1760]); voice({ f1: n, dur: 0.035, vol: 0.05, fm: [2.01, 0.6], c1: 5000, q: 2 }); voice({ f1: n * 1.5, dur: 0.035, vol: 0.04, fm: [2.01, 0.6], c1: 5000, q: 2, at: 0.045 }); },
      // hovering a menu link: a quick data chirp that matches the text scramble
      chirp: function () { [0, 1, 2].forEach(function (k) { voice({ f1: pick([1100, 1400, 1700, 2100, 2500]), dur: 0.028, vol: 0.04, fm: [3.01, 0.9], c1: 4500, q: 3, at: k * 0.034 }); }); },
      // clicking: a short laser "tchew"
      click: function () { noise({ dur: 0.012, vol: 0.12, freq: 4200 }); voice({ type: 'square', f1: 1150, f2: 210, dur: 0.12, vol: 0.09, c1: 4200, c2: 380, q: 10 }); },
      // switching screenshots: a glitchy data shift
      shift: function () { [0, 1, 2].forEach(function (k) { voice({ type: 'square', f1: pick([600, 900, 1300, 1800, 2400]), dur: 0.018, vol: 0.05, c1: 3500, q: 2, at: k * 0.022 }); }); },
      // opening a panel (viewer, menu, terminal): rising sweep + confirmation blips
      open: function () { voice({ type: 'sawtooth', f1: 160, f2: 1400, dur: 0.2, vol: 0.06, c1: 300, c2: 5000, q: 9 }); voice({ f1: 1760, dur: 0.05, vol: 0.05, fm: [2, 0.5], at: 0.17 }); voice({ f1: 2640, dur: 0.07, vol: 0.04, fm: [2, 0.5], at: 0.22 }); },
      // closing a panel: falling sweep
      close: function () { voice({ type: 'sawtooth', f1: 1300, f2: 140, dur: 0.18, vol: 0.055, c1: 5000, c2: 300, q: 9 }); },
      // typing in the terminal
      key: function () { voice({ type: 'square', f1: pick([1800, 2000, 2200, 2400]), dur: 0.016, vol: 0.035, c1: 4000, q: 1 }); noise({ dur: 0.01, vol: 0.05, freq: 5000 }); },
      // copying the email: "data saved"
      copy: function () { voice({ f1: 1320, dur: 0.05, vol: 0.06, fm: [2, 0.4] }); voice({ f1: 1980, dur: 0.05, vol: 0.06, fm: [2, 0.4], at: 0.06 }); voice({ f1: 2640, dur: 0.09, vol: 0.05, fm: [2, 0.4], at: 0.12 }); },
      // message sent: a bright synth arpeggio
      success: function () { [523, 659, 784, 1047, 1568].forEach(function (n, k) { voice({ type: 'square', f1: n, dur: 0.11, vol: 0.05, c1: 2800, c2: 1200, q: 4, at: k * 0.07 }); }); },
      // something is wrong: low robotic buzz
      error: function () { voice({ type: 'sawtooth', f1: 150, f2: 110, dur: 0.22, vol: 0.07, fm: [0.5, 2], c1: 1400, c2: 500, q: 6 }); },
      // turning sound on: system boot
      power: function () { voice({ type: 'sawtooth', f1: 90, f2: 1800, dur: 0.32, vol: 0.06, c1: 200, c2: 6000, q: 12 }); [0, 1, 2, 3].forEach(function (k) { voice({ f1: [880, 1320, 1760, 2640][k], dur: 0.05, vol: 0.045, fm: [2, 0.5], at: 0.3 + k * 0.05 }); }); },
      // a project appearing: a hologram "materializing" (filtered whoosh opening up) + a data blip as its title scrambles
      materialize: function () {
        noise({ dur: 0.55, vol: 0.09, freq: 400, f2: 5200, q: 3, swell: true });
        voice({ type: 'sawtooth', f1: 110, f2: 440, dur: 0.5, vol: 0.025, c1: 250, c2: 2600, q: 8 });
        voice({ f1: 1760, dur: 0.04, vol: 0.035, fm: [2.01, 0.6], at: 0.38 });
        voice({ f1: 2640, dur: 0.06, vol: 0.03, fm: [2.01, 0.6], at: 0.43 });
      },
      // entering a new section while scrolling: a soft radar ping
      ping: function () { voice({ type: 'sine', f1: 1900, f2: 1850, dur: 0.16, vol: 0.03, c1: 6000, q: 1 }); }
    };
    var GAP = { hover: 70, chirp: 110, key: 25, ping: 400, shift: 60, materialize: 350 };
    function run(name) { try { SOUNDS[name](); } catch (e) {} }
    function play(name) {
      if (!on || !armed || !init()) return;
      var now = Date.now();
      if (GAP[name] && now - (last[name] || 0) < GAP[name]) return;
      last[name] = now;
      if (ctx.state === 'suspended') { ctx.resume().then(function () { if (Date.now() - now < 300) run(name); }); return; }
      run(name);
    }
    function set(v) {
      on = v;
      $$('[data-sound-toggle]').forEach(function (b) {
        b.setAttribute('aria-pressed', v); b.classList.toggle('is-on', v);
        b.setAttribute('aria-label', v ? 'Turn interface sounds off' : 'Turn interface sounds on');
      });
      if (v) play('power');
    }
    return { play: play, set: set, isOn: function () { return on; } };
  })();

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var hasGsap = !!(window.gsap && window.ScrollTrigger);
  var animate = hasGsap && !reduced;

