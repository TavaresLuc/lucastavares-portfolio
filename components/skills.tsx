"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Monitor, Database, Settings, Palette, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.backend"),
      icon: Server,
      skills: ["C# .NET", "Java", "API RESTful", "SQL Server", "MySQL", "PostgreSQL"],
    },
    {
      title: t("skills.frontend"),
      icon: Monitor,
      skills: ["ReactJS", "TypeScript", "HTML5", "CSS3", "SASS", "Tailwind CSS"],
    },
    {
      title: t("skills.database"),
      icon: Database,
      skills: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "SQLite", "T-SQL"],
    },
    {
      title: t("skills.tools"),
      icon: Settings,
      skills: ["Git", "CI/CD", "SOLID", "Clean Architecture", "TDD", "DDD", "Microservices"],
    },
    {
      title: t("skills.design"),
      icon: Palette,
      skills: ["Figma", "Design System", "Accessibility", "Responsive Design"],
    },
    {
      title: t("skills.soft"),
      icon: Heart,
      skills: [
        t("skills.soft.learning"),
        t("skills.soft.teamwork"),
        t("skills.soft.problem"),
        t("skills.soft.proactive"),
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("skills.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Languages Section */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">{t("languages.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold">{t("languages.portuguese")}</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{t("languages.english")}</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{t("languages.spanish")}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
