import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function MedicalDevicesPage() {
  return (
    <main>
      <PageHero
        title="Medical Devices Engineering"
        subtitle="Reliable engineering services for medical technologies."
        bgImage="/images/hero/services/medical.jpg"
        dark
      />
      <Breadcrumbs />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ul className="list-disc pl-6 space-y-3">
            <li>Embedded software & electronics</li>
            <li>Verification & validation</li>
            <li>Regulatory compliance support</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
