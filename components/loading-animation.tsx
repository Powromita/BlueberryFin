"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Particle {
  left: number
  top: number
  width: number
  height: number
  background: string
  boxShadow: string
  delay: number
  duration: number
}

interface GeometricShape {
  left: number
  top: number
  width: number
  height: number
  borderRadius: string
  delay: number
  duration: number
}

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [letters] = useState(["B", "l", "u", "e", "b", "e", "r", "r", "y"])

  // Generate particles only on client side to avoid hydration mismatch
  const particles = useMemo<Particle[]>(() => {
    const particleCount = 30
    const result: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      const random1 = Math.sin(i * 0.1) * 100 // Deterministic "random"
      const random2 = Math.cos(i * 0.15) * 100
      const random3 = Math.sin(i * 0.2)
      
      result.push({
        left: (random1 % 100 + 100) % 100,
        top: (random2 % 100 + 100) % 100,
        width: ((random3 * 4 + 2) % 6) + 2,
        height: ((random3 * 4 + 2) % 6) + 2,
        background: `rgba(96, 165, 250, ${((random3 * 0.5 + 0.3) % 0.8) + 0.3})`,
        boxShadow: `0 0 ${((random3 * 10 + 5) % 15) + 5}px rgba(96, 165, 250, 0.8)`,
        delay: (random3 % 3) + 0.5,
        duration: 3 + (random3 % 3) + 2,
      })
    }
    return result
  }, [])

  // Generate geometric shapes only on client side
  const geometricShapes = useMemo<GeometricShape[]>(() => {
    const shapeCount = 8
    const result: GeometricShape[] = []
    for (let i = 0; i < shapeCount; i++) {
      const random1 = Math.sin(i * 0.3) * 100
      const random2 = Math.cos(i * 0.25) * 100
      const random3 = Math.sin(i * 0.4)
      
      result.push({
        left: (random1 % 100 + 100) % 100,
        top: (random2 % 100 + 100) % 100,
        width: 20 + ((random3 * 30) % 30),
        height: 20 + ((random3 * 30) % 30),
        borderRadius: i % 2 === 0 ? "50%" : "20%",
        delay: (random3 % 2) + 0.5,
        duration: 5 + (random3 % 3) + 3,
      })
    }
    return result
  }, [])

  useEffect(() => {
    // Mark as mounted to avoid hydration mismatch
    setIsMounted(true)

    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            onComplete()
          }, 800)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Show content after a brief delay
    setTimeout(() => setShowContent(true), 300)

    return () => clearInterval(progressInterval)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0a1929] via-[#1a365d] to-[#0f2027] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background gradient - multiple layers */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #1e40af 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, #60a5fa 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #1e40af 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary animated gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 60%)",
              "radial-gradient(circle at 20% 80%, #1e40af 0%, transparent 60%)",
              "radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}>
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 0%', '50px 50px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Logo container with 3D effect */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.5,
            }}
          >
            {/* Multiple glowing rings for depth */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              style={{ width: '140px', height: '140px', left: '-6px', top: '-6px' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-blue-300/20"
              style={{ width: '160px', height: '160px', left: '-12px', top: '-12px' }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Main logo with 3D perspective effect */}
            <motion.div
              className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 flex items-center justify-center shadow-2xl relative overflow-hidden cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              whileHover={{ scale: 1.1, rotateY: 10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              animate={{
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 30px rgba(96, 165, 250, 0.3)",
                  "0 0 50px rgba(59, 130, 246, 0.9), inset 0 0 40px rgba(96, 165, 250, 0.5)",
                  "0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 30px rgba(96, 165, 250, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                style={{
                  transform: "skewX(-20deg)",
                }}
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Letter B */}
              <motion.span
                className="text-white font-bold text-6xl relative z-10"
                style={{
                  textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(59, 130, 246, 0.6)",
                }}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(59, 130, 246, 0.6)",
                    "0 0 30px rgba(255,255,255,1), 0 0 60px rgba(59, 130, 246, 0.9)",
                    "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(59, 130, 246, 0.6)",
                  ],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                B
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Animated text - letter by letter */}
          {showContent && (
            <motion.div className="mb-6 flex items-center justify-center gap-1 flex-wrap">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-5xl md:text-7xl font-bold text-white inline-block"
                  style={{
                    textShadow: "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(96, 165, 250, 0.4)",
                  }}
                  initial={{ 
                    opacity: 0, 
                    y: 50, 
                    rotateX: -90,
                    scale: 0.5
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    scale: 1
                  }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.2,
                    y: -10,
                    rotateZ: 5,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Subtitle */}
          <motion.p
            className="text-white/80 text-lg md:text-xl font-medium mb-12 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            Financial Advisory for the Future
          </motion.p>

          {/* Enhanced Progress bar */}
          <motion.div
            className="w-64 md:w-80 h-2 bg-white/10 rounded-full overflow-hidden mb-4 backdrop-blur-sm border border-white/20"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              style={{
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)",
              }}
            >
              {/* Shimmer effect on progress */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                style={{
                  transform: "skewX(-20deg)",
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Glow pulse */}
              <motion.div
                className="absolute inset-0 bg-blue-400/50"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Progress percentage with animation */}
          <motion.span
            className="text-white/70 text-sm font-medium tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {progress}%
          </motion.span>

          {/* Floating particles (CSS-based) - Only render on client */}
          {isMounted &&
            particles.map((particle, i) => {
              const animY = -50 - (i % 10) * 3
              const animX = ((i % 7) - 3) * 3
              
              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    width: `${particle.width}px`,
                    height: `${particle.height}px`,
                    background: particle.background,
                    boxShadow: particle.boxShadow,
                  }}
                  animate={{
                    y: [0, animY, 0],
                    x: [0, animX, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeInOut",
                  }}
                />
              )
            })}

          {/* Geometric shapes floating - Only render on client */}
          {isMounted &&
            geometricShapes.map((shape, i) => (
              <motion.div
                key={`shape-${i}`}
                className="absolute border border-blue-400/20"
                style={{
                  left: `${shape.left}%`,
                  top: `${shape.top}%`,
                  width: `${shape.width}px`,
                  height: `${shape.height}px`,
                  borderRadius: shape.borderRadius,
                }}
                animate={{
                  rotate: [0, 360],
                  y: [0, -30, 0],
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: shape.duration,
                  repeat: Infinity,
                  delay: shape.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
