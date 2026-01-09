"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-blue text-white w-full m-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <span className="font-bold text-lg">Blueberry</span>
            </Link>
            <p className="text-white/70 text-sm">Financial advisory for corporates and HNIs</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/core-team" className="text-white/70 hover:text-white transition-colors">
                  Core Team
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
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
                <Link href="/services/private-equity" className="text-white/70 hover:text-white transition-colors">
                  Private Equity
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
          <p>&copy; {currentYear} Blueberry Financial Advisory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
