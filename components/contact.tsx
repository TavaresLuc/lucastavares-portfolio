"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Contact() {
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
      value: "+55 (83) 9 9630-9073",
      href: "https://wa.me/+5583996309073?text=Oi%2C%20Lucas!%20Estava%20visitando%20seu%20portf%C3%B3lio!%20Podemos%20conversar%3F",
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
      href: "#",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("contact.title")}</h2>

          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{contact.label}</div>
                        {contact.href ? (
                          <a href={contact.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Button key={index} variant="outline" className="w-full justify-start" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="h-5 w-5 mr-3" />
                        {social.label}
                      </a>
                    </Button>
                  )
                })}

                <div className="pt-4">
                  <Button className="w-full" asChild>
                    <a href="mailto:tavaresluc@gmail.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
