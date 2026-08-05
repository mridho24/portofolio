export interface NavLink {
  label: string
  href: string
}

import type { Project as ProjectDetail } from "@/data/projects"

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  href?: string
}

export type { ProjectDetail }

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Skill {
  name: string
  level: number
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}
