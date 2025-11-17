import { motion } from 'motion/react';
import { ArrowRight, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { OnboardingScreen } from '../App';

interface LoginProps {
  navigate: (screen: OnboardingScreen) => void;
}

export function Login({ navigate }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState<'individual' | 'merchant'>('individual');

  const handleLogin = () => {
    // Simulate login - route to appropriate dashboard
    if (accountType === 'merchant') {
      navigate('merchant-dashboard');
    } else {
      navigate('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white">
      {/* Header */}
      <div className="fixed top-8 left-8 right-8 z-20 flex items-center justify-between">
        <button onClick={() => navigate('landing')}>
          <img src={coinedgeLogo} alt="Coinedge" className="h-8 brightness-0 invert" />
        </button>
        <button 
          onClick={() => navigate('landing')}
          className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden md:inline">Back</span>
        </button>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#00D4FF] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0099CC] rounded-full blur-3xl opacity-10"></div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Login Card */}
          <div className="bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 rounded-3xl p-8 md:p-10 shadow-xl shadow-[#00D4FF]/10">
            <div className="text-center mb-8">
              <h1 className="text-4xl mb-3">Welcome Back</h1>
              <p className="opacity-60">Log in to your Coinedge account</p>
            </div>

            {/* Account Type Toggle */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <button
                onClick={() => setAccountType('individual')}
                className={`py-3 rounded-xl border transition-all duration-300 ${
                  accountType === 'individual'
                    ? 'bg-[#00D4FF]/20 border-[#00D4FF] text-[#00D4FF]'
                    : 'bg-[#0A0E17]/50 border-[#00D4FF]/20 hover:border-[#00D4FF]/50'
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setAccountType('merchant')}
                className={`py-3 rounded-xl border transition-all duration-300 ${
                  accountType === 'merchant'
                    ? 'bg-[#00D4FF]/20 border-[#00D4FF] text-[#00D4FF]'
                    : 'bg-[#0A0E17]/50 border-[#00D4FF]/20 hover:border-[#00D4FF]/50'
                }`}
              >
                Merchant
              </button>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-sm mb-2 opacity-80">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00D4FF] opacity-60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-[#0A0E17]/50 border border-[#00D4FF]/30 rounded-xl px-12 py-4 focus:border-[#00D4FF] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-sm mb-2 opacity-80">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00D4FF] opacity-60" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#0A0E17]/50 border border-[#00D4FF]/30 rounded-xl px-12 py-4 focus:border-[#00D4FF] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-6">
              <button className="text-sm text-[#00D4FF] hover:underline">
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="group w-full py-4 bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#00B8E6] hover:to-[#0088BB] text-[#0A0E17] rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#00D4FF]/30 hover:shadow-xl hover:shadow-[#00D4FF]/50 text-lg mb-6"
            >
              Log In
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="opacity-60">
                Don't have an account?{' '}
                <button 
                  onClick={() => navigate(accountType === 'merchant' ? 'merchant-hero' : 'welcome')}
                  className="text-[#00D4FF] hover:underline"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-sm opacity-60">
              Protected by bank-level encryption
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
