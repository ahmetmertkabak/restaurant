"use client"

import Link from "next/link"

export function ThilaStyleHomepageCards() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
          <Link
            href="/menu"
            className="group relative h-[140px] md:h-[180px] lg:h-[220px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{
                backgroundImage: "url(/cappuccino-coffee-foam-art.jpg)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 group-hover:from-black/40 group-hover:to-black/70 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-3 group-hover:text-white/90 transition-colors">Signature Menu</p>
                <h3 className="text-white text-3xl lg:text-4xl font-light tracking-[0.3em] group-hover:scale-110 transition-transform duration-300">Menü</h3>
              </div>
            </div>
          </Link>

          <Link
            href="/franchise"
            className="group relative h-[280px] md:h-[360px] lg:h-[440px] lg:row-span-2 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{
                backgroundImage: "url(/luxury-coffee-shop-interior-modern-elegant.jpg)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 group-hover:from-black/20 group-hover:to-black/70 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-4 font-sara group-hover:text-white/90 transition-colors">Sara Coffee & Restaurant</p>
                <h3 className="text-white text-4xl lg:text-5xl font-light leading-tight group-hover:scale-105 transition-transform duration-300">
                  Franchise <span className="text-primary">Fırsatı</span>
                </h3>
                <p className="text-white/80 text-base font-light mt-6 max-w-md group-hover:text-white/95 transition-colors">
                  Şık mimari, güçlü operasyon ve dijital destekle yatırımınızı hızla büyütün.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/subeler"
            className="group relative h-[140px] md:h-[180px] lg:h-[220px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
              style={{
                backgroundImage: "url(/elegant-restaurant-dining-room-fine-dining.jpg)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 group-hover:from-black/40 group-hover:to-black/70 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-3 group-hover:text-white/90 transition-colors">Lokasyonlarımız</p>
                <h3 className="text-white text-3xl lg:text-4xl font-light tracking-[0.3em] group-hover:scale-110 transition-transform duration-300">Şubeler</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
