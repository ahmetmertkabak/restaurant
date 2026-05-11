const stats = [
  {
    value: "2",
    label: "Şube",
    description: "Osmanbey Kampüsü'nde"
  },
  {
    value: "15+",
    label: "Çalışan",
    description: "Sara deneyimi sunan ekip"
  },
  {
    value: "50+",
    label: "Ürün",
    description: "Kahve, yemek ve tatlı seçeneği"
  },
]

export function StatisticsSection() {
  return (
    <section className="relative py-24 bg-[url('/modern-coffee-shop-interior-design.jpg')] bg-cover bg-center lux-section">
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/65 backdrop-blur-sm" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-white/80 font-sara">Sara Coffee & Restaurant</p>
          <h2 className="text-3xl lg:text-5xl font-light text-white mt-3">Tutku ile büyüyen marka</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass-panel rounded-3xl border border-white/20 p-8" data-animate="scale-in">
              <div className="font-light text-6xl lg:text-7xl text-white mb-3 tracking-tight">{stat.value}</div>
              <div className="text-2xl text-white font-light tracking-wide">{stat.label}</div>
              <p className="text-white/70 text-sm mt-3 font-light">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
