"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText, Video, BookOpen, PenTool, BarChart3, Zap } from "lucide-react"

export function FloatingElements() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left elements */}
      <motion.div
        className="absolute top-20 left-10 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: [0.7, 0.9, 0.7],
          x: [-50, -30, -50],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <FileText className="w-6 h-6 text-blue-500" />
      </motion.div>

      {/* Top right elements */}
      <motion.div
        className="absolute top-40 right-20 w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
          x: [50, 30, 50],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Video className="w-7 h-7 text-cyan-500" />
      </motion.div>

      {/* Bottom left elements */}
      <motion.div
        className="absolute bottom-40 left-20 w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
          y: [50, 30, 50],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <BookOpen className="w-5 h-5 text-blue-600" />
      </motion.div>

      {/* Bottom right elements */}
      <motion.div
        className="absolute bottom-20 right-10 w-12 h-12 bg-cyan-200 rounded-lg flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
          y: [50, 30, 50],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 17,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <PenTool className="w-6 h-6 text-cyan-600" />
      </motion.div>

      {/* Middle left */}
      <motion.div
        className="absolute top-1/2 left-40 w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [0.8, 1, 0.8],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <BarChart3 className="w-4 h-4 text-blue-700" />
      </motion.div>

      {/* Middle right */}
      <motion.div
        className="absolute top-1/3 right-40 w-8 h-8 bg-cyan-300 rounded-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [0.8, 1, 0.8],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Zap className="w-4 h-4 text-cyan-700" />
      </motion.div>

      {/* Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${
            i % 3 === 0 ? "bg-blue-400" : i % 3 === 1 ? "bg-cyan-400" : "bg-blue-300"
          }`}
          initial={{
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, -100, -200],
            x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 20,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
