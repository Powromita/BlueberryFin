"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline"

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

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
    <section id="contact" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#001f3f]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] mb-6 tracking-tight">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reach out to discuss your financial goals. We're here to help you succeed.
          </p>
        </motion.div>

        {/* Contact Info and Form - Two Column */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-[#001f3f] mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#001f3f] to-[#003366] flex items-center justify-center text-white shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#001f3f] mb-1 group-hover:text-[#0052cc] transition-colors duration-300">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-[#0052cc] transition-colors whitespace-pre-line text-sm leading-relaxed"
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed">{item.details}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Side - Quick Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 p-8 hover:border-[#0052cc] hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-[#001f3f] mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#001f3f] mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#0052cc] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#001f3f] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#0052cc] focus:outline-none transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#001f3f] mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#0052cc] focus:outline-none transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#001f3f] to-[#0052cc] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 h-96 hover:border-[#001f3f] transition-colors duration-500"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5447654326746!2d72.81285!3d19.03599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9a19c5d8cd%3A0x5a2d9d8c5b8d4c5a!2sBandra-Worli%20Sea%20Link!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="hover:opacity-90 transition-opacity duration-500"
          />
        </motion.div>
      </div>
    </section>
  )
}
