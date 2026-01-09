"use client"

import { useInView } from "react-intersection-observer"
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
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Reach out to discuss your financial goals. We're here to help you succeed.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`p-6 rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white hover:border-blue-600 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: inView ? `${idx * 100}ms` : "0ms",
                }}
              >
                <Icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-dark-blue mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground hover:text-blue-600 transition-colors whitespace-pre-line text-sm"
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="text-muted-foreground whitespace-pre-line text-sm">{item.details}</p>
                )}
              </div>
            )
          })}
        </div>

        {/* Map */}
        <div
          className={`rounded-xl overflow-hidden shadow-lg border-2 border-blue-200 h-96 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.7919408437016!2d73.17547382341883!3d22.30511417112394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcfd0651f7b41%3A0x8a5e7a0b0b0b0b0b!2s16-A%20Ajay%20Colony%2C%20Nizampura%2C%20Vadodara%2C%20Gujarat%20390002!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="pointer-events-none"
          />
        </div>
      </div>
    </section>
  )
}
