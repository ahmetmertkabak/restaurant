import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mehmet Yılmaz",
    role: "Bayi Ortağı",
    location: "Sara Coffee - Şanlıurfa",
    rating: 5,
    comment:
      "Harran Üniversitesi kampüsünde Sara Coffee'yi açtıktan sonra hayatım değişti. Güçlü marka desteği ve profesyonel ekip sayesinde işim çok iyi gidiyor.",
    avatar: "/confident-businessman.png",
  },
  {
    name: "Ayşe Demir",
    role: "Bayi Ortağı",
    location: "Cappuccino Cafe - İstanbul",
    rating: 5,
    comment:
      "Bayilik sürecinde her adımda yanımda oldular. Kapsamlı eğitim programı ve sürekli destek sayesinde başarılı bir işletme sahibi oldum.",
    avatar: "/businesswoman-portrait.png",
  },
  {
    name: "Can Öztürk",
    role: "Bayi Ortağı",
    location: "Bebek Restaurant - İstanbul",
    rating: 5,
    comment:
      "Restoran işletmeciliğinde hiç deneyimim yoktu ama onların desteğiyle şimdi başarılı bir restoran işletiyorum. Tedarik zinciri ve operasyonel destek mükemmel.",
    avatar: "/male-professional-portrait.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Bayi Ortaklarımız Ne Diyor?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Başarı hikayelerini onlardan dinleyin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">{testimonial.comment}</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
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
