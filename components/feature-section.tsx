"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

interface FeatureSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  id: string
  reversed?: boolean
}

export function FeatureSection({ title, description, imageSrc, imageAlt, id, reversed = false }: FeatureSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id={id} ref={ref} className="py-20 relative">
      <div className="container mx-auto">
        <motion.div
          className={`relative z-10 flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16`}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-gray-700 text-lg">{description}</p>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <div className="relative">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5,5 Q20,0 40,10 Q60,20 80,15 Q100,10 120,20 Q140,30 160,25 Q180,20 200,30 Q220,40 240,35 Q260,30 280,40 Q300,50 320,45 Q340,40 360,50 Q380,60 395,55 L395,295 Q380,290 360,300 Q340,310 320,305 Q300,300 280,310 Q260,320 240,315 Q220,310 200,320 Q180,330 160,325 Q140,320 120,330 Q100,340 80,335 Q60,330 40,340 Q20,350 5,345 Z"
                  stroke="black"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>

              <div className="p-8">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={imageAlt}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
