import { ServicePage } from "@/components/service-page"

export default function IPOAdvisoryPage() {
  return (
    <ServicePage
      title="IPO Advisory & Readiness"
      subtitle="Navigating the complex transition from private enterprise to public entity with precision and strategic foresight."
      openingStatement="Going public is a transformative milestone that demands rigorous preparation, regulatory discipline, and a compelling equity story. We act as your strategic architects, ensuring every phase of the IPO lifecycle is executed with excellence."
      whatWeDo={[
        "Pre-IPO Readiness Assessment",
        "Capital Structure Optimization",
        "Regulatory Compliance & Governance",
        "Equity Story Development",
        "Roadshow Preparation",
        "Book Building Coordination"
      ]}
      howWeEngage={[
        "We begin with a diagnostic deep-dive to identify gaps in financial reporting and governance.",
        "Our team works alongside your leadership to craft an investment thesis that resonates with institutional investors.",
        "We coordinate with legal, audit, and banking partners to ensure a seamless filing process.",
        "We provide hands-on support during investor roadshows to maximize valuation."
      ]}
      outcomes={[
        "Successful listing with optimal valuation",
        "Robust governance framework",
        "Enhanced market credibility",
        "Sustainable post-IPO compliance"
      ]}
    />
  )
}
