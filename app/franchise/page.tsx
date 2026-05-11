import { Header } from "@/components/header"
import { SocialFollow } from "@/components/social-follow"
import { CoffeeShopFranchise } from "@/components/coffee-shop-franchise"
import { FranchiseProcess } from "@/components/franchise-process"
import { FranchiseApplication } from "@/components/franchise-application"
import { Footer } from "@/components/footer"

export default function FranchisePage() {
  return (
    <main className="min-h-screen pt-24">
      <Header />
      <SocialFollow />
      <section className="bg-background">
        <CoffeeShopFranchise />
        <FranchiseProcess />
        <FranchiseApplication />
      </section>
      <Footer />
    </main>
  )
}


