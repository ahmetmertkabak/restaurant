"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

type MenuCategory = {
  id: string
  title: string
  headline: string
  description: string
  image: string
  badge: string
  items: string[]
}

const menuCatalog: Record<"yiyecekler" | "icecekler", MenuCategory[]> = {
  yiyecekler: [
    {
      id: "kahvaltiliklar",
      title: "Kahvaltılıklar",
      headline: "Sara’nın güne başlangıç ritüeli",
      description: "Uzayan peynirler, çıtır tostlar ve hafif başlangıçlar günün ilk ışıklarıyla buluşuyor.",
      image: "/fresh-pastries-display-bakery.jpg",
      badge: "Brasserie",
      items: ["Çorba", "Kaşarlı Tost", "Sucuklu Tost", "Karışık Tost", "Sebzeli Tost"],
    },
    {
      id: "tavuk-izgara",
      title: "Tavuk Izgaralar",
      headline: "Odun ateşi ve özel marinasyon",
      description: "Şanlıurfa baharat karışımıyla hazırlanan tüm tavuk ızgaralar bakır tabaklarda servis edilir.",
      image: "/restaurant-elegant-dining-area.jpg",
      badge: "Şef Seçkisi",
      items: ["Tavuk Şiş", "Tavuk Pirzola", "Tavuk Kanat"],
    },
    {
      id: "sakadat",
      title: "Şef Sakatat Seçkisi",
      headline: "Geleneksel teknikle modern sunum",
      description: "Ciğer ve yürek gibi klasikler, baharatlı tereyağı ve köz biber eşliğiyle sunulur.",
      image: "/luxury-coffee-shop-interior-modern-elegant.jpg",
      badge: "Geleneksel",
      items: ["Ciğer", "Yürek"],
    },
    {
      id: "gurme-atistirmaliklar",
      title: "Gurme Atıştırmalıklar",
      headline: "Patso’ya Sara yorumu",
      description: "Fırınlanmış patates, parmesan ve ev yapımı soslarla nostaljik bir ara sıcak.",
      image: "/bright-cafe-interior-coffee-pastries.jpg",
      badge: "Artizan",
      items: ["Patso", "Tavuk Pilav"],
    },
    {
      id: "waffle",
      title: "Tatlı & Pastalar",
      headline: "Paylaşımlık tatlı sahnesi",
      description: "Belçika usulü waffle hamuru, tiramisu ve fıstıklı pastalarla şımartılıyor.",
      image: "/cheesecake-slice-dessert.jpg",
      badge: "Dessert",
      items: [
        "Tiramisu",
        "Suffle",
        "Belçika Çikolatalı Pasta",
        "Profiterol Pasta",
        "Fıstık Rüyası",
        "Antep Fıstıklı Pasta",
        "Yaban Mersinli Cheesecake",
        "Monalisa",
        "Lady",
      ],
    },
  ],
  icecekler: [
    {
      id: "espresso-beverages",
      title: "Espresso Beverages",
      headline: "Çift shot espresso ritüeli",
      description: "Creması yoğun espresso tabanı ile hazırlanan tüm klasik tarifler.",
      image: "/espresso-coffee-cup.png",
      badge: "Kahve",
      items: [
        "Caffe Latte",
        "Cappuccino",
        "Caffe Mocha",
        "White Chocolate Mocha",
        "Caramel Macchiato",
        "Caffe Americano",
        "Espresso",
        "Espresso Macchiato",
      ],
    },
    {
      id: "filter-turkish",
      title: "Filter & Türk Kahvesi",
      headline: "Geleneksel demleme ustalığı",
      description: "Bakır cezve ve pour-over ekipmanlarıyla klasik kahve deneyimi.",
      image: "/filter-coffee-pour-over.jpg",
      badge: "Brew",
      items: ["Filter Coffee", "Fresh Filter Coffee", "Türk Kahvesi", "Turkish coffee"],
    },
    {
      id: "specialty-tea",
      title: "Specialty Tea",
      headline: "Semaverden bitki ritüeline",
      description: "Geleneksel çaylar, bitki karışımları ve rafine sunumlar.",
      image: "/turkish-tea-glass-traditional.jpg",
      badge: "Çay",
      items: [
        "Specialty Tea",
        "Herbal teas",
        "Yeşil Çay",
        "Ada Çayı",
        "Ihlamur Çayı",
        "Kış Çayı",
        "Hatmi Çayı",
        "Gül Tomurcuğu Çayı",
      ],
    },
    {
      id: "sahlep-hot",
      title: "Sıcak Şahane",
      headline: "Sahlep ve sıcak çikolata barı",
      description: "Damla sakızlı sahlep ve kakao yoğun sıcak çikolata ile içinizi ısıtın.",
      image: "/turkish-coffee-service-tray-traditional.jpg",
      badge: "Sıcak",
      items: ["Sahlep", "Damla Sakızlı Sahlep", "Klasik Sahlep", "Hot Chocolate", "Classic Hot Chocolate"],
    },
    {
      id: "iced-espresso",
      title: "Iced Espresso",
      headline: "Soğuk dengeli espresso tarifleri",
      description: "Buzla dengelenen macchiato, mocha ve chai seçenekleri.",
      image: "/iced-latte-cold-coffee.jpg",
      badge: "Soğuk",
      items: [
        "Iced Espresso",
        "Iced Caffe Latte",
        "Iced Caffe Americano",
        "Iced Caramel Macchiato",
        "Iced Caffe Mocha",
        "Iced White Chocolate Mocha",
        "Iced Specialty Tea",
        "Iced Chai Tea Latte",
      ],
    },
    {
      id: "milkshake",
      title: "Milkshake Bar",
      headline: "Gerçek dondurma ile hazırlanır",
      description: "Meyveli ve çikolatalı milkshake’ler için özel reçeteler.",
      image: "/berry-smoothie-frozen-drink-colorful.jpg",
      badge: "Milkshake",
      items: ["Çilekli Milkshake", "Muzlu Milkshake", "Çikolatalı Milkshake", "Vanilyalı Milkshake"],
    },
    {
      id: "frappe",
      title: "Frappe Koleksiyonu",
      headline: "Köpüklü buzlu kahve barı",
      description: "Klasik kahveden meyveli versiyonlara 7 farklı frappe.",
      image: "/frappuccino-whipped-cream-caramel.jpg",
      badge: "Frappe",
      items: [
        "Klasik Kahve Frappe",
        "Mocha Frappe",
        "Caramel Frappe",
        "Cappuccino Frappe",
        "Çilekli Frappe",
        "Muzlu Frappe",
        "Fındıklı Frappe",
      ],
    },
    {
      id: "refresha",
      title: "Special İçecekler",
      headline: "Meyve ve çay esansı buluşması",
      description: "Refresha serisi; ferahlatıcı ve imza reçeteler.",
      image: "/refresha-drink-image.jpg",
      badge: "Refresha",
      items: ["Cool Lime", "Berry Hibiscus", "Sara Special"],
    },
    {
      id: "soft-drinks",
      title: "Soft İçecekler",
      headline: "Gün boyu eşlik eden klasikler",
      description: "Sodadan meyve suyuna tüm ikramlarımız bir arada.",
      image: "/cold-brew-coffee-glass.jpg",
      badge: "Soft",
      items: [
        "Çay",
        "Kahve",
        "Su",
        "Ayran",
        "Kola",
        "Fanta",
        "Soda Çeşitleri",
        "Çamlıca",
        "Enerji İçeceği",
        "Meyve Suları",
        "Limonata",
      ],
    },
  ],
}

export function MenuSection() {
  const [activeTab, setActiveTab] = useState<"yiyecekler" | "icecekler">("yiyecekler")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleWhatsApp = () => {
    window.open("https://wa.me/905316535175", "_blank")
  }

  useEffect(() => {
    setSelectedCategory(null)
  }, [activeTab])

  const categories = menuCatalog[activeTab]
  const currentCategory = useMemo(
    () => categories.find((category) => category.id === selectedCategory) ?? null,
    [categories, selectedCategory],
  )

  return (
    <section id="menu" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,213,168,0.28),transparent_55%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="rounded-[32px] border border-white/15 bg-gradient-to-br from-[#1e120b]/95 via-[#28160c]/90 to-[#120905]/95 backdrop-blur-2xl p-8 shadow-[0_35px_120px_rgba(0,0,0,0.45)]">
              <div className="w-24 h-24 mb-6 mx-auto flex items-center justify-center">
                <img
                  src="/images/whatsapp-20image-202025-11-21-20at-2017.png"
                  alt="Sara Coffee & Restaurant Logo"
                  className="w-full h-full object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)]"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.45em] text-white/70 mb-4 text-center">Menümüz</p>
              <h2 className="text-3xl lg:text-[2.8rem] leading-tight font-light text-white mb-6 font-sara">
                Sara Coffee & Restaurant <span className="text-primary">lezzet ritüeli</span>
              </h2>
              <p className="text-white/80 text-base leading-relaxed">
                Harran Üniversitesi kampüsünün kalbinde dünya mutfağı, artisan kahve ve tatlı barını tek çatı altında
                buluşturuyoruz. Her tabak ve her bardak, mekânın sıcak atmosferini tamamlayan özel bir sahne.
              </p>

              <div className="mt-8 space-y-4 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white">
                    01
                  </span>
                  Şef dokunuşlu menü rotasyonu ve günlük taze ürünler
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white">
                    02
                  </span>
                  Espresso bar, çay ritüeli ve soğuk demleme istasyonu
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white">
                    03
                  </span>
                  Paylaşımlık tatlı arabası ve artizan pastane ürünleri
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex-1 space-y-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <p className="uppercase text-[0.7rem] tracking-[0.5em] text-primary/80 mb-3">Sara Signature Menü</p>
                  <h3 className="text-3xl lg:text-4xl font-light text-white">Yiyecek & İçecek sahnesi</h3>
                </div>
                <div className="inline-flex rounded-full border border-white/20 bg-white/5 p-1">
                  {(["yiyecekler", "icecekler"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${activeTab === tab
                        ? "bg-primary text-primary-foreground shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                        : "text-white/70 hover:text-white"
                        }`}
                    >
                      {tab === "yiyecekler" ? "Yiyecekler" : "İçecekler"}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-white/70 text-base max-w-2xl">
                {activeTab === "yiyecekler"
                  ? "Şef imzası taşıyan kahvaltılıklar, ızgaralar ve sokak lezzetleri bu bölümde."
                  : "Espresso bar, latte art, soğuk demleme ve tea lab deneyimleri tek menüde buluşuyor."}
              </p>
            </div>

            {!currentCategory && (
              <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] text-left transition-transform duration-500 hover:-translate-y-1"
                  >
                    <div className="relative h-60">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/modern-coffee-shop-interior-cozy.jpg"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0704]/95 via-[#0f0704]/40 to-transparent" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-[0.4em] text-white/70">{category.badge}</span>
                          <span className="w-10 h-10 rounded-full border border-white/40 text-white/80 flex items-center justify-center text-sm">
                            {category.items.length}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-2xl font-semibold text-white mb-2">{category.title}</h4>
                          <p className="text-sm text-white/80 leading-relaxed line-clamp-2">{category.headline}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {currentCategory && (
              <div className="rounded-[32px] border border-white/15 bg-white/5 px-6 py-8 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.4)] space-y-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-2">{currentCategory.badge}</p>
                    <h3 className="text-3xl font-semibold text-white">{currentCategory.title}</h3>
                    <p className="text-white/80 text-sm mt-2 max-w-xl">{currentCategory.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-white/40 text-white hover:bg-white/10"
                    onClick={() => setSelectedCategory(null)}
                  >
                    ← Kategorilere Dön
                  </Button>
                </div>

                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                  <img src={currentCategory.image} alt={currentCategory.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                </div>

                <div className="grid gap-4">
                  {currentCategory.items.map((item, index) => {
                    // Dessert image mapping
                    const dessertImages: Record<string, string> = {
                      "Tiramisu": "/tiramisu.png",
                      "Suffle": "/souffle.png",
                      "Belçika Çikolatalı Pasta": "/belgian-chocolate-cake.png",
                      "Profiterol Pasta": "/profiterol-pasta.png",
                      "Fıstık Rüyası": "/pistachio-dream.png",
                      "Antep Fıstıklı Pasta": "/antep-pistachio.png",
                      "Yaban Mersinli Cheesecake": "/cheesecake-slice-dessert.jpg",
                      "Monalisa": "/monalisa-cake.png",
                      "Lady": "/lady-cake.jpg",
                    }

                    const isDessert = currentCategory.id === "waffle"
                    const dessertImage = dessertImages[item]

                    return (
                      <div
                        key={item}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/10 to-transparent border border-white/10"
                      >
                        {isDessert && dessertImage ? (
                          <img
                            src={dessertImage}
                            alt={item}
                            className="w-16 h-16 rounded-xl object-cover border-2 border-white/20"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-white font-medium">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        )}
                        <p className="text-white text-base">{item}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            <div className="text-center pt-4">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base inline-flex items-center gap-2 shadow-[0_20px_45px_rgba(34,197,94,0.4)]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp ile İletişime Geç
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuSection
