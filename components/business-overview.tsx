"use client"

import { Coffee, UtensilsCrossed, ShoppingBag, Users, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const highlights = [
  {
    icon: Coffee,
    title: "Kafeler",
    description: "Modern atmosferde özel kahve deneyimleri",
    count: "12 Şube",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: UtensilsCrossed,
    title: "Restoranlar",
    description: "Yerel ve uluslararası lezzetler",
    count: "8 Şube",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: ShoppingBag,
    title: "Gıda",
    description: "Taze ve kaliteli gıda ürünleri",
    count: "Yakında",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Users,
    title: "Franchise",
    description: "Başarılı iş ortaklığı fırsatları",
    count: "25+ Bayi",
    color: "from-blue-500/20 to-cyan-500/20",
  },
]

const handleWhatsApp = () => {
  window.open("https://wa.me/905XXXXXXXXX", "_blank")
}

export function BusinessOverview() {
  return (
    <section id="anasayfa" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            İşletmelerimiz
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Kalite ve mükemmellik anlayışıyla her alanda hizmet veriyoruz
          </p>

          <Button onClick={handleWhatsApp} size="lg" className="mt-6 bg-green-600 hover:bg-green-700 text-white">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp ile İletişim
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="border-border bg-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <CardContent className="p-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                  <span className="text-xs font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
                    {item.count}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Franchise Fırsatları</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Başarılı iş modelimizle büyümek için hemen başvurun
              </p>
              <Button asChild size="lg" className="w-full">
                <Link href="#franchise">Detaylı Bilgi</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-muted bg-gradient-to-br from-muted/20 to-background hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Şubelerimiz</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Türkiye'nin dört bir yanındaki lokasyonlarımız
              </p>
              <Button asChild size="lg" variant="outline" className="w-full bg-transparent">
                <Link href="#subeler">Şubeleri Gör</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
