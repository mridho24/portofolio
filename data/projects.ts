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
      "Purrpal adalah platform kesehatan kucing all-in-one berbasis AI yang tersedia 24/7, dirancang khusus untuk pemilik kucing di Indonesia. Platform ini menggabungkan tiga inti kecerdasan buatan: analisis gejala dengan model Random Forest (akurasi 87.3%), pendeteksian penyakit kulit melalui computer vision CNN (akurasi 85.2%), serta conversational AI berbasis Gemini 2.0 untuk menjawab pertanyaan seputar perawatan kucing. Selain itu, Purrpal dilengkapi pencari layanan veteriner sehingga pengguna dapat langsung menemukan klinik hewan terdekat ketika dibutuhkan.",
    coverImage: "/images/Purrpal.png",
    duration: "2024 - 2025",
    client: "DBS Foundation Coding Camp",
    siteUrl: "https://fe-purrpal.vercel.app/",
    githubUrl: "https://github.com/Hidayattt24/PURRPAL.git",
    tags: ["#ai", "#healthcare", "#machine-learning", "#indonesia"],
    tech: [
      "Next.js 15",
      "Python FastAPI",
      "TensorFlow",
      "Google Cloud",
      "Gemini 2.0",
      "Supabase",
    ],
    timeline: [
      {
        title: "Start",
        metaTags: ["planning", "project lead", "2024"],
        description:
          "Menyusun riset kebutuhan pemilik kucing di Indonesia serta memetakan arsitektur platform dan model AI yang akan dibangun.",
      },
      {
        title: "Development · Symptom Analysis",
        metaTags: ["random forest", "87.3% accuracy", "ml pipeline"],
        description:
          "Membangun dan melatih model Random Forest untuk menganalisis gejala yang dimasukkan pengguna serta memberikan rekomendasi awal penanganan.",
      },
      {
        title: "Milestone · Skin Disease Detection",
        metaTags: ["computer vision", "cnn", "85.2% accuracy"],
        description:
          "Melatih model CNN untuk mendeteksi penyakit kulit kucing dari foto unggahan pengguna secara real-time.",
      },
      {
        title: "Development · Conversational AI",
        metaTags: ["gemini 2.0", "chatbot", "integration"],
        description:
          "Mengintegrasikan Gemini 2.0 sebagai asisten percakapan 24/7 yang menjawab pertanyaan seputar kesehatan dan perawatan kucing.",
      },
      {
        title: "Launch",
        metaTags: ["deployment", "best capstone", "2025"],
        description:
          "Merilis platform ke production dan menyabet penghargaan Best Capstone Project pada Coding Camp 2025.",
      },
    ],
    contentParagraphs: [
      "Purrpal lahir dari keprihatinan akan sulitnya akses informasi dan layanan kesehatan kucing yang cepat di Indonesia. Banyak pemilik kucing yang kebingungan ketika kucingnya sakit karena keterbatasan pengetahuan dan jam operasional klinik. Purrpal hadir sebagai solusi digital yang selalu tersedia.",
      "Dengan menggabungkan analisis gejala, pendeteksian penyakit kulit dari foto, dan asisten AI percakapan, Purrpal memberikan panduan awal yang cepat dan terukur sebelum pengguna memutuskan untuk datang ke klinik. Hal ini membantu pengambilan keputusan yang lebih tepat dan tenang.",
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
    title: "AI Productivity Planner",
    subtitle: "AI-Powered Smart Task Manager & Insight Engine",
    tag: "AI / Productivity",
    gradient: "from-cyan-700 via-blue-600 to-indigo-700",
    num: "02",
    shortDescription:
      "Task manager berbasis web dengan bantuan AI — pecah tugas besar jadi sub-task + estimasi waktu, dan dapatkan ringkasan insight mingguan.",
    longDescription:
      "AI Productivity Planner adalah task manager modern yang ditenagai oleh AI. Alat ini membantu pengguna memecah tugas besar menjadi sub-task yang lebih kecil dan realistis, lengkap dengan estimasi waktu pengerjaan. Setiap minggunya, pengguna mendapatkan ringkasan insight tentang produktivitas mereka sehingga bisa terus memperbaiki cara kerja.",
    coverImage: "/images/ai-productivity.png",
    duration: "2025",
    client: "Personal Project",
    githubUrl: "https://github.com/mridho24/ai-productivity-planner.git",
    tags: ["#ai", "#productivity", "#task-manager"],
    tech: ["Next.js", "Prisma", "Supabase", "Google Gemini"],
    timeline: [
      {
        title: "Start",
        metaTags: ["planning", "product design", "2025"],
        description:
          "Merancang alur task management serta menentukan bagaimana AI memberikan estimasi dan rekomendasi sub-task.",
      },
      {
        title: "Development",
        metaTags: ["gemini ai", "prisma", "supabase"],
        description:
          "Membangun fitur pemecahan otomatis tugas dan estimasi waktu berbasis Gemini serta menyimpan data lewat Prisma/Supabase.",
      },
      {
        title: "Insight Engine",
        metaTags: ["weekly summary", "analytics"],
        description:
          "Menambahkan engine ringkasan insight mingguan untuk memantau tren produktivitas pengguna.",
      },
      {
        title: "Launch",
        metaTags: ["polish", "deployment"],
        description:
          "Menyempurnakan antarmuka dan meluncurkan platform untuk penggunaan pribadi.",
      },
    ],
    contentParagraphs: [
      "Berfokus pada kebiasaan 'tyranny of tasks' yang sering membuat pekerjaan terasa berat, planner ini memanfaatkan kecerdasan buatan untuk menyederhanakan perencanaan harian dan mingguan.",
      "Insight mingguan memberikan refleksi objektif terhadap pola kerja, membantu pengguna mengidentifikasi apa yang paling produktif dan apa yang perlu ditingkatkan.",
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