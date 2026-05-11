import { Users, Briefcase, TrendingUp, Handshake } from "lucide-react"

const stats = [
    {
        icon: Users,
        value: "500+",
        label: "Çalışan Sayımız",
        description: "Profesyonel ve deneyimli ekibimiz",
    },
    {
        icon: Briefcase,
        value: "45+",
        label: "Aktif Şube",
        description: "Türkiye genelinde hizmet",
    },
    {
        icon: TrendingUp,
        value: "%40",
        label: "Yıllık Büyüme",
        description: "Sürekli gelişim ve genişleme",
    },
    {
        icon: Handshake,
        value: "25+",
        label: "Franchise Ortağı",
        description: "Başarılı iş ortaklıkları",
    },
]

export function CorporateStats() {
    return (
        <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
                        Rakamlarla Sara
                    </h2>
                    <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                        Başarımızı gösteren sayılar
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-card to-muted/20 rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-border"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                <stat.icon className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                            <div className="text-sm text-muted-foreground">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
