import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";

export default function ContactPage() {
  return (
    <main >
      <PageHero
        title="Contact Us"
        subtitle="Let’s discuss your engineering requirements and collaboration opportunities."
        bgImage="/images/hero/contact.jpg"
      />

      <Breadcrumbs />
      <CTA />
    </main>
  );
}
