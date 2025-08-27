import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Wind, BookOpen, Clock, BarChart } from "lucide-react"

export default function MindGymSection() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium text-teal-800 dark:text-teal-200">
          Mind Gym <span className="text-base font-normal text-gray-500 dark:text-gray-400">| 心灵健身房</span>
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
          <select className="bg-white/50 dark:bg-black/20 border border-teal-100 dark:border-teal-900 rounded px-2 py-1 text-sm">
            <option>Popular</option>
            <option>Newest</option>
            <option>Duration</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/50 dark:to-teal-800/30 border-none shadow-md overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              Confucian Reframing
            </CardTitle>
            <CardDescription>儒家思想重构</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Transform negative thoughts using ancient Confucian wisdom and principles of harmony. Learn to reframe
              challenges as opportunities for growth.
            </p>
            <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>10 minutes</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart className="h-3 w-3" />
                <span>Beginner friendly</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-teal-200 dark:border-teal-700 hover:bg-teal-100 dark:hover:bg-teal-800"
            >
              Start Practice
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/50 dark:to-amber-800/30 border-none shadow-md overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              Islamic Mindfulness
            </CardTitle>
            <CardDescription>伊斯兰正念</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Practice present-moment awareness through Islamic traditions of contemplation and gratitude. Discover
              peace through mindful reflection.
            </p>
            <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>15 minutes</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart className="h-3 w-3" />
                <span>Intermediate</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-amber-200 dark:border-amber-700 hover:bg-amber-100 dark:hover:bg-amber-800"
            >
              Start Practice
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/30 border-none shadow-md overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Wind className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Quick Breathwork
            </CardTitle>
            <CardDescription>快速呼吸练习</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Reduce stress and anxiety with guided breathing exercises that take just minutes. Perfect for quick breaks
              during a busy day.
            </p>
            <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>5 minutes</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart className="h-3 w-3" />
                <span>All levels</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-800"
            >
              Start Practice
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-medium text-teal-800 dark:text-teal-200 mb-6">Recommended for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/30 border-none shadow-md overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Mindful Journaling
              </CardTitle>
              <CardDescription>正念日记</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Learn techniques to journal with greater awareness and presence, enhancing the therapeutic benefits of
                your writing practice.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-800"
              >
                Start Practice
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/30 border-none shadow-md overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-green-600 dark:text-green-400" />
                Nature Connection
              </CardTitle>
              <CardDescription>自然连接</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Guided practices to help you reconnect with the natural world, even in urban environments, for improved
                wellbeing.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-green-200 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-800"
              >
                Start Practice
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
