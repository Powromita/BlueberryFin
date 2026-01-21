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
import { cn } from "@/lib/utils"

const services = [
  {
    title: "IPO Advisory & Readiness",
    href: "/services/ipo-advisory",
    icon: ChartBarIcon,
    className: "md:col-span-2",
  },
  {
    title: "Fundraising",
    description: "Secure capital to scale effectively.",
    href: "/services/fundraising",
    icon: CurrencyDollarIcon,
    className: "md:col-span-1",
  },
  {
    title: "Private Equity",
    description: "Strategic investments for maximum returns.",
    href: "/services/private-equity",
    icon: BuildingOfficeIcon,
    className: "md:col-span-1",
  },
  {
    title: "Merger & Acquisition",
    description: "Expert guidance through complex M&A transactions.",
    href: "/services/mergers-acquisitions",
    icon: UserGroupIcon,
    className: "md:col-span-2",
  },
  {
    title: "Debt Syndication",
    description: "Optimize capital structure through strategic debt solutions.",
    href: "/services/debt-syndication",
    icon: CreditCardIcon,
    className: "md:col-span-2",
  },
  {
    title: "Startup Advisory",
    description: "Full-spectrum financial strategies for emerging companies.",
    href: "/services/startup-advisory",
    icon: RocketLaunchIcon,
    className: "md:col-span-1",
  },
]

export function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="services" ref={ref} className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] mb-4 tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] mx-auto rounded-full mb-4" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial advisory solutions tailored to your unique goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:border-[#0052cc]/30",
                  service.className
                )}
              >
                <Link href={service.href} className="block h-full p-6 flex flex-col justify-between">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#0052cc] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#0052cc] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-[#001f3f] mb-2">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center text-[#0052cc] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Learn more <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>

                  {/* Decorative background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}