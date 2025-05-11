"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { EducationalFloatingElements } from "@/components/educational-floating-elements"
import { MathEquation } from "@/components/math-equation"
import { PendulumAnimation, OrbitalAnimation } from "@/components/physics-animation"
import { HandDrawnBook, HandDrawnCalculator, HandDrawnMicroscope } from "@/components/hand-drawn-elements"
import { EducationalParticles } from "@/components/educational-particles"
import { AnimatedMathFormulas } from "@/components/animated-math-formulas"
import { LightBeamEffect } from "@/components/light-beam-effect"
import { AnimatedEducationalIcons } from "@/components/animated-educational-icons"

export function HeroSection() {
  return (
    <section className="container mx-auto py-16 md:py-32 relative z-10 min-h-[80vh] md:min-h-[90vh] px-4">
      <div className="relative h-full w-full">
        {/* New top effects */}
        <EducationalParticles />
        <LightBeamEffect />
        <AnimatedMathFormulas />
        <AnimatedEducationalIcons />

        {/* Existing elements */}
        <EducationalFloatingElements />
        <HandDrawnBook position={{ top: "30%", left: "8%" }} delay={0.7} scale={0.8} />
        <HandDrawnCalculator position={{ top: "60%", right: "10%" }} delay={0.9} scale={0.8} />
        <HandDrawnMicroscope position={{ bottom: "15%", left: "15%" }} delay={1.1} scale={0.8} />
        <MathEquation
          equation="E=mc²"
          explanation="Einstein's mass-energy equivalence formula: Energy equals mass times the speed of light squared."
          position={{ top: "20%", left: "15%" }}
          delay={0.3}
        />
        <MathEquation
          equation="F=ma"
          explanation="Newton's Second Law: Force equals mass times acceleration."
          position={{ bottom: "25%", right: "18%" }}
          delay={0.5}
        />
        <PendulumAnimation position={{ top: "15%", right: "15%" }} delay={0.4} />
        <OrbitalAnimation position={{ bottom: "20%", left: "10%" }} delay={0.6} />

        {/* Add a subtle gradient overlay at the top */}
        <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-white/30 to-transparent dark:from-gray-950/30 dark:to-transparent pointer-events-none"></div>

        {/* Main content with enhanced animations */}
        <div className="text-center mb-8 md:mb-16 max-w-3xl mx-auto mt-12 md:mt-24 relative z-20">
          <motion.div
            className="mb-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              animate={{ width: ["0%", "40%", "0%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 md:mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 10px rgba(59, 130, 246, 0.3)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              Bring your learning to life.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your learning style is unique—your educational tools should be too. Create your perfect learning environment
            with DAKAEi EDU's interactive tools.
          </motion.p>

          <motion.div
            className="flex justify-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button className="bg-white dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white text-base md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-md transition-all border border-gray-300 dark:border-gray-700">
              Start Learning
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
