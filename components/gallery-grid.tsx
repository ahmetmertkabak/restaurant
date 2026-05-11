"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react"

// Premium Gallery Images - Same images, new design
const galleryImages = [
    {
        src: "/images/gallery/user-gallery-2.jpg",
        alt: "Professional coffee preparation",
        caption: "Artisan Coffee Craftsmanship"
    },
    {
        src: "/images/gallery/modern-gallery-1.jpg",
        alt: "Modern upscale coffee shop interior",
        caption: "Elegant Interior Design"
    },
    {
        src: "/images/gallery/user-gallery-3.jpg",
        alt: "Cozy café atmosphere",
        caption: "Cozy Café Atmosphere"
    },
    {
        src: "/images/gallery/modern-gallery-2.jpg",
        alt: "Barista creating latte art",
        caption: "Latte Art Mastery"
    },
    {
        src: "/images/gallery/user-gallery-4.jpg",
        alt: "Friends enjoying coffee and desserts",
        caption: "Moments to Savor"
    },
    {
        src: "/images/gallery/modern-gallery-3.jpg",
        alt: "Elegant dessert display",
        caption: "Gourmet Desserts"
    },
    {
        src: "/images/gallery/user-gallery-5.jpg",
        alt: "Coffee and spices arrangement",
        caption: "Premium Ingredients"
    },
    {
        src: "/images/gallery/modern-gallery-4.jpg",
        alt: "Cozy corner seating area",
        caption: "Comfortable Seating"
    },
    {
        src: "/images/gallery/modern-gallery-5.jpg",
        alt: "Artisan coffee and breakfast",
        caption: "Breakfast Excellence"
    },
]

export function GalleryGrid() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [direction, setDirection] = useState<'next' | 'prev'>('next')
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
    const thumbnailContainerRef = useRef<HTMLDivElement>(null)

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying && !isFullscreen) {
            autoPlayRef.current = setInterval(() => {
                goToNext()
            }, 5000)
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [isAutoPlaying, currentIndex, isFullscreen])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') goToNext()
            else if (e.key === 'ArrowLeft') goToPrevious()
            else if (e.key === 'Escape') setIsFullscreen(false)
            else if (e.key === ' ') {
                e.preventDefault()
                setIsAutoPlaying(prev => !prev)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentIndex])

    // Scroll thumbnail into view
    useEffect(() => {
        if (thumbnailContainerRef.current) {
            const thumbnail = thumbnailContainerRef.current.children[currentIndex] as HTMLElement
            if (thumbnail) {
                thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
            }
        }
    }, [currentIndex])

    const goToNext = () => {
        setDirection('next')
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    }

    const goToPrevious = () => {
        setDirection('prev')
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
    }

    const goToIndex = (index: number) => {
        setDirection(index > currentIndex ? 'next' : 'prev')
        setCurrentIndex(index)
    }

    const toggleAutoPlay = () => {
        setIsAutoPlaying(prev => !prev)
    }

    return (
        <div className="w-full">
            {/* Main Carousel Container */}
            <div
                className="relative bg-gradient-to-b from-black/95 via-black/90 to-black/95 rounded-3xl overflow-hidden shadow-2xl"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                {/* Main Image Display */}
                <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
                    {/* Background Blur Effect */}
                    <div
                        className="absolute inset-0 blur-2xl scale-110 opacity-30"
                        style={{
                            backgroundImage: `url('${galleryImages[currentIndex].src}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />

                    {/* Main Image with Fade Animation */}
                    <div className="relative h-full flex items-center justify-center p-4 lg:p-8">
                        <div
                            key={currentIndex}
                            className={`relative w-full h-full animate-fade-in ${direction === 'next' ? 'slide-in-right' : 'slide-in-left'
                                }`}
                        >
                            <Image
                                src={galleryImages[currentIndex].src}
                                alt={galleryImages[currentIndex].alt}
                                fill
                                className="object-contain"
                                priority={currentIndex === 0}
                                quality={95}
                            />
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Image Counter & Caption */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                        <div className="bg-black/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
                            <div className="text-center">
                                <p className="text-white/90 font-medium text-sm lg:text-base mb-1">
                                    {galleryImages[currentIndex].caption}
                                </p>
                                <p className="text-white/60 text-xs">
                                    {currentIndex + 1} / {galleryImages.length}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Auto-play Control */}
                    <button
                        onClick={toggleAutoPlay}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
                        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                    >
                        {isAutoPlaying ? (
                            <Pause className="w-4 h-4 text-white" />
                        ) : (
                            <Play className="w-4 h-4 text-white ml-0.5" />
                        )}
                    </button>

                    {/* Fullscreen Button */}
                    <button
                        onClick={() => setIsFullscreen(true)}
                        className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2 hover:bg-white/20 transition-all duration-300 z-10"
                        aria-label="View fullscreen"
                    >
                        <span className="text-white text-sm font-medium">Fullscreen</span>
                    </button>
                </div>

                {/* Thumbnail Navigation Strip */}
                <div className="relative bg-black/40 backdrop-blur-sm border-t border-white/10 p-4">
                    <div
                        ref={thumbnailContainerRef}
                        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {galleryImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => goToIndex(index)}
                                className={`relative flex-shrink-0 w-24 h-16 lg:w-32 lg:h-20 rounded-xl overflow-hidden transition-all duration-300 ${index === currentIndex
                                        ? 'ring-2 ring-primary scale-105 shadow-lg shadow-primary/50'
                                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                                    }`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    sizes="128px"
                                />
                                {index === currentIndex && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Progress Bar */}
                {isAutoPlaying && !isFullscreen && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                        <div
                            className="h-full bg-primary animate-progress"
                            style={{ animationDuration: '5000ms' }}
                        />
                    </div>
                )}
            </div>

            {/* Fullscreen Lightbox */}
            {isFullscreen && (
                <div className="fixed inset-0 z-50 bg-black/98 backdrop-blur-xl flex items-center justify-center">
                    <button
                        onClick={() => setIsFullscreen(false)}
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
                        aria-label="Close fullscreen"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center p-8">
                        <Image
                            src={galleryImages[currentIndex].src}
                            alt={galleryImages[currentIndex].alt}
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </div>

                    <button
                        onClick={goToPrevious}
                        className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                    >
                        <ChevronLeft className="w-7 h-7 text-white" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                    >
                        <ChevronRight className="w-7 h-7 text-white" />
                    </button>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <div className="bg-black/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
                            <p className="text-white/90 font-medium text-center">
                                {galleryImages[currentIndex].caption}
                            </p>
                            <p className="text-white/60 text-sm text-center mt-1">
                                {currentIndex + 1} / {galleryImages.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes progress {
                    from {
                        width: 0%;
                    }
                    to {
                        width: 100%;
                    }
                }

                .animate-fade-in {
                    animation: fade-in 500ms ease-in-out;
                }

                .animate-progress {
                    animation: progress linear;
                }

                .slide-in-right {
                    animation: fade-in 500ms ease-in-out;
                }

                .slide-in-left {
                    animation: fade-in 500ms ease-in-out;
                }

                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}
