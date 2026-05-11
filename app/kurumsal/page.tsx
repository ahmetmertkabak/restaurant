import { Header } from "@/components/header"
import { SocialFollow } from "@/components/social-follow"
import { CompanyStory } from "@/components/company-story"
import { MissionVision } from "@/components/mission-vision"
import { WhyChooseUs } from "@/components/why-choose-us"
import { AmbienceShowcase } from "@/components/ambience-showcase"
import { BusinessCategories } from "@/components/business-categories"
import { Footer } from "@/components/footer"

export default function KurumsalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SocialFollow />
      <div className="pt-24">
        <CompanyStory />
        <MissionVision />
        <WhyChooseUs />
        <AmbienceShowcase />
        <BusinessCategories />
      </div>
      <Footer />
    </main>
  )
}


