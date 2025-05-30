"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Hero() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground">
              LT
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-muted-foreground">{t("hero.greeting")}</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Lucas Tavares
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">{t("hero.title")}</h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              {t("hero.cta")}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Download className="mr-2 h-5 w-5" />
              {t("hero.download")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
