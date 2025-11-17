import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { AppHeader } from '../shared/AppHeader';
import { Screen, AppState } from '../../App';

interface ChooseAmountProps {
  navigate: (screen: Screen) => void;
  appState: AppState;
  updateState: (updates: Partial<AppState>) => void;
}

const BTC_PRICE = 64102; // Current BTC price

export function ChooseAmount({ navigate, appState, updateState }: ChooseAmountProps) {
  const [amount, setAmount] = useState(appState.protectedAmount);
  const btcAmount = amount / BTC_PRICE;

  const handleContinue = () => {
    updateState({ 
      protectedAmount: amount,
      btcAmount: btcAmount
    });
    navigate('tier');
  };

  return (
    <div className="min-h-screen">
      <AppHeader navigate={navigate} showBack backScreen="connect" />
      
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-3xl">
          {/* BTC Price Ticker */}
          <motion.div
            className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-xl px-6 py-3 flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-[#00D4FF]" />
              <span className="opacity-60">Current BTC Price:</span>
              <span className="text-[#00D4FF]">${BTC_PRICE.toLocaleString()}</span>
            </div>
            <div className="text-green-500 text-sm">+2.3% 24h</div>
          </motion.div>

          {/* Main Card */}
          <motion.div
            className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 md:p-12 shadow-xl shadow-[#00D4FF]/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl mb-4">
                How much BTC do you want to <span className="text-[#00D4FF]">protect?</span>
              </h1>
              <p className="text-lg opacity-70">
                Choose your protection amount in USD
              </p>
            </div>

            {/* Amount Input */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-[#00D4FF]">$</div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full bg-[#0A0E17]/50 border-2 border-[#00D4FF]/30 rounded-2xl px-16 py-6 text-4xl text-center focus:border-[#00D4FF] focus:outline-none transition-colors"
                  min={5000}
                  max={500000}
                  step={1000}
                />
              </div>
              
              {/* BTC Equivalent */}
              <motion.div
                className="text-center mt-4 text-xl opacity-70"
                key={btcAmount}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
              >
                ≈ <span className="text-[#00D4FF]">{btcAmount.toFixed(4)} BTC</span>
              </motion.div>
            </div>

            {/* Slider */}
            <div className="mb-12">
              <input
                type="range"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min={5000}
                max={500000}
                step={1000}
                className="w-full h-2 bg-[#1A1F2E] rounded-full appearance-none cursor-pointer slider-thumb"
                style={{
                  background: `linear-gradient(to right, #00D4FF ${((amount - 5000) / (500000 - 5000)) * 100}%, #1A1F2E ${((amount - 5000) / (500000 - 5000)) * 100}%)`
                }}
              />
              <div className="flex justify-between mt-2 text-sm opacity-60">
                <span>$5,000</span>
                <span>$500,000+</span>
              </div>
            </div>

            {/* Quick Select Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {[10000, 20000, 50000, 100000].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setAmount(preset)}
                  className={`py-3 rounded-xl border transition-all duration-300 ${
                    amount === preset
                      ? 'bg-[#00D4FF]/20 border-[#00D4FF] text-[#00D4FF]'
                      : 'bg-[#0A0E17]/50 border-[#00D4FF]/20 hover:border-[#00D4FF]/50'
                  }`}
                >
                  ${(preset / 1000)}K
                </button>
              ))}
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="group w-full py-5 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#00B8E6] hover:to-[#0088BB] text-[#0A0E17] rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#00D4FF]/30 hover:shadow-xl hover:shadow-[#00D4FF]/50 text-xl"
            >
              Continue
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Info */}
          <motion.div
            className="mt-6 text-center text-sm opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Protection amounts can be adjusted anytime from your dashboard
          </motion.div>
        </div>
      </div>

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00D4FF, #0099CC);
          cursor: pointer;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00D4FF, #0099CC);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
