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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t("experience.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>

          {/* Career Summary */}
          <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {t("experience.summary.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                {t("experience.summary.description")}
              </p>
            </CardContent>
          </Card>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

          {/* Professional Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Companies */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-primary" />
                  {t("experience.companies")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {companies.map((company, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium">{company}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-primary" />
                  {t("experience.technologies")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-primary" />
                  {t("experience.achievements")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">90%</div>
                    <div className="text-xs text-muted-foreground">Query Optimization</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">40%</div>
                    <div className="text-xs text-muted-foreground">Bug Resolution</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-xs text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Career Progression Indicator */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center space-x-4 max-w-2xl mx-auto">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <span className="text-sm text-muted-foreground">Technical Support</span>
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-muted via-primary/50 to-primary"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Fullstack Developer</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-muted-foreground">Continuous Growth & Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
