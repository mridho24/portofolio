import Link from "next/link"
import type { Project } from "@/data/projects"
import { Container } from "@/components/ui/Container"

interface ProjectNextProps {
  nextProject: Project
}

export function ProjectNext({ nextProject }: ProjectNextProps) {
  return (
    <section className="bg-white pt-4 pb-28">
      <Container>
        <Link
          href={`/projects/${nextProject.slug}`}
          className={`group relative block overflow-hidden rounded-[32px] bg-gradient-to-br ${nextProject.gradient} p-10 md:p-14 transition-transform duration-300 hover:scale-[1.01]`}
        >
          {/* Decorative shapes */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute top-8 right-8 h-40 w-40 rounded-full bg-white/8 border border-white/12 pointer-events-none" />
          <div className="absolute bottom-12 left-1/3 h-28 w-28 rounded-full bg-white/6 border border-white/10 pointer-events-none" />

          {/* Watermark */}
          <span className="absolute top-6 right-10 text-[6rem] md:text-[8rem] font-extrabold text-white/8 leading-none select-none font-heading pointer-events-none">
            {nextProject.num}
          </span>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/25 px-4 py-1.5 text-[11px] font-semibold text-white uppercase tracking-widest">
                Next Project
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
                {nextProject.title}
              </h2>
              {nextProject.subtitle && (
                <p className="mt-2 text-xs md:text-sm font-medium text-white/75 uppercase tracking-widest">
                  {nextProject.subtitle}
                </p>
              )}
            </div>

            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-lg transition-all duration-300 group-hover:bg-orange group-hover:text-white group-hover:translate-x-1">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </Link>
      </Container>
    </section>
  )
}