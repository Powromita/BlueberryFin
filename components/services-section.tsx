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

const serviceCategories = {
  "Corporate Finance": [
    {
      title: "IPO Advisory & Readiness",
      description: "Navigate the complexities of going public with expert guidance through every step.",
      briefInfo: "Guide companies through IPO process, regulatory compliance, and market positioning",
      icon: ChartBarIcon,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      href: "/services/ipo-advisory",
    },
      {
        title: "Fundraising Service",
        description: "Secure the capital your business needs to grow and scale effectively.",
        briefInfo: "Connect with investors, structure deals, and maximize funding potential",
        icon: CurrencyDollarIcon,
        image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop",
        href: "/services/fundraising",
      },
      {
        title: "Debt Syndication",
        description: "Optimize capital structure through strategic debt syndication solutions.",
        briefInfo: "Efficient debt structuring and lender network optimization",
        icon: CreditCardIcon,
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
        href: "/services/debt-syndication",
      },
  ],
  "Strategic Transactions": [
    {
      title: "Merger & Acquisition",
      description: "Expert guidance through complex M&A transactions and integrations.",
      briefInfo: "Complete M&A support from identification to post-acquisition integration",
      icon: UserGroupIcon,
          image: "/mergers-acquisitions-prepartion-tips.jpg",
      href: "/services/mergers-acquisitions",
    },
    {
      title: "Private Equity",
      description: "Strategic PE investments and portfolio management for maximum returns.",
      briefInfo: "Strategic investments, portfolio management, and value creation",
      icon: BuildingOfficeIcon,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      href: "/services/private-equity",
    },
    {
      title: "Startup Advisory",
      description: "Accelerate growth with tailored financial strategies for emerging companies.",
      briefInfo: "Strategic guidance for early-stage companies and high-growth startups",
      icon: RocketLaunchIcon,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      href: "/services/startup-advisory",
    },
  ],
}

export function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeCategory, setActiveCategory] = useState<"Corporate Finance" | "Strategic Transactions">("Corporate Finance")
  const [selectedService, setSelectedService] = useState(0)

  const currentServices = serviceCategories[activeCategory]

  return (
    <section
      id="services"
      ref={ref}
      className="py-12 bg-[#f5f0eb] relative overflow-hidden"
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
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001f3f] mb-4 tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] mx-auto rounded-full mb-6" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => {
              setActiveCategory("Corporate Finance")
              setSelectedService(0)
            }}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === "Corporate Finance"
                ? "bg-[#0f2c59] text-white shadow-lg"
                : "bg-[#f5f0eb] text-[#001f3f] border-2 border-gray-200 hover:border-[#0052cc]"
            }`}
          >
            Corporate Finance
          </button>
          <button
            onClick={() => {
              setActiveCategory("Strategic Transactions")
              setSelectedService(0)
            }}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === "Strategic Transactions"
                ? "bg-[#0f2c59] text-white shadow-lg"
                : "bg-[#f5f0eb] text-[#001f3f] border-2 border-gray-200 hover:border-[#0052cc]"
            }`}
          >
            Strategic Transactions
          </button>
        </motion.div>

        {/* Main Content Area */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* LEFT: Image Display */}
          <div className="order-2 lg:order-1">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${currentServices[selectedService].image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Service info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
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
          <div className="order-1 lg:order-2 space-y-4 flex flex-col">
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
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 flex flex-col flex-1 ${
                    isSelected
                      ? "bg-white border-2 border-[#0052cc] shadow-xl"
                      : "bg-white border-2 border-gray-200 hover:border-[#0052cc] hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-[#0052cc] text-white"
                          : "bg-blue-50 text-[#0052cc]"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 transition-colors ${
                        isSelected ? "text-[#0052cc]" : "text-[#001f3f]"
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
