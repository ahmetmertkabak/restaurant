"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/905316535175", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        onClick={handleWhatsApp}
        className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 h-14 w-14 shadow-lg"
        aria-label="WhatsApp ile İletişime Geç"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
