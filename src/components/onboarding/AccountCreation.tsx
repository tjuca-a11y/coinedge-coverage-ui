import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, ArrowLeft, Mail, Lock, User, Building2, Globe, Upload, Check } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen, OnboardingState } from '../../App';

interface AccountCreationProps {
  navigate: (screen: OnboardingScreen) => void;
  onboardingState: OnboardingState;
  updateState: (updates: Partial<OnboardingState>) => void;
}

export function AccountCreation({ navigate, onboardingState, updateState }: AccountCreationProps) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [idUploaded, setIdUploaded] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      updateState({ email });
      setStep(2);
    } else if (step === 2) {
      updateState({ name, phone, country });
      setStep(3);
    } else if (step === 3) {
      updateState({ verified: true, name });
      // Simulate ID verification
      setTimeout(() => {
        navigate('amount');
      }, 1500);
    }
  };

  const canProceed = () => {
    if (step === 1) return email && password.length >= 8;
    if (step === 2) return name && phone && country;
    if (step === 3) return idUploaded;
    return false;
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#00D4FF] rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0099CC] rounded-full blur-3xl opacity-5"></div>

      {/* Logo */}
      <div className="absolute top-8 left-8 right-8 z-20 flex items-center justify-between">
        <button onClick={() => navigate('landing')}>
          <img src={coinedgeLogo} alt="Coinedge" className="h-8 brightness-0 invert" />
        </button>
        <button 
          onClick={() => step === 1 ? navigate('welcome') : setStep(step - 1)}
          className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden md:inline">Back</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-20 left-0 right-0 z-30 bg-[#0A0E17]/80 backdrop-blur-xl border-b border-[#1A1F2E] py-4">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm opacity-60">Step {step} of 3</span>
            <span className="text-sm text-[#00D4FF]">{Math.round((step / 3) * 100)}% Complete</span>
          </div>
          <div className="h-2 bg-[#1A1F2E] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00D4FF] to-[#0099CC]"
              initial={{ width: 0 }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-sm opacity-60 mt-2">
            {step === 1 && 'Create Account'}
            {step === 2 && 'Personal Information'}
            {step === 3 && 'Verify Identity (required for USDC payouts)'}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-12">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {/* Step 1: Email & Password */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 md:p-10"
              >
                <h2 className="text-3xl md:text-4xl mb-2">Create Your Account</h2>
                <p className="opacity-60 mb-8">Get started with Coinedge Coverage</p>

                <div className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block text-sm opacity-70 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00D4FF] opacity-50" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className="w-full bg-[#0A0E17]/50 border border-[#00D4FF]/30 rounded-xl px-12 py-4 focus:border-[#00D4FF] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm opacity-70 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00D4FF] opacity-50" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Min. 8 characters"
                        className="w-full bg-[#0A0E17]/50 border border-[#00D4FF]/30 rounded-xl px-12 py-4 focus:border-[#00D4FF] focus:outline-none transition-colors"
                      />
                    </div>
                    {password.length > 0 && password.length < 8 && (
                      <p className="text-sm text-red-400 mt-1">Password must be at least 8 characters</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Personal Info */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 md:p-10"
              >
                <h2 className="text-3xl md:text-4xl mb-2">Tell Us About Your Business</h2>
                <p className="opacity-60 mb-8">We need some basic information for verification</p>

                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm opacity-70 mb-2">Your Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00D4FF] opacity-50" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Johnson"
                        className="w-full bg-[#0A0E17]/50 border border-[#00D4FF]/30 rounded-xl px-12 py-4 focus:border-[#00D4FF] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-sm opacity-70 mb-2">Business Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00D4FF] opacity-50" />
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Bitcoin Coffee Shop"
                        className="w-full bg-[#0A0E17]/50 border border-[#00D4FF]/30 rounded-xl px-12 py-4 focus:border-[#00D4FF] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm opacity-70 mb-2">Country of Operation</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00D4FF] opacity-50" />
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full bg-[#0A0E17]/50 border border-[#00D4FF]/30 rounded-xl px-12 py-4 focus:border-[#00D4FF] focus:outline-none transition-colors appearance-none"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                        <option>Germany</option>
                        <option>Singapore</option>
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: ID Verification */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 md:p-10"
              >
                <h2 className="text-3xl md:text-4xl mb-2">Verify Your Identity</h2>
                <p className="opacity-60 mb-8">Quick verification for USDC payouts</p>

                {!idUploaded ? (
                  <button
                    onClick={() => setIdUploaded(true)}
                    className="w-full border-2 border-dashed border-[#00D4FF]/30 hover:border-[#00D4FF]/60 rounded-2xl p-12 transition-all duration-300 hover:bg-[#00D4FF]/5"
                  >
                    <Upload className="w-12 h-12 text-[#00D4FF] mx-auto mb-4" />
                    <p className="text-lg mb-2">Upload ID Document</p>
                    <p className="text-sm opacity-60">Passport, Driver's License, or National ID</p>
                  </button>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-2xl p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="w-16 h-16 rounded-full bg-[#00D4FF] flex items-center justify-center mx-auto mb-4"
                    >
                      <Check className="w-8 h-8 text-[#0A0E17]" />
                    </motion.div>
                    <p className="text-xl mb-2">ID Uploaded Successfully</p>
                    <p className="text-sm opacity-60">Verifying your identity...</p>
                  </motion.div>
                )}

                <div className="mt-6 bg-[#0A0E17]/50 border border-[#00D4FF]/20 rounded-xl p-4 text-sm opacity-80">
                  <p className="mb-2"><span className="text-[#00D4FF]">Why we need this:</span></p>
                  <ul className="space-y-1 text-xs opacity-70">
                    <li>• Required for USDC payouts and compliance</li>
                    <li>• Your data is encrypted and secure</li>
                    <li>• Usually verified within minutes</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-6">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-4 bg-[#1A1F2E]/50 border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 rounded-xl transition-all duration-300 flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
            )}
            
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex-1 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                canProceed()
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#00B8E6] hover:to-[#0088BB] text-[#0A0E17] shadow-lg shadow-[#00D4FF]/30'
                  : 'bg-[#1A1F2E] text-[#F5F5F5]/30 cursor-not-allowed'
              }`}
            >
              {step === 3 ? 'Complete Verification' : 'Continue'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}