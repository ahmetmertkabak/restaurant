"use client"

import { Coffee, UtensilsCrossed, Apple } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const categories = [
  {
    icon: Coffee,
    title: "Kafe",
    description: "Modern ve şık atmosferde, özenle hazırlanmış kahve çeşitleri ve lezzetli atıştırmalıklar sunuyoruz.",
    featured: [{ name: "Sara Coffee", location: "Harran Üniversitesi Osmanbey Kampüsü" }],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description: "Ev yemeklerinden özel lezzetlere, yerel ve uluslararası mutfak deneyimleri",
    featured: [{ name: "Sara Restaurant", location: "Harran Üniversitesi Osmanbey Kampüsü" }],
  },
]

const handleWhatsApp = () => {
  window.open("https://wa.me/905XXXXXXXXX", "_blank")
}

export function BusinessCategories() {
  return (
    <section id="kurumsal" className="py-20 lg:py-32 bg-background sketch-bg">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-light text-3xl lg:text-5xl text-foreground mb-4 tracking-tight">
            İşletme Kategorilerimiz
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto font-light">
            Her biri özenle tasarlanmış mekanlarımızda sizleri ağırlamaktan mutluluk duyuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="border border-border/50 bg-gradient-to-br from-card via-card/80 to-muted/30 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/25 group-hover:border-primary transition-all duration-500">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl lg:text-2xl text-foreground mb-3">{category.title}</h3>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {category.featured && (
                    <div className="w-full mt-4 pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                        Şubelerimiz
                      </p>
                      <div className="space-y-2">
                        {category.featured.map((item, idx) => (
                          <div key={idx} className="text-sm">
                            <p className={`font-medium text-foreground ${item.name.includes("Sara") ? "font-sara" : ""}`}>
                              {item.name}
                            </p>
                            <p className="text-xs text-muted-foreground">{item.location}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button onClick={handleWhatsApp} className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp ile İletişim
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
