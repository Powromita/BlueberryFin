import { ServicePage } from "@/components/service-page"

export default function MergersAcquisitionsPage() {
  return (
    <ServicePage
      title="Mergers & Acquisitions"
      subtitle="Strategic consolidation and divestiture services for market leadership."
      openingStatement="In an era of rapid consolidation, M&A is a pivotal tool for corporate transformation. We navigate the complexities of buy-side and sell-side transactions with a focus on long-term value creation, ensuring rigorous due diligence and seamless integration."
      whatWeDo={[
        "Target Identification & Strategic Fit Analysis",
        "Valuation & Complex Deal Modeling",
        "Transaction Structuring & Tax Optimization",
        "Negotiation Strategy & Execution",
        "Due Diligence Coordination",
        "Post-Merger Integration Planning"
      ]}
      howWeEngage={[
        "We align M&A strategy with your broader corporate objectives to ensure accretive growth.",
        "We conduct exhaustive market scans to identify targets that offer genuine synergetic potential.",
        "We lead high-stakes negotiations to secure terms that protect shareholder value.",
        "We orchestrate the entire deal lifecycle, from LOI to closing and beyond."
      ]}
      outcomes={[
        "Accelerated market expansion",
        "Realized operational synergies",
        "Optimized capital allocation",
        "Enhanced competitive positioning"
      ]}
    />
  )
}
