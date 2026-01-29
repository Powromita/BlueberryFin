"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

const serviceCategories = {
  "Corporate Finance": [
    {
      title: "IPO Advisory & Readiness",
      description: "Navigate the complexities of going public with expert guidance through every step.",
      briefInfo: "Guide companies through IPO process, regulatory compliance, and market positioning",
      icon: ChartBarIcon,
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&h=600&fit=crop",
      href: "/services/ipo-advisory",
    },
    {
      title: "Fundraising Service",
      description: "Secure the capital your business needs to grow and scale effectively.",
      briefInfo: "Connect with investors, structure deals, and maximize funding potential",
      icon: CurrencyDollarIcon,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      href: "/services/fundraising",
    },
    {
      title: "Debt Syndication",
      description: "Optimize capital structure through strategic debt syndication solutions.",
      briefInfo: "Efficient debt structuring and lender network optimization",
      icon: CreditCardIcon,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      href: "/services/debt-syndication",
    },
  ],
  "Strategic Transactions": [
    {
      title: "Merger & Acquisition",
      description: "Expert guidance through complex M&A transactions and integrations.",
      briefInfo: "Complete M&A support from identification to post-acquisition integration",
      icon: UserGroupIcon,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      href: "/services/mergers-acquisitions",
    },
    {
      title: "Private Equity",
      description: "Strategic PE investments and portfolio management for maximum returns.",
      briefInfo: "Strategic investments, portfolio management, and value creation",
      icon: BuildingOfficeIcon,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
      href: "/services/private-equity",
    },
    {
      title: "Startup Advisory",
      description: "Accelerate growth with tailored financial strategies for emerging companies.",
      briefInfo: "Strategic guidance for early-stage companies and high-growth startups",
      icon: RocketLaunchIcon,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      href: "/services/startup-advisory",
    },
  ],
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Our Expertise</h2>
            <p
              className="text-3xl md:text-4xl font-serif text-[#0f2c59] hover:text-[#2563eb] transition-colors duration-300 cursor-default"
            >
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
                <h3 className="text-xl font-medium text-[#0f2c59] mb-3 transition-colors duration-300">
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
