"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Coffee, UtensilsCrossed, Heart, Users, Sparkles, Award, Leaf, Clock } from "lucide-react"

export function ConceptSection() {
    const coffeeFeatures = [
        {
            icon: Coffee,
            title: "Premium Kahve",
            description: "Özel çekirdekler ve profesyonel demleme"
        },
        {
            icon: Heart,
            title: "Sıcak Atmosfer",
            description: "Modern ve samimi tasarım"
        },
        {
            icon: Users,
            title: "Topluluk Odaklı",
            description: "Buluşma ve çalışma alanı"
        },
        {
            icon: Sparkles,
            title: "Özel Tarifler",
            description: "Signature içecekler"
        }
    ]

    const restaurantFeatures = [
        {
            icon: UtensilsCrossed,
            title: "Dünya Mutfağı",
            description: "Geleneksel ve modern lezzetler"
        },
        {
            icon: Award,
            title: "Şef Kalitesi",
            description: "Özel tarifler ve sunumlar"
        },
        {
            icon: Leaf,
            title: "Taze Malzemeler",
            description: "Günlük tedarik"
        },
        {
            icon: Clock,
            title: "Esnek Servis",
            description: "Kahvaltıdan akşama"
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background pt-20">
                <div className="absolute inset-0 bg-black">
                    {/* Video Background */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                        poster="/luxury-coffee-shop-interior-modern-elegant.jpg"
                    >
                        <source src="/videos/coffee-ambiance.mp4" type="video/mp4" />
                        {/* Fallback image if video fails or not supported */}
                        <img
                            src="/luxury-coffee-shop-interior-modern-elegant.jpg"
                            alt="Luxury Coffee Shop"
                            className="absolute inset-0 w-full h-full object-cover opacity-50"
                        />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
                </div>

                <div className="relative z-10 text-center px-6 py-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white mb-8 tracking-wider font-serif animate-fade-in-up drop-shadow-lg">
                        Konseptlerimiz
                    </h1>
                    <div className="inline-block animate-fade-in-up group" style={{ animationDelay: '0.2s' }}>
                        <p className="text-3xl sm:text-4xl lg:text-6xl text-white font-thin italic tracking-wide group-hover:tracking-widest transition-all duration-700">
                            #SipSavorSmile
                        </p>
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-6 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-white/90 text-lg sm:text-xl mt-8 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.4s' }}>
                        Her yudum bir deneyim, her an bir keşif, her gülümseme bir anı
                    </p>
                </div>
            </section>

            {/* Side by Side Concepts */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

                        {/* Sara Coffee */}
                        <div className="space-y-6 animate-fade-in-up">
                            <div className="text-center mb-8">
                                <span className="text-primary text-xs font-semibold tracking-wider uppercase">Franchise Konsepti</span>
                                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3">
                                    Sara Coffee
                                </h2>
                                <p className="text-lg text-primary/90 font-light italic">#SipSavorSmile</p>
                            </div>

                            {/* Coffee Image */}
                            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                <img
                                    src="/modern-university-campus-coffee-shop.jpg"
                                    alt="Sara Coffee"
                                    className="w-full h-[200px] lg:h-[280px] object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Coffee Features - Compact */}
                            <div className="grid grid-cols-2 gap-3">
                                {coffeeFeatures.map((feature, index) => (
                                    <Card key={index} className="bg-card border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                        <CardContent className="p-4 text-center">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                                                <feature.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <h4 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h4>
                                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Coffee CTA */}
                            <div className="text-center pt-4">
                                <a
                                    href="/franchise"
                                    className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                                >
                                    Sara Coffee Franchise
                                </a>
                            </div>
                        </div>

                        {/* Sara Restaurant */}
                        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="text-center mb-8">
                                <span className="text-accent text-xs font-semibold tracking-wider uppercase">Franchise Konsepti</span>
                                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3">
                                    Sara Restaurant
                                </h2>
                                <p className="text-lg text-accent/90 font-light italic">#SipSavorSmile</p>
                            </div>

                            {/* Restaurant Image */}
                            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                <img
                                    src="/cappuccino-coffee-foam-art.jpg"
                                    alt="Sara Restaurant"
                                    className="w-full h-[200px] lg:h-[280px] object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Restaurant Features - Compact */}
                            <div className="grid grid-cols-2 gap-3">
                                {restaurantFeatures.map((feature, index) => (
                                    <Card key={index} className="bg-card border-border/50 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                        <CardContent className="p-4 text-center">
                                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                                                <feature.icon className="w-5 h-5 text-accent" />
                                            </div>
                                            <h4 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h4>
                                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Restaurant CTA */}
                            <div className="text-center pt-4">
                                <a
                                    href="/franchise"
                                    className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                                >
                                    Sara Restaurant Franchise
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

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
        </>
    )
}
