"use client"

import { motion } from "framer-motion"

export function FeatureShowcase() {
  const features = [
    {
      title: "3D Money Animation",
      description: "Stunning Three.js powered 3D coins orbiting in the hero section",
      icon: "💰",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Interactive Images",
      description: "Dynamic hover effects with premium finance-related images",
      icon: "🖼️",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Smooth Animations",
      description: "Framer Motion powered transitions throughout the site",
      icon: "✨",
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Premium Components",
      description: "Advanced interactive UI components with gradient effects",
      icon: "🎨",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Responsive Design",
      description: "Mobile-optimized with touch-friendly animations",
      icon: "📱",
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: "Professional Effects",
      description: "Glassmorphism, shimmer, and premium shadow effects",
      icon: "✨",
      color: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#001f3f] mb-4">
            Premium Enhancements
          </h2>
          <p className="text-xl text-gray-600">
            Your website now features cutting-edge interactive components
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <motion.div
                className={`h-full p-6 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg hover:shadow-2xl transition-all duration-300`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
