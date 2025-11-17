import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, QrCode, Wallet, TrendingUp, Check } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface WithdrawUSDCProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
}

export function WithdrawUSDC({ navigate, onboardingState }: WithdrawUSDCProps) {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('4000');
  const [network, setNetwork] = useState('bitcoin');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleWithdraw = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-[#0A0E17] text-white">
        {/* Navigation */}
        <nav className="border-b border-[#00D4FF]/20 backdrop-blur-xl bg-[#0A0E17]/80 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
            <img src={coinedgeLogo} alt="Coinedge" className="h-8" />
            <div className="flex items-center gap-8">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Coverage</a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Wallet</a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Settings</a>
            </div>
          </div>
        </nav>

        {/* Success Screen */}
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* Confetti effect simulation with particles */}
            <div className="relative mb-8">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ 
                    y: [0, -200, -400],
                    x: [(i % 2 === 0 ? -1 : 1) * Math.random() * 200],
                    opacity: [1, 1, 0],
                    rotate: Math.random() * 360
                  }}
                  transition={{ duration: 2, delay: i * 0.05 }}
                  className="absolute left-1/2 top-0 w-3 h-3 bg-[#00D4FF] rounded-full"
                  style={{
                    left: `${50 + (Math.random() - 0.5) * 40}%`
                  }}
                />
              ))}

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />
                  <div className="relative bg-gradient-to-br from-green-500 to-green-600 w-32 h-32 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(34,197,94,0.6)]">
                    <Check className="w-16 h-16 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-6xl mb-4">Withdrawal Sent!</h1>
            <p className="text-xl opacity-80 mb-8">
              Your USDC is on its way
            </p>

            <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 mb-8 shadow-[0_0_40px_rgba(0,212,255,0.1)]">
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center">
                  <span className="opacity-60">Amount</span>
                  <span className="text-xl text-[#00D4FF]">$4,000.00 USDC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-60">Network</span>
                  <span className="capitalize">{network}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-60">Est. Arrival</span>
                  <span>&lt;5 minutes</span>
                </div>
                <div className="pt-4 border-t border-[#00D4FF]/10">
                  <div className="text-sm opacity-60 mb-2">Transaction ID</div>
                  <div className="text-[#00D4FF] break-all">0xabc...123</div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('wallet')}
              className="bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A0E17] py-5 px-10 rounded-2xl text-lg transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)]"
            >
              Back to Wallet
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white">
      {/* Navigation */}
      <nav className="border-b border-[#00D4FF]/20 backdrop-blur-xl bg-[#0A0E17]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <img src={coinedgeLogo} alt="Coinedge" className="h-8" />
          <div className="flex items-center gap-8">
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Coverage</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Wallet</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Settings</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl">Withdraw USDC</h1>
            <button
              onClick={() => navigate('wallet')}
              className="w-10 h-10 rounded-full bg-[#1A1F2E]/50 border border-[#00D4FF]/20 flex items-center justify-center hover:bg-[#1A1F2E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 mb-6 shadow-[0_0_40px_rgba(0,212,255,0.1)]">
            {/* Address Input */}
            <div className="mb-6">
              <label className="block text-lg mb-3 opacity-80">Recipient Address</label>
              <div className="relative">
                <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00D4FF] opacity-50" />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Bitcoin or EVM address"
                  className="w-full bg-[#0A0E17]/50 border border-[#00D4FF]/30 rounded-xl px-12 py-4 pr-14 focus:border-[#00D4FF] focus:outline-none transition-colors"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00D4FF] hover:opacity-80 transition-opacity">
                  <QrCode className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Amount */}
            <div className="mb-6">
              <label className="block text-lg mb-3 opacity-80">Amount</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={`$${amount}`}
                  onChange={(e) => setAmount(e.target.value.replace('$', ''))}
                  className="flex-1 bg-[#0A0E17]/50 border border-[#00D4FF]/30 rounded-xl px-6 py-4 focus:border-[#00D4FF] focus:outline-none transition-colors text-2xl text-[#00D4FF]"
                />
                <button
                  onClick={() => setAmount('4000')}
                  className="px-6 py-4 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-xl hover:bg-[#00D4FF]/20 transition-colors"
                >
                  All $4,000
                </button>
              </div>
            </div>

            {/* Network Selector */}
            <div className="mb-6">
              <label className="block text-lg mb-3 opacity-80">Network</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {['Bitcoin', 'Ethereum', 'Polygon', 'Base', 'Arbitrum'].map((net) => (
                  <button
                    key={net}
                    onClick={() => setNetwork(net.toLowerCase())}
                    className={`py-3 px-4 rounded-xl transition-all ${
                      network === net.toLowerCase()
                        ? 'bg-[#00D4FF]/20 border border-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                        : 'bg-[#0A0E17]/50 border border-[#00D4FF]/20 hover:border-[#00D4FF]/40'
                    }`}
                  >
                    {net}
                  </button>
                ))}
              </div>
            </div>

            {/* Fee Estimate */}
            <div className="bg-[#0A0E17]/50 border border-[#00D4FF]/10 rounded-2xl p-4">
              <div className="flex justify-between items-center text-sm">
                <span className="opacity-60">Network fee</span>
                <span className="text-[#00D4FF]">~$0.80</span>
              </div>
              <div className="flex justify-between items-center text-sm mt-2">
                <span className="opacity-60">Estimated arrival</span>
                <span>&lt;5 min</span>
              </div>
            </div>
          </div>

          {/* Withdraw Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWithdraw}
            className="w-full bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A0E17] py-5 px-8 rounded-2xl text-lg transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)]"
          >
            Withdraw $4,000 USDC →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}