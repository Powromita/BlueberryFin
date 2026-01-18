"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { PremiumCurrencyAnimation } from "./premium-currency-animation"

function CanvasLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-[#1e40af] border-t-[#64748b] rounded-full animate-spin" />
        <p className="mt-4 text-white/50 text-sm">Loading Premium Experience...</p>
      </div>
    </div>
  )
}

export function HeroWith3DMoneyAnimation() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Premium 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<CanvasLoader />}>
          <PremiumCurrencyAnimation />
        </Suspense>
      </div>

      {/* Sophisticated gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      
      {/* Additional radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30 z-10 pointer-events-none" 
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(0, 82, 204, 0.2), transparent)"
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Wealth <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#64748b]">Creation</span> Redefined
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your financial future with data-driven strategies and expert guidance from BlueberryFin. Watch your wealth grow with our proven advisory solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="#contact">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1e40af] text-white font-bold rounded-full text-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(30, 64, 175, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                </motion.button>
              </Link>
              <motion.button
                className="px-8 py-4 border-2 border-[#1e40af] text-[#1e40af] font-bold rounded-full text-lg hover:bg-[#1e40af]/10 transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Premium Stats Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              <motion.div 
                className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.2)", borderColor: "rgba(255,255,255,0.4)" }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#3b82f6] mb-1">₹2000+Cr</h3>
                <p className="text-gray-400 text-sm">Assets Managed</p>
              </motion.div>
              <motion.div 
                className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-1">500+</h3>
                <p className="text-gray-400 text-sm">Success Stories</p>
              </motion.div>
              <motion.div 
                className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#64748b] mb-1">98%</h3>
                <p className="text-gray-400 text-sm">Satisfaction</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white/40 text-xs mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
