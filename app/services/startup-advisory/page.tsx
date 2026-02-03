import { ServicePage } from "@/components/service-page"

export default function StructuredFinancePage() {
  return (
    <ServicePage
      title="Structured Finance"
      subtitle="Leveraging cashflows and assets beyond traditional financing."
      description="<p>We help our clients efficiently leverage their cashflows and assets, beyond traditional sources of financing. This helps drive growth, delay dilution, enhance valuation and optimize overall cost of capital.</p>"
      whatWeDo="
        <p class='mb-4'>Structured finance solutions are offered to clients in unique situations – usually where growth in business or cycles is more sophisticated.</p>
        <p>Structured finance products are used when regular debt financing is not easily available. These products enable companies to delay equity dilution and at the same time offer upside to investors on increase in the future valuation of the Company.</p>
      "
      howWeEngage="
        <p class='mb-4'>Our solutions range from pure debt (mostly high yielding) to convertible securities and are tailored to match special needs of the business.</p>
        <p>We facilitate Structured Finance through various channels:</p>
        <ul class='list-disc pl-5 space-y-2'>
          <li>NBFCs (Non-Banking Financial Companies)</li>
          <li>Alternative Investment Funds (AIFs)</li>
          <li>Credit Funds</li>
          <li>Off-Shore Funds</li>
        </ul>
      "
      outcomes={[
        "Efficient leverage of cashflows and assets",
        "Delayed equity dilution",
        "Enhanced valuation",
        "Optimized overall cost of capital",
        "Access to sophisticated financing channels (AIFs, Credit Funds, etc.)"
      ]}
    />
  )
}
