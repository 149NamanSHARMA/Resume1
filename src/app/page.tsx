import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { TeamProjectsSection } from "@/components/team-projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <section id="home">
        <HeroSection />
      </section>
      <SkillsSection />
      <ProjectsSection />
      <TeamProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}