import { motion } from 'motion/react';
import { CreditCard, Calendar, Download, ArrowLeft, Plus, Wallet, CheckCircle } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface BillingProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
}

export function Billing({ navigate }: BillingProps) {
  const transactions = [
    { id: 1, date: 'Jan 1, 2025', description: 'Monthly Coverage Fee', amount: -90, status: 'completed', method: 'Card •••• 4242' },
    { id: 2, date: 'Dec 28, 2024', description: 'BTC Drop Payout (15.3%)', amount: 3060, status: 'completed', method: 'USDC Wallet' },
    { id: 3, date: 'Dec 1, 2024', description: 'Monthly Coverage Fee', amount: -90, status: 'completed', method: 'Card •••• 4242' },
    { id: 4, date: 'Nov 1, 2024', description: 'Monthly Coverage Fee', amount: -90, status: 'completed', method: 'Card •••• 4242' },
    { id: 5, date: 'Oct 18, 2024', description: 'BTC Drop Payout (12.7%)', amount: 2540, status: 'completed', method: 'USDC Wallet' },
    { id: 6, date: 'Oct 1, 2024', description: 'Monthly Coverage Fee', amount: -90, status: 'completed', method: 'Card •••• 4242' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white">
      {/* Navigation */}
      <nav className="border-b border-[#00D4FF]/20 backdrop-blur-xl bg-[#0A0E17]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <img src={coinedgeLogo} alt="Coinedge" className="h-8" />
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('dashboard')} className="opacity-60 hover:opacity-100 transition-opacity">Coverage</button>
            <button onClick={() => navigate('wallet')} className="opacity-60 hover:opacity-100 transition-opacity">Wallet</button>
            <button className="text-[#00D4FF]">Billing</button>
            <button onClick={() => navigate('support')} className="opacity-60 hover:opacity-100 transition-opacity">Settings</button>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate('dashboard')}
          className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl mb-8">Billing & Payment Methods</h1>

          {/* Payment Methods Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Card on File */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,212,255,0.1)]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-[#00D4FF]" />
                  <h2 className="text-2xl">Credit Card</h2>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-500">Primary</span>
                </div>
              </div>

              {/* Card Visual */}
              <div className="bg-gradient-to-br from-[#00D4FF]/20 to-[#0099CC]/20 border border-[#00D4FF]/30 rounded-2xl p-6 mb-6">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-sm opacity-60">VISA</div>
                  <div className="w-10 h-8 rounded bg-[#00D4FF]/20" />
                </div>
                <div className="text-2xl tracking-wider mb-6">•••• •••• •••• 4242</div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs opacity-60 mb-1">CARDHOLDER</div>
                    <div className="text-sm">Coinedge Treasury LLC</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-60 mb-1">EXPIRES</div>
                    <div className="text-sm">12/26</div>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-[#1A1F2E]/50 border border-[#00D4FF]/20 rounded-xl hover:bg-[#1A1F2E] hover:border-[#00D4FF]/40 transition-all">
                Update Card
              </button>
            </motion.div>

            {/* USDC Wallet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,212,255,0.1)]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Wallet className="w-6 h-6 text-[#00D4FF]" />
                  <h2 className="text-2xl">USDC Wallet</h2>
                </div>
              </div>

              {/* Wallet Visual */}
              <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#0099CC]/10 border border-[#00D4FF]/20 rounded-2xl p-6 mb-6">
                <div className="text-xs opacity-60 mb-2">WALLET ADDRESS</div>
                <div className="text-sm font-mono mb-6 break-all">0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0</div>
                
                <div className="flex justify-between items-center pt-4 border-t border-[#00D4FF]/10">
                  <div>
                    <div className="text-xs opacity-60 mb-1">NETWORK</div>
                    <div className="text-sm">Ethereum (ERC-20)</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs opacity-60 mb-1">BALANCE</div>
                    <div className="text-sm text-[#00D4FF]">$5,600 USDC</div>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A0E17] rounded-xl hover:shadow-lg hover:shadow-[#00D4FF]/30 transition-all flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Add Payment Method
              </button>
            </motion.div>
          </div>

          {/* Transaction History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(0,212,255,0.1)]"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#00D4FF]" />
                <h2 className="text-2xl">Transaction History</h2>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1A1F2E]/50 border border-[#00D4FF]/20 rounded-xl hover:bg-[#1A1F2E] hover:border-[#00D4FF]/40 transition-all">
                <Download className="w-4 h-4" />
                <span className="hidden md:inline">Export</span>
              </button>
            </div>

            {/* Transaction List */}
            <div className="space-y-3">
              {transactions.map((tx, index) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="bg-[#0A0E17]/50 border border-[#00D4FF]/10 rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg">{tx.description}</h3>
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-green-500 capitalize">{tx.status}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm opacity-60">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {tx.date}
                        </span>
                        <span>•</span>
                        <span>{tx.method}</span>
                      </div>
                    </div>
                    <div className={`text-2xl ${tx.amount > 0 ? 'text-green-500' : 'text-white'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount > 0 ? `$${tx.amount.toLocaleString()}` : `$${Math.abs(tx.amount)}`}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View More */}
            <button className="w-full mt-6 py-3 bg-[#0A0E17]/50 border border-[#00D4FF]/20 rounded-xl hover:bg-[#1A1F2E] hover:border-[#00D4FF]/40 transition-all">
              Load More Transactions
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}