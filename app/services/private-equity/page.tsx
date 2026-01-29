import { ServicePage } from "@/components/service-page"

export default function PrivateEquityPage() {
  return (
    <ServicePage
      title="Private Equity"
      subtitle="Unlocking value through strategic investments and operational excellence."
      openingStatement="In the high-stakes world of private equity, precision and speed are paramount. We assist PE firms and portfolio companies in identifying opportunities, executing transactions, and driving operational improvements to maximize returns."
      whatWeDo={[
        "Deal Sourcing & Screening",
        "Commercial Due Diligence",
        "Portfolio Management",
        "Exit Strategy Planning",
        "Value Creation Plans",
        "Add-on Acquisition Support"
      ]}
      howWeEngage={[
        "We act as an extension of your deal team, providing rigorous analysis and market insights.",
        "We assist in post-acquisition integration to realize synergies quickly.",
        "We monitor portfolio performance and recommend strategic pivots when necessary.",
        "We prepare assets for exit to ensure maximum realization of value."
      ]}
      outcomes={[
        "High-quality deal flow",
        "Risk-mitigated investment decisions",
        "Operational efficiency gains",
        "Superior IRR and MOIC"
      ]}
    />
  )
}
