import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Standard',
    threshold: '10%',
    priceRange: '$24–$39',
    protectionExample: '$20K',
    maxPayout: '$2,000',
    popular: false,
    features: [
      'Protection triggers at -10% monthly drop',
      'USDC credits up to 10% of protected amount',
      'Flat monthly subscription fee',
      'No lockups or derivatives',
      'Cancel anytime'
    ]
  },
  {
    name: 'Enhanced',
    threshold: '20%',
    priceRange: '$49–$79',
    protectionExample: '$20K',
    maxPayout: '$4,000',
    popular: true,
    features: [
      'Protection triggers at -20% monthly drop',
      'USDC credits up to 20% of protected amount',
      'Flat monthly subscription fee',
      'No lockups or derivatives',
      'Cancel anytime',
      'Higher coverage for severe crashes'
    ]
  }
];

export function PricingTable() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0A0E17] to-[#1A1F2E]/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Coverage <span className="text-[#00D4FF]">Tiers</span>
          </h2>
          <p className="text-xl opacity-80">
            Choose the protection level that's right for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A0E17] px-4 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-[#00D4FF]/50">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">MOST POPULAR</span>
                  </div>
                </div>
              )}

              {/* Pricing card */}
              <div className={`relative bg-[#1A1F2E]/50 backdrop-blur-xl border rounded-2xl p-8 h-full ${
                tier.popular 
                  ? 'border-[#00D4FF] shadow-xl shadow-[#00D4FF]/20' 
                  : 'border-[#00D4FF]/20 hover:border-[#00D4FF]/50'
              } transition-all duration-300`}>
                {/* Glow effect for popular */}
                {tier.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 to-transparent rounded-2xl"></div>
                )}

                <div className="relative z-10">
                  {/* Tier name */}
                  <h3 className="text-3xl mb-2">{tier.name}</h3>
                  <p className="opacity-60 mb-6">{tier.threshold} Protection Threshold</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl text-[#00D4FF]">{tier.priceRange}</span>
                      <span className="opacity-60">/month</span>
                    </div>
                    <p className="text-sm opacity-60">
                      for {tier.protectionExample} protected → up to <span className="text-[#00D4FF]">{tier.maxPayout} USDC</span>
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent mb-6"></div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                        <span className="opacity-80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-lg transition-all duration-300 ${
                    tier.popular
                      ? 'bg-[#00D4FF] hover:bg-[#00B8E6] text-[#0A0E17] shadow-lg shadow-[#00D4FF]/30 hover:shadow-xl hover:shadow-[#00D4FF]/50'
                      : 'bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 border border-[#00D4FF]/50 text-[#00D4FF]'
                  }`}>
                    Get {tier.name} Coverage
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm opacity-60">
            Pricing scales with amount protected. Full transparency – no hidden spreads.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
