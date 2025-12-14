import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Chef’s Table",
    description: "Limitli konuk için canlı hazırlanan degustasyon menüleri ve şef sohbeti.",
    image: "/luxury-coffee-shop-interior-modern-elegant.jpg",
    badge: "Gurme Deneyim",
  },
  {
    title: "Sky Lounge",
    description: "Rooftop mixology, canlı DJ setleri ve şehrin ışıklarıyla imza kokteyller.",
    image: "/modern-coffee-shop-interior-design.jpg",
    badge: "Gece Ritüeli",
  },
  {
    title: "Artisan Coffee Lab",
    description: "Single-origin kavurmalar, sensör analizleri ve barista atölyeleri.",
    image: "/specialty-coffee-brewing-equipment.jpg",
    badge: "Barista Studio",
  },
]

export function SignatureExperiences() {
  return (
    <section className="py-20 lg:py-24 aurora-bg lux-section" id="experiences">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60">Sara Experience</p>
          <h2 className="text-3xl lg:text-5xl font-light text-white mt-4">Yeni Lüks Tanımı</h2>
          <p className="text-white/70 mt-4">
            Günün her anında farklı ritüeller: sabah barista deneyimi, akşam fine dining, gece rooftop atmosferi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <Card
              key={experience.title}
              className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl text-white hover:-translate-y-1 transition-all duration-500 lux-border"
              data-animate="fade-up"
            >
              <div className="h-56 relative">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-white/20 text-white border-white/30">{experience.badge}</Badge>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-light">{experience.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


