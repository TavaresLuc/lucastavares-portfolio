"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Github, Star, GitFork, Code, ExternalLink } from "lucide-react"
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
        // Replace 'tavaresluc' with the actual GitHub username
        const response = await fetch("https://api.github.com/users/TavaresLuc/repos?sort=updated&per_page=6")

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }

        const data = await response.json()

        // Sort by stars to get the most popular projects first
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

  // Translations for project descriptions based on language
  const getLocalizedDescription = (project: Repository) => {
    // This is a placeholder. In a real implementation, you might have translations for project descriptions
    // stored somewhere or use a translation API
    if (language === "pt" && project.description) {
      // For demonstration, we're not actually translating, but in a real app you would
      return project.description
    }
    return project.description || "No description available"
  }

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-500",
      "C#": "bg-green-600",
      Java: "bg-red-600",
      HTML: "bg-orange-500",
      CSS: "bg-blue-400",
      Python: "bg-blue-700",
    }

    return language ? colors[language] || "bg-gray-400" : "bg-gray-400"
  }

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t("projects.title") || "Projects"}</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {t("projects.description") || "Check out some of my recent projects on GitHub"}
          </p>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="flex flex-col h-full">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-2" />
                    <Skeleton className="h-4 w-4/6" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-9 w-full" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center p-8 border rounded-lg bg-destructive/10 text-destructive">
              <p>{error}</p>
              <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                {t("projects.retry") || "Retry"}
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="flex flex-col h-full border-t-4 border-t-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Github className="h-5 w-5" />
                      {project.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{getLocalizedDescription(project)}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics &&
                        project.topics.map((topic, index) => (
                          <Badge key={index} variant="outline">
                            {topic}
                          </Badge>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {project.language && (
                        <div className="flex items-center gap-1">
                          <span className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></span>
                          <span>{project.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{project.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        <span>{project.forks_count}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        <Code className="h-4 w-4 mr-2" />
                        {t("projects.viewCode") || "View Code"}
                      </a>
                    </Button>
                    {project.homepage && (
                      <Button className="flex-1" asChild>
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t("projects.liveSite") || "Live Site"}
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/TavaresLuc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                {t("projects.viewMore") || "View More on GitHub"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
