"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import type React from "react"

interface PhysicsAnimationProps {
  x: number
  y: number
  isActive: boolean
  onComplete: () => void
}

export function PhysicsAnimation({ x, y, isActive, onComplete }: PhysicsAnimationProps) {
  const controls = useAnimation()
  const particlesRef = useRef<React.JSX.Element[]>([])

  useEffect(() => {
    if (isActive) {
      // Create explosion effect
      controls
        .start({
          opacity: [1, 0],
          scale: [0, 1.5],
          transition: { duration: 0.8 },
        })
        .then(onComplete)

      // Generate particles
      particlesRef.current = Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const distance = Math.random() * 100 + 50
        const size = Math.random() * 10 + 5
        const color = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-red-500", "bg-yellow-500", "bg-pink-500"][
          Math.floor(Math.random() * 6)
        ]

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${color}`}
            style={{
              width: size,
              height: size,
              x: 0,
              y: 0,
            }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              opacity: [1, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        )
      })
    }
  }, [isActive, controls, onComplete])

  if (!isActive) return null

  return (
    <motion.div className="absolute pointer-events-none z-50" style={{ x, y }} animate={controls}>
      <div className="relative">{particlesRef.current}</div>
    </motion.div>
  )
}
