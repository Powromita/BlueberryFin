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
      className="py-24 bg-gradient-to-br from-[#001f3f] via-[#002b4d] to-[#003366] text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0052cc]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#60a5fa]/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight tracking-tight">
              Ready to Transform Your Financial Future?
            </h2>

            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed font-medium">
              Partner with Blueberry Financial Advisory to access expert guidance tailored to your unique financial goals.
              Our dedicated team is committed to driving your success.
            </p>

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
                    className="w-3 h-3 bg-[#60a5fa] rounded-full flex-shrink-0"
                    animate={inView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 + 0.3, duration: 0.4 }}
                  />
                  <span className="text-white/90 font-medium text-base md:text-lg">
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
                  className="px-10 py-5 bg-white text-[#001f3f] rounded-xl font-bold text-lg
                  transition-all duration-300 relative overflow-hidden
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]
                  flex items-center gap-3 justify-center border-2 border-white"
                  whileHover={{ scale: 1.05 }}
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
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0052cc] to-[#60a5fa] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  />
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
                  className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl border-2 border-white/20
                  hover:bg-white/15 transition-all duration-500 hover:border-[#60a5fa] hover:shadow-2xl hover:shadow-[#60a5fa]/20 relative overflow-hidden group"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
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
                  <h3 className="text-5xl font-bold text-[#60a5fa] mb-4 relative z-10">
                    {item.value}
                  </h3>
                  <p className="text-white font-bold text-lg md:text-xl mb-3 relative z-10">
                    {item.label}
                  </p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed relative z-10">
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
