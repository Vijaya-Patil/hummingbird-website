import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function ProcessPage() {
  return (
    <main >
      <PageHero
        title="Our Engineering Process"
        subtitle="A structured, quality-driven lifecycle ensuring reliable and compliant systems."
        bgImage="/images/hero/process.png"
      />

      <Breadcrumbs />
      <ProcessTimeline showAll />
    </main>
  );
}
