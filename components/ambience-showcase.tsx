import { Button } from "@/components/ui/button"

const highlights = [
  "3 farklı ambiyans: kafe, restoran, lounge",
  "Akustik paneller ve aydınlatma sahneleri",
  "Gizli speakeasy bar konsepti",
  "Şehir mirasını referans alan sanat koleksiyonu",
]

export function AmbienceShowcase() {
  return (
    <section className="py-20 lg:py-28 text-white" id="kurumsal">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[480px] rounded-[32px] overflow-hidden shadow-2xl">
          <img
            src="/modern-coffee-shop-interior-cozy.jpg"
            alt="Sara Coffee Ambiyansı"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-xs uppercase tracking-[0.6em] text-white/70 mb-3">Ambience</p>
            <h3 className="text-3xl font-light font-sara">Sara Coffee Signature İç Mimari</h3>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-primary">Design + Craft</p>
            <h2 className="text-3xl lg:text-5xl font-light mt-4">
              Modern çizgiler, sıcak dokular ve kişisel servis noktaları.
            </h2>
          </div>

          <p className="text-white/70 leading-relaxed">
            Studio Sara; taş, cam ve pirinç detaylarını aynı kompozisyonda buluşturan iç mimari yaklaşımıyla sıradan bir
            kafeyi harekete geçiriyor. Her şehirde lokal sanatçılarla iş birliği yapıp mekâna özel dokunuşlar ekliyoruz.
          </p>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <div key={item} className="glass-panel rounded-2xl border px-5 py-4 text-sm text-white/80">
                {item}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

