"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export function EndingSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section
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
          className="text-center mb-12 md:mb-20 px-2 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] mb-4 md:mb-6 tracking-tight">
            Ready to Transform Your Financial Future?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partner with Blueberry Financial Advisory to access expert guidance tailored to your unique financial goals.
            Our dedicated team is committed to driving your success.
          </p>
        </motion.div>

        {/* Section Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <ul className="space-y-5 mb-10">
              {[
                "Personalized financial strategies",
                "Expert guidance from industry leaders",
                "Proven track record of success"
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <motion.span
                    className="w-3 h-3 bg-[#0052cc] rounded-full flex-shrink-0"
                    animate={inView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 + 0.3, duration: 0.4 }}
                  />
                  <span className="text-gray-700 font-medium text-base md:text-lg">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex"
            >
              <Link href="#contact" className="group">
                <motion.button
                  className="px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#001f3f] to-[#0052cc] text-white rounded-lg md:rounded-xl font-bold text-base md:text-lg
                  transition-all duration-300 relative overflow-hidden
                  hover:shadow-xl hover:shadow-[#0052cc]/30
                  flex items-center gap-3 justify-center w-full md:w-auto"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 82, 204, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRightIcon className="w-5 h-5 relative z-10" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "2", label: "Expert Verticals", desc: "Finance Think Tank & Execution Think Tank" },
                { value: "6+", label: "Services", desc: "Comprehensive financial solutions" },
                { value: "100%", label: "Commitment", desc: "Dedicated to your success" },
                { value: "24/7", label: "Support", desc: "Always here to help" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200
                  hover:bg-white transition-all duration-500 hover:border-[#0052cc] hover:shadow-2xl hover:shadow-[#0052cc]/20 relative overflow-hidden group"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0052cc]/5 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 2,
                    }}
                  />
                  <h3 className="text-5xl font-bold text-[#0052cc] mb-4 relative z-10">
                    {item.value}
                  </h3>
                  <p className="text-[#001f3f] font-bold text-lg md:text-xl mb-3 relative z-10">
                    {item.label}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
