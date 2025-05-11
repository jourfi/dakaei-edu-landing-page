"use client"

import { motion } from "framer-motion"

export function AnimatedMathFormulas() {
  const formulas = [
    { formula: "∫f(x)dx", delay: 0.2 },
    { formula: "∇×F=0", delay: 0.4 },
    { formula: "∑i=1^n i = n(n+1)/2", delay: 0.6 },
    { formula: "eiπ+1=0", delay: 0.8 },
    { formula: "F=G(m₁m₂)/r²", delay: 1.0 },
  ]

  return (
    <div className="absolute top-0 left-0 w-full h-40 md:h-60 overflow-hidden pointer-events-none">
      {formulas.map((item, index) => (
        <motion.div
          key={index}
          className="absolute font-tech text-gray-700 dark:text-gray-300 text-lg md:text-xl opacity-70"
          style={{
            top: `${Math.random() * 70}%`,
            left: `${index * 20 + Math.random() * 10}%`,
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [0, 0.7, 0.5, 0.7],
            y: [0, 5, 0, 5],
          }}
          transition={{
            delay: item.delay,
            duration: 5 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          {item.formula}
        </motion.div>
      ))}
    </div>
  )
}
