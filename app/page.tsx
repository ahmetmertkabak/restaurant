import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ThilaStyleHomepageCards } from "@/components/thila-style-homepage-cards"
import { CoffeeShopFranchise } from "@/components/coffee-shop-franchise"
import { FAQSection } from "@/components/faq-section"
import { FranchiseApplication } from "@/components/franchise-application"
import { StatisticsSection } from "@/components/statistics-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SocialFollow } from "@/components/social-follow"
import { BrewingMethodsSection } from "@/components/brewing-methods-section"
import { SignatureExperiences } from "@/components/signature-experiences"
import { ReservationCta } from "@/components/reservation-cta"
import { GallerySection } from "@/components/gallery-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SocialFollow />
      <HeroSection />
      <StatisticsSection />
      <SignatureExperiences />
      <ThilaStyleHomepageCards />
      <BrewingMethodsSection />
      <CoffeeShopFranchise />
      <ReservationCta />
      <FAQSection />
      <FranchiseApplication />
      <ContactSection />
      <Footer />
    </main>
  )
}
