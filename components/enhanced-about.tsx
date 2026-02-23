"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function AnimatedCounter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration])

  return (
    <div ref={counterRef} className="text-3xl font-bold text-primary">
      {count}
      {suffix}
    </div>
  )
}

export default function EnhancedAbout() {
  const { t } = useLanguage()

  const stats = [
    { value: 4, suffix: "+", label: "Anos de Experiência", labelEn: "Years of Experience" },
    { value: 15, suffix: "+", label: "Tecnologias", labelEn: "Technologies" },
    { value: 50, suffix: "+", label: "Projetos", labelEn: "Projects" },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">{t("about.title")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {t("about.title") === "About Me" ? "Who I Am" : "Quem Eu Sou"}
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start mb-16">
            {/* Avatar Side */}
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center text-5xl font-bold text-primary-foreground shadow-2xl flex-shrink-0 hover:scale-105 transition-transform duration-300">
                LT
              </div>
            </div>

            {/* Description */}
            <Card className="md:col-span-4 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  {t("about.description")}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {t("about.title") === "About Me" ? "Available for new projects" : "Disponível para novos projetos"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                  <div className="h-1 w-full bg-gradient-to-r from-primary/20 to-primary/60"></div>
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 p-4 rounded-xl bg-primary/10 inline-block group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000 + index * 200} />
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {t("about.title") === "About Me" ? stat.labelEn : stat.label}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
