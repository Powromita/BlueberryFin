"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LoadingAnimation } from "./loading-animation"
import { Logo } from "./logo"

export function HeroSection() {
  const [showWebsite, setShowWebsite] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [shouldShowLoading, setShouldShowLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Ensure we're at the top of the page
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Check if already visited in this session
    const hasVisited = sessionStorage.getItem("hasVisited")
    if (hasVisited === "true") {
      setShowWebsite(true)
      document.documentElement.style.overflow = "visible"
      document.body.style.overflow = "visible"
      document.documentElement.style.height = "auto"
      document.body.style.height = "auto"
      document.documentElement.style.scrollBehavior = "smooth"
    } else {
      // Show loading animation
      setShouldShowLoading(true)
      // Lock scroll during loading
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
      document.documentElement.style.height = "100vh"
      document.body.style.height = "100vh"
      // Prevent any hash scrolling
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname)
      }
    }
  }, [])

  const handleLoadingComplete = () => {
    // Ensure we're at the top
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Remove any hash from URL
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname)
    }
    
    // Small delay to allow transition to complete
    setTimeout(() => {
      setShowWebsite(true)
      setShouldShowLoading(false)
      // Unlock scroll when website is shown
      document.documentElement.style.overflow = "visible"
      document.body.style.overflow = "visible"
      document.documentElement.style.height = "auto"
      document.body.style.height = "auto"
      document.documentElement.style.scrollBehavior = "smooth"
    }, 100)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Loading Animation - Only on first visit */}
      <AnimatePresence>
        {shouldShowLoading && (
          <LoadingAnimation onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Hero Section - Modern White & Purple Style */}
      {showWebsite && (
      <motion.section
        id="home"
        className="relative min-h-screen pt-20 overflow-hidden bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Subtle gradient accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/30"></div>

        {/* Premium Animated Orbs - Subtle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-300/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/20 to-[#001f3f]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content Container - Modern Centered Layout */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 z-10">
          {/* Decorative Elements - Behind content */}
          {/* Left Abstract Element */}
          <motion.div
            className="hidden lg:block absolute left-16 top-24 -z-10 pointer-events-none opacity-25"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ delay: 0.8, duration: 2 }}
          >
            <motion.div
              className="relative w-64 h-64"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Clean concentric circles */}
              <div className="absolute inset-0 rounded-full border border-[#0052cc]/15"></div>
              <div className="absolute inset-6 rounded-full border border-[#001f3f]/12"></div>
              <div className="absolute inset-12 rounded-full border border-[#0052cc]/10"></div>
              <div className="absolute inset-20 rounded-full border border-[#001f3f]/8"></div>
              
              {/* Subtle gradient center */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-[#001f3f]/5 to-[#0052cc]/10 blur-2xl"></div>
            </motion.div>
          </motion.div>

          {/* Right Abstract Element */}
          <motion.div
            className="hidden lg:block absolute right-16 top-24 -z-10 pointer-events-none opacity-25"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ delay: 0.8, duration: 2 }}
          >
            <motion.div
              className="relative w-64 h-64"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Minimal square grid */}
              <div className="absolute inset-8 grid grid-cols-4 grid-rows-4 gap-3">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded border border-[#0052cc]/10 bg-[#001f3f]/5"
                    style={{
                      opacity: 0.3 + (i % 3) * 0.1,
                    }}
                  />
                ))}
              </div>
              
              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-[#0052cc]/5 to-transparent blur-xl"></div>
            </motion.div>
          </motion.div>

          {/* Main heading with text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Enhance <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001f3f] to-[#0052cc]">your</span>
              <br />
              Finance with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001f3f] to-[#0052cc]">BlueberryFin</span>
            </h1>

            {/* Subtext */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Driving results through data-informed and <br className="hidden md:block" />
              client-focused financial strategies for corporates and HNIs
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mb-16"
            >
              <Link href="#contact">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-[#001f3f] to-[#0052cc] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 82, 204, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats Section - Similar to reference */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                >
                  75K+
                </motion.h3>
                <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Users
                </p>
              </div>
              <div className="text-center">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                >
                  ₹1000Cr+
                </motion.h3>
                <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Managed
                </p>
              </div>
              <div className="text-center">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                >
                  500+
                </motion.h3>
                <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Deals
                </p>
              </div>
              <div className="text-center">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                >
                  92%
                </motion.h3>
                <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  Satisfaction
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Cards - Below stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            <Link href="#contact" className="block group">
              <motion.div
                className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0052cc] transition-all duration-300 shadow-lg hover:shadow-2xl"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#001f3f] to-[#0052cc] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0052cc] transition-colors">
                  Personalized Service
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tailored financial solutions designed specifically for your unique needs and goals
                </p>
              </motion.div>
            </Link>

            <Link href="#services" className="block group">
              <motion.div
                className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0052cc] transition-all duration-300 shadow-lg hover:shadow-2xl"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#001f3f] to-[#0052cc] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0052cc] transition-colors">
                  Safety Funds
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Secure investment strategies with comprehensive risk management and protection
                </p>
              </motion.div>
            </Link>

            <Link href="#contact" className="block group">
              <motion.div
                className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0052cc] transition-all duration-300 shadow-lg hover:shadow-2xl"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#001f3f] to-[#0052cc] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0052cc] transition-colors">
                  Expert Guidance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Proven track record with industry-leading professionals guiding your success
                </p>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
      )}
    </>
  )
}