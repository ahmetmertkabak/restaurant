"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Heart, Users, Sparkles } from "lucide-react"

export function SaraCoffeeConcept() {
    const features = [
        {
            icon: Coffee,
            title: "Premium Kahve Deneyimi",
            description: "Dünya çapında seçilmiş özel kahve çekirdekleri ve profesyonel demleme teknikleri"
        },
        {
            icon: Heart,
            title: "Sıcak Atmosfer",
            description: "Modern ve samimi tasarımıyla her ziyaretçiye ev konforunu hissettiren mekan"
        },
        {
            icon: Users,
            title: "Topluluk Odaklı",
            description: "Buluşma, çalışma ve sosyalleşme için ideal ortam"
        },
        {
            icon: Sparkles,
            title: "Özel Tarifler",
            description: "Barista ekibimizin özenle hazırladığı signature içecekler"
        }
    ]

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Franchise Konsepti</span>
                        </div>
                        <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
                            Sara Coffee
                        </h2>
                        <p className="text-xl text-primary/90 font-light italic mb-4">#SipSavorSmile</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Image Showcase */}
                        <div className="space-y-6">
                            <div className="rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                                <img
                                    src="/cappuccino-coffee-foam-art.jpg"
                                    alt="Sara Coffee Interior"
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                                    <img
                                        src="/modern-university-campus-coffee-shop.jpg"
                                        alt="Sara Coffee Ambiance"
                                        className="w-full h-[200px] object-cover"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <Coffee className="w-12 h-12 text-primary mx-auto mb-2" />
                                        <p className="text-sm font-semibold text-foreground">Sara Coffee</p>
                                        <p className="text-xs text-muted-foreground mt-1">Est. 2020</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-card via-card to-muted/30 rounded-3xl p-8 border border-border/50 shadow-xl">
                                <h3 className="text-2xl font-semibold text-foreground mb-4">Konsept Özeti</h3>
                                <p className="text-foreground/90 leading-relaxed mb-4">
                                    Sara Coffee, modern kahve kültürünü Türk misafirperverliğiyle buluşturan premium bir kafe konseptidir.
                                    2020 yılından bu yana, özenle seçilmiş kahve çekirdekleri, profesyonel demleme teknikleri ve samimi
                                    atmosferiyle kahve severlerin vazgeçilmez adresi haline gelmiştir.
                                </p>
                                <p className="text-foreground/90 leading-relaxed mb-4">
                                    Espresso bazlı içeceklerden filtre kahvelere, soğuk demlemelerden özel tariflere kadar geniş bir
                                    menü yelpazesi sunuyoruz. Her fincan, barista ekibimizin tutkusu ve deneyimiyle hazırlanır.
                                </p>
                                <p className="text-foreground/90 leading-relaxed">
                                    Sara Coffee franchise modeli, yatırımcılarına kanıtlanmış bir iş modeli, kapsamlı eğitim programı
                                    ve sürekli destek sunmaktadır. Modern tasarım, kaliteli ekipman ve güçlü marka kimliğiyle başarıya
                                    giden yolda yanınızdayız.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <Card key={index} className="bg-card border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <CardContent className="p-6 text-center">
                                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 lg:p-12 border border-primary/20">
                            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                                Sara Coffee Franchise Fırsatı
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Kahve tutkusunu başarılı bir işe dönüştürmek için Sara Coffee ailesine katılın.
                                Detaylı bilgi ve başvuru için bizimle iletişime geçin.
                            </p>
                            <a
                                href="/franchise"
                                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
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
