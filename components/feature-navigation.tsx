"use client"

import { motion } from "framer-motion"

interface FeatureNavigationProps {
  activeFeature: "video" | "whiteboard" | "graphing" | "practice" | "search"
  setActiveFeature: (feature: "video" | "whiteboard" | "graphing" | "practice" | "search") => void
}

export function FeatureNavigation({ activeFeature, setActiveFeature }: FeatureNavigationProps) {
  return (
    <div className="flex flex-wrap justify-center mb-6 md:mb-10 gap-1 sm:gap-2 md:gap-4 font-tech px-2">
      <button
        onClick={() => setActiveFeature("video")}
        className={`relative px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md transition-colors ${
          activeFeature === "video"
            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
        }`}
      >
        Video Lessons
        {activeFeature === "video" && (
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400"
            layoutId="featureUnderline"
            initial={false}
          />
        )}
      </button>

      <button
        onClick={() => setActiveFeature("whiteboard")}
        className={`relative px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md transition-colors ${
          activeFeature === "whiteboard"
            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
        }`}
      >
        Whiteboarding
        {activeFeature === "whiteboard" && (
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400"
            layoutId="featureUnderline"
            initial={false}
          />
        )}
      </button>

      <button
        onClick={() => setActiveFeature("graphing")}
        className={`relative px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md transition-colors ${
          activeFeature === "graphing"
            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
        }`}
      >
        Graphing
        {activeFeature === "graphing" && (
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400"
            layoutId="featureUnderline"
            initial={false}
          />
        )}
      </button>

      <button
        onClick={() => setActiveFeature("practice")}
        className={`relative px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md transition-colors ${
          activeFeature === "practice"
            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
        }`}
      >
        Practice Problems
        {activeFeature === "practice" && (
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400"
            layoutId="featureUnderline"
            initial={false}
          />
        )}
      </button>

      <button
        onClick={() => setActiveFeature("search")}
        className={`relative px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md transition-colors ${
          activeFeature === "search"
            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
        }`}
      >
        Web Search
        {activeFeature === "search" && (
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400"
            layoutId="featureUnderline"
            initial={false}
          />
        )}
      </button>
    </div>
  )
}
