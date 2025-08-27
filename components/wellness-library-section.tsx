import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

const videoItems = [
  {
    id: 1,
    title: "Morning Yoga Flow",
    chineseTitle: "晨间瑜伽",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=180&width=320",
    category: "Yoga",
    instructor: "Sarah Chen",
  },
  {
    id: 2,
    title: "Mindful Breathing",
    chineseTitle: "正念呼吸",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=180&width=320",
    category: "Meditation",
    instructor: "Michael Wong",
  },
  {
    id: 3,
    title: "Stress Relief Meditation",
    chineseTitle: "减压冥想",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=180&width=320",
    category: "Meditation",
    instructor: "Emma Johnson",
  },
  {
    id: 4,
    title: "Bedtime Relaxation",
    chineseTitle: "睡前放松",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=180&width=320",
    category: "Relaxation",
    instructor: "David Liu",
  },
  {
    id: 5,
    title: "Desk Stretches",
    chineseTitle: "办公室伸展",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=180&width=320",
    category: "Yoga",
    instructor: "Olivia Park",
  },
  {
    id: 6,
    title: "Gratitude Practice",
    chineseTitle: "感恩练习",
    duration: "5-min",
    thumbnail: "/placeholder.svg?height=180&width=320",
    category: "Meditation",
    instructor: "James Zhang",
  },
]

export default function WellnessLibrarySection() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-medium text-teal-800 dark:text-teal-200">
          Wellness Library <span className="text-base font-normal text-gray-500 dark:text-gray-400">| 健康资源库</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search videos..."
              className="pl-10 bg-white/50 dark:bg-black/20 border-teal-100 dark:border-teal-900 w-full sm:w-64"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select className="pl-10 py-2 pr-4 rounded-md bg-white/50 dark:bg-black/20 border border-teal-100 dark:border-teal-900 w-full sm:w-40">
              <option>All Categories</option>
              <option>Yoga</option>
              <option>Meditation</option>
              <option>Relaxation</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        <Badge variant="outline" className="bg-white/50 dark:bg-black/20 cursor-pointer">
          All
        </Badge>
        <Badge variant="outline" className="bg-white/50 dark:bg-black/20 cursor-pointer">
          Yoga
        </Badge>
        <Badge variant="outline" className="bg-white/50 dark:bg-black/20 cursor-pointer">
          Meditation
        </Badge>
        <Badge variant="outline" className="bg-white/50 dark:bg-black/20 cursor-pointer">
          Relaxation
        </Badge>
        <Badge variant="outline" className="bg-white/50 dark:bg-black/20 cursor-pointer">
          Breathwork
        </Badge>
        <Badge variant="outline" className="bg-white/50 dark:bg-black/20 cursor-pointer">
          Sleep
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoItems.map((item) => (
          <Card
            key={item.id}
            className="bg-white/50 dark:bg-black/20 backdrop-blur-sm border-none shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-[180px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.chineseTitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-amber-500 hover:bg-amber-600">{item.duration}</Badge>
                    <button className="h-10 w-10 rounded-full bg-teal-500 hover:bg-teal-600 flex items-center justify-center transition-colors">
                      <Play className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Instructor: {item.instructor}</span>
                  <Badge variant="outline" className="bg-white/50 dark:bg-black/20">
                    {item.category}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button className="bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-600 hover:to-amber-600">
          Load More
        </Button>
      </div>
    </div>
  )
}
