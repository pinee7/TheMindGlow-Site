import { Card, CardContent } from "@/components/ui/card"
import { Brain, Globe, Shield, TrendingUp, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "From Words to Wisdom",
    description:
      "Your journal isn't just text, it's insight waiting to be unlocked.",
  },
  {
    icon: Globe,
    title: "A Listener, Not a Lecturer",
    description:
      "AI asks thoughtful questions that guide reflection instead of giving instant answers.",
  },
  {
    icon: Shield,
    title: "Emotionally Intelligent",
    description: "Detects mood and subtle shifts in your writing, offering personalized support.",
  },
  {
    icon: TrendingUp,
    title: "Actionable Care",
    description: "Every entry ends with a MindGym or MindBody exercise designed to reset your state.",
  },
  {
    icon: Users,
    title: "Safe & Private",
    description: "Your reflections are encrypted, never shared, always yours.",
  },
  {
    icon: Zap,
    title: "Built fot Real Life",
    description: "Practices take 1-10 minutes; designed to fit into any routine.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-[#C9F3DE] bg-clip-text text-transparent">
              Why TheMindGlow is Different
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another meditation app. We're building the future of culturally-aware mental wellness
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-[#C9F3DE]/50 to-[#C9F3DE] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  <span className="bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
                    {feature.title}
                  </span>
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
