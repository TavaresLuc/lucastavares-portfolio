"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, ChevronDown, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function EnhancedHero() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 pt-20 relative overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar with online status */}
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center text-5xl font-bold text-primary-foreground shadow-2xl relative group hover:scale-105 transition-transform duration-300">
              LT
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-background animate-pulse"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Main heading */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="block text-foreground mb-2">{t("hero.greeting") || "Hi, I'm"}</span>
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Lucas Tavares
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-6">
              {t("hero.title") || "Full Stack Developer & Designer"}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/40 mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {t("hero.description") ||
                "I create beautiful, performant web applications that solve real problems. Passionate about modern technologies and great user experiences."}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 h-auto py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 group shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                {t("hero.cta") || "Get in Touch"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProjects}
                className="text-lg px-8 h-auto py-3 border-primary/40 hover:border-primary/60 hover:bg-primary/5 transition-all duration-200 group rounded-lg"
              >
                {t("projects.title") || "View Projects"}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={`transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button
              onClick={scrollToProjects}
              className="animate-bounce hover:text-primary transition-colors duration-200 inline-block"
            >
              <ChevronDown className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
