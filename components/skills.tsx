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
    <section id="skills" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">{t("skills.title")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {t("skills.title") === "Skills" ? "Technical Expertise" : "Expertise Técnico"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("skills.title") === "Skills" 
                ? "A comprehensive set of technologies and tools I've mastered over the years"
                : "Um conjunto abrangente de tecnologias e ferramentas que domino"}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className="h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group overflow-hidden"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-primary/20 to-primary/60"></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs hover:bg-secondary/80 transition-colors"
                        >
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
          <div>
            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl">{t("languages.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 text-center rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group">
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      🇧🇷
                    </div>
                    <div className="font-semibold text-lg">{t("languages.portuguese")}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {t("skills.title") === "Skills" ? "Native" : "Nativo"}
                    </div>
                  </div>
                  <div className="p-6 text-center rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group">
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      🇺🇸
                    </div>
                    <div className="font-semibold text-lg">{t("languages.english")}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {t("skills.title") === "Skills" ? "Fluent" : "Fluente"}
                    </div>
                  </div>
                  <div className="p-6 text-center rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group">
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      🇪🇸
                    </div>
                    <div className="font-semibold text-lg">{t("languages.spanish")}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {t("skills.title") === "Skills" ? "Intermediate" : "Intermediário"}
                    </div>
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
