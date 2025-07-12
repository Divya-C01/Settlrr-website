"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "33605716783"
    const message = "Hi! I'm interested in your relocation services."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 md:px-6 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 flex-shrink-0" />
      <span className="hidden md:inline-block text-sm md:text-base">Chat with us</span>
    </button>
  )
}
