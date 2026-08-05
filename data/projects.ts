export interface ProjectTimeline {
  title: string
  image?: string
  metaTags: string[]
  description: string
}

export interface ProjectCertificate {
  title: string
  src: string
  type: "image" | "pdf"
}

export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  tag: string
  gradient: string
  num: string
  shortDescription: string
  longDescription: string
  coverImage?: string
  mobileImage?: string
  duration: string
  client: string
  siteUrl?: string
  githubUrl: string
  repositories?: { label: string; url: string }[]
  tags: string[]
  tech: string[]
  timeline: ProjectTimeline[]
  contentParagraphs: string[]
  certificate?: ProjectCertificate
}

export const projects: Project[] = [
  {
    id: "purrpal",
    slug: "purrpal",
    title: "PURRPAL",
    subtitle: "AI-Powered Cat Healthcare Platform",
    tag: "AI / Healthcare",
    gradient: "from-emerald-800 via-teal-700 to-cyan-600",
    num: "01",
    shortDescription:
      "Platform kesehatan kucing berbasis AI 24/7 di Indonesia. Menggabungkan Symptom Analysis (Random Forest 87.3%), Vision Skin Disease Detection (CNN 85.2%), Conversational AI Gemini 2.0, & Finder Layanan Veteriner.",
    longDescription:
      "Purrpal adalah platform kesehatan kucing berbasis AI yang dirancang untuk mengatasi tantangan akses layanan veteriner di Indonesia. Jutaan pemilik kucing menghadapi kendala — keterbatasan geografis klinik hewan yang hanya tersedia di kota besar, biaya konsultasi yang tinggi, jam operasional yang tidak fleksibel, serta minimnya edukasi kesehatan yang reliable. Purrpal hadir sebagai \"Dokter Hewan Digital\" yang accessible 24/7, menggabungkan AI-powered diagnosis (Random Forest 87.3% untuk analisis gejala, CNN 85.2% untuk deteksi penyakit kulit dari foto), conversational AI berbasis Gemini 2.0, serta pencari layanan veteriner terdekat — menjadikan layanan kesehatan kucing lebih terjangkau, cepat, dan merata bagi seluruh pemilik kucing di Indonesia.",
    coverImage: "/images/Purrpal.png",
    duration: "2024 - 2025",
    client: "DBS Foundation Coding Camp",
    siteUrl: "https://fe-purrpal.vercel.app/",
    githubUrl: "https://github.com/Hidayattt24/PURRPAL.git",
    tags: ["#ai", "#healthcare", "#machine-learning", "#veterinary", "#pwa"],
    tech: [
      "Next.js 15",
      "TypeScript",
      "Express.js",
      "Supabase",
      "Python",
      "FastAPI",
      "TensorFlow",
      "scikit-learn",
      "Gemini 2.0",
      "Google Cloud",
      "Docker",
      "Vercel",
    ],
    timeline: [
      {
        title: "Research & Planning",
        metaTags: ["planning", "problem research", "2024"],
        description:
          "Melakukan riset kebutuhan pemilik kucing di Indonesia, memetakan arsitektur multi-service yang akan dibangun, serta membentuk tim lintas peran (Project Lead, Frontend, 2 ML Engineer, dan UI/UX Designer).",
      },
      {
        title: "Frontend Development",
        metaTags: ["next.js 15", "shadcn/ui", "mobile-first"],
        description:
          "Membangun antarmuka web modern dengan Next.js dan TypeScript, merancang sistem design mobile-first, serta mengoptimalkan performa hingga skor Lighthouse 95+.",
      },
      {
        title: "Backend Development",
        metaTags: ["express.js", "supabase", "jwt auth"],
        description:
          "Membangun REST API dengan Express.js untuk autentikasi & manajemen pengguna (JWT), modul edukasi, layanan lokasi veteriner, serta integrasi chatbot.",
      },
      {
        title: "ML · Symptom Analysis",
        metaTags: ["random forest", "scikit-learn", "87.3% accuracy"],
        description:
          "Melatih model Random Forest berbasis lebih dari 25 fitur klinis untuk mengklasifikasikan 6 penyakit kucing umum dengan akurasi 87.3%.",
      },
      {
        title: "ML · Skin Disease Detection",
        metaTags: ["cnn", "mobilenetv2", "85.2% accuracy"],
        description:
          "Mengembangkan model CNN MobileNetV2 yang dioptimalkan untuk perangkat mobile guna mendeteksi 6 penyakit kulit kucing dari foto, dengan waktu inferensi di bawah 50ms.",
      },
      {
        title: "Chatbot & Integration",
        metaTags: ["gemini 2.0", "vertex ai", "24/7"],
        description:
          "Mengintegrasikan conversational AI Gemini 2.0 melalui Google Vertex AI sebagai asisten 24/7 dengan keahlian veteriner dan dukungan Bahasa Indonesia.",
      },
      {
        title: "Launch · Best Capstone",
        metaTags: ["deployment", "google cloud", "2025"],
        description:
          "Men-deploy platform ke production di Vercel dan Google Cloud Run, lalu meraih penghargaan Best Capstone Project pada Coding Camp 2025.",
      },
    ],
    contentParagraphs: [
      "Purrpal lahir dari keprihatinan atas sulitnya akses informasi dan layanan kesehatan kucing yang cepat di Indonesia. Klinik hewan hanya tersedia di kota besar, biaya konsultasi relatif mahal, jam operasional terbatas, dan informasi kesehatan yang reliable sulit diperoleh. Purrpal hadir sebagai solusi digital \"Dokter Hewan Digital\" yang siap membantu 24/7.",
      "Secara arsitektur, Purrpal dibangun atas beberapa layanan yang saling terhubung: aplikasi web Next.js di sisi frontend, API Express.js yang menangani autentikasi, modul edukasi, serta integrasi chatbot, dan microservice FastAPI untuk analisis gejala (tabular) dan deteksi penyakit kulit (vision). Seluruh model AI dilatih pada tahap riset terpisah sebelum dideploy ke Google Cloud Run, dengan data tersimpan pada Supabase PostgreSQL.",
      "Dalam tim lima orang, saya berperan sebagai UI/UX Designer — merancang sistem design end-to-end, melakukan riset & pengujian pengalaman pengguna, serta mengimplementasikan komponen antarmuka di sisi frontend. Purrpal berhasil meraih penghargaan Best Capstone Project pada Coding Camp 2025 dan menyasar lebih dari 10 juta pemilik kucing di Indonesia.",
    ],
    certificate: {
      title: "Best Capstone Project",
      src: "/certificates/Coding-Camp-2025---University-Best-Capstone-Project.jpg",
      type: "image",
    },
  },
  {
    id: "ai-productivity-planner",
    slug: "ai-productivity-planner",
    title: "Planbreak — AI Productivity Planner",
    subtitle: "AI-Native Smart Task Manager & Insight Engine",
    tag: "AI / Productivity",
    gradient: "from-cyan-700 via-blue-600 to-indigo-700",
    num: "02",
    shortDescription:
      "Task manager web full-stack (Next.js + Supabase) yang memanfaatkan Google Gemini untuk memecah rencana besar menjadi langkah kecil + estimasi waktu, menyusun prioritas harian, membuat task lewat input bahasa alami, dan merangkum insight produktivitas mingguan.",
    longDescription:
      "Planbreak adalah task manager berbasis web (full-stack) yang satu tingkat di atas aplikasi todo biasa: ia memakai kecerdasan buatan Google Gemini untuk mengubah \u201crencana abstrak\u201d menjadi langkah-langkah kecil yang konkret, terurut, dan berestimasi waktu — sehingga setiap rencana terasa bisa dieksekusi, bukan sekadar ditulis dan dilupakan. Posisinya sebagai productivity tool \u201cAI-native\u201d: AI bukan hiasan, melainkan bagian inti dari alur kerja sehari-hari. Fitur utamanya mencakup AI Breakdown, Smart Prioritization, Natural-Language Task Creation, dan Weekly Insight — semuanya divalidasi serta disanitasi di server sebelum disimpan, dengan fallback yang ramah saat kuota gratis Gemini habis.",
    coverImage: "/images/ai-productivity.png",
    duration: "2026 (roadmap 14 hari)",
    client: "Personal Project",
    githubUrl: "https://github.com/mridho24/ai-productivity-planner.git",
    tags: ["#ai", "#productivity", "#fullstack", "#nextjs"],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Prisma 7",
      "Supabase Postgres",
      "NextAuth v5",
      "Google Gemini",
      "Recharts",
      "Zod",
    ],
    timeline: [
      {
        title: "Setup",
        metaTags: ["planning", "init", "setup"],
        description:
          "Init Next.js + Tailwind + shadcn/ui, konfigurasi Prisma/Supabase, skema database, dan seed data awal.",
      },
      {
        title: "Authentication",
        metaTags: ["nextauth v5", "bcrypt", "protect routes"],
        description:
          "Membangun autentikasi lengkap dengan NextAuth v5 dan bcrypt, proteksi route, reset password, serta strength meter.",
      },
      {
        title: "CRUD & Dashboard",
        metaTags: ["crud task", "subtask", "recharts"],
        description:
          "Mengembangkan CRUD task & subtask penuh, dashboard statistik (completion rate, chart Recharts, badge overdue), sorting dan filter kategori.",
      },
      {
        title: "AI Engine",
        metaTags: ["gemini", "breakdown", "weekly insight"],
        description:
          "Membangun AI Breakdown dan Weekly Insight dengan validasi & sanitasi respons di server, plus fallback rate-limit yang aman.",
      },
      {
        title: "Optimal Features",
        metaTags: ["smart prioritization", "nl task creation", "polish"],
        description:
          "Menambahkan Smart Prioritization, Natural-Language Task Creation, dan penyempurnaan pengalaman pengguna.",
      },
      {
        title: "Docs & CI",
        metaTags: ["readme", "ci", "testing"],
        description:
          "Menyusun dokumentasi profesional serta menyiapkan GitHub Actions dan Vitest (CI + testing).",
      },
    ],
    contentParagraphs: [
      "Planbreak lahir untuk memecahkan masalah \u201crencana besar yang terus ditunda\u201d — seperti menyusun skripsi, deploy aplikasi, atau pindahan rumah. Alih-alih menulis target dan melupakannya, AI memecah satu tugas besar menjadi 3\u20137 subtask konkret lengkap dengan estimasi durasi menit, sehingga pekerjaan terasa bisa dieksekusi.",
      "Empat kekuatan AI menjadi inti nilai proyek ini: AI Breakdown untuk memecah rencana, Smart Prioritization untuk fokus harian berdasar urgensi tenggat & bobot tugas, Natural-Language Task Creation untuk membuat task lewat kalimat biasa, dan Weekly Insight untuk merangkum pola serta saran produktivitas mingguan. Pengguna tetap memegang kendali penuh dengan CRUD task, subtask yang bisa diurutkan ulang, kalender due date, serta ekspor ke CSV/JSON.",
      "Dibangun sepanjang 2026 secara bertahap dari nol hingga menjadi aplikasi fungsional penuh, Planbreak menonjolkan full-stack TypeScript, autentikasi lengkap, dashboard interaktif, dan integrasi AI Google Gemini yang dirancang tidak pernah membuat aplikasi crash.",
    ],
  },
  {
    id: "rekan",
    slug: "rekan",
    title: "Rekan",
    subtitle: "Interactive Kanban Task Management App",
    tag: "Productivity App",
    gradient: "from-violet-700 via-purple-600 to-indigo-500",
    num: "03",
    shortDescription:
      "Aplikasi manajemen tugas/proyek berbasis web dengan tampilan Kanban board, sistem drag & drop task, dashboard statistik aktivitas, kalender deadline bulanan, editor catatan kaya (rich text), dan pet companion interaktif.",
    longDescription:
      "Rekan adalah aplikasi manajemen tugas/proyek berbasis web (frontend) dalam Bahasa Indonesia, ditujukan untuk personal productivity — mahasiswa, pekerja, maupun individu yang ingin mengelola tugas kuliah atau kantor. Alur kerjanya terstruktur: Project → Board → Task → Subtask. Pengguna dapat memantau progres pekerjaan lewat dashboard statistik & activity calendar, mengelola tugas secara visual via board Kanban (To Do / In Progress / Done) dengan drag & drop, memantau deadline project melalui kalender bulanan, membuat catatan kaya (rich text) dengan editor TipTap, hingga menikmati pengalaman menyenangkan lewat pet companion interaktif.",
    coverImage: "/images/Rekan.png",
    duration: "2025 (roadmap ~4-6 minggu)",
    client: "Personal Project",
    githubUrl: "https://github.com/mridho24/Rekan.git",
    tags: ["#kanban", "#productivity", "#react", "#framer-motion", "#zustand", "#tiptap", "#supabase", "#pwa"],
    tech: [
      "React 19",
      "Vite 8",
      "JavaScript",
      "Tailwind CSS",
      "Zustand",
      "Supabase (PostgreSQL)",
      "TipTap 3",
      "Framer Motion",
      "Lucide React",
      "@dnd-kit",
      "Recharts",
    ],
    timeline: [
      {
        title: "Fondasi & Arsitektur",
        metaTags: ["minggu 1-2", "supabase", "zustand", "auth"],
        description:
          "Restrukturisasi folder (lib/, stores/, hooks/, pages/), setup Supabase Project + env config, pembuatan database schema via migration SQL, implementasi RLS policies, pembuatan Zustand stores (auth, project, board, task, notes, theme), serta migrasi auth & mock data ke Supabase. Milestone M1: data persisten.",
      },
      {
        title: "Penyempurnaan Fitur Inti",
        metaTags: ["minggu 2-3", "dnd-kit", "search", "notes online"],
        description:
          "Upgrade drag & drop ke @dnd-kit untuk konsistensi touch & mobile, menambahkan filter & search lanjutan (multi-kriteria, sort), board detail view lengkap, serta migrasi Notes ke database. Milestone M2: fitur inti lengkap.",
      },
      {
        title: "Kolaborasi & Produktivitas",
        metaTags: ["minggu 3-5", "assignment", "real-time", "notifikasi"],
        description:
          "Menambahkan task assignment & team member, comments real-time per task, file attachments via Supabase Storage, notifikasi in-app (Edge Function trigger), serta enhancement dashboard (chart, productivity score). Milestone M3: kolaboratif.",
      },
      {
        title: "Polish, Testing & Deployment",
        metaTags: ["minggu 5-6", "vitest", "playwright", "pwa", "vercel"],
        description:
          "Testing dengan Vitest + React Testing Library + Playwright, menambahkan error boundaries & toast notification, responsive mobile + PWA, serta CI/CD via GitHub Actions + Vercel. Milestone M4: production ready.",
      },
    ],
    contentParagraphs: [
      "Rekan hadir untuk membantu pengguna mengorganisir pekerjaan melalui alur yang jelas: Project → Board → Task → Subtask. Progres dipantau lewat dashboard statistik dan activity calendar, tugas dikelola secara visual pada board Kanban (To Do / In Progress / Done) dengan drag & drop, deadline dijejaki via kalender bulanan, catatan dibuat dengan editor rich text TipTap, dan pengalaman pengguna dipermanis oleh pet companion interaktif.",
      "Dibangun dengan React 19 + Vite 8, animasi halus Framer Motion, ikon Lucide React, rich text editor TipTap 3 (StarterKit, Table, TaskList, Image, Link), serta popover @floating-ui/react. Direncanakan terhubung dengan Supabase (PostgreSQL), dielola state-nya lewat Zustand, dan divisualisasikan dengan Recharts — memberikan fondasi full-stack yang siap dikembangkan.",
      "Saat ini fitur inti (Dashboard, Board, Calendar, Notes, Settings) telah selesai, namun data masih berupa mock data + localStorage dan autentikasi masih simulasi. Roadmap pengembangan ±4-6 minggu diarahkan untuk mencapai data yang persisten, dukungan kolaborasi real-time, hingga status production ready dengan catatan penting seperti merapikan terjemahan UI yang masih campur, merapikan duplikasi kode (LABEL_COLORS, PRIORITY_OPTIONS, formatDate), memecah App.jsx yang sudah mencapai 656 baris, dan upgrade drag-drop dari HTML5 native ke @dnd-kit.",
    ],
  },
  {
    id: "cerita-kita",
    slug: "cerita-kita",
    title: "Cerita-Kita",
    subtitle: "PWA Story Sharing & Exploration Platform",
    tag: "PWA / Social Media",
    gradient: "from-rose-600 via-pink-500 to-fuchsia-500",
    num: "04",
    shortDescription:
      "Platform berbagi cerita inspiratif berbasis Progressive Web App (PWA). Memungkinkan pengguna berbagi cerita & momen, akses offline melalui IndexedDB, Background Sync otomatis saat online, & peta lokasi Leaflet.",
    longDescription:
      "Cerita-Kita adalah aplikasi web berbasis Progressive Web App (PWA) yang memungkinkan pengguna berbagi pengalaman, cerita inspiratif, maupun momen kehidupan kepada pengguna lain melalui antarmuka sederhana dan responsif. Aplikasi ini dirancang tetap optimal meski koneksi terbatas dengan teknologi offline-first seperti Service Worker, IndexedDB, dan Background Sync. Dikembangkan sebagai implementasi teknologi web modern yang berfokus pada performa, aksesibilitas, dan pengalaman pengguna — sehingga aplikasi dapat diinstal layak aplikasi native dan tetap berfungsi ketika perangkat offline.",
    coverImage: "/images/Cerita-Kita.png",
    duration: "2025",
    client: "Dicoding Submission",
    siteUrl: "https://spiffy-kringle-ed8336.netlify.app",
    githubUrl: "https://github.com/mridho24/Cerita-Kita.git",
    tags: ["#pwa", "#story", "#offline-first", "#javascript", "#vite", "#indexeddb", "#service-worker", "#background-sync", "#leaflet", "#netlify"],
    tech: [
      "Vite",
      "JavaScript ES6+",
      "PWA",
      "Service Worker",
      "IndexedDB",
      "Background Sync API",
      "Leaflet.js",
      "HTML5 & CSS3",
      "REST API",
    ],
    timeline: [
      {
        title: "Requirement Analysis & UI/UX Design",
        metaTags: ["kebutuhan fitur", "alur pengguna", "2025"],
        description:
          "Menentukan kebutuhan aplikasi dan fitur utama, merancang tampilan serta alur pengguna untuk pengalaman yang intuitif.",
      },
      {
        title: "Frontend & Story Feature",
        metaTags: ["vite", "berbagi cerita", "development"],
        description:
          "Mengimplementasikan antarmuka menggunakan Vite lalu mengembangkan fitur berbagi dan menjelajahi cerita antar pengguna.",
      },
      {
        title: "Offline Support",
        metaTags: ["service worker", "caching", "offline-first"],
        description:
          "Mengimplementasikan Service Worker dan strategi caching yang efisien agar cerita yang disimpan tetap dapat diakses tanpa koneksi internet.",
      },
      {
        title: "IndexedDB & Background Sync",
        metaTags: ["indexeddb", "sinkronisasi", "reconnecting"],
        description:
          "Menerapkan penyimpanan lokal dengan IndexedDB serta Background Sync sehingga data yang dibuat saat offline otomatis tersinkron ke server ketika perangkat kembali online.",
      },
      {
        title: "Testing & Deployment",
        metaTags: ["online/offline", "netlify", "deploy"],
        description:
          "Menguji fitur dalam kondisi online dan offline, menyempurnakan peta interaktif Leaflet, lalu men-deploy aplikasi menggunakan Netlify.",
      },
    ],
    contentParagraphs: [
      "Cerita-Kita dikembangkan untuk membangun platform berbagi cerita dan pengalaman antar pengguna, mengimplementasikan konsep PWA agar aplikasi dapat digunakan secara offline, menghadirkan pengalaman yang cepat, ringan, dan responsif, menerapkan penyimpanan lokal IndexedDB agar konten tetap dapat diakses tanpa koneksi, serta mengoptimalkan sinkronisasi data melalui Background Sync ketika koneksi kembali tersedia.",
      "Secara arsitektur, aplikasi berjalan di atas frontend Vite yang menangani Story Management, Leaflet Map untuk menampilkan lokasi cerita, IndexedDB sebagai media penyimpanan lokal, serta Service Worker dan Background Sync yang menghubungkan aplikasi ke REST API. Seluruh lapisan ini dirancang agar pengalaman tetap memberi sepenuhnya meskipun pengguna bekerja di tengah koneksi yang tidak stabil.",
      "Project ini fokus pada pembelajaran implementasi PWA secara menyeluruh — memahami cara kerja Service Worker dan strategi caching, menerapkan penyimpanan lokal IndexedDB, serta mengembangkan aplikasi yang tetap berfungsi offline. Hasilnya, Cerita-Kita berhasil mendukung penggunaan offline, memiliki performa cepat berkat mekanisme caching, dapat diinstal pada desktop maupun mobile, memberi pengalaman responsif dan intuitif, sekaligus menghadirkan berbagai fitur utama PWA sesuai praktik pengembangan web modern.",
    ],
  },
  {
    id: "grahcoffee",
    slug: "grahcoffee",
    title: "GrahCoffee System",
    subtitle: "Web & Mobile Coffee Shop Management System",
    tag: "Full-Stack / POS",
    gradient: "from-stone-800 via-amber-800 to-orange-600",
    num: "05",
    shortDescription:
      "Sistem digital terintegrasi untuk operasional coffee shop — dashboard web untuk administrator, aplikasi mobile untuk pelanggan & absensi barcode, serta backend REST API untuk pengelolaan produk, transaksi, pengguna, dan pelaporan secara real-time.",
    longDescription:
      "GrahCoffee adalah sistem digital yang dikembangkan sebagai Tugas Akhir untuk mendukung operasional coffee shop secara terintegrasi melalui aplikasi web, aplikasi mobile, dan backend API. Sistem ini mencakup pengelolaan menu, transaksi, manajemen pengguna, hingga pemantauan data secara real-time. Terdiri dari tiga komponen utama: dashboard web untuk administrator (grahcoffee-frontend), aplikasi mobile untuk pelanggan sekaligus absensi barcode (grahcoffee-mobile), dan REST API sebagai pusat komunikasi data (grahcoffee-backend) yang menangani proses bisnis, autentikasi JWT, serta pengelolaan database.",
    coverImage: "/images/GrahCoffee.png",
    mobileImage: "/images/GrahCoffee-Mobile.jpg",
    duration: "2026 (roadmap 10 minggu)",
    client: "Tugas Akhir (Final Project)",
    siteUrl: "https://grahcoffee-frontend.vercel.app",
    githubUrl: "https://github.com/devgrahcoffee-lab/grahcoffee-frontend",
    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/devgrahcoffee-lab/grahcoffee-frontend",
      },
      {
        label: "Mobile",
        url: "https://github.com/devgrahcoffee-lab/grahcoffee-mobile",
      },
      {
        label: "Backend",
        url: "https://github.com/devgrahcoffee-lab/grahcoffee-backend",
      },
    ],
    tags: ["#coffee-shop", "#fullstack", "#pos", "#react-native"],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "Prisma",
      "Supabase (PostgreSQL)",
      "JWT",
      "Axios",
    ],
    timeline: [
      {
        title: "Requirement Analysis",
        metaTags: ["analysis", "objectives", "week 1"],
        description:
          "Menganalisis kebutuhan digitalisasi operasional coffee shop dan memetakan fitur untuk dashboard web, aplikasi mobile, serta backend API.",
      },
      {
        title: "System Design",
        metaTags: ["architecture", "client-server", "week 2"],
        description:
          "Merancang arsitektur client-server dengan tiga komponen terpisah — web dashboard, mobile app, dan REST API — agar mudah dikembangkan dan diskalakan.",
      },
      {
        title: "Backend Development",
        metaTags: ["node.js", "express", "jwt auth", "week 3-4"],
        description:
          "Membangun REST API dengan Node.js, Express, dan Prisma — mencakup autentikasi, user, product, category, order, payment, serta reporting API.",
      },
      {
        title: "Frontend & Mobile Development",
        metaTags: ["react", "expo", "react native", "week 5-6"],
        description:
          "Mengembangkan dashboard admin berbasis web (React + Tailwind) serta aplikasi mobile (React Native + Expo) untuk katalog produk, keranjang, checkout, dan absensi barcode.",
      },
      {
        title: "API Integration",
        metaTags: ["axios", "integration", "week 7"],
        description:
          "Mengintegrasikan seluruh layanan frontend dan mobile dengan backend API, memastikan transaksi dan pelaporan berjalan real-time.",
      },
      {
        title: "Testing & Deployment",
        metaTags: ["testing", "bug fixing", "deploy", "week 8-9"],
        description:
          "Melakukan pengujian, perbaikan bug, serta deployment sistem ke production hingga siap digunakan secara nyata.",
      },
    ],
    contentParagraphs: [
      "GrahCoffee bertujuan mendigitalisasi seluruh operasional coffee shop — mempermudah pemesanan produk, menyediakan dashboard administrasi, menghadirkan aplikasi mobile yang mudah digunakan, mengintegrasikan seluruh layanan lewat REST API, serta meningkatkan efisiensi pengelolaan data dan transaksi.",
      "Arsitekturnya memisahkan tiga komponen: dashboard web untuk administrator (user management, product, category, order, reporting), aplikasi mobile untuk pelanggan (katalog produk, keranjang, checkout, riwayat pesanan, profil) plus absensi barcode, dan backend API yang menjadi pusat komunikasi data. Seluruh data tersimpan pada database Supabase — yang berbasis PostgreSQL — sehingga konsisten, relasional, dan mudah diskalakan.",
      "Dengan desain modular dan client-server, sistem ini mudah dikembangkan dan diskalakan. Rencana pengembangan ke depan mencakup online payment gateway, push notification, loyalty program, QR order, inventory management, sales analytics, voucher & promo, hingga multi-outlet support.",
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(
    (project) => project.slug === slug || project.id === slug,
  )
}

export function getProjects(): Project[] {
  return projects
}