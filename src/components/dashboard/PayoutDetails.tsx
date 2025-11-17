import { motion } from 'motion/react';
import { TrendingDown, Shield, Calendar, DollarSign, ArrowLeft } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface PayoutDetailsProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
}

export function PayoutDetails({ navigate, onboardingState }: PayoutDetailsProps) {
  const breakdownData = [
    { label: 'Protected amount', value: '$20,000', icon: Shield },
    { label: 'Month-start BTC price', value: '$94,200', icon: TrendingDown },
    { label: 'Month-end BTC price', value: '$73,436', icon: TrendingDown },
    { label: 'Drawdown', value: '–22%', highlight: true, icon: TrendingDown },
    { label: 'Your tier', value: 'Enhanced (20%)', icon: Shield },
    { label: 'Date credited', value: 'Jan 1, 2026', icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white">
      {/* Navigation */}
      <nav className="border-b border-[#00D4FF]/20 backdrop-blur-xl bg-[#0A0E17]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img src={coinedgeLogo} alt="Coinedge" className="h-8" />
            <button 
              onClick={() => navigate('triggered')}
              className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden md:inline">Back</span>
            </button>
          </div>
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('dashboard')} className="opacity-60 hover:opacity-100 transition-opacity">Coverage</button>
            <button onClick={() => navigate('wallet')} className="opacity-60 hover:opacity-100 transition-opacity">Wallet</button>
            <button onClick={() => navigate('support')} className="opacity-60 hover:opacity-100 transition-opacity">Settings</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <h1 className="text-4xl md:text-5xl mb-2">Payout Details</h1>
          <p className="text-xl opacity-60 mb-8">December 2025</p>

          {/* Success Banner */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-3xl p-6 mb-8 shadow-[0_0_40px_rgba(34,197,94,0.15)]"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl mb-1">Maximum Coverage Paid Out</div>
                <div className="text-sm opacity-80">Your protection activated due to 22% BTC drawdown</div>
              </div>
            </div>
          </motion.div>

          {/* Payout Calculation Card */}
          <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 md:p-10 mb-8 shadow-[0_0_50px_rgba(0,212,255,0.15)]">
            <h2 className="text-2xl mb-8">Calculation Breakdown</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {breakdownData.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`bg-[#0A0E17]/50 rounded-2xl p-6 border ${
                      item.highlight
                        ? 'border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]'
                        : 'border-[#00D4FF]/10'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.highlight ? 'bg-red-500/20' : 'bg-[#00D4FF]/10'
                      }`}>
                        <Icon className={`w-5 h-5 ${item.highlight ? 'text-red-500' : 'text-[#00D4FF]'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm opacity-60 mb-2">{item.label}</div>
                        <div className={`text-2xl ${item.highlight ? 'text-red-500' : 'text-white'}`}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Final Calculation */}
            <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#0099CC]/10 border border-[#00D4FF]/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,212,255,0.2)]">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-[#00D4FF]" />
                <h3 className="text-xl">Payout Calculation</h3>
              </div>

              <div className="space-y-3 text-lg">
                <div className="flex justify-between items-center">
                  <span className="opacity-60">Protected Amount</span>
                  <span>$20,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-60">Coverage Tier</span>
                  <span>Enhanced (20%)</span>
                </div>
                <div className="h-px bg-[#00D4FF]/20 my-4" />
                <div className="flex justify-between items-center text-2xl">
                  <span>Total Payout</span>
                  <span className="text-[#00D4FF]">$4,000 USDC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Note */}
          <div className="bg-[#1A1F2E]/30 border border-[#00D4FF]/10 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#00D4FF] mt-1" />
              <div>
                <div className="mb-2">Fresh hedge resets monthly</div>
                <div className="text-sm opacity-60">
                  Your next coverage period starts today with a new protection cycle. Monthly payouts are capped at your tier's percentage of the protected amount.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}