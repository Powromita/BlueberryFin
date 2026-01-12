"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"
import { EndingSection } from "@/components/ending-section"
import { Footer } from "@/components/footer"
import { LoadingAnimation } from "@/components/loading-animation"

export default function Home() {
  const [showWebsite, setShowWebsite] = useState(false)

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

  return (
    <>
      {!showWebsite && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      {showWebsite && (
        <main className="min-h-screen">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ClientsSection />
          <EndingSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  )
}
