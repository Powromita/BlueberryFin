"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#001f3f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#0052cc]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] mb-6 tracking-tight">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] rounded-full" />
        </motion.div>

        {/* Split Screen Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              <span className="font-bold text-[#001f3f]">Blueberry Financial Advisory</span> is a new age financial
              advisory firm dedicated to catering to the financial needs of corporates and high net worth individuals.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our team is organized into two powerful verticals that drive comprehensive financial solutions:
            </p>
          </motion.div>

          {/* Right Side - Verticals */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-6 rounded-xl border-l-4 border-[#001f3f] bg-gradient-to-r from-[#001f3f]/5 to-transparent hover:from-[#001f3f]/10 transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-xl font-bold text-[#001f3f] mb-2 group-hover:text-[#0052cc] transition-colors duration-300">
                Finance Think Tank
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Strategic financial analysis and advisory services tailored to your corporate objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-6 rounded-xl border-l-4 border-[#0052cc] bg-gradient-to-r from-[#0052cc]/5 to-transparent hover:from-[#0052cc]/10 transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-xl font-bold text-[#001f3f] mb-2 group-hover:text-[#0052cc] transition-colors duration-300">
                Execution Think Tank
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Hands-on execution and implementation expertise to bring strategies to life.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}