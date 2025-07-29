"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in studying abroad. Can you help me with more information?"
    const whatsappUrl = `https://wa.me/917093664846?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 shadow-lg transform hover:scale-110 transition-all duration-300 animate-bounce"
        size="lg"
      >
        <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>
      <div className="absolute -top-10 sm:-top-12 right-0 bg-gray-900 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
      </div>
    </div>
  )
}
