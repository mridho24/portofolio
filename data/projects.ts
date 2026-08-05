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
  duration: string
  client: string
  siteUrl?: string
  githubUrl: string
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
      "Aplikasi manajemen tugas interaktif dengan tampilan board Kanban, sistem drag & drop task, dashboard statistik aktivitas, multi-project workspace, modal edit detail task, serta dukungan Dark / Light mode.",
    longDescription:
      "Rekan adalah aplikasi manajemen tugas interaktif berbasis board Kanban. Pengguna dapat mengorganisir pekerjaan secara visual melalui sistem drag & drop, memantau aktivitas dengan dashboard statistik, dan bekerja pada multi-project workspace. Aplikasi ini juga menyediakan modal untuk mengedit detail task serta dukungan penuh mode gelap dan terang.",
    coverImage: "/images/Rekan.png",
    duration: "2025",
    client: "Personal Project",
    githubUrl: "https://github.com/mridho24/Rekan.git",
    tags: ["#kanban", "#productivity", "#react"],
    tech: ["React 19", "Vite", "Framer Motion", "Supabase Client", "Lucide Icons"],
    timeline: [
      {
        title: "Start",
        metaTags: ["planning", "ui design", "2025"],
        description:
          "Merancang konsep board Kanban dan pengalaman interaksi drag & drop yang mulus.",
      },
      {
        title: "Development",
        metaTags: ["react 19", "framer motion", "vite"],
        description:
          "Membangun kanban board, dashboard statistik, dan multi-project workspace dengan animasi halus berbasis Framer Motion.",
      },
      {
        title: "Polish",
        metaTags: ["dark mode", "ux", "testing"],
        description:
          "Menambahkan dark/light mode serta menyempurnakan interaksi edit detail task.",
      },
      {
        title: "Launch",
        metaTags: ["deployment"],
        description:
          "Meluncurkan aplikasi untuk penggunaan sehari-hari.",
      },
    ],
    contentParagraphs: [
      "Rekan dibangun dengan fokus pada pengalaman interaksi visual — membuat pengelolaan tugas terasa intuitif dan menyenangkan, bukan monoton.",
      "Animasi halus dan dukungan mode gelap menjadikan aplikasi ini nyaman digunakan dalam berbagai kondisi kerja.",
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
      "Platform berbagi cerita inspiratif berbasis Progressive Web App (PWA). Memungkinkan pengguna berbagi pengalaman, akses cerita offline dengan IndexedDB, Background Sync otomatis saat online, & peta lokasi Leaflet.",
    longDescription:
      "Cerita-Kita adalah platform berbagi cerita inspiratif berbasis Progressive Web App (PWA). Pengguna dapat membagikan pengalaman mereka dan menjelajahi cerita orang lain. Aplikasi ini mendukung akses offline melalui IndexedDB, sinkronisasi otomatis saat kembali online (Background Sync), serta visualisasi lokasi cerita menggunakan peta Leaflet.",
    coverImage: "/images/Cerita-Kita.png",
    duration: "2025",
    client: "Dicoding Submission",
    siteUrl: "https://spiffy-kringle-ed8336.netlify.app",
    githubUrl: "https://github.com/mridho24/Cerita-Kita.git",
    tags: ["#pwa", "#story", "#offline-first"],
    tech: ["Vite", "Leaflet Maps", "PWA", "IndexedDB", "Service Worker"],
    timeline: [
      {
        title: "Start",
        metaTags: ["planning", "pwa setup", "2025"],
        description:
          "Merancang platform berbagi cerita dan menyiapkan arsitektur PWA dengan service worker.",
      },
      {
        title: "Development",
        metaTags: ["indexeddb", "background sync", "leaflet"],
        description:
          "Membangun fitur berbagi cerita, akses offline lewat IndexedDB, dan sinkronisasi otomatis saat online.",
      },
      {
        title: "Launch",
        metaTags: ["deployment", "netlify"],
        description:
          "Menyempurnakan fitur peta lokasi dan meluncurkan platform ke production.",
      },
    ],
    contentParagraphs: [
      "Cerita-Kita menekankan prinsip offline-first sehingga pengguna tetap dapat membaca dan menulis cerita bahkan tanpa koneksi internet.",
      "Pendekatan PWA membuat akses cepat dan ringan, seolah-olah aplikasi native namun tanpa perlu instalasi kompleks.",
    ],
  },
  {
    id: "manage-inventory",
    slug: "manage-inventory",
    title: "Manage-Inventory",
    subtitle: "Coffee Shop Inventory & Stock System",
    tag: "Business / ERP",
    gradient: "from-amber-600 via-orange-500 to-yellow-500",
    num: "05",
    shortDescription:
      "Aplikasi web modern untuk membantu pemilik kedai kopi memantau stok barang real-time (bubuk, cup, susu), manajemen transaksi stok masuk & keluar, alert low stock, serta grafik visualisasi laporan Recharts.",
    longDescription:
      "Manage-Inventory adalah aplikasi web modern untuk membantu pemilik kedai kopi mengelola inventori. Aplikasi ini menyediakan pemantauan stok barang real-time (seperti bubuk kopi, cup, dan susu), manajemen transaksi stok masuk dan keluar, notifikasi low stock, serta visualisasi laporan dalam bentuk grafik interaktif menggunakan Recharts.",
    duration: "2025",
    client: "Course Project",
    githubUrl: "https://github.com/mridho24/Manage-Inventory.git",
    tags: ["#inventory", "#erp", "#dashboard"],
    tech: ["Next.js 15", "React 19", "Tailwind CSS v4", "TypeScript", "Recharts", "Shadcn UI"],
    timeline: [
      {
        title: "Start",
        metaTags: ["planning", "database design", "2025"],
        description:
          "Merancang skema database inventori dan alur transaksi stok masuk/keluar untuk kedai kopi.",
      },
      {
        title: "Development",
        metaTags: ["next.js", "recharts", "crud"],
        description:
          "Membangun modul pemantauan stok real-time, alert low stock, dan grafik laporan berbasis Recharts.",
      },
      {
        title: "Launch",
        metaTags: ["polish", "deployment"],
        description:
          "Menyempurnakan UI dan menyiapkan aplikasi agar siap dipakai oleh pemilik usaha.",
      },
    ],
    contentParagraphs: [
      "Dibangun untuk menjawab kebutuhan sederhana namun penting pemilik usaha kecil: mengetahui stok yang hampir habis sebelum kehabisan.",
      "Dashboard visual memudahkan pemilik kedai memahami tren pemakaian stok sehingga pengadaan barang menjadi lebih tepat waktu.",
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