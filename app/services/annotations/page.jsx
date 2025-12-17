import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AnnotationsPage() {
  return (
    <main>
      <PageHero
        title="Annotation Services"
        subtitle="Accurate and scalable data annotation services."
        bgImage="/images/hero/services/annotations.jpg"
        dark
      />
      <Breadcrumbs />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ul className="list-disc pl-6 space-y-3">
            <li>Image, video & text annotation</li>
            <li>High-quality QA-driven workflows</li>
            <li>Scalable annotation pipelines</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
