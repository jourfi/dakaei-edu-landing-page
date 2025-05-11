"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black relative overflow-hidden px-4">
      <div className="absolute right-0 bottom-0 w-64 md:w-96 h-64 md:h-96 opacity-20">
        <svg viewBox="0 0 24 24" className="w-full h-full text-gray-400 dark:text-green-400">
          <path
            d="M2 21l10-10M12 11l9-9M12 11l-2 8M10 19l-2 2M10 19l2 2M17 6l1 1M17 6l-1 1"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Learning that actually works for you.
          <br className="hidden sm:block" />
          Try DAKAEi EDU today.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button className="bg-white dark:bg-transparent hover:bg-gray-200 dark:hover:bg-gray-900 text-black dark:text-white text-base md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-md transition-all border border-gray-300 dark:border-gray-700">
            Start Learning
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
