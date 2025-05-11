"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function EducationalIcons() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Paper airplane */}
      <motion.div
        className="absolute top-[30%] left-[25%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-800"
        >
          <path d="M2 21l10-10M12 11l9-9M12 11l-2 8M10 19l-2 2M10 19l2 2M17 6l1 1M17 6l-1 1" />
        </svg>
      </motion.div>

      {/* E=mc² */}
      <motion.div
        className="absolute top-[40%] left-[10%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <svg width="60" height="30" viewBox="0 0 60 30" className="text-gray-700">
          <text x="0" y="20" fontFamily="monospace" fontSize="14" fill="currentColor">
            E=mc²
          </text>
        </svg>
      </motion.div>

      {/* Atom */}
      <motion.div
        className="absolute top-[50%] left-[50%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-800"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20" transform="rotate(45 12 12)" />
          <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20" transform="rotate(-45 12 12)" />
        </svg>
      </motion.div>

      {/* Grade A+ */}
      <motion.div
        className="absolute top-[30%] right-[20%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-gray-800">
          <g transform="rotate(-15, 25, 25)">
            <rect x="10" y="5" width="30" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="20" y="30" fontFamily="monospace" fontSize="16" fill="currentColor">
              A+
            </text>
            <line x1="10" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="1" />
          </g>
        </svg>
      </motion.div>

      {/* Dinosaur */}
      <motion.div
        className="absolute bottom-[20%] right-[15%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-800"
        >
          <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
          <path d="M13 7v6h6l3 3v-6l-3-3h-6z" />
          <path d="M9.5 9v5.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9" />
          <path d="M5 14v1c0 2.21 1.79 4 4 4h7.5" />
          <path d="M16.5 19l-3-3" />
          <path d="M18 22l.5-1.5" />
        </svg>
      </motion.div>

      {/* Code Brackets */}
      <motion.div
        className="absolute top-[60%] left-[20%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-800"
        >
          <path d="M9 22L3 12 9 2M15 2l6 10-6 10" />
        </svg>
      </motion.div>

      {/* Math Pi Symbol */}
      <motion.div
        className="absolute top-[25%] left-[40%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" className="text-gray-700">
          <text x="5" y="18" fontFamily="serif" fontSize="20" fill="currentColor">
            π
          </text>
        </svg>
      </motion.div>

      {/* Graduation Cap */}
      <motion.div
        className="absolute bottom-[30%] left-[30%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-800"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M12 12v9" />
          <path d="M7 9.5v5.5a5 5 0 0 0 10 0v-5.5" />
        </svg>
      </motion.div>
    </div>
  )
}
