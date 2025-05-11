"use client"

import { motion } from "framer-motion"
import { FeatureBorder } from "@/components/feature-border"
import { Check, X } from "lucide-react"

export function FeatureContentPractice() {
  return (
    <FeatureBorder>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Master concepts with adaptive challenges</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Tackle personalized practice problems that learn with you. Feynman remembers your progress, adjusts
            difficulty, and focuses on areas you need most—turning practice into progress you can see and celebrate.
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
              <div className="h-10 bg-[#F5EAD7] dark:bg-gray-700 border border-black dark:border-gray-600 rounded mb-8"></div>

              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-red-200 dark:bg-red-900 border border-black dark:border-gray-600 flex items-center justify-center mr-4">
                  <X className="w-5 h-5 text-red-800 dark:text-red-300" />
                </div>
                <div className="h-6 bg-[#F5EAD7] dark:bg-gray-700 border border-black dark:border-gray-600 rounded flex-1"></div>
              </div>

              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-green-200 dark:bg-green-900 border border-black dark:border-gray-600 flex items-center justify-center mr-4">
                  <Check className="w-5 h-5 text-green-800 dark:text-green-300" />
                </div>
                <div className="h-6 bg-[#F5EAD7] dark:bg-gray-700 border border-black dark:border-gray-600 rounded flex-1"></div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-200 dark:bg-yellow-900 border border-black dark:border-gray-600 mr-4"></div>
                <div className="h-6 bg-[#F5EAD7] dark:bg-gray-700 border border-black dark:border-gray-600 rounded flex-1"></div>
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
