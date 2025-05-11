"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    // Verify the ID is correctly set on the pricing section
    // Make sure the section has the id="pricing" attribute
    <section id="pricing" className="py-16 md:py-24 relative px-4 scroll-mt-20">
      <div className="container mx-auto text-center mb-8 md:mb-16">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Learn More, Spend Less
        </motion.h2>
        <motion.p
          className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Students crafting tools for students. We've been in your shoes, which is why we've built a powerful free tier
          that doesn't require your credit card.
        </motion.p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 400 500"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12,12 Q24,3 36,12 Q48,21 60,12 Q72,3 84,12 Q96,21 108,12 Q120,3 132,12 Q144,21 156,12 Q168,3 180,12 Q192,21 204,12 Q216,3 228,12 Q240,21 252,12 Q264,3 276,12 Q288,21 300,12 Q312,3 324,12 Q336,21 348,12 Q360,3 372,12 Q384,21 396,12
                   
                   L396,488 
                   
                   Q384,497 372,488 Q360,479 348,488 Q336,497 324,488 Q312,479 300,488 Q288,497 276,488 Q264,479 252,488 Q240,497 228,488 Q216,479 204,488 Q192,497 180,488 Q168,479 156,488 Q144,497 132,488 Q120,479 108,488 Q96,497 84,488 Q72,479 60,488 Q48,497 36,488 Q24,479 12,488 Z"
                  stroke="black"
                  className="dark:stroke-white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              <div className="p-4 md:p-8 relative">
                <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white">Free</h3>
                <div className="flex items-baseline mb-4 md:mb-6">
                  <span className="text-3xl md:text-5xl font-bold dark:text-white">$0</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                  Perfect for trying out DAKAEi EDU
                </p>

                <ul className="space-y-2 md:space-y-3 text-left mb-6 md:mb-8 text-sm md:text-base">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Limited Daily Chat Messages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">3 DeepTutor Uses Daily</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">5 Daily File Uploads</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Limited Journal Access</span>
                  </li>
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm md:text-base"
                >
                  Start for Free →
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-8 left-0 right-0 flex justify-center">
                <div className="bg-green-600 text-white text-xs md:text-sm px-3 md:px-4 py-1 rounded-full">
                  Most Popular
                </div>
              </div>
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 400 500"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12,12 Q24,3 36,12 Q48,21 60,12 Q72,3 84,12 Q96,21 108,12 Q120,3 132,12 Q144,21 156,12 Q168,3 180,12 Q192,21 204,12 Q216,3 228,12 Q240,21 252,12 Q264,3 276,12 Q288,21 300,12 Q312,3 324,12 Q336,21 348,12 Q360,3 372,12 Q384,21 396,12
                   
                   L396,488 
                   
                   Q384,497 372,488 Q360,479 348,488 Q336,497 324,488 Q312,479 300,488 Q288,497 276,488 Q264,479 252,488 Q240,497 228,488 Q216,479 204,488 Q192,497 180,488 Q168,479 156,488 Q144,497 132,488 Q120,479 108,488 Q96,497 84,488 Q72,479 60,488 Q48,497 36,488 Q24,479 12,488 Z"
                  stroke="black"
                  className="dark:stroke-white"
                  strokeWidth="2"
                  fill="#E6F7F1"
                  className="dark:fill-green-950"
                />
              </svg>

              <div className="p-4 md:p-8 relative">
                <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white">Premium</h3>
                <div className="flex items-baseline mb-4 md:mb-6">
                  <span className="text-3xl md:text-5xl font-bold dark:text-white">$15.00</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2 md:mb-4 text-sm md:text-base">
                  Unlock your full learning potential
                </p>

                <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs md:text-sm p-2 rounded mb-4 md:mb-6">
                  Students: 20% off with university email
                </div>

                <ul className="space-y-2 md:space-y-3 text-left mb-6 md:mb-8 text-sm md:text-base">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Unlimited Chat Messages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Unlimited Video Generations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Unlimited File Uploads and Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Unlimited DeepTutor Uses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Unlimited Study Spaces</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Early Access to Upcoming Advanced Learning Tools :)</span>
                  </li>
                </ul>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm md:text-base">
                  Get Premium →
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 400 500"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12,12 Q24,3 36,12 Q48,21 60,12 Q72,3 84,12 Q96,21 108,12 Q120,3 132,12 Q144,21 156,12 Q168,3 180,12 Q192,21 204,12 Q216,3 228,12 Q240,21 252,12 Q264,3 276,12 Q288,21 300,12 Q312,3 324,12 Q336,21 348,12 Q360,3 372,12 Q384,21 396,12
                   
                   L396,488 
                   
                   Q384,497 372,488 Q360,479 348,488 Q336,497 324,488 Q312,479 300,488 Q288,497 276,488 Q264,479 252,488 Q240,497 228,488 Q216,479 204,488 Q192,497 180,488 Q168,479 156,488 Q144,497 132,488 Q120,479 108,488 Q96,497 84,488 Q72,479 60,488 Q48,497 36,488 Q24,479 12,488 Z"
                  stroke="black"
                  className="dark:stroke-white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              <div className="p-4 md:p-8 relative">
                <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white">Enterprise</h3>
                <div className="flex items-baseline mb-4 md:mb-6">
                  <span className="text-3xl md:text-5xl font-bold dark:text-white">Custom</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                  For companies and institutions
                </p>

                <ul className="space-y-2 md:space-y-3 text-left mb-6 md:mb-8 text-sm md:text-base">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Everything in Premium</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Praxis Proctoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Classroom Sharing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">24/7 Priority Support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Organization Journals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="dark:text-gray-300">Custom Features</span>
                  </li>
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm md:text-base"
                >
                  Contact Sales →
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
