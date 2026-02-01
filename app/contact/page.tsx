"use client"

import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0f2c59]">
      <Navbar />
      <div className="pt-24 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium mb-4"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
