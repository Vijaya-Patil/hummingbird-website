import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import Industries from "@/components/Industries";

export default function IndustriesPage() {
  return (
    <main >
      <PageHero
        title="Industries We Serve"
        subtitle="Engineering solutions for aerospace, automotive, railway, and industrial domains."
        bgImage="/images/hero/industries.jpg"
        dark
      />

      <Breadcrumbs />
      <Industries showAll />
    </main>
  );
}
