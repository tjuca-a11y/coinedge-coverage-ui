import { motion } from 'motion/react';
import { useState } from 'react';
import { TrendingUp, ArrowRight, ArrowLeft, HelpCircle } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface ChooseProtectionAmountProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
  updateState: (updates: Partial<OnboardingState>) => void;
}

const BTC_PRICE = 94200;
const MIN_AMOUNT = 5000;
const MAX_AMOUNT = 500000;

export function ChooseProtectionAmount({ navigate, onboardingState, updateState }: ChooseProtectionAmountProps) {
  const [amount, setAmount] = useState(onboardingState.protectedAmount);
  const [error, setError] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const btcAmount = amount / BTC_PRICE;
  const enhancedPayout = amount * 0.2;

  const handleAmountChange = (newAmount: number) => {
    if (newAmount < MIN_AMOUNT) {
      setError(`Minimum protection amount is $${MIN_AMOUNT.toLocaleString()} USD`);
      setAmount(newAmount);
    } else if (newAmount > MAX_AMOUNT) {
      setAmount(MAX_AMOUNT);
      setError('');
    } else {
      setAmount(newAmount);
      setError('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, '');
    const numValue = value === '' ? 0 : Number(value);
    handleAmountChange(numValue);
  };

  const handleContinue = () => {
    if (amount < MIN_AMOUNT) {
      setError(`Minimum protection amount is $${MIN_AMOUNT.toLocaleString()} USD`);
      return;
    }
    updateState({ 
      protectedAmount: amount,
      btcAmount: btcAmount
    });
    navigate('tier');
  };

  return (
    <div className="min-h-screen">
      {/* Header with Logo and Back Button */}
      <div className="fixed top-8 left-8 right-8 z-20 flex items-center justify-between">
        <button onClick={() => navigate('landing')}>
          <img src={coinedgeLogo} alt="Coinedge" className="h-8 brightness-0 invert" />
        </button>
        <button 
          onClick={() => navigate('account')}
          className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden md:inline">Back</span>
        </button>
      </div>

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
              <span className="text-[#00D4FF] text-xl">${BTC_PRICE.toLocaleString()}</span>
            </div>
            <div className="text-green-500 text-sm">+3.2% 24h</div>
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
                How much BTC value<br />do you want to <span className="text-[#00D4FF]">shield?</span>
              </h1>
            </div>

            {/* Amount Input */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-[#00D4FF]">$</div>
                <input
                  type="number"
                  value={amount}
                  onChange={handleInputChange}
                  className={`w-full bg-[#0A0E17]/50 border-2 rounded-2xl px-16 py-6 text-4xl text-center focus:outline-none transition-colors ${
                    error 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-[#00D4FF]/30 focus:border-[#00D4FF]'
                  }`}
                  min={5000}
                  max={500000}
                  step={1000}
                />
              </div>
              
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 text-center"
                >
                  {error}
                </motion.div>
              )}
              
              {/* BTC Equivalent */}
              {!error && (
                <motion.div
                  className="text-center mt-4 text-xl opacity-70"
                  key={btcAmount}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                >
                  ≈ <span className="text-[#00D4FF]">{btcAmount.toFixed(4)} BTC</span>
                </motion.div>
              )}
            </div>

            {/* Slider */}
            <div className="mb-8">
              <input
                type="range"
                value={amount >= MIN_AMOUNT ? amount : MIN_AMOUNT}
                onChange={(e) => handleAmountChange(Number(e.target.value))}
                min={5000}
                max={500000}
                step={1000}
                className="w-full h-2 bg-[#1A1F2E] rounded-full appearance-none cursor-pointer slider-thumb"
                style={{
                  background: `linear-gradient(to right, #00D4FF ${((Math.max(amount, MIN_AMOUNT) - 5000) / (500000 - 5000)) * 100}%, #1A1F2E ${((Math.max(amount, MIN_AMOUNT) - 5000) / (500000 - 5000)) * 100}%)`
                }}
              />
              <div className="flex justify-between mt-2 text-sm items-center">
                <div className="relative group">
                  <div className="flex items-center gap-1 opacity-40">
                    <span>Minimum $5,000</span>
                    <HelpCircle className="w-3 h-3" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute left-0 top-full mt-2 w-64 bg-[#1A1F2E] border border-[#00D4FF]/30 rounded-xl p-3 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
                    We focus on meaningful BTC holdings. Minimum protects both you and the pooled hedge from abuse.
                  </div>
                </div>
                <span className="opacity-60">$500,000+</span>
              </div>
            </div>

            {/* Quick Select */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
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

            {/* Live Protection Preview */}
            <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#0099CC]/10 border border-[#00D4FF]/30 rounded-2xl p-6 mb-8">
              <p className="text-sm opacity-60 mb-3">Real-time protection preview:</p>
              <p className="text-xl">
                You'll be protected up to <span className="text-[#00D4FF] text-2xl">${enhancedPayout.toLocaleString()} USDC</span> this month
              </p>
              <p className="text-sm opacity-60 mt-2">(Enhanced tier – 20% coverage)</p>
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