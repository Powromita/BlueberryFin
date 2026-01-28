import { ServicePage } from "@/components/service-page"

export default function DebtSyndicationPage() {
  return (
    <ServicePage
      title="Debt Syndication"
      subtitle="Optimized leverage strategies for sustainable growth and liquidity."
      openingStatement="Capital structure efficiency is the bedrock of operational resilience. We architect bespoke debt solutions, bridging the gap between corporate borrowers and a global network of institutional lenders to secure favorable terms and structural flexibility."
      whatWeDo={[
        "Debt Capacity & Sensitivity Analysis",
        "Term Loan & Working Capital Syndication",
        "Project Finance Structuring",
        "Covenant Negotiation & Advisory",
        "Mezzanine & Structured Debt",
        "Refinancing & Balance Sheet Restructuring"
      ]}
      howWeEngage={[
        "We rigorously stress-test cash flows to determine the optimal debt quantum and structure.",
        "We curate a comprehensive information memorandum that articulates the credit story effectively.",
        "We leverage deep relationships with banks and credit funds to drive competitive tension.",
        "We manage the end-to-end documentation process to ensure covenant flexibility."
      ]}
      outcomes={[
        "Reduced weighted average cost of capital",
        "Enhanced liquidity buffers",
        "Diversified lender consortium",
        "Operational flexibility via optimized covenants"
      ]}
    />
  )
}
