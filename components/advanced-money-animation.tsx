"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Mesh, Group } from "three"
import * as THREE from "three"
import { useTexture } from "@react-three/drei"

// Indian currency note image URLs
const noteTextures = [
  "https://upload.wikimedia.org/wikipedia/en/2/21/100_INR_note.png",
  "https://upload.wikimedia.org/wikipedia/en/8/8e/500_INR_note.png",
  "https://upload.wikimedia.org/wikipedia/en/1/1c/2000_INR_note.png",
  "https://upload.wikimedia.org/wikipedia/en/9/90/50_INR_note.png",
  "https://upload.wikimedia.org/wikipedia/en/d/d5/10_INR_note.png",
]

function FloatingCurrencyNote({ index }: { index: number }) {
  const meshRef = useRef<Mesh>(null)
  const angle = useRef(Math.random() * Math.PI * 2)
  const speed = useRef(Math.random() * 0.5 + 0.3)
  const radius = useRef(Math.random() * 8 + 3)
  const height = useRef((Math.random() - 0.5) * 8)

  let texture
  try {
    texture = useTexture(noteTextures[index % noteTextures.length])
  } catch (e) {
    texture = null
  }

  const colors = ["#E50B3E", "#1F73BE", "#2A9D3F", "#FF6200", "#C40E25"]

  useFrame((state) => {
    if (meshRef.current) {
      angle.current += speed.current * 0.01
      const x = Math.cos(angle.current) * radius.current
      const z = Math.sin(angle.current) * radius.current
      const y = height.current + Math.sin(state.clock.elapsedTime * 0.5) * 0.5

      meshRef.current.position.set(x, y, z)
      meshRef.current.rotation.x += 0.02
      meshRef.current.rotation.y += 0.03
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.6, 0.35, 0.015]} />
      {texture ? (
        <meshStandardMaterial
          map={texture}
          metalness={0.1}
          roughness={0.3}
        />
      ) : (
        <meshStandardMaterial
          color={colors[index % colors.length]}
          metalness={0.3}
          roughness={0.4}
          emissive={colors[index % colors.length]}
          emissiveIntensity={0.4}
        />
      )}
    </mesh>
  )
}

function AdvancedMoneyScene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.z = 15
    camera.position.y = 2
  }, [camera])

  return (
    <>
      {/* Multiple light sources for dramatic effect */}
      <ambientLight intensity={0.5} />
      <pointLight position={[15, 15, 15]} intensity={1} color="#1e40af" />
      <pointLight position={[-15, -15, 15]} intensity={0.8} color="#001f3f" />
      <pointLight position={[0, 10, 0]} intensity={0.6} color="#00ff88" />
      <pointLight position={[0, 0, 20]} intensity={0.4} />

      {/* Floating currency notes in orbital patterns */}
      {[...Array(50)].map((_, i) => (
        <FloatingCurrencyNote key={i} index={i} />
      ))}
    </>
  )
}

export function AdvancedMoneyAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Canvas>
        <AdvancedMoneyScene />
      </Canvas>
    </div>
  )
}
