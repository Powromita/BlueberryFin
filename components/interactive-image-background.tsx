"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const financialSolutions = [
  {
    title: "Investment Growth",
    bullets: [
      "Strategic wealth management tailored to your goals",
      "Portfolio optimization for maximum returns",
      "Risk mitigation through diversification",
      "Data-driven investment insights and analytics"
    ],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=800&fit=crop",
  },
  {
    title: "Financial Planning",
    bullets: [
      "Personalized financial roadmap development",
      "Retirement planning and wealth preservation",
      "Tax optimization strategies",
      "Estate planning and legacy management"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop",
  },
  {
    title: "Market Analysis",
    bullets: [
      "Real-time market research and insights",
      "Economic trend analysis and forecasting",
      "Sector-specific investment opportunities",
      "Risk assessment and market timing"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop",
  },
  {
    title: "Portfolio Management",
    bullets: [
      "Active portfolio monitoring and rebalancing",
      "Performance tracking and reporting",
      "Asset allocation optimization",
      "Long-term growth strategy execution"
    ],
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=800&fit=crop",
  },
]

export function InteractiveImageBackground() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Calculate card width and position based on hover state
  // Calculate card width/height and position based on hover state
  const getCardStyle = (index: number) => {
    if (hoveredIndex === null) {
      // No hover - all cards equal
      return "flex-1"
    } else if (hoveredIndex === index) {
      // This card is hovered - grow
      return "flex-[1.5] md:flex-[0.7]"
    } else {
      // Other cards - shrink
      return "flex-[0.5] md:flex-[0.3]"
    }
  }

  return (
    <section
      ref={ref}
      className="py-12 bg-[#f5f0eb] overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#0f2c59]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c59] mb-3">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of services with visual insights into each offering
          </p>
        </motion.div>

        {/* Expandable Cards Row */}
        <div className="flex flex-col md:flex-row gap-4 h-[800px] md:h-[500px]">
          {financialSolutions.map((item, idx) => (
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
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${getCardStyle(idx)}`}
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hoveredIndex === idx ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />
              </motion.div>

              {/* Dark overlay */}
              <motion.div
                className="absolute inset-0 bg-black/50 transition-colors duration-300"
                animate={{
                  opacity: hoveredIndex === idx ? 0.3 : 0.6,
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59]/90 via-[#0f2c59]/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white z-20 overflow-hidden">
                {/* Title - Always visible and horizontal */}
                <motion.h3
                  className="font-bold mb-4 break-words leading-tight"
                  animate={{
                    fontSize: hoveredIndex === null ? '1.875rem' : hoveredIndex === idx ? '1.875rem' : '1.5rem',
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)',
                    WebkitTextStroke: '0.5px rgba(255,255,255,0.3)',
                  }}
                >
                  {item.title}
                </motion.h3>

                {/* Bullet Points - Only visible on hover */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: hoveredIndex === idx ? 1 : 0,
                    x: hoveredIndex === idx ? 0 : -30,
                  }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  {item.bullets.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white mt-1.5 ring-2 ring-white/30" />
                      <p className="text-sm md:text-base text-white leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: hoveredIndex === idx ? ["-100%", "200%"] : "-100%",
                }}
                transition={{
                  duration: 0.8,
                  repeat: hoveredIndex === idx ? Infinity : 0,
                  repeatDelay: 1.5,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
