"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Education() {
  const { t } = useLanguage()

  const education = [
    {
      degree: t("education.degree1"),
      school: t("education.school1"),
    },
    {
      degree: t("education.degree2"),
      school: t("education.school2"),
    },
    {
      degree: t("education.degree3"),
      school: t("education.school3"),
    },
  ]

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <GraduationCap className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">{t("education.title")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {t("education.title") === "Education" ? "Learning Journey" : "Jornada de Aprendizado"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("education.title") === "Education"
                ? "Continuous learning and professional development"
                : "Aprendizado contínuo e desenvolvimento profissional"}
            </p>
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group"
              >
                <div className="h-1 w-full bg-gradient-to-r from-primary/20 to-primary/60"></div>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground font-medium">{edu.school}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
