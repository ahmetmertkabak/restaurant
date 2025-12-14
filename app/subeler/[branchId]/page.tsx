import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { SocialFollow } from "@/components/social-follow"
import { Footer } from "@/components/footer"
import { branches } from "@/lib/branches-data"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter, Mail } from "lucide-react"
import Link from "next/link"

type BranchDetailPageProps = {
  params: {
    branchId: string
  }
}

export function generateStaticParams() {
  return branches.map((branch) => ({
    branchId: branch.id,
  }))
}

export default async function BranchDetailPage({ params }: BranchDetailPageProps) {
  const { branchId } = await params
  const branch = branches.find((b) => b.id === branchId)

  if (!branch) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <Header />
      <SocialFollow />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-amber-900/20 via-orange-900/10 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/coffee-beans-pattern.png')] opacity-5" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              {branch.type}
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
              {branch.name}
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">{branch.hours}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm">Harran Üniversitesi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12 space-y-12">

          {/* Branch Image & Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <img src={branch.image} alt={branch.name} className="w-full h-[400px] object-cover" />
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-primary" />
                  İletişim Bilgileri
                </h2>
                <div className="space-y-4 text-white/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-white/50 mb-1">Adres</p>
                      <p className="text-base">{branch.address}</p>
                    </div>
                  </div>
                  {branch.socials.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm text-white/50 mb-1">E-posta</p>
                        <a href={`mailto:${branch.socials.email}`} className="text-base hover:text-primary transition-colors">
                          {branch.socials.email}
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white/50 mb-1">Çalışma Saatleri</p>
                      <p className="text-base">{branch.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-semibold text-white mb-6">Sosyal Medya</h2>
                <div className="flex items-center gap-4 flex-wrap">
                  {branch.socials.facebook && (
                    <a
                      href={branch.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {branch.socials.instagram && (
                    <a
                      href={branch.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {branch.socials.twitter && (
                    <a
                      href={branch.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">{branch.menu.title}</h2>
              <p className="text-white/70">{branch.menu.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {branch.menu.categories.map((category) => (
                <Card
                  key={category.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
                >
                  <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2 text-sm text-white/80">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


