import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { WhyBerger } from "@/components/home/WhyBerger";
import { ExpertisePreview } from "@/components/home/ExpertisePreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { CtaBanner } from "@/components/home/CtaBanner";
import { GoldDivider } from "@/components/shared/GoldDivider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <GoldDivider />
      <WhyBerger />
      <GoldDivider />
      <ExpertisePreview />
      <GoldDivider />
      <HowItWorks />
      <StatsSection />
      <GoldDivider />
      <TestimonialsSlider />
      <GoldDivider />
      <CtaBanner />
    </>
  );
}