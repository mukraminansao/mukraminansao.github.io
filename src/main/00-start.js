/* =========================================================
   MUKRAMIN.DEV — rendering + interactions + animations
   Content lives in js/data.js
   Built from src/main/*.js: edit those files, then run  node src/build-main.mjs
   ========================================================= */
(function () {
  'use strict';
  var D = window.PORTFOLIO;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };


