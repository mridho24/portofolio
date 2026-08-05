import type { Project } from "@/data/projects"
import { Container } from "@/components/ui/Container"

interface ProjectDescriptionProps {
  project: Project
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="max-w-3xl">
          <p className="text-[17px] leading-relaxed text-body">
            {project.longDescription}
          </p>
        </div>
      </Container>
    </section>
  )
}