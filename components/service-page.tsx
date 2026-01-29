"use client"

import { motion } from "framer-motion"
import { CheckCircleIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Navbar } from "./navbar"

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  benefits: string[]
}

export function ServicePage({ title, subtitle, description, benefits }: ServicePageProps) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f0eb] pt-20">
        <div className="relative overflow-hidden bg-[#0f2c59] text-white py-12 sm:py-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-blue-600/20 to-transparent blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-t from-[#2563eb]/20 to-transparent blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/#services"
              className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl font-light">
                {subtitle}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#0f2c59] mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-[#0f2c59] mb-8">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-[#2563eb] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
