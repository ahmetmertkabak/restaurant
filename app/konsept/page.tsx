import { Header } from "@/components/header"
import { SocialFollow } from "@/components/social-follow"
import { ConceptSection } from "@/components/concept-section"
import { Footer } from "@/components/footer"

export default function KonseptPage() {
    return (
        <main className="min-h-screen pt-24">
            <Header />
            <SocialFollow />
            <ConceptSection />
            <Footer />
        </main>
    )
}
