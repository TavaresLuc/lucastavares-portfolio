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
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t("about.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>

          <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg">
                  LT
                </div>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground text-center mb-8">{t("about.description")}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000 + index * 200} />
                      <div className="text-sm text-muted-foreground mt-2 font-medium">
                        {t("about.title") === "About Me" ? stat.labelEn : stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional visual elements */}
              <div className="mt-8 flex justify-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-primary/40 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
