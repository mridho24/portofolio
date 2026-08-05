"use client"

import { useRouter, usePathname } from "next/navigation"

export function ProjectBackLink() {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToProjects = () => {
    const targetEl = document.getElementById("projects")
    if (!targetEl) return
    const navOffset = 80
    const elementPosition = targetEl.getBoundingClientRect().top
    window.scrollTo({
      top: window.pageYOffset + elementPosition - navOffset,
      behavior: "smooth",
    })
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname === "/") {
      scrollToProjects()
      return
    }

    router.push("/")
    window.setTimeout(scrollToProjects, 600)
  }

  return (
    <a
      href="/#projects"
      onClick={handleClick}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-body hover:text-orange transition-colors duration-300"
    >
      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      All Projects
    </a>
  )
}