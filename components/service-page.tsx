"use client"

import { motion } from "framer-motion"
import { CheckCircleIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Navbar } from "./navbar"

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  whatWeDo?: string
  howWeEngage?: string
  outcomes?: string[]
}

export function ServicePage({ title, subtitle, description, whatWeDo, howWeEngage, outcomes }: ServicePageProps) {
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
          <div className="grid grid-cols-1 gap-16">
            {/* Opening Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
            >
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </motion.div>

            {/* What We Do - Editorial Layout */}
            {whatWeDo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-gray-200 pt-16"
              >
                <div className="lg:col-span-4">
                  <h2 className="text-3xl font-serif text-[#0f2c59]">What We Do</h2>
                </div>
                <div className="lg:col-span-8 prose prose-lg max-w-none text-gray-600">
                  <div dangerouslySetInnerHTML={{ __html: whatWeDo }} />
                </div>
              </motion.div>
            )}

            {/* How We Engage - Editorial Layout */}
            {howWeEngage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-gray-200 pt-16"
              >
                <div className="lg:col-span-4">
                  <h2 className="text-3xl font-serif text-[#0f2c59]">How We Engage</h2>
                </div>
                <div className="lg:col-span-8 prose prose-lg max-w-none text-gray-600">
                  <div dangerouslySetInnerHTML={{ __html: howWeEngage }} />
                </div>
              </motion.div>
            )}

            {/* Outcomes/Benefits - Editorial List */}
            {outcomes && outcomes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-gray-200 pt-16"
              >
                <div className="lg:col-span-4">
                  <h2 className="text-3xl font-serif text-[#0f2c59]">Outcomes</h2>
                </div>
                <div className="lg:col-span-8">
                  <ul className="grid grid-cols-1 gap-6">
                    {outcomes.map((outcome, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-2.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700 leading-relaxed">{outcome}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
