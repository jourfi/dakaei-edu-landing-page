"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

interface MobileNavProps {
  handleScrollClick?: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void
}

export function MobileNav({ handleScrollClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (handleScrollClick) {
      handleScrollClick(e, targetId)
    }
    toggleMenu()
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col p-4 space-y-4">
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, "pricing")}
                className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors py-2 text-left cursor-pointer"
              >
                Pricing
              </a>
              <a
                href="#labs"
                onClick={(e) => handleNavClick(e, "labs")}
                className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors py-2 text-left cursor-pointer"
              >
                Labs
              </a>
              <Link
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors py-2"
                onClick={toggleMenu}
              >
                Log In
              </Link>
              <div className="pt-2 flex justify-between items-center border-t border-gray-200 dark:border-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
