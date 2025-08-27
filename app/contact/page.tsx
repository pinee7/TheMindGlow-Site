import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to learn more about TheMindGlow? We'd love to hear from investors, partners, and potential
            collaborators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-8">
              <span className="bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
                Contact Information
              </span>
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-teal-100 to-amber-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">hello@themindglow.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-teal-100 to-amber-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+ 852 9381 4543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-teal-100 to-amber-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Unit 906, 9/F,
                    <br />
                    Kai Wong Commercial Building,
                    <br />
                    No 222 Queen's Road Central,
                    <br />
                    Sheung Wan, Hong Kong
                    <br />
                    上環皇后大道中222號
                    <br />
                    啟煌商業大廈9樓906室
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-teal-100 to-amber-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Opening Hours</h3>
                  <p className="text-gray-600">
                    Mon - Fri: 8:00 AM - 9:30 PM
                    <br />
                    Sat: 9:15 AM - 4 PM
                    <br />
                    Sun: 10:05 AM - 6:30 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-amber-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                  Schedule a Demo
                </span>
              </h3>
              <p className="mb-6 opacity-90">
                Book a personalized demo with our team to see TheMindGlow in action and discuss investment
                opportunities.
              </p>
              <Button className="bg-white text-gray-900 hover:bg-gray-100">Book Meeting</Button>
            </div>
          </div>

          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-600 to-green-500 bg-clip-text text-transparent">
                  Send us a message
                </span>
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <Input placeholder="Your Company" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I'm interested in</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option>Investment Opportunities</option>
                    <option>Partnership</option>
                    <option>Product Demo</option>
                    <option>Press Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us more about your interest in TheMindGlow..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-teal-600 to-amber-600 hover:from-teal-700 hover:to-amber-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
