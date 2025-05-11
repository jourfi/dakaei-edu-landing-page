"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function MathTooltip() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Show tooltip after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Hide tooltip after some time
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 8000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
      setIsMounted(false)
    }
  }, [])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-1/4 right-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 z-50 max-w-xs"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg">
              💡
            </div>
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Click on the math symbols to see them move around the page!
            </p>
          </div>
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white dark:border-r-gray-800 border-b-8 border-b-transparent"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
