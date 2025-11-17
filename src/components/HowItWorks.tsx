import { motion } from 'motion/react';
import { CheckCircle, DollarSign, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: CheckCircle,
    title: 'Choose Your Protection',
    description: 'Select your protection amount and tier',
    details: [
      'Standard tier: 10% protection threshold',
      'Enhanced tier: 20% protection threshold',
      'Coverage from $5K to $500K+'
    ]
  },
  {
    number: '02',
    icon: DollarSign,
    title: 'Pay Flat Monthly Fee',
    description: 'Simple, transparent pricing',
    details: [
      'Standard: $24–$39/mo for $20K protected',
      'Enhanced: $49–$79/mo for $20K protected',
      'Pricing scales with protection amount'
    ]
  },
  {
    number: '03',
    icon: Zap,
    title: 'Automatic Protection',
    description: 'If BTC drops, you get paid',
    details: [
      'BTC ends month down >10% or >20%? Credits auto-deposited',
      'Up to your coverage cap in USDC',
      'No action needed — completely automatic'
    ]
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-[#0A0E17]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            How <span className="text-[#00D4FF]">It Works</span>
          </h2>
          <p className="text-xl opacity-80">
            Three simple steps to protect your Bitcoin
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5">
            <div className="max-w-5xl mx-auto px-32 h-full">
              <div className="h-full bg-gradient-to-r from-[#00D4FF] via-[#00B8E6] to-[#0099CC] opacity-30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative z-10">
                  {/* Number badge */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0099CC] flex items-center justify-center mb-6 mx-auto shadow-lg shadow-[#00D4FF]/30">
                    <step.icon className="w-8 h-8 text-[#0A0E17]" />
                  </div>

                  {/* Step number */}
                  <div className="text-6xl opacity-10 absolute top-0 right-4">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-2xl p-6 hover:border-[#00D4FF]/50 transition-all duration-300">
                    <h3 className="text-2xl mb-2">{step.title}</h3>
                    <p className="opacity-80 mb-4">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm opacity-70">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Vertical connecting line - mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-gradient-to-b from-[#00D4FF] to-[#0099CC] opacity-30 mx-auto my-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-xl px-6 py-3">
            <p className="text-sm opacity-80">
              <span className="text-[#00D4FF]">✓</span> Fresh hedge every 30 days • <span className="text-[#00D4FF]">✓</span> Cancel anytime • <span className="text-[#00D4FF]">✓</span> No hidden fees
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
