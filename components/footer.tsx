"use client"

import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Lucas Tavares</div>
          <p className="text-muted-foreground mb-4">{t("footer.built")}</p>
          <p className="text-sm text-muted-foreground">© 2025 Lucas Oliveira Tavares. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
