import { Header } from "@/components/header"
import { SocialFollow } from "@/components/social-follow"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function IletisimPage() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <SocialFollow />
      <ContactSection />
      <Footer />
    </main>
  )
}


