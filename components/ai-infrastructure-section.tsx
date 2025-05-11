"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function AiInfrastructureSection() {
  return (
    <section id="labs" className="py-16 md:py-24 relative px-4 scroll-mt-20">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 dark:text-white">
            Pioneering AI Infrastructure, Built for Education
          </h2>
          <div className="w-full max-w-xl mx-auto h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mb-4 md:mb-8"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We're not just another education platform. We're building the foundation for tomorrow's educational systems
            through innovative AI infrastructure solutions
          </p>
        </motion.div>

        <div className="mt-8 md:mt-16">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold dark:text-white">Recent Updates</h3>
            <a
              href="#"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center text-sm md:text-base"
            >
              Learn more <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              className="bg-gradient-to-br from-green-400 to-blue-500 dark:from-green-600 dark:to-blue-700 rounded-lg p-4 md:p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="flex items-center">
                  <svg viewBox="0 0 24 24" width="20" height="20" className="text-white mr-2">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <span className="font-bold text-sm md:text-base">NEW FEATURE</span>
                </div>
                <div className="text-xs md:text-sm bg-white/20 px-2 py-1 rounded-full">Just Released</div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2">Video Generation</h3>
              <p className="text-white/90 mb-4">
                Generate educational videos from your course materials with one click.
              </p>
              <div className="text-sm bg-white/20 rounded-md p-2 inline-block">Smart note extraction included</div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <svg viewBox="0 0 24 24" width="20" height="20" className="text-blue-500 dark:text-blue-400 mr-2">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <span className="font-bold text-sm md:text-base text-gray-900 dark:text-gray-100">NEW FEATURE</span>
                </div>
                <div className="text-xs md:text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                  Beta
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white">Study Rooms</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Create virtual study rooms and invite your classmates to collaborate in real-time.
              </p>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                  +3
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                  JD
                </div>
                <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                  KL
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Join now</div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <svg viewBox="0 0 24 24" width="20" height="20" className="text-blue-500 dark:text-blue-400 mr-2">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <span className="font-bold text-sm md:text-base text-gray-900 dark:text-gray-100">NEW FEATURE</span>
                </div>
                <div className="text-xs md:text-sm bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                  Popular
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white">AI Academic Reports</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Write professional academic reports with AI assistance. Includes citations, formatting, and research
                help.
              </p>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg viewBox="0 0 24 24" width="16" height="16" className="mr-1 text-green-500">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" />
                </svg>
                <span>APA, MLA, Chicago styles supported</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
