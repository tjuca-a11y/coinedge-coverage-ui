import { motion } from 'motion/react';
import { Search, MessageCircle, Shield, CreditCard, X, FileText, Lock, Calculator, ArrowLeft } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface SupportCenterProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
}

export function SupportCenter({ navigate, onboardingState }: SupportCenterProps) {
  const topics = [
    { 
      icon: Shield, 
      title: 'How payouts work', 
      description: 'Learn about automatic USDC payouts when Bitcoin drops'
    },
    { 
      icon: CreditCard, 
      title: 'Change payment method', 
      description: 'Update your subscription payment details'
    },
    { 
      icon: X, 
      title: 'Cancel subscription', 
      description: 'Cancel anytime with no penalties'
    },
    { 
      icon: Calculator, 
      title: 'Tax implications of USDC credits', 
      description: 'Understand tax treatment for protection payouts'
    },
    { 
      icon: FileText, 
      title: 'Merchant coverage', 
      description: 'Protect your business treasury from volatility'
    },
    { 
      icon: Lock, 
      title: 'Security & insurance', 
      description: 'How we protect your funds and data'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white">
      {/* Navigation */}
      <nav className="border-b border-[#00D4FF]/20 backdrop-blur-xl bg-[#0A0E17]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img src={coinedgeLogo} alt="Coinedge" className="h-8" />
            <button 
              onClick={() => navigate('dashboard')}
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
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl mb-4">How can we help?</h1>
            <p className="text-xl opacity-60 mb-8">Search our help center or browse popular topics</p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#00D4FF] opacity-50" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/30 rounded-2xl px-16 py-5 text-lg focus:border-[#00D4FF] focus:outline-none transition-colors shadow-[0_0_30px_rgba(0,212,255,0.1)]"
              />
            </div>
          </div>

          {/* Popular Topics */}
          <div className="mb-12">
            <h2 className="text-2xl mb-6">Popular Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic, idx) => {
                const Icon = topic.icon;
                return (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-6 text-left hover:border-[#00D4FF]/50 hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#00D4FF]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#00D4FF]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <h3 className="text-lg mb-2">{topic.title}</h3>
                    <p className="text-sm opacity-60">{topic.description}</p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,212,255,0.15)]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl mb-3">Still need help?</h2>
                <p className="opacity-60 mb-4">Our team is here to support you</p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="opacity-80">Usually replies in &lt;2 min</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A0E17] py-4 px-8 rounded-2xl text-lg transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat with us</span>
                </motion.button>
                <a
                  href="mailto:support@coinedge.app"
                  className="text-center py-4 px-8 bg-[#0A0E17]/50 border border-[#00D4FF]/20 rounded-2xl hover:bg-[#0A0E17] transition-colors"
                >
                  support@coinedge.app
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Live Chat Bubble */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-[#00D4FF] to-[#0099CC] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:shadow-[0_0_50px_rgba(0,212,255,0.8)] transition-all group"
      >
        <MessageCircle className="w-7 h-7 text-[#0A0E17]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-[#00D4FF] opacity-50"
        />
      </motion.button>
    </div>
  );
}