import { ServicePage } from "@/components/service-page"

export default function FundraisingPage() {
  return (
    <ServicePage
      title="Fundraising"
      subtitle="Securing the right capital partners to fuel your growth ambitions and strategic initiatives."
      openingStatement="Capital raising is not just about funding; it is about finding partners who align with your vision. We leverage our extensive network of institutional investors, family offices, and venture capital firms to structure deals that drive long-term value."
      whatWeDo={[
        "Financial Modeling & Valuation",
        "Pitch Deck & IM Preparation",
        "Investor Targeting & Outreach",
        "Term Sheet Negotiation",
        "Due Diligence Management",
        "Deal Structuring"
      ]}
      howWeEngage={[
        "We assess your capital needs and determine the optimal mix of debt and equity.",
        "We refine your business narrative to highlight competitive advantages and growth potential.",
        "We manage the entire investor relations process, from initial contact to final closing.",
        "We advocate for your interests during negotiations to secure favorable terms."
      ]}
      outcomes={[
        "Access to diverse capital sources",
        "Favorable valuation and terms",
        "Strategic investor partnerships",
        "Accelerated growth trajectory"
      ]}
    />
  )
}
