import { ServicePage } from "@/components/service-page"

export default function StartupAdvisoryPage() {
  return (
    <ServicePage
      title="Startup Advisory"
      subtitle="Financial infrastructure and scaling strategies for high-potential ventures."
      openingStatement="Scaling a venture requires more than just capital; it demands financial discipline and strategic foresight. We act as strategic partners to founders, implementing institutional-grade financial systems that support hyper-growth while mitigating burn-rate risks."
      whatWeDo={[
        "Strategic Business Planning & Modeling",
        "Unit Economics Optimization",
        "Cap Table Management & Scenario Analysis",
        "Fractional CFO Services",
        "Investor Readiness Preparation",
        "Governance & Compliance Frameworks"
      ]}
      howWeEngage={[
        "We partner with founders to translate visionary goals into actionable financial roadmaps.",
        "We establish rigorous KPI tracking to monitor growth efficiency and CAC/LTV dynamics.",
        "We provide fractional CFO oversight to manage cash runway and capital allocation.",
        "We prepare comprehensive data rooms and narratives for future funding rounds."
      ]}
      outcomes={[
        "Clear, defensible financial roadmap",
        "Institutional-grade investor readiness",
        "Optimized cash runway management",
        "Scalable operational infrastructure"
      ]}
    />
  )
}
g
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Funding strategy and investor relations
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Cap table management and equity planning
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Burn rate optimization and unit economics
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Scaling operations and governance
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
