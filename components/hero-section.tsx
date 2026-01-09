"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function HeroSection() {
  const [showWebsite, setShowWebsite] = useState(false)

  useEffect(() => {
    // Ensure scroll is at 0,0 at component level too
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Show video for 3 seconds, then transition to website
    const timer = setTimeout(() => {
      setShowWebsite(true)
      // Unlock scroll when website is shown
      document.documentElement.style.overflow = "visible"
      document.body.style.overflow = "visible"
      document.documentElement.style.height = "auto"
      document.body.style.height = "auto"
      document.documentElement.style.scrollBehavior = "smooth"
    }, 3000)
    
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {/* Video Intro - Blueberry */}
      {!showWebsite && (
        <section className="fixed inset-0 z-50 bg-gradient-to-br from-dark-blue via-blue-900 to-blue-950 flex items-center justify-center overflow-hidden">
          <div className="animate-fade-in text-center">
            <div 
              className="w-28 h-28 rounded-3xl bg-blue-500 flex items-center justify-center mx-auto mb-12 animate-pulse shadow-2xl shadow-blue-500/50"
            >
              <span className="text-white font-bold text-6xl">B</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-pulse-subtle tracking-tight">Blueberry</h1>
            <p className="text-white text-lg md:text-xl font-medium">Financial Advisory for the Future</p>
          </div>
        </section>
      )}

      {/* Hero Section */}
      <section
        className={`relative min-h-screen pt-20 transition-opacity duration-1000 ${
          showWebsite ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        {/* Background Gradient Accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-blue-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-100/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center">
          {/* Logo Animation - Slides down from top */}
          <div className="mb-8 animate-slide-down group cursor-pointer">
            <div className="w-20 h-20 rounded-xl bg-blue-600 flex items-center justify-center mx-auto shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/50 group-hover:scale-110 group-hover:-translate-y-2">
              <span className="text-white font-bold text-4xl">B</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up transition-colors duration-300 hover:text-gray-100">
            New Age Financial Advisory
            <br />
            <span className="text-white hover:text-gray-100 transition-colors duration-300">
              for Corporates & HNIs
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 animate-slide-up transition-all duration-300 hover:text-white hover:scale-105">
            Versatile expertise backed by diversified and long-standing experience from our core team members. Two
            dedicated verticals driving your financial success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Link href="#contact" className="group w-full sm:w-auto">
              <button className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50 hover:scale-105 active:scale-95">
                Schedule Consultation
              </button>
            </Link>
            <Link href="#services" className="group w-full sm:w-auto">
              <button className="w-full px-8 py-3 border-2 border-white text-white rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-blue-600 hover:scale-105 active:scale-95">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
