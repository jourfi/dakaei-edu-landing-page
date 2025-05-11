"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function MathSymbols() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left bracket */}
      <motion.div
        className="absolute left-0 top-1/3 text-5xl md:text-6xl text-gray-400 dark:text-gray-600"
        initial={{ opacity: 0.5, x: 0 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        {"{"}
      </motion.div>

      {/* Right bracket */}
      <motion.div
        className="absolute right-0 top-1/3 text-5xl md:text-6xl text-gray-400 dark:text-gray-600"
        initial={{ opacity: 0.5, x: 0 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        {"}"}
      </motion.div>

      {/* Square root symbol */}
      <motion.div
        className="absolute left-1/4 bottom-1/4 text-4xl md:text-5xl text-gray-400 dark:text-gray-600"
        initial={{ opacity: 0.5, y: 0 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        √
      </motion.div>

      {/* Integral symbol */}
      <motion.div
        className="absolute right-1/4 bottom-1/4 text-4xl md:text-5xl text-gray-400 dark:text-gray-600"
        initial={{ opacity: 0.5, y: 0 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        ∫
      </motion.div>

      {/* Function notation */}
      <motion.div
        className="absolute left-1/3 top-1/4 text-3xl md:text-4xl text-gray-400 dark:text-gray-600"
        initial={{ opacity: 0.5, y: 0 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        f(x)
      </motion.div>

      {/* Summation symbol */}
      <motion.div
        className="absolute right-1/3 top-1/4 text-3xl md:text-4xl text-gray-400 dark:text-gray-600"
        initial={{ opacity: 0.5, y: 0 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        Σ
      </motion.div>
    </div>
  )
}
