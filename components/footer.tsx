import Link from "next/link"
import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#050507] text-white py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <div className="mb-6">
              <img
                src="/images/whatsapp-20image-202025-11-21-20at-2017.png"
                alt="SARA Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-light max-w-xs">
              2020 yılından bu yana kahve kültürü ile şef dokunuşlarını buluşturan{" "}
              <span className="font-sara">Sara Coffee & Restaurant</span>, modern
              tasarımı ve seçkin menüsüyle misafirlerine ilham veriyor.
            </p>
          </div>

          <div>
            <h4 className="font-normal text-base mb-6 tracking-wide">Hızlı Erişim</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#anasayfa" className="text-sm text-white/70 hover:text-white transition-colors font-light">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/kurumsal" className="text-sm text-white/70 hover:text-white transition-colors font-light">
                  Kurumsal
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-sm text-white/70 hover:text-white transition-colors font-light">
                  Franchise
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-white/70 hover:text-white transition-colors font-light">
                  Menü
                </Link>
              </li>
              <li>
                <Link href="#galeri" className="text-sm text-white/70 hover:text-white transition-colors font-light">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/subeler" className="text-sm text-white/70 hover:text-white transition-colors font-light">
                  Şubeler
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-sm text-white/70 hover:text-white transition-colors font-light">
                  SSS
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-sm text-white/70 hover:text-white transition-colors font-light">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-normal text-base mb-6 tracking-wide">Sosyal Medyada Biz</h4>
            <div className="flex gap-4 mb-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white hover:scale-110 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white hover:scale-110 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white hover:scale-110 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-sm text-white/70 mb-3 font-light">İletişim</p>
              <Link
                href="https://wa.me/905316535175"
                target="_blank"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/50"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">WhatsApp'tan Bize Ulaş</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/60 font-light">© 2025 Mekanlarımız. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
