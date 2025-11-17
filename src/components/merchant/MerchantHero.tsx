import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen } from '../../App';

interface MerchantHeroProps {
  navigate: (screen: OnboardingScreen) => void;
}

export function MerchantHero({ navigate }: MerchantHeroProps) {
  return (
    <div className="min-h-screen bg-[#0A0E17] text-white">
      {/* Header with Logo */}
      <div className="absolute top-8 left-8 right-8 z-20 flex items-center justify-between">
        <img src={coinedgeLogo} alt="Coinedge" className="h-8 md:h-10 brightness-0 invert" />
        <button 
          onClick={() => navigate('landing')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A1F2E]/50 border border-[#00D4FF]/20 hover:bg-[#1A1F2E] hover:border-[#00D4FF]/40 transition-all duration-300 backdrop-blur-xl"
        >
          Back to Home
        </button>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#00D4FF] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0099CC] rounded-full blur-3xl opacity-10"></div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 mb-6">
              <Shield className="w-4 h-4 text-[#00D4FF]" />
              <span className="text-sm">Merchant Coverage</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              The Volatility Shield<br />Merchants Have Been <span className="text-[#00D4FF]">Waiting For</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl opacity-80 mb-8 max-w-3xl mx-auto">
              0.4% of BTC volume. Auto-protect every payment.<br />Instant USDC when BTC drops.
            </p>

            {/* Partner Logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <p className="text-sm opacity-60 mb-4">Trusted by merchants on</p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                <div className="text-2xl opacity-60 hover:opacity-100 transition-opacity">Square</div>
                <div className="text-2xl opacity-60 hover:opacity-100 transition-opacity">Stripe</div>
                <div className="text-2xl opacity-60 hover:opacity-100 transition-opacity">Shopify</div>
                <div className="text-2xl opacity-60 hover:opacity-100 transition-opacity">BitPay</div>
                <div className="text-2xl opacity-60 hover:opacity-100 transition-opacity">OpenNode</div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={() => navigate('merchant-kyb')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#00B8E6] hover:to-[#0088BB] text-[#0A0E17] rounded-2xl transition-all duration-300 shadow-xl shadow-[#00D4FF]/30 hover:shadow-2xl hover:shadow-[#00D4FF]/50 text-xl"
            >
              Get Merchant Coverage
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {/* Prop 1 */}
              <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6">
                <Shield className="w-10 h-10 text-[#00D4FF] mb-4 mx-auto" />
                <h3 className="text-xl mb-2">One API Key</h3>
                <p className="text-sm opacity-70">Auto-protect every BTC payment you receive</p>
              </div>

              {/* Prop 2 */}
              <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6">
                <Zap className="w-10 h-10 text-[#00D4FF] mb-4 mx-auto" />
                <h3 className="text-xl mb-2">Instant Payouts</h3>
                <p className="text-sm opacity-70">USDC deposited automatically when BTC drops</p>
              </div>

              {/* Prop 3 */}
              <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6">
                <TrendingUp className="w-10 h-10 text-[#00D4FF] mb-4 mx-auto" />
                <h3 className="text-xl mb-2">Volume-Based</h3>
                <p className="text-sm opacity-70">Only 0.4% of monthly BTC volume</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
