"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUp, ClipboardList, BarChart3, Users, Clock, CheckCircle } from "lucide-react"

export function TeacherDashboard() {
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleUpload = () => {
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)
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
              <FileUp className="w-5 h-5" />
              Upload Course Material
            </CardTitle>
            <CardDescription>Upload PDFs, videos, or presentations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-blue-200 rounded-lg p-8 text-center hover:bg-blue-50 transition-colors cursor-pointer">
              <FileUp className="w-10 h-10 text-blue-400 mx-auto mb-2" />
              <p className="text-blue-600">Drag and drop files here or click to browse</p>
            </div>

            {uploadProgress > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading Physics_101.pdf</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button onClick={handleUpload} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Upload Files
            </Button>
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
              <ClipboardList className="w-5 h-5" />
              Assign Homework
            </CardTitle>
            <CardDescription>Create and manage assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Drafts</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-blue-800">Physics Quiz #3</h4>
                      <p className="text-sm text-blue-600">Due in 2 days</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Published</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <Users className="w-4 h-4 mr-1" /> 24 students assigned
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-blue-800">Lab Report</h4>
                      <p className="text-sm text-blue-600">Due in 5 days</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Published</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <Users className="w-4 h-4 mr-1" /> 18 students assigned
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="draft" className="space-y-3">
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-800">Final Exam</h4>
                      <p className="text-sm text-gray-600">Not scheduled</p>
                    </div>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">Draft</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Create New Assignment</Button>
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
              <BarChart3 className="w-5 h-5" />
              Student Progress
            </CardTitle>
            <CardDescription>Monitor performance and engagement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-blue-800 font-medium">Class Average</span>
                <span className="text-blue-800 font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />

              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-800 mb-1">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-medium">Completion</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">92%</p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-800 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">Engagement</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">4.2h</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-blue-800">Top Performers</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                  <span>Alex Johnson</span>
                  <span className="font-medium">95%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                  <span>Maria Garcia</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                  <span>James Wilson</span>
                  <span className="font-medium">89%</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-50">
              View Detailed Analytics
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
