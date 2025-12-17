import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function IoTPage() {
  return (
    <main>
      <PageHero
        title="Industry 4.0 & IoT Solutions"
        subtitle="Smart, connected solutions for industrial automation."
        bgImage="/images/hero/services/iot.jpg"
        dark
      />
      <Breadcrumbs />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ul className="space-y-3 list-disc pl-6">
            <li>Embedded & IoT device integration</li>
            <li>LTE, NB-IoT, BLE, Wi-Fi connectivity</li>
            <li>Industrial monitoring & control</li>
            <li>Cloud and edge system integration</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
