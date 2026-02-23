"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Database, Code, Shield, Building2, Wrench, Trophy } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function EnhancedExperience() {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Database,
      title: t("experience.highlight1.title"),
      description: t("experience.highlight1.desc"),
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: Code,
      title: t("experience.highlight2.title"),
      description: t("experience.highlight2.desc"),
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
    {
      icon: Wrench,
      title: t("experience.highlight3.title"),
      description: t("experience.highlight3.desc"),
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      icon: Shield,
      title: t("experience.highlight4.title"),
      description: t("experience.highlight4.desc"),
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
    },
  ]

  const companies = ["BrasilCard", "Softcom Tecnologia"]
  const technologies = ["C# .NET", "VB6", "ReactJS", "SQL Server", "MySQL", "Crystal Reports", "Git"]
  const achievements = ["90%", "40%", "4+", "15+"]

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg ${highlight.bgColor} flex items-center justify-center`}>
                        <IconComponent className={`h-6 w-6 ${highlight.color}`} />
                      </div>
                      <CardTitle className="text-lg">{highlight.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>


        </div>
      </div>
    </section>
  )
}
