"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

const services = [
  {
    title: "IPO Advisory & Readiness",
    description: "Navigate the complexities of going public with expert guidance through every step.",
    href: "/services/ipo-advisory",
    icon: "📈",
  },
  {
    title: "Fundraising Service",
    description: "Secure the capital your business needs to grow and scale effectively.",
    href: "/services/fundraising",
    icon: "💰",
  },
  {
    title: "Private Equity",
    description: "Strategic PE investments and portfolio management for maximum returns.",
    href: "/services/private-equity",
    icon: "🏢",
  },
  {
    title: "Merger & Acquisition",
    description: "Expert guidance through complex M&A transactions and integrations.",
    href: "/services/mergers-acquisitions",
    icon: "🤝",
  },
  {
    title: "Debt Syndication",
    description: "Optimize capital structure through strategic debt syndication solutions.",
    href: "/services/debt-syndication",
    icon: "💳",
  },
  {
    title: "Startup Advisory",
    description: "Accelerate growth with tailored financial strategies for emerging companies.",
    href: "/services/startup-advisory",
    icon: "🚀",
  },
]

export function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="services" ref={ref} className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Comprehensive financial advisory solutions for your corporate and personal financial goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link key={service.href} href={service.href}>
              <div
                className={`h-full p-8 bg-white rounded-xl border-2 border-blue-200 cursor-pointer transition-all duration-500 hover:border-blue-600 hover:shadow-xl hover:-translate-y-2 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: inView ? `${idx * 100}ms` : "0ms",
                }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark-blue mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex items-center text-primary font-semibold group">
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
