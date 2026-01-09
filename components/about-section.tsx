"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Centered Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div
              className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100">
                <img
                  src="/professional-finance-team-meeting.jpg"
                  alt="Finance team discussing strategies"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/10 to-transparent" />
              </div>
            </div>

            {/* Text Side */}
            <div
              className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-dark-blue">Blueberry Financial Advisory</span> is a new age financial
                  advisory firm dedicated to catering to the financial needs of corporates and high net worth
                  individuals.
                </p>
                <p className="text-lg leading-relaxed">
                  Our team is organized into two powerful verticals that drive comprehensive financial solutions:
                </p>
              </div>

              {/* Verticals with Hover Effects */}
              <div className="space-y-4">
                <div
                  onMouseEnter={() => setHoveredCard(0)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    hoveredCard === 0
                      ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-600 shadow-lg scale-105"
                      : "bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:border-blue-400"
                  }`}
                >
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Finance Think Tank</h3>
                  <p className="text-muted-foreground">
                    Strategic financial analysis and advisory services tailored to your corporate objectives.
                  </p>
                </div>

                <div
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    hoveredCard === 1
                      ? "bg-gradient-to-br from-blue-100 to-blue-50 border-blue-600 shadow-lg scale-105"
                      : "bg-gradient-to-br from-white to-blue-50 border-blue-200 hover:border-blue-400"
                  }`}
                >
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Execution Think Tank</h3>
                  <p className="text-muted-foreground">
                    Hands-on execution and implementation expertise to bring strategies to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
