import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { CTASection } from "@/components/sections/CTASection"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <ProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
