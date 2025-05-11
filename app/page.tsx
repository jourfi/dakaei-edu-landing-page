"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { FeatureNavigation } from "@/components/feature-navigation"
import { FeatureContentVideo } from "@/components/feature-content-video"
import { FeatureContentWhiteboard } from "@/components/feature-content-whiteboard"
import { FeatureContentGraphing } from "@/components/feature-content-graphing"
import { FeatureContentPractice } from "@/components/feature-content-practice"
import { FeatureContentSearch } from "@/components/feature-content-search"
import { PricingSection } from "@/components/pricing-section"
import { AiInfrastructureSection } from "@/components/ai-infrastructure-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  const [activeFeature, setActiveFeature] = useState<"video" | "whiteboard" | "graphing" | "practice" | "search">(
    "video",
  )

  // Add this useEffect hook to handle hash changes and initial hash navigation
  useEffect(() => {
    // Function to handle scrolling to element by ID
    const scrollToElement = (id: string) => {
      const element = document.getElementById(id)

      if (element) {
        // Add a slight delay to ensure the page is fully loaded
        setTimeout(() => {
          const headerHeight = 80 // Approximate header height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }, 100)
      }
    }

    // Handle initial hash in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      scrollToElement(id)
    }

    // Set up listener for hash changes
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1)
        scrollToElement(id)
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      <Header />

      <main className="relative">
        <HeroSection />

        <section className="container mx-auto py-8 md:py-16 relative z-10">
          <FeatureNavigation activeFeature={activeFeature} setActiveFeature={setActiveFeature} />

          {activeFeature === "video" && <FeatureContentVideo />}
          {activeFeature === "whiteboard" && <FeatureContentWhiteboard />}
          {activeFeature === "graphing" && <FeatureContentGraphing />}
          {activeFeature === "practice" && <FeatureContentPractice />}
          {activeFeature === "search" && <FeatureContentSearch />}
        </section>

        <AiInfrastructureSection />
        <PricingSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
