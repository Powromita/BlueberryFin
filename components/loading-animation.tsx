"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "./logo"

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [mounted, setMounted] = useState(false)
  const [logoMoved, setLogoMoved] = useState(false)
  const [showText, setShowText] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Force scroll to top immediately
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem("hasVisited")
    if (hasVisited === "true") {
      // Skip loading animation if already visited
      onComplete()
      return
    }

    // Animation sequence
    const logoMoveTimeout = setTimeout(() => {
      setLogoMoved(true)
    }, 800)

    const textTimeout = setTimeout(() => {
      setShowText(true)
    }, 1500)

    const completeTimeout = setTimeout(() => {
      // Ensure page is scrolled to top BEFORE transition starts
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      setIsTransitioning(true)
      sessionStorage.setItem("hasVisited", "true")
      setTimeout(() => {
        onComplete()
      }, 1000)
    }, 3500)

    return () => {
      clearTimeout(logoMoveTimeout)
      clearTimeout(textTimeout)
      clearTimeout(completeTimeout)
    }
  }, [onComplete])

  if (!mounted) {
    return null
  }

  // Check again to avoid showing if already visited
  const hasVisited = typeof window !== "undefined" ? sessionStorage.getItem("hasVisited") === "true" : false
  if (hasVisited) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        animate={isTransitioning ? {
          opacity: 0,
        } : { opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/30"></div>

        {/* Animated content */}
        <div className="relative flex items-center justify-center w-full">
          {/* Logo */}
          <motion.div
            initial={{ x: 0 }}
            animate={logoMoved ? { x: 0 } : { x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-0 justify-center"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: logoMoved ? 0.7 : 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo size="xl" animate={false} />
            </motion.div>

            {/* Company name appears as logo moves */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={showText ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="ml-6"
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#001f3f] to-[#0052cc]"
                initial={{ opacity: 0 }}
                animate={showText ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                BLUEBERRYFIN
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl font-semibold text-[#0052cc] mt-2"
                initial={{ opacity: 0 }}
                animate={showText ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                CAPITAL
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}