"use client"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import EnhancedHeader from "@/components/enhanced-header"
import EnhancedHero from "@/components/enhanced-hero"
import EnhancedAbout from "@/components/enhanced-about"
import EnhancedExperience from "@/components/enhanced-experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import EnhancedContact from "@/components/enhanced-contact"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <EnhancedHeader />
          <main>
            <EnhancedHero />
            <EnhancedAbout />
            <EnhancedExperience />
            <Skills />
            <Projects />
            <Education />
            <EnhancedContact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
