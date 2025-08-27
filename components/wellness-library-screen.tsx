import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

const videoItems = [
  {
    id: 1,
    title: "Morning Yoga Flow",
    chineseTitle: "晨间瑜伽",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=120&width=200",
    category: "Yoga",
  },
  {
    id: 2,
    title: "Mindful Breathing",
    chineseTitle: "正念呼吸",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=120&width=200",
    category: "Meditation",
  },
  {
    id: 3,
    title: "Stress Relief Meditation",
    chineseTitle: "减压冥想",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=120&width=200",
    category: "Meditation",
  },
  {
    id: 4,
    title: "Bedtime Relaxation",
    chineseTitle: "睡前放松",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=120&width=200",
    category: "Relaxation",
  },
  {
    id: 5,
    title: "Desk Stretches",
    chineseTitle: "办公室伸展",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=120&width=200",
    category: "Yoga",
  },
  {
    id: 6,
    title: "Gratitude Practice",
    chineseTitle: "感恩练习",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=120&width=200",
    category: "Meditation",
  },
]

export default function WellnessLibraryScreen() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-teal-800 dark:text-teal-200">
          Wellness Library <span className="text-sm font-normal text-gray-500 dark:text-gray-400">| 健康资源库</span>
        </h2>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-white/50 dark:bg-black/20">
            All
          </Badge>
          <Badge variant="outline" className="bg-white/50 dark:bg-black/20">
            Yoga
          </Badge>
          <Badge variant="outline" className="bg-white/50 dark:bg-black/20">
            Meditation
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videoItems.map((item) => (
          <Card
            key={item.id}
            className="bg-white/50 dark:bg-black/20 backdrop-blur-sm border-none shadow-md overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-[120px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-white/80 text-xs">{item.chineseTitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-amber-500 hover:bg-amber-600">{item.duration}</Badge>
                    <button className="h-8 w-8 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center">
                      <Play className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
