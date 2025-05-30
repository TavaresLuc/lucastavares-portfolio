"use client"

import { useState } from "react"
import { Moon, Sun, Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function EnhancedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { key: "about", href: "about" },
    { key: "experience", href: "experience" },
    { key: "skills", href: "skills" },
    { key: "projects", href: "projects" },
    { key: "education", href: "education" },
    { key: "contact", href: "contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/40 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">LT</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Lucas Tavares
              </div>
              <div className="text-xs text-muted-foreground">Fullstack Developer</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200 relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Enhanced Language Selector with Flags */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Globe className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 text-xs">{language === "en" ? "🇺🇸" : "🇧🇷"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => setLanguage("en")} className="flex items-center gap-3">
                  <span className="text-lg">🇺🇸</span>
                  <span>English</span>
                  {language === "en" && <span className="ml-auto text-primary">✓</span>}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("pt")} className="flex items-center gap-3">
                  <span className="text-lg">🇧🇷</span>
                  <span>Português</span>
                  {language === "pt" && <span className="ml-auto text-primary">✓</span>}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Enhanced Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative overflow-hidden">
              <div
                className={`transition-all duration-300 ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
              >
                <Sun className="h-5 w-5" />
              </div>
              <div
                className={`absolute transition-all duration-300 ${theme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"}`}
              >
                <Moon className="h-5 w-5" />
              </div>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative overflow-hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`transition-all duration-300 ${isMenuOpen ? "rotate-45 scale-0" : "rotate-0 scale-100"}`}>
                <Menu className="h-5 w-5" />
              </div>
              <div
                className={`absolute transition-all duration-300 ${isMenuOpen ? "rotate-0 scale-100" : "-rotate-45 scale-0"}`}
              >
                <X className="h-5 w-5" />
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="pt-4 pb-2 border-t border-border/40 mt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200 transform hover:translate-x-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
