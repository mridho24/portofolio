import Image from "next/image"
import type { Project } from "@/data/projects"
import { Container } from "@/components/ui/Container"

interface ProjectCoverProps {
  project: Project
}

export function ProjectCover({ project }: ProjectCoverProps) {
  return (
    <section className="bg-white pb-4">
      <Container>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] shadow-card">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              <span className="text-4xl md:text-6xl font-extrabold text-white/90 font-heading tracking-tight px-6 text-center">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}