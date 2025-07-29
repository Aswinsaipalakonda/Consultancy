"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CounselingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    date: "",
    time: "",
    comments: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create WhatsApp message
    const message = `🎓 *Free Counseling Request*

*Personal Details:*
• Name: ${formData.fullName}
• Email: ${formData.email}
• Phone: ${formData.phone}

*Study Preferences:*
• Preferred Country: ${formData.country}
• Program of Interest: ${formData.program}

*Consultation Preferences:*
• Preferred Date: ${formData.date || "Not specified"}
• Preferred Time: ${formData.time || "Not specified"}

*Additional Comments:*
${formData.comments || "None"}

Please contact me for my free counseling session. Thank you!`

    const whatsappUrl = `https://wa.me/917093664846?text=${encodeURIComponent(message)}`

    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
      setIsSubmitting(false)
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        program: "",
        date: "",
        time: "",
        comments: "",
      })
    }, 1000)
  }

  return (
    <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">Free Counseling Form</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Fill out this form and we'll contact you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name *</label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="mt-1 transition-all duration-300 focus:scale-105"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email *</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 transition-all duration-300 focus:scale-105"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Phone Number *</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="mt-1 transition-all duration-300 focus:scale-105"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Preferred Country *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 focus:scale-105 text-sm sm:text-base"
              >
                <option value="">Select Country</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
                <option value="newzealand">New Zealand</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Program of Interest *</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 focus:scale-105 text-sm sm:text-base"
            >
              <option value="">Select Program</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="diploma">Diploma</option>
              <option value="mba">MBA</option>
              <option value="engineering">Engineering</option>
              <option value="mbbs">MBBS</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Preferred Date</label>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="mt-1 transition-all duration-300 focus:scale-105"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Preferred Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 focus:scale-105 text-sm sm:text-base"
              >
                <option value="">Select Time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 8 PM)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Additional Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              rows={3}
              placeholder="Tell us about your goals, concerns, or any specific questions..."
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 focus:scale-105 text-sm sm:text-base"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-base sm:text-lg py-3 transform hover:scale-105 transition-all duration-300"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Redirecting to WhatsApp...
              </div>
            ) : (
              "Book Free Counseling Session"
            )}
          </Button>
          <p className="text-xs sm:text-sm text-gray-600 text-center">
            By submitting this form, you agree to our Terms & Conditions and Privacy Policy
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
