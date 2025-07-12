"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Priya Sharma",
    country: "India",
    flag: "🇮🇳",
    text: "Settlrr made my transition to Paris seamless. Their professional team handled everything from airport pickup to apartment hunting. I couldn't have asked for better support during such a crucial time.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    course: "Master's in Computer Science",
    university: "Sorbonne University",
  },
  {
    name: "Ahmed Benali",
    country: "Morocco",
    flag: "🇲🇦",
    text: "Finding quality accommodation in Paris seemed impossible until I contacted Settlrr. Their housing package saved me weeks of stress and helped me secure a perfect apartment near my university.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    course: "MBA Program",
    university: "HEC Paris",
  },
  {
    name: "Sita Gurung",
    country: "Nepal",
    flag: "🇳🇵",
    text: "The complete package was worth every euro. From the moment I landed to settling into my new life, Settlrr's team provided exceptional support. Highly professional and reliable service.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    course: "Master's in International Relations",
    university: "Sciences Po",
  },
  {
    name: "Carlos Silva",
    country: "Brazil",
    flag: "🇧🇷",
    text: "Moving to France was daunting, but Settlrr's welcome package made everything manageable. Their expertise in French bureaucracy and genuine care for students is remarkable.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    course: "Engineering Program",
    university: "École Polytechnique",
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-5xl mx-auto">
      <Card className="shadow-2xl border-0 bg-white overflow-hidden">
        <CardContent className="p-0">
          <div className="relative p-16">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full">
                  <Quote className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-1">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      width={96}
                      height={96}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-amber-400 fill-current mx-1" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl text-slate-700 mb-10 leading-relaxed max-w-4xl mx-auto font-light">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Student Info */}
              <div className="space-y-3">
                <div className="font-bold text-2xl text-slate-900">{testimonials[currentIndex].name}</div>
                <div className="text-lg text-slate-600 flex items-center justify-center gap-2">
                  <span className="text-2xl">{testimonials[currentIndex].flag}</span>
                  {testimonials[currentIndex].country}
                </div>
                <div className="text-slate-500">{testimonials[currentIndex].course}</div>
                <div className="font-medium text-blue-600">{testimonials[currentIndex].university}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white shadow-xl hover:shadow-2xl border-0 w-14 h-14 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white shadow-xl hover:shadow-2xl border-0 w-14 h-14 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-10 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-600 scale-125" : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
