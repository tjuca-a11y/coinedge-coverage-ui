import { motion } from 'motion/react';
import { useState } from 'react';
import { X, Shield, TrendingUp, HelpCircle, CreditCard, Wallet } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface AdjustCoverageProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
  updateState: (updates: Partial<OnboardingState>) => void;
}

const MIN_AMOUNT = 5000;
const MAX_AMOUNT = 500000;

export function AdjustCoverage({ navigate, onboardingState, updateState }: AdjustCoverageProps) {
  const [protectedAmount, setProtectedAmount] = useState(onboardingState.protectedAmount);
  const [selectedTier, setSelectedTier] = useState<'standard' | 'enhanced'>(onboardingState.selectedTier || 'enhanced');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'usdc'>('card');
  const [error, setError] = useState('');

  const handleAmountChange = (newAmount: number) => {
    if (newAmount < MIN_AMOUNT) {
      setError(`Minimum protection amount is $${MIN_AMOUNT.toLocaleString()} USD`);
      setProtectedAmount(newAmount);
    } else if (newAmount > MAX_AMOUNT) {
      setProtectedAmount(MAX_AMOUNT);
      setError('');
    } else {
      setProtectedAmount(newAmount);
      setError('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\$|,/g, '');
    const numValue = value === '' ? 0 : parseInt(value);
    handleAmountChange(numValue);
  };

  const calculateFee = () => {
    const baseRate = selectedTier === 'standard' ? 0.003 : 0.0045;
    return Math.round(protectedAmount * baseRate);
  };

  const calculateMaxPayout = () => {
    const rate = selectedTier === 'standard' ? 0.10 : 0.20;
    return Math.round(protectedAmount * rate);
  };

  const handleSave = () => {
    if (protectedAmount < MIN_AMOUNT) {
      setError(`Minimum protection amount is $${MIN_AMOUNT.toLocaleString()} USD`);
      return;
    }
    updateState({ 
      protectedAmount, 
      selectedTier,
      monthlyFee: calculateFee()
    });
    navigate('adjust-coverage-confirmation');
  };

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white">
      {/* Navigation */}
      <nav className="border-b border-[#00D4FF]/20 backdrop-blur-xl bg-[#0A0E17]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <img src={coinedgeLogo} alt="Coinedge" className="h-8" />
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('dashboard')} className="opacity-60 hover:opacity-100 transition-opacity">Coverage</button>
            <button onClick={() => navigate('wallet')} className="opacity-60 hover:opacity-100 transition-opacity">Wallet</button>
            <button onClick={() => navigate('support')} className="opacity-60 hover:opacity-100 transition-opacity">Settings</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl mb-3">Adjust Your Coverage</h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30">
                <Shield className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-sm">Enhanced · 20% Protection</span>
              </div>
            </div>
            <button
              onClick={() => navigate('dashboard')}
              className="w-10 h-10 rounded-full bg-[#1A1F2E]/50 border border-[#00D4FF]/20 flex items-center justify-center hover:bg-[#1A1F2E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Protected Amount Slider */}
          <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 mb-6 shadow-[0_0_40px_rgba(0,212,255,0.1)]">
            <label className="block text-lg mb-6 opacity-80">Protected Amount</label>
            
            <div className="mb-6">
              <input
                type="text"
                value={`$${protectedAmount.toLocaleString()}`}
                onChange={handleInputChange}
                className="w-full text-5xl md:text-6xl bg-transparent border-none outline-none text-[#00D4FF] text-center mb-8"
              />

              <input
                type="range"
                min="5000"
                max="1000000"
                step="1000"
                value={protectedAmount}
                onChange={(e) => handleAmountChange(parseInt(e.target.value))}
                className="w-full h-2 bg-[#0A0E17] rounded-full appearance-none cursor-pointer slider-thumb"
                style={{
                  background: `linear-gradient(to right, #00D4FF 0%, #00D4FF ${((protectedAmount - 5000) / (1000000 - 5000)) * 100}%, #1A1F2E ${((protectedAmount - 5000) / (1000000 - 5000)) * 100}%, #1A1F2E 100%)`
                }}
              />

              <div className="flex justify-between text-sm opacity-50 mt-2">
                <span>$5,000</span>
                <span>$1,000,000+</span>
              </div>
            </div>

            {/* Live Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-[#00D4FF]/20">
              <div className="bg-[#0A0E17]/50 rounded-2xl p-4 border border-[#00D4FF]/10">
                <div className="text-sm opacity-60 mb-1">New Monthly Fee</div>
                <div className="text-2xl text-[#00D4FF]">${calculateFee()} USDC</div>
              </div>
              <div className="bg-[#0A0E17]/50 rounded-2xl p-4 border border-[#00D4FF]/10">
                <div className="text-sm opacity-60 mb-1">Max Monthly Payout</div>
                <div className="text-2xl text-[#00D4FF]">${calculateMaxPayout().toLocaleString()} USDC</div>
              </div>
            </div>
          </div>

          {/* Tier Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Standard Tier */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedTier('standard')}
              className={`relative bg-[#1A1F2E]/50 backdrop-blur-xl border rounded-3xl p-6 cursor-pointer transition-all ${
                selectedTier === 'standard'
                  ? 'border-[#00D4FF] shadow-[0_0_30px_rgba(0,212,255,0.3)]'
                  : 'border-[#00D4FF]/20 hover:border-[#00D4FF]/40'
              }`}
            >
              {selectedTier === 'standard' && (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#00D4FF] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#0A0E17]" />
                </div>
              )}
              <Shield className="w-10 h-10 text-[#00D4FF] mb-4 opacity-60" />
              <h3 className="text-2xl mb-2">Standard</h3>
              <div className="text-3xl text-[#00D4FF] mb-3">10% Protection</div>
              <p className="text-sm opacity-60">Perfect for moderate volatility protection</p>
            </motion.div>

            {/* Enhanced Tier */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedTier('enhanced')}
              className={`relative bg-[#1A1F2E]/50 backdrop-blur-xl border rounded-3xl p-6 cursor-pointer transition-all ${
                selectedTier === 'enhanced'
                  ? 'border-[#00D4FF] shadow-[0_0_30px_rgba(0,212,255,0.3)]'
                  : 'border-[#00D4FF]/20 hover:border-[#00D4FF]/40'
              }`}
            >
              {selectedTier === 'enhanced' && (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#00D4FF] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#0A0E17]" />
                </div>
              )}
              <Shield className="w-10 h-10 text-[#00D4FF] mb-4" />
              <h3 className="text-2xl mb-2">Enhanced</h3>
              <div className="text-3xl text-[#00D4FF] mb-3">20% Protection</div>
              <p className="text-sm opacity-60">Maximum coverage for serious hodlers</p>
            </motion.div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-8">
            <h3 className="text-xl mb-4 opacity-80">Payment Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Credit Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPaymentMethod('card')}
                className={`relative bg-[#1A1F2E]/50 backdrop-blur-xl border rounded-3xl p-6 cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#00D4FF] shadow-[0_0_30px_rgba(0,212,255,0.3)]'
                    : 'border-[#00D4FF]/20 hover:border-[#00D4FF]/40'
                }`}
              >
                {paymentMethod === 'card' && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#00D4FF] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#0A0E17]" />
                  </div>
                )}
                <CreditCard className="w-10 h-10 text-[#00D4FF] mb-4" />
                <h3 className="text-xl mb-2">Credit Card</h3>
                <p className="text-sm opacity-60 mb-3">VISA •••• 4242</p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('billing');
                  }}
                  className="text-xs text-[#00D4FF] hover:underline"
                >
                  View billing details →
                </button>
              </motion.div>

              {/* USDC Wallet */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPaymentMethod('usdc')}
                className={`relative bg-[#1A1F2E]/50 backdrop-blur-xl border rounded-3xl p-6 cursor-pointer transition-all ${
                  paymentMethod === 'usdc'
                    ? 'border-[#00D4FF] shadow-[0_0_30px_rgba(0,212,255,0.3)]'
                    : 'border-[#00D4FF]/20 hover:border-[#00D4FF]/40'
                }`}
              >
                {paymentMethod === 'usdc' && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#00D4FF] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#0A0E17]" />
                  </div>
                )}
                <Wallet className="w-10 h-10 text-[#00D4FF] mb-4" />
                <h3 className="text-xl mb-2">USDC Wallet</h3>
                <p className="text-sm opacity-60 mb-3">Pay from your USDC balance</p>
                <p className="text-xs text-[#00D4FF]">Balance: $5,600 USDC</p>
              </motion.div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              className="flex-1 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] text-[#0A0E17] py-5 px-8 rounded-2xl text-lg transition-all shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)]"
            >
              Save Changes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('dashboard')}
              className="flex-1 bg-[#1A1F2E]/50 border border-[#00D4FF]/20 py-5 px-8 rounded-2xl text-lg transition-all hover:bg-[#1A1F2E]"
            >
              Cancel
            </motion.button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 text-red-500 text-sm">
              <HelpCircle className="inline-block w-4 h-4 mr-1" />
              {error}
            </div>
          )}
        </motion.div>
      </div>

      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #00D4FF;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
        .slider-thumb::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #00D4FF;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
      `}</style>
    </div>
  );
}