import Image from "next/image"
import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const locations = [
  {
    name: "Sara Coffee",
    type: "Kafe",
    address: "Harran Üniversitesi Osmanbey Kampüsü, Şanlıurfa",
    image: "/modern-university-campus-coffee-shop.jpg",
  },
  {
    name: "Nişantaşı Cafe",
    type: "Kafe",
    address: "Nişantaşı, İstanbul",
    image: "/modern-coffee-shop-interior-cozy.jpg",
  },
  {
    name: "Bebek Restaurant",
    type: "Restoran",
    address: "Bebek, İstanbul",
    image: "/elegant-restaurant-dining-room-fine-dining.jpg",
  },
  {
    name: "Bostancı Cafe",
    type: "Kafe",
    address: "Bostancı, İstanbul",
    image: "/bright-cafe-interior-coffee-pastries.jpg",
  },
  {
    name: "Etiler Restaurant",
    type: "Restoran",
    address: "Etiler, İstanbul",
    image: "/upscale-restaurant-interior-modern.jpg",
  },
]

export function FeaturedLocations() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Öne Çıkan Lokasyonlar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Türkiye'nin farklı şehirlerinde sizlere hizmet veriyoruz
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="border-border bg-card overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                    {location.type}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">{location.name}</h3>
                  <div className="flex items-center gap-1 text-white/90 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{location.address}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
