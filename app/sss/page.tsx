import { Header } from "@/components/header"
import { SocialFollow } from "@/components/social-follow"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function SssPage() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <SocialFollow />
      <FAQSection />
      <Footer />
    </main>
  )
}


