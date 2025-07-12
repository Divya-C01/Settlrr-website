"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Shield,
  Award,
  MapPin,
  Mail,
  MessageCircle,
  Globe,
  Home,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Optimized for Performance */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-20">
        {/* Static Background Pattern - No Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-settlrr-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-settlrr-blue rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <div className="max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 mb-8 border border-white/20 mt-8 sm:mt-0">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
              <span className="text-white font-medium text-sm sm:text-base text-center">
                Trusted by 300+ students from 15+ countries
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight px-2">
              Your Trusted Partner for
              <span className="block bg-gradient-to-r from-settlrr-blue to-cyan-400 bg-clip-text text-transparent">
                Student Relocation
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Professional relocation services helping international students settle in France with confidence,
              transparency, and personalized support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-settlrr-blue hover:bg-settlrr-blue-dark text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-xl hover:shadow-2xl smooth-transition font-semibold w-full sm:w-auto"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
                className="border-2 border-white/30 text-gray-900 bg-white hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg smooth-transition font-medium w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-settlrr-blue">300+</div>
              <p className="text-gray-600">Students Helped</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">15+</div>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-settlrr-blue/10 rounded-full px-4 py-2 mb-6">
              <Briefcase className="h-5 w-5 text-settlrr-blue" />
              <span className="text-settlrr-blue font-medium">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Relocation Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, transparent, and affordable solutions designed specifically for international students
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Welcome Package */}
            <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl smooth-transition bg-white">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-settlrr-blue to-blue-600"></div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <span className="text-gray-400 line-through text-lg">€300</span>
                    <Badge className="bg-red-500 text-white">Save €50</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome Package</h3>
                  <div className="text-5xl font-bold text-gray-900 mb-2">€250</div>
                  <p className="text-gray-600">Essential first-week support</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Airport pickup service",
                    "Navigo pass setup",
                    "SIM card assistance",
                    "Bank account guidance",
                    "Essential shopping tour",
                    "App setup (CAF, Ameli, etc.)",
                    "Paperwork orientation",
                    "Neighborhood walkthrough",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/start-now">
                  <Button className="w-full bg-settlrr-blue hover:bg-settlrr-blue-dark text-white py-3 rounded-lg font-semibold smooth-transition">
                    Choose Welcome Package
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Housing Package */}
            <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl smooth-transition bg-white">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <span className="text-gray-400 line-through text-lg">€250</span>
                    <Badge className="bg-red-500 text-white">Save €50</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Housing Package</h3>
                  <div className="text-5xl font-bold text-gray-900 mb-2">€200</div>
                  <p className="text-gray-600">Complete housing solution</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Comprehensive property search",
                    "Apartment viewing assistance",
                    "Video/photo documentation",
                    "Landlord communication",
                    "Lease review and verification",
                    "Guarantor assistance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/start-now">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold smooth-transition">
                    Choose Housing Package
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Complete Package */}
            <Card className="relative overflow-hidden border-2 border-orange-200 shadow-xl hover:shadow-2xl smooth-transition bg-gradient-to-br from-white to-orange-50">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-sm font-bold rounded-lg">
                MOST POPULAR
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <span className="text-gray-400 line-through text-lg">€450</span>
                    <Badge className="bg-red-500 text-white">Save €50</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Package</h3>
                  <div className="text-5xl font-bold text-gray-900 mb-2">€400</div>
                  <p className="text-gray-600">Full relocation solution</p>
                </div>

                <div className="bg-orange-100 rounded-lg p-4 mb-6">
                  <p className="text-gray-700 font-semibold text-center">Welcome + Housing Combined</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "All Welcome Package services",
                    "All Housing Package services",
                    "Priority support access",
                    "Extended assistance period",
                    "Comprehensive city orientation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/start-now">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg font-semibold smooth-transition">
                    Choose Complete Package
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Students Choose Settlrr</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the challenges of international relocation and provide solutions that work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Shield className="h-12 w-12 text-settlrr-blue mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees, no surprises. Our flat-rate packages include everything you need with clear, upfront
                pricing.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Support</h3>
              <p className="text-gray-600">
                Real human assistance from people who understand your journey. We're here to help, not just process
                transactions.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                98% satisfaction rate with 300+ successful relocations. Our track record speaks for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2 mb-6">
              <Star className="h-5 w-5 text-yellow-600" />
              <span className="text-yellow-800 font-medium">Student Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600">Real experiences from international students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                country: "India",
                text: "Settlrr made my transition to Paris seamless. Their professional team handled everything from airport pickup to apartment hunting.",
                rating: 5,
              },
              {
                name: "Ahmed Benali",
                country: "Morocco",
                text: "Finding quality accommodation seemed impossible until I contacted Settlrr. Their housing package saved me weeks of stress.",
                rating: 5,
              },
              {
                name: "Carlos Silva",
                country: "Brazil",
                text: "The complete package was worth every euro. Professional, reliable, and genuinely caring service throughout my relocation.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.country}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-settlrr-blue/10 rounded-full px-4 py-2 mb-6">
                <Home className="h-5 w-5 text-settlrr-blue" />
                <span className="text-settlrr-blue font-medium">About Settlrr</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your Trusted Partner in France</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in Paris in 2022, Settlrr began as a student support network and has evolved into France's
                  most trusted relocation service for international students.
                </p>
                <p>
                  We understand the challenges of moving to a new country because we've been there ourselves. Our team
                  combines local expertise with genuine care to make your transition as smooth as possible.
                </p>
                <p>
                  With transparent pricing, personalized support, and a proven track record, we're here to help you
                  succeed in your new home.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <Image src="/logo.png" alt="Settlrr Logo" width={48} height={48} className="rounded-lg" />
                <h3 className="text-2xl font-bold text-gray-900">Cities We Serve</h3>
              </div>
              <div className="space-y-4">
                {["Paris", "Lille", "Marseille"].map((city) => (
                  <div key={city} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-settlrr-blue" />
                    <span className="font-semibold text-gray-900">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your journey? We're here to help you every step of the way
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "contact@settlrr.com",
                  href: "mailto:contact@settlrr.com",
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  value: "+33 605716783",
                  href: "https://wa.me/33605716783",
                },
                {
                  icon: Globe,
                  title: "Instagram",
                  value: "@settlrr",
                  href: "https://instagram.com/settlrr",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Paris 13th District",
                  href: "#",
                },
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-settlrr-blue p-3 rounded-lg">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{contact.title}</h3>
                    <a href={contact.href} className="text-gray-300 hover:text-white smooth-transition">
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start?</h3>
              <p className="text-gray-300 mb-8">
                Fill out our form and we'll contact you within 12 hours with a personalized plan.
              </p>
              <Link href="/start-now">
                <Button className="w-full bg-settlrr-blue hover:bg-settlrr-blue-dark text-white py-4 text-lg font-semibold rounded-lg smooth-transition">
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
