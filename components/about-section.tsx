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
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#1e40af]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] mb-6 tracking-tight">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] mx-auto rounded-full" />
        </motion.div>

        {/* Centered Content */}
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center mb-16 space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              <span className="font-bold text-[#001f3f]">Blueberry Financial Advisory</span> is a new age financial
              advisory firm dedicated to catering to the financial needs of corporates and high net worth individuals.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our team is organized into two powerful verticals that drive comprehensive financial solutions:
            </p>
          </motion.div>

          {/* Verticals Cards - Premium Hover Effects */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group ${
                hoveredCard === 0
                  ? "bg-gradient-to-br from-[#001f3f]/10 to-[#003366]/10 border-[#001f3f] shadow-2xl scale-105"
                  : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-[#1e40af] hover:shadow-xl"
              }`}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#001f3f]/5 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: hoveredCard === 0 ? ["-100%", "200%"] : "-100%",
                }}
                transition={{
                  duration: 1.5,
                  repeat: hoveredCard === 0 ? Infinity : 0,
                  ease: "linear",
                  repeatDelay: 0.5,
                }}
              />

              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3 relative z-10 group-hover:text-[#1e40af] transition-colors duration-300">
                Finance Think Tank
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Strategic financial analysis and advisory services tailored to your corporate objectives.
              </p>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-500 relative overflow-hidden group ${
                hoveredCard === 1
                  ? "bg-gradient-to-br from-[#003366]/10 to-[#001f3f]/10 border-[#001f3f] shadow-2xl scale-105"
                  : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-[#1e40af] hover:shadow-xl"
              }`}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#003366]/5 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: hoveredCard === 1 ? ["-100%", "200%"] : "-100%",
                }}
                transition={{
                  duration: 1.5,
                  repeat: hoveredCard === 1 ? Infinity : 0,
                  ease: "linear",
                  repeatDelay: 0.5,
                }}
              />

              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3 relative z-10 group-hover:text-[#1e40af] transition-colors duration-300">
                Execution Think Tank
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Hands-on execution and implementation expertise to bring strategies to life.
              </p>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}