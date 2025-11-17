import { motion } from 'motion/react';
import { Shield, Wallet } from 'lucide-react';
import { AppHeader } from '../shared/AppHeader';
import { Screen, AppState } from '../../App';

interface ConnectWalletProps {
  navigate: (screen: Screen) => void;
  updateState: (updates: Partial<AppState>) => void;
}

const wallets = [
  { name: 'MetaMask', icon: '🦊' },
  { name: 'WalletConnect', icon: '🔗' },
  { name: 'Coinbase Wallet', icon: '💼' },
  { name: 'Phantom', icon: '👻' }
];

export function ConnectWallet({ navigate, updateState }: ConnectWalletProps) {
  const handleConnect = (walletName: string) => {
    // Simulate wallet connection
    updateState({ walletConnected: true });
    setTimeout(() => {
      navigate('amount');
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <AppHeader navigate={navigate} showBack backScreen="landing" />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00D4FF] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0099CC] rounded-full blur-3xl opacity-10"></div>

        {/* Glowing shield */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Shield className="w-96 h-96 text-[#00D4FF]" strokeWidth={0.5} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0099CC] mb-8 shadow-lg shadow-[#00D4FF]/30">
              <Shield className="w-10 h-10 text-[#0A0E17]" />
            </div>

            <h1 className="text-5xl md:text-6xl mb-6">
              Welcome to <span className="text-[#00D4FF]">Coinedge Coverage</span>
            </h1>

            <p className="text-xl opacity-80 mb-12 max-w-xl mx-auto">
              Connect your wallet to get started – <span className="text-[#00D4FF]">we never take custody of your BTC</span>
            </p>

            {/* Wallet options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {wallets.map((wallet, index) => (
                <motion.button
                  key={wallet.name}
                  onClick={() => handleConnect(wallet.name)}
                  className="group relative bg-[#1A1F2E]/50 backdrop-blur-xl border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#00D4FF]/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center gap-4">
                    <div className="text-4xl">{wallet.icon}</div>
                    <div className="text-left">
                      <div className="text-lg">{wallet.name}</div>
                      <div className="text-sm opacity-60">Connect wallet</div>
                    </div>
                    <Wallet className="w-5 h-5 text-[#00D4FF] ml-auto" />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Small text */}
            <motion.p
              className="text-sm opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Already have an account? Connect the same wallet
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 pt-8 border-t border-[#1A1F2E] flex flex-wrap items-center justify-center gap-6 text-sm opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Non-custodial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Secure connection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Encrypted</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
