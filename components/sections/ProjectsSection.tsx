"use client"

const projects = [
  {
    id: "purrpal",
    title: "PURRPAL",
    num: "01",
    subtitle: "AI-Powered Cat Healthcare Platform",
    description:
      "Platform kesehatan kucing berbasis AI 24/7 di Indonesia. Menggabungkan Symptom Analysis (Random Forest 87.3%), Vision Skin Disease Detection (CNN 85.2%), Conversational AI Gemini 2.0, & Finder Layanan Veteriner.",
    gradient: "from-emerald-800 via-teal-700 to-cyan-600",
    tag: "AI / Healthcare",
    href: "https://github.com/Hidayattt24/PURRPAL.git",
    liveUrl: "https://fe-purrpal.vercel.app/",
    tech: ["Next.js 15", "Python FastAPI", "TensorFlow", "Google Cloud", "Gemini 2.0", "Supabase"],
  },
  {
    id: "rekan",
    title: "Rekan",
    num: "02",
    subtitle: "Interactive Kanban Task Management App",
    description:
      "Aplikasi manajemen tugas interaktif dengan tampilan board Kanban, sistem drag & drop task, dashboard statistik aktivitas, multi-project workspace, modal edit detail task, serta dukungan Dark / Light mode.",
    gradient: "from-violet-700 via-purple-600 to-indigo-500",
    tag: "Productivity App",
    href: "https://github.com/mridho24/Rekan.git",
    tech: ["React 19", "Vite", "Framer Motion", "Supabase Client", "Lucide Icons"],
  },
  {
    id: "cerita-kita",
    title: "Cerita-Kita",
    num: "03",
    subtitle: "PWA Story Sharing & Exploration Platform",
    description:
      "Platform berbagi cerita inspiratif berbasis Progressive Web App (PWA). Memungkinkan pengguna berbagi pengalaman, akses cerita offline dengan IndexedDB, Background Sync otomatis saat online, & peta lokasi Leaflet.",
    gradient: "from-rose-600 via-pink-500 to-fuchsia-500",
    tag: "PWA / Social Media",
    href: "https://github.com/mridho24/Cerita-Kita.git",
    liveUrl: "https://spiffy-kringle-ed8336.netlify.app",
    tech: ["Vite", "Leaflet Maps", "PWA", "IndexedDB", "Service Worker"],
  },
  {
    id: "manage-inventory",
    title: "Manage-Inventory",
    num: "04",
    subtitle: "Coffee Shop Inventory & Stock System",
    description:
      "Aplikasi web modern untuk membantu pemilik kedai kopi memantau stok barang real-time (bubuk, cup, susu), manajemen transaksi stok masuk & keluar, alert low stock, serta grafik visualisasi laporan Recharts.",
    gradient: "from-amber-600 via-orange-500 to-yellow-500",
    tag: "Business / ERP",
    href: "https://github.com/mridho24/Manage-Inventory.git",
    tech: ["Next.js 15", "React 19", "Tailwind CSS v4", "TypeScript", "Recharts", "Shadcn UI"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="project-gallery-wrapper bg-[#F9FAFB] py-28 relative">
      {/* Section Header */}
      <div className="mx-auto w-full max-w-[1280px] px-6 mb-20">
        <div className="flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-4 py-1.5 text-xs font-semibold text-orange uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-ping-soft inline-block" />
            Recent Work
          </span>
          <h2 className="project-section-heading text-center text-4xl md:text-5xl font-extrabold font-heading">
            <span className="bg-gradient-to-r from-navy via-navy to-orange bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h2>
          <p className="project-section-sub text-center text-body max-w-md text-sm leading-relaxed">
            A selection of projects I&apos;ve built — from AI-powered platforms to modern web &amp; mobile applications.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ★ STICKY 3D STACKED CARDS
          Each card uses sticky top positioning. As user scrolls down,
          each card stacks cleanly over the previous one, while GSAP
          animates scale & depth on the cards beneath it.
      ═══════════════════════════════════════════════════════════ */}
      <div className="projects-cards-stack mx-auto w-full max-w-[1000px] px-6 flex flex-col gap-16 pb-16">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="project-stack-card sticky top-28 rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 block"
            style={{
              zIndex: i + 1,
            }}
          >
            <div
              className={`relative min-h-[460px] md:min-h-[520px] bg-gradient-to-br ${project.gradient} flex flex-col justify-end p-8 md:p-12`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />

              {/* Decorative background shapes */}
              <div className="absolute top-8 right-8 h-40 w-40 rounded-full bg-white/8 border border-white/12 pointer-events-none" />
              <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-white/4 pointer-events-none" />
              <div className="absolute bottom-12 left-1/3 h-28 w-28 rounded-full bg-white/6 border border-white/10 pointer-events-none" />

              {/* Project number watermark */}
              <span className="absolute top-6 left-8 text-[7rem] md:text-[9.5rem] font-extrabold text-white/8 leading-none select-none font-heading pointer-events-none">
                {project.num}
              </span>

              {/* Card index counter (top right) */}
              <div className="absolute top-8 right-8 flex items-center gap-2 z-10">
                <span className="rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-widest border border-white/25">
                  {project.num} / {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              {/* Content area */}
              <div className="relative z-10">
                {/* Tag pill */}
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/25 px-4 py-1.5 text-[11px] font-semibold text-white uppercase tracking-widest">
                  {project.tag}
                </span>

                {/* Title & Subtitle */}
                <h3 className="text-3xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm font-medium text-white/75 tracking-wide uppercase mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-white/85 leading-relaxed mb-6 max-w-2xl">
                  {project.description}
                </p>

                {/* Footer row: Tech tags + Action buttons */}
                <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/20">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/15 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-white text-navy px-5 py-2.5 text-xs md:text-sm font-bold shadow-md hover:bg-orange hover:text-white transition-all duration-300"
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping-soft" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <span>Live Demo</span>
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    )}

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-xs md:text-sm font-semibold text-white backdrop-blur-sm border border-white/25 hover:bg-white/35 transition-colors duration-300"
                    >
                      <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
