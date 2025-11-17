import { HeroSection } from './HeroSection';
import { BenefitsGrid } from './BenefitsGrid';
import { HowItWorks } from './HowItWorks';
import { PricingTable } from './PricingTable';
import { MerchantSpotlight } from './MerchantSpotlight';
import { ProtectionMechanics } from './ProtectionMechanics';
import { WhyCoinedge } from './WhyCoinedge';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';
import { CheckCircle } from 'lucide-react';
import { OnboardingScreen } from '../App';

interface LandingPageProps {
  navigate: (screen: OnboardingScreen) => void;
}

export function LandingPage({ navigate }: LandingPageProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection navigate={navigate} />
      
      {/* Trust Bar */}
      <div className="bg-[#1A1F2E] border-y border-[#00D4FF]/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center md:text-left opacity-90">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00D4FF]" />
              No lockups
            </span>
            <span className="hidden md:inline text-[#00D4FF]/40">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00D4FF]" />
              No staking
            </span>
            <span className="hidden md:inline text-[#00D4FF]/40">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00D4FF]" />
              No derivatives
            </span>
            <span className="hidden md:inline text-[#00D4FF]/40">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00D4FF]" />
              Paid in USDC
            </span>
            <span className="hidden md:inline text-[#00D4FF]/40">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00D4FF]" />
              Internal pooled hedging
            </span>
            <span className="hidden md:inline text-[#00D4FF]/40">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00D4FF]" />
              Loved by merchants on Square, Stripe, Shopify
            </span>
          </div>
        </div>
      </div>

      {/* Core Benefits Grid */}
      <BenefitsGrid />

      {/* How It Works */}
      <HowItWorks />

      {/* Coverage Tiers */}
      <PricingTable />

      {/* Merchant Spotlight */}
      <MerchantSpotlight />

      {/* Protection Mechanics */}
      <ProtectionMechanics />

      {/* Why Coinedge Coverage Wins */}
      <WhyCoinedge />

      {/* Final CTA */}
      <FinalCTA navigate={navigate} />

      {/* Footer */}
      <Footer />
    </>
  );
}
