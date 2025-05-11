"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  type: "circle" | "square" | "triangle" | "plus" | "division" | "equals" | "pi" | "sigma"
  color: string
  rotation: number
  rotationSpeed: number
}

export function EducationalParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = 300 // Fixed height for the top area
    }

    // Initialize canvas size
    updateCanvasSize()

    // Update canvas size on window resize
    window.addEventListener("resize", updateCanvasSize)

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 40) // Responsive particle count

    const colors = isDark
      ? ["#4B91F7", "#47B39C", "#FFC857", "#EC6B56", "#8675A9"]
      : ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]

    for (let i = 0; i < particleCount; i++) {
      const type = ["circle", "square", "triangle", "plus", "division", "equals", "pi", "sigma"][
        Math.floor(Math.random() * 8)
      ] as Particle["type"]

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        type,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      })
    }

    // Draw function for different particle types
    const drawParticle = (particle: Particle) => {
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.rotation)
      ctx.fillStyle = particle.color
      ctx.globalAlpha = 0.6

      switch (particle.type) {
        case "circle":
          ctx.beginPath()
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2)
          ctx.fill()
          break
        case "square":
          ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)
          break
        case "triangle":
          ctx.beginPath()
          ctx.moveTo(0, -particle.size / 2)
          ctx.lineTo(particle.size / 2, particle.size / 2)
          ctx.lineTo(-particle.size / 2, particle.size / 2)
          ctx.closePath()
          ctx.fill()
          break
        case "plus":
          ctx.lineWidth = 2
          ctx.strokeStyle = particle.color
          ctx.beginPath()
          ctx.moveTo(0, -particle.size / 2)
          ctx.lineTo(0, particle.size / 2)
          ctx.moveTo(-particle.size / 2, 0)
          ctx.lineTo(particle.size / 2, 0)
          ctx.stroke()
          break
        case "division":
          ctx.lineWidth = 2
          ctx.strokeStyle = particle.color
          ctx.beginPath()
          ctx.moveTo(-particle.size / 2, 0)
          ctx.lineTo(particle.size / 2, 0)
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(0, -particle.size / 3, particle.size / 6, 0, Math.PI * 2)
          ctx.fill()
          ctx.beginPath()
          ctx.arc(0, particle.size / 3, particle.size / 6, 0, Math.PI * 2)
          ctx.fill()
          break
        case "equals":
          ctx.lineWidth = 2
          ctx.strokeStyle = particle.color
          ctx.beginPath()
          ctx.moveTo(-particle.size / 2, -particle.size / 4)
          ctx.lineTo(particle.size / 2, -particle.size / 4)
          ctx.moveTo(-particle.size / 2, particle.size / 4)
          ctx.lineTo(particle.size / 2, particle.size / 4)
          ctx.stroke()
          break
        case "pi":
          ctx.font = `${particle.size}px serif`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText("π", 0, 0)
          break
        case "sigma":
          ctx.font = `${particle.size}px serif`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText("Σ", 0, 0)
          break
      }

      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Boundary check with bounce
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Draw the particle
        drawParticle(particle)
      })

      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
      style={{ height: "300px" }}
    />
  )
}
