import { motion } from 'motion/react';
import { Shield, Calendar, Wallet, Settings, HelpCircle, CheckCircle, Sparkles, TrendingUp, ExternalLink } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface ProtectionTriggeredProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
}

const BTC_PRICE = 73436; // Triggered price (down 22%)
const MONTH_DRAWDOWN = -22.0;

export function ProtectionTriggered({ navigate, onboardingState }: ProtectionTriggeredProps) {
  const nextBillingDate = new Date('2026-01-17');
  const payoutAmount = onboardingState.protectedAmount * (onboardingState.selectedTier === 'standard' ? 0.1 : 0.2);

  // Generate chart showing crash
  const chartData = Array.from({ length: 30 }, (_, i) => {
    const progress = i / 30;
    const basePrice = 100;
    const drop = progress > 0.3 ? (progress - 0.3) * 35 : 0;
    const volatility = Math.sin(i * 0.3) * 1.5;
    return basePrice - drop + volatility;
  });

  return (
    <div className="min-h-screen pb-20">
      {/* Animated particles */}
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

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E17]/80 backdrop-blur-xl border-b border-[#1A1F2E]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src={coinedgeLogo} alt="Coinedge" className="h-8 brightness-0 invert" />
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">Coverage</a>
            <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">Wallet</a>
            <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">Settings</a>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 pt-24">
        {/* Protection Triggered Banner */}
        <motion.div
          className="relative bg-gradient-to-r from-[#00D4FF] to-[#0099CC] rounded-2xl p-8 mb-8 overflow-hidden shadow-2xl shadow-[#00D4FF]/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated shine */}
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
                  <span className="font-semibold">${payoutAmount.toLocaleString()} USDC</span> deposited automatically
                </p>
              </div>
            </div>

            <button className="px-6 py-3 bg-[#0A0E17] hover:bg-[#1A1F2E] text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg">
              <Wallet className="w-5 h-5" />
              View Wallet
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
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-green-500">● Maximum Coverage Paid Out</span>
                </div>
                <div className="text-2xl">
                  Protected: <span className="text-[#00D4FF]">${onboardingState.protectedAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm opacity-60">BTC at Month-End</div>
              <div className="text-2xl">${BTC_PRICE.toLocaleString()}</div>
              <div className="text-red-500 text-sm">{MONTH_DRAWDOWN}% drawdown</div>
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
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">30-Day BTC Performance</h2>
                <div className="text-sm opacity-60">Dec 2025</div>
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

                  {/* -10% threshold */}
                  <line x1="0" y1="60" x2="600" y2="60" stroke="#FFA500" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                  <text x="10" y="55" fill="#FFA500" fontSize="10">-10% Triggered</text>

                  {/* -20% threshold */}
                  <line x1="0" y1="90" x2="600" y2="90" stroke="#FF4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                  <text x="10" y="85" fill="#FF4444" fontSize="10">-20% Triggered</text>

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

                  {/* Shield icon */}
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

              {/* Status */}
              <div className="mt-6 bg-gradient-to-r from-green-500/20 to-[#00D4FF]/20 border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-60">Final Drawdown</div>
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
                <div className="mt-3 text-sm text-green-400">
                  ✓ ${payoutAmount.toLocaleString()} USDC credited to your Protection Wallet
                </div>
              </div>
            </motion.div>

            {/* Protection Wallet - Updated */}
            <motion.div
              className="bg-gradient-to-br from-[#1A1F2E]/80 to-[#0A0E17]/80 backdrop-blur-xl border border-[#00D4FF]/30 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Wallet className="w-6 h-6 text-[#00D4FF]" />
                  <h2 className="text-2xl">Coinedge Protection Wallet</h2>
                </div>
                <button 
                  onClick={() => navigate('payout-details')}
                  className="text-sm text-[#00D4FF] hover:underline flex items-center gap-1"
                >
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center py-8">
                <div className="text-sm opacity-60 mb-2">Balance</div>
                <div className="text-5xl text-[#00D4FF] mb-2">${payoutAmount.toLocaleString()} <span className="text-2xl opacity-80">USDC</span></div>
                <div className="text-green-500 text-sm mb-6">+${payoutAmount.toLocaleString()} this month</div>
                <button 
                  onClick={() => navigate('withdraw')}
                  className="px-8 py-3 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#00B8E6] hover:to-[#0088BB] text-[#0A0E17] rounded-lg transition-all duration-300 shadow-lg shadow-[#00D4FF]/30"
                >
                  Withdraw to Wallet
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* New Hedge Starts */}
            <motion.div
              className="bg-gradient-to-br from-[#00D4FF]/20 to-[#0099CC]/20 backdrop-blur-xl border border-[#00D4FF]/50 rounded-2xl p-6 shadow-lg shadow-[#00D4FF]/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-5 h-5 text-[#00D4FF]" />
                <h3 className="text-lg">New Hedge Starts</h3>
              </div>
              <div className="text-2xl mb-1">Jan 1, 2026</div>
              <div className="text-sm opacity-70">Fresh protection period begins</div>
            </motion.div>

            {/* Next Billing */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-lg mb-4">Total Earned All Time</h3>
              <div className="text-3xl text-[#00D4FF]">${payoutAmount.toLocaleString()}</div>
              <div className="text-sm text-green-500 mt-2">+${payoutAmount.toLocaleString()} this month</div>
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
                  <Shield className="w-4 h-4 text-[#00D4FF]" />
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