"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export function EndingSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-dark-blue via-blue-900 to-dark-blue text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Ready to Transform Your Financial Future?
            </h2>

            <p className="text-lg text-white/95 mb-6 leading-relaxed font-medium">
              Partner with Blueberry Financial Advisory to access expert guidance tailored to your unique financial goals.
              Our dedicated team is committed to driving your success.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-300 rounded-full flex-shrink-0" />
                <span className="text-white/90 font-medium text-base">
                  Personalized financial strategies
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-300 rounded-full flex-shrink-0" />
                <span className="text-white/90 font-medium text-base">
                  Expert guidance from industry leaders
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-blue-300 rounded-full flex-shrink-0" />
                <span className="text-white/90 font-medium text-base">
                  Proven track record of success
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="flex">
              <Link href="#contact" className="group">
                <button
                  className="px-8 py-4 bg-blue-400 text-dark-blue rounded-lg font-bold
                  transition-all duration-300
                  hover:bg-blue-300
                  hover:shadow-[0_0_25px_rgba(96,165,250,0.6)]
                  hover:scale-105
                  hover:text-dark-blue
                  flex items-center gap-2 justify-center"
                >
                  Start Your Journey
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "2", label: "Expert Verticals", desc: "Finance Think Tank & Execution Think Tank" },
                { value: "6+", label: "Services", desc: "Comprehensive financial solutions" },
                { value: "100%", label: "Commitment", desc: "Dedicated to your success" },
                { value: "24/7", label: "Support", desc: "Always here to help" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-white/15 backdrop-blur-md rounded-xl border-2 border-white/40
                  hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:border-blue-300"
                >
                  <h3 className="text-4xl font-bold text-blue-300 mb-3">
                    {item.value}
                  </h3>
                  <p className="text-white font-semibold text-lg mb-2">
                    {item.label}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
