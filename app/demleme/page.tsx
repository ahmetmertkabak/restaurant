import { Header } from "@/components/header"
import { SocialFollow } from "@/components/social-follow"
import { BrewingMethodsSection } from "@/components/brewing-methods-section"
import { Footer } from "@/components/footer"

export default function DemlemePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SocialFollow />
      <BrewingMethodsSection />
      <Footer />
    </main>
  )
}


