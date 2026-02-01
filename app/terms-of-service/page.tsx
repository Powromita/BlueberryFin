import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#f5f0eb] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#0f2c59] mb-8 hover:text-[#2563eb] transition-colors font-medium"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f2c59] mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> January 2026
          </p>

          <h2 className="text-2xl font-bold text-[#0f2c59] mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing and using BlueberryFin Capital's services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-[#0f2c59] mt-8 mb-4">2. Services</h2>
          <p className="text-gray-600 mb-4">
            BlueberryFin Capital provides financial advisory services including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>IPO Advisory and Readiness</li>
            <li>Fundraising Services</li>
            <li>Debt Syndication</li>
            <li>Mergers and Acquisitions Advisory</li>
            <li>Private Equity Advisory</li>
            <li>Startup Advisory</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0f2c59] mt-8 mb-4">3. User Obligations</h2>
          <p className="text-gray-600 mb-6">
            You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>

          <h2 className="text-2xl font-bold text-[#0f2c59] mt-8 mb-4">4. Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            All content, features, and functionality of our services are owned by BlueberryFin Capital and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-[#0f2c59] mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            BlueberryFin Capital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
          </p>

          <h2 className="text-2xl font-bold text-[#0f2c59] mt-8 mb-4">6. Governing Law</h2>
          <p className="text-gray-600 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-[#0f2c59] mt-8 mb-4">7. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
          </p>

          <h2 className="text-2xl font-bold text-[#0f2c59] mt-8 mb-4">8. Contact Information</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms, please contact us at legal@blueberryfin.com
          </p>
        </div>
      </div>
    </main>
  )
}
