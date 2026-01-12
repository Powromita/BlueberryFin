"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export default function PrivateEquity() {
  const handleBackToHome = () => {
    sessionStorage.setItem("internalNavigation", "true")
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 max-w-4xl mx-auto px-4">
        <Link 
          href="/" 
          onClick={handleBackToHome}
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-bold text-dark-blue mb-6">Private Equity</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Strategic PE investments and comprehensive portfolio management for maximum returns. We identify promising
              opportunities and create value through operational excellence.
            </p>

            <h2 className="text-2xl font-bold text-dark-blue mt-8 mb-4">Investment Focus</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Mid-market buyout opportunities
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Growth capital and expansion funding
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Portfolio company management
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Operational value creation
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Exit strategy and optimization
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
