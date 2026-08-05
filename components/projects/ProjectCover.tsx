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
        {project.mobileImage ? (
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
            {/* Web screenshot */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] shadow-card">
              {project.coverImage ? (
                <Image
                  src={project.coverImage}
                  alt={`${project.title} web screenshot`}
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

            {/* Mobile screenshot */}
            <div className="relative mx-auto w-64 md:w-72 shrink-0 rounded-[28px] border-[6px] border-navy shadow-card overflow-hidden aspect-[9/19]">
              <Image
                src={project.mobileImage}
                alt={`${project.title} mobile screenshot`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
          </div>
        ) : (
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
        )}
      </Container>
    </section>
  )
}