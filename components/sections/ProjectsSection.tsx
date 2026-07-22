"use client"

const projects = [
  {
    id: "purrpal",
    title: "PURRPAL",
    description:
      "Platform kesehatan kucing berbasis AI yang revolusioner, dirancang khusus untuk mengatasi tantangan akses layanan veteriner di Indonesia.",
    gradient: "from-emerald-600 to-teal-500",
    accent: "bg-emerald-500",
    href: "https://github.com/Hidayattt24/PURRPAL.git",
    tech: ["AI/ML", "Flutter", "Firebase"],
  },
  {
    id: "rekan",
    title: "Rekan",
    description:
      "A beautiful, responsive task management platform (Trello Clone) featuring customizable workspaces.",
    gradient: "from-violet-600 to-purple-500",
    accent: "bg-violet-500",
    href: "https://github.com/mridho24/Rekan.git",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "cerita-kita",
    title: "Cerita-Kita",
    description:
      "Platform berbagi cerita yang menghubungkan orang-orang melalui pengalaman dan kisah inspiratif mereka.",
    gradient: "from-rose-500 to-pink-500",
    accent: "bg-rose-500",
    href: "https://github.com/mridho24/Cerita-Kita.git",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "manage-inventory",
    title: "Manage-Inventory",
    description:
      "Aplikasi web modern berbasis Next.js untuk membantu pemilik kedai kopi memantau dan mengelola stok barang secara real-time.",
    gradient: "from-amber-600 to-orange-500",
    accent: "bg-amber-500",
    href: "https://github.com/mridho24/Manage-Inventory.git",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <h2 className="mb-16 text-center text-4xl md:text-5xl font-extrabold font-heading">
          <span className="bg-gradient-to-r from-navy via-navy to-orange bg-clip-text text-transparent">
            Recent Project
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[24px] overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2"
            >
              <div
                className={`relative h-56 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center gap-3`}
              >
                <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/20 transition-all group-hover:scale-105">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View on GitHub</span>
                </div>

                {/* Tech badges - show on hover */}
                <div className="flex flex-wrap justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${project.accent}`} />
                  <h3 className="text-base font-bold text-navy font-heading">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-body leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
