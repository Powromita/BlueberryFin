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
    <section ref={ref} className="py-12 md:py-16 bg-[#0f2c59] relative overflow-hidden" id="about">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content - Asymmetric Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - 60% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Who We Are
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-blue-100 leading-relaxed">
              <p>
                Relationship-Driven Excellence from Private Equity to Public Markets
              </p>

              <p>
                <span className="font-bold text-white">BlueberryFin Capital</span> is a capital advisory and investment banking firm delivering strategic, unbiased financial guidance across the entire capital lifecycle.
              </p>
              <p>
                We partner with businesses over the long term supporting them from early-stage private equity funding to public market transactions. Our approach is rooted in deep relationships, disciplined execution, and a strong understanding of capital markets.
              </p>
              <p>
                With expertise spanning fundraising, mergers &amp; acquisitions, and capital markets, we enable clients to navigate complex financial decisions and achieve sustainable growth.
              </p>
            </div>

            {/* <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Our Business Philosophy</h3>
              {/* Key Points - Simple List *
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="space-y-4"
              >
                {[
                  { title: "Excellence", desc: "We maintain high standards in execution and outcomes." },
                  { title: "Integrity", desc: "We operate with transparency and accountability." },
                  { title: "Ingenuity", desc: "We apply thoughtful, adaptive financial strategies." },
                  { title: "Leadership", desc: "We take ownership and lead with conviction." }
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
            </div> */}
          </motion.div>

          {/* Right Column - 40% - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 lg:pl-12 lg:border-l border-white/20"
          >
            <div className="space-y-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-base text-blue-100 italic">
                  "To be a trusted capital advisory firm known for leadership, discipline, and consistent execution.
                </p>
              </div>
              
              {[
                 { number: "20+", label: "Years Experience", sublabel: "In Financial Management" },
                 { number: "1700+", label: "Crores Raised", sublabel: "(USD $180M+)" },
                 //{ number: "360°", label: "Perspective", sublabel: "Corporate & Banking" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1, ease: "easeOut" }}
                  className="group"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#60a5fa] mb-2 leading-none group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg font-bold text-white mb-1">
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
