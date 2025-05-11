"use client"
import { motion } from "framer-motion"

interface PhysicsAnimationProps {
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  delay?: number
}

export function PendulumAnimation({ position, delay = 0 }: PhysicsAnimationProps) {
  return (
    <motion.div
      className="absolute z-10"
      style={position}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ delay }}
    >
      <div className="relative w-20 h-24">
        <div className="absolute top-0 left-1/2 w-px h-16 bg-gray-600 dark:bg-gray-400 origin-top">
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-700 dark:bg-gray-300"
            animate={{ rotate: [-30, 30, -30] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export function OrbitalAnimation({ position, delay = 0 }: PhysicsAnimationProps) {
  return (
    <motion.div
      className="absolute z-10"
      style={position}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ delay }}
    >
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></div>
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 dark:bg-red-400"></div>
          </motion.div>
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-green-500 dark:bg-green-400"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
