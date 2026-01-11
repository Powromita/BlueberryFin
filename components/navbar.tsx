"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { Logo } from "./logo"

const services = [
  { name: "IPO Advisory & Readiness", href: "/services/ipo-advisory" },
  { name: "Fundraising Service", href: "/services/fundraising" },
  { name: "Private Equity", href: "/services/private-equity" },
  { name: "Merger & Acquisition", href: "/services/mergers-acquisitions" },
  { name: "Debt Syndication", href: "/services/debt-syndication" },
  { name: "Startup Advisory", href: "/services/startup-advisory" },
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
                  className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] tracking-tight leading-none"
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
                  className="font-medium text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] tracking-wide leading-none mt-0.5"
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

            <Link href="/" className="text-gray-700 hover:text-[#0052cc] transition-colors font-medium text-[15px]">
              Home
            </Link>

            {/* Services Dropdown - Hover triggered */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#0052cc] transition-colors font-medium text-[15px]">
                Services
                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden backdrop-blur-md z-50"
                >
                  {services.map((service, idx) => (
                    <motion.div
                      key={service.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={service.href}
                        className="block px-4 py-3 text-sm text-gray-900 hover:bg-blue-50 hover:text-[#0052cc] transition-all duration-200 font-medium border-b border-gray-100 last:border-b-0"
                      >
                        {service.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Right: Core Team, Contact Us */}
          <div className="flex items-center gap-6">
            {/* Core Team - Regular Link (No Dropdown) */}
            <Link 
              href="/core-team" 
              className="text-gray-700 hover:text-[#0052cc] transition-colors font-medium text-[15px]"
            >
              Core Team
            </Link>

            {/* Contact Us Button */}
            <button
              onClick={scrollToContact}
              className="px-6 py-2.5 bg-gradient-to-r from-[#001f3f] to-[#0052cc] hover:from-[#002b4d] hover:to-[#0066ff] rounded-lg text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}