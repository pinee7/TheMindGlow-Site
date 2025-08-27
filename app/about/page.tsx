import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent">
              About TheMindGlow
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make mental wellness accessible, culturally relevant, and AI-powered for everyone,
            everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
                Our Story
              </span>
            </h2>
            <p className="text-gray-600 italic mb-6 leading-relaxed">
              People often ask: How is this different from ChatGPT?
              <br />
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Traditional AI tools answer questions. They solve problems rationally — but they rarely help us{" "}
              <span className="font-bold">rethink, reflect, or process emotions</span>. With AI, we tend to stay
              factual, less vulnerable, less human.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Journals are different. In journaling, we describe our day in our own words, revealing feelings, thoughts,
              and values. By analyzing those words, TheMindGlow helps you{" "}
              <span className="font-bold">see patterns you didn't notice</span>, and then asks the right questions so
              you can think deeper, from new angles, and eventually rewire how you respond to life's difficulties.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is bold yet simple: to lower anxiety, depression, and even suicide rates by giving people what
              they most need in critical moments — a listener, a gentle adviser, and a safe space that reminds them
              they're not alone.
            </p>
          </div>
          <div>
            <img
              src="/placeholder.svg?height=400&width=500&text=Company+Story+Visual"
              alt="TheMindGlow Story"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Card className="border-none shadow-lg text-center">
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-teal-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent">50K+</span>
              </h3>
              <p className="text-gray-600">Active Users</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-teal-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent">15</span>
              </h3>
              <p className="text-gray-600">Countries</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-teal-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent">73%</span>
              </h3>
              <p className="text-gray-600">Improvement Rate</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-teal-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent">4.8★</span>
              </h3>
              <p className="text-gray-600">App Store Rating</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
                Compassion without judgement
              </h3>
              <p className="text-gray-600">Every word matters; every feeling deserves space.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
                Empowerment through reflection
              </h3>
              <p className="text-gray-600">We believe people already hold wisdom within; our role is to surface it.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
                Care in critical moments
              </h3>
              <p className="text-gray-600">
                By guiding people at their most vulnerable times, we restore hope and resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
