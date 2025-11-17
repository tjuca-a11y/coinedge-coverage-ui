import { motion } from 'motion/react';
import { Shield, TrendingDown, Calendar, Wallet, Settings, HelpCircle, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { AppHeader } from '../shared/AppHeader';
import { Screen, AppState } from '../../App';

interface DashboardTriggeredProps {
  navigate: (screen: Screen) => void;
  appState: AppState;
}

const BTC_PRICE = 49920; // Triggered price (down 22% from 64102)
const MONTH_DRAWDOWN = -22.0;

export function DashboardTriggered({ navigate, appState }: DashboardTriggeredProps) {
  const nextBillingDate = new Date();
  nextBillingDate.setDate(nextBillingDate.getDate() + 30);

  const payoutAmount = appState.protectedAmount * (appState.selectedTier === 'standard' ? 0.1 : 0.2);

  // Generate chart data showing the crash
  const chartData = Array.from({ length: 30 }, (_, i) => {
    const progress = i / 30;
    const basePrice = 100;
    const drop = progress > 0.3 ? (progress - 0.3) * 35 : 0;
    const volatility = Math.sin(i * 0.3) * 1.5;
    return basePrice - drop + volatility;
  });

  return (
    <div className="min-h-screen pb-20">
      <AppHeader navigate={navigate} />
      
      {/* Animated particles for triggered state */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00D4FF]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-24">
        {/* Protection Triggered Banner */}
        <motion.div
          className="relative bg-gradient-to-r from-[#00D4FF] to-[#0099CC] rounded-2xl p-8 mb-8 overflow-hidden shadow-2xl shadow-[#00D4FF]/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <motion.div
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Shield className="w-8 h-8 text-[#0A0E17]" strokeWidth={2} />
              </motion.div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl text-[#0A0E17]">Protection Triggered!</h2>
                  <Sparkles className="w-6 h-6 text-[#0A0E17]" />
                </div>
                <p className="text-[#0A0E17]/80 text-lg">
                  <span className="font-semibold">${payoutAmount.toLocaleString()} USDC</span> deposited to your Protection Wallet
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate('wallet')}
              className="px-6 py-3 bg-[#0A0E17] hover:bg-[#1A1F2E] text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              View Wallet
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Status Bar */}
        <motion.div
          className="bg-gradient-to-r from-[#1A1F2E]/80 to-[#0A0E17]/80 backdrop-blur-xl border border-[#00D4FF]/30 rounded-2xl p-6 mb-8 shadow-lg shadow-[#00D4FF]/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center relative">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-green-500">● Maximum Coverage Paid Out</span>
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
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Monthly Performance</h2>
                <div className="text-sm opacity-60">Last 30 days</div>
              </div>

              {/* Chart */}
              <div className="relative h-64 bg-[#0A0E17]/30 rounded-xl p-4">
                <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradientRed" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF4444" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#FF4444" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* -10% threshold line */}
                  <line x1="0" y1="60" x2="600" y2="60" stroke="#FFA500" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                  <text x="10" y="55" fill="#FFA500" fontSize="10" opacity="0.9">-10% Standard Triggered</text>

                  {/* -20% threshold line */}
                  <line x1="0" y1="90" x2="600" y2="90" stroke="#FF4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                  <text x="10" y="85" fill="#FF4444" fontSize="10" opacity="0.9">-20% Enhanced Triggered</text>

                  {/* Price line */}
                  <motion.path
                    d={`M ${chartData.map((price, i) => `${(i / (chartData.length - 1)) * 600},${200 - price * 2}`).join(' L ')}`}
                    fill="url(#chartGradientRed)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />
                  
                  <motion.path
                    d={`M ${chartData.map((price, i) => `${(i / (chartData.length - 1)) * 600},${200 - price * 2}`).join(' L ')}`}
                    fill="none"
                    stroke="#FF4444"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />

                  {/* Shield icon at trigger point */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, type: 'spring' }}
                  >
                    <circle cx="420" cy="90" r="20" fill="#00D4FF" opacity="0.2" />
                    <path
                      d="M 420 80 L 415 85 L 420 100 L 425 100 L 430 85 Z"
                      fill="#00D4FF"
                    />
                  </motion.g>
                </svg>
              </div>

              {/* Current Status */}
              <div className="mt-6 bg-gradient-to-r from-green-500/20 to-[#00D4FF]/20 border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-60">Final Month Drawdown</div>
                    <div className="text-2xl text-red-500">{MONTH_DRAWDOWN}%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-60">Payout Status</div>
                    <div className="text-lg text-green-500 flex items-center gap-2 justify-end">
                      <CheckCircle className="w-5 h-5" />
                      Paid
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm opacity-90 text-green-400">
                  ✓ Maximum coverage of ${payoutAmount.toLocaleString()} USDC has been credited to your wallet
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl mb-6">Recent Activity</h2>
              
              {/* Activity item */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span>Protection Triggered</span>
                      <span className="text-sm opacity-60">Just now</span>
                    </div>
                    <p className="text-sm opacity-70 mb-2">
                      BTC dropped {MONTH_DRAWDOWN}% this month. Your {appState.selectedTier} tier protection activated.
                    </p>
                    <div className="text-[#00D4FF]">+${payoutAmount.toLocaleString()} USDC deposited</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* New Hedge Info */}
            <motion.div
              className="bg-gradient-to-br from-[#00D4FF]/20 to-[#0099CC]/20 backdrop-blur-xl border border-[#00D4FF]/50 rounded-2xl p-6 shadow-lg shadow-[#00D4FF]/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#00D4FF]" />
                <h3 className="text-lg">New Hedge Starts</h3>
              </div>
              <div className="text-2xl mb-1">Jan 1, 2025</div>
              <div className="text-sm opacity-70">Fresh 30-day protection period begins next month</div>
            </motion.div>

            {/* Protection Wallet - Updated */}
            <motion.div
              className="bg-gradient-to-br from-[#1A1F2E]/80 to-[#0A0E17]/80 backdrop-blur-xl border border-[#00D4FF]/30 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="w-5 h-5 text-[#00D4FF]" />
                <h3 className="text-lg">Protection Wallet</h3>
              </div>
              <div className="text-3xl text-[#00D4FF] mb-1">${payoutAmount.toLocaleString()} USDC</div>
              <div className="text-sm text-green-500 mb-4">+${payoutAmount.toLocaleString()} this month</div>
              <button 
                onClick={() => navigate('wallet')}
                className="w-full py-3 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#00B8E6] hover:to-[#0088BB] text-[#0A0E17] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#00D4FF]/30"
              >
                Withdraw USDC
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Billing Info */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#00D4FF]" />
                <h3 className="text-lg">Next Billing</h3>
              </div>
              <div className="text-2xl mb-1">{nextBillingDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
              <div className="text-[#00D4FF]">${appState.monthlyFee} USDC</div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => navigate('dashboard')}
                  className="w-full py-3 bg-[#0A0E17]/50 hover:bg-[#0A0E17] border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 rounded-lg transition-all duration-300 flex items-center gap-3 px-4"
                >
                  <TrendingDown className="w-4 h-4 text-[#00D4FF]" />
                  <span>View Normal State</span>
                </button>
                <button className="w-full py-3 bg-[#0A0E17]/50 hover:bg-[#0A0E17] border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 rounded-lg transition-all duration-300 flex items-center gap-3 px-4">
                  <Settings className="w-4 h-4 text-[#00D4FF]" />
                  <span>Adjust Coverage</span>
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
