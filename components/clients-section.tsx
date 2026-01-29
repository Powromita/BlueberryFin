"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const testimonials = [
  {
    quote: "We place significant importance on strategic financial planning. With BlueberryFin's collaboration in introducing robust frameworks, we've accentuated our commitment to long-term growth and stability.",
    name: "Ashish Kumar Singh",
    title: "CHRO, Meesho",
    company: "Meesho",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    quote: "Thanks to BlueberryFin's consultative process, I know what other companies are doing, what benefits make sense to my team, and what I need to do to stand out in a competitive market.",
    name: "Priya Sharma",
    title: "Finance Director, Tata Group",
    company: "Tata",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    quote: "The difference is dramatic. We've seen financial processes that have been stuck for months – and now with BlueberryFin, everything is settled within a week. The execution is seamless and professional.",
    name: "Amit Patel",
    title: "VP Finance, Infosys",
    company: "Infosys",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
  {
    quote: "The execution was seamless, and the platform's intuitive design ensured a user-friendly experience for everyone. This has not only boosted employee satisfaction but has also contributed to a healthier and more productive workforce.",
    name: "Sunita Reddy",
    title: "Head of Corporate Finance, HDFC Bank",
    company: "HDFC",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
  },
]

export function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 10000) // Changed from 8000 to 10000 (10 seconds)
    return () => clearInterval(timer)
  }, [])

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative h-screen min-h-[500px] max-h-[700px] bg-[#0f2c59] overflow-hidden flex items-center">
      {/* Large Company Name Background - Brighter for visibility */}
      <motion.div
        key={`bg-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h3 className="text-[180px] md:text-[240px] lg:text-[320px] font-bold text-white/30 leading-none select-none">
          {testimonials[currentIndex].company}
        </h3>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-white" style={{ fontFamily: 'GT Alpina Standard, Verdana, sans-serif' }}> {/* Added text-white */}
          Testimonial
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Photo with Name Overlay */}
          <motion.div
            key={`photo-${currentIndex}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* Actual image */}
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Name overlay on photo */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                <div className="text-white font-semibold text-xl md:text-2xl mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-blue-200/90 text-sm md:text-base">
                  {testimonials[currentIndex].title}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Quote */}
          <motion.div
            key={`quote-${currentIndex}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              "{testimonials[currentIndex].quote}"
            </p>
          </motion.div>
        </div>

        {/* Navigation at Bottom */}
        <div className="flex items-center justify-center gap-8 mt-16">
          <button
            onClick={goToPrevious}
            className="text-white/50 hover:text-white transition-colors p-2"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>

          <div className="text-white/70 text-xl font-light">
            {currentIndex + 1}/{testimonials.length}
          </div>

          <button
            onClick={goToNext}
            className="text-white/50 hover:text-white transition-colors p-2"
            aria-label="Next"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}
