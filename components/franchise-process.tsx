"use client"

import { CheckCircle2, FileText, MapPin, Handshake, Store } from "lucide-react"

const steps = [
    {
        id: 1,
        title: "Başvuru",
        description: "Online başvuru formunu doldurarak süreci başlatın. Uzman ekibimiz başvurunuzu 48 saat içinde değerlendirsin.",
        icon: FileText,
    },
    {
        id: 2,
        title: "Tanışma",
        description: "Genel merkezimizde veya online toplantıda bir araya gelerek markamızı, vizyonumuzu ve beklentilerinizi konuşalım.",
        icon: Handshake,
    },
    {
        id: 3,
        title: "Lokasyon & Analiz",
        description: "Aday lokasyonun fizibilite çalışmalarını, mimari uygunluğunu ve potansiyel ciro analizini yapalım.",
        icon: MapPin,
    },
    {
        id: 4,
        title: "Sözleşme",
        description: "Karşılıklı mutabakat sağlandıktan sonra franchise sözleşmemizi imzalayarak resmi iş birliğimizi başlatalım.",
        icon: CheckCircle2,
    },
    {
        id: 5,
        title: "Kurulum & Açılış",
        description: "Mimari proje, personel eğitimi ve tedarik süreçlerinin ardından büyük açılışı gerçekleştirelim.",
        icon: Store,
    },
]

export function FranchiseProcess() {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,150,0.05),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(60,40,30,0.05),transparent_40%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
                        Adım Adım Başarıya
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                        Franchise Süreci
                    </h2>
                    <p className="text-muted-foreground text-lg font-light">
                        Hayalinizdeki Sara Coffee şubesini açmak için izleyeceğimiz yol haritası.
                        Birlikte, emin adımlarla büyüyoruz.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <div key={step.id} className="relative group">
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary z-20">
                                        {step.id}
                                    </div>

                                    <div className="bg-card/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl h-full hover:bg-card/80 transition-all duration-300 hover:-translate-y-2 group-hover:border-primary/20 hover:shadow-xl">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 border border-primary/10">
                                            <Icon className="w-7 h-7 text-primary" />
                                        </div>

                                        <h3 className="text-xl font-serif text-center mb-3 text-foreground group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>

                                        <p className="text-sm text-center text-muted-foreground leading-relaxed font-light">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
