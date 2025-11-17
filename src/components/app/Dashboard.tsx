import { motion } from 'motion/react';
import { Shield, TrendingDown, Calendar, DollarSign, Settings, HelpCircle, Wallet, ArrowRight } from 'lucide-react';
import { AppHeader } from '../shared/AppHeader';
import { Screen, AppState } from '../../App';

interface DashboardProps {
  navigate: (screen: Screen) => void;
  appState: AppState;
}

const BTC_PRICE = 59363; // Current price (down from 64102)
const MONTH_DRAWDOWN = -7.3;

export function Dashboard({ navigate, appState }: DashboardProps) {
  const nextBillingDate = new Date();
  nextBillingDate.setDate(nextBillingDate.getDate() + 30);

  // Generate chart data for last 30 days
  const chartData = Array.from({ length: 30 }, (_, i) => {
    const progress = i / 30;
    const basePrice = 100;
    const drop = progress > 0.5 ? (progress - 0.5) * 20 : 0;
    const volatility = Math.sin(i * 0.3) * 2;
    return basePrice - drop + volatility;
  });

  return (
    <div className="min-h-screen pb-20">
      <AppHeader navigate={navigate} />
      
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
                <div className="flex items-center gap-2">
                  <span className="text-sm text-green-500">● Coverage Active</span>
                </div>
                <div className="text-2xl">Protected: <span className="text-[#00D4FF]">${appState.protectedAmount.toLocaleString()}</span> <span className="text-sm opacity-60">(≈{appState.btcAmount.toFixed(4)} BTC)</span></div>
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
            {/* BTC Price Chart */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Monthly Performance</h2>
                <div className="text-sm opacity-60">Last 30 days</div>
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
                  <text x="10" y="55" fill="#FFA500" fontSize="10" opacity="0.7">-10% Standard</text>

                  {/* -20% threshold line */}
                  <line x1="0" y1="90" x2="600" y2="90" stroke="#FF4444" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
                  <text x="10" y="85" fill="#FF4444" fontSize="10" opacity="0.7">-20% Enhanced</text>

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
                    <div className="text-lg text-yellow-500">No payout yet</div>
                  </div>
                </div>
                <div className="mt-3 text-sm opacity-70">
                  {appState.selectedTier === 'standard' 
                    ? 'Needs to drop to -10% to trigger protection'
                    : 'Needs to drop to -20% to trigger maximum protection'}
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl mb-6">Recent Activity</h2>
              
              {/* Empty state */}
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#00D4FF] opacity-50" />
                </div>
                <p className="opacity-60">No protection events yet this month</p>
                <p className="text-sm opacity-40 mt-2">Payouts will appear here when triggers are hit</p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Billing Info */}
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
              <div className="text-[#00D4FF]">${appState.monthlyFee} USDC</div>
            </motion.div>

            {/* Protection Wallet */}
            <motion.div
              className="bg-gradient-to-br from-[#1A1F2E]/80 to-[#0A0E17]/80 backdrop-blur-xl border border-[#00D4FF]/30 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="w-5 h-5 text-[#00D4FF]" />
                <h3 className="text-lg">Protection Wallet</h3>
              </div>
              <div className="text-3xl text-[#00D4FF] mb-1">$0.00 USDC</div>
              <div className="text-sm opacity-60 mb-4">Total earned all-time</div>
              <button 
                onClick={() => navigate('wallet')}
                className="w-full py-3 bg-[#00D4FF]/20 hover:bg-[#00D4FF]/30 border border-[#00D4FF]/50 text-[#00D4FF] rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Wallet
                <ArrowRight className="w-4 h-4" />
              </button>
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
                <button className="w-full py-3 bg-[#0A0E17]/50 hover:bg-[#0A0E17] border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 rounded-lg transition-all duration-300 flex items-center gap-3 px-4">
                  <Settings className="w-4 h-4 text-[#00D4FF]" />
                  <span>Adjust Coverage</span>
                </button>
                <button 
                  onClick={() => navigate('triggered')}
                  className="w-full py-3 bg-[#0A0E17]/50 hover:bg-[#0A0E17] border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 rounded-lg transition-all duration-300 flex items-center gap-3 px-4"
                >
                  <TrendingDown className="w-4 h-4 text-[#00D4FF]" />
                  <span>View Triggered State</span>
                </button>
                <button className="w-full py-3 bg-[#0A0E17]/50 hover:bg-[#0A0E17] border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 rounded-lg transition-all duration-300 flex items-center gap-3 px-4">
                  <HelpCircle className="w-4 h-4 text-[#00D4FF]" />
                  <span>Support</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
