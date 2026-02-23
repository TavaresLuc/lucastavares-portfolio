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
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t("contact.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  {t("contact.info")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-muted-foreground">{contact.label}</div>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Send className="h-4 w-4 text-primary" />
                  </div>
                  {t("contact.connect")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start h-12 border-border/40 hover:border-primary/40 transition-all duration-200 group"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className={`h-5 w-5 mr-3 transition-colors ${social.color}`} />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {social.label}
                        </span>
                      </a>
                    </Button>
                  )
                })}

                <div className="pt-4">
                  <Button
                    className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 group"
                    asChild
                  >
                    <a href="mailto:tavaresluc@gmail.com">
                      <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {t("contact.send")}
                      </span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Decorative elements */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-primary/60 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-primary/40 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-primary/20 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
