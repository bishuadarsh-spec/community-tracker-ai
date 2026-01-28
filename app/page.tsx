import { AnimatedHero } from "@/components/animated-hero";
import { ProjectManagementSection } from "@/components/project-management-section";
import { FinancialManagementSection } from "@/components/financial-management-section";
import { FeaturesGridSection } from "@/components/features-grid-section";
import { TestimonialsAnimated } from "@/components/testimonials-animated";
import { PricingSectionDreelio } from "@/components/pricing-section-dreelio";
import { CommunitySection } from "@/components/community-section";
import { CTASection } from "@/components/cta-section";
import { FooterSection } from "@/components/footer-section";
import { Header } from "@/components/header";
import { FAQSection } from "@/components/faq-section";
import CommunityPlatforms from "@/components/CommunityPlatform";
import ScrollAnimationComponent from "@/components/HowItWorks";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <AnimatedHero />
        <CommunityPlatforms />
        <ScrollAnimationComponent />
        <ProjectManagementSection />
        <FinancialManagementSection />
        <FeaturesGridSection />
        <TestimonialsAnimated />
        <section id="pricing">
          <PricingSectionDreelio />
        </section>
        <CommunitySection />
        <FAQSection />
        <CTASection />
        <FooterSection />
      </main>
    </>
  );
}
