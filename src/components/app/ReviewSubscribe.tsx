import { motion } from 'motion/react';
import { useState } from 'react';
import { Shield, CreditCard, Wallet, Smartphone, ArrowRight, Check } from 'lucide-react';
import { AppHeader } from '../shared/AppHeader';
import { Screen, AppState } from '../../App';

interface ReviewSubscribeProps {
  navigate: (screen: Screen) => void;
  appState: AppState;
}

export function ReviewSubscribe({ navigate, appState }: ReviewSubscribeProps) {
  const [paymentMethod, setPaymentMethod] = useState<'usdc' | 'card' | 'apple'>('usdc');

  const handleStartProtection = () => {
    navigate('confirmation');
  };

  const nextBillingDate = new Date();
  nextBillingDate.setDate(nextBillingDate.getDate() + 30);

  return (
    <div className="min-h-screen">
      <AppHeader navigate={navigate} showBack backScreen="tier" />
      
      <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl mb-4">
              Review & <span className="text-[#00D4FF]">Subscribe</span>
            </h1>
            <p className="text-xl opacity-70">
              Confirm your coverage details
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Summary Card */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <h2 className="text-2xl">Coverage Summary</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm opacity-60 mb-1">Protected Amount</div>
                  <div className="text-3xl text-[#00D4FF]">${appState.protectedAmount.toLocaleString()}</div>
                  <div className="text-sm opacity-60 mt-1">≈ {appState.btcAmount.toFixed(4)} BTC</div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent"></div>

                <div>
                  <div className="text-sm opacity-60 mb-1">Coverage Tier</div>
                  <div className="text-xl">
                    {appState.selectedTier === 'standard' ? 'Standard (10%)' : 'Enhanced (20%)'}
                  </div>
                </div>

                <div>
                  <div className="text-sm opacity-60 mb-1">Monthly Fee</div>
                  <div className="text-2xl">${appState.monthlyFee} USDC</div>
                  <div className="text-sm opacity-60 mt-1">or fiat equivalent</div>
                </div>

                <div>
                  <div className="text-sm opacity-60 mb-1">Next Billing</div>
                  <div className="text-xl">{nextBillingDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent"></div>

                <div>
                  <div className="text-sm opacity-60 mb-1">Maximum Payout</div>
                  <div className="text-2xl text-[#00D4FF]">
                    ${(appState.protectedAmount * (appState.selectedTier === 'standard' ? 0.1 : 0.2)).toLocaleString()} USDC
                  </div>
                  <div className="text-sm opacity-60 mt-1">If trigger is hit this month</div>
                </div>

                <div className="bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-xl p-4 text-sm">
                  <div className="flex items-center gap-2 mb-2 text-[#00D4FF]">
                    <Check className="w-4 h-4" />
                    <span>First month risk-free</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#00D4FF]">
                    <Check className="w-4 h-4" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl mb-6">Payment Method</h2>

              <div className="space-y-3 mb-8">
                {/* USDC */}
                <button
                  onClick={() => setPaymentMethod('usdc')}
                  className={`w-full p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                    paymentMethod === 'usdc'
                      ? 'bg-[#00D4FF]/20 border-[#00D4FF]'
                      : 'bg-[#0A0E17]/50 border-[#00D4FF]/20 hover:border-[#00D4FF]/50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div className="flex-1 text-left">
                    <div>Pay with USDC</div>
                    <div className="text-sm opacity-60">From connected wallet</div>
                  </div>
                  {paymentMethod === 'usdc' && (
                    <Check className="w-5 h-5 text-[#00D4FF]" />
                  )}
                </button>

                {/* Credit/Debit Card */}
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                    paymentMethod === 'card'
                      ? 'bg-[#00D4FF]/20 border-[#00D4FF]'
                      : 'bg-[#0A0E17]/50 border-[#00D4FF]/20 hover:border-[#00D4FF]/50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div className="flex-1 text-left">
                    <div>Credit / Debit Card</div>
                    <div className="text-sm opacity-60">Visa, Mastercard, Amex</div>
                  </div>
                  {paymentMethod === 'card' && (
                    <Check className="w-5 h-5 text-[#00D4FF]" />
                  )}
                </button>

                {/* Apple Pay / Google Pay */}
                <button
                  onClick={() => setPaymentMethod('apple')}
                  className={`w-full p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                    paymentMethod === 'apple'
                      ? 'bg-[#00D4FF]/20 border-[#00D4FF]'
                      : 'bg-[#0A0E17]/50 border-[#00D4FF]/20 hover:border-[#00D4FF]/50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#00D4FF]/20 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <div className="flex-1 text-left">
                    <div>Apple Pay / Google Pay</div>
                    <div className="text-sm opacity-60">Quick checkout</div>
                  </div>
                  {paymentMethod === 'apple' && (
                    <Check className="w-5 h-5 text-[#00D4FF]" />
                  )}
                </button>
              </div>

              {/* Start Protection Button */}
              <button
                onClick={handleStartProtection}
                className="group w-full py-5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#00B8E6] hover:to-[#0088BB] text-[#0A0E17] rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#00D4FF]/30 hover:shadow-xl hover:shadow-[#00D4FF]/50 text-xl mb-4"
              >
                Start Protection
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-center opacity-60">
                By subscribing, you agree to our Terms of Service and Privacy Policy
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
