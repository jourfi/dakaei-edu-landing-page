"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface MathEquationProps {
  equation: string
  explanation: string
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  delay?: number
}

export function MathEquation({ equation, explanation, position, delay = 0 }: MathEquationProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <motion.div
      className="absolute z-10 cursor-help"
      style={position}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
        duration: 0.5,
        y: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="font-tech text-gray-700 dark:text-gray-300 text-lg md:text-xl transform rotate-[-3deg]">
        {equation}
      </div>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white dark:bg-gray-800 p-2 rounded shadow-lg text-xs text-gray-800 dark:text-gray-200 pointer-events-none">
          {explanation}
          <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 bg-white dark:bg-gray-800"></div>
        </div>
      )}
    </motion.div>
  )
}
