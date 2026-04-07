"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Logo } from "./logo"
import {
  BuildingOffice2Icon,
  RocketLaunchIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Hero Section - Modern White & Purple Style */}
      <>
        <motion.section
          id="home"
          className="relative h-screen pt-20 overflow-hidden flex items-center dark-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </div>


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
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/20 to-[#0f2c59]/10 rounded-full blur-3xl"
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
                <div className="absolute inset-0 rounded-full border border-[#2563eb]/15"></div>
                <div className="absolute inset-6 rounded-full border border-[#0f2c59]/12"></div>
                <div className="absolute inset-12 rounded-full border border-[#2563eb]/10"></div>
                <div className="absolute inset-20 rounded-full border border-[#0f2c59]/8"></div>

                {/* Subtle gradient center */}
                <div className="absolute inset-24 rounded-full bg-gradient-to-br from-[#0f2c59]/5 to-[#2563eb]/10 blur-2xl"></div>
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
                      className="rounded border border-[#2563eb]/10 bg-[#0f2c59]/5"
                      style={{
                        opacity: 0.3 + (i % 3) * 0.1,
                      }}
                    />
                  ))}
                </div>

                {/* Subtle glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-[#2563eb]/5 to-transparent blur-xl"></div>
              </motion.div>
            </motion.div>

            {/* Main heading with text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center"
            >
              {/* Main Heading */}
              <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight drop-shadow-lg px-4 sm:px-0">
                Enhance your Finance
                <br />
                with BlueberryFin Capital
              </h1>

              {/* Subtext */}
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10 drop-shadow-md px-4 sm:px-6 md:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Partnering for Growth, Powered by Capital <br className="hidden sm:block" />
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mb-16"
              >
              </motion.div>

              {/* Stats Section - Responsive Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-10 max-w-3xl mx-auto px-4 sm:px-0"
              >
                <div className="text-center">
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                  >
                    50+
                  </motion.h3>
                  <p className="text-xs sm:text-sm text-gray-300 flex items-center justify-center gap-1">
                    <BuildingOffice2Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    Corporate Clients
                  </p>
                </div>
                <div className="text-center">
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  >
                    10+
                  </motion.h3>
                  <p className="text-xs sm:text-sm text-gray-300 flex items-center justify-center gap-1">
                    <RocketLaunchIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    SMEs
                  </p>
                </div>
                <div className="text-center">
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                  >
                    20+
                  </motion.h3>
                  <p className="text-xs sm:text-sm text-gray-300 flex items-center justify-center gap-1">
                    <BuildingStorefrontIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    Mid-Scale Businesses
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </>
    </>
  )
}