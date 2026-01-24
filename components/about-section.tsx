"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { CogIcon, CheckCircleIcon, ChartBarIcon, LightBulbIcon } from "@heroicons/react/24/outline"

const features = [
  {
    title: "Strategic Vision",
    description: "We don't just look at numbers; we look at the future. Our strategic planning aligns your financial goals with long-term market trends.",
    color: "bg-blue-500",
    icon: LightBulbIcon
  },
  {
    title: "Data-Driven Insights",
    description: "Leveraging advanced analytics to uncover hidden opportunities and mitigate associated risks in your portfolio.",
    color: "bg-purple-500",
    icon: ChartBarIcon
  },
  {
    title: "Execution Excellence",
    description: "A strategy is only as good as its execution. Our team ensures seamless implementation of complex financial frameworks.",
    color: "bg-cyan-500",
    icon: CheckCircleIcon
  },
  {
    title: "Continuous Optimization",
    description: "The financial landscape changes rapidly. We continuously monitor and optimize your strategies to stay ahead.",
    color: "bg-indigo-500",
    icon: CogIcon
  }
]

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeFeature, setActiveFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  // Auto-advance logic
  useEffect(() => {
    if (!inView) return

    const duration = 5000 // 5 seconds per slide
    const intervalTime = 100 // Update progress every 100ms
    const steps = duration / intervalTime
    const increment = 100 / steps

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveFeature((current) => (current + 1) % features.length)
          return 0
        }
        return prev + increment
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [inView]) // Removed activeFeature dependency

  // Reset progress when manually changing feature
  const handleFeatureClick = (index: number) => {
    setActiveFeature(index)
    setProgress(0)
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#001f3f]/5 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0052cc]/5 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001f3f] mb-8 leading-tight tracking-tight">
              What We do
            </h2>
            <div className="flex flex-col gap-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <span className="font-bold text-[#001f3f]">Blueberry Financial Advisory</span> is not just a firm; we are your strategic partners in growth. In an era of volatile markets, we bring stability, clarity, and foresight to your financial decisions.
              </p>
              <p>
                Catering exclusively to corporates and high-net-worth individuals, we combine traditional wisdom with modern financial engineering to deliver bespoke solutions that stand the test of time.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Feature Showcase (Reference Implementation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-2 sm:p-4 md:p-8"
          >
            <div className="flex flex-col gap-8">
              {/* Feature List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    onClick={() => handleFeatureClick(index)}
                    className={`
                        relative pl-6 pr-6 py-4 rounded-xl cursor-pointer transition-all duration-300
                        ${activeFeature === index ? "bg-white shadow-md" : "hover:bg-white/50"}
                      `}
                  >
                    {/* Interactive Progress Bar for Active Item */}
                    {activeFeature === index && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gray-200 rounded-l-xl overflow-hidden">
                        <motion.div
                          className="w-full bg-[#0052cc]"
                          style={{ height: `${progress}%` }}
                          transition={{ ease: "linear", duration: 0 }}
                        />
                      </div>
                    )}

                    {/* Vertical Line for Inactive Items */}
                    {activeFeature !== index && (
                      <div className="absolute left-0 top-4 bottom-4 w-1.5 bg-gray-200 rounded-full" />
                    )}

                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-2 rounded-lg ${activeFeature === index ? "bg-blue-100 text-[#0052cc]" : "bg-gray-100 text-gray-500"}`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className={`text-lg font-bold ${activeFeature === index ? "text-[#001f3f]" : "text-gray-500"}`}>
                        {feature.title}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {activeFeature === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-gray-600 ml-14 text-sm leading-relaxed overflow-hidden"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}