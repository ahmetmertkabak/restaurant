import { Target, Eye, Heart, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
    {
        icon: Target,
        title: "Misyonumuz",
        description:
            "En kaliteli kahve ve yemek deneyimini, sıcak ve samimi bir atmosferde misafirlerimize sunmak. Her fincan kahvede mükemmelliği, her tabakta lezzeti yakalamak.",
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        icon: Eye,
        title: "Vizyonumuz",
        description:
            "Türkiye'nin en sevilen ve güvenilen kahve & restoran zinciri olmak. Franchise modelimizle başarılı iş ortaklıkları kurarak büyümeye devam etmek.",
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        icon: Heart,
        title: "Değerlerimiz",
        description:
            "Kalite, samimiyet, yenilikçilik ve müşteri memnuniyeti. Her zaman en iyisini sunma tutkusu ve sürekli gelişim anlayışıyla çalışıyoruz.",
        color: "from-rose-500/20 to-orange-500/20",
    },
    {
        icon: Award,
        title: "Kalite Anlayışımız",
        description:
            "Seçkin tedarikçilerle çalışıyor, tüm ürünlerimizi titizlikle seçiyor ve hazırlıyoruz. Hijyen ve kalite standartlarımızdan asla ödün vermiyoruz.",
        color: "from-amber-500/20 to-yellow-500/20",
    },
]

export function MissionVision() {
    return (
        <section className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
                        Misyon & Vizyon
                    </h2>
                    <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                        Bizi biz yapan değerler ve hedeflerimiz
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {values.map((item, index) => (
                        <Card
                            key={index}
                            className="border-border bg-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden relative"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            <CardContent className="p-8 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <item.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
