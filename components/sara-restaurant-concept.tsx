"use client"

import { Card, CardContent } from "@/components/ui/card"
import { UtensilsCrossed, Award, Leaf, Clock } from "lucide-react"

export function SaraRestaurantConcept() {
    const features = [
        {
            icon: UtensilsCrossed,
            title: "Dünya Mutfağı",
            description: "Türk ve dünya mutfaklarından özenle seçilmiş lezzetler"
        },
        {
            icon: Award,
            title: "Şef Kalitesi",
            description: "Deneyimli şef kadromuzun özel tarifleri ve sunumları"
        },
        {
            icon: Leaf,
            title: "Taze Malzemeler",
            description: "Günlük tedarik edilen en kaliteli ve taze ürünler"
        },
        {
            icon: Clock,
            title: "Esnek Servis",
            description: "Kahvaltıdan akşam yemeğine kadar kesintisiz hizmet"
        }
    ]

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Franchise Konsepti</span>
                        </div>
                        <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
                            Sara Restaurant
                        </h2>
                        <p className="text-xl text-accent/90 font-light italic mb-4">#SipSavorSmile</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Content */}
                        <div className="space-y-6 lg:order-2">
                            <div className="bg-gradient-to-br from-card via-card to-muted/30 rounded-3xl p-8 border border-border/50 shadow-xl">
                                <h3 className="text-2xl font-semibold text-foreground mb-4">Konsept Özeti</h3>
                                <p className="text-foreground/90 leading-relaxed mb-4">
                                    Sara Restaurant, şık ambiyansı ve dünya mutfağından seçkin lezzetleriyle öne çıkan premium bir
                                    restoran konseptidir. 2020 yılından bu yana, kaliteli yemek deneyimi arayanların tercih ettiği
                                    bir marka haline gelmiştir.
                                </p>
                                <p className="text-foreground/90 leading-relaxed mb-4">
                                    Kahvaltıdan akşam yemeğine kadar geniş bir menü yelpazesi sunuyoruz. Izgara çeşitlerimizden
                                    gurme atıştırmalıklarımıza, her tabak özenle hazırlanır ve şık bir sunumla misafirlerimize
                                    ulaştırılır.
                                </p>
                                <p className="text-foreground/90 leading-relaxed">
                                    Sara Restaurant franchise modeli, restoran işletmeciliğinde deneyim kazanmak isteyen yatırımcılara
                                    kapsamlı destek sunar. Modern mutfak ekipmanları, standartlaştırılmış tarifler ve profesyonel
                                    eğitim programlarıyla başarınızı garanti ediyoruz.
                                </p>
                            </div>
                        </div>

                        {/* Image Showcase */}
                        <div className="space-y-6 lg:order-1">
                            <div className="rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                                <img
                                    src="/elegant-restaurant-dining-room-fine-dining.jpg"
                                    alt="Sara Restaurant Interior"
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <UtensilsCrossed className="w-12 h-12 text-accent mx-auto mb-2" />
                                        <p className="text-sm font-semibold text-foreground">Sara Restaurant</p>
                                        <p className="text-xs text-muted-foreground mt-1">Est. 2020</p>
                                    </div>
                                </div>
                                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                                    <img
                                        src="/upscale-restaurant-interior-modern.jpg"
                                        alt="Sara Restaurant Ambiance"
                                        className="w-full h-[200px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <Card key={index} className="bg-card border-border/50 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <CardContent className="p-6 text-center">
                                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="w-7 h-7 text-accent" />
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="inline-block bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-accent/20">
                            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                                Sara Restaurant Franchise Fırsatı
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Restoran işletmeciliğinde başarılı olmak için Sara Restaurant ailesine katılın.
                                Detaylı bilgi ve başvuru için bizimle iletişime geçin.
                            </p>
                            <a
                                href="/franchise"
                                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                Franchise Başvurusu Yap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
