import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { SocialFollow } from "@/components/social-follow"

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <SocialFollow />
            {/* Spacer for fixed header */}
            <div className="h-24"></div>

            <div className="container mx-auto px-6 lg:px-12 py-12 text-center">
                <h1 className="font-serif text-4xl lg:text-6xl text-foreground mb-6 animate-fade-in-up">
                    Galeri
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up mb-12">
                    Sara Coffee & Restaurant atmosferinden kareler.
                </p>
            </div>

            <GalleryGrid />

            <Footer />
        </main>
    )
}
