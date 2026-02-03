"use client"

import { motion } from "framer-motion"
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
    color: "from-[#0f2c59] to-[#2563eb]",
    number: "01",
  },
  {
    icon: CheckCircleIcon,
    title: "Verified Expertise",
    description: "Industry-leading professionals with proven track records in financial advisory",
    color: "from-[#2563eb] to-[#60a5fa]",
    number: "02",
  },
  {
    icon: LightBulbIcon,
    title: "Strategic Planning",
    description: "Customized strategies tailored to your unique business goals and challenges",
    color: "from-[#0f2c59] to-[#003366]",
    number: "03",
  },
  {
    icon: UserGroupIcon,
    title: "Dedicated Support",
    description: "Personal relationship managers available 24/7 for your financial needs",
    color: "from-[#2563eb] to-[#003366]",
    number: "04",
  },
]

export function FeaturesHighlight() {
  return (
    <section className="relative bg-[#f5f0eb] py-16 sm:py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0f2c59]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #0f2c59 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2c59] mb-4">
            Why Choose BlueberryFin?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class financial advisory with cutting-edge technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Large background number */}
                <div className="absolute -top-4 -right-4 text-[#0f2c59]/5 text-[120px] font-bold select-none pointer-events-none">
                  {feature.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Feature number badge */}
                <div className="inline-block px-3 py-1 bg-[#0f2c59]/10 rounded-full text-[#0f2c59] text-xs font-bold mb-3">
                  Feature {feature.number}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f2c59] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
