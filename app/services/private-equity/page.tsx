import { ServicePage } from "@/components/service-page"

export default function PrivateEquityPage() {
  return (
    <ServicePage
      title="Private Equity Advisory"
      subtitle="Positioning clients to attract the right investors for long-term partnerships."
      description="<p>We are passionate about attractively positioning our clients, deriving true value and attracting the right Private Equity investors to ensure a long-term partnership.</p>"
      whatWeDo="
        <p class='mb-4'>We provide independent advisory services to our client companies and position them in the best manner to the appropriate funds.</p>
        <p>Our comprehensive understanding of the deal process and project management skills enable us to deliver closure of capital raise in a timely manner with a complete understanding of risks, tasks, timing, and integration related aspects of a transaction.</p>
      "
      howWeEngage="
        <p class='mb-4'>Our approach is focused on end-to-end deal execution advisory and support:</p>
        <ul class='list-disc pl-5 space-y-2'>
          <li>Identification of Investors based on their investment strategy.</li>
          <li>Strategic positioning of the client to maximize valuation.</li>
          <li>Complete project management of the deal process.</li>
          <li>Post-investment engagement with investee companies.</li>
        </ul>
      "
      outcomes={[
        "Access to the right Private Equity investors",
        "Maximization of true business value",
        "Timely closure of capital raise",
        "Long-term partnership focus",
        "Comprehensive risk and integration management"
      ]}
    />
  )
}
