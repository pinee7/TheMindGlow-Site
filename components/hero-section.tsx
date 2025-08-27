"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#C9F3DE] to-green-50 py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-[#C9F3DE]/50 text-green-800 rounded-full text-sm font-medium mb-6">
              🌱 Your AI-Powered Wellness Companion
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-teal-400 to-[#9CDED0] bg-clip-text text-transparent">
                Revolutionizing Mental Wellness
              </span>
              <br />
              <span className="text-gray-700"> with AI</span>
            </h1>

            <p className="text-xl mb-8 leading-relaxed">
              <span className="bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent font-medium">
                A private, judgment-free space where journaling becomes a conversation — helping you uncover clarity, calm, and resilience through AI-guided reflection.
              </span>
              <span className="text-gray-600 italic font-semibold"> Listen to yourself. Glow from within </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] hover:from-teal-600 hover:to-green-300 text-gray-900"
              >
                View Investor Deck
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#C9F3DE] text-green-700 hover:bg-[#C9F3DE]/20 bg-transparent"
                onClick={() => window.open("https://www.papillonyoga.com/", "_blank")}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Website
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Journals Written</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">5 Languages</div>
                <div className="text-sm text-gray-600">Culturally Adapted</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4.8★</div>
                <div className="text-sm text-gray-600">Loved by Early Users</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="/placeholder.svg?height=400&width=300&text=MindGlow+App+Preview"
                alt="TheMindGlow App Preview"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-[#C9F3DE] text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
              Live Demo Available
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
