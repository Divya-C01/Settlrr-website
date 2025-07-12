"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Settlrr Logo"
                width={40}
                height={40}
                className="sm:w-12 sm:h-12 rounded-xl shadow-lg group-hover:shadow-xl smooth-transition"
              />
            </div>
            <span
              className={`text-xl sm:text-2xl font-bold smooth-transition ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              Settlrr
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium smooth-transition relative group ${
                isScrolled ? "text-gray-700 hover:text-settlrr-blue" : "text-white/90 hover:text-white"
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-settlrr-blue group-hover:w-full smooth-transition"></span>
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className={`font-medium smooth-transition relative group ${
                isScrolled ? "text-gray-700 hover:text-settlrr-blue" : "text-white/90 hover:text-white"
              }`}
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-settlrr-blue group-hover:w-full smooth-transition"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium smooth-transition relative group ${
                isScrolled ? "text-gray-700 hover:text-settlrr-blue" : "text-white/90 hover:text-white"
              }`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-settlrr-blue group-hover:w-full smooth-transition"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-medium smooth-transition relative group ${
                isScrolled ? "text-gray-700 hover:text-settlrr-blue" : "text-white/90 hover:text-white"
              }`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-settlrr-blue group-hover:w-full smooth-transition"></span>
            </button>
            <Link href="/start-now">
              <Button className="bg-settlrr-blue hover:bg-settlrr-blue-dark text-white px-6 py-2 rounded-lg font-medium smooth-transition shadow-lg hover:shadow-xl">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={`${isScrolled ? "text-gray-900" : "text-white"}`}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col space-y-6 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-900 hover:text-settlrr-blue smooth-transition p-3 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-lg font-medium text-gray-900 hover:text-settlrr-blue smooth-transition text-left p-3 rounded-lg hover:bg-gray-50"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-lg font-medium text-gray-900 hover:text-settlrr-blue smooth-transition text-left p-3 rounded-lg hover:bg-gray-50"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-lg font-medium text-gray-900 hover:text-settlrr-blue smooth-transition text-left p-3 rounded-lg hover:bg-gray-50"
                >
                  Contact
                </button>
                <Link
                  href="/start-now"
                  className="bg-settlrr-blue hover:bg-settlrr-blue-dark text-white p-3 rounded-lg text-center font-medium smooth-transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
