"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f2c59] text-white w-full m-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3 sm:mb-4 group">
              <span className="font-bold text-base sm:text-lg">BlueberryFin Capital</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">Financial advisory for corporates and HNIs</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/core-team" className="text-white/70 hover:text-white transition-colors">
                  Core Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/ipo-advisory" className="text-white/70 hover:text-white transition-colors">
                  IPO Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/fundraising" className="text-white/70 hover:text-white transition-colors">
                  Fundraising
                </Link>
              </li>
              <li>
                <Link href="/services/debt-syndication" className="text-white/70 hover:text-white transition-colors">
                  Debt Syndication
                </Link>
              </li>
              <li>
                <Link href="/services/mergers-acquisitions" className="text-white/70 hover:text-white transition-colors">
                  M&A Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/private-equity" className="text-white/70 hover:text-white transition-colors">
                  Private Equity
                </Link>
              </li>
              <li>
                <Link href="/services/startup-advisory" className="text-white/70 hover:text-white transition-colors">
                  Startup Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/70">
          <p>&copy; {currentYear} BlueberryFin Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
