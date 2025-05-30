"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("experience.brasilcard.title"),
      company: t("experience.brasilcard.company"),
      period: t("experience.brasilcard.period"),
      current: true,
      descriptions: [
        t("experience.brasilcard.desc1"),
        t("experience.brasilcard.desc2"),
        t("experience.brasilcard.desc3"),
        t("experience.brasilcard.desc4"),
        t("experience.brasilcard.desc5"),
      ],
      technologies: ["VB6", "SQL Server", "C# .NET", "T-SQL", "Git", "Crystal Reports"],
    },
    {
      title: t("experience.softcom1.title"),
      company: t("experience.softcom1.company"),
      period: t("experience.softcom1.period"),
      current: false,
      descriptions: [
        t("experience.softcom1.desc1"),
        t("experience.softcom1.desc2"),
        t("experience.softcom1.desc3"),
        t("experience.softcom1.desc4"),
      ],
      technologies: ["C# .NET", "ReactJS", "SQL Server", "MySQL", "Windows Forms", "VB6"],
    },
    {
      title: t("experience.softcom2.title"),
      company: t("experience.softcom2.company"),
      period: t("experience.softcom2.period"),
      current: false,
      descriptions: [
        t("experience.softcom2.desc1"),
        t("experience.softcom2.desc2"),
        t("experience.softcom2.desc3"),
        t("experience.softcom2.desc4"),
      ],
      technologies: ["VBA", "SQL Server", "Data Analysis"],
    },
    {
      title: t("experience.softcom3.title"),
      company: t("experience.softcom3.company"),
      period: t("experience.softcom3.period"),
      current: false,
      descriptions: [t("experience.softcom3.desc1"), t("experience.softcom3.desc2")],
      technologies: ["ERP Systems", "Technical Support", "Customer Service"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("experience.title")}</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        {exp.title}
                        {exp.current && <Badge variant="secondary">{t("experience.current")}</Badge>}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.descriptions.map((desc, descIndex) => (
                      <li key={descIndex} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
