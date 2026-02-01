"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { InteractiveImageBackground } from "@/components/interactive-image-background"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsSection } from "@/components/clients-section"
import { EndingSection } from "@/components/ending-section"
import { Footer } from "@/components/footer"
import { LoadingAnimation } from "@/components/loading-animation"
import { ProcessTimeline } from "@/components/process-timeline"
import { FeaturesHighlight } from "@/components/features-highlight"

export default function Home() {
  const [showWebsite, setShowWebsite] = useState(false)
  const [shouldShowAnimation, setShouldShowAnimation] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if user has visited the site in this session
    const hasVisited = sessionStorage.getItem("hasVisited") === "true"

    if (hasVisited) {
      // User has been here before in this session - skip animation
      setShowWebsite(true)

      // Ensure scroll is unlocked immediately
      setTimeout(() => {
        document.documentElement.style.overflow = "visible"
        document.body.style.overflow = "visible"
        document.documentElement.style.height = "auto"
        document.body.style.height = "auto"
        document.documentElement.style.scrollBehavior = "smooth"
      }, 50)
    } else {
      // First visit - show animation
      setShouldShowAnimation(true)
      sessionStorage.setItem("hasVisited", "true")

      // Lock scroll during loading
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
      document.documentElement.style.height = "100vh"
      document.body.style.height = "100vh"
    }
  }, [])

  const handleLoadingComplete = () => {
    // Ensure scroll is at top
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    setTimeout(() => {
      setShowWebsite(true)

      // Unlock scroll after content is visible
      setTimeout(() => {
        document.documentElement.style.overflow = "visible"
        document.body.style.overflow = "visible"
        document.documentElement.style.height = "auto"
        document.body.style.height = "auto"
        document.documentElement.style.scrollBehavior = "smooth"

        // Final scroll lock
        window.scrollTo(0, 0)
      }, 100)
    }, 200)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <>
      {shouldShowAnimation && !showWebsite && (
        <LoadingAnimation onComplete={handleLoadingComplete} />
      )}

      {showWebsite && (
        <main className="min-h-screen">
          <Navbar />
          <HeroSection />
          <InteractiveImageBackground />
          <AboutSection />
          <FeaturesHighlight />
          <ProcessTimeline />
          <ServicesSection />
          <ClientsSection />
          <EndingSection />
          <Footer />
        </main>
      )}
    </>
  )
}
