import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Wind, BookOpen } from "lucide-react"

export default function MindGymScreen() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-teal-800 dark:text-teal-200">
        Mind Gym <span className="text-sm font-normal text-gray-500 dark:text-gray-400">| 心灵健身房</span>
      </h2>

      <div className="grid grid-cols-1 gap-4">
        <Card className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/50 dark:to-teal-800/30 border-none shadow-md overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              Confucian Reframing
            </CardTitle>
            <CardDescription>儒家思想重构</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Transform negative thoughts using ancient Confucian wisdom and principles of harmony.
            </p>
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
            <p className="text-sm">
              Practice present-moment awareness through Islamic traditions of contemplation and gratitude.
            </p>
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
            <p className="text-sm">Reduce stress and anxiety with guided breathing exercises that take just minutes.</p>
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
    </div>
  )
}
