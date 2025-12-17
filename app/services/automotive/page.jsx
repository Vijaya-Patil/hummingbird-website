import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AutomotivePage() {
  return (
    <main>
      <PageHero
        title="Automotive Engineering Services"
        subtitle="Embedded software, electronics, and validation services for automotive systems."
        bgImage="/images/hero/services/automotive.jpg"
      />
      <Breadcrumbs />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <p className="text-gray-700 text-lg max-w-4xl">
            We provide automotive engineering services focused on embedded
            software, electronics design, and system integration for
            safety-critical and real-time automotive applications.
          </p>

          <ul className="mt-12 space-y-3 list-disc pl-6 text-gray-700">
            <li>Embedded software development on ARM, TI, PowerPC platforms</li>
            <li>CAN, SPI, UART, I2C, MODBUS, TCP/IP protocols</li>
            <li>Hardware board design & validation</li>
            <li>Functional testing & system integration</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
