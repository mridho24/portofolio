import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProject, getProjects } from "@/data/projects"
import { ProjectHeader } from "@/components/projects/ProjectHeader"
import { ProjectCover } from "@/components/projects/ProjectCover"
import { ProjectMeta } from "@/components/projects/ProjectMeta"
import { ProjectDescription } from "@/components/projects/ProjectDescription"
import { ProjectTimeline } from "@/components/projects/ProjectTimeline"
import { ProjectCertificate } from "@/components/projects/ProjectCertificate"
import { ProjectClosing } from "@/components/projects/ProjectClosing"
import { ProjectNext } from "@/components/projects/ProjectNext"

export function generateStaticParams(): { slug: string }[] {
  return getProjects().map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) {
    return { title: "Project Not Found" }
  }
  return {
    title: `${project.title} | Muhammad Ridho Portfolio`,
    description: project.shortDescription,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const projects = getProjects()
  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <main className="bg-white">
      <ProjectHeader project={project} />
      <ProjectCover project={project} />
      <ProjectMeta project={project} />
      <ProjectDescription project={project} />
      <ProjectTimeline project={project} />
      <ProjectCertificate project={project} />
      <ProjectClosing project={project} />
      {nextProject && <ProjectNext nextProject={nextProject} />}
    </main>
  )
}