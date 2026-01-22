"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const steps = [
  {
    title: "Consultation",
    description: "Understand your financial goals and requirements through personalized consultation",
    icon: "💬",
    duration: "1-2 Days",
  },
  {
    title: "Analysis",
    description: "Deep dive analysis of your financial situation and market opportunities",
    icon: "📊",
    duration: "3-5 Days",
  },
  {
    title: "Strategy",
    description: "Develop customized financial strategies aligned with your objectives",
    icon: "🎯",
    duration: "1 Week",
  },
  {
    title: "Execution",
    description: "Implement strategies with regular monitoring and adjustments",
    icon: "🚀",
    duration: "Ongoing",
  },
  {
    title: "Review",
    description: "Continuous performance tracking and optimization for maximum returns",
    icon: "✨",
    duration: "Quarterly",
  },
]

export function ProcessTimeline() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-0 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f] mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured approach to achieving your financial goals
          </p>
        </motion.div>

        {/* Timeline Steps - Vertical on mobile, horizontal with connector on desktop */}
        <div className="hidden lg:flex justify-between items-stretch gap-4 mb-20">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex-1 relative"
            >
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <motion.div
                  className="absolute top-1/4 left-1/2 w-full h-1 bg-gradient-to-r from-[#1e40af] to-transparent"
                  style={{
                    top: "calc(3.5rem / 2)",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    delay: idx * 0.15 + 0.3,
                    duration: 0.6,
                    origin: "left",
                  }}
                />
              )}

              {/* Step Card */}
              <motion.div
                className="relative h-full flex flex-col items-center text-center"
                animate={{
                  scale: hoveredIndex === idx ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon Circle */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white text-3xl flex items-center justify-center mb-4 shadow-lg relative z-10"
                  animate={{
                    scale: hoveredIndex === idx ? 1.2 : 1,
                    boxShadow: hoveredIndex === idx 
                      ? "0 0 30px rgba(0, 82, 204, 0.6)"
                      : "0 4px 12px rgba(0, 31, 63, 0.2)",
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Number */}
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-sm font-bold flex items-center justify-center shadow-lg"
                  animate={{
                    scale: hoveredIndex === idx ? 1.2 : 1,
                  }}
                >
                  {idx + 1}
                </motion.div>

                {/* Content Box */}
                <motion.div
                  className="p-6 rounded-2xl bg-white border-2 border-gray-200 min-h-48 flex flex-col justify-between transition-all duration-300"
                  animate={{
                    borderColor: hoveredIndex === idx ? "#1e40af" : "#e5e7eb",
                    boxShadow: hoveredIndex === idx
                      ? "0 20px 40px rgba(0, 82, 204, 0.15)"
                      : "0 4px 6px rgba(0, 0, 0, 0.07)",
                  }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 group-hover:text-[#1e40af] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <motion.p
                    className="text-[#1e40af] font-semibold text-sm mt-4 pt-4 border-t border-gray-200"
                    animate={{
                      opacity: hoveredIndex === idx ? 1 : 0.6,
                    }}
                  >
                    ⏱️ {step.duration}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile view */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex gap-4"
            >
              {/* Left badge */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white text-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                {idx < steps.length - 1 && (
                  <div className="w-1 h-8 bg-gradient-to-b from-[#1e40af] to-transparent mt-2" />
                )}
              </div>

              {/* Right content */}
              <motion.div
                className="flex-1 p-4 rounded-xl bg-white border-2 border-gray-200 hover:border-[#1e40af] transition-all duration-300"
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0, 82, 204, 0.1)" }}
              >
                <h3 className="text-lg font-bold text-[#001f3f] mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {step.description}
                </p>
                <p className="text-[#1e40af] text-xs font-semibold">
                  ⏱️ {step.duration}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
