/* ==========================================================
   PORTFOLIO CONTENT — edit this file to update the site.
   Add a project, a tool or a timeline entry here and the
   page builds it in the right style automatically.
   ========================================================== */

window.PORTFOLIO = {

  /* ---------- Contact ---------- */
  contact: {
    email: 'mukraminansao@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mukramin-a-001833333',
    github: 'https://github.com/mukraminansao',
    facebook: 'https://www.facebook.com/mukramin.bariwa',
    location: 'Pasig City, Metro Manila',
    // Paste a Formspree endpoint here (e.g. 'https://formspree.io/f/abcdwxyz')
    // to receive form messages by email. Left empty, the form opens the
    // visitor's email app with the message filled in.
    formEndpoint: 'https://formspree.io/f/xljgvrer',
    // Address of the portfolio assistant (the Cloudflare Worker in worker/portfolio-chat.js),
    // e.g. 'https://portfolio-chat.yourname.workers.dev'. Left empty, the chat button stays hidden.
    chatEndpoint: 'https://portfolio-chat.mukraminbariwa5.workers.dev'
  },

  /* ---------- Hero stat bar ---------- */
  stats: {
    projects: 8
  },

  /* Shown in the footer as "Last updated". Change it whenever you update the site. */
  updated: 'November 2026',

  /* ---------- Now: what I'm working on (About section + terminal) ---------- */
  now: [
    'Preparing TeachWise for release on Google Play',
    'Building new web and app projects with Laravel, React Native and Claude Code',
    'Practicing SOC investigations and CTF challenges',
    'Applying for web and app developer roles'
  ],

  /* ---------- What I Do ---------- */
  skills: [
    { icon: 'front', title: 'Front-End & Mobile', text: 'Responsive interfaces that look right on phones and desktops, plus Android and web apps from one React Native codebase.', tags: ['HTML', 'CSS', 'React', 'React Native'] },
    { icon: 'back', title: 'Back-End & Databases', text: 'Server logic, user logins and data handling — built security-minded, backed by my networking and cybersecurity training.', tags: ['PHP', 'Laravel', 'MySQL', 'Node.js'] },
    { icon: 'system', title: 'Full Systems', text: 'Admin panels, dashboards and multi-user systems with real roles and data, like TeachWise, BookTrack and Servease.', tags: ['Laravel', 'PHP', 'MySQL', 'REST APIs'] },
    { icon: 'ai', title: 'AI-Native Development', text: 'I am an AI-native developer: I build with AI coding tools like Claude Code. I plan the system and its data, direct the AI, then review, test and fix every change before it ships.', tags: ['Claude Code', 'Code review', 'Automated tests'] }
  ],

  security: {
    title: 'Security-minded development',
    text: 'My networking major and cybersecurity training shape how I build: school-by-school data separation in TeachWise, role-based access in Servease and BookTrack, and on-device encryption in Padala.',
    points: ['3 security certificates: Google, Cisco, LetsDefend', 'SOC labs: Splunk, Wireshark, Nmap', 'CTF training & Capture the King', 'Privacy by design: TeachWise is Data Privacy Act (RA 10173) ready']
  },

  /* Toolkit shown in the Skills section, grouped. */
  /* items = used in my own projects (solid chips); familiar = know the basics / from training (outlined chips) */
  toolkitGroups: [
    { name: 'Front-end & mobile', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Expo', 'Tailwind CSS', 'Vite', 'Chart.js'], familiar: ['Bootstrap', 'jQuery', 'GSAP'] },
    { name: 'Back-end & data', items: ['PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Node.js', 'REST APIs'], familiar: ['phpMyAdmin'] },
    { name: 'AI tools & workflow', items: ['Claude Code', 'Claude', 'Git', 'GitHub', 'VS Code', 'Docker', 'XAMPP', 'Netlify'], familiar: ['Postman', 'Figma'] },
    { name: 'Security (training & labs)', items: [], familiar: ['Linux', 'Wireshark', 'Nmap', 'Splunk', 'Kali Linux', 'Burp Suite', 'Metasploit'] }
  ],

  toolkit: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Vite', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Node.js', 'Docker', 'XAMPP', 'Chart.js', 'GSAP', 'Git', 'GitHub', 'Postman', 'Figma', 'Netlify', 'Claude Code', 'Linux', 'Wireshark', 'Nmap', 'Splunk', 'Burp Suite', 'Metasploit'],

  /* ---------- Projects ----------
     layout: 'desktop' = browser-style gallery, 'app' = three phone/app windows.
     github: '' shows "Repo coming soon".
     live: the live demo address (shows a "Live demo" button); liveNote: one short line under it,
     e.g. demo sign-in details or "first visit may take a minute to wake up".
     preview: a short silent clip (6–10 s, .mp4) that plays inside the screenshot
     frame on hover (desktop) or when scrolled into view (phones). If the file is
     not in assets/video/ yet, nothing shows, so it is safe to leave set.
     For 'app' layouts, previewShot picks which phone window plays it (0, 1 or 2). */
  projects: [
    {
      name: 'FAIRY', kind: 'Fashion & beauty store · virtual try-on', layout: 'desktop', path: 'fairy', status: 'In development',
      facts: [['110', 'products'], ['9', 'shoppable sets'], ['2', 'studios · fitting room + beauty'], ['75', 'automated tests']],
      desc: 'A fashion and beauty storefront where every product lives inside a styled photo. Visitors tap any item in a scene to see its details, build an outfit or makeup look from it, and try it on in a virtual fitting room or beauty studio before adding the whole look to the bag.',
      features: [
        'Shoppable scenes: tap any of the 12 products in a set photo for a close-up, shade and finish options, then add it to your look',
        'Virtual fitting room with front and back views and head and hand close-ups; save outfits or add the whole outfit to the bag',
        'Virtual Beauty Studio: pick shades, intensity and matte, satin or gloss finish for lips, cheeks, eyes and skin, with a before/after slider',
        'Catalog with category filters, search, price and sort, with each product linking back to its spot in a shoppable set',
        'PostgreSQL back end with customer accounts and a staff admin for prices, stock and scenes; the free demo runs from the local catalog'
      ],
      tags: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'PostgreSQL', 'Prisma', 'Playwright'],
      github: 'https://github.com/mukraminansao/Fairy',
      live: 'https://fairy-demo.onrender.com', liveNote: 'Bag and saved looks stay in your browser, and checkout is a demo with no payment. Free hosting: the first visit can take about a minute to wake up.',
      preview: 'assets/video/fairy.mp4',
      ad: 'assets/video/fairy-ad.mp4', adPoster: 'assets/img/fy_ad-poster.jpg',
      learned: 'Building FAIRY taught me to map clickable hotspots onto product photos, keep one look in sync across scenes, the fitting room and the bag, and layer makeup effects on a face photo in the browser without sending images to a server.',
      shots: [
        { src: 'assets/img/fy_home.webp', label: 'Home' },
        { src: 'assets/img/fy_look.webp', label: 'Shoppable look' },
        { src: 'assets/img/fy_fitting.webp', label: 'Virtual fitting room' },
        { src: 'assets/img/fy_studio.webp', label: 'Virtual Beauty Studio' },
        { src: 'assets/img/fy_mobile.webp', label: 'Phone view', tall: true }
      ]
    },
    {
      name: 'KATRIBO', kind: 'Website + admin · coffee shop', layout: 'desktop', path: 'katribo',
      facts: [['8', 'pages'], ['26', 'menu items'], ['3', 'staff roles'], ['1', 'server-side price check']],
      desc: 'A premium all-black website for KATRIBO Slow Coffee Bar, a café by the bay in Patikul, Sulu, built from my own UI design and the café\'s real photos. Customers browse the menu, customise a drink and place a pickup order, and the café runs its menu and orders from its own admin dashboard.',
      features: [
        'Menu with category filters and search, plus drink pages with sizes and add-ons',
        'Pickup orders are saved to MySQL, with every price recalculated on the server so the browser can\'t change what an order costs',
        'Admin dashboard with sales, top sellers, order workflow (Pending → Processing → Completed), new-order alerts and printable prep slips',
        'Menu management: prices, photos, sold-out and hidden items, and featured drinks on the home page, with owner, manager and staff accounts',
        'App-style phone layout with a bottom tab bar, gallery with a lightbox, and fast page transitions'
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PHP', 'MySQL'],
      github: 'https://github.com/mukraminansao/Katribo',
      live: 'https://katribo-demo.onrender.com', liveNote: 'Checkout is a demo: orders are checked on the server but never charged or sent. Free hosting: the first visit can take about a minute to wake up.',
      preview: 'assets/video/katribo.mp4',
      ad: 'assets/video/katribo-ad.mp4', adPoster: 'assets/img/kt_ad-poster.jpg',
      learned: 'Rebuilding my first PHP version in React and TypeScript taught me to split a site into reusable components and never trust prices sent from the browser. Connecting it to a PHP and MySQL admin taught me order workflows with version checks, so two staff members can\'t overwrite each other\'s changes.',
      shots: [
        { src: 'assets/img/kt_home.webp', label: 'Home' },
        { src: 'assets/img/kt_menu.webp', label: 'Menu' },
        { src: 'assets/img/kt_drink.webp', label: 'Drink details' },
        { src: 'assets/img/kt_admin.webp', label: 'Admin dashboard' },
        { src: 'assets/img/kt_mobile.webp', label: 'Phone view', tall: true }
      ]
    },
    {
      name: 'FORM/TECH', kind: 'E-commerce · technical apparel', layout: 'desktop', path: 'form-tech', status: 'Release candidate',
      facts: [['30', 'products'], ['218', 'size & color variants'], ['8', 'collections'], ['Staff', 'protected management']],
      desc: 'A full-stack storefront for a fictional technical-apparel brand. Customers browse curated Men and Women collections, search and filter products, choose size and color, and use a persistent shopping bag and guest demo checkout. A protected staff area manages the catalogue, inventory, demo orders and homepage content.',
      features: [
        'Search with keyboard suggestions, applied filter chips for size, color and price, and per-product size guides',
        'Every product comes in two real colorways with matching photos, a persistent bag and guest checkout with server-side price and stock checks',
        'Protected staff tools for products, collections, inventory, demo orders and editable storefront content',
        'Responsive editorial storefront with recently viewed items, accessible menus and reduced-motion support, tested in Chromium, Firefox and WebKit'
      ],
      tags: ['Laravel', 'React', 'TypeScript', 'Inertia', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
      github: 'https://github.com/mukraminansao/form-tech-apparel', live: 'https://form-tech-demo.onrender.com',
      liveNote: 'Staff area: sign in at /login with staff@formtech.demo and formtech-demo-staff. Checkout is a demo and takes no payments. Free hosting: the first visit can take about a minute to wake up.',
      preview: 'assets/video/formtech.mp4',
      learned: 'Building a database-backed storefront taught me to keep product variants, prices and inventory consistent from the catalogue to checkout, separate staff permissions from guest sessions, and package a Laravel and React application with PostgreSQL in Docker.',
      shots: [
        { src: 'assets/img/ft_home.webp', label: 'Storefront' },
        { src: 'assets/img/ft_shop.webp', label: 'Search and filters' },
        { src: 'assets/img/ft_product.webp', label: 'Product details and colorways', tall: true },
        { src: 'assets/img/ft_admin.webp', label: 'Staff overview' },
        { src: 'assets/img/ft_mobile.webp', label: 'Phone storefront', tall: true }
      ]
    },
    {
      name: 'TeachWise', kind: 'Android + web app · 5 user roles · multi-school', layout: 'desktop', path: 'teachwise', status: 'Preparing for Google Play', featured: true,
      facts: [['5', 'user roles'], ['120', 'API tests'], ['2', 'languages · EN / FIL'], ['1', 'codebase · Android + web']],
      desc: 'An anonymous teacher-evaluation app for schools, guided by Professor Wise, a friendly cartoon professor who can also answer questions as an AI assistant. Students rate their teachers in about three minutes per class, teachers get clear results and evaluate their colleagues, and admins run the whole process from one dashboard. One app serves many schools, with each school\'s data kept strictly separate.',
      features: [
        'Students see the classes they still need to rate and go through each one step by step, with drafts that survive going offline',
        'Teachers see their rating over time, response counts and anonymous comments, and rate colleagues in their department (peer evaluation)',
        'Admins track completion by section and faculty ratings, and manage classes, evaluation periods and questions in English and Filipino',
        'Professor Wise answers questions about the evaluation process with AI guidance (Ollama), never revealing who said what',
        'Privacy built in: answers stay anonymous, results hide below a minimum response count, Data Privacy Act ready'
      ],
      tags: ['Laravel', 'React Native', 'Expo', 'MySQL', 'TypeScript'],
      github: 'https://github.com/mukraminansao/TeachWise',
      live: 'https://teachwise-demo.onrender.com', liveNote: 'One-click demo accounts on the sign-in screen. Free hosting: the first visit can take about a minute to wake up.',
      preview: 'assets/video/teachwise.mp4',
      learned: 'Building one app for many schools taught me multi-tenant design: every record carries a school ID and is filtered on every request, so one school can never see another\'s data. It also pushed me from PHP pages to a REST API with a React Native app on Android and the web from a single codebase.',
      shots: [
        { src: 'assets/img/tw_student.webp', label: 'Student home' },
        { src: 'assets/img/tw_teacher.webp', label: 'Teacher dashboard' },
        { src: 'assets/img/tw_admin.webp', label: 'School admin overview' },
        { src: 'assets/img/tw_mobile.webp', label: 'Student home on a phone', tall: true }
      ]
    },
    {
      name: 'Servease', kind: 'Web app · 3 user roles', layout: 'desktop', path: 'servease', status: 'In development',
      facts: [['3', 'user roles'], ['3', 'dashboards'], ['2', 'languages · EN / FIL'], ['PWA', 'installs like an app']],
      desc: 'A home-services marketplace that connects customers with ID-checked local pros for aircon, plumbing, cleaning and more. It works like an app on phones and can be installed on the home screen.',
      features: [
        'Customers compare services with clear prices, book a time the pro is actually free, and follow each booking from Requested to Completed',
        'Post a job to get quotes, chat with pros, reschedule or cancel with a reason, and review only after a finished job',
        'Pros manage their services, working hours, quotes, bookings and earnings',
        'Admins verify pros\' IDs, handle reported problems and track bookings, payments and ratings'
      ],
      tags: ['PHP', 'MySQL', 'JavaScript', 'PWA'],
      github: 'https://github.com/mukraminansao/Servease',
      live: 'https://servease-demo.onrender.com', liveNote: 'One-click Customer, Pro and Admin demo accounts. Free hosting: the first visit can take about a minute to wake up.',
      preview: 'assets/video/servease.mp4',
      learned: 'Designing role-based access so customers, pros and admins each see only their own data and actions, and keeping three different dashboards consistent in one system.',
      shots: [
        { src: 'assets/img/sv_home.webp', label: 'Customer home' },
        { src: 'assets/img/sv_admin.webp', label: 'Admin dashboard' },
        { src: 'assets/img/sv_login.webp', label: 'Sign in' },
        { src: 'assets/img/sv_mobile.webp', label: 'Mobile view', tall: true }
      ]
    },
    {
      name: 'Dokyu', kind: 'Android + web app · government documents guide', layout: 'app', path: 'dokyu', status: 'In development',
      facts: [['8', 'document guides'], ['87', 'automated tests'], ['2', 'languages · EN / TL'], ['1', 'codebase · Android + web']],
      desc: 'A guide that helps anyone in the Philippines get government papers in one trip instead of three: know exactly what to bring, do the online part at home, and go to the office only to submit and claim. Doki, an animated guide built in code, walks new users through the app.',
      features: [
        'Step-by-step guides for the PSA birth certificate, National ID, NBI and police clearance, passport and more, with fees and official links only',
        'Office Finder with a map, hours, directions and "Closed today" on holidays',
        'My Docs tracks papers for you and your family, with appointment and expiry reminders',
        'Guests can read every guide without an account; signing in adds the tracker, reminders and saved offices'
      ],
      tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
      github: 'https://github.com/mukraminansao/Dokyu',
      live: 'https://dokyu.onrender.com', liveNote: 'Tap "Try the demo account" on the sign-in screen. Free hosting: the first visit can take about a minute to wake up. Not affiliated with any government agency.',
      preview: 'assets/video/dokyu.mp4', previewShot: 0,
      learned: 'Building Dokyu taught me to research and verify real-world content before shipping it, and to design one Expo codebase that works as a phone app and a desktop website, with an Express and Prisma API behind it.',
      shots: [
        { src: 'assets/img/dk_tour.webp', label: 'Doki\'s guided tour' },
        { src: 'assets/img/dk_guide.webp', label: 'Document guide' },
        { src: 'assets/img/dk_docs.webp', label: 'My Docs tracker' }
      ]
    },
    {
      name: 'BookTrack', kind: 'Web system · 2 user roles', layout: 'desktop', path: 'booktrack',
      facts: [['2', 'user roles'], ['1 month', 'first version, built solo']],
      desc: 'A library management system where members browse and borrow books, and librarians run the whole circulation. It started as my solo capstone project and was rebuilt into a full product.',
      features: [
        'Members discover books, borrow in one tap and track due dates',
        'Librarian overview with loans, overdue follow-ups and monthly charts',
        'Full catalogue and member management with search and filters'
      ],
      tags: ['PHP', 'MySQL', 'JavaScript', 'XAMPP'],
      github: 'https://github.com/mukraminansao/Booktrack',
      live: 'https://booktrack-demo.onrender.com', liveNote: 'One-click librarian and member demo accounts. Free hosting: the first visit can take about a minute to wake up.',
      preview: 'assets/video/booktrack.mp4',
      learned: 'Rebuilding my own capstone taught me to refactor older code, plan a cleaner relational database, and design for two very different users: members and librarians.',
      shots: [
        { src: 'assets/img/bt_discover.webp', label: 'Member · Discover' },
        { src: 'assets/img/bt_overview.webp', label: 'Librarian overview' },
        { src: 'assets/img/bt_books.webp', label: 'Books catalogue' },
        { src: 'assets/img/bt_login.webp', label: 'Sign in' }
      ]
    },
    {
      name: 'Padala', kind: 'App · End-to-end encrypted', layout: 'app', status: 'In development',
      facts: [['44', 'automated tests'], ['0', 'dependencies'], ['AES-256', 'encryption on the device']],
      desc: 'An installable app for delivering finished project folders to your team — locked so only your team can open them.',
      features: [
        "Files and messages are encrypted on the device before they're sent",
        'Updates send only the changed files, so it works even on a weak signal',
        'One-time team invite links that expire after 7 days',
        'Dala, a built-in assistant that guides new users step by step'
      ],
      tags: ['Node.js', 'JavaScript', 'Encryption', 'Installable app'],
      github: 'https://github.com/mukraminansao/Padala',
      live: 'https://padala-demo.onrender.com', liveNote: 'Create a test account with any username. Demo data is erased whenever it restarts; the first visit can take about a minute to wake up.',
      preview: 'assets/video/padala.mp4', previewShot: 1,
      learned: 'Encrypting files on the device before upload, and sending only the files that changed, which taught me how sync tools save bandwidth on slow connections.',
      shots: [
        { src: 'assets/img/pd_onboard.webp', label: 'Onboarding' },
        { src: 'assets/img/pd_home.webp', label: 'Home' },
        { src: 'assets/img/pd_signup.webp', label: 'Sign up' }
      ]
    }
  ],

  /* ---------- Journey ---------- */
  education: {
    degree: 'BS Information Technology',
    major: 'Major in Networking',
    school: 'Mindanao State University – Sulu',
    years: '2022 — 2026',
    honor: 'Cum Laude',
    honorNote: 'Graduated July 2026',
    awards: ['Outstanding Student Awardee 2026', 'Access to Higher and Modern Education (AHME) Scholar 2022–2026']
  },
  /* ---------- Certifications (newest first) ----------
     img = full image, thumb = small preview; verify = official link that proves it */
  certifications: [
    { title: 'Google Cybersecurity Professional Certificate', issuer: 'Google · Coursera', date: 'Jul 2025',
      note: 'Nine courses with hands-on labs: networks and network security, Linux, SQL, Python automation, SIEM tools and intrusion detection.',
      tags: ['Linux', 'SQL', 'Python', 'SIEM', 'IDS'],
      img: 'assets/img/cert_google.webp', thumb: 'assets/img/cert_google-sm.webp',
      verify: 'https://coursera.org/verify/professional-cert/FTYCAM1EGDSR' },
    { title: 'SIEM Engineer Career Path', issuer: 'LetsDefend', date: 'Jun 2025',
      note: 'Completed career path on setting up and working with SIEM: collecting logs, analyzing events and building detections.',
      tags: ['SIEM', 'Log analysis', 'Detection'],
      img: 'assets/img/cert_letsdefend.webp', thumb: 'assets/img/cert_letsdefend-sm.webp',
      verify: 'https://app.letsdefend.io/certificate/show/2c7f903d-806d-4717-a8aa-8cfa657c39a3' },
    { title: 'Cyber Threat Management', issuer: 'Cisco Networking Academy', date: 'Jun 2025',
      note: 'Cisco course on managing threats in an organization: governance and compliance, network security testing, threat intelligence, risk and incident response.',
      tags: ['Threat intelligence', 'Risk', 'Incident response'],
      img: 'assets/img/cert_cisco.webp', thumb: 'assets/img/cert_cisco-sm.webp',
      verify: 'https://www.credly.com/badges/5b52ef59-ad80-4972-8e35-d336f263796e' }
  ],

  /* ---------- Availability + languages (About facts, hero, contact) ---------- */
  availability: 'Can start immediately · on-site, hybrid or remote',
  languages: 'English · Tagalog',

  /* ---------- Why work with me: each point links to its proof ---------- */
  why: [
    { title: 'I ship complete systems', text: 'Eight projects covering the full stack: the database, the API, the admin dashboards and the screens people use. TeachWise alone has 5 user roles, 120 API tests and runs on Android and the web.', link: '#projects', linkText: 'See the projects' },
    { title: 'Security is built in, not added later', text: 'A networking major and three security certificates shape how I code: school-by-school data separation in TeachWise, role checks in every system and on-device encryption in Padala.', link: '#certifications', linkText: 'See the certificates' },
    { title: 'I build with AI and own the result', text: 'I use AI coding tools like Claude Code to move fast, but I plan each system, review and test every change, and can explain how it works. 251 automated tests across TeachWise, Dokyu and Padala back that up.', link: 'https://github.com/mukraminansao', linkText: 'See my GitHub' }
  ],
  journey: [
    { when: 'Now', kind: 'Projects', title: 'Building projects as an AI-native developer', org: 'Personal projects · ongoing', text: 'Eight projects so far: TeachWise, KATRIBO and BookTrack are complete; FORM/TECH is a release candidate with a live demo; FAIRY, Servease, Dokyu and Padala are in development. I plan, build with Claude Code, review and test each project.', live: true },
    { when: 'Feb – May 2026', kind: 'OJT', title: 'On-the-Job Trainee', org: 'Department of Information and Communications Technology (DICT) · Jolo, Sulu', text: 'Hands-on work across deployment, networking and development:',
      bullets: [
        'Facilitated the rollout of a DICT free internet connectivity program to partner schools, coordinating on-site deployment and orienting students and staff',
        'Assisted with networking tasks during field deployments',
        'Assisted senior developers with their website development work',
        'Completed gamified, self-paced coding training on Walnut Education',
        'Trained in Capture the Flag (CTF) cybersecurity challenges'
      ] },
    { when: 'Dec 2025', kind: 'Capstone', title: 'Library System Capstone → BookTrack', org: 'Mindanao State University – Sulu', text: 'Built solo in one month (LibraSys): MySQL database, inventory, borrowing and returns with due dates, and reports. Later rebuilt into BookTrack.' },
    { when: 'Nov 2025', kind: 'Competition', title: 'Capture the King CTF', org: '11th Infantry (Alakdan) Division, Philippine Army · with DICT Sulu', text: 'Team cybersecurity competition held November 15–16, 2025.' },
    { when: 'May 2025', kind: 'Personal project', title: 'TeachWise', org: 'Personal project · independent developer', text: 'Anonymous teacher-evaluation system for schools, later rebuilt into a multi-school Android and web app (see Projects).' },
    { when: 'Ongoing', kind: 'Cybersecurity', title: 'SOC Labs', org: 'TryHackMe · LetsDefend · SecurityBlue.team', text: 'Splunk log analysis, phishing and brute-force investigations, and incident reports.' }
  ]
};

