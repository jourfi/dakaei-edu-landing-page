"use client"

import { motion } from "framer-motion"
import { FeatureBorder } from "@/components/feature-border"

export function FeatureContentGraphing() {
  return (
    <FeatureBorder>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Plot and explore with interactive graphs</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Plot concepts, and let Feynman guide you from there. Create dynamic visualizations while our models analyze,
            suggest, and enhance your graphs in real-time. Turn abstract formulas into intuitive visuals that evolve as
            you explore.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <div className="w-full aspect-video bg-green-700 dark:bg-green-900 rounded-lg border-2 border-black dark:border-gray-600 p-6 flex items-center justify-center">
              <svg viewBox="0 0 200 100" width="200" height="100" className="text-white">
                <path d="M0 50 L200 50" stroke="currentColor" strokeWidth="2" />
                <path d="M0 0 L0 100" stroke="currentColor" strokeWidth="2" />
                <path d="M10 80 Q30 30 50 70 T90 40 T130 20" stroke="currentColor" strokeWidth="3" fill="none" />
                <circle cx="50" cy="70" r="5" fill="currentColor" />
                <circle cx="90" cy="40" r="5" fill="currentColor" />
                <circle cx="130" cy="20" r="5" fill="currentColor" />
              </svg>
            </div>

            <svg
              className="absolute -bottom-6 -right-6 w-24 h-24 text-black dark:text-white"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 50 L80 50 L50 80 Z" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </motion.div>
      </div>
    </FeatureBorder>
  )
}
