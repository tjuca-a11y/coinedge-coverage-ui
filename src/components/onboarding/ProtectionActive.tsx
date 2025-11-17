import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Shield, CheckCircle, ArrowRight, Sparkles, Wallet } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface ProtectionActiveProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
}

export function ProtectionActive({ navigate, onboardingState }: ProtectionActiveProps) {
  const [showParticles, setShowParticles] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowParticles(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const nextPayoutDate = new Date();
  nextPayoutDate.setMonth(nextPayoutDate.getMonth() + 1);
  nextPayoutDate.setDate(1);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Logo */}
      <div className="fixed top-8 left-8 z-20">
        <img src={coinedgeLogo} alt="Coinedge" className="h-8 brightness-0 invert" />
      </div>

      {/* Blue Particles */}
      {showParticles && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#00D4FF]"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px'
              }}
              initial={{ y: -10, opacity: 1, scale: Math.random() * 0.5 + 0.5 }}
              animate={{
                y: window.innerHeight + 10,
                opacity: 0,
                rotate: 360
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: 'linear'
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#00D4FF] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0099CC] rounded-full blur-3xl opacity-20"></div>

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-4xl text-center">
          {/* Animated Shield */}
          <motion.div
            className="relative inline-block mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: 'spring',
              stiffness: 200,
              damping: 15,
              duration: 0.8
            }}
          >
            <div className="relative">
              {/* Pulsing glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00D4FF] to-[#0099CC] rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              {/* Shield */}
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0099CC] flex items-center justify-center shadow-2xl shadow-[#00D4FF]/50">
                <Shield className="w-16 h-16 text-[#0A0E17]" strokeWidth={2} />
              </div>
              
              {/* Checkmark overlay */}
              <motion.div
                className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
              >
                <CheckCircle className="w-8 h-8 text-white fill-green-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="text-[#00D4FF]">Protection Active!</span>
            </h1>
            
            <p className="text-2xl md:text-3xl mb-4 opacity-90">
              Your <span className="text-[#00D4FF]">${onboardingState.protectedAmount.toLocaleString()}</span> BTC value is now shielded
            </p>

            <p className="text-lg opacity-70 mb-12">
              Welcome to peace of mind, {onboardingState.name.split(' ')[0]}
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6">
              <div className="text-sm opacity-60 mb-2">Next Payout Check</div>
              <div className="text-2xl text-[#00D4FF]">
                {nextPayoutDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
            </div>

            <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6">
              <div className="text-sm opacity-60 mb-2">Coverage Tier</div>
              <div className="text-2xl text-[#00D4FF]">
                {onboardingState.selectedTier === 'standard' ? 'Standard 10%' : 'Enhanced 20%'}
              </div>
            </div>

            <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6">
              <div className="text-sm opacity-60 mb-2">Protection Wallet</div>
              <div className="text-2xl text-[#00D4FF] flex items-center justify-center gap-2">
                <Wallet className="w-5 h-5" />
                Ready
              </div>
            </div>
          </motion.div>

          {/* Features highlight */}
          <motion.div
            className="bg-gradient-to-br from-[#1A1F2E]/80 to-[#0A0E17]/80 backdrop-blur-xl border border-[#00D4FF]/30 rounded-2xl p-8 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-1" />
                <div className="text-left">
                  <div className="text-sm opacity-60">Automatic Protection</div>
                  <div>Always monitoring</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-1" />
                <div className="text-left">
                  <div className="text-sm opacity-60">Instant Payouts</div>
                  <div>USDC auto-deposited</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-1" />
                <div className="text-left">
                  <div className="text-sm opacity-60">Your BTC</div>
                  <div>Your wallet, your keys</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={() => navigate('dashboard')}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#00B8E6] hover:to-[#0088BB] text-[#0A0E17] rounded-xl transition-all duration-300 shadow-lg shadow-[#00D4FF]/30 hover:shadow-xl hover:shadow-[#00D4FF]/50 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Go to Dashboard
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.p
            className="mt-6 text-sm opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Your Coinedge Protection Wallet is ready → Balance: 0.00 USDC
          </motion.p>
        </div>
      </div>
    </div>
  );
}
