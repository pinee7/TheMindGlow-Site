import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar, FileText } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#C9F3DE]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] bg-clip-text text-transparent">
              Partner With Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in revolutionizing mental wellness. We're seeking strategic investors and partners who share our
            vision of culturally-inclusive AI-powered healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-[#C9F3DE]/50 to-[#C9F3DE] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investor Deck</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive pitch deck with market analysis, financial projections, and growth strategy.
              </p>
              <Button className="w-full bg-gradient-to-r from-teal-500 to-[#C9F3DE] hover:from-teal-600 hover:to-green-300 text-gray-900">
                Download Deck
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-[#C9F3DE]/50 to-[#C9F3DE] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule Meeting</h3>
              <p className="text-gray-600 mb-6">
                Book a personalized demo and discussion with our founding team about investment opportunities.
              </p>
              <Button
                variant="outline"
                className="w-full border-[#C9F3DE] text-green-700 hover:bg-[#C9F3DE]/20 bg-transparent"
              >
                Book Meeting
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-r from-[#C9F3DE]/50 to-[#C9F3DE] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Updates</h3>
              <p className="text-gray-600 mb-6">
                Stay informed about our progress, milestones, and upcoming funding rounds.
              </p>
              <Button
                variant="outline"
                className="w-full border-[#C9F3DE] text-green-700 hover:bg-[#C9F3DE]/20 bg-transparent"
              >
                Subscribe
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
              Investment Highlights
            </span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] bg-clip-text text-transparent">$2.5M</span>
              </div>
              <div className="text-sm text-gray-600">Series A Target</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] bg-clip-text text-transparent">
                  18 Months
                </span>
              </div>
              <div className="text-sm text-gray-600">Runway Extension</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] bg-clip-text text-transparent">5x</span>
              </div>
              <div className="text-sm text-gray-600">Projected ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] bg-clip-text text-transparent">
                  Q2 2025
                </span>
              </div>
              <div className="text-sm text-gray-600">Break-even Target</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
