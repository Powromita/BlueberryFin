"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const stats = [
  {
    value: "₹2000+",
    label: "Cr Assets Managed",
    prefix: "₹",
    color: "from-green-500 to-green-600",
    icon: "📈",
  },
  {
    value: "500+",
    label: "Successful Deals",
    prefix: "",
    color: "from-blue-500 to-blue-600",
    icon: "✅",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    prefix: "",
    color: "from-purple-500 to-purple-600",
    icon: "🎯",
  },
  {
    value: "200+",
    label: "Industry Experts",
    prefix: "",
    color: "from-orange-500 to-orange-600",
    icon: "👥",
  },
]

export function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Animated background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f] mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-gray-600">Our impact speaks for itself</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <motion.div
                className="relative h-full p-8 rounded-2xl bg-white border-2 border-gray-200 overflow-hidden"
                whileHover={{
                  borderColor: "#1e40af",
                  boxShadow: "0 20px 40px rgba(0, 82, 204, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.icon}
                </motion.div>

                {/* Value */}
                <motion.div
                  className={`relative z-10`}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: idx * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </h3>
                </motion.div>

                {/* Label */}
                <p className="text-gray-600 font-medium group-hover:text-[#1e40af] transition-colors duration-300 relative z-10">
                  {stat.label}
                </p>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1e40af] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
