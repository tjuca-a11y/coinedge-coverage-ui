import { motion } from 'motion/react';
import { Shield, Calendar, Wallet, Settings, HelpCircle, TrendingDown, ExternalLink } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface MainDashboardProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
}

const BTC_PRICE = 88762; // Current price (down from 94200)
const MONTH_DRAWDOWN = -6.8;

export function MainDashboard({ navigate, onboardingState }: MainDashboardProps) {
  const nextBillingDate = new Date('2026-01-17');

  // Generate 30-day chart data
  const chartData = Array.from({ length: 30 }, (_, i) => {
    const progress = i / 30;
    const basePrice = 100;
    const drop = progress > 0.5 ? (progress - 0.5) * 16 : 0;
    const volatility = Math.sin(i * 0.3) * 2;
    return basePrice - drop + volatility;
  });

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E17]/80 backdrop-blur-xl border-b border-[#1A1F2E]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src={coinedgeLogo} alt="Coinedge" className="h-8 brightness-0 invert" />
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => navigate('dashboard')} className="opacity-80 hover:text-[#00D4FF] transition-colors">Coverage</button>
            <button onClick={() => navigate('wallet')} className="opacity-80 hover:text-[#00D4FF] transition-colors">Wallet</button>
            <button onClick={() => navigate('billing')} className="opacity-80 hover:text-[#00D4FF] transition-colors">Billing</button>
            <button onClick={() => navigate('support')} className="opacity-80 hover:text-[#00D4FF] transition-colors">Settings</button>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 pt-24">
        {/* Status Bar */}
        <motion.div
          className="bg-gradient-to-r from-[#1A1F2E]/80 to-[#0A0E17]/80 backdrop-blur-xl border border-[#00D4FF]/30 rounded-2xl p-6 mb-8 shadow-lg shadow-[#00D4FF]/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center relative">
                <Shield className="w-6 h-6 text-[#00D4FF]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-[#1A1F2E] animate-pulse"></div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-green-500">● Coverage Active</span>
                </div>
                <div className="text-2xl">
                  Protected: <span className="text-[#00D4FF]">${onboardingState.protectedAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm opacity-60">Current BTC Price</div>
              <div className="text-2xl">${BTC_PRICE.toLocaleString()}</div>
              <div className="text-red-500 text-sm">{MONTH_DRAWDOWN}% this month</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* BTC Chart */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">30-Day BTC Performance</h2>
                <div className="text-sm opacity-60">Dec 2025</div>
              </div>

              {/* Chart */}
              <div className="relative h-64 bg-[#0A0E17]/30 rounded-xl p-4">
                <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* -10% threshold line */}
                  <line x1="0" y1="60" x2="600" y2="60" stroke="#FFA500" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
                  <text x="10" y="55" fill="#FFA500" fontSize="10" opacity="0.7">-10% Standard Trigger</text>

                  {/* -20% threshold line */}
                  <line x1="0" y1="90" x2="600" y2="90" stroke="#FF4444" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
                  <text x="10" y="85" fill="#FF4444" fontSize="10" opacity="0.7">-20% Enhanced Trigger</text>

                  {/* Price line */}
                  <motion.path
                    d={`M ${chartData.map((price, i) => `${(i / (chartData.length - 1)) * 600},${200 - price * 2}`).join(' L ')}`}
                    fill="url(#chartGradient)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />
                  
                  <motion.path
                    d={`M ${chartData.map((price, i) => `${(i / (chartData.length - 1)) * 600},${200 - price * 2}`).join(' L ')}`}
                    fill="none"
                    stroke="#00D4FF"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />
                </svg>
              </div>

              {/* Current Status */}
              <div className="mt-6 bg-[#0A0E17]/50 border border-[#00D4FF]/20 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-60">Current Month Drawdown</div>
                    <div className="text-2xl text-red-500">{MONTH_DRAWDOWN}%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-60">Status</div>
                    <div className="text-lg text-yellow-500">Monitoring</div>
                  </div>
                </div>
                <div className="mt-3 text-sm opacity-70">
                  {onboardingState.selectedTier === 'standard' 
                    ? 'Drop must reach -10% by month-end to trigger payout'
                    : 'Drop must reach -20% by month-end to trigger maximum payout'}
                </div>
              </div>
            </motion.div>

            {/* Coinedge Protection Wallet */}
            <motion.div
              className="bg-gradient-to-br from-[#1A1F2E]/80 to-[#0A0E17]/80 backdrop-blur-xl border border-[#00D4FF]/30 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Wallet className="w-6 h-6 text-[#00D4FF]" />
                  <h2 className="text-2xl">Coinedge Protection Wallet</h2>
                </div>
                <button 
                  onClick={() => navigate('wallet')}
                  className="text-sm text-[#00D4FF] hover:underline flex items-center gap-1"
                >
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center py-8">
                <div className="text-sm opacity-60 mb-2">Balance</div>
                <div className="text-5xl text-[#00D4FF] mb-4">0.00 <span className="text-2xl opacity-80">USDC</span></div>
                <p className="text-sm opacity-70 mb-6">No payouts yet this month</p>
                <button 
                  onClick={() => navigate('withdraw')}
                  className="px-6 py-3 bg-[#00D4FF]/20 hover:bg-[#00D4FF]/30 border border-[#00D4FF]/50 text-[#00D4FF] rounded-lg transition-all duration-300"
                >
                  Withdraw
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Next Billing */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#00D4FF]" />
                <h3 className="text-lg">Next Billing</h3>
              </div>
              <div className="text-2xl mb-1">{nextBillingDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
              <div className="text-[#00D4FF]">${onboardingState.monthlyFee} USDC</div>
            </motion.div>

            {/* Total Earned */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg mb-4">Total Earned All Time</h3>
              <div className="text-3xl text-[#00D4FF]">$0</div>
              <div className="text-sm opacity-60 mt-2">0 payouts received</div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => navigate('adjust-coverage')}
                  className="w-full py-3 bg-[#0A0E17]/50 hover:bg-[#0A0E17] border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 rounded-lg transition-all duration-300 flex items-center gap-3 px-4"
                >
                  <Settings className="w-4 h-4 text-[#00D4FF]" />
                  <span>Adjust Coverage</span>
                </button>
                <button 
                  onClick={() => navigate('triggered')}
                  className="w-full py-3 bg-[#0A0E17]/50 hover:bg-[#0A0E17] border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 rounded-lg transition-all duration-300 flex items-center gap-3 px-4"
                >
                  <TrendingDown className="w-4 h-4 text-[#00D4FF]" />
                  <span>View Triggered Example</span>
                </button>
                <button 
                  onClick={() => navigate('support')}
                  className="w-full py-3 bg-[#0A0E17]/50 hover:bg-[#0A0E17] border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 rounded-lg transition-all duration-300 flex items-center gap-3 px-4"
                >
                  <HelpCircle className="w-4 h-4 text-[#00D4FF]" />
                  <span>Support</span>
                </button>
                <button 
                  onClick={() => navigate('landing')}
                  className="w-full py-3 bg-[#0A0E17]/50 hover:bg-[#0A0E17] border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 rounded-lg transition-all duration-300 text-sm opacity-60 hover:opacity-100"
                >
                  Cancel Plan
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}