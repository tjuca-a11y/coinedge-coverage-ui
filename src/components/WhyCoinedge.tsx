import { motion } from 'motion/react';
import { Shield, FileX, TrendingUp, Coins } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'No custody required',
    description: 'Your Bitcoin stays in your wallet. We never touch, hold, or have access to your coins. You maintain full sovereignty.',
    gradient: 'from-[#00D4FF] to-[#0099CC]'
  },
  {
    icon: FileX,
    title: 'Not insurance (no claims)',
    description: 'No paperwork, no claim forms, no waiting. When BTC drops, you automatically get paid. Zero bureaucracy.',
    gradient: 'from-[#0099CC] to-[#00D4FF]'
  },
  {
    icon: TrendingUp,
    title: 'Not derivatives (you own nothing complex)',
    description: 'No options, no futures, no margin. Just a simple subscription. No liquidation risk, no counterparty exposure.',
    gradient: 'from-[#00D4FF] to-[#0099CC]'
  },
  {
    icon: Coins,
    title: 'Paid in USDC (tax-friendly, instant)',
    description: 'Receive stabilization credits in USDC — liquid, stable, and widely accepted. Simpler tax treatment than selling BTC.',
    gradient: 'from-[#0099CC] to-[#00D4FF]'
  }
];

export function WhyCoinedge() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0A0E17] to-[#1A1F2E]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Why Coinedge Coverage <span className="text-[#00D4FF]">Wins</span>
          </h2>
          <p className="text-xl opacity-80">
            A fundamentally better approach to Bitcoin downside protection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6 h-full hover:border-[#00D4FF]/50 transition-all duration-300 overflow-hidden group-hover:shadow-lg group-hover:shadow-[#00D4FF]/20">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-[2px] mb-4`}>
                    <div className="w-full h-full bg-[#1A1F2E] rounded-[10px] flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-[#00D4FF]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl mb-3">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-sm opacity-70 leading-relaxed">{feature.description}</p>
                </div>

                {/* Bottom gradient accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#00D4FF]/20">
                    <th className="text-left p-4 opacity-60">Feature</th>
                    <th className="text-center p-4">
                      <div className="text-[#00D4FF]">Coinedge Coverage</div>
                    </th>
                    <th className="text-center p-4 opacity-60">Traditional Insurance</th>
                    <th className="text-center p-4 opacity-60">Put Options</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#00D4FF]/10">
                  <tr>
                    <td className="p-4">Custody Required</td>
                    <td className="text-center p-4">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500">✓</span>
                    </td>
                    <td className="text-center p-4 opacity-40">Often Yes</td>
                    <td className="text-center p-4 opacity-40">No</td>
                  </tr>
                  <tr>
                    <td className="p-4">Claims Process</td>
                    <td className="text-center p-4">
                      <span className="text-[#00D4FF]">Automatic</span>
                    </td>
                    <td className="text-center p-4 opacity-40">Manual</td>
                    <td className="text-center p-4 opacity-40">Exercise Required</td>
                  </tr>
                  <tr>
                    <td className="p-4">Complexity</td>
                    <td className="text-center p-4">
                      <span className="text-[#00D4FF]">Simple</span>
                    </td>
                    <td className="text-center p-4 opacity-40">High</td>
                    <td className="text-center p-4 opacity-40">Very High</td>
                  </tr>
                  <tr>
                    <td className="p-4">Liquidation Risk</td>
                    <td className="text-center p-4">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500">✓</span>
                    </td>
                    <td className="text-center p-4 opacity-40">N/A</td>
                    <td className="text-center p-4 opacity-40">Yes</td>
                  </tr>
                  <tr>
                    <td className="p-4">Payout Speed</td>
                    <td className="text-center p-4">
                      <span className="text-[#00D4FF]">Instant</span>
                    </td>
                    <td className="text-center p-4 opacity-40">Weeks/Months</td>
                    <td className="text-center p-4 opacity-40">Same Day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
