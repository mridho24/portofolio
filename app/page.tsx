import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { CTASection } from "@/components/sections/CTASection"
import { Reveal } from "@/components/ui/Reveal"
import { SectionDivider } from "@/components/ui/SectionDivider"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <SectionDivider from="bg-peach" to="bg-white" />
        <Reveal>
          <ServicesSection />
        </Reveal>

        <SectionDivider from="bg-white" to="bg-peach" />
        <Reveal>
          <AboutSection />
        </Reveal>

        <SectionDivider from="bg-peach" to="bg-white" />
        <Reveal>
          <StatsSection />
        </Reveal>

        <Reveal>
          <ProjectsSection />
        </Reveal>

        <Reveal>
          <CTASection />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}
