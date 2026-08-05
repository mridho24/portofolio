import type { Project } from "@/data/projects"
import { Container } from "@/components/ui/Container"

interface ProjectMetaProps {
  project: Project
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <section className="bg-white pt-8 pb-2">
      <Container>
        <div className="border-t border-navy/8 pt-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Duration */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
              Duration
            </p>
            <p className="mt-2 text-sm font-bold text-navy font-heading">
              {project.duration}
            </p>
          </div>

          {/* Client */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
              Client
            </p>
            <p className="mt-2 text-sm font-bold text-navy font-heading">
              {project.client}
            </p>
          </div>

          {/* Site */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
              Site
            </p>
            {project.siteUrl ? (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-orange font-heading transition-colors duration-300 hover:text-navy"
              >
                {project.siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ) : (
              <p className="mt-2 text-sm font-bold text-navy/60 font-heading">—</p>
            )}
          </div>

          {/* Tags */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
              Tags
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-orange/20 bg-orange/5 px-3 py-1 text-xs font-semibold text-orange"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}