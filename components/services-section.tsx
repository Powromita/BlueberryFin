"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { motion } from "framer-motion"
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
    href: "/services/ipo-advisory",
    icon: ChartBarIcon,
  },
  {
    title: "Fundraising Service",
    description: "Secure the capital your business needs to grow and scale effectively.",
    href: "/services/fundraising",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Private Equity",
    description: "Strategic PE investments and portfolio management for maximum returns.",
    href: "/services/private-equity",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Merger & Acquisition",
    description: "Expert guidance through complex M&A transactions and integrations.",
    href: "/services/mergers-acquisitions",
    icon: UserGroupIcon,
  },
  {
    title: "Debt Syndication",
    description: "Optimize capital structure through strategic debt syndication solutions.",
    href: "/services/debt-syndication",
    icon: CreditCardIcon,
  },
  {
    title: "Startup Advisory",
    description: "Accelerate growth with tailored financial strategies for emerging companies.",
    href: "/services/startup-advisory",
    icon: RocketLaunchIcon,
  },
]

export function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16" id="services" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#001f3f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#003366]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] mb-6 tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial advisory solutions for your corporate and personal financial goals
          </p>
        </motion.div>

        {/* Services Grid - Evernile Style Clean Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Link href={service.href} className="block h-full">
                  <div className="h-full p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 cursor-pointer transition-all duration-300 hover:border-[#0052cc] hover:shadow-xl relative overflow-hidden">
                    {/* Icon - Simple outlined style like Evernile */}
                    <div className="mb-6 flex items-center">
                      <div className="w-12 h-12 flex items-center justify-center text-[#0052cc] group-hover:text-[#001f3f] transition-colors duration-300">
                        <IconComponent className="w-8 h-8 stroke-2" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#001f3f] mb-3 group-hover:text-[#0052cc] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
                      {service.description}
                    </p>
                    
                    {/* Read More Link - Evernile Style */}
                    <div className="flex items-center text-[#001f3f] font-semibold group-hover:text-[#0052cc] transition-colors duration-300">
                      <span>Read More</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </motion.div>
                    </div>

                    {/* Bottom accent line on hover */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0052cc] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}