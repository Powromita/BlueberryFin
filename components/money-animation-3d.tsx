"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Mesh } from "three"
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

function CurrencyNoteParticle({ index }: { index: number }) {
  const meshRef = useRef<Mesh>(null)
  const positionRef = useRef({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0 })

  let texture
  try {
    texture = useTexture(noteTextures[index % noteTextures.length])
  } catch (e) {
    texture = null
  }

  const colors = ["#E50B3E", "#1F73BE", "#2A9D3F", "#FF6200", "#C40E25"]

  useEffect(() => {
    if (meshRef.current) {
      positionRef.current.x = (Math.random() - 0.5) * 20
      positionRef.current.y = (Math.random() - 0.5) * 20
      positionRef.current.z = (Math.random() - 0.5) * 20
      positionRef.current.vx = (Math.random() - 0.5) * 0.2
      positionRef.current.vy = (Math.random() - 0.5) * 0.2
      positionRef.current.vz = (Math.random() - 0.5) * 0.2
    }
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      // Update position
      positionRef.current.x += positionRef.current.vx
      positionRef.current.y += positionRef.current.vy
      positionRef.current.z += positionRef.current.vz

      // Gravity effect
      positionRef.current.vy -= 0.01

      // Bounce off boundaries
      if (Math.abs(positionRef.current.x) > 10) positionRef.current.vx *= -1
      if (positionRef.current.y < -10) {
        positionRef.current.y = 10
        positionRef.current.vy *= -0.8
      }
      if (Math.abs(positionRef.current.z) > 10) positionRef.current.vz *= -1

      meshRef.current.position.set(
        positionRef.current.x,
        positionRef.current.y,
        positionRef.current.z
      )

      // Rotation
      meshRef.current.rotation.x += 0.02
      meshRef.current.rotation.y += 0.03
      meshRef.current.rotation.z += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.6, 0.35, 0.02]} />
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

function MoneyScene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.z = 15
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#1e40af" />
      <pointLight position={[-10, -10, 10]} intensity={0.6} color="#001f3f" />
      <pointLight position={[0, 0, 10]} intensity={0.4} color="#00ff88" />

      {/* Create multiple currency note particles */}
      {[...Array(30)].map((_, i) => (
        <CurrencyNoteParticle key={i} index={i} />
      ))}
    </>
  )
}

export function MoneyAnimation() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <MoneyScene />
      </Canvas>
    </div>
  )
}
