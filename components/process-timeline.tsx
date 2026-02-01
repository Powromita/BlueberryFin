"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

const steps = [
  {
    title: "Benchmarking",
    description: "Our dedicated consultant benchmarks your current policy against industry leaders, spotting opportunities for improvement.",
    badge: "STEP 1",
    badgeColor: "bg-yellow-400",
  },
  {
    title: "Customized Plan",
    description: "We craft a comprehensive plan that fits your vision and budget perfectly.",
    badge: "STEP 2",
    badgeColor: "bg-blue-400",
  },
  {
    title: "Smooth Onboarding",
    description: "Expert-led sessions ensure your team actually understands and values their benefits.",
    badge: "STEP 3",
    badgeColor: "bg-green-400",
  },
]

export function ProcessTimeline() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section 
      ref={ref}
      className="relative py-12 md:py-14 bg-[#f5f0eb] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-0 w-80 h-80 bg-[#0f2c59]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#2563eb]/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE - Large Headline (4 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f2c59] leading-tight mb-6">
              We've reimagined financial advisory and business partnerships.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              No misselling. No pressure. No jargon. Just genuine expertise and care to help you create the perfect financial strategy for your business.
            </p>
          
          </motion.div>

          {/* CENTER - Illustration (4 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative w-full h-[320px]">
              {/* Illustrated city skyline with financial dashboard */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* City buildings */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-2 px-8">
                  <motion.div 
                    className="w-12 h-24 bg-gradient-to-t from-[#0f2c59] to-[#2563eb] rounded-t-lg opacity-80"
                    animate={{ height: [96, 104, 96] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-16 h-36 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg opacity-80"
                    animate={{ height: [144, 136, 144] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-12 h-28 bg-gradient-to-t from-[#2563eb] to-blue-400 rounded-t-lg opacity-80"
                    animate={{ height: [112, 120, 112] }}
                    transition={{ duration: 4.5, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-20 h-44 bg-gradient-to-t from-pink-600 to-pink-400 rounded-t-lg opacity-80"
                    animate={{ height: [176, 168, 176] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-12 h-32 bg-gradient-to-t from-[#0f2c59] to-[#2563eb] rounded-t-lg opacity-80"
                    animate={{ height: [128, 136, 128] }}
                    transition={{ duration: 5.5, repeat: Infinity }}
                  />
                </div>

                {/* Floating dashboard card */}
                <motion.div
                  className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-[#f5f0eb] rounded-xl shadow-2xl p-4 w-60 border-2 border-gray-100"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs font-semibold text-[#0f2c59]">Current Policy Score</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-gray-600">Basic Coverage</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-2.5 h-2.5 rounded-sm bg-red-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-gray-600">Family Benefits</span>
                      <div className="flex gap-0.5">
                        {[1].map((i) => (
                          <div key={i} className="w-2.5 h-2.5 rounded-sm bg-red-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-gray-600">Inclusive Benefits</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-2.5 h-2.5 rounded-sm bg-red-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-[9px] text-gray-500 leading-relaxed">
                      Improve your policy by addressing these gaps
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Process Steps (4 columns) - Simple text, no cards */}
          <div className="lg:col-span-4 space-y-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Badge */}
                <div className={`inline-block ${step.badgeColor} text-[#0f2c59] text-xs font-bold px-3 py-1 rounded mb-2`}>
                  {step.badge}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[#0f2c59] mb-1.5">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
