"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

interface ServicePageProps {
  title: string
  subtitle: string
  openingStatement: string
  whatWeDo: string[]
  howWeEngage: string[]
  outcomes: string[]
}

export function ServicePage({
  title,
  subtitle,
  openingStatement,
  whatWeDo,
  howWeEngage,
  outcomes
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Navigation */}
        <Link
          href="/#services"
          className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-[#0f2c59] transition-colors mb-12"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f2c59] mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-500 font-light leading-relaxed border-l-2 border-[#0f2c59]/20 pl-6">
            {subtitle}
          </p>
        </motion.div>

        {/* Opening Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl">
            {openingStatement}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-serif text-[#0f2c59] mb-6">What We Do</h3>
            <ul className="space-y-4">
              {whatWeDo.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  className="text-gray-700 leading-relaxed border-t border-gray-100 pt-4 first:border-0 first:pt-0 hover:text-[#0f2c59] transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* How We Engage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif text-[#0f2c59] mb-6">How We Engage</h3>
            <ul className="space-y-4">
              {howWeEngage.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className="text-gray-700 leading-relaxed border-t border-gray-100 pt-4 first:border-0 first:pt-0 hover:text-[#0f2c59] transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0f2c59] p-8 rounded-sm shadow-xl"
          >
            <h3 className="text-2xl font-serif text-white mb-6">Outcomes</h3>
            <ul className="space-y-4">
              {outcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span className="text-white/90 leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
