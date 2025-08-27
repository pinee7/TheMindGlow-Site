import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import MarketSection from "@/components/market-section"
import DemoSection from "@/components/demo-section"
import CTASection from "@/components/cta-section"
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-amber-50 dark:from-teal-950 dark:to-amber-950 transition-colors duration-300">
        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          <HeroSection />
          <FeaturesSection />
          <MarketSection />
          <DemoSection />
          <CTASection />
        </main>

        {/* Footer */}
        <footer className="border-t border-teal-100 dark:border-teal-900 py-6 mt-12 bg-white/10 dark:bg-black/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-teal-700 dark:text-teal-300">MindGlow</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your AI-powered journaling platform for mental wellness and mindfulness.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-teal-700 dark:text-teal-300">Quick Links</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <a href="#" className="hover:text-teal-500 dark:hover:text-teal-400">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-500 dark:hover:text-teal-400">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-teal-500 dark:hover:text-teal-400">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-teal-700 dark:text-teal-300">Connect</h3>
                <div className="flex space-x-4 text-2xl text-gray-600 dark:text-gray-400">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/papillon_yogastudiohk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    <FaInstagram />
                  </a>
                  {/* Whatsapp */}
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    <FaWhatsapp />
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/papillon_yogastudiohk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-teal-100 dark:border-teal-900 text-center text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} MindGlow. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
