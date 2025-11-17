import { motion } from 'motion/react';
import { ArrowRight, LogIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen } from '../App';

interface HeroSectionProps {
  navigate?: (screen: OnboardingScreen) => void;
}

export function HeroSection({ navigate }: HeroSectionProps) {
  const [chartData, setChartData] = useState<number[]>([]);
  
  useEffect(() => {
    // Generate animated chart data
    const basePrice = 100;
    const points = 100;
    const data: number[] = [];
    
    for (let i = 0; i < points; i++) {
      const progress = i / points;
      const volatility = Math.sin(i * 0.2) * 5;
      const trend = progress < 0.7 ? progress * 20 : progress * 20 - (progress - 0.7) * 50;
      data.push(basePrice + trend + volatility);
    }
    
    setChartData(data);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Header with Logo and Login */}
      <div className="absolute top-8 left-8 right-8 z-20 flex items-center justify-between">
        <img src={coinedgeLogo} alt="Coinedge" className="h-8 md:h-10 brightness-0 invert" />
        <button 
          onClick={() => navigate?.('login')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A1F2E]/50 border border-[#00D4FF]/20 hover:bg-[#1A1F2E] hover:border-[#00D4FF]/40 transition-all duration-300 backdrop-blur-xl"
        >
          <LogIn className="w-4 h-4 text-[#00D4FF]" />
          <span className="hidden md:inline">Login</span>
        </button>
      </div>

      {/* Animated Background Chart */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#0099CC" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {chartData.length > 0 && (
            <>
              <motion.path
                d={`M ${chartData.map((price, i) => `${(i / chartData.length) * 1000},${500 - price * 2}`).join(' L ')}`}
                fill="none"
                stroke="url(#chartGradient)"
                strokeWidth="3"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              
              {/* Shield overlay at the drop */}
              <motion.g
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <path
                  d="M 750 250 L 730 270 L 750 350 L 770 350 L 790 270 Z"
                  fill="#00D4FF"
                  opacity="0.3"
                />
                <path
                  d="M 760 260 L 750 265 L 755 285 L 765 285 L 770 265 Z"
                  fill="#00D4FF"
                />
              </motion.g>
            </>
          )}
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#00D4FF] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0099CC] rounded-full blur-3xl opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
            Protect Your Bitcoin From <span className="text-[#00D4FF]">Downside</span> Without Selling or Locking Your Coins
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Coinedge Coverage is a simple monthly subscription that automatically pays you USDC when BTC drops hard. <span className="text-[#00D4FF]">No custody. No derivatives. No claims.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            onClick={() => navigate?.('welcome')}
            className="group relative px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E6] text-[#0A0E17] rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#00D4FF]/20 hover:shadow-xl hover:shadow-[#00D4FF]/40 hover:scale-105"
          >
            Protect My BTC
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => navigate?.('merchant-hero')}
            className="group relative px-8 py-4 bg-transparent border-2 border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF]/10 rounded-lg transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-[#00D4FF]/20"
          >
            I'm a Merchant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-[#00D4FF]/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}