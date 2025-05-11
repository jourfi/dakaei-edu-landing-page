"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

export function HandDrawnIcons() {
  const [isMounted, setIsMounted] = useState(false)
  const isLargeScreen = useMediaQuery("(min-width: 1024px)")

  useEffect(() => {
    setIsMounted(true)
    return () => {
      // Cleanup function
      setIsMounted(false)
    }
  }, [])

  if (!isMounted) return null

  // Base size for icons - larger on big screens
  const iconSize = isLargeScreen ? 80 : 40
  const largeIconSize = isLargeScreen ? 100 : 50
  const smallIconSize = isLargeScreen ? 50 : 30

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Paper airplane - top left */}
      <motion.div
        className="absolute top-[15%] left-[15%] z-10"
        initial={{ opacity: 0.6, x: -50, y: -50, rotate: -20 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          x: [-50, -25, 0, 25],
          y: [-50, -25, 0, 25],
          rotate: [-20, 0, 20, 0, -20],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-800 dark:text-gray-200"
        >
          <path
            d="M30,70 L50,50 L85,25 C85,25 82,28 80,30 C78,32 50,50 50,50 L45,75 C45,75 47,65 50,50 L70,65"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeWidth: "1.5px" }}
          />
        </svg>
      </motion.div>

      {/* E=mc² - left side */}
      <motion.div
        className="absolute top-[35%] left-[8%] z-20"
        initial={{ opacity: 0.6, scale: 0.8 }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [0.8, 1.2, 0.8],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg width={iconSize} height={iconSize / 2} viewBox="0 0 100 50" className="text-gray-700 dark:text-gray-300">
          <path
            d="M20,25 L35,25 M20,15 L30,15 M20,35 L30,35 M45,25 L55,25 M65,20 C65,20 70,15 75,20 C80,25 75,30 70,30 C65,30 65,25 65,25 M80,15 L80,35 M85,20 C85,20 90,15 95,20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Atom - right side with rotation */}
      <motion.div
        className="absolute top-[25%] right-[10%] z-30"
        initial={{ opacity: 0.4 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <motion.svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-800 dark:text-gray-200"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <circle cx="50" cy="50" r="10" />
          <path
            d="M30,30 C40,5 60,5 70,30 C80,55 60,95 40,70 C20,45 40,5 50,50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: "1,0" }}
          />
          <path
            d="M30,70 C40,95 60,95 70,70 C80,45 60,5 40,30 C20,55 40,95 50,50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: "1,0" }}
          />
        </motion.svg>
      </motion.div>

      {/* Grade A+ - top right */}
      <motion.div
        className="absolute top-[15%] right-[25%] z-10"
        initial={{ opacity: 0.5, scale: 0.8, rotate: -10 }}
        animate={{
          opacity: [0.5, 0.9, 0.5],
          scale: [0.8, 1.1, 0.8],
          rotate: [-10, 5, -10],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 100 100" className="text-gray-800 dark:text-gray-200">
          <g transform="rotate(-10, 50, 50)">
            <path
              d="M30,20 L70,20 L70,80 L30,80 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ strokeDasharray: "1,0" }}
            />
            <path
              d="M45,65 L55,35 M40,50 L60,50"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M65,35 L75,35 M70,30 L70,40"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </motion.div>

      {/* NEW: Schrodinger's Equation - overlapping with center text */}
      <motion.div
        className="absolute top-[40%] left-[30%] z-30"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0, 0.7, 0],
          x: [-50, 0, 50],
          y: [-20, 0, 20],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
        }}
      >
        <svg
          width={largeIconSize * 1.5}
          height={largeIconSize / 2}
          viewBox="0 0 150 50"
          className="text-gray-700 dark:text-gray-300"
        >
          <path
            d="M10,25 C15,25 20,15 25,25 M30,15 L30,35 M40,25 L50,25 M60,15 C70,15 70,35 60,35 M80,25 L90,25 M100,15 L100,35 M110,15 L120,35 M120,15 L110,35 M130,25 L140,25"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Triangle - bottom right */}
      <motion.div
        className="absolute bottom-[20%] right-[20%] z-20"
        initial={{ opacity: 0.4, scale: 0.8 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-800 dark:text-gray-200"
        >
          <path
            d="M50,20 L80,80 L20,80 Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: "1,0" }}
          />
        </svg>
      </motion.div>

      {/* Sine wave - bottom left */}
      <motion.div
        className="absolute bottom-[15%] left-[15%] z-10"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          x: [-20, 0, 20],
          y: [10, 0, 10],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <motion.svg
          width={largeIconSize}
          height={iconSize / 2}
          viewBox="0 0 100 50"
          className="text-gray-700 dark:text-gray-300"
        >
          <motion.path
            d="M5,25 C15,10 25,40 35,25 C45,10 55,40 65,25 C75,10 85,40 95,25"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: "1,0" }}
            animate={{
              pathLength: [0, 1, 0],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </motion.svg>
      </motion.div>

      {/* NEW: F=ma (Newton's Second Law) - overlapping with center */}
      <motion.div
        className="absolute top-[50%] left-[40%] z-20"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0, 0.8, 0],
          scale: [0.8, 1.2, 0.8],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          delay: 2,
        }}
      >
        <svg width={iconSize} height={iconSize / 2} viewBox="0 0 100 50" className="text-gray-700 dark:text-gray-300">
          <path
            d="M20,15 L20,35 M20,20 L30,20 M20,30 L30,30 M40,25 L50,25 M60,15 L60,35 M60,15 L70,15 M60,25 L70,25 M80,15 L80,35 M80,15 L90,35 M80,35 L90,15"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Pi symbol - right side */}
      <motion.div
        className="absolute bottom-[30%] right-[5%] z-10"
        initial={{ opacity: 0.4, scale: 0.8 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.8, 1.2, 0.8],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg
          width={iconSize / 2}
          height={iconSize / 2}
          viewBox="0 0 50 50"
          className="text-gray-700 dark:text-gray-300"
        >
          <path
            d="M10,15 L40,15 M15,15 L15,40 C15,40 15,45 10,45 M35,15 L35,35 C35,35 35,40 40,40"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Square root - top left */}
      <motion.div
        className="absolute top-[10%] left-[30%] z-20"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [0.8, 1.1, 0.8],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg width={iconSize} height={iconSize / 2} viewBox="0 0 100 50" className="text-gray-700 dark:text-gray-300">
          <path
            d="M10,30 L30,30 L40,10 L60,40"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* NEW: Quantum Wave Function - overlapping with center */}
      <motion.div
        className="absolute top-[45%] right-[35%] z-30"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0, 0.6, 0],
          x: [50, 0, -50],
          y: [20, 0, 20],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          delay: 3,
        }}
      >
        <motion.svg
          width={largeIconSize * 1.5}
          height={largeIconSize / 2}
          viewBox="0 0 150 50"
          className="text-gray-700 dark:text-gray-300"
        >
          <motion.path
            d="M10,25 C20,10 30,40 40,25 C50,10 60,40 70,25 C80,10 90,40 100,25 C110,10 120,40 130,25"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              pathLength: [0, 1],
              pathOffset: [0, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>

      {/* NEW: Relativity Equation - overlapping with center */}
      <motion.div
        className="absolute top-[55%] left-[35%] z-20"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0, 0.7, 0],
          scale: [0.8, 1.2, 0.8],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          delay: 5,
        }}
      >
        <svg
          width={largeIconSize}
          height={largeIconSize / 2}
          viewBox="0 0 100 50"
          className="text-gray-700 dark:text-gray-300"
        >
          <path
            d="M10,25 L20,25 M30,15 L30,35 M40,25 L50,25 M60,15 L60,35 M70,15 L70,35 M70,25 L80,25 M90,15 L90,35"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* NEW: Pendulum with animation */}
      <motion.div
        className="absolute top-[20%] left-[45%] z-10"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg
          width={smallIconSize * 1.2}
          height={smallIconSize * 1.8}
          viewBox="0 0 60 90"
          className="text-gray-800 dark:text-gray-200"
        >
          <line x1="30" y1="5" x2="30" y2="15" stroke="currentColor" strokeWidth="1.5" />
          <line x1="15" y1="5" x2="45" y2="5" stroke="currentColor" strokeWidth="1.5" />
          <motion.g
            animate={{
              rotate: [30, 0, -30, 0, 30],
              transformOrigin: "30px 15px",
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <line x1="30" y1="15" x2="30" y2="60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,2" />
            <circle cx="30" cy="60" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Maxwell's Equations - with animation */}
      <motion.div
        className="absolute bottom-[40%] right-[25%] z-20"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          y: [10, -10, 10],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg
          width={largeIconSize}
          height={largeIconSize / 1.5}
          viewBox="0 0 100 70"
          className="text-gray-700 dark:text-gray-300"
        >
          <motion.path
            d="M10,20 C20,10 30,30 20,20 M40,20 L50,20 M60,10 L60,30 M70,20 L80,20 M90,10 L90,30 M10,50 C20,40 30,60 20,50 M40,50 L50,50 M60,40 L60,60 M70,50 L80,50 M90,40 L90,60"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              pathLength: [0, 1],
              pathOffset: [0, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </svg>
      </motion.div>

      {/* NEW: Heisenberg Uncertainty Principle */}
      <motion.div
        className="absolute bottom-[25%] left-[40%] z-30"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0, 0.8, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          delay: 7,
        }}
      >
        <svg
          width={largeIconSize}
          height={largeIconSize / 2}
          viewBox="0 0 100 50"
          className="text-gray-700 dark:text-gray-300"
        >
          <path
            d="M10,25 L20,25 M30,15 L30,35 M40,15 L40,35 M40,25 L50,25 M60,15 L60,35 M70,25 L80,25 M90,15 L90,35 M90,25 L100,25"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* NEW: Electron Orbit */}
      <motion.div
        className="absolute top-[60%] right-[15%] z-10"
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <motion.svg
          width={smallIconSize * 1.5}
          height={smallIconSize * 1.5}
          viewBox="0 0 75 75"
          className="text-gray-800 dark:text-gray-200"
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <circle cx="37.5" cy="37.5" r="5" fill="currentColor" />
          <ellipse cx="37.5" cy="37.5" rx="30" ry="15" stroke="currentColor" strokeWidth="1" fill="none" />
          <ellipse cx="37.5" cy="37.5" rx="15" ry="30" stroke="currentColor" strokeWidth="1" fill="none" />
          <motion.circle
            cx="0"
            cy="0"
            r="3"
            fill="currentColor"
            animate={{
              cx: [37.5, 67.5, 37.5, 7.5, 37.5],
              cy: [22.5, 37.5, 52.5, 37.5, 22.5],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </motion.svg>
      </motion.div>

      {/* NEW: Fibonacci Spiral */}
      <motion.div
        className="absolute top-[70%] left-[20%] z-20"
        initial={{ opacity: 0.3, scale: 0.8, rotate: 0 }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg
          width={smallIconSize * 1.5}
          height={smallIconSize * 1.5}
          viewBox="0 0 75 75"
          className="text-gray-800 dark:text-gray-200"
        >
          <path
            d="M37.5,37.5 L37.5,17.5 A20,20 0 0 1 57.5,37.5 A20,20 0 0 1 37.5,57.5 A20,20 0 0 1 17.5,37.5 A20,20 0 0 1 37.5,17.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Particles with physics-based motion */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            i % 3 === 0 ? "bg-blue-400" : i % 3 === 1 ? "bg-green-400" : "bg-purple-400"
          }`}
          initial={{
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [0, -100, -200],
            x: [0, Math.sin(i) * 100, Math.cos(i) * 100],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
