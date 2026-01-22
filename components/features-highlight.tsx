"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import {
  SparklesIcon,
  CheckCircleIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"

const features = [
  {
    icon: SparklesIcon,
    title: "Premium Analytics",
    description: "Real-time insights and comprehensive financial analytics to make informed decisions",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: CheckCircleIcon,
    title: "Verified Expertise",
    description: "Industry-leading professionals with proven track records in financial advisory",
    color: "from-green-500 to-green-600",
  },
  {
    icon: LightBulbIcon,
    title: "Strategic Planning",
    description: "Customized strategies tailored to your unique business goals and challenges",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: UserGroupIcon,
    title: "Dedicated Support",
    description: "Personal relationship managers available 24/7 for your financial needs",
    color: "from-purple-500 to-purple-600",
  },
]

export function FeaturesHighlight() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f] mb-4">
            Why Choose BlueberryFin?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience world-class financial advisory with cutting-edge technology and expert guidance
          </p>
        </motion.div>

        {/* Features Grid - Icon Focus */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative text-center"
              >
                {/* Icon container - Large and prominent */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 transition-all duration-300 mx-auto shadow-lg`}
                  animate={{
                    scale: hoveredIndex === idx ? 1.2 : 1,
                    rotate: hoveredIndex === idx ? 10 : 0,
                    boxShadow: hoveredIndex === idx 
                      ? "0 20px 40px rgba(0, 82, 204, 0.3)" 
                      : "0 10px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <IconComponent className="w-10 h-10" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-[#001f3f] mb-3 group-hover:text-[#0052cc] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle background highlight on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0052cc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  initial={{ scale: 0.8 }}
                  animate={{
                    scale: hoveredIndex === idx ? 1.1 : 0.8,
                    opacity: hoveredIndex === idx ? 1 : 0,
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Ready to transform your financial journey?</p>
          <Link href="#contact">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
