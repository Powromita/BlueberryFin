import { ServicePage } from "@/components/service-page"

export default function DebtSyndicationPage() {
  return (
    <ServicePage
      title="Debt Syndication"
      subtitle="End-to-end debt financing solutions customized for your business needs."
      description="<p>We offer customized integrated product solutions attuned to the business needs of our clients.</p>"
      whatWeDo="
        <p class='mb-4'>We advise our clients on the most suitable debt financing alternatives for meeting the Company’s short-term and long-term funding requirements. We advise on the right debt strategy and appropriate instruments to reduce the cost of funds while negotiating appropriate financial covenants.</p>
        <p>Whether the fundraiser is through ECBs, NCDs, or any complex instruments, we are committed to guiding our clients through the regulatory as well as operational aspects of the transaction.</p>
      "
      howWeEngage="
        <p class='mb-4'>We attain this by approaching a wide spectrum of Lenders and Investors and supporting our clients through end-to-end deal execution process involving:</p>
        <ul class='list-disc pl-5 space-y-2 mb-4'>
          <li>Preparation of marketing material</li>
          <li>Negotiating a term sheet</li>
          <li>Loan documentation</li>
          <li>Pre-disbursement formalities</li>
          <li>Post-deal support</li>
        </ul>
        <p class='mb-4'>We further also assist the company through the credit rating process, especially when the businesses are looking for debt financing in early stages of the business, by helping the company in selecting the appropriate rating agency, representing the company to the rating agencies and driving the dialogue for attaining the appropriate rating.</p>
        <p>We are also committed to maintaining relationships with key lenders and investors post-execution of the transaction.</p>
      "
      outcomes={[
        "Customized integrated product solutions attuned to business needs",
        "Access to a wide spectrum of Lenders and Investors",
        "Reduction in cost of funds through right debt strategy",
        "End-to-end support from marketing to post-deal relationship management",
        "Expert assistance with credit rating processes"
      ]}
    />
  )
}
