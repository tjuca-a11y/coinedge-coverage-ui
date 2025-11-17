import { motion } from 'motion/react';
import { Wallet, ArrowUpRight, TrendingUp, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface ProtectionWalletProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
}

export function ProtectionWallet({ navigate, onboardingState }: ProtectionWalletProps) {
  const transactions = [
    { date: 'Jan 1, 2026', type: 'Payout Received', amount: '+$4,000.00', status: 'Completed' },
    { date: 'Dec 15, 2025', type: 'Monthly Fee', amount: '-$67.00', status: 'Completed' },
    { date: 'Nov 15, 2025', type: 'Monthly Fee', amount: '-$67.00', status: 'Completed' },
    { date: 'Oct 15, 2025', type: 'Monthly Fee', amount: '-$67.00', status: 'Completed' },
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
              <span className="hidden md:inline">Back to Dashboard</span>
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
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-[#00D4FF] to-[#0099CC] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,212,255,0.4)]">
              <Wallet className="w-7 h-7 text-[#0A0E17]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl">Coinedge Protection Wallet</h1>
            </div>
          </div>

          {/* Balance Card */}
          <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 md:p-10 mb-6 shadow-[0_0_50px_rgba(0,212,255,0.15)]">
            <div className="mb-6">
              <div className="text-lg opacity-60 mb-2">Available Balance</div>
              <div className="text-6xl md:text-7xl text-[#00D4FF] mb-4">$4,000.00</div>
              <div className="text-sm opacity-80">USDC</div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-8">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-500">+$4,000 this month (Dec 2025)</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('withdraw')}
              className="w-full bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A0E17] py-5 px-8 rounded-2xl text-lg transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] flex items-center justify-center gap-2"
            >
              <span>Withdraw to External Wallet</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Security Note */}
          <div className="bg-[#1A1F2E]/30 border border-[#00D4FF]/10 rounded-2xl p-4 mb-8 text-sm opacity-70">
            <p>Your USDC is held in a fully insured, segregated wallet. Withdraw anytime, instantly.</p>
          </div>

          {/* Transaction History */}
          <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,212,255,0.1)]">
            <h2 className="text-2xl mb-6">Transaction History</h2>

            <div className="space-y-4">
              {transactions.map((tx, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center justify-between p-4 bg-[#0A0E17]/50 rounded-2xl border border-[#00D4FF]/10 hover:border-[#00D4FF]/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#00D4FF]/10 rounded-full flex items-center justify-center">
                      {tx.type.includes('Payout') ? (
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      ) : (
                        <Clock className="w-5 h-5 text-[#00D4FF]" />
                      )}
                    </div>
                    <div>
                      <div className="mb-1">{tx.type}</div>
                      <div className="text-sm opacity-50">{tx.date}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`text-lg mb-1 ${tx.amount.startsWith('+') ? 'text-green-500' : ''}`}>
                      {tx.amount}
                    </div>
                    <div className="flex items-center gap-1 text-sm opacity-50">
                      <CheckCircle className="w-3 h-3" />
                      <span>{tx.status}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}