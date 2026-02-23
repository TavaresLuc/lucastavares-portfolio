"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Github, Star, GitFork, Code, ExternalLink, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
}

export default function Projects() {
  const { t, language } = useLanguage()
  const [projects, setProjects] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch("https://api.github.com/users/TavaresLuc/repos?sort=updated&per_page=9")

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }

        const data = await response.json()
        const sortedData = data.sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count)
        setProjects(sortedData)
      } catch (err) {
        console.error("Failed to fetch GitHub projects:", err)
        setError(err instanceof Error ? err.message : "Failed to fetch projects")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const getLocalizedDescription = (project: Repository) => {
    return project.description || "No description available"
  }

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: "from-yellow-400 to-yellow-500",
      TypeScript: "from-blue-500 to-blue-600",
      "C#": "from-green-600 to-green-700",
      Java: "from-red-600 to-red-700",
      HTML: "from-orange-500 to-orange-600",
      CSS: "from-blue-400 to-blue-500",
      Python: "from-blue-700 to-blue-800",
      Rust: "from-orange-600 to-red-600",
      Go: "from-cyan-500 to-blue-500",
      Kotlin: "from-purple-600 to-purple-700",
    }

    return language ? colors[language] || "from-gray-400 to-gray-500" : "from-gray-400 to-gray-500"
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
      month: "short",
      year: "numeric",
    })
  }

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">{t("projects.title") || "Projects"}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {language === "pt" ? "Meus Projetos em Destaque" : "Featured Projects"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "pt"
                ? "Explore alguns dos meus projetos recentes no GitHub com detalhes completos"
                : "Check out my recent projects from GitHub with complete details"}
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="group">
                  <div className="h-96 rounded-xl bg-muted/50 animate-pulse" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center p-12 rounded-xl bg-destructive/10 border border-destructive/20">
              <p className="text-destructive mb-4">{error}</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                {t("projects.retry") || "Retry"}
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="group h-full">
                  <Card className="h-full flex flex-col overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Language Gradient Header */}
                    <div className={`h-24 bg-gradient-to-r ${getLanguageColor(project.language)} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                    <CardContent className="flex-1 pt-6">
                      {/* Project Name and Icon */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors truncate">
                            {project.name}
                          </h3>
                        </div>
                        <Github className="h-5 w-5 text-muted-foreground/50 flex-shrink-0 ml-2" />
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:line-clamp-3 transition-all">
                        {getLocalizedDescription(project)}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-3 mb-4 py-3 px-3 rounded-lg bg-muted/30">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">{project.stargazers_count}</div>
                          <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                            <Star className="h-3 w-3" />
                            {language === "pt" ? "Stars" : "Stars"}
                          </div>
                        </div>
                        <div className="text-center border-l border-r border-muted">
                          <div className="text-lg font-bold text-primary">{project.forks_count}</div>
                          <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                            <GitFork className="h-3 w-3" />
                            {language === "pt" ? "Forks" : "Forks"}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">{project.language || "—"}</div>
                          <div className="text-xs text-muted-foreground">{language === "pt" ? "Linguagem" : "Language"}</div>
                        </div>
                      </div>

                      {/* Topics/Tags */}
                      {project.topics && project.topics.length > 0 && (
                        <div className="mb-4 space-y-2">
                          <div className="text-xs font-semibold text-muted-foreground uppercase">
                            {language === "pt" ? "Tecnologias" : "Technologies"}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.topics.slice(0, 4).map((topic, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                            {project.topics.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.topics.length - 4}
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Updated Date */}
                      <div className="text-xs text-muted-foreground mb-4">
                        {language === "pt" ? "Atualizado em" : "Updated"}: {formatDate(project.updated_at)}
                      </div>
                    </CardContent>

                    {/* Action Buttons */}
                    <div className="flex gap-2 px-6 pb-6">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                          <Code className="h-4 w-4 mr-2" />
                          {language === "pt" ? "Código" : "Code"}
                        </a>
                      </Button>
                      {project.homepage && (
                        <Button size="sm" className="flex-1" asChild>
                          <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {language === "pt" ? "Demo" : "Live"}
                          </a>
                        </Button>
                      )}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" asChild className="rounded-full px-8">
              <a
                href="https://github.com/TavaresLuc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                {language === "pt" ? "Ver Mais no GitHub" : "View More on GitHub"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
