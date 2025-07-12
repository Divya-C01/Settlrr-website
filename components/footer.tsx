import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/logo.png" alt="Settlrr Logo" width={40} height={40} className="rounded-xl" />
              <span className="text-2xl font-bold">Settlrr</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional relocation services helping international students settle in France with confidence and ease.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@settlrr.com" className="text-gray-300 hover:text-white smooth-transition">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://wa.me/33605716783" className="text-gray-300 hover:text-white smooth-transition">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white smooth-transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/start-now" className="text-gray-300 hover:text-white smooth-transition">
                  Get Started
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white smooth-transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white smooth-transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>contact@settlrr.com</li>
              <li>+33 605716783</li>
              <li>Paris 13th District</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Settlrr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
