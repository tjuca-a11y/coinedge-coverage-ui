import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface ChooseTierProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
  updateState: (updates: Partial<OnboardingState>) => void;
}

export function ChooseTier({ navigate, onboardingState, updateState }: ChooseTierProps) {
  const [selectedTier, setSelectedTier] = useState<'standard' | 'enhanced'>('enhanced');

  const calculatePrice = (tier: 'standard' | 'enhanced') => {
    const baseRate = tier === 'standard' ? 0.0015 : 0.003;
    const monthlyFee = Math.round(onboardingState.protectedAmount * baseRate);
    return monthlyFee;
  };

  const standardPrice = calculatePrice('standard');
  const enhancedPrice = calculatePrice('enhanced');

  const handleContinue = () => {
    const fee = selectedTier === 'standard' ? standardPrice : enhancedPrice;
    updateState({ 
      selectedTier,
      monthlyFee: fee
    });
    navigate('payment');
  };

  const tiers = [
    {
      id: 'standard' as const,
      name: 'Standard',
      threshold: '10%',
      price: standardPrice,
      maxPayout: Math.round(onboardingState.protectedAmount * 0.1),
      priceRange: '$24–$39/mo',
      popular: false,
      features: [
        'Protection triggers at -10% monthly drop',
        `USDC credits up to $${Math.round(onboardingState.protectedAmount * 0.1).toLocaleString()}`,
        'Flat monthly subscription fee',
        'No lockups or derivatives',
        'Cancel anytime'
      ]
    },
    {
      id: 'enhanced' as const,
      name: 'Enhanced',
      threshold: '20%',
      price: enhancedPrice,
      maxPayout: Math.round(onboardingState.protectedAmount * 0.2),
      priceRange: '$49–$79/mo',
      popular: true,
      features: [
        'Protection triggers at -20% monthly drop',
        `USDC credits up to $${Math.round(onboardingState.protectedAmount * 0.2).toLocaleString()}`,
        'Flat monthly subscription fee',
        'No lockups or derivatives',
        'Cancel anytime',
        'Higher coverage for severe crashes'
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-12">
      {/* Header with Logo and Back Button */}
      <div className="fixed top-8 left-8 right-8 z-20 flex items-center justify-between">
        <button onClick={() => navigate('landing')}>
          <img src={coinedgeLogo} alt="Coinedge" className="h-8 brightness-0 invert" />
        </button>
        <button 
          onClick={() => navigate('amount')}
          className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden md:inline">Back</span>
        </button>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4">
              Choose Your <span className="text-[#00D4FF]">Coverage Tier</span>
            </h1>
            <p className="text-xl opacity-70">
              Protecting ${onboardingState.protectedAmount.toLocaleString()} ({onboardingState.btcAmount.toFixed(4)} BTC)
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      className="bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A0E17] px-4 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-[#00D4FF]/50"
                      animate={{
                        boxShadow: [
                          '0 10px 30px rgba(0, 212, 255, 0.3)',
                          '0 10px 40px rgba(0, 212, 255, 0.5)',
                          '0 10px 30px rgba(0, 212, 255, 0.3)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">MOST POPULAR</span>
                    </motion.div>
                  </div>
                )}

                {/* Card */}
                <button
                  onClick={() => setSelectedTier(tier.id)}
                  className={`w-full text-left relative bg-[#1A1F2E]/50 backdrop-blur-xl border rounded-2xl p-8 h-full transition-all duration-300 ${
                    selectedTier === tier.id
                      ? 'border-[#00D4FF] shadow-xl shadow-[#00D4FF]/30 scale-[1.02]' 
                      : tier.popular
                      ? 'border-[#00D4FF]/50 hover:border-[#00D4FF]/70'
                      : 'border-[#00D4FF]/20 hover:border-[#00D4FF]/50'
                  }`}
                >
                  {/* Selection Indicator */}
                  {selectedTier === tier.id && (
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#00D4FF] flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <Check className="w-5 h-5 text-[#0A0E17]" />
                    </motion.div>
                  )}

                  {/* Glow for selected */}
                  {selectedTier === tier.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent rounded-2xl"></div>
                  )}

                  <div className="relative z-10">
                    {/* Tier Name */}
                    <h3 className="text-3xl mb-2">{tier.name}</h3>
                    <p className="opacity-60 mb-6">{tier.threshold} Protection Threshold</p>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl text-[#00D4FF]">${tier.price}</span>
                        <span className="opacity-60">/month</span>
                      </div>
                      <p className="text-sm opacity-60">
                        up to <span className="text-[#00D4FF]">${tier.maxPayout.toLocaleString()} USDC</span> max payout
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent mb-6"></div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                          <span className="opacity-80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <button
              onClick={handleContinue}
              className="group w-full py-5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#00B8E6] hover:to-[#0088BB] text-[#0A0E17] rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#00D4FF]/30 hover:shadow-xl hover:shadow-[#00D4FF]/50 text-xl"
            >
              Select {selectedTier === 'standard' ? 'Standard' : 'Enhanced'}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}