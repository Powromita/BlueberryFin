import { ServicePage } from "@/components/service-page"

export default function DebtSyndicationPage() {
  return (
    <ServicePage
      title="Debt Syndication"
      subtitle="Optimized Capital Structures"
      description="We provide end-to-end Debt Syndication Services, structuring optimized debt solutions for your specific capital needs. We tap into our extensive network of lenders, including banks and financial institutions, to secure competitive terms for project finance, working capital optimization, and structured debt products. Our focused approach ensures efficient capital structure management, lowering your cost of capital while ensuring liquidity for operations and expansion."
      benefits={[
        "Project Finance Structuring",
        "Working Capital Loans",
        "Term Loan Syndication",
        "Structured Debt Products",
        "Refinancing Solutions",
        "Relationship Management with Lenders"
      ]}
    />
  )
}
