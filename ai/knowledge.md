# Mukramin Ansao — portfolio facts

Everything below is verified information from Mukramin's portfolio website (https://mukraminansao.github.io). Use only these facts.

## About

- Name: Mukramin Bariwa Ansao (goes by Mukramin)
- Roles: Web & App Developer, UI/UX Designer, Blue Team / SOC Analyst Enthusiast
- I'm Mukramin Ansao, an AI-native web and app developer and UI/UX designer based in Pasig City, originally from Jolo, Sulu. I design interfaces and build websites, full web systems and Android apps with Laravel, PHP, MySQL and React Native, working AI-first with tools like Claude Code. I'm also a blue-team cybersecurity enthusiast, focused on SOC analysis, threat detection and incident response.
- I graduated Cum Laude in BS Information Technology. I'm passionate about web and app development and love turning ideas into interactive software. As an AI-native developer, AI coding tools like Claude Code are built into how I work from the start: I plan each system, guide the AI, then review, test and fix every change myself. My projects include TeachWise, BookTrack and the KATRIBO coffee shop website, all complete; FORM/TECH, an e-commerce release candidate with a live demo; and FAIRY, Servease, Dokyu and Padala, which are in active development.
- Location: Pasig City, Metro Manila, Philippines (originally from Jolo, Sulu)
- Availability: Can start immediately · on-site, hybrid or remote
- Languages: English · Tagalog
- Status: open to web and app developer roles (trainee, junior or full-time) and freelance projects

## Contact

- Email: mukraminansao@gmail.com
- LinkedIn: https://www.linkedin.com/in/mukramin-a-001833333
- GitHub: https://github.com/mukraminansao
- Facebook: https://www.facebook.com/mukramin.bariwa
- CV (PDF): https://mukraminansao.github.io/assets/Mukramin_Ansao_CV.pdf
- Contact form: the "Contact" section at the bottom of the portfolio. He usually replies within a day.

## Education

- BS Information Technology, Major in Networking — Mindanao State University – Sulu (2022 — 2026)
- Honor: Cum Laude (Graduated July 2026)
- Outstanding Student Awardee 2026
- Access to Higher and Modern Education (AHME) Scholar 2022–2026

## Currently working on

- Preparing TeachWise for release on Google Play
- Building new web and app projects with Laravel, React Native and Claude Code
- Practicing SOC investigations and CTF challenges
- Applying for web and app developer roles

## Skills

- Front-End & Mobile: Responsive interfaces that look right on phones and desktops, plus Android and web apps from one React Native codebase. (HTML, CSS, React, React Native)
- Back-End & Databases: Server logic, user logins and data handling — built security-minded, backed by my networking and cybersecurity training. (PHP, Laravel, MySQL, Node.js)
- Full Systems: Admin panels, dashboards and multi-user systems with real roles and data, like TeachWise, BookTrack and Servease. (Laravel, PHP, MySQL, REST APIs)
- AI-Native Development: I am an AI-native developer: I build with AI coding tools like Claude Code. I plan the system and its data, direct the AI, then review, test and fix every change before it ships. (Claude Code, Code review, Automated tests)
- Security-minded development: My networking major and cybersecurity training shape how I build: school-by-school data separation in TeachWise, role-based access in Servease and BookTrack, and on-device encryption in Padala.
  - 3 security certificates: Google, Cisco, LetsDefend
  - SOC labs: Splunk, Wireshark, Nmap
  - CTF training & Capture the King
  - Privacy by design: TeachWise is Data Privacy Act (RA 10173) ready

## Toolkit

- Front-end & mobile — used in his projects: HTML, CSS, JavaScript, TypeScript, React, React Native, Expo, Tailwind CSS, Vite, Chart.js
- Front-end & mobile — familiar / from training: Bootstrap, jQuery, GSAP
- Back-end & data — used in his projects: PHP, Laravel, MySQL, PostgreSQL, Node.js, REST APIs
- Back-end & data — familiar / from training: phpMyAdmin
- AI tools & workflow — used in his projects: Claude Code, Claude, Git, GitHub, VS Code, Docker, XAMPP, Netlify
- AI tools & workflow — familiar / from training: Postman, Figma
- Security (training & labs) — familiar / from training: Linux, Wireshark, Nmap, Splunk, Kali Linux, Burp Suite, Metasploit

## Projects (8)

### 1. FAIRY — Fashion & beauty store · virtual try-on
- Status: In development
- What it is: A fashion and beauty storefront where every product lives inside a styled photo. Visitors tap any item in a scene to see its details, build an outfit or makeup look from it, and try it on in a virtual fitting room or beauty studio before adding the whole look to the bag.
- Key numbers: 110 products; 9 shoppable sets; 2 studios · fitting room + beauty; 75 automated tests
- Features:
  - Shoppable scenes: tap any of the 12 products in a set photo for a close-up, shade and finish options, then add it to your look
  - Virtual fitting room with front and back views and head and hand close-ups; save outfits or add the whole outfit to the bag
  - Virtual Beauty Studio: pick shades, intensity and matte, satin or gloss finish for lips, cheeks, eyes and skin, with a before/after slider
  - Catalog with category filters, search, price and sort, with each product linking back to its spot in a shoppable set
  - PostgreSQL back end with customer accounts and a staff admin for prices, stock and scenes; the free demo runs from the local catalog
- Built with: Next.js, React, TypeScript, CSS Modules, PostgreSQL, Prisma, Playwright
- What he learned: Building FAIRY taught me to map clickable hotspots onto product photos, keep one look in sync across scenes, the fitting room and the bag, and layer makeup effects on a face photo in the browser without sending images to a server.
- Live demo: https://fairy-demo.onrender.com (Bag and saved looks stay in your browser, and checkout is a demo with no payment. Free hosting: the first visit can take about a minute to wake up.)
- Source code: https://github.com/mukraminansao/Fairy

### 2. KATRIBO — Website + admin · coffee shop
- Status: Complete
- What it is: A premium all-black website for KATRIBO Slow Coffee Bar, a café by the bay in Patikul, Sulu, built from my own UI design and the café's real photos. Customers browse the menu, customise a drink and place a pickup order, and the café runs its menu and orders from its own admin dashboard.
- Key numbers: 8 pages; 26 menu items; 3 staff roles; 1 server-side price check
- Features:
  - Menu with category filters and search, plus drink pages with sizes and add-ons
  - Pickup orders are saved to MySQL, with every price recalculated on the server so the browser can't change what an order costs
  - Admin dashboard with sales, top sellers, order workflow (Pending → Processing → Completed), new-order alerts and printable prep slips
  - Menu management: prices, photos, sold-out and hidden items, and featured drinks on the home page, with owner, manager and staff accounts
  - App-style phone layout with a bottom tab bar, gallery with a lightbox, and fast page transitions
- Built with: React, TypeScript, Tailwind CSS, Node.js, PHP, MySQL
- What he learned: Rebuilding my first PHP version in React and TypeScript taught me to split a site into reusable components and never trust prices sent from the browser. Connecting it to a PHP and MySQL admin taught me order workflows with version checks, so two staff members can't overwrite each other's changes.
- Live demo: https://katribo-demo.onrender.com (Checkout is a demo: orders are checked on the server but never charged or sent. Free hosting: the first visit can take about a minute to wake up.)
- Source code: https://github.com/mukraminansao/Katribo

### 3. FORM/TECH — E-commerce · technical apparel
- Status: Release candidate
- What it is: A full-stack storefront for a fictional technical-apparel brand. Customers browse curated Men and Women collections, search and filter products, choose size and color, and use a persistent shopping bag and guest demo checkout. A protected staff area manages the catalogue, inventory, demo orders and homepage content.
- Key numbers: 30 products; 218 size & color variants; 8 collections; Staff protected management
- Features:
  - Search with keyboard suggestions, applied filter chips for size, color and price, and per-product size guides
  - Every product comes in two real colorways with matching photos, a persistent bag and guest checkout with server-side price and stock checks
  - Protected staff tools for products, collections, inventory, demo orders and editable storefront content
  - Responsive editorial storefront with recently viewed items, accessible menus and reduced-motion support, tested in Chromium, Firefox and WebKit
- Built with: Laravel, React, TypeScript, Inertia, PostgreSQL, Tailwind CSS, Docker
- What he learned: Building a database-backed storefront taught me to keep product variants, prices and inventory consistent from the catalogue to checkout, separate staff permissions from guest sessions, and package a Laravel and React application with PostgreSQL in Docker.
- Live demo: https://form-tech-demo.onrender.com (Staff area: sign in at /login with staff@formtech.demo and formtech-demo-staff. Checkout is a demo and takes no payments. Free hosting: the first visit can take about a minute to wake up.)
- Source code: https://github.com/mukraminansao/form-tech-apparel

### 4. TeachWise — Android + web app · 5 user roles · multi-school
- Status: Preparing for Google Play (featured project)
- What it is: An anonymous teacher-evaluation app for schools, guided by Professor Wise, a friendly cartoon professor who can also answer questions as an AI assistant. Students rate their teachers in about three minutes per class, teachers get clear results and evaluate their colleagues, and admins run the whole process from one dashboard. One app serves many schools, with each school's data kept strictly separate.
- Key numbers: 5 user roles; 120 API tests; 2 languages · EN / FIL; 1 codebase · Android + web
- Features:
  - Students see the classes they still need to rate and go through each one step by step, with drafts that survive going offline
  - Teachers see their rating over time, response counts and anonymous comments, and rate colleagues in their department (peer evaluation)
  - Admins track completion by section and faculty ratings, and manage classes, evaluation periods and questions in English and Filipino
  - Professor Wise answers questions about the evaluation process with AI guidance (Ollama), never revealing who said what
  - Privacy built in: answers stay anonymous, results hide below a minimum response count, Data Privacy Act ready
- Built with: Laravel, React Native, Expo, MySQL, TypeScript
- What he learned: Building one app for many schools taught me multi-tenant design: every record carries a school ID and is filtered on every request, so one school can never see another's data. It also pushed me from PHP pages to a REST API with a React Native app on Android and the web from a single codebase.
- Live demo: https://teachwise-demo.onrender.com (One-click demo accounts on the sign-in screen. Free hosting: the first visit can take about a minute to wake up.)
- Source code: https://github.com/mukraminansao/TeachWise

### 5. Servease — Web app · 3 user roles
- Status: In development
- What it is: A home-services marketplace that connects customers with ID-checked local pros for aircon, plumbing, cleaning and more. It works like an app on phones and can be installed on the home screen.
- Key numbers: 3 user roles; 3 dashboards; 2 languages · EN / FIL; PWA installs like an app
- Features:
  - Customers compare services with clear prices, book a time the pro is actually free, and follow each booking from Requested to Completed
  - Post a job to get quotes, chat with pros, reschedule or cancel with a reason, and review only after a finished job
  - Pros manage their services, working hours, quotes, bookings and earnings
  - Admins verify pros' IDs, handle reported problems and track bookings, payments and ratings
- Built with: PHP, MySQL, JavaScript, PWA
- What he learned: Designing role-based access so customers, pros and admins each see only their own data and actions, and keeping three different dashboards consistent in one system.
- Live demo: https://servease-demo.onrender.com (One-click Customer, Pro and Admin demo accounts. Free hosting: the first visit can take about a minute to wake up.)
- Source code: https://github.com/mukraminansao/Servease

### 6. Dokyu — Android + web app · government documents guide
- Status: In development
- What it is: A guide that helps anyone in the Philippines get government papers in one trip instead of three: know exactly what to bring, do the online part at home, and go to the office only to submit and claim. Doki, an animated guide built in code, walks new users through the app.
- Key numbers: 8 document guides; 87 automated tests; 2 languages · EN / TL; 1 codebase · Android + web
- Features:
  - Step-by-step guides for the PSA birth certificate, National ID, NBI and police clearance, passport and more, with fees and official links only
  - Office Finder with a map, hours, directions and "Closed today" on holidays
  - My Docs tracks papers for you and your family, with appointment and expiry reminders
  - Guests can read every guide without an account; signing in adds the tracker, reminders and saved offices
- Built with: React Native, Expo, TypeScript, Node.js, PostgreSQL, Prisma
- What he learned: Building Dokyu taught me to research and verify real-world content before shipping it, and to design one Expo codebase that works as a phone app and a desktop website, with an Express and Prisma API behind it.
- Live demo: https://dokyu.onrender.com (Tap "Try the demo account" on the sign-in screen. Free hosting: the first visit can take about a minute to wake up. Not affiliated with any government agency.)
- Source code: https://github.com/mukraminansao/Dokyu

### 7. BookTrack — Web system · 2 user roles
- Status: Complete
- What it is: A library management system where members browse and borrow books, and librarians run the whole circulation. It started as my solo capstone project and was rebuilt into a full product.
- Key numbers: 2 user roles; 1 month first version, built solo
- Features:
  - Members discover books, borrow in one tap and track due dates
  - Librarian overview with loans, overdue follow-ups and monthly charts
  - Full catalogue and member management with search and filters
- Built with: PHP, MySQL, JavaScript, XAMPP
- What he learned: Rebuilding my own capstone taught me to refactor older code, plan a cleaner relational database, and design for two very different users: members and librarians.
- Live demo: https://booktrack-demo.onrender.com (One-click librarian and member demo accounts. Free hosting: the first visit can take about a minute to wake up.)
- Source code: https://github.com/mukraminansao/Booktrack

### 8. Padala — App · End-to-end encrypted
- Status: In development
- What it is: An installable app for delivering finished project folders to your team — locked so only your team can open them.
- Key numbers: 44 automated tests; 0 dependencies; AES-256 encryption on the device
- Features:
  - Files and messages are encrypted on the device before they're sent
  - Updates send only the changed files, so it works even on a weak signal
  - One-time team invite links that expire after 7 days
  - Dala, a built-in assistant that guides new users step by step
- Built with: Node.js, JavaScript, Encryption, Installable app
- What he learned: Encrypting files on the device before upload, and sending only the files that changed, which taught me how sync tools save bandwidth on slow connections.
- Live demo: https://padala-demo.onrender.com (Create a test account with any username. Demo data is erased whenever it restarts; the first visit can take about a minute to wake up.)
- Source code: https://github.com/mukraminansao/Padala

## Experience and journey

- Now — Building projects as an AI-native developer (Projects), Personal projects · ongoing: Eight projects so far: TeachWise, KATRIBO and BookTrack are complete; FORM/TECH is a release candidate with a live demo; FAIRY, Servease, Dokyu and Padala are in development. I plan, build with Claude Code, review and test each project.
- Feb – May 2026 — On-the-Job Trainee (OJT), Department of Information and Communications Technology (DICT) · Jolo, Sulu: Hands-on work across deployment, networking and development:
  - Facilitated the rollout of a DICT free internet connectivity program to partner schools, coordinating on-site deployment and orienting students and staff
  - Assisted with networking tasks during field deployments
  - Assisted senior developers with their website development work
  - Completed gamified, self-paced coding training on Walnut Education
  - Trained in Capture the Flag (CTF) cybersecurity challenges
- Dec 2025 — Library System Capstone → BookTrack (Capstone), Mindanao State University – Sulu: Built solo in one month (LibraSys): MySQL database, inventory, borrowing and returns with due dates, and reports. Later rebuilt into BookTrack.
- Nov 2025 — Capture the King CTF (Competition), 11th Infantry (Alakdan) Division, Philippine Army · with DICT Sulu: Team cybersecurity competition held November 15–16, 2025.
- May 2025 — TeachWise (Personal project), Personal project · independent developer: Anonymous teacher-evaluation system for schools, later rebuilt into a multi-school Android and web app (see Projects).
- Ongoing — SOC Labs (Cybersecurity), TryHackMe · LetsDefend · SecurityBlue.team: Splunk log analysis, phishing and brute-force investigations, and incident reports.

## Certificates

- Google Cybersecurity Professional Certificate — Google · Coursera, Jul 2025. Nine courses with hands-on labs: networks and network security, Linux, SQL, Python automation, SIEM tools and intrusion detection. Verify: https://coursera.org/verify/professional-cert/FTYCAM1EGDSR
- SIEM Engineer Career Path — LetsDefend, Jun 2025. Completed career path on setting up and working with SIEM: collecting logs, analyzing events and building detections. Verify: https://app.letsdefend.io/certificate/show/2c7f903d-806d-4717-a8aa-8cfa657c39a3
- Cyber Threat Management — Cisco Networking Academy, Jun 2025. Cisco course on managing threats in an organization: governance and compliance, network security testing, threat intelligence, risk and incident response. Verify: https://www.credly.com/badges/5b52ef59-ad80-4972-8e35-d336f263796e

## Why work with him

- I ship complete systems: Eight projects covering the full stack: the database, the API, the admin dashboards and the screens people use. TeachWise alone has 5 user roles, 120 API tests and runs on Android and the web.
- Security is built in, not added later: A networking major and three security certificates shape how I code: school-by-school data separation in TeachWise, role checks in every system and on-device encryption in Padala.
- I build with AI and own the result: I use AI coding tools like Claude Code to move fast, but I plan each system, review and test every change, and can explain how it works. 251 automated tests across TeachWise, Dokyu and Padala back that up.

_Last updated: November 2026_
