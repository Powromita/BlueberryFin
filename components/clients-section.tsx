"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const testimonials = [
  {
    quote: "We place significant importance on strategic financial planning. With BlueberryFin's collaboration in introducing robust frameworks, we've accentuated our commitment to long-term growth and stability.",
    name: "Ashish Kumar Singh",
    title: "CHRO, Meesho",
    company: "Meesho",
  },
  {
    quote: "Thanks to BlueberryFin's consultative process, I know what other companies are doing, what benefits make sense to my team, and what I need to do to stand out in a competitive market.",
    name: "Priya Sharma",
    title: "Finance Director, Tata Group",
    company: "Tata",
  },
  {
    quote: "The difference is dramatic. We've seen financial processes that have been stuck for months – and now with BlueberryFin, everything is settled within a week. The execution is seamless and professional.",
    name: "Amit Patel",
    title: "VP Finance, Infosys",
    company: "Infosys",
  },
  {
    quote: "The execution was seamless, and the platform's intuitive design ensured a user-friendly experience for everyone. This has not only boosted employee satisfaction but has also contributed to a healthier and more productive workforce.",
    name: "Sunita Reddy",
    title: "Head of Corporate Finance, HDFC Bank",
    company: "HDFC",
  },
]

export function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative min-h-[400px] flex items-center justify-center bg-[#0f2c59] overflow-hidden text-white py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-12 border-t border-white/20 w-16" />

        <div className="relative min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight text-white/90">
                "{testimonials[currentIndex].quote}"
              </h3>

              <div className="flex items-center gap-6">
                <div className="h-px w-12 bg-white/30" />
                <div>
                  <div className="text-lg font-medium text-white">{testimonials[currentIndex].name}</div>
                  <div className="text-white/60 text-sm mt-1">{testimonials[currentIndex].title}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-4 mt-12">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
