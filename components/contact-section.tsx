"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { 
  PaperAirplaneIcon, 
  CheckCircleIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  ChatBubbleLeftRightIcon 
} from "@heroicons/react/24/outline"
import { toast } from "sonner"
import PhoneInput from 'react-phone-number-input'
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

    try {
      const phoneNumber = parsePhoneNumber(value)
      if (phoneNumber) {
        if (isValidPhoneNumber(value)) {
          setFormData({ ...formData, phone: value })
        } else {
          const digitsOnly = value.replace(/\D/g, '')
          if (digitsOnly.length <= 15) {
            setFormData({ ...formData, phone: value })
          }
        }
      } else {
        const digitsOnly = value.replace(/\D/g, '')
        if (digitsOnly.length <= 15) {
          setFormData({ ...formData, phone: value })
        }
      }
    } catch (error) {
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

    if (!formData.company.trim()) {
      toast.error("Please enter your company name")
      return
    }

    if (!formData.phone) {
      toast.error("Please enter your phone number")
      return
    }

    try {
      if (!isValidPhoneNumber(formData.phone)) {
        toast.error("Please enter a valid phone number")
        return
      }
    } catch (error) {
      toast.error("Invalid phone number format")
      return
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }

      toast.success("Message sent successfully! We'll get back to you soon.")
      
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })
    } catch (error: any) {
      console.error("Email sending error:", error)
      toast.error(error.message || "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    "Custom recommendations. Expert guidance.",
    "High quality financial solutions like IPO advisory, fundraising & more",
    "Setup and go live in days, not months.",
    "End-to-end deal execution with dedicated support.",
  ]

  const contactOptions = [
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      value: "mit.mehta@blueberryfin.com",
      href: "mailto:mit.mehta@blueberryfin.com",
      color: "hover:bg-red-50 hover:text-red-600",
      borderColor: "hover:border-red-200"
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      value: "+91 8080199999",
      href: "tel:+918080199999",
      color: "hover:bg-green-50 hover:text-green-600",
      borderColor: "hover:border-green-200"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/918080199999",
      color: "hover:bg-emerald-50 hover:text-emerald-600",
      borderColor: "hover:border-emerald-200"
    }
  ]

  return (
    <section id="contact" ref={ref} className="py-10 md:py-12 bg-[#0f2c59] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left Column - Benefits & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 sm:mb-4">
                Get in <span className="italic">Touch</span>
              </h2>
              <p className="text-blue-100 text-base sm:text-lg">
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



            {/* Direct Contact Cards - Horizontal Row */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 w-full">
              <p className="text-xs sm:text-sm text-blue-200 mb-4 font-medium uppercase tracking-wider">Direct Contact</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {contactOptions.map((option, idx) => {
                  const Icon = option.icon
                  return (
                    <a
                      key={idx}
                      href={option.href}
                      target={option.title === "WhatsApp" ? "_blank" : undefined}
                      rel={option.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                      className={`flex flex-col items-center justify-center p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 group ${option.color} ${option.borderColor} hover:bg-white hover:scale-105 hover:shadow-xl h-full`}
                    >
                      <div className="p-2 rounded-full bg-white/10 group-hover:bg-gray-100 mb-2 transition-colors">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200 group-hover:text-inherit transition-colors" />
                      </div>
                      <span className="text-sm sm:text-xs font-semibold text-white group-hover:text-gray-900 transition-colors text-center whitespace-nowrap mb-0.5">{option.title}</span>
                      <span className="text-xs sm:text-[10px] text-blue-200 group-hover:text-gray-600 transition-colors text-center font-medium max-w-full truncate px-1">{option.value}</span>
                    </a>
                  )
                })}
              </div>
            </div>


                        {/* Office Address */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 w-full">
              <p className="text-xs sm:text-sm text-blue-200 mb-3 font-medium uppercase tracking-wider">Office Address</p>
              <a 
                href="https://www.google.com/maps/place/Apurva+Estate+Compound/@19.1123382,72.8815091,18z/data=!3m1!4b1!4m6!3m5!1s0x3be7c8138fb7a2cd:0x79ab83b3eee7f5fe!8m2!3d19.1123382!4d72.8825917!16s%2Fg%2F1xpwh7j2?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-blue-300 hover:scale-[1.02] cursor-pointer group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 flex-shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="flex-1">
                  <p className="text-white text-sm sm:text-base leading-relaxed group-hover:text-blue-100 transition-colors">
                    Unit No.17, Apurva Industrial Estate,
                    Makwana Road, Marol Naka, Andheri (East), Mumbai - 400 059
                  </p>
                </div>
                <svg className="w-4 h-4 text-blue-300 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>


          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#f5f0eb] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl h-full flex flex-col">
              <h3 className="text-xl sm:text-2xl font-serif text-[#0f2c59] mb-2">
                Build your plan <span className="italic">with BlueberryFin</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4 sm:space-y-5 mt-4 sm:mt-6">
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
                    placeholder="Company Name *"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#2563eb] bg-transparent outline-none transition-colors text-gray-800 placeholder-gray-400"
                    required
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
                    placeholder="Phone Number *"
                    limitMaxLength={true}
                    required
                  />
                </div>

                {/* Message */}
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



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 sm:pb-12">
        <div className="w-full h-[300px] sm:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6857474847716!2d72.88150907508586!3d19.112338182258855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8138fb7a2cd%3A0x79ab83b3eee7f5fe!2sApurva%20Estate%20Compound!5e0!3m2!1sen!2sin!4v1707405119000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
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
