import PageHero from "@/components/PageHero";
import StatsCounter from "@/components/StatsCounter";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhyUs from "@/components/WhyUs";
import CertificatesPDF from "@/components/CertificatesPDF";
import MissionVision from "@/components/MissionVision";
import LeadershipTeam from "@/components/LeadershipTeam";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Hummingbird Tek Systems"
        subtitle="A trusted engineering partner delivering embedded and electronics solutions."
        bgImage="/images/hero/about.jpg"
        dark
      />

      <Breadcrumbs />

      <MissionVision />

      <StatsCounter />

      <WhyUs showAll />

      <LeadershipTeam />

      <CertificatesPDF />
    </main>
  );
}
