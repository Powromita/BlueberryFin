"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Link from "next/link"

export function EndingSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className="relative h-[600px] md:h-[700px] overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Video element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback gradient if video doesn't load */}
        </video>
        
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2c59] via-[#2563eb] to-[#0f2c59]" />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 sm:mb-8 leading-tight px-4 sm:px-0">
              The New Standard{" "}
              <span className="italic font-serif">of</span>{" "}
              Financial Advisory
              <br />
              Is Waiting{" "}
              <span className="italic font-serif">for</span>{" "}
              Your Business
            </h2>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                onClick={() => sessionStorage.setItem("internalNavigation", "true")}
                className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-semibold text-base sm:text-lg rounded-lg transition-all duration-300 shadow-2xl hover:shadow-[#2563eb]/50 hover:scale-105"
              >
                START NOW
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
