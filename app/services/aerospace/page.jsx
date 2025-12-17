import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AerospacePage() {
  return (
    <main >
      <PageHero
        title="Aerospace Engineering Services"
        subtitle="Safety-critical software and electronics engineering services for avionics and space systems."
        bgImage="/images/hero/services/aerospace.jpg"
        dark
      />

      <Breadcrumbs />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-gray-700 text-lg max-w-4xl">
            Our aerospace engineering team delivers end-to-end services for
            avionics and space applications, supporting certification and
            compliance.
          </p>
        </div>
      </section>
    </main>
  );
}
