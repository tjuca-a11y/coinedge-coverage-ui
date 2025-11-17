import { motion } from 'motion/react';
import { ShoppingBag, TrendingUp, Shield, Quote } from 'lucide-react';

const merchantLogos = [
  'Square', 'Stripe', 'Shopify', 'BitPay', 'OpenNode'
];

export function MerchantSpotlight() {
  return (
    <section className="py-20 px-4 bg-[#1A1F2E]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full px-4 py-2 mb-6">
            <ShoppingBag className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-[#00D4FF]">For Merchants</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-4">
            The Volatility Shield Merchants <span className="text-[#00D4FF]">Have Been Waiting For</span>
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Perfect for Square, Stripe, Shopify, BitPay, OpenNode merchants
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-[#0A0E17]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">0.3–0.5% of monthly BTC volume</h3>
                  <p className="opacity-70">Simple percentage-based pricing. Protect all your Bitcoin revenue for less than typical payment processing fees.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0E17]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Auto-protects every payment received</h3>
                  <p className="opacity-70">Set it and forget it. Every Bitcoin payment you receive is automatically protected against monthly drawdowns.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0E17]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Removes the #1 reason merchants refuse Bitcoin</h3>
                  <p className="opacity-70">Volatility anxiety eliminated. Keep Bitcoin on your balance sheet without panic-selling during dips.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Quote card */}
              <div className="bg-gradient-to-br from-[#00D4FF]/20 to-[#0099CC]/10 backdrop-blur-xl border border-[#00D4FF]/30 rounded-2xl p-8 shadow-xl shadow-[#00D4FF]/10">
                <Quote className="w-12 h-12 text-[#00D4FF] opacity-30 mb-4" />
                
                <blockquote className="text-2xl mb-6 leading-relaxed">
                  "Finally I can accept BTC without panic-selling every dip. This is the missing piece for actual Bitcoin commerce."
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0099CC]"></div>
                  <div>
                    <div>Shopify Merchant</div>
                    <div className="text-sm opacity-60">$2.3M annual revenue</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00D4FF] rounded-full blur-3xl opacity-20"></div>
            </div>

            {/* Platform logos */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              {merchantLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-[#0A0E17]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-lg px-4 py-2 text-sm opacity-70"
                >
                  {logo}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E6] text-[#0A0E17] rounded-lg transition-all duration-300 shadow-lg shadow-[#00D4FF]/30 hover:shadow-xl hover:shadow-[#00D4FF]/50 hover:scale-105">
            Protect My Merchant Revenue →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
