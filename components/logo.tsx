"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  animate?: boolean
}

export function Logo({ className = "", size = "md", animate = true }: LogoProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  }

  const logoContent = (
    <Image
      src="/untitled.png"
      alt="BlueberryFin Capital Logo"
      width={size === "sm" ? 48 : size === "md" ? 80 : size === "lg" ? 128 : 192}
      height={size === "sm" ? 48 : size === "md" ? 80 : size === "lg" ? 128 : 192}
      className={`${sizeClasses[size]} ${className} object-contain`}
      priority
      onError={(e) => {
        // Fallback to placeholder if untitled.png doesn't exist
        const target = e.target as HTMLImageElement
        if (target.src && !target.src.includes('placeholder')) {
          target.src = '/placeholder-logo.png'
        }
      }}
    />
  )

  if (!animate) {
    return logoContent
  }

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="inline-block"
    >
      {logoContent}
    </motion.div>
  )
}

