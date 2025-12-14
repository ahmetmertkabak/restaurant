import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export function AboutSection() {
  return (
    <section id="hakkimizda" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[400px] lg:h-[600px]">
            <div
              className="absolute inset-0 rounded-lg overflow-hidden"
              style={{
                backgroundImage:
                  "url(/placeholder.svg?height=800&width=600&query=restaurant+owner+portrait+professional)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Coffee Shop Bayilik
            </h2>
            <div className="prose prose-lg">
              <p className="text-muted-foreground leading-relaxed mb-4">
                2010 yılında başlayan yolculuğumuzda, kaliteli hizmet ve lezzet anlayışımızla Türkiye'nin dört bir
                yanına yayıldık. Bugün 45'ten fazla noktada misafirlerimize hizmet veriyoruz.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Başarılı iş modelimiz, güçlü markamız ve deneyimli ekibimizle bayilerimize kapsamlı destek sağlıyoruz.
                Siz de bu başarı hikayesinin bir parçası olmak isterseniz, bayilik başvurunuzu yapabilirsiniz.
              </p>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="#bayilik-basvuru">
                <FileText className="mr-2 h-5 w-5" />
                Bayilik Başvurusu Yap
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
