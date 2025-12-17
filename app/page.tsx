import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Certifications from "@/components/Certifications";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      
      <Industries />
      <WhyUs />
      <Certifications />
      <CTA />
    </>
  );
}
