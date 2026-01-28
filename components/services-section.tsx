"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

const services = [
  {
    title: "IPO Advisory & Readiness",
    description: "End-to-end guidance for public market listing and regulatory compliance.",
    href: "/services/ipo-advisory",
  },
  {
    title: "Fundraising",
    description: "Strategic capital raising through debt, equity, and structured finance.",
    href: "/services/fundraising",
  },
  {
    title: "Private Equity",
    description: "Investment thesis development and portfolio value creation strategies.",
    href: "/services/private-equity",
  },
  {
    title: "Mergers & Acquisitions",
    description: "Buy-side and sell-side advisory for complex corporate transactions.",
    href: "/services/mergers-acquisitions",
  },
  {
    title: "Debt Syndication",
    description: "Optimizing capital structures with tailored debt financing solutions.",
    href: "/services/debt-syndication",
  },
  {
    title: "Startup Advisory",
    description: "Scalable financial frameworks for high-growth emerging enterprises.",
    href: "/services/startup-advisory",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Our Expertise</h2>
            <p className="text-3xl md:text-4xl font-serif text-[#0f2c59]">
              Comprehensive Financial Advisory
            </p>
          </div>
          <Link href="/services/ipo-advisory" className="text-sm font-medium text-[#0f2c59] hover:opacity-70 flex items-center gap-2 transition-opacity">
            View all services <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <Link href={service.href} className="block">
                <div className="h-px w-full bg-gray-200 mb-6 group-hover:bg-[#0f2c59] transition-colors duration-300" />
                <h3 className="text-xl font-medium text-[#0f2c59] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
