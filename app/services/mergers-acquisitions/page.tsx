import { ServicePage } from "@/components/service-page"

export default function MergersAcquisitionsPage() {
  return (
    <ServicePage
      title="M&A Advisory"
      subtitle="Strategic advice for your most important decisions and transactions."
      description="<p>We provide M&A advice and services to our clients on some of their most important strategic decisions and transactions.</p>"
      whatWeDo="
        <p class='mb-4'>We believe each situation is unique and has its own tailor-made solution. At Axcelus we provide you with such solutions.</p>
        <p>Our team brings an unparalleled 360-degree perspective, having worked in the corporate and banking industry, allowing us to offer unbiased, tactical, and strategic financial advice.</p>
      "
      howWeEngage="
        <p class='mb-4'>Our M&A advisory services cover the full spectrum of the transaction lifecycle:</p>
        <ul class='list-disc pl-5 space-y-2'>
          <li>Strategic assessment of M&A opportunities.</li>
          <li>Target identification and screening.</li>
          <li>Valuation and deal structuring.</li>
          <li>Negotiation and execution support.</li>
          <li>Integration planning.</li>
        </ul>
      "
      outcomes={[
        "Tailor-made solutions for unique strategic situations",
        "Unbiased, tactical advice from experienced dealmakers",
        "Impeccable transaction execution",
        "Highest standard of confidentiality and integrity",
        "Strategic value creation through successful M&A"
      ]}
    />
  )
}
