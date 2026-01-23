"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline"

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const contactItems = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: "tatsat.mehta@gmail.com",
      link: "mailto:tatsat.mehta@gmail.com",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      details: "+91 9870333395",
      link: "tel:+919870333395",
    },
    {
      icon: MapPinIcon,
      title: "Address",
      details: "16-A AJAY COLONY OPP, JAIN TEMPLE\nNIZAMPURA, VADODARA - 390002\nGUJARAT, BHARAT",
      link: null,
    },
    {
      icon: ClockIcon,
      title: "Hours",
      details: "09:00 am – 05:00 pm",
      link: null,
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#001f3f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0052cc]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] mb-6 tracking-tight">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a question or want to discuss your financial goals? We're here to help.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactItems.map((item, idx) => {
            const Icon = item.icon
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group"
              >
                <div className="h-full p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#0052cc] hover:shadow-2xl hover:shadow-[#0052cc]/20 transition-all duration-300 shadow-md relative overflow-hidden">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0052cc]/0 to-[#001f3f]/0 group-hover:from-[#0052cc]/5 group-hover:to-[#001f3f]/5 transition-all duration-300 rounded-2xl" />
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#0052cc]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon Container - New Design */}
                    <div className="mb-6 flex items-center justify-between">
                      <motion.div 
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#001f3f] to-[#0052cc] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative"
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0052cc] to-[#001f3f] rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                      </motion.div>
                      {/* Number badge */}
                      <div className="w-8 h-8 rounded-full bg-[#0052cc]/10 flex items-center justify-center text-[#0052cc] font-bold text-sm group-hover:bg-[#0052cc] group-hover:text-white transition-all duration-300">
                        {idx + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#001f3f] mb-4 group-hover:text-[#0052cc] transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-[#0052cc] transition-colors whitespace-pre-line text-sm leading-relaxed block font-medium group-hover:font-semibold"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed font-medium">
                        {item.details}
                      </p>
                    )}
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0052cc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Form and Map Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#001f3f] mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Fill out the form below and we'll get back to you soon.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label 
                    htmlFor="name"
                    className={`block text-sm font-semibold text-[#001f3f] mb-2.5 transition-colors duration-200 ${
                      focusedField === 'name' ? 'text-[#0052cc]' : ''
                    }`}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-[#001f3f] placeholder:text-gray-400 focus:border-[#0052cc] focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 transition-all duration-200 text-base leading-normal"
                    style={{ textAlign: 'left', verticalAlign: 'middle' }}
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email"
                    className={`block text-sm font-semibold text-[#001f3f] mb-2.5 transition-colors duration-200 ${
                      focusedField === 'email' ? 'text-[#0052cc]' : ''
                    }`}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-[#001f3f] placeholder:text-gray-400 focus:border-[#0052cc] focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 transition-all duration-200 text-base leading-normal align-middle"
                    style={{ textAlign: 'left', display: 'block', lineHeight: '1.5' }}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message"
                    className={`block text-sm font-semibold text-[#001f3f] mb-2.5 transition-colors duration-200 ${
                      focusedField === 'message' ? 'text-[#0052cc]' : ''
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-[#001f3f] placeholder:text-gray-400 focus:border-[#0052cc] focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 transition-all duration-200 resize-none text-base leading-relaxed"
                    style={{ textAlign: 'left', verticalAlign: 'top' }}
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#001f3f] to-[#0052cc] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#0052cc]/30 transition-all duration-300 flex items-center justify-center gap-2 text-base"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <PaperAirplaneIcon className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full"
          >
            <div className="h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5447654326746!2d72.81285!3d19.03599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9a19c5d8cd%3A0x5a2d9d8c5b8d4c5a!2sBandra-Worli%20Sea%20Link!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
