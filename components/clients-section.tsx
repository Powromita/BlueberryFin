"use client"

import { motion } from "framer-motion"

const clients = [
  "Reliance Industries",
  "Tata Group",
  "Aditya Birla Group",
  "Infosys",
  "Wipro",
  "HDFC Bank",
  "ICICI Bank",
  "Mahindra & Mahindra",
  "Larsen & Toubro",
  "Asian Paints",
  "Bajaj Auto",
  "Tech Mahindra",
  "Sun Pharma",
  "HCL Technologies",
  "Axis Bank",
]

export function ClientsSection() {
  return (
    <section className="py-12 pb-20 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center px-2 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001f3f] to-[#0052cc]">Clients</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#001f3f] via-[#0052cc] to-[#001f3f] mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations across industries
          </p>
        </motion.div>
      </div>

      {/* Continuous scrolling clients */}
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* First set of clients */}
            {clients.map((client, idx) => (
              <motion.div
                key={`client-1-${idx}`}
                className="flex-shrink-0 px-8 py-6 bg-white rounded-xl border-2 border-gray-200 hover:border-[#0052cc] transition-all duration-300 shadow-lg hover:shadow-2xl min-w-[280px] mx-4"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center h-16">
                  <span className="text-xl font-bold text-gray-900 hover:text-[#0052cc] transition-colors text-center">
                    {client}
                  </span>
                </div>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, idx) => (
              <motion.div
                key={`client-2-${idx}`}
                className="flex-shrink-0 px-8 py-6 bg-white rounded-xl border-2 border-gray-200 hover:border-[#0052cc] transition-all duration-300 shadow-lg hover:shadow-2xl min-w-[280px] mx-4"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center h-16">
                  <span className="text-xl font-bold text-gray-900 hover:text-[#0052cc] transition-colors text-center">
                    {client}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
