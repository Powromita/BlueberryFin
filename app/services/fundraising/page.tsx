import { ServicePage } from "@/components/service-page"

export default function FundraisingPage() {
  return (
    <ServicePage
      title="Fundraising Service"
      subtitle="Securing Capital for Your Growth Journey"
      description="Secure the capital your business needs to grow and scale effectively. Our fundraising specialists have extensive networks and expertise across seed, Series A/B/C, and late-stage funding rounds. We connect you with the right investors, structure optimal deals, and maximize your funding potential while maintaining favorable terms and valuations."
      benefits={[
        "Seed and Series Funding Rounds",
        "Investor Identification and Outreach",
        "Term Sheet Negotiation",
        "Financial Modeling and Projections",
        "Due Diligence Support",
        "Post-Funding Strategic Guidance"
      ]}
    />
  )
}
