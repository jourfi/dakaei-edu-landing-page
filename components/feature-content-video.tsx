"use client"

import { motion } from "framer-motion"
import { FeatureBorder } from "@/components/feature-border"

export function FeatureContentVideo() {
  return (
    <FeatureBorder>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 dark:text-white">
            Watch your lessons come alive with videos
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
            Transform your ideas into engaging educational videos in minutes. Feynman turns your text into dynamic
            lessons, customizable with our suite of interactive tools. Learn, create, and teach—exactly how you imagine
            it.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <div className="w-full aspect-video bg-[#FAF3EA] dark:bg-gray-800 rounded-lg border-2 border-black dark:border-gray-600 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                width="80"
                height="80"
                className="text-green-600 dark:text-green-400 md:w-120 md:h-120"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M16 12l-6 4V8l6 4z" fill="currentColor" />
                <path d="M16 12l-6 4V8l6 4z" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>

            <svg
              className="absolute -bottom-6 -right-6 w-16 h-16 md:w-24 md:h-24 text-black dark:text-white"
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
