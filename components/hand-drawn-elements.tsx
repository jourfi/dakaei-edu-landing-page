"use client"

import { motion } from "framer-motion"

interface HandDrawnElementProps {
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  delay?: number
  duration?: number
  scale?: number
}

export function HandDrawnBook({ position, delay = 0, duration = 20, scale = 1 }: HandDrawnElementProps) {
  return (
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{ ...position, scale }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.6, 0.4, 0.6],
        y: [0, -5, 0, -5],
        rotate: [-2, 2, -2],
      }}
      transition={{
        delay,
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 10C10 10 15 8 25 8C35 8 40 10 40 10V40C40 40 35 38 25 38C15 38 10 40 10 40V10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="text-gray-600 dark:text-gray-400"
        />
        <path
          d="M25 8V38"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gray-600 dark:text-gray-400"
        />
        <path
          d="M15 15H20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gray-600 dark:text-gray-400"
        />
        <path
          d="M15 20H20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gray-600 dark:text-gray-400"
        />
        <path
          d="M30 15H35"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gray-600 dark:text-gray-400"
        />
        <path
          d="M30 20H35"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gray-600 dark:text-gray-400"
        />
      </svg>
    </motion.div>
  )
}

export function HandDrawnCalculator({ position, delay = 0, duration = 20, scale = 1 }: HandDrawnElementProps) {
  return (
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{ ...position, scale }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.6, 0.4, 0.6],
        y: [0, -5, 0, -5],
        rotate: [1, -1, 1],
      }}
      transition={{
        delay,
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="10"
          y="10"
          width="30"
          height="35"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-600 dark:text-gray-400"
        />
        <rect
          x="15"
          y="15"
          width="20"
          height="8"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-600 dark:text-gray-400"
        />
        <circle
          cx="17.5"
          cy="28.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-600 dark:text-gray-400"
        />
        <circle
          cx="25"
          cy="28.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-600 dark:text-gray-400"
        />
        <circle
          cx="32.5"
          cy="28.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-600 dark:text-gray-400"
        />
        <circle
          cx="17.5"
          cy="36.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-600 dark:text-gray-400"
        />
        <circle
          cx="25"
          cy="36.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-600 dark:text-gray-400"
        />
        <circle
          cx="32.5"
          cy="36.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-600 dark:text-gray-400"
        />
      </svg>
    </motion.div>
  )
}

export function HandDrawnMicroscope({ position, delay = 0, duration = 20, scale = 1 }: HandDrawnElementProps) {
  return (
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{ ...position, scale }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.6, 0.4, 0.6],
        y: [0, -5, 0, -5],
        rotate: [-1, 1, -1],
      }}
      transition={{
        delay,
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25 10V20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gray-600 dark:text-gray-400"
        />
        <circle
          cx="25"
          cy="8"
          r="3"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gray-600 dark:text-gray-400"
        />
        <path
          d="M20 20H30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gray-600 dark:text-gray-400"
        />
        <path
          d="M22 20V30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gray-600 dark:text-gray-400"
        />
        <path
          d="M28 20V30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gray-600 dark:text-gray-400"
        />
        <path
          d="M18 30H32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gray-600 dark:text-gray-400"
        />
        <path
          d="M20 30L15 40H35L30 30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-600 dark:text-gray-400"
        />
        <path
          d="M15 40H35"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gray-600 dark:text-gray-400"
        />
      </svg>
    </motion.div>
  )
}
