"use client"

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"
import { useRef, useMemo } from "react"
import {
  SparklesIcon,
  CheckCircleIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"

const features = [
  {
    icon: SparklesIcon,
    title: "Premium Analytics",
    description: "Real-time insights and comprehensive financial analytics to make informed decisions",
    color: "from-[#0f2c59] to-[#2563eb]",
    number: "01",
  },
  {
    icon: CheckCircleIcon,
    title: "Verified Expertise",
    description: "Industry-leading professionals with proven track records in financial advisory",
    color: "from-[#2563eb] to-[#60a5fa]",
    number: "02",
  },
  {
    icon: LightBulbIcon,
    title: "Strategic Planning",
    description: "Customized strategies tailored to your unique business goals and challenges",
    color: "from-[#0f2c59] to-[#003366]",
    number: "03",
  },
  {
    icon: UserGroupIcon,
    title: "Dedicated Support",
    description: "Personal relationship managers available 24/7 for your financial needs",
    color: "from-[#2563eb] to-[#003366]",
    number: "04",
  },
]

export function FeaturesHighlight() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Generate constellation nodes
  const constellationNodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
    }))
  }, [])

  // Animated background gradient based on scroll
  const gradientColor1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#0f2c59", "#0052cc", "#003366"]
  )

  const gradientColor2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#2563eb", "#0f2c59", "#2563eb"]
  )

  const backgroundImage = useMotionTemplate`linear-gradient(to bottom right, ${gradientColor1}, ${gradientColor2})`
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.05, 0.2])

  return (
    <section ref={containerRef} className="relative bg-[#f5f0eb]">
      {/* Sticky Title - Always Visible with Progress */}
      <div className="sticky top-0 z-20 bg-[#f5f0eb]/95 backdrop-blur-sm py-8 border-b border-[#0f2c59]/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c59] mb-2">
              Why Choose BlueberryFin?
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Experience world-class financial advisory with cutting-edge technology
            </p>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0f2c59] to-[#2563eb]"
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
            />
          </div>
        </div>
      </div>

      {/* Sticky container that holds the feature display */}
      <div className="sticky top-32 h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage,
            opacity: bgOpacity
          }}
        />

        {/* Constellation Network */}




        {/* Feature display area */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon

            // Calculate opacity and scale based on scroll position
            const start = idx / features.length
            const end = (idx + 1) / features.length

            // Modified opacity: first feature starts at 1, last feature ends at 1
            const opacity = useTransform(
              scrollYProgress,
              idx === 0
                ? [0, 0.05, end - 0.05, end]
                : idx === features.length - 1
                  ? [start, start + 0.05, end - 0.05, 1]
                  : [start, start + 0.05, end - 0.05, end],
              idx === 0
                ? [1, 1, 1, 0]
                : idx === features.length - 1
                  ? [0, 1, 1, 1]
                  : [0, 1, 1, 0]
            )

            const scale = useTransform(
              scrollYProgress,
              [start, start + 0.05, end - 0.05, end],
              [0.9, 1, 1, 0.9]
            )

            const x = useTransform(
              scrollYProgress,
              [start, start + 0.05, end - 0.05, end],
              [100, 0, 0, -100]
            )

            return (
              <motion.div
                key={idx}
                style={{ opacity, scale, x }}
                className="absolute inset-0 flex items-center justify-center px-4"
              >
                {/* Horizontal Layout: Icon Left, Text Right - More Centered */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-4xl w-full">

                  {/* LEFT: Icon with number background */}
                  <div className="relative flex-shrink-0">
                    {/* Large background number */}
                    <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 text-[#0f2c59]/10 text-[80px] sm:text-[100px] md:text-[160px] font-bold select-none -z-10">
                      {feature.number}
                    </div>

                    {/* Icon - Smaller */}
                    <motion.div
                      className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-[#0f2c59] flex items-center justify-center text-white shadow-2xl relative z-10`}
                    >
                      <IconComponent className="w-12 h-12 md:w-14 md:h-14" />
                    </motion.div>
                  </div>

                  {/* RIGHT: Text Content - Smaller and more centered */}
                  <div className="flex-1 text-center md:text-left max-w-lg bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    {/* Decorative gradient blob */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />

                    {/* Feature number badge */}
                    <div className="inline-block px-3 py-1 bg-[#0f2c59] rounded-full text-white text-xs font-bold mb-4 tracking-wider uppercase">
                      Feature {feature.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0f2c59] mb-3 group-hover:text-[#2563eb] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Progress indicator - Desktop only */}
                    <div className="hidden md:flex gap-2">
                      {features.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-12 bg-[#0f2c59]" : "w-6 bg-gray-300/60"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress indicator - Mobile (centered at bottom) */}
                <div className="md:hidden absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                  {features.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${i === idx ? "w-10 bg-[#0f2c59]" : "w-6 bg-gray-300"
                        }`}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Reduced spacer divs - Less scroll distance between features */}
      {features.map((_, idx) => (
        <div key={idx} className="h-[60vh]" />
      ))}
    </section>
  )
}
