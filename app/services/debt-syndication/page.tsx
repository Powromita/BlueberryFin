"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export default function DebtSyndication() {
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
          <h1 className="text-5xl font-bold text-dark-blue mb-6">Debt Syndication</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Optimize your capital structure through strategic debt syndication solutions. We connect you with the
              right lenders and structure deals that align with your business objectives.
            </p>

            <h2 className="text-2xl font-bold text-dark-blue mt-8 mb-4">Syndication Expertise</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Bank and institutional lender networks
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Debt structure optimization
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Covenant and documentation review
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Pricing negotiation and management
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Refinancing and extension services
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
