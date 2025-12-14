"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

const galleryImages = [
  "/images/gallery/gallery-1.png",
  "/images/gallery/gallery-2.png",
  "/images/gallery/gallery-3.png",
  "/images/gallery/gallery-4.png",
  "/images/gallery/gallery-5.png",
  "/images/gallery/gallery-6.png",
  "/images/gallery/gallery-7.png",
  "/images/gallery/gallery-8.png",
  "/images/gallery/gallery-9.png",
  "/images/gallery/gallery-10.png",
  "/images/gallery/gallery-11.jpg",
  "/images/gallery/gallery-12.jpg",
]

export function GallerySection() {
  // Duplicate images for infinite scroll loop
  const displayImages = [...galleryImages, ...galleryImages]

  return (
    <section id="galeri" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#1b0f09]/20 to-background pointer-events-none z-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 mb-16 relative z-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-bold animate-fade-in-up">
          Atmosferimiz
        </p>
        <h2 className="text-4xl lg:text-6xl font-serif text-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Galeri
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden z-0">
        {/* Gradient masks for smooth fade in/out on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div className="flex animate-scroll hover:pause-animation">
          {displayImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-4 relative group"
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 300px, 400px"
                />
                <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white font-serif italic text-lg tracking-wide">Sara Experience</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
