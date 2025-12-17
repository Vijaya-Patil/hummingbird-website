import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PowerElectronicsPage() {
  return (
    <main>
      <PageHero
        title="Power Electronics Solutions"
        subtitle="DC–DC converters, static inverters, and power systems."
        bgImage="/images/hero/services/power-electronics.jpg"
        dark
      />
      <Breadcrumbs />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-gray-700 text-lg max-w-4xl">
            We deliver power electronics engineering solutions for industrial and
            transportation domains with a focus on efficiency, reliability, and
            lifecycle sustainability.
          </p>

          <ul className="mt-12 space-y-3 list-disc pl-6 text-gray-700">
            <li>DC–DC converter design</li>
            <li>Static inverter solutions</li>
            <li>Thermal & power analysis</li>
            <li>Production-ready hardware design</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
