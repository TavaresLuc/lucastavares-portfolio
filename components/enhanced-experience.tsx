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
    <section id="experience" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <TrendingUp className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">{t("experience.title")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {t("experience.summary.title") || "Professional Journey"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("experience.summary.description") || "Building digital solutions with modern technologies"}
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <Card
                  key={index}
                  className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl leading-tight">{highlight.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Professional Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Companies */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  {t("experience.companies")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {companies.map((company, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="font-medium text-sm">{company}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  {t("experience.technologies")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs hover:bg-secondary/80 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  {t("experience.achievements")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-xs text-muted-foreground font-medium">{t("about.title") === "About Me" ? "Years" : "Anos"}</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-xs text-muted-foreground font-medium">{t("about.title") === "About Me" ? "Technologies" : "Techs"}</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="text-2xl font-bold text-primary">2</div>
                    <div className="text-xs text-muted-foreground font-medium">{t("about.title") === "About Me" ? "Companies" : "Empresas"}</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground font-medium">{t("about.title") === "About Me" ? "Projects" : "Projetos"}</div>
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
