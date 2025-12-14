"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const methods = [
  {
    name: "Chemex",
    highlight: "92-96°C su ile 3 aşamalı döküm",
    description:
      "Demleme aparatının üzerine bambu filtresi yerleştirilir, kişi başı 12-16 gram öğütülmüş kahve kullanılır ve kontrollü su akışı ile berrak, ipeksi gövde elde edilir.",
    image: "/images/chemex.png"
  },
  {
    name: "Syphon",
    highlight: "Buhar basınçlı demleme",
    description:
      "Isınan suyun basınçla üst hazneye çıkması, kahve ile temas edip tekrar aşağı süzülmesiyle teatral ve dengeli bir fincan sunar.",
    image: "/specialty-coffee-brewing-equipment.jpg"
  },
  {
    name: "Aeropress",
    highlight: "Basınçlı ekstraksiyon",
    description:
      "Hızlı ve temiz bir demleme için özel piston sistemi kullanılır. Parlak asiditeyi korurken gövdeli sonuçlar verir.",
    image: "/latte-art-coffee-cup-beautiful-foam.jpg"
  },
  {
    name: "V60",
    highlight: "Elle demleme ritüeli",
    description:
      "V şekilli, yivli hazne ve filtre kâğıdıyla kontrollü döküş sağlanır. Notaları berrak biçimde ortaya çıkarır.",
    image: "/filter-coffee-pour-over.jpg"
  },
  {
    name: "Filtre Kahve",
    highlight: "Makine ile sabit oran",
    description:
      "Gün boyu servis için ideal. Sabit ısı ve süre sayesinde dengeli, ferahlatıcı bir bardak garantiler.",
    image: "/modern-coffee-shop-interior-cozy.jpg"
  },
  {
    name: "Cold Brew",
    highlight: "24 saat soğuk demleme",
    description:
      "Öğütülmüş kahveler buzlu suda bekletilir. Düşük asidite, yüksek tatlılık ve serinletici bir içim sunar.",
    image: "/cold-brew-coffee-glass.jpg"
  },
]

export function BrewingMethodsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % methods.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + methods.length) % methods.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % methods.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section
      id="demleme"
      className="py-16 lg:py-20 bg-muted"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Pour Over Culture</p>
          <h2 className="text-3xl lg:text-4xl font-light text-foreground mt-4">Demleme Yöntemlerimiz</h2>
          <p className="text-muted-foreground mt-4">
            Barista ekibimiz, dünya kahve sahnesindeki teknikleri{" "}
            <span className="font-sara">Sara Coffee & Restaurant</span> menüsüne taşır.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {methods.map((method, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-border/80 shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={method.image}
                        alt={method.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-3xl font-light">{method.name}</h3>
                        <p className="text-xs uppercase tracking-[0.3em] opacity-90">{method.highlight}</p>
                      </div>
                    </div>
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-xs uppercase tracking-[0.4em]">
                          Sara
                        </Badge>
                        <span className="text-sm text-muted-foreground">{index + 1} / {methods.length}</span>
                      </div>

                      <p className="text-muted-foreground text-base leading-relaxed min-h-[80px]">{method.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full w-12 h-12 border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {methods.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full w-12 h-12 border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full px-8" asChild>
            <a href="/menu">Menüde Daha Fazla Tarif</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
