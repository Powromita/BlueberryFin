"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const services = [
  { name: "IPO Advisory & Readiness", href: "/services/ipo-advisory" },
  { name: "Fundraising", href: "/services/fundraising" },
  { name: "Private Equity", href: "/services/private-equity" },
  { name: "Mergers & Acquisitions", href: "/services/mergers-acquisitions" },
  { name: "Debt Syndication", href: "/services/debt-syndication" },
  { name: "Startup Advisory", href: "/services/startup-advisory" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Force dark section (white text) when at top of home page
      if (window.scrollY < 50 && window.location.pathname === "/") {
        setIsDarkSection(true)
        setScrolled(false)
        return
      }

      setScrolled(window.scrollY > 10)

      const navbar = document.querySelector('nav')
      if (!navbar) return

      const navbarRect = navbar.getBoundingClientRect()
      const navbarCenter = navbarRect.top + navbarRect.height / 2
      const elementAtCenter = document.elementFromPoint(window.innerWidth / 2, navbarCenter + navbarRect.height)

      if (elementAtCenter) {
        const section = elementAtCenter.closest('section')
        if (section) {
          const bgColor = window.getComputedStyle(section).backgroundColor
          const isDark = bgColor.includes('rgb(15, 44, 89)') || // #0f2c59
            bgColor.includes('rgb(30, 58, 138)') ||  // #1e3a8a
            section.classList.contains('bg-[#0f2c59]') ||
            section.classList.contains('bg-[#1e3a8a]') ||
            section.classList.contains('dark-section')
          setIsDarkSection(isDark)
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const textColor = scrolled || !isDarkSection ? "text-slate-900" : "text-white"
  const logoColor = scrolled || !isDarkSection ? "text-[#0f2c59]" : "text-white"
  const navBg = scrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-100" : "bg-transparent"

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50 relative">
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${logoColor}`}>
              BlueberryFin.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-200 hover:opacity-70 ${textColor}`}
            >
              Home
            </Link>

            <div className="relative group">
              <button className={`text-sm font-medium flex items-center gap-1 transition-colors duration-200 hover:opacity-70 ${textColor}`}>
                Services
              </button>

              <div className="absolute top-full right-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white rounded-sm shadow-xl border border-gray-100 p-2 flex flex-col gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="px-4 py-2.5 text-sm text-gray-600 hover:text-[#0f2c59] hover:bg-gray-50 transition-colors text-left"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/#contact"
              className={`text-sm font-medium transition-colors duration-200 hover:opacity-70 ${textColor}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 -mr-2 z-50 relative ${textColor}`}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-slate-900" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-[#0f2c59]"
              >
                Home
              </Link>
              <div className="flex flex-col gap-4">
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-gray-600 hover:text-[#0f2c59]"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-[#0f2c59]"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
