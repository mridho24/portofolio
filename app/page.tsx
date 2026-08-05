import { Hero } from "@/components/sections/Hero"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { CTASection } from "@/components/sections/CTASection"

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <CTASection />
    </main>
  )
}