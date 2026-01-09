"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDownIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline"

const services = [
  { name: "IPO Advisory & Readiness", href: "/services/ipo-advisory" },
  { name: "Fundraising Service", href: "/services/fundraising" },
  { name: "Private Equity", href: "/services/private-equity" },
  { name: "Merger & Acquisition", href: "/services/mergers-acquisitions" },
  { name: "Debt Syndication", href: "/services/debt-syndication" },
  { name: "Startup Advisory", href: "/services/startup-advisory" },
]

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [coreTeamOpen, setCoreTeamOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-lg" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo, Home, Services */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-bold text-lg text-dark-blue group-hover:text-blue-600 transition-colors">
                Blueberry
              </span>
            </Link>

            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>

            {/* Services Dropdown - Hover triggered */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition-colors">
                Services
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-border">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Core Team, Cart, Profile */}
          <div className="flex items-center gap-8">
            {/* Core Team Dropdown - Hover triggered */}
            <div
              className="relative group"
              onMouseEnter={() => setCoreTeamOpen(true)}
              onMouseLeave={() => setCoreTeamOpen(false)}
            >
              <button className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition-colors">
                Core Team
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${coreTeamOpen ? "rotate-180" : ""}`} />
              </button>

              {coreTeamOpen && (
                <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-xl border border-border">
                  <Link
                    href="/core-team"
                    className="block px-4 py-3 text-sm hover:bg-blue-50 transition-colors rounded-lg"
                  >
                    Team Members
                  </Link>
                </div>
              )}
            </div>

            <Link href="/cart" className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
              <ShoppingCartIcon className="w-6 h-6 text-foreground group-hover:text-primary" />
            </Link>

            {/* Profile Dropdown - Hover triggered */}
            <div
              className="relative group"
              onMouseEnter={() => setProfileOpen(true)}
              onMouseLeave={() => setProfileOpen(false)}
            >
              <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
                <UserIcon className="w-6 h-6 text-foreground group-hover:text-primary" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-xl border border-border">
                  <Link
                    href="/signin"
                    className="block px-4 py-3 text-sm hover:bg-blue-50 transition-colors rounded-t-lg"
                  >
                    Sign In
                  </Link>
                  <Link href="/signup" className="block px-4 py-3 text-sm hover:bg-blue-50 transition-colors">
                    Create Account
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-4 py-3 text-sm hover:bg-blue-50 transition-colors rounded-b-lg"
                  >
                    My Profile
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
