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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight">
              What We Do
            </h2>

            <div className="space-y-8 text-lg md:text-xl text-blue-100 leading-relaxed">
              <p>
                <span className="font-bold text-white">BlueberryFin Capital</span> is not just a firm — we are your strategic partners in growth.
              </p>
              <p>
                In an era of volatile markets, we bring stability, clarity, and foresight to your financial decisions.
              </p>
              <p>
                Catering exclusively to corporates and high-net-worth individuals, we combine traditional wisdom with modern financial engineering to deliver bespoke solutions that stand the test of time.
              </p>
            </div>

            {/* Key Points - Simple List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-16 space-y-4"
            >
              {[
                "Strategic Vision for Long-Term Growth",
                "Data-Driven Insights & Analytics",
                "Execution Excellence & Optimization"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-base md:text-lg font-medium text-blue-200">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 40% - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 lg:pl-12 lg:border-l border-white/20"
          >
            <div className="space-y-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1, ease: "easeOut" }}
                  className="group"
                >
                  <div className="text-7xl md:text-8xl font-extrabold text-[#60a5fa] mb-2 leading-none group-hover:scale-105 transition-transform duration-300">
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
