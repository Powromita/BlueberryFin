"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDownIcon, ArrowTrendingUpIcon, BuildingOfficeIcon, UserGroupIcon, PresentationChartBarIcon, ScaleIcon, LightBulbIcon } from "@heroicons/react/24/outline"
import { Logo } from "./logo"

const services = [
  { 
    name: "IPO Advisory & Readiness", 
    href: "/services/ipo-advisory",
    description: "Comprehensive guidance for going public with strategic planning and regulatory compliance",
    icon: ArrowTrendingUpIcon,
    color: "from-[#1e40af] to-[#3b82f6]"
  },
  { 
    name: "Fundraising Service", 
    href: "/services/fundraising",
    description: "Connect with investors and secure capital through strategic fundraising campaigns",
    icon: BuildingOfficeIcon,
    color: "from-[#0f766e] to-[#14b8a6]"
  },
  { 
    name: "Private Equity", 
    href: "/services/private-equity",
    description: "Expert PE structuring, valuations, and investment opportunities for growth",
    icon: ScaleIcon,
    color: "from-[#7c3aed] to-[#a78bfa]"
  },
  { 
    name: "Merger & Acquisition", 
    href: "/services/mergers-acquisitions",
    description: "Strategic M&A advisory with due diligence and deal structuring expertise",
    icon: PresentationChartBarIcon,
    color: "from-[#dc2626] to-[#f87171]"
  },
  { 
    name: "Debt Syndication", 
    href: "/services/debt-syndication",
    description: "Efficient debt structuring and syndication solutions for corporate financing",
    icon: UserGroupIcon,
    color: "from-[#ea580c] to-[#fb923c]"
  },
  { 
    name: "Startup Advisory", 
    href: "/services/startup-advisory",
    description: "End-to-end support for startups from ideation to scaling and exit strategies",
    icon: LightBulbIcon,
    color: "from-[#0891b2] to-[#06b6d4]"
  },
]

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const markInternalNavigation = () => {
    sessionStorage.setItem("internalNavigation", "true")
  }

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200" 
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo, Home, Services */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-4 group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Logo size="md" animate={false} className="group-hover:opacity-80 transition-opacity" />
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] tracking-tight leading-none"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  BLUEBERRYFIN
                </motion.span>
                <motion.span 
                  className="font-medium text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] tracking-wide leading-none mt-0.5"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  CAPITAL
                </motion.span>
              </div>
            </Link>

            <Link href="/" className="text-gray-700 hover:text-[#1e40af] transition-colors font-medium text-[15px]">
              Home
            </Link>

            {/* Services Dropdown - Premium hover experience */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#1e40af] transition-colors font-medium text-[15px]">
                Services
                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-0 mt-3 w-[580px] bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden backdrop-blur-xl z-50"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] px-6 py-4">
                    <h3 className="text-white font-bold text-sm tracking-wide">OUR SERVICES</h3>
                    <p className="text-white/70 text-xs mt-1">Comprehensive financial advisory solutions</p>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-2 gap-3 p-5">
                    {services.map((service, idx) => {
                      const Icon = service.icon
                      return (
                        <motion.div
                          key={service.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.06, duration: 0.25 }}
                          className="group/item"
                        >
                          <Link
                            href={service.href}
                            onClick={markInternalNavigation}
                            className="block p-4 rounded-xl border border-gray-200/50 hover:border-[#1e40af]/30 bg-white hover:bg-gradient-to-br hover:from-[#f0f9ff] hover:to-white transition-all duration-300 group/link overflow-hidden relative"
                          >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/5 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                            
                            {/* Icon */}
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 relative z-10 shadow-md group-hover/link:shadow-lg transition-shadow duration-300`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                              <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover/link:text-[#1e40af] transition-colors duration-300">
                                {service.name}
                              </h4>
                              <p className="text-gray-600 text-xs leading-relaxed group-hover/link:text-gray-700 transition-colors duration-300">
                                {service.description}
                              </p>
                            </div>

                            {/* Arrow indicator */}
                            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#1e40af]/10 flex items-center justify-center opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform group-hover/link:translate-x-1">
                              <svg className="w-3 h-3 text-[#1e40af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Footer */}
                  <div className="bg-gray-50/50 border-t border-gray-200/50 px-6 py-4 flex items-center justify-between">
                    <p className="text-xs text-gray-600">Looking for specific expertise?</p>
                    <Link
                      href="#contact"
                      onClick={markInternalNavigation}
                      className="text-xs font-semibold text-[#1e40af] hover:text-[#1e3a8a] transition-colors flex items-center gap-1 group/arrow"
                    >
                      Contact our team
                      <svg className="w-3 h-3 group-hover/arrow:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right: Core Team, Contact Us */}
          <div className="flex items-center gap-6">
            {/* Core Team - Regular Link (No Dropdown) */}
            <Link 
              href="/core-team"
              onClick={markInternalNavigation}
              className="text-gray-700 hover:text-[#1e40af] transition-colors font-medium text-[15px]"
            >
              Core Team
            </Link>

            {/* Contact Us Button */}
            <button
              onClick={scrollToContact}
              className="px-6 py-2.5 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] hover:from-[#163070] hover:to-[#1e3a8a] rounded-lg text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}