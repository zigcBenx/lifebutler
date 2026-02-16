import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SocialProofSection } from "@/components/social-proof-section"
import { PricingSection } from "@/components/pricing-section"
import { FinalCtaSection } from "@/components/final-cta-section"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <DashboardPreview />
      <SocialProofSection />
      <PricingSection />
      <FinalCtaSection />
    </main>
  )
}
