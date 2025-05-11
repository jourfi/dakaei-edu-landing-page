"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { useEffect, useState } from "react"

export function Header() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the logo based on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle smooth scrolling
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()

    // Update URL with hash - this will trigger the hashchange event
    window.location.hash = targetId
  }

  return (
    <header className="container mx-auto py-4 md:py-6 px-4 flex items-center justify-between relative z-20">
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <div className="w-6 h-6 md:w-7 md:h-7 relative">
          {mounted && (
            <Image
              src={resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
              alt="DAKAEi EDU Logo"
              width={28}
              height={28}
              className="w-full h-full object-contain"
            />
          )}
        </div>
        <h1 className="text-lg md:text-xl font-medium">DAKAEi EDU</h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a
          href="#pricing"
          onClick={(e) => handleScrollClick(e, "pricing")}
          className="text-gray-800 hover:text-black transition-colors dark:text-gray-200 dark:hover:text-white cursor-pointer"
        >
          Pricing
        </a>
        <a
          href="#labs"
          onClick={(e) => handleScrollClick(e, "labs")}
          className="text-gray-800 hover:text-black transition-colors dark:text-gray-200 dark:hover:text-white cursor-pointer"
        >
          Labs
        </a>
        <Link
          href="https://eduapp.dakaei.com"
          className="text-gray-800 hover:text-black transition-colors dark:text-gray-200 dark:hover:text-white"
        >
          Log In
        </Link>
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation */}
      <MobileNav handleScrollClick={handleScrollClick} />
    </header>
  )
}
