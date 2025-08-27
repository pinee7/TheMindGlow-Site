import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Smartphone, Monitor, Headphones } from "lucide-react"

export default function DemoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] bg-clip-text text-transparent">
              Experience TheMindGlow
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Step into a space where your thoughts matter. Write freely, reflect deeply, and discover new ways to handle
            challenges. Each journal entry ends with a short, tailored practice — from breathing and affirmations to
            mindful movement — so you leave lighter than you arrived.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="bg-gradient-to-br from-[#C9F3DE]/50 to-[#C9F3DE] rounded-2xl p-8 shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=600&text=Live+Demo+Interface"
                alt="TheMindGlow Demo Interface"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white shadow-lg">
                  <Play className="mr-2 h-6 w-6" />
                  Play Interactive Demo
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
                  Interactive Product Demo
                </span>
              </h3>
              <p className="text-gray-600 mb-6">
                Experience firsthand how TheMindGlow's AI analyzes journal entries, detects emotional patterns, and
                provides culturally-relevant wellness recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <Smartphone className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Mobile App</h4>
                  <p className="text-sm text-gray-600">iOS & Android</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <Monitor className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Web Platform</h4>
                  <p className="text-sm text-gray-600">Desktop & Tablet</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <Headphones className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Voice AI</h4>
                  <p className="text-sm text-gray-600">Coming Soon</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] hover:from-teal-600 hover:to-green-300 text-gray-900"
              >
                Schedule Live Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#C9F3DE] text-green-700 hover:bg-[#C9F3DE]/20 bg-transparent"
              >
                Download Beta App
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">Ready to Transform Mental Wellness?</h3>
          <p className="text-xl mb-8 text-gray-800">
            Join leading investors who are backing the future of AI-powered mental health.
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Request Investor Materials
          </Button>
        </div>
      </div>
    </section>
  )
}
