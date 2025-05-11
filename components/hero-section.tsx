"use client"
import { Button } from "@/components/ui/button"
import { HandDrawnIcons } from "@/components/hand-drawn-icons"
import { InteractiveMathElements } from "@/components/interactive-math-elements"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="container mx-auto py-16 md:py-32 relative z-10 min-h-[80vh] md:min-h-[90vh] px-4">
      <div className="relative h-full w-full">
        {/* Background elements */}
        <HandDrawnIcons />

        {/* Interactive math elements that will overlap with text */}
        <InteractiveMathElements />

        <div className="text-center mb-8 md:mb-16 max-w-3xl mx-auto mt-12 md:mt-24 relative z-20 mix-blend-difference">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 md:mb-6 relative"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -5, 0],
                x: [0, 2, 0, -2, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              Bring
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -3, 0],
                x: [0, -2, 0, 2, 0],
                rotate: [0, -1, 0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            >
              your
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -7, 0],
                x: [0, 3, 0, -3, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              learning
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -4, 0],
                x: [0, -1, 0, 1, 0],
                rotate: [0, -1.5, 0, 1.5, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1.5,
              }}
            >
              to
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              animate={{
                y: [0, -6, 0],
                x: [0, 2, 0, -2, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 2,
              }}
            >
              life.
            </motion.span>
          </motion.h1>

          <motion.div
            className="relative"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 rounded-lg blur-xl z-0"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Your learning style is unique—your educational tools should be too. Create your perfect learning
              environment with DAKAEi EDU's interactive tools.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-center relative z-10"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white text-base md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-md transition-all border border-gray-300 dark:border-gray-700 relative overflow-hidden z-50">
                Start Learning
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
