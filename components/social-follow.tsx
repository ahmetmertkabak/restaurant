"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Instagram, Twitter, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export function SocialFollow() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show social follow section after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 hidden lg:block",
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0",
      )}
    >
      <div className="bg-foreground/95 backdrop-blur-sm text-background px-3 py-6 rounded-r-2xl shadow-xl">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-light tracking-wider [writing-mode:vertical-lr] rotate-180 mb-2">
            @sara_restaurantcoffee2024
          </span>

          <Link
            href="https://www.instagram.com/sara_restaurantcoffee2024?igsh=MWtscm4xOWVwcGV0bw%3D%3D&utm_source=qr"
            target="_blank"
            className="w-8 h-8 rounded-full border border-background/30 flex items-center justify-center hover:border-background hover:scale-110 transition-all"
          >
            <Instagram className="w-4 h-4" />
          </Link>

          <Link
            href="https://x.com/sararestau83522?s=21"
            target="_blank"
            className="w-8 h-8 rounded-full border border-background/30 flex items-center justify-center hover:border-background hover:scale-110 transition-all"
          >
            <Twitter className="w-4 h-4" />
          </Link>

          <Link
            href="mailto:sararestaurantcoffee@gmail.com"
            className="w-8 h-8 rounded-full border border-background/30 flex items-center justify-center hover:border-background hover:scale-110 transition-all"
          >
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
