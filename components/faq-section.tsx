"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "Mekan ile alakalı olarak minimum m² talebiniz var mı?",
    answer:
      "Evet, coffee shop konseptimiz için minimum 80-100 m² arasında bir mekana ihtiyaç duyulmaktadır. Bu alan, mutfak, müşteri alanı ve depolama için optimal konfor sağlamaktadır.",
  },
  {
    question: "Eğitim desteği veriyor musunuz?",
    answer:
      "Evet, tüm bayilerimize kapsamlı eğitim desteği sağlıyoruz. Bu eğitim; kahve hazırlama teknikleri, müşteri hizmetleri, hijyen standartları ve işletme yönetimi konularını içermektedir. Açılış öncesi ve sonrası düzenli eğitim programları ile yanınızdayız.",
  },
  {
    question: "Lokasyon belirleme ve dükkan konumu seçiminde franchiselarınıza destek sağlıyor musunuz?",
    answer:
      "Kesinlikle! Deneyimli ekibimiz, lokasyon analizi ve seçiminde size tam destek vermektedir. Potansiyel noktaların ayak trafiği, demografik yapı ve rekabet analizi gibi kriterleri değerlendirerek en uygun lokasyonu belirlemenize yardımcı oluyoruz.",
  },
  {
    question: "Franchiselarınızdan mimari proje çizim ücreti alınıyor mu?",
    answer:
      "Hayır, mimari proje ve konsept tasarım hizmetleri bayilik paketimize dahildir. Uzman mimarlık ekibimiz, mekanınızın ölçülerine göre özel tasarım çalışması yapar ve uygulama projelerini ücretsiz olarak hazırlar.",
  },
  {
    question: "Franchiselarınızdan isim hakkı bedeli alıyor musunuz?",
    answer:
      "Evet, marka kullanım hakkı için başlangıçta bir franchise giriş ücreti alınmaktadır. Bu ücret, marka değerimizi, pazarlama desteğimizi ve tüm bayilere sağladığımız sistem altyapısını kapsamaktadır. Detaylı bilgi için lütfen bizimle iletişime geçin.",
  },
  {
    question: "Royalty bedeli alınıyor mu?",
    answer:
      "Evet, aylık ciroya dayalı makul bir royalty bedeli uygulanmaktadır. Bu bedel, sürekli pazarlama desteği, yeni ürün geliştirme, kalite kontrolü ve operasyonel danışmanlık hizmetlerini kapsamaktadır. Royalty oranları başarınızla birlikte büyüyen adil bir sistem üzerine kuruludur.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="sss" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Franchise başvurusu hakkında merak ettikleriniz
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border bg-card overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border">
                    {faq.answer}
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
