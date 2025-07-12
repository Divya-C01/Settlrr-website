"use client"

import type React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ArrowLeft } from "lucide-react"
import { format } from "date-fns"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function StartNowPage() {
  const [state, handleSubmit] = useForm("mwpqekve")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    arrivalDate: undefined as Date | undefined,
    package: "",
    notes: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 pb-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="shadow-xl border-0">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Thank you for choosing Settlrr. We'll contact you within 12 hours with your personalized relocation
                  plan.
                </p>
                <Link href="/">
                  <Button className="bg-settlrr-blue hover:bg-settlrr-blue-dark text-white px-6 py-3 rounded-lg smooth-transition">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Start Your Journey</h1>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll contact you within 12 hours with your personalized plan
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-12"
                      placeholder="Enter your full name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12"
                      placeholder="your.email@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="h-12"
                      placeholder="+33 6 12 34 56 78"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>

                  <div>
                    <Label>Nationality *</Label>
                    <Select name="nationality" onValueChange={(value) => handleInputChange("nationality", value)} required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="morocco">Morocco</SelectItem>
                        <SelectItem value="nepal">Nepal</SelectItem>
                        <SelectItem value="brazil">Brazil</SelectItem>
                        <SelectItem value="china">China</SelectItem>
                        <SelectItem value="vietnam">Vietnam</SelectItem>
                        <SelectItem value="tunisia">Tunisia</SelectItem>
                        <SelectItem value="algeria">Algeria</SelectItem>
                        <SelectItem value="turkey">Turkey</SelectItem>
                        <SelectItem value="pakistan">Pakistan</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Expected Arrival Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal h-12 bg-transparent"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.arrivalDate ? format(formData.arrivalDate, "PPP") : "Pick your arrival date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.arrivalDate}
                        onSelect={(date) => setFormData((prev) => ({ ...prev, arrivalDate: date }))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Choose Your Package *</Label>
                  <RadioGroup
                    name="package"
                    value={formData.package}
                    onValueChange={(value) => handleInputChange("package", value)}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 smooth-transition">
                      <RadioGroupItem value="welcome" id="welcome" />
                      <Label htmlFor="welcome" className="flex-1 cursor-pointer">
                        <div className="font-semibold text-settlrr-blue">Welcome Package - €250</div>
                        <div className="text-gray-600 text-sm">Airport pickup, Navigo, SIM, bank help, and more</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 smooth-transition">
                      <RadioGroupItem value="housing" id="housing" />
                      <Label htmlFor="housing" className="flex-1 cursor-pointer">
                        <div className="font-semibold text-green-600">Housing Package - €200</div>
                        <div className="text-gray-600 text-sm">
                          Property search, visits, landlord contact, lease help
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border-2 border-orange-200 bg-orange-50 rounded-lg">
                      <RadioGroupItem value="combo" id="combo" />
                      <Label htmlFor="combo" className="flex-1 cursor-pointer">
                        <div className="font-semibold text-orange-600">Complete Package - €400</div>
                        <div className="text-gray-600 text-sm">Welcome + Housing packages combined (Best Value)</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="notes">Notes / Special Requirements</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    className="min-h-[100px]"
                    placeholder="Tell us about any specific needs, preferences, or questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-settlrr-blue hover:bg-settlrr-blue-dark text-white py-4 text-lg font-semibold rounded-lg smooth-transition"
                >
                  {state.submitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
