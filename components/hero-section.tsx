"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LoadingAnimation } from "./loading-animation"

export function HeroSection() {
  const [showWebsite, setShowWebsite] = useState(false)

  useEffect(() => {
    // Ensure scroll is at 0,0 at component level too
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  const handleLoadingComplete = () => {
    setShowWebsite(true)
    // Unlock scroll when website is shown
    document.documentElement.style.overflow = "visible"
    document.body.style.overflow = "visible"
    document.documentElement.style.height = "auto"
    document.body.style.height = "auto"
    document.documentElement.style.scrollBehavior = "smooth"
  }

  return (
    <>
      {/* Stunning Loading Animation */}
      <AnimatePresence>
        {!showWebsite && <LoadingAnimation onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Hero Section */}
      <AnimatePresence>
        {showWebsite && (
          <motion.section
            id="home"
            className="relative min-h-screen pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              backgroundImage: "url('/hero-background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            {/* Dark Overlay for better text readability */}
            <motion.div
              className="absolute inset-0 bg-black/30 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            />

            {/* Animated Background Gradient Accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-20 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-blue-200/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-100/10 to-transparent rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center">
              {/* Logo Animation - Enhanced */}
              <motion.div
                className="mb-8 group cursor-pointer"
                initial={{ y: -50, opacity: 0, rotate: -180, scale: 0 }}
                animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.3,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mx-auto shadow-2xl relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 40px rgba(59, 130, 246, 0.8)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.span
                    className="text-white font-bold text-4xl relative z-10"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255,255,255,0.5)",
                        "0 0 20px rgba(255,255,255,0.8)",
                        "0 0 10px rgba(255,255,255,0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    B
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Main Headline - Enhanced Animation */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <motion.span
                  className="block"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  New Age Financial Advisory
                </motion.span>
                <motion.span
                  className="block mt-2 bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  for Corporates & HNIs
                </motion.span>
              </motion.h1>

              {/* Subheading - Enhanced */}
              <motion.p
                className="text-lg md:text-xl text-white/90 max-w-2xl mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.02 }}
              >
                Versatile expertise backed by diversified and long-standing experience from our core team members. Two
                dedicated verticals driving your financial success.
              </motion.p>

              {/* CTA Buttons - Enhanced */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#contact" className="group w-full sm:w-auto block">
                    <button className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-600/50 relative overflow-hidden">
                      <span className="relative z-10">Schedule Consultation</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#services" className="group w-full sm:w-auto block">
                    <button className="w-full px-8 py-3 border-2 border-white text-white rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-blue-600 relative overflow-hidden backdrop-blur-sm">
                      <span className="relative z-10">Explore Services</span>
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Floating decorative elements */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/50 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
