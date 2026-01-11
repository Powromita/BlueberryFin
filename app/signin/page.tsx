"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export default function SignIn() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 max-w-md mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 border border-border rounded-xl"
        >
          <h1 className="text-3xl font-bold text-dark-blue mb-6">Sign In</h1>
          <p className="text-muted-foreground">Sign in form placeholder</p>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
