"use client"

import Link from "next/link"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CreditCardIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline"

const services = [
  {
    title: "Private Equity Advisory",
    description: "BlueberryFin Capital offers elite-tier private equity advisory, designed for high-growth companies and sophisticated sponsors.",
    briefInfo: "Investor-grade deal structuring, selective high-value placements, and IPO-aligned PE round planning",
    icon: BuildingOfficeIcon,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    href: "/services/private-equity",
  },
  {
    title: "IPO Advisory & Capital Markets",
    description: "BlueberryFin Capital offers elite-grade IPO advisory solutions for companies transitioning from private to public markets.",
    briefInfo: "End-to-end IPO roadmap, SEBI/listing compliance, governance improvements, and valuation narrative",
    icon: ChartBarIcon,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    href: "/services/ipo-advisory",
  },
  {
    title: "Mergers & Acquisitions (M&A)",
    description: "BlueberryFin Capital offers elite-tier M&A advisory for founders, promoters, and institutions aiming strategic growth or value realisation.",
    briefInfo: "Strategic deal origination, detailed evaluation, and end-to-end transaction advisory from valuation to integration",
    icon: UserGroupIcon,
    image: "/mergers-acquisitions-prepartion-tips.jpg",
    href: "/services/mergers-acquisitions",
  },
  {
    title: "Fundraising Advisory",
    description: "Strategic support for assessing readiness and securing capital.",
    briefInfo: "End-to-end fundraising support from readiness to post-funding",
    icon: CurrencyDollarIcon,
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop",
    href: "/services/fundraising",
  },
  {
    title: "Debt Syndication",
    description: "Customized debt solutions for growth and expansion.",
    briefInfo: "Structuring optimal debt with end-to-end execution support",
    icon: CreditCardIcon,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    href: "/services/debt-syndication",
  },
  {
    title: "Startup Advisory",
    description: "Helping founders build strong foundations and scale sustainably.",
    briefInfo: "Strategic guidance for early-stage companies and growth readiness",
    icon: RocketLaunchIcon,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    href: "/services/startup-advisory",
  },
]

export function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedService, setSelectedService] = useState(0)

  const currentServices = services

  return (
    <section
      id="services"
      ref={ref}
      className="py-8 md:py-12 bg-[#f5f0eb] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#001f3f]/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#0052cc]/8 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#001f3f] mb-3 tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] mx-auto rounded-full mb-4" />
        </motion.div>


        {/* Main Content Area */}
        <motion.div
          key={selectedService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          {/* LEFT: Image Display */}
          <div className="order-2 lg:order-1">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${currentServices[selectedService].image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Service info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {currentServices[selectedService].title}
                </h3>
                <p className="text-sm text-gray-200 mb-4">
                  {currentServices[selectedService].briefInfo}
                </p>
                <Link
                  href={currentServices[selectedService].href}
                  onClick={() => sessionStorage.setItem("internalNavigation", "true")}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0f2c59] hover:bg-[#2563eb] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Service Cards */}
          <div className="order-1 lg:order-2 space-y-3 flex flex-col">
            {currentServices.map((service, idx) => {
              const IconComponent = service.icon
              const isSelected = selectedService === idx

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + idx * 0.15 }}
                  onClick={() => setSelectedService(idx)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 flex flex-col flex-1 ${isSelected
                    ? "bg-white border-2 border-[#0052cc] shadow-xl"
                    : "bg-white border-2 border-gray-200 hover:border-[#0052cc] hover:shadow-lg"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${isSelected
                        ? "bg-[#0052cc] text-white"
                        : "bg-blue-50 text-[#0052cc]"
                        }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-base font-bold mb-1 transition-colors ${isSelected ? "text-[#0052cc]" : "text-[#001f3f]"
                        }`}>
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
