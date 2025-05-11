"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, MessageSquare, Zap } from "lucide-react"

export function AiAssistant() {
  const [pulseSize, setPulseSize] = useState(1)
  const [isTyping, setIsTyping] = useState(false)
  const [message, setMessage] = useState("How can I help with your learning today?")

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseSize((prev) => (prev === 1 ? 1.1 : 1))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const handleInteraction = () => {
    setIsTyping(true)
    setMessage("...")

    setTimeout(() => {
      setIsTyping(false)
      setMessage("I can help you summarize your course materials or generate study notes.")
    }, 1500)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-blue-100 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mb-6">
          <motion.div
            className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center"
            animate={{ scale: pulseSize }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Sparkles className="w-16 h-16 text-white" />
          </motion.div>

          <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>

          <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>

          {/* Orbiting elements */}
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-300 rounded-full" />
          </motion.div>

          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-cyan-300 rounded-full" />
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-blue-900 mb-2">DAKAEi Assistant</h3>

        <div className="h-16 flex items-center justify-center">
          {isTyping ? (
            <div className="flex gap-1">
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
              />
            </div>
          ) : (
            <p className="text-blue-700 text-center">{message}</p>
          )}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={handleInteraction}
            className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
          >
            Ask a question
          </button>
          <button
            onClick={handleInteraction}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Start learning
          </button>
        </div>
      </motion.div>
    </div>
  )
}
