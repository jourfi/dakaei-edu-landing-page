"use client"

import { motion } from "framer-motion"
import { FeatureBorder } from "@/components/feature-border"
import { Search } from "lucide-react"

export function FeatureContentSearch() {
  return (
    <FeatureBorder>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Find Facts That Fuel Your Learning</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Access reliable, fact-checked information through our educational search engine. Feynman evaluates sources,
            highlights credible references, and explains complex topics —turning scattered information into connected
            knowledge you can trust.
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
              <div className="h-12 bg-[#F5EAD7] dark:bg-gray-700 border border-black dark:border-gray-600 rounded mb-8 flex items-center px-4">
                <Search className="w-5 h-5 mr-2 text-green-700 dark:text-green-400" />
                <div className="w-4 h-4 rounded-full bg-green-200 dark:bg-green-800 border border-green-700 dark:border-green-600 ml-auto"></div>
              </div>

              <div className="h-6 bg-green-200 dark:bg-green-900 border border-black dark:border-gray-600 rounded mb-6 w-3/4"></div>
              <div className="h-6 bg-[#F5EAD7] dark:bg-gray-700 border border-black dark:border-gray-600 rounded mb-6"></div>
              <div className="h-6 bg-yellow-200 dark:bg-yellow-900 border border-black dark:border-gray-600 rounded w-1/2"></div>
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
