"use client"

import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

export function EducationalFloatingElements() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Adjust positions for mobile vs desktop
  const elements = [
    // Math elements
    {
      element: <MathFormula formula="E=mc²" />,
      position: isMobile ? { top: "15%", left: "5%" } : { top: "25%", left: "10%" },
      delay: 0.2,
      duration: 20,
      floating: true,
    },
    {
      element: <MathFormula formula="∫f(x)dx" />,
      position: isMobile ? { top: "70%", right: "8%" } : { top: "65%", right: "15%" },
      delay: 0.5,
      duration: 25,
      floating: true,
    },
    {
      element: <MathFormula formula="∇×F" />,
      position: isMobile ? { bottom: "20%", left: "10%" } : { bottom: "25%", left: "18%" },
      delay: 0.7,
      duration: 18,
      floating: true,
    },

    // Physics elements
    {
      element: <AtomIcon />,
      position: isMobile ? { top: "30%", right: "10%" } : { top: "35%", right: "20%" },
      delay: 0.3,
      duration: 22,
      floating: true,
    },
    {
      element: <PaperAirplane />,
      position: isMobile ? { top: "20%", right: "15%" } : { top: "15%", right: "25%" },
      delay: 0.1,
      duration: 15,
      rotation: true,
    },

    // Educational elements
    {
      element: <GradeSheet />,
      position: isMobile ? { bottom: "30%", right: "5%" } : { bottom: "35%", right: "12%" },
      delay: 0.4,
      duration: 20,
      floating: true,
    },
    {
      element: <DNAStrand />,
      position: isMobile ? { bottom: "15%", right: "20%" } : { bottom: "20%", right: "30%" },
      delay: 0.6,
      duration: 24,
      floating: true,
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((item, index) => (
        <motion.div
          key={index}
          className="absolute z-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.7, 0.5, 0.7],
            y: item.floating ? [0, -10, 0, -10] : 0,
            rotate: item.rotation ? [0, -5, 0, 5] : 0,
          }}
          transition={{
            delay: item.delay,
            duration: item.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={item.position}
        >
          {item.element}
        </motion.div>
      ))}
    </div>
  )
}

// Math formula component with hand-drawn style
function MathFormula({ formula }: { formula: string }) {
  return (
    <div className="font-tech text-gray-700 dark:text-gray-300 text-lg md:text-xl opacity-70 transform rotate-[-5deg]">
      {formula}
    </div>
  )
}

// Atom icon with hand-drawn style
function AtomIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-70"
    >
      <ellipse
        cx="20"
        cy="20"
        rx="8"
        ry="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
        transform="rotate(30 20 20)"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="8"
        ry="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
        transform="rotate(90 20 20)"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="8"
        ry="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
        transform="rotate(150 20 20)"
      />
      <circle cx="20" cy="20" r="3" fill="currentColor" className="text-gray-600 dark:text-gray-400" />
    </svg>
  )
}

// Paper airplane with hand-drawn style
function PaperAirplane() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-70"
    >
      <path
        d="M8 20L35 8L20 32L18 22L8 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="text-gray-600 dark:text-gray-400"
      />
      <path
        d="M18 22L35 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
      />
    </svg>
  )
}

// Grade sheet with A+ with hand-drawn style
function GradeSheet() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-70"
    >
      <rect
        x="8"
        y="5"
        width="24"
        height="30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-600 dark:text-gray-400"
      />
      <line
        x1="12"
        y1="10"
        x2="28"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
      />
      <line
        x1="12"
        y1="15"
        x2="28"
        y2="15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
      />
      <line
        x1="12"
        y1="20"
        x2="20"
        y2="20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
      />
      <path
        d="M22 28L24 22L26 28M22.5 26H25.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-600 dark:text-gray-400"
      />
      <path
        d="M28 24L30 26M30 24L28 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
      />
    </svg>
  )
}

// DNA strand with hand-drawn style
function DNAStrand() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-70"
    >
      <path
        d="M15 5C15 5 25 12 25 20C25 28 15 35 15 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
      />
      <path
        d="M25 5C25 5 15 12 15 20C15 28 25 35 25 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
      />
      <line
        x1="13"
        y1="10"
        x2="27"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
      />
      <line
        x1="13"
        y1="20"
        x2="27"
        y2="20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
      />
      <line
        x1="13"
        y1="30"
        x2="27"
        y2="30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-gray-600 dark:text-gray-400"
      />
    </svg>
  )
}
