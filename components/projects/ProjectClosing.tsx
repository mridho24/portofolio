import type { Project } from "@/data/projects"
import { Container } from "@/components/ui/Container"

interface ProjectClosingProps {
  project: Project
}

export function ProjectClosing({ project }: ProjectClosingProps) {
  if (!project.contentParagraphs || project.contentParagraphs.length === 0) {
    return null
  }

  return (
    <section className="bg-white pt-4 pb-24">
      <Container>
        <div className="max-w-3xl space-y-6">
          {project.contentParagraphs.map((paragraph, index) => (
            <p key={index} className="text-[17px] leading-relaxed text-body">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  )
}