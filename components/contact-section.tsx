"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { PaperAirplaneIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import emailjs from '@emailjs/browser'
import { toast } from "sonner"

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
          company: formData.company,
          phone: formData.phone,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE - Headline & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{ fontFamily: 'GT Alpina Standard, Verdana, sans-serif' }}>
              Get A Quote For Financial Advisory.
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Custom recommendations. Expert guidance. Better coverage for your business.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-12">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircleIcon className="w-6 h-6 text-[#2563eb] flex-shrink-0 mt-0.5" />
                  <p className="text-blue-100 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>

            {/* Company Logos Placeholder */}
            <div>
              <p className="text-blue-200 text-sm mb-4">Join 100+ companies building a culture of financial excellence</p>
              <div className="flex flex-wrap gap-6 items-center opacity-60">
                {/* Placeholder for company logos */}
                <div className="text-white/40 text-xs font-semibold">RELIANCE</div>
                <div className="text-white/40 text-xs font-semibold">TATA</div>
                <div className="text-white/40 text-xs font-semibold">INFOSYS</div>
                <div className="text-white/40 text-xs font-semibold">HDFC</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Form Card */}
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
                    placeholder="Your Name"
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
                    placeholder="Email"
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

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#2563eb] bg-transparent outline-none transition-colors text-gray-800 placeholder-gray-400"
                  />
                </div>

                {/* Service Selection - Professional Style */}
                <div className="relative">
                  <select
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-0 py-3 border-b-2 border-gray-300 focus:border-[#2563eb] bg-transparent outline-none transition-colors text-gray-800 appearance-none cursor-pointer pr-8"
                    style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232563eb'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.5rem center',
                      backgroundSize: '1.5rem'
                    }}
                    required
                  >
                    <option value="" disabled>What can BlueberryFin help you with?</option>
                    <option value="IPO Advisory">IPO Advisory & Readiness</option>
                    <option value="Fundraising">Fundraising Service</option>
                    <option value="Private Equity">Private Equity</option>
                    <option value="M&A">Merger & Acquisition</option>
                    <option value="Debt Syndication">Debt Syndication</option>
                    <option value="Startup Advisory">Startup Advisory</option>
                    <option value="Other">Other</option>
                  </select>
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
    </section>
  )
}
