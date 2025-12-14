"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export function ReservationCta() {
  return (
    <section className="py-20 lg:py-28 text-white" id="rezervasyon">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="rounded-[32px] bg-gradient-to-r from-amber-500/20 via-transparent to-primary/10 border border-white/10 p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-30 pointer-events-none">
            <img
              src="/luxury-coffee-shop-interior-modern-elegant.jpg"
              alt="Özel Rezervasyon"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 max-w-2xl space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-primary">Rezervasyon</p>
            <h2 className="text-3xl lg:text-5xl font-light text-white">
              Şef menüsü, kurumsal davet veya butik kutlama için özel rezervasyon oluşturun.
            </h2>
            <p className="text-white/70">
              Concierge ekibimiz mekân düzeni, menü planlama ve canlı müzik gibi tüm detaylarla ilgilenir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base"
                onClick={() => window.open("tel:+905316535175")}
              >
                <Phone className="w-5 h-5 mr-2" />
                +90 531 653 51 75
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base border-white/40 text-white hover:bg-white/10"
                onClick={() => window.open("https://wa.me/905316535175", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Concierge
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

