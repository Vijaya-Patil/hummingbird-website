import PageHero from "@/components/PageHero";
import CareersIntro from "@/components/CareersIntro";
import JobOpenings from "@/components/JobOpenings";
import ReferralProgram from "@/components/ReferralProgram";
import CareersApply from "@/components/CareersApply";

export default function CareersPage() {
  return (
    <main >
      <PageHero
        title="Careers at Hummingbird Tek Systems"
        subtitle="Build your career with a trusted engineering partner delivering safety-critical and embedded solutions."
        bgImage="/images/hero/careers.jpg"
        dark
      />

      <CareersIntro />
      <JobOpenings />
      <ReferralProgram />
      <CareersApply />
    </main>
  );
}
