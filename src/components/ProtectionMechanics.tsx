import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, Wallet } from 'lucide-react';

export function ProtectionMechanics() {
  return (
    <section className="py-20 px-4 bg-[#0A0E17]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Protection Mechanics <span className="text-[#00D4FF]">Simplified</span>
          </h2>
          <p className="text-xl opacity-80">
            How your coverage activates and pays out
          </p>
        </motion.div>

        {/* Visual Timeline */}
        <div className="relative max-w-4xl mx-auto mb-12">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00D4FF]/20 via-[#00D4FF]/50 to-[#00D4FF] -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Warning Trigger */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 border-2 border-yellow-500 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <AlertTriangle className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl mb-2">Warning Trigger</h3>
                <p className="text-3xl text-yellow-500 mb-2">-10%</p>
                <p className="text-sm opacity-70">System monitors BTC price monthly. At -10%, standard tier activates.</p>
              </div>
            </motion.div>

            {/* Step 2: Stabilization Trigger */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500 flex items-center justify-center mx-auto mb-4 relative z-10">
                  <TrendingDown className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl mb-2">Stabilization Trigger</h3>
                <p className="text-3xl text-red-500 mb-2">-20%</p>
                <p className="text-sm opacity-70">Enhanced tier triggers. Maximum protection for severe crashes.</p>
              </div>
            </motion.div>

            {/* Step 3: USDC Deposited */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/50 rounded-2xl p-6 text-center shadow-lg shadow-[#00D4FF]/20">
                <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 border-2 border-[#00D4FF] flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Wallet className="w-8 h-8 text-[#00D4FF]" />
                </div>
                <h3 className="text-xl mb-2">USDC Deposited</h3>
                <p className="text-3xl text-[#00D4FF] mb-2">Instantly</p>
                <p className="text-sm opacity-70">Credits auto-deposited to your Coinedge Protection Wallet.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Explanation Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-[#1A1F2E]/80 to-[#0A0E17]/80 backdrop-blur-xl border border-[#00D4FF]/30 rounded-2xl p-8">
            <h3 className="text-2xl mb-4 text-center">How Payouts Are Calculated</h3>
            
            <div className="space-y-4">
              <div className="bg-[#0A0E17]/50 rounded-xl p-4">
                <p className="opacity-80 mb-2">
                  <span className="text-[#00D4FF]">Example:</span> You protect $20,000 with Enhanced (20%) tier
                </p>
                <p className="opacity-80">
                  BTC starts month at $100,000 → ends at $78,000 (down 22%)
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 text-2xl">
                <span className="opacity-60">Your payout:</span>
                <span className="text-[#00D4FF]">$4,000 USDC</span>
              </div>

              <div className="bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-xl p-4">
                <p className="text-sm opacity-80 text-center">
                  20% of $20,000 = $4,000 maximum coverage reached
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#00D4FF]/20">
              <p className="text-sm opacity-60 text-center">
                Credits calculated at month-end based on closing price. Fresh hedge every 30 days.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visual representation */}
        <motion.div
          className="mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative h-48 bg-[#1A1F2E]/30 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl overflow-hidden">
            {/* Chart visualization */}
            <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="priceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="70%" stopColor="#yellow" />
                  <stop offset="100%" stopColor="#ff4444" />
                </linearGradient>
              </defs>
              
              {/* Price line */}
              <motion.path
                d="M 0 50 L 200 50 L 400 90 L 500 120 L 600 140"
                fill="none"
                stroke="url(#priceGradient)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Threshold lines */}
              <line x1="0" y1="90" x2="600" y2="90" stroke="yellow" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
              <line x1="0" y1="120" x2="600" y2="120" stroke="red" strokeWidth="1" strokeDasharray="5,5" opacity="0.3" />
              
              {/* Labels */}
              <text x="10" y="85" fill="yellow" fontSize="12" opacity="0.6">-10% Standard</text>
              <text x="10" y="115" fill="red" fontSize="12" opacity="0.6">-20% Enhanced</text>
            </svg>

            {/* Shield protection overlay */}
            <div className="absolute bottom-4 right-4">
              <div className="bg-[#00D4FF]/20 backdrop-blur-sm border border-[#00D4FF]/50 rounded-lg px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse"></div>
                <span className="text-sm">Protection Active</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
