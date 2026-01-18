"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { 
  ArrowRightIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CreditCardIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline"

const services = [
  {
    title: "IPO Advisory & Readiness",
    description: "Navigate the complexities of going public with expert guidance through every step.",
    briefInfo: "Guide companies through IPO process, regulatory compliance, and market positioning",
    href: "/services/ipo-advisory",
    icon: ChartBarIcon,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Fundraising Service",
    description: "Secure the capital your business needs to grow and scale effectively.",
    briefInfo: "Connect with investors, structure deals, and maximize funding potential",
    href: "/services/fundraising",
    icon: CurrencyDollarIcon,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Private Equity",
    description: "Strategic PE investments and portfolio management for maximum returns.",
    briefInfo: "Strategic investments, portfolio management, and value creation",
    href: "/services/private-equity",
    icon: BuildingOfficeIcon,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Merger & Acquisition",
    description: "Expert guidance through complex M&A transactions and integrations.",
    briefInfo: "Complete M&A support from identification to post-acquisition integration",
    href: "/services/mergers-acquisitions",
    icon: UserGroupIcon,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Debt Syndication",
    description: "Optimize capital structure through strategic debt syndication solutions.",
    briefInfo: "Efficient debt structuring and lender network optimization",
    href: "/services/debt-syndication",
    icon: CreditCardIcon,
    color: "from-red-500 to-red-600",
  },
  {
    title: "Startup Advisory",
    description: "Accelerate growth with tailored financial strategies for emerging companies.",
    briefInfo: "Strategic guidance for early-stage companies and high-growth startups",
    href: "/services/startup-advisory",
    icon: RocketLaunchIcon,
    color: "from-pink-500 to-pink-600",
  },
]

const ServiceCard = ({ service, idx, inView }) => {
  const [isHovered, setIsHovered] = useState(false)
  const IconComponent = service.icon

  return (
    <motion.div
      key={service.href}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{
        duration: 0.6,
        delay: idx * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <Link href={service.href} className="block h-full">
        <motion.div
          className="h-full relative rounded-2xl overflow-hidden"
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
          
          {/* Card content */}
          <div className="h-full p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 cursor-pointer transition-all duration-300 group-hover:border-[#0052cc] group-hover:shadow-2xl relative overflow-hidden">
            
            {/* Animated background pattern on hover */}
            <motion.div
              className="absolute -inset-0 bg-gradient-to-r from-[#0052cc]/0 via-[#0052cc]/0 to-[#0052cc]/0 group-hover:from-[#0052cc]/5 group-hover:via-transparent group-hover:to-[#0052cc]/5 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            />

            {/* Icon container */}
            <motion.div 
              className={`mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white transition-all duration-300`}
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
            >
              <IconComponent className="w-7 h-7 stroke-2" />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#001f3f] mb-3 group-hover:text-[#0052cc] transition-colors duration-300 relative z-10">
              {service.title}
            </h3>

            {/* Description - Main */}
            <p className="text-gray-600 mb-4 leading-relaxed text-[15px] relative z-10">
              {service.description}
            </p>

            {/* Brief info tooltip style */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                height: isHovered ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 p-3 bg-blue-50 border-l-4 border-[#0052cc] rounded">
                <p className="text-sm text-[#001f3f] font-medium">
                  💡 {service.briefInfo}
                </p>
              </div>
            </motion.div>
            
            {/* Read More Link */}
            <div className="flex items-center text-[#001f3f] font-semibold group-hover:text-[#0052cc] transition-colors duration-300 relative z-10">
              <span>Read More</span>
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </motion.div>
            </div>

            {/* Bottom accent line on hover */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052cc] via-blue-500 to-[#0052cc]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, origin: "left" }}
            />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section 
      id="services" 
      ref={ref} 
      className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-[#001f3f]/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#0052cc]/8 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] mb-6 tracking-tight">
              Our Services
            </h2>
          </motion.div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] mx-auto rounded-full mb-6" />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive financial advisory solutions for your corporate and personal financial goals
            <br />
            <span className="text-sm text-[#0052cc] mt-2 inline-block">✨ Hover over services for detailed insights</span>
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={service.href} service={service} idx={idx} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-700 mb-6">Ready to explore our comprehensive services?</p>
          <Link href="#contact">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#001f3f] to-[#0052cc] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 82, 204, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}