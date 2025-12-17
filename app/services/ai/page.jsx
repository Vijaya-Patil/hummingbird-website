import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AIPage() {
  return (
    <main>
      <PageHero
        title="Artificial Intelligence Services"
        subtitle="AI-enabled engineering services for intelligent systems."
        bgImage="/images/hero/services/ai.jpg"
        dark
      />
      <Breadcrumbs />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-700 max-w-3xl">
            Our AI services support data-driven applications through annotation,
            model validation, and deployment pipelines.
          </p>

          <ul className="mt-8 space-y-3 list-disc pl-6">
            <li>Data annotation & preparation</li>
            <li>Model validation support</li>
            <li>AI workflow integration</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
