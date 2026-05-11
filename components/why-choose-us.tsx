import { CheckCircle2, Sparkles } from "lucide-react"

const whyUs = [
    "15 yıllık deneyim ve sektör bilgisi",
    "Güçlü marka bilinirliği ve müşteri sadakati",
    "Kapsamlı franchise desteği ve eğitim programları",
    "Kanıtlanmış başarılı iş modeli",
    "Sürekli ürün geliştirme ve inovasyon",
    "Merkezi tedarik sistemi ve kalite kontrolü",
    "Profesyonel pazarlama ve reklam desteği",
    "Teknolojik altyapı ve dijital çözümler",
]

export function WhyChooseUs() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-primary text-sm font-semibold tracking-wider uppercase flex items-center gap-2 justify-center">
                                <Sparkles className="w-4 h-4" />
                                Avantajlarımız
                            </span>
                        </div>
                        <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6">
                            Neden Sara?
                        </h2>
                        <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                            Bizi tercih etmeniz için birçok neden var
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
                    </div>

                    {/* Reasons Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                        {whyUs.map((item, index) => (
                            <div
                                key={index}
                                className="group relative flex items-start gap-4 bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 hover:-translate-y-1 overflow-hidden"
                            >
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-foreground/90 leading-relaxed text-base lg:text-lg font-medium relative z-10 pt-1.5">
                                    {item}
                                </p>

                                {/* Number Badge */}
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-3xl p-10 lg:p-14 text-center border border-primary/20 shadow-xl overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />

                        <div className="relative z-10">
                            <div className="inline-block mb-4">
                                <Sparkles className="w-8 h-8 text-primary mx-auto" />
                            </div>
                            <h3 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                                Başarı Hikayemize Ortak Olun
                            </h3>
                            <p className="text-foreground/80 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                                Sara Coffee & Restaurant ailesi olarak, her gün binlerce müşterimize hizmet veriyor,
                                franchise ortaklarımızla birlikte büyümeye devam ediyoruz. Siz de bu başarılı yolculuğun
                                bir parçası olmak isterseniz, bizimle iletişime geçin.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <div className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold shadow-lg">
                                    ✨ Güvenilir Marka
                                </div>
                                <div className="px-6 py-3 bg-gradient-to-r from-accent to-primary rounded-full text-white font-semibold shadow-lg">
                                    🚀 Hızlı Büyüme
                                </div>
                                <div className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold shadow-lg">
                                    💼 Profesyonel Destek
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
