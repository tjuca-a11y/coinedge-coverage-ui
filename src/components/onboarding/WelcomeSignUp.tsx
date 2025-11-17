import { motion } from 'motion/react';
import { Shield, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen } from '../../App';

interface WelcomeSignUpProps {
  navigate: (screen: OnboardingScreen) => void;
}

export function WelcomeSignUp({ navigate }: WelcomeSignUpProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#00D4FF] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0099CC] rounded-full blur-3xl opacity-10"></div>

      {/* Header with Logo and Back Button */}
      <div className="absolute top-8 left-8 right-8 z-20 flex items-center justify-between">
        <button onClick={() => navigate('landing')}>
          <img src={coinedgeLogo} alt="Coinedge" className="h-8 md:h-10 brightness-0 invert" />
        </button>
        <button 
          onClick={() => navigate('landing')}
          className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden md:inline">Back</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glowing Shield */}
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
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00D4FF] to-[#0099CC] rounded-full blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              {/* Shield */}
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0099CC] flex items-center justify-center shadow-2xl shadow-[#00D4FF]/50">
                <Shield className="w-16 h-16 text-[#0A0E17]" strokeWidth={2} />
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Protect Your Bitcoin<br />
              From <span className="text-[#00D4FF]">10–20% Crashes</span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-80 mb-4 max-w-3xl mx-auto">
              Create your free Coinedge account in 60 seconds.
            </p>
            
            <p className="text-lg md:text-xl opacity-70 mb-12 max-w-2xl mx-auto">
              Get your own <span className="text-[#00D4FF]">Protection Wallet</span> for instant USDC payouts when BTC drops hard.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={() => navigate('account')}
            className="group inline-flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#00B8E6] hover:to-[#0088BB] text-[#0A0E17] rounded-xl transition-all duration-300 shadow-lg shadow-[#00D4FF]/30 hover:shadow-xl hover:shadow-[#00D4FF]/50 text-xl md:text-2xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Create Free Account
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Small text */}
          <motion.p
            className="text-sm opacity-60 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            No BTC deposit required · First month risk-free
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-8 border-t border-[#1A1F2E] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
              <span className="opacity-80">No custody</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
              <span className="opacity-80">Setup in 60 seconds</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
              <span className="opacity-80">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
              <span className="opacity-80">First month free</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}