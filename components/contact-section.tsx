"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { PaperAirplaneIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import emailjs from '@emailjs/browser'
import { toast } from "sonner"
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'
import type { E164Number } from 'libphonenumber-js'

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "" as E164Number | "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePhoneChange = (value: E164Number | undefined) => {
    if (!value) {
      setFormData({ ...formData, phone: "" })
      return
    }

    // Validate and limit the phone number
    try {
      const phoneNumber = parsePhoneNumber(value)
      if (phoneNumber) {
        // Check if the number is valid for the country
        if (isValidPhoneNumber(value)) {
          setFormData({ ...formData, phone: value })
        } else {
          // If not valid yet, still allow typing but limit to reasonable length
          // Most phone numbers are max 15 digits (E.164 standard)
          const digitsOnly = value.replace(/\D/g, '')
          if (digitsOnly.length <= 15) {
            setFormData({ ...formData, phone: value })
          }
        }
      } else {
        // Allow partial input
        const digitsOnly = value.replace(/\D/g, '')
        if (digitsOnly.length <= 15) {
          setFormData({ ...formData, phone: value })
        }
      }
    } catch (error) {
      // If parsing fails, limit to 15 digits
      const digitsOnly = value.replace(/\D/g, '')
      if (digitsOnly.length <= 15) {
        setFormData({ ...formData, phone: value })
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      toast.error("Please enter your name")
      return
    }
    
    if (!formData.email.trim()) {
      toast.error("Please enter your email")
      return
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address")
      return
    }

    // Validate phone number using libphonenumber-js if provided
    if (formData.phone) {
      try {
        if (!isValidPhoneNumber(formData.phone)) {
          toast.error("Please enter a valid phone number")
          return
        }
      } catch (error) {
        toast.error("Invalid phone number format")
        return
      }
    }

    setIsSubmitting(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.")
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "sm091849@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Not provided",
          phone: formData.phone || "Not provided",
          message: formData.message,
          reply_to: formData.email,
        },
        publicKey
      )

      toast.success("Message sent successfully! We'll get back to you soon.")
      
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    "Custom recommendations. Expert guidance. Better coverage for your business.",
    "High quality financial solutions like IPO advisory, fundraising & more",
    "Day 1 support for your team and their families. Parents covered.",
    "Setup and go live in days, not months.",
  ]

  return (
    <section id="contact" ref={ref} className="py-10 md:py-12 bg-[#0f2c59] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Get in <span className="italic">Touch</span>
              </h2>
              <p className="text-blue-100 text-lg">
                Let's discuss how we can help transform your financial future.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircleIcon className="w-6 h-6 text-[#60a5fa] flex-shrink-0 mt-0.5" />
                  <p className="text-blue-100">{benefit}</p>
                </motion.div>
              ))}
            </div>

            {/* Company Logos Placeholder */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-blue-200 mb-4">Trusted by leading companies</p>
              <div className="flex gap-6 items-center opacity-50">
                <div className="w-20 h-8 bg-white/20 rounded"></div>
                <div className="w-20 h-8 bg-white/20 rounded"></div>
                <div className="w-20 h-8 bg-white/20 rounded"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#f5f0eb] rounded-2xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-serif text-[#0f2c59] mb-2">
                Build your plan <span className="italic">with BlueberryFin</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#2563eb] bg-transparent outline-none transition-colors text-gray-800 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#2563eb] bg-transparent outline-none transition-colors text-gray-800 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#2563eb] bg-transparent outline-none transition-colors text-gray-800 placeholder-gray-400"
                  />
                </div>

                {/* Phone with International Dropdown */}
                <div className="phone-input-wrapper">
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full"
                    placeholder="Phone Number"
                    limitMaxLength={true}
                  />
                </div>

                {/* Message - Combined with service question */}
                <div>
                  <textarea
                    placeholder="What can BlueberryFin help you with?*"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#2563eb] bg-transparent outline-none transition-colors text-gray-800 placeholder-gray-400 resize-none"
                    required
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start gap-2 text-xs text-gray-600">
                  <input type="checkbox" required className="mt-1" />
                  <label>
                    By submitting, you agree with BlueberryFin's privacy policy and terms of use.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#0f2c59] hover:bg-[#2563eb] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      GET A QUOTE
                      <PaperAirplaneIcon className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .phone-input-wrapper .PhoneInput {
          border-bottom: 2px solid #d1d5db;
          padding-bottom: 12px;
          transition: border-color 0.2s;
        }
        
        .phone-input-wrapper .PhoneInput:focus-within {
          border-bottom-color: #2563eb;
        }
        
        .phone-input-wrapper .PhoneInputInput {
          background: transparent;
          border: none;
          outline: none;
          color: #1f2937;
          font-size: 1rem;
          padding: 0;
          margin-left: 8px;
        }
        
        .phone-input-wrapper .PhoneInputInput::placeholder {
          color: #9ca3af;
        }
        
        .phone-input-wrapper .PhoneInputCountry {
          margin-right: 8px;
        }
        
        .phone-input-wrapper .PhoneInputCountrySelect {
          background: transparent;
          border: none;
          outline: none;
          color: #1f2937;
          cursor: pointer;
        }
        
        .phone-input-wrapper .PhoneInputCountryIcon {
          width: 24px;
          height: 18px;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
        }
        
        .phone-input-wrapper .PhoneInputCountrySelectArrow {
          color: #6b7280;
          opacity: 0.7;
          margin-left: 4px;
        }
      `}</style>
    </section>
  )
}
