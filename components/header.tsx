"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/konsept", label: "Konsept" },
  { href: "/menu", label: "Menü" },
  { href: "/subeler", label: "Şubeler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    // Initial check
    if (!isHome) {
      setScrolled(true)
    } else {
      handleScroll()
      window.addEventListener("scroll", handleScroll)
    }

    if (isHome) {
      window.addEventListener("scroll", handleScroll)
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  // Force scrolled state on non-home pages
  const isScrolled = isHome ? scrolled : true

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      {/* Logo Section - Hides when scrolled */}
      <div
        className={`w-full flex flex-col items-center justify-center pt-6 pb-4 transition-all duration-500 bg-gradient-to-b from-black/80 to-transparent ${isScrolled ? '-translate-y-full opacity-0 absolute pointer-events-none' : 'translate-y-0 opacity-100'
          }`}
      >
        <Link href="/" className="flex flex-col items-center gap-2 group">
          <img
            src="/images/whatsapp-20image-202025-11-21-20at-2017.png"
            alt="SARA Logo"
            className="w-28 h-28 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="flex flex-col items-center text-white font-serif tracking-[0.2em] leading-tight text-shadow-lg transition-transform duration-500 group-hover:scale-105">
            <span className="text-xl lg:text-2xl font-medium">SARA COFFEE</span>
            <span className="text-xl lg:text-2xl font-medium mt-1">SARA RESTAURANT</span>
            <span className="text-sm font-light tracking-[0.5em] mt-2 opacity-80">SINCE 2020</span>
          </div>
        </Link>
      </div>

      {/* Navbar Section - Sticky */}
      <div
        className={`w-full transition-all duration-500 ${isScrolled
          ? 'bg-white/5 backdrop-blur-md shadow-sm py-4 mt-0'
          : 'bg-transparent py-4'
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative flex items-center justify-center">

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium tracking-widest text-white/90 hover:text-white transition-colors uppercase py-2 group"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="rounded-full bg-[#a88b5e] hover:bg-[#8f754b] text-white px-8 font-serif tracking-wide border border-[#bfa57d]/30 shadow-lg ml-8"
            >
              <Link href="/franchise">Franchise</Link>
            </Button>
          </nav>

          {/* Mobile Header Layout (Compact) */}
          <div className="lg:hidden w-full flex items-center justify-between">
            <Link href="/" className={`flex items-center gap-2 transition-opacity ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <span className="text-lg font-serif text-white tracking-widest">SARA</span>
            </Link>
          </div>

          {/* Fixed Mobile Menu Button */}
          <div className="lg:hidden fixed top-4 right-4 z-[60]">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-light text-white hover:text-primary transition-colors py-2 border-b border-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/menu">Coffee Shop</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
