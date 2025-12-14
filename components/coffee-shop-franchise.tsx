import { Button } from "@/components/ui/button"
import { FileText, Instagram, Facebook, Twitter, Award, Users, TrendingUp, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    title: "Güçlü Marka",
    description: "Tanınmış ve güvenilir markamızla hızlı başlangıç yapın",
    icon: Award,
  },
  {
    title: "Eğitim Desteği",
    description: "Kapsamlı eğitim programları ve sürekli danışmanlık",
    icon: Users,
  },
  {
    title: "Lokasyon Desteği",
    description: "Yer seçiminden mimari projeye kadar tam destek",
    icon: TrendingUp,
  },
  {
    title: "Pazarlama",
    description: "Ulusal ve bölgesel pazarlama kampanyaları",
    icon: Heart,
  },
]

export function CoffeeShopFranchise() {
  return (
    <section id="franchise" className="py-24 lg:py-32 aurora-bg relative overflow-hidden">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/50 z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image Section */}
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-20 group animate-fade-in-up">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: "url(/modern-university-campus-coffee-shop.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-8 lg:p-16 text-center w-full">
                  <p className="text-xs uppercase tracking-[0.5em] text-gold mb-6 font-bold lux-gradient-text">Sara Coffee & Restaurant</p>
                  <h2 className="text-white font-serif text-4xl lg:text-6xl mb-6 tracking-tight drop-shadow-lg">
                    Coffee Shop & Restaurant <br /> <span className="italic text-primary">Franchise</span>
                  </h2>
                  <p className="text-white/90 text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                    Premium iç mimari, güçlü eğitim programı ve merkezi tedarik modeliyle yatırımınızı güvenle
                    büyütebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground leading-loose mb-8 text-lg max-w-4xl mx-auto font-light">
              2024’te Harran Üniversitesi kampüsünde başlayan{" "}
              <span className="font-serif text-primary text-xl">Sara Coffee & Restaurant</span>, kısa sürede şehir içi ve kampüs
              lokasyonlarında tercih edilen üçüncü nesil kahve-dünya mutfağı deneyimine dönüştü.
            </p>
            <p className="text-muted-foreground leading-loose max-w-4xl mx-auto font-light text-lg">
              Merkezi satın alma, barista akademisi, sosyal medya yönetimi ve operasyonel danışmanlık ile her adımda
              franchise ortaklarımızın yanındayız.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={index}
                  className="bg-card/40 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                >
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mx-auto mb-6 bg-primary/5 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-primary group-hover:text-amber-400 transition-colors" />
                    </div>
                    <h4 className="font-serif text-xl text-foreground mb-3">{benefit.title}</h4>
                    <p className="text-muted-foreground leading-relaxed font-light">{benefit.description}</p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-16">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-lg font-medium transition-all shadow-lg hover:shadow-primary/25 px-12"
              asChild
            >
              <a href="#bayilik-basvuru">
                <FileText className="mr-2 h-5 w-5" />
                Bayilik Başvurusu Yap
              </a>
            </Button>
          </div>

        </div>

        {/* Social Media Section */}
        <div className="border-t border-border/40 pt-10 text-center">
          <p className="text-xs font-bold text-muted-foreground mb-6 uppercase tracking-[0.2em]">
            İşletme Hesaplarımız
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="sm"
              className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full font-light px-6"
              asChild
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </Button>
            <Button
              size="sm"
              className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full font-light px-6"
              asChild
            >
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </Button>
            <Button
              size="sm"
              className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full font-light px-6"
              asChild
            >
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

