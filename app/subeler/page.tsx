import { Header } from "@/components/header"
import { BranchesSection } from "@/components/branches-section"
import { SocialFollow } from "@/components/social-follow"
import { Footer } from "@/components/footer"

export default function SubelerPage() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <SocialFollow />
      <BranchesSection />
      <Footer />
    </main>
  )
}


