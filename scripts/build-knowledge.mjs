// Builds ai/knowledge.md — the only facts the portfolio chatbot is allowed to use.
// It reads js/data.js (projects, skills, journey, certificates, contact) and the
// About text in index.html, so the bot stays in sync with the site.
//
// Run after changing js/data.js or the About text:
//   node scripts/build-knowledge.mjs
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'js/data.js'), 'utf8'), sandbox);
const D = sandbox.window.PORTFOLIO;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const text = (s) => String(s || '')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'").replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ').trim();
const grab = (re) => { const m = html.match(re); return m ? text(m[1]) : ''; };

const lead = grab(/<p class="about__lead"[^>]*>([\s\S]*?)<\/p>/);
const story = grab(/<details class="profile__story">[\s\S]*?<p>([\s\S]*?)<\/p>/);
const C = D.contact, E = D.education;
const out = [];
const add = (...l) => out.push(...l);

add('# Mukramin Ansao — portfolio facts', '',
  'Everything below is verified information from Mukramin\'s portfolio website (https://mukraminansao.github.io). Use only these facts.', '');

add('## About', '',
  '- Name: Mukramin Bariwa Ansao (goes by Mukramin)',
  '- Roles: Web & App Developer, UI/UX Designer, Blue Team / SOC Analyst Enthusiast',
  `- ${lead}`, `- ${story}`,
  `- Location: ${C.location}, Philippines (originally from Jolo, Sulu)`,
  `- Availability: ${D.availability}`,
  `- Languages: ${D.languages}`,
  '- Status: open to web and app developer roles (trainee, junior or full-time) and freelance projects', '');

add('## Contact', '',
  `- Email: ${C.email}`, `- LinkedIn: ${C.linkedin}`, `- GitHub: ${C.github}`, `- Facebook: ${C.facebook}`,
  '- CV (PDF): https://mukraminansao.github.io/assets/Mukramin_Ansao_CV.pdf',
  '- Contact form: the "Contact" section at the bottom of the portfolio. He usually replies within a day.', '');

add('## Education', '',
  `- ${E.degree}, ${E.major} — ${E.school} (${E.years})`,
  `- Honor: ${E.honor} (${E.honorNote})`,
  ...E.awards.map((a) => `- ${a}`), '');

add('## Currently working on', '', ...D.now.map((n) => `- ${n}`), '');

add('## Skills', '');
D.skills.forEach((s) => add(`- ${s.title}: ${s.text} (${s.tags.join(', ')})`));
add(`- ${D.security.title}: ${D.security.text}`, ...D.security.points.map((p) => `  - ${p}`), '');

add('## Toolkit', '');
D.toolkitGroups.forEach((g) => {
  if (g.items.length) add(`- ${g.name} — used in his projects: ${g.items.join(', ')}`);
  if (g.familiar.length) add(`- ${g.name} — familiar / from training: ${g.familiar.join(', ')}`);
});
add('');

add(`## Projects (${D.projects.length})`, '');
D.projects.forEach((p, i) => {
  add(`### ${i + 1}. ${p.name} — ${p.kind}`,
    `- Status: ${p.status || 'Complete'}${p.featured ? ' (featured project)' : ''}`,
    `- What it is: ${p.desc}`);
  if (p.facts) add(`- Key numbers: ${p.facts.map((f) => `${f[0]} ${f[1]}`).join('; ')}`);
  add('- Features:', ...p.features.map((f) => `  - ${f}`),
    `- Built with: ${p.tags.join(', ')}`);
  if (p.learned) add(`- What he learned: ${p.learned}`);
  if (p.live) add(`- Live demo: ${p.live}${p.liveNote ? ` (${p.liveNote})` : ''}`);
  add(`- Source code: ${p.github || 'not public yet'}`, '');
});

add('## Experience and journey', '');
D.journey.forEach((j) => {
  add(`- ${j.when} — ${j.title} (${j.kind}), ${j.org}: ${j.text}`);
  (j.bullets || []).forEach((b) => add(`  - ${b}`));
});
add('');

add('## Certificates', '');
D.certifications.forEach((c) => add(`- ${c.title} — ${c.issuer}, ${c.date}. ${c.note} Verify: ${c.verify}`));
add('');

add('## Why work with him', '');
D.why.forEach((w) => add(`- ${w.title}: ${w.text}`));
add('', `_Last updated: ${D.updated}_`, '');

fs.mkdirSync(path.join(root, 'ai'), { recursive: true });
fs.writeFileSync(path.join(root, 'ai/knowledge.md'), out.join('\n'));
console.log(`ai/knowledge.md written: ${out.join('\n').length} characters, ${D.projects.length} projects`);
