"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      
      // Detect if navbar is over a dark section
      const navbar = document.querySelector('nav')
      if (!navbar) return
      
      const navbarRect = navbar.getBoundingClientRect()
      const navbarCenter = navbarRect.top + navbarRect.height / 2
      
      const elementAtCenter = document.elementFromPoint(window.innerWidth / 2, navbarCenter + navbarRect.height)
      
      if (elementAtCenter) {
        const section = elementAtCenter.closest('section')
        if (section) {
          const bgColor = window.getComputedStyle(section).backgroundColor
          // Check if background is dark (sapphire)
          const isDark = bgColor.includes('rgb(15, 44, 89)') || // #0f2c59
                        bgColor.includes('rgb(30, 58, 138)') ||  // #1e3a8a
                        section.classList.contains('bg-[#0f2c59]') ||
                        section.classList.contains('bg-[#1e3a8a]')
          setIsDarkSection(isDark)
        }
      }
    }
    
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const markInternalNavigation = () => {
    sessionStorage.setItem("internalNavigation", "true")
    setMobileMenuOpen(false)
  }

  // Dynamic color classes
  const textColor = isDarkSection ? "text-white" : "text-gray-700"
  const hoverColor = isDarkSection ? "hover:text-blue-200" : "hover:text-[#2563eb]"
  // Fully transparent with minimal blur
  const bgColor = "bg-transparent backdrop-blur-sm"
  const borderColor = isDarkSection ? "border-white/10" : "border-gray-200"

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${bgColor} ${scrolled ? `border-b ${borderColor}` : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo, Home, Services */}
          <div className="flex items-center gap-4 sm:gap-8">
            <Link href="/" className="flex items-center gap-2 sm:gap-4 group flex-shrink-0">
              <div className="flex flex-col hidden sm:flex">
                <motion.span 
                  className="font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#0f2c59] via-[#2563eb] to-[#0f2c59] tracking-tight leading-none"
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
                  className="font-medium text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#0f2c59] via-[#2563eb] to-[#0f2c59] tracking-wide leading-none mt-0.5"
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className={`${textColor} ${hoverColor} transition-colors font-medium text-[15px]`}>
                Home
              </Link>

              {/* Services Dropdown - Hover triggered */}
              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`flex items-center gap-2 px-4 py-2 ${textColor} ${hoverColor} transition-colors font-medium text-[15px]`}>
                  Services
                  <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-[#f5f0eb] rounded-xl shadow-2xl border border-gray-200 overflow-hidden backdrop-blur-md z-50"
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
                          onClick={markInternalNavigation}
                          className="block px-4 py-3 text-sm text-gray-900 hover:bg-blue-50 hover:text-[#2563eb] transition-all duration-200 font-medium border-b border-gray-100 last:border-b-0"
                        >
                          {service.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>

              <Link 
                href="/core-team"
                onClick={markInternalNavigation}
                className={`${textColor} ${hoverColor} transition-colors font-medium text-[15px]`}
              >
                Core Team
              </Link>
            </div>
          </div>

          {/* Right: Desktop Buttons & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop Button */}
            <Link
              href="/contact"
              onClick={markInternalNavigation}
              className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-[#0f2c59] to-[#2563eb] hover:from-[#1e3a8a] hover:to-[#3b82f6] rounded-lg text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-6 border-t border-gray-200"
          >
            <div className="space-y-4 py-4">
              <Link href="/" className="block text-gray-700 hover:text-[#2563eb] transition-colors font-medium px-4" onClick={markInternalNavigation}>
                Home
              </Link>

              <div className="px-4">
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-2 w-full text-gray-700 hover:text-[#2563eb] transition-colors font-medium"
                >
                  Services
                  <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                
                {servicesOpen && (
                  <motion.div className="mt-2 space-y-2 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={markInternalNavigation}
                        className="block text-sm text-gray-600 hover:text-[#2563eb] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              <Link 
                href="/core-team"
                onClick={markInternalNavigation}
                className="block text-gray-700 hover:text-[#2563eb] transition-colors font-medium px-4"
              >
                Core Team
              </Link>

              <Link
                href="/contact"
                onClick={markInternalNavigation}
                className="block mx-4 text-center px-6 py-2.5 bg-gradient-to-r from-[#0f2c59] to-[#2563eb] hover:from-[#1e3a8a] hover:to-[#3b82f6] rounded-lg text-white font-semibold text-sm transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
