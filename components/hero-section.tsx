"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown, Instagram } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsApp = () => {
    window.open("https://wa.me/905316535175", "_blank")
  }

  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden lux-section pt-48 lg:pt-64">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/modern-coffee-shop-interior-cozy.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85 z-0" />

      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/25 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />

      <div className="relative z-10 container mx-auto px-4 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-6 lg:space-y-10 text-center" data-animate="fade-up">
          <div className="flex flex-col items-center gap-4 lg:gap-6 animate-fade-in-up">
            <div className="w-20 lg:w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto animate-shimmer" />
          </div>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
              Kalite, zarafet ve deneyim aynı roof altında
            </p>
          </div>

          <p className="text-base sm:text-lg text-white/80 font-light max-w-3xl mx-auto leading-relaxed text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Modern kafe atmosferi ile şık restoran deneyimini birleştiriyoruz. 2020'den bu yana gurme kahveler, özgün
            dünya mutfağı ve franchise fırsatlarıyla <span className="font-sara">Sara Coffee & Restaurant</span> markasını
            büyütüyoruz.
          </p>

          <p className="text-2xl sm:text-3xl text-primary/90 font-light italic max-w-2xl mx-auto mt-6 animate-pulse" style={{ animationDelay: '0.6s' }}>
            #SipSavorSmile
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-normal transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-primary/50"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp ile İletişime Geç
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20 rounded-full px-8 py-6 text-base font-light transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://www.instagram.com/sara_restaurantcoffee2024?igsh=MWtscm4xOWVwcGV0bw%3D%3D&utm_source=qr", "_blank")}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram'da Takip Et
            </Button>
          </div>


        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-sm font-light">Keşfet</span>
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  )
}
