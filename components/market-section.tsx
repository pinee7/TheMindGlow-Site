import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Target, TrendingUp } from "lucide-react"

export default function MarketSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#C9F3DE]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] bg-clip-text text-transparent border-none">
              How MindGlow Helps You
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The digital mental health market is experiencing unprecedented growth, with cultural inclusivity as the next
            frontier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-[#C9F3DE]/50 to-[#C9F3DE] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] bg-clip-text text-emerald-300">
                  AI Listener
                </span>
              </h3>
              <p className="text-gray-600">Empathetic support that truly hears you</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-[#C9F3DE]/50 to-[#C9F3DE] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] bg-clip-text text-transparent">
                  AI Advisor
                </span>
              </h3>
              <p className="text-gray-600">Personalized steps for clarity & growth</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-[#C9F3DE]/50 to-[#C9F3DE] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] bg-clip-text text-transparent">
                  Wellness Hub
                </span>
              </h3>
              <p className="text-gray-600">Connect with therapists, coaches & resources</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
                  Our Competitive Advantage
                </span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#C9F3DE]/50 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Deeper than ChatGPT</h4>
                    <p className="text-gray-600">
                      Instead of quick answers, we encourage re-thinking, re-framing, and processing emotions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#C9F3DE]/50 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Emotion over information</h4>
                    <p className="text-gray-600">
                      Journals reveal feelings and values that generic Q&A tools never capture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#C9F3DE]/50 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prevention, not just cure</h4>
                    <p className="text-gray-600">
                      Spot early signals of stress, anxiety, or burnout and guide users before crisis escalates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=300&width=400&text=Market+Growth+Chart"
                alt="Market Growth Visualization"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
