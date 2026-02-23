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
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("education.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.school}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
