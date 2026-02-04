import { ServicePage } from "@/components/service-page"

export default function MergersAcquisitionsPage() {
  return (
    <ServicePage
      title="Mergers & Acquisitions (M&A) Advisory"
      subtitle="Helping businesses navigate their most critical strategic decisions."
      description="<p>We advise businesses on some of their most critical strategic decisions, supporting them through complex mergers, acquisitions, partnerships, and divestments.</p><p class='mt-4'>In an increasingly competitive and globalised environment, organisations often evaluate strategic options such as expanding capabilities through acquisitions, entering new markets via partnerships, or unlocking value through partial or complete exits. We work closely with boards and leadership teams to help them assess and execute these alternatives with clarity and confidence.</p>"
      whatWeDo="
        <h3 class='text-2xl font-serif text-[#0f2c59] mb-4'>Our Advisory Approach</h3>
        <p class='mb-4'>We provide independent, objective advice backed by deep transactional expertise. Our role is to act as a trusted partner to management and boards as they navigate high-impact decisions that shape the future of the organisation.</p>
        <p class='mb-4'>From early-stage strategy formulation to transaction closure, we support our clients by defining the right approach, evaluating opportunities, and structuring transactions that align with long-term business goals.</p>
        
        <h3 class='text-2xl font-serif text-[#0f2c59] mb-4 mt-8'>Transaction Strategy & Execution</h3>
        <p class='mb-4'>When advising on a merger, acquisition, or sale, we deliver end-to-end support that includes:</p>
        <ul class='list-disc pl-5 space-y-2 mb-4'>
            <li>Developing the overall M&A strategy</li>
            <li>Identifying and evaluating potential targets or buyers</li>
            <li>Assessing strategic and operational synergies</li>
            <li>Conducting valuation and financial analysis</li>
            <li>Evaluating and presenting financial and strategic alternatives</li>
        </ul>
        <p>We also advise on optimal transaction timing, structure, financing options, and pricing, while actively supporting negotiations and deal closure.</p>
      "
      howWeEngage="
        <div class='mb-10'>
            <h3 class='text-2xl font-serif text-[#0f2c59] mb-4'>Buy-Side & Sell-Side Advisory</h3>
            <p class='mb-4'>We offer comprehensive buy-side and sell-side advisory across a wide range of transaction types, including:</p>
            
            <div class='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <h4 class='text-xl font-medium text-[#0f2c59] mb-3'>M&A Strategy</h4>
                    <ul class='list-disc pl-5 space-y-1 mb-6 text-gray-700'>
                        <li>Strategic rationale for M&A</li>
                        <li>Market and sector attractiveness assessment</li>
                        <li>Synergy identification and value creation analysis</li>
                        <li>Target screening and prioritisation</li>
                    </ul>

                    <h4 class='text-xl font-medium text-[#0f2c59] mb-3'>Acquisitions</h4>
                    <ul class='list-disc pl-5 space-y-1 mb-6 text-gray-700'>
                        <li>Control and majority acquisitions</li>
                        <li>Minority stake investments</li>
                        <li>Asset purchases</li>
                    </ul>
                </div>
                
                <div>
                    <h4 class='text-xl font-medium text-[#0f2c59] mb-3'>Stake Sale & Divestment</h4>
                    <ul class='list-disc pl-5 space-y-1 mb-6 text-gray-700'>
                        <li>Partial stake monetisation</li>
                        <li>Spin-offs and demergers</li>
                        <li>Complete exits</li>
                    </ul>

                    <h4 class='text-xl font-medium text-[#0f2c59] mb-3'>Strategic Partnerships</h4>
                    <ul class='list-disc pl-5 space-y-1 mb-6 text-gray-700'>
                        <li>Strategic partnerships and alliances</li>
                        <li>Joint ventures and collaborative arrangements</li>
                    </ul>
                </div>
            </div>
        </div>
      "
    />
  )
}
