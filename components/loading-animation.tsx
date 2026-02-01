"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [mounted, setMounted] = useState(false)
  const [showText, setShowText] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Force scroll to top immediately and lock scroll
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    document.documentElement.style.height = "100vh"
    document.body.style.height = "100vh"

    // Animation sequence - faster timing
    const textTimeout = setTimeout(() => {
      setShowText(true)
    }, 500) // Show text faster

    const completeTimeout = setTimeout(() => {
      // Ensure page is scrolled to top BEFORE transition starts
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      setIsTransitioning(true)
      setTimeout(() => {
        onComplete()
      }, 800) // Faster fade out
    }, 2200) // Complete animation faster (was 3500)

    return () => {
      clearTimeout(textTimeout)
      clearTimeout(completeTimeout)
    }
  }, [onComplete])

  if (!mounted) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-[#f5f0eb] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={isTransitioning ? {
          opacity: 0,
        } : { opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/30"></div>

        {/* Animated content - No logo, just text */}
        <div className="relative flex items-center justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f2c59] to-[#2563eb]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={showText ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              BLUEBERRYFIN
            </motion.h1>
            <motion.p
              className="text-3xl md:text-4xl font-semibold text-[#2563eb] mt-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={showText ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              CAPITAL
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}