"use client"

import { motion } from "framer-motion"
import { BookOpen, Calculator, Compass, FlaskRoundIcon as Flask, Microscope, Atom, Ruler, Globe } from "lucide-react"

export function AnimatedEducationalIcons() {
  const icons = [
    { Icon: BookOpen, delay: 0.2, position: { top: "10%", left: "10%" } },
    { Icon: Calculator, delay: 0.4, position: { top: "15%", right: "15%" } },
    { Icon: Compass, delay: 0.6, position: { top: "5%", left: "30%" } },
    { Icon: Flask, delay: 0.8, position: { top: "20%", right: "30%" } },
    { Icon: Microscope, delay: 1.0, position: { top: "8%", left: "50%" } },
    { Icon: Atom, delay: 1.2, position: { top: "12%", right: "45%" } },
    { Icon: Ruler, delay: 1.4, position: { top: "18%", left: "70%" } },
    { Icon: Globe, delay: 1.6, position: { top: "5%", right: "75%" } },
  ]

  return (
    <div className="absolute top-0 left-0 w-full h-40 overflow-hidden pointer-events-none">
      {icons.map((item, index) => {
        const { Icon, delay, position } = item
        return (
          <motion.div
            key={index}
            className="absolute text-gray-600 dark:text-gray-400"
            style={position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.7, 0.5, 0.7],
              scale: 1,
              y: [0, -5, 0, -5],
            }}
            transition={{
              delay,
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              scale: { duration: 0.5 },
            }}
          >
            <Icon size={24} />
          </motion.div>
        )
      })}
    </div>
  )
}
