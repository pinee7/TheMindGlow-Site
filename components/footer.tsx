import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-[#C9F3DE] bg-clip-text text-transparent mb-4">
              TheMindGlow
            </h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing mental wellness through AI-powered, culturally-aware technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#C9F3DE] transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C9F3DE] transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C9F3DE] transition-colors">
                Medium
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Investors</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/investor-deck" className="text-gray-400 hover:text-white transition-colors">
                  Investor Deck
                </Link>
              </li>
              <li>
                <Link href="/financials" className="text-gray-400 hover:text-white transition-colors">
                  Financials
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-gray-400 hover:text-white transition-colors">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-400 hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TheMindGlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
