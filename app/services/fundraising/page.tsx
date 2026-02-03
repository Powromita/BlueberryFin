import { ServicePage } from "@/components/service-page"

export default function FinancialAdvisoryPage() {
  return (
    <ServicePage
      title="Financial Advisory"
      subtitle="Strategic advice to ascertain true value and readiness for capital raise."
      description="<p>We advise our clients on strategic and financial matters to ascertain true value of the business, readiness for capital raise and the most appropriate source of capital. We analyze financial matters to ascertain the life-cycle of the business.</p>"
      whatWeDo="
        <p class='mb-4'>We offer unbiased, tactical, strategic financial advice and investment banking services to our clients through our deep knowledge and expertise across industries.</p>
        <p>Our goal is to help clients achieve their corporate finance priorities by offering comprehensive, integrated capital advisory services.</p>
      "
      howWeEngage="
        <p class='mb-4'>We work with our clients through all phases of the business cycle through expert capabilities in Financing, M&A and Capital Markets.</p>
        <ul class='list-disc pl-5 space-y-2'>
          <li><strong>Client First:</strong> We focus on long term relationships through trusted, innovative and independent advice.</li>
          <li><strong>Customized Solutions:</strong> We believe each situation is unique and provide tailor-made solutions.</li>
          <li><strong>Wealth Of Experience:</strong> We bring an unparalleled 360-degree perspective from corporate and banking industries.</li>
          <li><strong>Unbiased Advice:</strong> We advise on the most suitable source of capital and strategic alliances.</li>
        </ul>
      "
      outcomes={[
        "Unbiased, strategic financial advice",
        "Accurate ascertainment of business value",
        "Readiness for capital raising",
        "Identification of the most appropriate source of capital",
        "Long-term committed partnership"
      ]}
    />
  )
}
