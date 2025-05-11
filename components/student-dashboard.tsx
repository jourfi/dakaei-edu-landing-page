"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Video, PenTool, Sparkles, CheckCircle, Play } from "lucide-react"

export function StudentDashboard() {
  const [generatingVideo, setGeneratingVideo] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)

  const handleGenerateVideo = () => {
    setGeneratingVideo(true)
    setVideoProgress(0)

    const interval = setInterval(() => {
      setVideoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setGeneratingVideo(false)
          }, 500)
          return 100
        }
        return prev + 5
      })
    }, 150)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="col-span-1"
      >
        <Card className="h-full border-blue-100 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <FileText className="w-5 h-5" />
              Summarize Course
            </CardTitle>
            <CardDescription>Generate concise summaries from your materials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">Select Course Material</label>
              <select className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Physics 101 - Chapter 3</option>
                <option>Physics 101 - Chapter 4</option>
                <option>Chemistry Basics</option>
                <option>Advanced Mathematics</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">Summary Length</label>
              <div className="flex gap-2">
                <button className="flex-1 p-2 bg-blue-500 text-white rounded-md">Short</button>
                <button className="flex-1 p-2 bg-blue-100 text-blue-800 rounded-md">Medium</button>
                <button className="flex-1 p-2 bg-blue-100 text-blue-800 rounded-md">Detailed</button>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
              <h4 className="font-medium text-blue-800 mb-1">Recently Summarized</h4>
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-600">Physics 101 - Chapter 2</span>
                <span className="text-blue-500 underline cursor-pointer">View</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Generate Summary</Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="col-span-1"
      >
        <Card className="h-full border-blue-100 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Video className="w-5 h-5" />
              Generate Video
            </CardTitle>
            <CardDescription>Create video lessons from your course materials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">Source Material</label>
              <select className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Physics 101 - Gravity</option>
                <option>Chemistry - Periodic Table</option>
                <option>Biology - Cell Structure</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-800">Video Style</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-2 bg-blue-500 text-white rounded-md">Animated</button>
                <button className="p-2 bg-blue-100 text-blue-800 rounded-md">Slideshow</button>
              </div>
            </div>

            {generatingVideo ? (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Generating video...</span>
                  <span>{videoProgress}%</span>
                </div>
                <Progress value={videoProgress} className="h-2" />
              </div>
            ) : videoProgress === 100 ? (
              <div className="p-3 rounded-lg bg-green-50 border border-green-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-green-700">Video ready!</span>
                </div>
                <Button size="sm" variant="outline" className="h-8 gap-1 border-green-500 text-green-600">
                  <Play className="w-3 h-3" /> Play
                </Button>
              </div>
            ) : (
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-1">Recent Videos</h4>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-600">Chemistry Basics</span>
                  <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                    <Play className="w-3 h-3 text-blue-500" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleGenerateVideo}
              disabled={generatingVideo}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              {generatingVideo ? "Generating..." : "Generate Video"}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="col-span-1"
      >
        <Card className="h-full border-blue-100 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <PenTool className="w-5 h-5" />
              Take Notes
            </CardTitle>
            <CardDescription>AI-enhanced note-taking and organization</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="notes">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="notes">My Notes</TabsTrigger>
                <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
              </TabsList>
              <TabsContent value="notes" className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-blue-800">Physics - Force & Motion</h4>
                    <span className="text-xs bg-blue-200 text-blue-700 px-2 py-0.5 rounded-full">Today</span>
                  </div>
                  <p className="text-sm text-blue-600 line-clamp-2">
                    Newton's laws of motion describe the relationship between...
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-blue-800">Chemistry - Reactions</h4>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">2 days ago</span>
                  </div>
                  <p className="text-sm text-blue-600 line-clamp-2">
                    Chemical reactions involve the breaking and forming of bonds...
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="suggestions" className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <h4 className="font-medium text-blue-800">Study Suggestion</h4>
                  </div>
                  <p className="text-sm text-blue-600">Review Newton's Third Law before your upcoming quiz.</p>
                </div>

                <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <h4 className="font-medium text-blue-800">Connection Found</h4>
                  </div>
                  <p className="text-sm text-blue-600">
                    Your notes on energy conservation relate to Chapter 5 material.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Create New Note</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
