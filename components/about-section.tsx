"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const stats = [
    { number: "2", label: "Expert Verticals", sublabel: "Finance & Execution" },
    { number: "6+", label: "Services", sublabel: "Comprehensive Solutions" },
    { number: "100%", label: "Commitment", sublabel: "To Your Success" },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#0f2c59] relative overflow-hidden" id="about">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content - Asymmetric Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column - 60% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-10 md:mb-12 leading-tight">
              Who We Are
            </h2>

            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed">
              <p>
                <span className="font-bold text-white">Axcelus Finserv</span> is a Capital Advisory firm, providing unbiased, tactical, strategic financial advice and investment banking services to our clients through our in-depth knowledge and expertise across industries.
              </p>
              <p>
                We work with our clients through all phases of the business cycle through expert capabilities in Financing, M&A and Capital Markets.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Our Business Philosophy</h3>
              {/* Key Points - Simple List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="space-y-4"
              >
                {[
                  { title: "Excellence", desc: "We strive to achieve our goals through excellence." },
                  { title: "Integrity", desc: "We exhibit honesty and integrity at all times." },
                  { title: "Ingenuity", desc: "We are committed to new innovation." },
                  { title: "Leadership", desc: "We lead by example." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] mt-2.5 group-hover:scale-150 transition-transform duration-300 flex-shrink-0" />
                    <div>
                      <span className="text-base md:text-lg font-bold text-white block">{item.title}</span>
                      <span className="text-base text-blue-200">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - 40% - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 lg:pl-12 lg:border-l border-white/20"
          >
            <div className="space-y-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-lg text-blue-100 italic">
                  "To be the preferred capital advisory company through Leadership and Excellence"
                </p>
              </div>
              
              {[
                 { number: "20+", label: "Years Experience", sublabel: "In Financial Management" },
                 { number: "12k+", label: "Crores Raised", sublabel: "(USD $1.8bn+)" },
                 { number: "360°", label: "Perspective", sublabel: "Corporate & Banking" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1, ease: "easeOut" }}
                  className="group"
                >
                  <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-[#60a5fa] mb-2 leading-none group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-base text-blue-200">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
