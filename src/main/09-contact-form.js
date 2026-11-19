  /* ---------------- contact form ---------------- */
  var form = $('.form'), status = $('.form__status'), sendBtn = $('.form__submit'), doneBox = $('.form-done');
  var msg = form.message, counter = $('[data-count-msg]'), MAX = +msg.getAttribute('maxlength');
  var updateCount = function () { counter.textContent = msg.value.length + ' / ' + MAX; };
  msg.addEventListener('input', updateCount); updateCount();
  var RULES = {
    name: function (v) { return v.length >= 2 ? '' : 'Please enter your full name.'; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Please enter a valid email address, like name@company.com.'; },
    topic: function (v) { return v ? '' : 'Please choose what your message is about.'; },
    message: function (v) { return v.length >= 20 ? '' : 'Please write at least 20 characters so I can understand your request.'; }
  };
  function check(name) {
    var el = form[name], err = RULES[name](el.value.trim()), box = $('#err-' + name);
    el.setAttribute('aria-invalid', err ? 'true' : 'false');
    el.closest('.field').classList.toggle('is-invalid', !!err);
    box.textContent = err; return !err;
  }
  Object.keys(RULES).forEach(function (n) {
    form[n].addEventListener('blur', function () { if (form[n].value.trim()) check(n); });
    form[n].addEventListener('input', function () { if (form[n].closest('.field').classList.contains('is-invalid')) check(n); });
  });
  function setBusy(b) { sendBtn.disabled = b; sendBtn.classList.toggle('is-busy', b); $('.form__submit-label').textContent = b ? 'Sending…' : 'Send message'; }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = ''; status.classList.remove('is-error');
    var firstBad = null;
    Object.keys(RULES).forEach(function (n) { if (!check(n) && !firstBad) firstBad = form[n]; });
    if (firstBad) { if (firstBad === form.topic && chips.length) chips[0].focus(); else firstBad.focus(); SFX.play('error'); return; }
    if (form._gotcha.value) return; // spam bot filled the hidden field
    var data = { name: form.name.value.trim(), email: form.email.value.trim(), company: form.company.value.trim(), topic: form.topic.value, message: msg.value.trim() };
    if (C.formEndpoint) {
      setBusy(true);
      fetch(C.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error(); form.hidden = true; doneBox.hidden = false; $('[data-done-name]').textContent = data.name.split(' ')[0]; doneBox.focus(); SFX.play('success'); track('contact-sent', 'Sent a contact message'); })
        .catch(function () { status.textContent = 'Your message could not be sent right now. Please try again, or email me directly at ' + C.email + '.'; status.classList.add('is-error'); SFX.play('error'); })
        .then(function () { setBusy(false); });
    } else {
      var subject = encodeURIComponent(data.topic + ' — ' + data.name + (data.company ? ' (' + data.company + ')' : ''));
      var body = encodeURIComponent(data.message + '\n\n' + data.name + '\n' + data.email + (data.company ? '\n' + data.company : ''));
      track('contact-email-app', 'Contact form opened email app');
      window.location.href = 'mailto:' + C.email + '?subject=' + subject + '&body=' + body;
      status.textContent = 'Your email app should open with this message filled in. If it doesn\u2019t, email me at ' + C.email + '.';
    }
  });
  $('[data-send-another]').addEventListener('click', function () { form.reset(); updateCount(); syncChips(); doneBox.hidden = true; form.hidden = false; form.name.focus(); });

  /* subject chips: tapping one sets the (hidden) subject select the form already validates */
  var chipBox = $('[data-topic-chips]'), chips = chipBox ? $$('[data-topic]', chipBox) : [];
  function syncChips() {
    var v = form.topic.value;
    chips.forEach(function (c, i) {
      var on = c.getAttribute('data-topic') === v;
      c.setAttribute('aria-checked', on ? 'true' : 'false');
      c.tabIndex = on || (!v && i === 0) ? 0 : -1;
    });
  }
  function pickChip(c) {
    form.topic.value = c.getAttribute('data-topic');
    form.topic.dispatchEvent(new Event('input', { bubbles: true }));
    form.topic.dispatchEvent(new Event('change', { bubbles: true }));
    syncChips(); check('topic');
  }
  chips.forEach(function (c, i) {
    c.addEventListener('click', function () { pickChip(c); });
    c.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      var n = chips[(i + d + chips.length) % chips.length]; n.focus(); pickChip(n);
    });
  });
  syncChips();

  /* contact panel: my local time, kept fresh */
  (function () {
    var el = $('[data-contact-time]'); if (!el) return;
    var tick = function () {
      try { el.textContent = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Manila', hour: 'numeric', minute: '2-digit' }).format(new Date()) + ' · UTC+8'; } catch (e) {}
    };
    tick(); setInterval(tick, 30000);
  })();

