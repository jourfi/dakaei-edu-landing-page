"use client"

import { motion } from "framer-motion"
import { FeatureBorder } from "@/components/feature-border"

export function FeatureContentWhiteboard() {
  return (
    <FeatureBorder>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Sketch and solve with the whiteboard</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Sketch, diagram, and brainstorm while Feynman reads, responds, and builds upon your visual thinking in
            real-time. Draw a problem, get a solution—our intelligent whiteboard brings your educational conversations
            to life.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <div className="w-full aspect-video bg-[#FAF3EA] dark:bg-gray-800 rounded-lg border-2 border-black dark:border-gray-600 p-6">
              <div className="flex flex-col h-full justify-center">
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-1/3 h-16 bg-green-200 dark:bg-green-900 rounded border border-black dark:border-gray-600"></div>
                  <svg viewBox="0 0 50 50" width="40" height="40" className="text-black dark:text-white">
                    <path d="M25 5 L45 25 L25 45" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <div className="w-1/3 h-16 bg-yellow-200 dark:bg-yellow-900 rounded border border-black dark:border-gray-600"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-16 h-16 bg-orange-200 dark:bg-orange-900 rounded-full border border-black dark:border-gray-600"></div>
                  <svg viewBox="0 0 50 50" width="40" height="40" className="text-black dark:text-white rotate-90">
                    <path d="M25 5 L45 25 L25 45" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <div className="w-1/3 h-12 bg-green-100 dark:bg-green-900/50 rounded border border-black dark:border-gray-600"></div>
                </div>
              </div>
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
