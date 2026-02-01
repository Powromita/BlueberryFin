import { ServicePage } from "@/components/service-page"
export default function StartupAdvisoryPage() 
{
  return (
    <ServicePage
      title="Startup Advisory"
      subtitle="Accelerating Growth for Emerging Companies"
      description="Accelerate growth with tailored financial strategies designed specifically for emerging companies. We understand the unique challenges startups face and provide practical, growth-oriented solutions that help you scale efficiently. From financial planning and fundraising strategy to cap table management and burn rate optimization, we guide you through every stage of your startup journey with expert advice and hands-on support."
      benefits={[
        "Financial Planning and Forecasting",
        "Funding Strategy and Investor Relations",
        "Cap Table Management and Equity Planning",
        "Burn Rate Optimization and Unit Economics",
        "Scaling Operations and Governance",
        "Strategic Growth Advisory"
      ]}
    />
  )
}
