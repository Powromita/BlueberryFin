"use client"

import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion"
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

  // Add smoothing to the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Generate constellation nodes
  const constellationNodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      // Random velocities
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2
    }))
  }, [])

  // Animated background gradient based on scroll - Use smoothProgress
  const gradientColor1 = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["#0f2c59", "#0052cc", "#003366"]
  )

  const gradientColor2 = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["#2563eb", "#0f2c59", "#2563eb"]
  )

  // const backgroundImage = useMotionTemplate`linear-gradient(135deg, ${gradientColor1} 0%, ${gradientColor2} 100%)`

  return (
    <section ref={containerRef} className="relative bg-[#f5f0eb]">
      {/* Sticky Title - Always Visible with Progress */}
      <div className="sticky top-0 z-20 bg-[#f5f0eb]/95 backdrop-blur-sm py-6 sm:py-8 border-b border-[#0f2c59]/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-3 sm:mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f2c59] mb-2">
              Why Choose BlueberryFin?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Experience world-class financial advisory with cutting-edge technology
            </p>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#0f2c59] to-[#2563eb]"
              style={{ scaleX: smoothProgress, transformOrigin: 'left' }}
            />
          </div>
        </div>
      </div>

      {/* Sticky container that holds the feature display */}
      <div className="sticky top-32 h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          // style={{
          //   background: backgroundImage
          // }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }} />
        </motion.div>

        {/* Constellation Network */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <defs>
            <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f2c59" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Connecting lines between nodes */}
          {constellationNodes.map((node1, i) => {
            const node2 = constellationNodes[(i + 1) % constellationNodes.length]
            const nextNode = constellationNodes[(i + 2) % constellationNodes.length]
            
            return (
              <g key={`lines-${i}`}>
                <motion.line
                  x1={`${node1.x}%`}
                  y1={`${node1.y}%`}
                  x2={`${node2.x}%`}
                  y2={`${node2.y}%`}
                  stroke="url(#constellationGradient)"
                  strokeWidth="0.5"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 4 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.line
                  x1={`${node1.x}%`}
                  y1={`${node1.y}%`}
                  x2={`${nextNode.x}%`}
                  y2={`${nextNode.y}%`}
                  stroke="url(#constellationGradient)"
                  strokeWidth="0.3"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 5 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </g>
            )
          })}
          
          {/* Constellation nodes/dots */}
          {constellationNodes.map((node) => (
            <motion.circle
              key={`node-${node.id}`}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="#2563eb"
              animate={{
                r: [node.size, node.size * 1.5, node.size],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + node.id * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* Enhanced background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0f2c59]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #0f2c59 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        {/* Feature display area */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            
            // Calculate opacity and scale based on scroll position - Use smoothProgress
            const start = idx / features.length
            const end = (idx + 1) / features.length
            
            // Modified opacity: first feature starts at 1, last feature ends at 1
            const opacity = useTransform(
              smoothProgress,
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
              smoothProgress,
              [start, start + 0.05, end - 0.05, end],
              [0.9, 1, 1, 0.9]
            )

            const x = useTransform(
              smoothProgress,
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
                    <div className="absolute -top-6 -left-6 text-[#0f2c59]/10 text-[140px] md:text-[160px] font-bold select-none -z-10">
                      {feature.number}
                    </div>
                    
                    {/* Icon - Smaller */}
                    <motion.div
                      className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-2xl relative z-10`}
                    >
                      <IconComponent className="w-12 h-12 md:w-14 md:h-14" />
                    </motion.div>
                  </div>

                  {/* RIGHT: Text Content - Smaller and more centered */}
                  <div className="flex-1 text-center md:text-left max-w-lg">
                    {/* Feature number badge */}
                    <div className="inline-block px-3 py-1 bg-[#0f2c59]/10 rounded-full text-[#0f2c59] text-xs font-bold mb-3">
                      Feature {feature.number}
                    </div>
                    
                    {/* Title - Smaller */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f2c59] mb-2 sm:mb-3">
                      {feature.title}
                    </h3>

                    {/* Description - Smaller */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Progress indicator - Desktop only */}
                    <div className="hidden md:flex gap-2 mt-6">
                      {features.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            i === idx ? "w-10 bg-[#0f2c59]" : "w-6 bg-gray-300"
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
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === idx ? "w-10 bg-[#0f2c59]" : "w-6 bg-gray-300"
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
