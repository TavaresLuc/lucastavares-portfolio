"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function EnhancedContact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tavaresluc@gmail.com",
      href: "mailto:tavaresluc@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+55 (83) 6 6630-6073",
      href: "tel:+5583666306073",
    },
    {
      icon: MapPin,
      label: "Location",
      value: t("contact.location"),
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lucas-o-tavares/",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/TavaresLuc",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">{t("contact.title")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              {t("contact.title") === "Contact" ? "Let's Work Together" : "Vamos Trabalhar Juntos"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.description") || "I'm always open to new projects and collaborations"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {t("contact.info") || "Get In Touch"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-1">
                          {contact.label}
                        </div>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-foreground font-semibold hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-semibold">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links & CTA */}
            <div className="flex flex-col gap-6">
              <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm shadow-lg flex-1">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {t("contact.connect") || "Connect"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-12 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group justify-start"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          <IconComponent className={`h-5 w-5 mr-3 transition-colors ${social.color}`} />
                          <span className="font-semibold group-hover:translate-x-1 transition-transform duration-200">
                            {social.label}
                          </span>
                        </a>
                      </Button>
                    )
                  })}

                  <div className="pt-4 border-t border-primary/10">
                    <Button
                      size="lg"
                      className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 group shadow-lg hover:shadow-xl"
                      asChild
                    >
                      <a href="mailto:tavaresluc@gmail.com">
                        <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-semibold">
                          {t("contact.send") || "Send Email"}
                        </span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-muted/30 border border-primary/20">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                {t("contact.title") === "Contact"
                  ? "Available for opportunities"
                  : "Disponível para oportunidades"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
