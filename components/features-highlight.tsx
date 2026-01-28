"use client"

import { motion } from "framer-motion"

const reasons = [
  {
    title: "Unbiased Advisory",
    description: "We operate with complete independence, ensuring our recommendations are solely aligned with your long-term strategic interests, free from conflict.",
  },
  {
    title: "Deep Sector Expertise",
    description: "Our team comprises industry veterans with decades of hands-on experience in navigating complex financial landscapes and regulatory environments.",
  },
  {
    title: "Execution Excellence",
    description: "We pride ourselves on a meticulous approach to transaction execution, delivering precision and reliability where it matters most.",
  },
  {
    title: "Long-term Partnership",
    description: "We view every engagement as the beginning of a lasting relationship, committed to supporting your growth through every business cycle.",
  },
]

export function FeaturesHighlight() {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f2c59] mb-6 leading-tight">
              Why leading organizations trust BlueberryFin.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              In a crowded market of financial intermediaries, we stand apart through our commitment to integrity, analytical rigor, and unwavering client advocacy.
            </p>
          </motion.div>

          <div className="space-y-12">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex gap-6"
              >
                <span className="text-sm font-bold text-blue-600/40 font-mono mt-1">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#0f2c59] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
