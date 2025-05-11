"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function LightBeamEffect() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className="absolute top-0 left-0 w-full h-60 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-40 md:h-60 bg-gradient-to-b from-blue-400 to-transparent opacity-30 dark:opacity-20"
        animate={{
          height: ["40%", "60%", "40%"],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{
          filter: "blur(8px)",
          transform: "rotate(15deg)",
        }}
      />

      <motion.div
        className="absolute top-0 right-1/3 w-1 h-40 md:h-60 bg-gradient-to-b from-green-400 to-transparent opacity-30 dark:opacity-20"
        animate={{
          height: ["50%", "70%", "50%"],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          filter: "blur(8px)",
          transform: "rotate(-10deg)",
        }}
      />

      <motion.div
        className="absolute top-0 right-1/4 w-1 h-40 md:h-60 bg-gradient-to-b from-purple-400 to-transparent opacity-30 dark:opacity-20"
        animate={{
          height: ["45%", "65%", "45%"],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          filter: "blur(8px)",
          transform: "rotate(5deg)",
        }}
      />

      {/* Circular glow effect */}
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-60 md:h-60 rounded-full"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
