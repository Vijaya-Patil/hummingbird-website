import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <main >
      <PageHero
        title="Engineering Services"
        subtitle="End-to-end embedded systems, electronics, and testing services."
        bgImage="/images/hero/services.jpg"
        dark
      />

      <Breadcrumbs />
      <Services showAll />
    </main>
  );
}
