import { motion } from 'motion/react';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { OnboardingScreen } from '../App';

interface FinalCTAProps {
  navigate?: (screen: OnboardingScreen) => void;
}

export function FinalCTA({ navigate }: FinalCTAProps) {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0099CC]"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0A0E17] rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Shield icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl mb-6">
            <Shield className="w-10 h-10 text-[#0A0E17]" />
          </div>

          <h2 className="text-5xl md:text-6xl mb-4 text-[#0A0E17]">
            Start Protecting Your Bitcoin Today
          </h2>
          
          <p className="text-2xl mb-8 text-[#0A0E17]/80">
            First month risk-free. Cancel anytime.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-[#0A0E17]/80">
              <CheckCircle className="w-5 h-5" />
              <span>No custody required</span>
            </div>
            <div className="flex items-center gap-2 text-[#0A0E17]/80">
              <CheckCircle className="w-5 h-5" />
              <span>Setup in 2 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-[#0A0E17]/80">
              <CheckCircle className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => navigate?.('welcome')}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#0A0E17] hover:bg-[#1A1F2E] text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-[#0A0E17]/50 hover:scale-105 text-xl"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Covered Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Small print */}
          <p className="mt-6 text-sm text-[#0A0E17]/60">
            No KYC for {'<'} $50K protection amount
          </p>
        </motion.div>

        {/* Mock dashboard preview */}
        <motion.div
          className="mt-16 max-w-md mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* iPhone mockup */}
            <div className="relative mx-auto" style={{ width: '280px' }}>
              {/* Phone frame */}
              <div className="relative bg-[#0A0E17] rounded-[40px] p-3 shadow-2xl border-4 border-[#1A1F2E]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0E17] rounded-b-2xl z-20"></div>
                
                {/* Screen */}
                <div className="relative bg-[#1A1F2E] rounded-[32px] overflow-hidden">
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[#F5F5F5]/60">Coinedge Coverage</div>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>

                    {/* Status card */}
                    <div className="bg-gradient-to-br from-[#00D4FF]/20 to-[#0099CC]/20 backdrop-blur-xl border border-[#00D4FF]/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-[#00D4FF]" />
                        <span className="text-xs text-[#00D4FF]">Coverage Active</span>
                      </div>
                      <div className="text-2xl text-[#F5F5F5] mb-1">$20,000</div>
                      <div className="text-xs text-[#F5F5F5]/60">Protected Amount</div>
                    </div>

                    {/* Credits card */}
                    <div className="bg-[#0A0E17]/50 border border-[#00D4FF]/20 rounded-xl p-4">
                      <div className="text-xs text-[#F5F5F5]/60 mb-1">USDC Credits Available</div>
                      <div className="text-xl text-[#00D4FF]">$0.00</div>
                      <div className="text-xs text-[#F5F5F5]/40 mt-2">No drawdowns this month</div>
                    </div>

                    {/* Mini chart */}
                    <div className="h-20 bg-[#0A0E17]/30 rounded-lg flex items-end p-2 gap-1">
                      {[40, 50, 45, 55, 60, 58, 62, 65].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#00D4FF] to-[#0099CC] rounded-sm opacity-50"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#00D4FF] blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}