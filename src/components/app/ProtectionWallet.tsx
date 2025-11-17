import { motion } from 'motion/react';
import { Wallet, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { AppHeader } from '../shared/AppHeader';
import { Screen, AppState } from '../../App';

interface ProtectionWalletProps {
  navigate: (screen: Screen) => void;
  appState: AppState;
}

const exampleHistory = [
  {
    date: 'Nov 1, 2024',
    amount: 4000,
    trigger: '-22% drawdown',
    status: 'Paid'
  },
  {
    date: 'Aug 1, 2024',
    amount: 2000,
    trigger: '-15% drawdown',
    status: 'Paid'
  }
];

export function ProtectionWallet({ navigate, appState }: ProtectionWalletProps) {
  return (
    <div className="min-h-screen pb-20">
      <AppHeader navigate={navigate} showBack backScreen="dashboard" />
      
      <div className="max-w-5xl mx-auto px-4 pt-24">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0099CC] mb-6 shadow-lg shadow-[#00D4FF]/30">
            <Wallet className="w-10 h-10 text-[#0A0E17]" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">
            Coinedge <span className="text-[#00D4FF]">Protection Wallet</span>
          </h1>
          <p className="text-xl opacity-70">
            Your USDC stabilization credits
          </p>
        </motion.div>

        {/* Balance Card */}
        <motion.div
          className="bg-gradient-to-br from-[#1A1F2E]/80 to-[#0A0E17]/80 backdrop-blur-xl border border-[#00D4FF]/30 rounded-3xl p-8 md:p-12 mb-8 text-center shadow-xl shadow-[#00D4FF]/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-sm opacity-60 mb-3">Total Balance</div>
          <div className="text-6xl md:text-7xl text-[#00D4FF] mb-6">$0.00 <span className="text-3xl opacity-80">USDC</span></div>
          
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            If BTC ends the month down {'>'}{appState.selectedTier === 'standard' ? '10' : '20'}%, you'll automatically receive up to <span className="text-[#00D4FF]">${(appState.protectedAmount * (appState.selectedTier === 'standard' ? 0.1 : 0.2)).toLocaleString()} USDC</span> here
          </p>

          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF]/20 hover:bg-[#00D4FF]/30 border-2 border-[#00D4FF] text-[#00D4FF] rounded-xl transition-all duration-300 shadow-lg shadow-[#00D4FF]/20 hover:shadow-xl hover:shadow-[#00D4FF]/40">
            <Download className="w-5 h-5" />
            Withdraw to Wallet
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl mb-6">How Payouts Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center mb-3">
                <span className="text-2xl text-[#00D4FF]">1</span>
              </div>
              <h3 className="mb-2">Month-End Calculation</h3>
              <p className="text-sm opacity-70">Credits calculated based on BTC closing price on the last day of the month</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center mb-3">
                <span className="text-2xl text-[#00D4FF]">2</span>
              </div>
              <h3 className="mb-2">Auto-Deposit</h3>
              <p className="text-sm opacity-70">USDC automatically deposited to this wallet within 24 hours</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center mb-3">
                <span className="text-2xl text-[#00D4FF]">3</span>
              </div>
              <h3 className="mb-2">Withdraw Anytime</h3>
              <p className="text-sm opacity-70">Transfer USDC to your connected wallet whenever you want</p>
            </div>
          </div>
        </motion.div>

        {/* Payout History */}
        <motion.div
          className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Payout History</h2>
            <button className="text-sm text-[#00D4FF] hover:underline flex items-center gap-1">
              Export CSV
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#00D4FF]/20 text-left">
                  <th className="pb-3 opacity-60">Date</th>
                  <th className="pb-3 opacity-60">Trigger</th>
                  <th className="pb-3 opacity-60 text-right">Amount</th>
                  <th className="pb-3 opacity-60 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {exampleHistory.map((item, i) => (
                  <tr key={i} className="border-b border-[#00D4FF]/10">
                    <td className="py-4">{item.date}</td>
                    <td className="py-4 text-red-500">{item.trigger}</td>
                    <td className="py-4 text-right text-[#00D4FF]">+${item.amount.toLocaleString()} USDC</td>
                    <td className="py-4 text-right">
                      <span className="inline-flex items-center gap-1 text-green-500 text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
                
                {/* Current month - no trigger yet */}
                <tr className="opacity-60">
                  <td className="py-4">Dec 2024</td>
                  <td className="py-4">-7.3% (pending)</td>
                  <td className="py-4 text-right">—</td>
                  <td className="py-4 text-right">
                    <span className="text-yellow-500 text-sm">Monitoring</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-6 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-xl p-4 text-sm">
            <p className="opacity-80">
              <span className="text-[#00D4FF]">Note:</span> Example history shown. Your actual payouts will appear here when protection triggers are hit.
            </p>
          </div>
        </motion.div>

        {/* Back to Dashboard */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => navigate('dashboard')}
            className="text-[#00D4FF] hover:underline flex items-center gap-2 mx-auto"
          >
            ← Back to Dashboard
          </button>
        </motion.div>
      </div>
    </div>
  );
}
