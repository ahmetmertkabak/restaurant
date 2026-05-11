"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { branches } from "@/lib/branches-data"

export function BranchesSection() {
  return (
    <section id="subeler" className="py-24 lg:py-32 bg-background aurora-bg relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -left-20 top-40 w-80 h-80 bg-primary/5 blur-[100px] rounded-full" />
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-accent/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block animate-fade-in-up">
            Lokasyonlarımız
          </span>
          <h2 className="font-serif text-4xl lg:text-6xl text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Şubelerimiz
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Sara Coffee & Restaurant deneyimini yaşayabileceğiniz seçkin lokasyonlarımız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {branches.map((branch, index) => (
            <Card
              key={branch.id}
              className="group border border-white/5 bg-card/40 backdrop-blur-md overflow-hidden hover:border-primary/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white tracking-wider uppercase">
                    {branch.type}
                  </span>
                </div>
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/luxury-coffee-shop-interior-modern-elegant.jpg"
                  }}
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className={`font-serif text-2xl text-white mb-1 drop-shadow-md ${branch.name.includes("Sara") ? "font-serif" : ""}`}>
                    {branch.name}
                  </h3>
                  <div className="h-0.5 w-12 bg-primary transform origin-left transition-all duration-300 group-hover:w-full" />
                </div>
              </div>

              <CardContent className="p-8 relative">
                {/* Decorative background glow inside card */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-5 mb-8 relative z-10">
                  <div className="flex items-start gap-4 group/icon">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 group-hover/icon:bg-primary/10 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed font-light flex-1 pt-1.5">{branch.address}</p>
                  </div>



                  <div className="flex items-center gap-4 group/icon">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 group-hover/icon:bg-primary/10 transition-colors">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground/80 font-light pt-0.5">{branch.hours}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                  <Button
                    variant="outline"
                    className="flex-1 h-12 bg-transparent border-primary/20 hover:bg-primary/5 hover:border-primary/50 text-foreground rounded-full font-medium transition-all"
                    asChild
                  >
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      Yol Tarifi
                    </a>
                  </Button>
                  <Button size="lg" asChild className="flex-1 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all">
                    <a href={`/subeler/${branch.id}`} className="group/btn">
                      Şubeyi İncele <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
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
