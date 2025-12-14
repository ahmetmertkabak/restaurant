export function CompanyStory() {
    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Hikayemiz</span>
                        </div>
                        <h2 className="font-serif text-2xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                            Kalite ve Lezzet ile Başlayan Yolculuk
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                    </div>

                    {/* Story Content */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-card via-card to-muted/30 rounded-3xl p-8 lg:p-12 mb-12 border border-border/50 shadow-xl backdrop-blur-sm">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-t-3xl" />

                            <div className="space-y-4 lg:space-y-6">
                                <p className="text-foreground/90 leading-relaxed text-sm md:text-lg first-letter:text-3xl lg:first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                                    2020 yılında kurulan Sara Coffee & Sara Restaurant, lezzeti, kaliteyi ve samimiyeti bir araya getirme hayaliyle yola çıktı. Aynı marka çatısı altında hem restoran hem de kafe hizmeti sunarak misafirlerimize çok yönlü bir deneyim yaşatmayı hedefliyoruz. Restoran bölümümüzde taze ve özenle seçilmiş malzemelerle hazırlanan, geleneksel tatların modern dokunuşlarla buluştuğu özel yemekler sunuyoruz. Her tabakta estetiği, lezzeti ve özeni bir araya getirerek misafirlerimizin kendini özel hissetmesini sağlıyor, hem günlük yemeklerde hem de özel anlarda tercih edilen bir adres olmayı amaçlıyoruz.
                                </p>
                                <p className="text-foreground/90 leading-relaxed text-sm md:text-lg">
                                    Kafe kısmımız ise sıcak atmosferi, rahat oturma alanları ve özenle hazırlanan kahve çeşitleriyle misafirlerimizin günün her saatinde keyifli vakit geçirebileceği bir ortam oluşturuyor. Özel kahve çekirdeklerinden hazırlanan içeceklerimiz, taze atıştırmalıklarımız ve tatlılarımızla hem çalışmak hem de sosyalleşmek isteyenler için ideal bir alan sunuyoruz. Kahvenin bir içecekten çok daha fazlası olduğuna inanarak her fincanda kaliteyi ve rafine bir lezzeti ön plana çıkarıyoruz.
                                </p>
                                <p className="text-foreground/90 leading-relaxed text-sm md:text-lg">
                                    Kurulduğumuz günden bu yana hem restoran hem de kafe tarafında misafir memnuniyetini merkeze alan bir anlayışla hareket ediyor, her detayda özen ve profesyonelliği korumaya özen gösteriyoruz. Samimi ortamımız, güler yüzlü ekibimiz ve yenilikçi yaklaşımımızla, bulunduğumuz bölgede güvenilen ve tercih edilen bir marka olmayı sürdürüyoruz. Sara Coffee & Sara Restaurant olarak, 2020'de başlayan bu yolculuğumuzu ilk günkü heyecanla devam ettiriyor ve her bir misafirimizi bu yolculuğun değerli bir parçası olarak görüyoruz.
                                </p>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            <div className="group relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 text-center border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                                        2020
                                    </div>
                                    <div className="text-base font-semibold text-foreground mb-1">Kuruluş Yılımız</div>
                                    <div className="text-sm text-muted-foreground">5 yıllık deneyim</div>
                                </div>
                            </div>

                            <div className="group relative bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-2xl p-8 text-center border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="text-6xl font-bold bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                                        2
                                    </div>
                                    <div className="text-base font-semibold text-foreground mb-1">Konsept</div>
                                    <div className="text-sm text-muted-foreground">Sara Coffee & Sara Restaurant</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
