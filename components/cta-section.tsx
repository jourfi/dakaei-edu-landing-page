"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black relative overflow-hidden px-4">
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
          <Link href="https://eduapp.dakaei.com/dashboard/student">
            <Button className="bg-white dark:bg-transparent hover:bg-gray-200 dark:hover:bg-gray-900 text-black dark:text-white text-base md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-md transition-all border border-gray-300 dark:border-gray-700">
              Start Learning
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
