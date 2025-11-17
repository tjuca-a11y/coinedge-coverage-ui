import { motion } from 'motion/react';
import { Shield, Check } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface AdjustCoverageConfirmationProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
}

export function AdjustCoverageConfirmation({ navigate, onboardingState }: AdjustCoverageConfirmationProps) {
  return (
    <div className="min-h-screen bg-[#0A0E17] text-white">
      {/* Navigation */}
      <nav className="border-b border-[#00D4FF]/20 backdrop-blur-xl bg-[#0A0E17]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <img src={coinedgeLogo} alt="Coinedge" className="h-8" />
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('dashboard')} className="opacity-60 hover:opacity-100 transition-opacity">Coverage</button>
            <button onClick={() => navigate('wallet')} className="opacity-60 hover:opacity-100 transition-opacity">Wallet</button>
            <button onClick={() => navigate('support')} className="opacity-60 hover:opacity-100 transition-opacity">Settings</button>
          </div>
        </div>
      </nav>

      {/* Success Content */}
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Pulsing Shield Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00D4FF]/20 blur-3xl rounded-full" />
              <div className="relative bg-gradient-to-br from-[#00D4FF] to-[#0099CC] w-32 h-32 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(0,212,255,0.6)]">
                <Shield className="w-16 h-16 text-[#0A0E17]" />
                <div className="absolute top-2 right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-[#0A0E17]">
                  <Check className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl mb-4">Coverage Updated!</h1>
            
            <p className="text-xl opacity-80 mb-8">
              Your protection is now <span className="text-[#00D4FF]">$30,000</span> (Enhanced tier)
            </p>

            <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 mb-12 shadow-[0_0_40px_rgba(0,212,255,0.1)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <div className="text-sm opacity-60 mb-2">New Monthly Fee</div>
                  <div className="text-3xl text-[#00D4FF]">$89 USDC</div>
                </div>
                <div>
                  <div className="text-sm opacity-60 mb-2">Next Billing</div>
                  <div className="text-3xl">Jan 16, 2026</div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('dashboard')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A0E17] py-5 px-10 rounded-2xl text-lg transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)]"
            >
              Back to Dashboard →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}