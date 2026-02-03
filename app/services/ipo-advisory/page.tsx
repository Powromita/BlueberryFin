import { ServicePage } from "@/components/service-page"

export default function IPOAdvisoryPage() {
  return (
    <ServicePage
      title="IPO Advisory"
      subtitle="In-depth, meticulous, and result-oriented capital markets advisory."
      description="<p>Our IPO and Capital Markets advisory services are in-depth, meticulous and result oriented, with unparallel excellence in timeliness and quality of execution capabilities throughout the life-cycle of a transaction.</p>"
      whatWeDo="
        <p class='mb-4'>For companies seeking to raise capital from the public capital markets for the first time, it is highly beneficial to have an experienced financial advisor on their team during the entire process.</p>
        <p>When an organization decides to pursue an IPO, at each critical stage, our team acts as a reliable partner providing independent capital markets advice through the entire IPO execution.</p>
      "
      howWeEngage="
        <p class='mb-4'>Preparation for successful IPOs start early and takes time. Our engagement typically involves:</p>
        <ul class='list-disc pl-5 space-y-2 mb-4'>
          <li><strong>Pre-IPO Assessment:</strong> Evaluating the company’s growth prospects, financial standing, funding requirements and strategic plans to identify readiness.</li>
          <li><strong>Strategy & Timing:</strong> Deciding on the best time for IPO launch depending on the market situation.</li>
          <li><strong>Structuring & Pricing:</strong> Execution of IPO strategy – transaction structuring and pricing.</li>
          <li><strong>Documentation & Compliance:</strong> Advising on key clauses in the initial prospectus (red herring), quantum of issue, promoter’s share, and price range.</li>
          <li><strong>Stakeholder Management:</strong> Working with the Merchant Banker in making submissions to the stock exchange.</li>
        </ul>
      "
      outcomes={[
        "Independent, unbiased capital markets advice",
        "Detailed IPO readiness assessment",
        "Strategic timing and pricing for maximum value",
        "Seamless coordination with Merchant Bankers and regulatory bodies",
        "Refined corporate presentation for investor engagement"
      ]}
    />
  )
}
