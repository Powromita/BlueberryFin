"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  BriefcaseIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  RocketLaunchIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline"

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    bio: "15+ years in investment banking and financial advisory. Led transformative deals worth $10B+ across sectors.",
    expertise: ["Strategic Planning", "M&A", "IPO Advisory"],
    icon: BriefcaseIcon,
  },
  {
    name: "Priya Sharma",
    role: "Head of IPO Advisory",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    bio: "Led 50+ successful IPO transactions worth $5B+. Expert in regulatory compliance and market positioning.",
    expertise: ["IPO Readiness", "Compliance", "Investor Relations"],
    icon: ChartBarIcon,
  },
]

export default function CoreTeamPage() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <main className="min-h-screen bg-[#f5f0eb]">
      <Navbar />
      
      {/* Hero Section with Animated Background */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-[#0f2c59] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <UserGroupIcon className="w-16 h-16 sm:w-20 sm:h-20 text-[#2563eb] mx-auto" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 px-4">
              Meet Our Leadership
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              A team of seasoned professionals driving financial excellence for India's leading corporates and HNIs
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 text-blue-200 px-4"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">35+</div>
                <div className="text-xs sm:text-sm">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">$15B+</div>
                <div className="text-xs sm:text-sm">Deals Closed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">45+</div>
                <div className="text-xs sm:text-sm">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid with Staggered Animation */}
      <section ref={ref} className="py-12 sm:py-16 md:py-20 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0f2c59]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {teamMembers.map((member, idx) => {
              const Icon = member.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/0 to-[#0f2c59]/0 group-hover:from-[#2563eb]/10 group-hover:to-[#0f2c59]/10 transition-all duration-500 z-10 pointer-events-none" />
                    
                    {/* Image with icon overlay - NO ZOOM */}
                    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Icon badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: idx * 0.15 + 0.3, type: "spring" }}
                        className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Icon className="w-6 h-6 text-[#2563eb]" />
                      </motion.div>
                      
                      {/* Gradient overlay at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 sm:p-6 md:p-8 relative z-20">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0f2c59] mb-2 group-hover:text-[#2563eb] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[#2563eb] font-semibold mb-4 text-sm uppercase tracking-wide">
                        {member.role}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                        {member.bio}
                      </p>
                      
                      {/* Expertise tags - Always visible */}
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <div
                            key={i}
                            className="inline-block bg-[#f5f0eb] px-3 py-1.5 rounded-full text-xs font-medium text-[#0f2c59] border border-[#0f2c59]/20"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-1 bg-gradient-to-r from-[#2563eb] to-[#0f2c59] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="py-24 bg-gradient-to-br from-[#0f2c59] to-[#1e3a8a] relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Let our experienced team guide your journey to financial excellence
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[#0f2c59] px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-2xl"
            >
              Schedule a Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
