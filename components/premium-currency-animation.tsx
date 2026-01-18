"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Mesh, Texture, MeshStandardMaterial, PlaneGeometry } from "three"
import * as THREE from "three"
import { useTexture, RoundedBox } from "@react-three/drei"

// High-quality Indian currency note images
const currencyNotes = [
  {
    name: "₹2000",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1c/2000_INR_note.png",
    color: "#C40E25",
  },
  {
    name: "₹500",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/500_INR_note.png",
    color: "#2A9D3F",
  },
  {
    name: "₹100",
    image: "https://upload.wikimedia.org/wikipedia/en/2/21/100_INR_note.png",
    color: "#E50B3E",
  },
  {
    name: "₹50",
    image: "https://upload.wikimedia.org/wikipedia/en/9/90/50_INR_note.png",
    color: "#FF6200",
  },
  {
    name: "₹10",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d5/10_INR_note.png",
    color: "#1F73BE",
  },
]

function FloatingCurrencyNote({ noteData, index }: { noteData: any; index: number }) {
  const meshRef = useRef<Mesh>(null)
  const timeRef = useRef(Math.random() * Math.PI * 2)
  const speedRef = useRef(Math.random() * 0.5 + 0.3)
  const radiusRef = useRef(Math.random() * 10 + 5)
  const heightRef = useRef((Math.random() - 0.5) * 12)
  const rotationSpeedRef = useRef({
    x: Math.random() * 0.03,
    y: Math.random() * 0.04,
    z: Math.random() * 0.02,
  })

  const textureUrl = noteData.image
  let textures: any = {}

  try {
    textures = useTexture({
      map: textureUrl,
      normalMap: textureUrl,
    })
  } catch (e) {
    // Fallback if texture fails to load
  }

  useFrame((state) => {
    if (meshRef.current) {
      timeRef.current += speedRef.current * 0.005

      // Complex orbital motion
      const x = Math.cos(timeRef.current) * radiusRef.current
      const z = Math.sin(timeRef.current) * radiusRef.current
      const y = heightRef.current + Math.sin(state.clock.elapsedTime * 0.4 + index) * 2

      meshRef.current.position.set(x, y, z)

      // Smooth rotation
      meshRef.current.rotation.x += rotationSpeedRef.current.x
      meshRef.current.rotation.y += rotationSpeedRef.current.y
      meshRef.current.rotation.z += rotationSpeedRef.current.z

      // Dynamic scale based on distance for depth effect
      const distanceFromCenter = Math.sqrt(x * x + y * y + z * z)
      const scale = 0.8 + (Math.sin(state.clock.elapsedTime + index) * 0.3 + 0.5) * 0.4
      meshRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[1.8, 1]} />
      {textures && textures.map ? (
        <meshStandardMaterial
          map={textures.map}
          metalness={0.2}
          roughness={0.4}
          emissiveMap={textures.map}
          emissiveIntensity={0.3}
          side={THREE.DoubleSide}
        />
      ) : (
        <meshStandardMaterial
          color={noteData.color}
          metalness={0.3}
          roughness={0.5}
          emissive={noteData.color}
          emissiveIntensity={0.2}
          side={THREE.DoubleSide}
        />
      )}
    </mesh>
  )
}

function PremiumCurrencyScene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.z = 20
    camera.position.y = 3
  }, [camera])

  return (
    <>
      {/* Advanced lighting setup */}
      <ambientLight intensity={0.6} />

      {/* Key light - Blue */}
      <pointLight
        position={[25, 25, 25]}
        intensity={1.2}
        color="#1e40af"
        castShadow
      />

      {/* Fill light - Professional Blue */}
      <pointLight
        position={[-25, -15, 20]}
        intensity={0.9}
        color="#3b82f6"
        castShadow
      />

      {/* Rim light - Slate */}
      <pointLight
        position={[0, 20, -15]}
        intensity={0.8}
        color="#64748b"
      />

      {/* Accent light - Dark Slate */}
      <pointLight
        position={[0, 0, 25]}
        intensity={0.6}
        color="#475569"
      />

      {/* Directional light for shadows */}
      <directionalLight
        position={[10, 15, 10]}
        intensity={0.7}
        castShadow
      />

      {/* Create floating currency notes - more notes for richer scene */}
      {[...Array(40)].map((_, i) => {
        const noteIndex = i % currencyNotes.length
        return (
          <FloatingCurrencyNote
            key={i}
            noteData={currencyNotes[noteIndex]}
            index={i}
          />
        )
      })}

      {/* Particle glow effect - optional floating particles */}
      <FloatingParticles />
    </>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  useEffect(() => {
    if (particlesRef.current) {
      const positions = new Float32Array(300)
      for (let i = 0; i < 300; i += 3) {
        positions[i] = (Math.random() - 0.5) * 60
        positions[i + 1] = (Math.random() - 0.5) * 60
        positions[i + 2] = (Math.random() - 0.5) * 60
      }
      particlesRef.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      )
    }
  }, [])

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0002
      particlesRef.current.rotation.y += 0.0003
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.05}
        color="#0052cc"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.3}
      />
    </points>
  )
}

function SceneLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-[#1e40af] border-t-[#64748b] rounded-full animate-spin" />
        <p className="mt-4 text-white/60 text-sm">Loading Premium Currency Scene...</p>
      </div>
    </div>
  )
}

export function PremiumCurrencyAnimation() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 20], fov: 75 }}
      >
        <PremiumCurrencyScene />
      </Canvas>

      {/* Info overlay */}
      <div className="absolute top-4 left-4 text-white/40 text-xs pointer-events-none">
        <p>Premium Currency Animation • BlueberryFin</p>
      </div>
    </div>
  )
}
