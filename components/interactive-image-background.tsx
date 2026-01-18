"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import Image from "next/image"

const backgroundImages = [
  {
    title: "Investment Growth",
    description: "Strategic wealth management",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    icon: "📈",
  },
  {
    title: "Financial Planning",
    description: "Personalized strategies for your goals",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    icon: "💼",
  },
  {
    title: "Market Analysis",
    description: "Data-driven insights and decisions",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    icon: "📊",
  },
  {
    title: "Portfolio Management",
    description: "Maximize returns, minimize risks",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    icon: "💰",
  },
]

export function InteractiveImageBackground() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"
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
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#001f3f] mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our range of services with visual insights into each offering
          </p>
        </motion.div>

        {/* Interactive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {backgroundImages.map((item, idx) => (
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
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: hoveredIndex === idx ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
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
                className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"
              />

              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                animate={{
                  opacity: hoveredIndex === idx ? 0.6 : 0.8,
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white z-20">
                {/* Icon */}
                <motion.div
                  className="text-5xl"
                  animate={{
                    scale: hoveredIndex === idx ? 1.2 : 1,
                    y: hoveredIndex === idx ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>

                {/* Text */}
                <motion.div
                  animate={{
                    y: hoveredIndex === idx ? 0 : 20,
                    opacity: hoveredIndex === idx ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                  <motion.div
                    className="mt-4 flex items-center text-[#FFD700] font-semibold"
                    animate={{
                      x: hoveredIndex === idx ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore More →
                  </motion.div>
                </motion.div>
              </div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: hoveredIndex === idx ? ["−100%", "200%"] : "−100%",
                }}
                transition={{
                  duration: 0.6,
                  repeat: hoveredIndex === idx ? Infinity : 0,
                  repeatDelay: 1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
