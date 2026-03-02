"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Monitor, Database, Settings, Palette, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: "Backend",
      icon: Server,
      skills: ["C# .NET", "ASP.NET Core", "API RESTful", "Java"],
      highlight: true,
    },
    {
      title: "Database",
      icon: Database,
      skills: ["SQL Server", "T-SQL", "MySQL", "PostgreSQL"],
      highlight: true,
    },
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["ReactJS", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      skills: ["Git", "CI/CD", "Docker", "Azure"],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card 
                  key={index} 
                  className={`h-full transition-all duration-300 hover:shadow-lg ${
                    category.highlight ? 'border-primary/50 bg-primary/5' : ''
                  }`}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <IconComponent className={`h-5 w-5 ${category.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant={category.highlight ? "default" : "secondary"}
                          className="text-xs"
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
        </div>
      </div>
    </section>
  )
}
