"use client"

import { motion } from "framer-motion"

export function FinancialBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated chart lines */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#001f3f"/>
            <stop offset="100%" stopColor="#1e40af"/>
          </linearGradient>
        </defs>
        {/* Animated line chart */}
        <motion.polyline
          points="0,200 50,150 100,170 150,120 200,100 250,130 300,80 350,90 400,60 450,70 500,50"
          stroke="url(#chartGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating coins/currency icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`coin-${i}`}
          className="absolute w-12 h-12 rounded-full border-2 border-[#1e40af]/20 flex items-center justify-center text-[#1e40af]/30 font-bold text-sm"
          initial={{ 
            opacity: 0.3,
            x: Math.random() * 500,
            y: Math.random() * 500,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          ₹
        </motion.div>
      ))}

      {/* Animated pie chart segments */}
      <svg 
        className="absolute top-1/4 right-1/4 w-32 h-32 opacity-10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#1e40af"
          strokeWidth="8"
          strokeDasharray="251.2"
          strokeDashoffset="62.8"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#001f3f"
          strokeWidth="6"
          strokeDasharray="188.4"
          strokeDashoffset="47.1"
          initial={{ rotate: 360 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Grid pattern overlay */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="2" fill="#1e40af"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)"/>
      </svg>

      {/* Particle effects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-[#1e40af]/50"
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -100, -200],
            x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  )
}
