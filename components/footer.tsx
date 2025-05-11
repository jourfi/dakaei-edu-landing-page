"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the logo based on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="py-12 md:py-16 bg-white dark:bg-gray-900 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-4 cursor-pointer">
              <div className="w-5 h-5 md:w-6 md:h-6 mr-2 relative">
                {mounted && (
                  <Image
                    src={resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                    alt="DAKAEi EDU Logo"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <span className="text-lg md:text-xl font-bold dark:text-white">DAKAEi EDU</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm md:text-base">© 2025 DAKAEi EDU, Inc.</p>
            <div className="flex items-center text-green-600 dark:text-green-400 text-sm md:text-base">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-green-600 dark:bg-green-500 rounded-full mr-2"></div>
              <span>All services are online</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base dark:text-white">Company</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Help
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base dark:text-white">Legal</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Acts Notices
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 sm:mt-0">
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base dark:text-white">Platform</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Labs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Features
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 sm:mt-0">
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base dark:text-white">Resources</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 md:pt-8">
          <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base dark:text-white">Our Partners</h4>
          <div className="flex flex-wrap gap-4 md:gap-8 items-center">
            <a href="https://ostimteknik.edu.tr/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.ibb.co/JRMDzj8c/download-1.png"
                alt="Ostim Teknik University"
                className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all dark:brightness-90 dark:hover:brightness-100"
              />
            </a>
            <a href="https://robotum.net/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.ibb.co/v605sZSC/download-2.png"
                alt="Robotum"
                className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all dark:brightness-90 dark:hover:brightness-100"
              />
            </a>
            <a href="https://chat.dakaei.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.ibb.co/NnmbYk6D/download-3.png"
                alt="DAKAEi Chat"
                className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all dark:brightness-90 dark:hover:brightness-100"
              />
            </a>
            <a
              href="https://gdg.community.dev/gdg-on-campus-ostim-teknik-university-ankara-turkiye/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/DPzYBDz5/download-1.jpg"
                alt="GDG On Campus"
                className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all dark:brightness-90 dark:hover:brightness-100"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
