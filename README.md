# MUKRAMIN.DEV — Portfolio

Personal portfolio of **Mukramin B. Ansao**, web developer (BSIT Cum Laude 2026).
Plain HTML, CSS and JavaScript, with GSAP for animation. No build step.

## Folder layout

```
index.html            page structure
css/style.css         all styling (colors are variables at the top)
js/data.js            ALL editable content: projects, skills, toolkit, journey, contact
js/main.js            renders data.js + animations
assets/img/           photos and project screenshots (WebP)
assets/video/         short live-preview clips of each project (MP4)
assets/Mukramin_Ansao_CV.pdf   the "Download CV" file
js/chat.js, css/chat.css       Mini-X’s portfolio chat
ai/knowledge.md       facts the assistant may use (built by scripts/build-knowledge.mjs)
worker/               the Cloudflare Worker behind the assistant (setup: worker/README.md)
```

## Updating content

Open `js/data.js`:

- **New project:** copy one object in `projects`, change the text, and put its screenshots in `assets/img/`. Use `layout: 'desktop'` for browser screenshots or `layout: 'app'` for three tall app screens. Set `github: ''` to show "Repo coming soon".
- **New tool:** add its name to `toolkit`.
- **New experience:** add an entry to `journey` (newest first).
- **New certificate:** save the certificate image as `assets/img/cert_NAME.webp` (plus a smaller `cert_NAME-sm.webp`), then copy one object in `certifications` (newest first) and set `verify` to its official Credly / Coursera / issuer link.
- **Availability and languages:** edit `availability` and `languages`. They appear in About, the "Why work with me" box and Contact.
- **Why work with me:** edit the three points in `why`. Keep each one backed by something on the page and link to it.
- **Hero project count:** change `stats.projects`.
- **AI assistant:** after editing `js/data.js` or the About text, run `node scripts/build-knowledge.mjs` so the assistant knows the change. Setup steps are in `worker/README.md`.
- **New CV:** replace `assets/Mukramin_Ansao_CV.pdf` (keep the same file name).

## Live preview clips (screenshots that move)

Each project can have a short silent clip that plays inside its screenshot frame,
automatically while the project is on screen (desktop and phones).
A **LIVE PREVIEW** badge appears on the frame (it also plays / pauses the clip when clicked).
Visitors with reduced motion or data saver turned on only get the clip when they tap the badge.

The clips are already set up in `js/data.js` (`preview: 'assets/video/NAME.mp4'`).
**Until a file exists, nothing shows**, so you can add them one at a time:

| File | What to record (6–10 s, one smooth action) |
|---|---|
| `assets/video/teachwise.mp4` | Student opens a class and rates a teacher, or teacher dashboard → full report |
| `assets/video/padala.mp4` | Pick a folder → "only 2 files changed" → transfer with Dala flying the package |
| `assets/video/booktrack.mp4` | Member searches a book → borrows it → it shows in "My loans" |
| `assets/video/servease.mp4` | Customer picks a service → selects a pro → books it |
| `assets/video/katribo.mp4` | Home → menu → milkshakes → a drink's sizes |
| `assets/video/formtech.mp4` | Scroll through the storefront home page |
| `assets/video/dokyu.mp4` | Doki's guided tour on the home screen (phone-shaped, 600 × 960) |

**Recording tips**

- Use a clean browser window: 100% zoom, no bookmarks bar, demo data that looks real.
- TeachWise, BookTrack, Servease: make the page area about **1280 × 768** (the frame is wide, and the clip is trimmed from the bottom if it is taller).
- Padala: record a tall phone-shaped view, about **400 × 610** (Chrome DevTools → device toolbar → Responsive).
- Start on the same screen as the project's first screenshot and end near where you started, so the loop and the fade-in look smooth.
- Move the mouse slowly and pause half a second after each click. No sound is needed (it is removed anyway).
- Windows: Snipping Tool (`Win + Shift + S` → Record) or Xbox Game Bar (`Win + G`) both work; OBS gives the most control.

**Shrink each clip before adding it** (aim for under 1.5 MB) with [HandBrake](https://handbrake.fr) or ffmpeg:

```
ffmpeg -i raw.mp4 -t 10 -vf "scale=1280:-2,fps=30" -an -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart teachwise.mp4
```

For Padala use `scale=600:-2`. Keep the file names exactly as in the table.
To show a clip in a different Padala phone window, change `previewShot` (0, 1 or 2) in `js/data.js`.

## Mini-X (3D robot companion)

A real rigged 3D character that flies over the page, boosts ahead during sustained scrolling, and fights viruses.
Click empty space to spawn a virus at that exact point, or press and hold for a boss.
Mini-X stays on the right between fights. During a battle he mixes ranged fire and retreats with brief approaches, slow-motion dodges, and a charged two-hand blast.
He can also trade places with a virus (Amenotejikara: a plain cast, then a held slow-motion beat with a negative flash and a dark blur), and blink above or behind a virus to land a Rasengan in slow motion.
Other skills: Katon: Goukakyuu no Jutsu (hand seals, a deep breath, then a fireball from his mouth), Amaterasu (his eyes turn red and a red eye sigil flashes over a negative of the page, then inked black flames burn the virus until it is destroyed),
and a Kamehameha fired into a virus' back after teleporting behind it. A dodged lunge carries on past its target instead of pulling back.
Chibaku Tensei: when a crowd closes in on him (or when he feels like it) he throws a gravity core into the middle of the viruses,
drags them into a sphere of rock that crushes them, and the sphere bursts after a few seconds; he either waits for it, Kamehamehas it from where he is, or teleports to the far side of the screen and Kamehamehas it from there, which sets it off early and much harder.
Up to 5 viruses (plus one boss) can be on screen at once, and Mini-X has 30 health so he can hold out against a full crowd. Kills in quick succession trigger a DOUBLE KILL / TRIPLE KILL / ULTRA KILL / RAMPAGE announcer (sound + banner).
Click Mini-X to ask about Mukramin. Open the **MINI-X** menu on the right to chat, hide the character, adjust battles or motion, or enable sound effects.

- Runtime: `js/mini-x/mini-x.js`, `css/mini-x.css`, models in `assets/mini-x/`
- Source, Blender files, review renders, status and rebuild steps: `mini-x-3d/README.md`
- 3D inspection page: `mini-x-3d/preview.html`

## Animation libraries

GSAP 3.12.5, ScrollTrigger and Lenis 1.1.13 are bundled in `js/vendor/`, so the site does not depend on outside servers.
If a file there is ever missing, the page falls back to the online CDN automatically.

## Keyboard shortcuts and terminal

- `1`–`8` jump to each section, `?` shows the shortcuts list.
- `~` (or the TERMINAL button in the footer) opens the terminal. Try `help`, `hack`, `matrix`, `resume`.

## Link preview image

`assets/img/og.jpg` (1200 × 630) is the picture shown when the site link is shared on LinkedIn, Facebook or Messenger.
After changing it, paste the site link into https://www.linkedin.com/post-inspector/ to refresh LinkedIn's copy.

## Interface sounds

Interface sounds are **switched off** so the site stays quiet. The sound code is still in `js/main.js`:
to bring it back, change `on = false;` to `on = true;` near the top of the file.

## Contact form

By default the form opens the visitor's email app with the message filled in.
To receive messages directly in Gmail instead:

1. Create a free account at formspree.io and make a new form with mukraminansao@gmail.com.
2. Copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `contact.formEndpoint` in `js/data.js`.

## Publishing (GitHub Pages)

The live site is **https://mukraminansao.github.io/**, served free by GitHub Pages from the
`main` branch of this repository. GitHub republishes it automatically after every push, usually within a minute or two.
The `.nojekyll` file tells GitHub to serve the files exactly as they are.

To publish a change, update the files in the GitHub repository (commit and push, or upload them on github.com).

**Never upload the `_backups` folder.** It holds local undo copies only. The `.gitignore` file keeps it out
automatically when you use Git or GitHub Desktop; if you upload on github.com, just don't select it.

After publishing a new link preview image (`assets/img/og.jpg`), paste the site link into
https://www.linkedin.com/post-inspector/ so LinkedIn shows the new picture.

## Run locally

Open the folder in VS Code and use the Live Server extension, or run:

```
python -m http.server 8000
```

then visit http://localhost:8000.
