import { buildMetadata } from "@/lib/seo";
import PageBanner from "@/components/ui/PageBanner";

export const metadata = buildMetadata({
  title: "Quality Policy",
  description: "Sample Solution Ltd Quality Policy. Delivering excellence through ISO 9001:2015 certified processes and continuous improvement.",
  path: "/policy/quality/",
});

export default function QualityPolicyPage() {
  return (
    <>
      <PageBanner
        title="Quality Policy"
        subtitle="Uncompromising excellence and precision in industrial execution."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policy" },
          { label: "Quality Policy" },
        ]}
      />
      <section className="section-container py-20 max-w-4xl mx-auto prose prose-blue lg:prose-lg text-on-surface">
        <h2>Commitment to Excellence</h2>
        <p>
          Sample Solution Ltd is dedicated to delivering engineering, contracting, and industrial support services 
          that consistently meet or exceed the rigorous quality standards of our clients in Jubail and the Eastern Province.
        </p>
        
        <h2>Our Quality Principles</h2>
        <ul>
          <li><strong>Client Focus:</strong> Understanding current and future client needs, meeting client requirements, and striving to exceed expectations.</li>
          <li><strong>Leadership:</strong> Establishing unity of purpose and direction, creating an environment where people are fully engaged in achieving quality objectives.</li>
          <li><strong>Process Approach:</strong> Managing activities and related resources as a process to achieve desired results more efficiently.</li>
          <li><strong>Continuous Improvement:</strong> Making continual improvement of our overall performance a permanent organizational objective.</li>
        </ul>

        <h2>ISO 9001:2015 Certification</h2>
        <p>
          Our operations are underpinned by an ISO 9001:2015 certified Quality Management System (QMS). 
          This framework ensures that our processes—from initial procurement and engineering design to 
          construction execution and final commissioning—are controlled, measured, and continuously improved.
        </p>

        <h2>Vendor & Material Compliance</h2>
        <p>
          We mandate strict adherence to technical specifications, utilizing only approved vendors 
          and certified materials that comply with Saudi Aramco, SABIC, and Royal Commission engineering standards. 
          Our QA/QC department conducts rigorous inspections at all stages of project delivery.
        </p>
        
        <p className="font-bold mt-10">
          General Manager<br />
          Sample Solution Contracting & Services Ltd.
        </p>
      </section>
    </>
  );
}
