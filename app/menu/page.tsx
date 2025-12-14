import { Header } from "@/components/header"
import MenuSection from "@/components/menu-section"
import { SocialFollow } from "@/components/social-follow"
import { Footer } from "@/components/footer"

export default function MenuPage() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <SocialFollow />
      <MenuSection />
      <Footer />
    </main>
  )
}


