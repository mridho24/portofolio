import Image from "next/image"
import type { Project } from "@/data/projects"
import { Container } from "@/components/ui/Container"

interface ProjectTimelineProps {
  project: Project
}

export function ProjectTimeline({ project }: ProjectTimelineProps) {
  if (!project.timeline || project.timeline.length === 0) return null

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy font-heading">
            Project Timeline
          </h2>

          <div className="relative mt-12 border-l-2 border-navy/10 pl-10 md:pl-14">
            {project.timeline.map((item) => (
              <div key={item.title} className="relative pb-14 last:pb-0">
                {/* Dot marker */}
                <span className="absolute -left-[45px] md:-left-[61px] top-1.5 h-3 w-3 rounded-full bg-orange ring-4 ring-orange/15" />

                <div className="flex items-start gap-4">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="mt-0.5 h-12 w-12 shrink-0 rounded-lg object-cover shadow-sm"
                    />
                  )}

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-navy font-heading">
                      {item.title}
                    </h3>
                    {item.metaTags && item.metaTags.length > 0 && (
                      <p className="mt-1.5 text-[11px] md:text-xs font-medium uppercase tracking-widest text-muted">
                        {item.metaTags.join(" • ")}
                      </p>
                    )}
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}