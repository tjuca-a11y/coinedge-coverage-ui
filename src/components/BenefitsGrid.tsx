import { motion } from 'motion/react';
import { Shield, Zap, DollarSign, Unlock, Store, Coins } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Protect Your BTC From Major Drawdowns',
    points: [
      'Automatically triggered when BTC drops 10% or 20% in a month',
      'Get paid in USDC to offset your losses',
      'Your Bitcoin stays in your wallet — we never touch it'
    ]
  },
  {
    icon: Zap,
    title: 'Automatic Stabilization Credits (Paid in USDC)',
    points: [
      'No claims, no paperwork, no hassle',
      'Credits deposited directly to your Coinedge Protection Wallet',
      'Instant liquidity when you need it most'
    ]
  },
  {
    icon: DollarSign,
    title: 'Simple Monthly Fee',
    points: [
      'Flat, transparent pricing based on protection amount',
      'No hidden spreads, no markups, no surprises',
      'Cancel anytime — no long-term commitments'
    ]
  },
  {
    icon: Unlock,
    title: 'No Lockups, No Staking, No Derivatives',
    points: [
      'Keep full control of your Bitcoin',
      'Not insurance, not options, not futures',
      'Simple subscription — that\'s it'
    ]
  },
  {
    icon: Store,
    title: 'Perfect for Merchants & Long-Term Holders',
    points: [
      'Merchants: Protect BTC revenue without converting to fiat',
      'Holders: Sleep easy knowing drawdowns are covered',
      'Institutions: Hedge treasury exposure at scale'
    ]
  },
  {
    icon: Coins,
    title: 'Stabilization Paid in USDC — Stable, Liquid, Immediate',
    points: [
      'No waiting for BTC to recover',
      'USDC credited at month-end based on closing price',
      'Use it however you want: hold, spend, or rebuy BTC'
    ]
  }
];

export function BenefitsGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Coverage That <span className="text-[#00D4FF]">Just Works</span>
          </h2>
          <p className="text-xl opacity-80">
            The volatility protection Bitcoin has always needed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Glassmorphism card */}
              <div className="relative bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6 h-full hover:border-[#00D4FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00D4FF]/10">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00D4FF]/20 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-[#00D4FF]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl mb-4">{benefit.title}</h3>

                  {/* Points */}
                  <ul className="space-y-2">
                    {benefit.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 opacity-80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
