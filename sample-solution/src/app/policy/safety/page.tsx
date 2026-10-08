import { buildMetadata } from "@/lib/seo";
import PageBanner from "@/components/ui/PageBanner";

export const metadata = buildMetadata({
  title: "Health, Safety & Environment Policy",
  description: "Sample Solution Ltd HSE Policy. We are committed to achieving ZERO incidents across all operations in Jubail and the Eastern Province.",
  path: "/policy/safety/",
});

export default function SafetyPolicyPage() {
  return (
    <>
      <PageBanner
        title="Health, Safety & Environment Policy"
        subtitle="Our commitment to ZERO incidents and sustainable industrial operations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policy" },
          { label: "Safety Policy" },
        ]}
      />
      <section className="section-container py-20 max-w-4xl mx-auto prose prose-blue lg:prose-lg text-on-surface">
        <h2>Statement of Commitment</h2>
        <p>
          Sample Solution Ltd considers Health, Safety, and Environment (HSE) as a core business value. 
          Operating in demanding industrial environments across Jubail Industrial City and the Eastern Province, 
          we are unequivocally committed to the protection of our employees, clients, subcontractors, 
          and the communities in which we operate.
        </p>
        
        <h2>Our Objectives</h2>
        <ul>
          <li><strong>Zero Harm:</strong> Eliminate workplace injuries and occupational illnesses.</li>
          <li><strong>Compliance:</strong> Comply strictly with the Royal Commission for Jubail & Yanbu (RCJY) regulations, Saudi Aramco standards, and national laws.</li>
          <li><strong>Environmental Stewardship:</strong> Minimize our environmental footprint through responsible waste management, emission control, and resource conservation.</li>
        </ul>

        <h2>Implementation Strategies</h2>
        <p>
          We implement our HSE Policy through a robust, ISO 45001-certified management system that includes:
        </p>
        <ul>
          <li>Continuous hazard identification and risk assessment (HIRA) for all activities.</li>
          <li>Comprehensive mandatory HSE training and daily toolbox talks for all personnel.</li>
          <li>Empowering every employee with the <strong>"Stop Work Authority"</strong> for any unsafe act or condition.</li>
          <li>Rigorous incident reporting, investigation, and root-cause analysis to prevent recurrence.</li>
          <li>Regular audits and inspections by certified safety professionals.</li>
        </ul>

        <h2>Management Responsibility</h2>
        <p>
          The executive management team is accountable for providing the necessary resources, 
          leadership, and active participation to sustain our safety culture. We expect every manager, 
          supervisor, and worker to demonstrate visible safety leadership and personal accountability.
        </p>
        
        <p className="font-bold mt-10">
          General Manager<br />
          Sample Solution Contracting & Services Ltd.
        </p>
      </section>
    </>
  );
}
