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

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:border-[#001f3f] hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#001f3f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Icon Container */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#001f3f] to-[#003366] flex items-center justify-center mb-6 shadow-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon className="w-7 h-7 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 2,
                      }}
                    />
                  </motion.div>

                  <h3 className="font-bold text-[#001f3f] mb-3 text-lg relative z-10 group-hover:text-[#0052cc] transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-[#0052cc] transition-colors whitespace-pre-line text-sm leading-relaxed relative z-10 group-hover:font-medium"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed relative z-10">{item.details}</p>
                  )}
                  
                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#001f3f] to-[#0052cc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  />
                </div>
              </motion.div>
            )
          })}
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
