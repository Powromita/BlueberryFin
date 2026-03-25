"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CreditCardIcon,
  RocketLaunchIcon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"

const allServices = [
  {
    title: "IPO Advisory & Capital Markets",
    description: "Guiding businesses through one of the most critical phases of their growth journey. Our IPO and capital markets advisory services offer structured, detail-driven, and outcome-focused support across every stage of the IPO lifecycle — from early-stage readiness to post-listing strategy.",
    icon: ChartBarIcon,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    href: "/services/ipo-advisory",
  },
  {
    title: "Fundraising Advisory",
    description: "Strategic support for assessing readiness and securing capital. We support businesses through every stage of their fundraising journey — helping them articulate their value proposition, identify the right investors, and raise capital on the right terms, at the right time.",
    icon: CurrencyDollarIcon,
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop",
    href: "/services/fundraising",
  },
  {
    title: "Debt Syndication",
    description: "Customised debt solutions aligned with your funding needs and growth objectives. We provide tailored and integrated debt solutions designed to align with the unique funding needs of our clients, delivered on an end-to-end basis.",
    icon: CreditCardIcon,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    href: "/services/debt-syndication",
  },
  {
    title: "Mergers & Acquisitions",
    description: "End-to-end support for complex mergers, acquisitions, and strategic partnerships. We guide clients through the full M&A lifecycle — from strategy formulation and target identification to due diligence, negotiation, and transaction closure.",
    icon: UserGroupIcon,
    image: "/mergers-acquisitions-prepartion-tips.jpg",
    href: "/services/mergers-acquisitions",
  },
  {
    title: "Private Equity Advisory",
    description: "Unlocking value and connecting businesses with the right partners. Our private equity advisory services cover end-to-end transaction advisory, pre-deal structuring, investor identification, and post-investment integration support.",
    icon: BuildingOfficeIcon,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    href: "/services/private-equity",
  },
  {
    title: "Startup Advisory",
    description: "Helping founders build strong foundations and scale sustainably. We work with early-stage companies to assess growth readiness, build investor narratives, and structure capital raises tailored to the startup's stage and sector.",
    icon: RocketLaunchIcon,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    href: "/services/startup-advisory",
  },
]

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<(typeof allServices)[0] | null>(null)

  return (
    <>
      <section className="py-16 md:py-20 bg-[#f5f0eb] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
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
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#001f3f] mb-3 tracking-tight">
              Explore Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] mx-auto rounded-full mb-4" />
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Click on any service to learn more about how we can support your growth
            </p>
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {allServices.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedService(service)}
                  className="group relative text-left bg-white border-2 border-gray-200 hover:border-[#0052cc] hover:shadow-lg rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#0052cc] flex items-center justify-center mb-4 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#0052cc] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-[#001f3f] group-hover:text-[#0052cc] transition-colors duration-300 pr-8">
                    {service.title}
                  </h3>

                  {/* Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRightIcon className="w-5 h-5 text-[#0052cc]" />
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-16 xl:inset-20 z-50 bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-screen"
            >
              {/* Left — Image */}
              <div className="relative w-full md:w-1/2 h-56 md:h-full flex-shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedService.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                {/* Title overlay on image (mobile only) */}
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                  <h3 className="text-white text-xl font-bold">{selectedService.title}</h3>
                </div>
              </div>

              {/* Right — Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-8 md:p-10 overflow-y-auto">
                {/* Close button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="self-end mb-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-600" />
                </button>

                {/* Title (desktop) */}
                <h3 className="hidden md:block text-2xl lg:text-3xl font-bold text-[#0f2c59] mb-4">
                  {selectedService.title}
                </h3>

                <div className="w-16 h-1 bg-[#0052cc] rounded-full mb-6" />

                <p className="text-gray-600 leading-relaxed text-base md:text-lg flex-1">
                  {selectedService.description}
                </p>

                {/* See More link */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    href={selectedService.href}
                    onClick={() => {
                      sessionStorage.setItem("internalNavigation", "true")
                      setSelectedService(null)
                    }}
                    className="inline-flex items-center gap-2 text-[#0052cc] font-semibold hover:gap-3 transition-all duration-200 group"
                  >
                    Explore full service details
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
