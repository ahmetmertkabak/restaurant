"use client"

import { PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 h-14 w-14 shadow-lg" aria-label="Ara">
        <a href="tel:+905317273908">
          <PhoneCall className="h-6 w-6" />
        </a>
      </Button>
    </div>
  )
}
