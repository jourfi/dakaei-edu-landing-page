"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { PhysicsAnimation } from "@/components/physics-animation"

interface MathElement {
  id: string
  x: number
  y: number
  rotation: number
  scale: number
  symbol: string
  color: string
  fontSize: string
  zIndex: number
}

interface PhysicsEffect {
  id: string
  x: number
  y: number
  isActive: boolean
}

export function InteractiveMathElements() {
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [elements, setElements] = useState<MathElement[]>([])
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [physicsEffects, setPhysicsEffects] = useState<PhysicsEffect[]>([])

  // Initialize math elements immediately with default values
  const initialElements: MathElement[] = [
    // Elements overlapping with "Bring"
    {
      id: "pi",
      x: 300,
      y: 300,
      rotation: -15,
      scale: 1,
      symbol: "π",
      color: "text-blue-500 dark:text-blue-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 30,
    },
    // Elements overlapping with "your"
    {
      id: "sigma",
      x: 400,
      y: 300,
      rotation: 10,
      scale: 1,
      symbol: "Σ",
      color: "text-green-500 dark:text-green-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 31,
    },
    // Elements overlapping with "learning"
    {
      id: "delta",
      x: 600,
      y: 300,
      rotation: 5,
      scale: 1,
      symbol: "Δ",
      color: "text-purple-500 dark:text-purple-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 29,
    },
    // Elements overlapping with "to"
    {
      id: "equals",
      x: 400,
      y: 400,
      rotation: 0,
      scale: 1,
      symbol: "=",
      color: "text-gray-500 dark:text-gray-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 32,
    },
    // Elements overlapping with "life"
    {
      id: "infinity",
      x: 600,
      y: 400,
      rotation: -5,
      scale: 1,
      symbol: "∞",
      color: "text-red-500 dark:text-red-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 28,
    },
    // Additional elements overlapping with the paragraph text
    {
      id: "sqrt",
      x: 300,
      y: 450,
      rotation: -8,
      scale: 1,
      symbol: "√",
      color: "text-cyan-500 dark:text-cyan-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 27,
    },
    {
      id: "integral",
      x: 700,
      y: 450,
      rotation: 0,
      scale: 1,
      symbol: "∫",
      color: "text-yellow-500 dark:text-yellow-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 26,
    },
    {
      id: "lambda",
      x: 400,
      y: 500,
      rotation: -10,
      scale: 1,
      symbol: "λ",
      color: "text-pink-500 dark:text-pink-400",
      fontSize: "text-2xl md:text-3xl",
      zIndex: 33,
    },
    {
      id: "theta",
      x: 600,
      y: 450,
      rotation: 12,
      scale: 1,
      symbol: "θ",
      color: "text-orange-500 dark:text-orange-400",
      fontSize: "text-2xl md:text-3xl",
      zIndex: 25,
    },
    // Simple equation elements overlapping with text
    {
      id: "emc2-e",
      x: 250,
      y: 350,
      rotation: 0,
      scale: 1,
      symbol: "E",
      color: "text-gray-700 dark:text-gray-300",
      fontSize: "text-2xl md:text-3xl",
      zIndex: 24,
    },
    {
      id: "emc2-equals",
      x: 280,
      y: 350,
      rotation: 0,
      scale: 1,
      symbol: "=",
      color: "text-gray-700 dark:text-gray-300",
      fontSize: "text-2xl md:text-3xl",
      zIndex: 23,
    },
    {
      id: "emc2-m",
      x: 310,
      y: 350,
      rotation: 0,
      scale: 1,
      symbol: "m",
      color: "text-gray-700 dark:text-gray-300",
      fontSize: "text-2xl md:text-3xl",
      zIndex: 22,
    },
    {
      id: "emc2-c",
      x: 340,
      y: 350,
      rotation: 0,
      scale: 1,
      symbol: "c",
      color: "text-gray-700 dark:text-gray-300",
      fontSize: "text-2xl md:text-3xl",
      zIndex: 21,
    },
    {
      id: "emc2-2",
      x: 360,
      y: 340,
      rotation: 0,
      scale: 1,
      symbol: "²",
      color: "text-gray-700 dark:text-gray-300",
      fontSize: "text-xl md:text-2xl",
      zIndex: 20,
    },
    // Additional symbols overlapping with text
    {
      id: "triangle",
      x: 700,
      y: 450,
      rotation: 45,
      scale: 1,
      symbol: "△",
      color: "text-gray-500 dark:text-gray-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 19,
    },
    {
      id: "atom",
      x: 750,
      y: 300,
      rotation: 0,
      scale: 1,
      symbol: "⚛",
      color: "text-blue-600 dark:text-blue-300",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 18,
    },
    // More elements for better coverage
    {
      id: "omega",
      x: 350,
      y: 280,
      rotation: -5,
      scale: 1,
      symbol: "Ω",
      color: "text-indigo-500 dark:text-indigo-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 17,
    },
    {
      id: "alpha",
      x: 650,
      y: 280,
      rotation: 8,
      scale: 1,
      symbol: "α",
      color: "text-teal-500 dark:text-teal-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 16,
    },
    {
      id: "beta",
      x: 300,
      y: 420,
      rotation: 15,
      scale: 1,
      symbol: "β",
      color: "text-amber-500 dark:text-amber-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 15,
    },
    {
      id: "gamma",
      x: 650,
      y: 400,
      rotation: -12,
      scale: 1,
      symbol: "γ",
      color: "text-lime-500 dark:text-lime-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 14,
    },
    {
      id: "checkmark",
      x: 250,
      y: 480,
      rotation: 0,
      scale: 1,
      symbol: "✓",
      color: "text-green-600 dark:text-green-400",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 13,
    },
    {
      id: "infinity-horizontal",
      x: 750,
      y: 480,
      rotation: 90,
      scale: 1,
      symbol: "∞",
      color: "text-red-400 dark:text-red-300",
      fontSize: "text-3xl md:text-4xl",
      zIndex: 12,
    },
  ]

  // Set elements immediately
  useEffect(() => {
    setIsMounted(true)
    setElements(initialElements)

    if (containerRef.current) {
      const width = containerRef.current.offsetWidth
      const height = containerRef.current.offsetHeight
      setContainerSize({ width, height })

      // Calculate the center area where the text is
      const centerX = width / 2
      const centerY = height / 3 // Position elements more toward the top
      const textWidth = Math.min(width * 0.8, 800) // Approximate text width
      const textHeight = 150 // Approximate text height

      // Update element positions based on container size
      setElements((prev) =>
        prev.map((element) => {
          // Calculate relative position based on default positions
          const relX = element.x / 800 // assuming 800px as default width
          const relY = element.y / 600 // assuming 600px as default height

          return {
            ...element,
            x: relX * width,
            y: relY * height,
          }
        }),
      )
    }

    // Handle window resize
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        const height = containerRef.current.offsetHeight
        setContainerSize({ width, height })

        // Update element positions proportionally
        setElements((prev) =>
          prev.map((element) => {
            // Calculate relative position based on current positions
            const relX = element.x / containerSize.width
            const relY = element.y / containerSize.height

            return {
              ...element,
              x: relX * width,
              y: relY * height,
            }
          }),
        )
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      setIsMounted(false)
    }
  }, [containerSize.width, containerSize.height])

  // Handle element click
  const handleElementClick = (id: string, x: number, y: number) => {
    // Add physics effect
    const effectId = `effect-${Date.now()}`
    setPhysicsEffects((prev) => [...prev, { id: effectId, x, y, isActive: true }])

    // Move the element
    setElements((prev) =>
      prev.map((element) => {
        if (element.id === id) {
          // Generate random movement within container bounds
          const newX = Math.max(50, Math.min(containerSize.width - 50, element.x + (Math.random() - 0.5) * 200))
          const newY = Math.max(50, Math.min(containerSize.height - 50, element.y + (Math.random() - 0.5) * 200))
          const newRotation = element.rotation + (Math.random() - 0.5) * 360

          return {
            ...element,
            x: newX,
            y: newY,
            rotation: newRotation,
            scale: 1.2, // Briefly scale up
          }
        }
        return element
      }),
    )

    // Reset scale after animation
    setTimeout(() => {
      setElements((prev) =>
        prev.map((element) => {
          if (element.id === id) {
            return { ...element, scale: 1 }
          }
          return element
        }),
      )
    }, 300)
  }

  // Handle physics effect completion
  const handlePhysicsComplete = (id: string) => {
    setPhysicsEffects((prev) => prev.filter((effect) => effect.id !== id))
  }

  if (!isMounted) return null

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute font-bold ${element.fontSize} ${element.color} cursor-pointer pointer-events-auto`}
          initial={{ opacity: 1, x: element.x, y: element.y, rotate: element.rotation, scale: element.scale }}
          animate={{
            opacity: 1,
            x: element.x,
            y: element.y,
            rotate: element.rotation,
            scale: element.scale,
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            mass: 1,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleElementClick(element.id, element.x, element.y)}
          style={{
            x: element.x,
            y: element.y,
            originX: 0.5,
            originY: 0.5,
            zIndex: element.zIndex,
          }}
        >
          {element.symbol}
        </motion.div>
      ))}

      {/* Physics effects */}
      {physicsEffects.map((effect) => (
        <PhysicsAnimation
          key={effect.id}
          x={effect.x}
          y={effect.y}
          isActive={effect.isActive}
          onComplete={() => handlePhysicsComplete(effect.id)}
        />
      ))}
    </div>
  )
}
