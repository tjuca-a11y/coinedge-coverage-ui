import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { WelcomeSignUp } from './components/onboarding/WelcomeSignUp';
import { AccountCreation } from './components/onboarding/AccountCreation';
import { ChooseProtectionAmount } from './components/onboarding/ChooseProtectionAmount';
import { ChooseTier } from './components/onboarding/ChooseTier';
import { PaymentSubscribe } from './components/onboarding/PaymentSubscribe';
import { ProtectionActive } from './components/onboarding/ProtectionActive';
import { MainDashboard } from './components/onboarding/MainDashboard';
import { ProtectionTriggered } from './components/onboarding/ProtectionTriggered';
import { AdjustCoverage } from './components/dashboard/AdjustCoverage';
import { AdjustCoverageConfirmation } from './components/dashboard/AdjustCoverageConfirmation';
import { ProtectionWallet } from './components/dashboard/ProtectionWallet';
import { WithdrawUSDC } from './components/dashboard/WithdrawUSDC';
import { PayoutDetails } from './components/dashboard/PayoutDetails';
import { SupportCenter } from './components/dashboard/SupportCenter';
import { Billing } from './components/dashboard/Billing';
import { Login } from './components/Login';
import { MerchantHero } from './components/merchant/MerchantHero';

export type OnboardingScreen = 
  | 'landing' 
  | 'welcome' 
  | 'account' 
  | 'amount' 
  | 'tier' 
  | 'payment' 
  | 'active' 
  | 'dashboard' 
  | 'triggered'
  | 'adjust-coverage'
  | 'adjust-coverage-confirmation'
  | 'wallet'
  | 'withdraw'
  | 'payout-details'
  | 'support'
  | 'billing'
  | 'login'
  | 'merchant-hero'
  | 'merchant-dashboard'
  | 'merchant-kyb';

export interface OnboardingState {
  email: string;
  name: string;
  phone: string;
  country: string;
  verified: boolean;
  protectedAmount: number;
  btcAmount: number;
  selectedTier: 'standard' | 'enhanced' | null;
  monthlyFee: number;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<OnboardingScreen>('landing');
  const [onboardingState, setOnboardingState] = useState<OnboardingState>({
    email: '',
    name: '',
    phone: '',
    country: '',
    verified: false,
    protectedAmount: 20000,
    btcAmount: 0.212,
    selectedTier: null,
    monthlyFee: 0
  });

  const navigate = (screen: OnboardingScreen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const updateState = (updates: Partial<OnboardingState>) => {
    setOnboardingState(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="bg-[#0A0E17] text-[#F5F5F5] min-h-screen">
      {currentScreen === 'landing' && <LandingPage navigate={navigate} />}
      {currentScreen === 'welcome' && <WelcomeSignUp navigate={navigate} />}
      {currentScreen === 'account' && <AccountCreation navigate={navigate} onboardingState={onboardingState} updateState={updateState} />}
      {currentScreen === 'amount' && <ChooseProtectionAmount navigate={navigate} onboardingState={onboardingState} updateState={updateState} />}
      {currentScreen === 'tier' && <ChooseTier navigate={navigate} onboardingState={onboardingState} updateState={updateState} />}
      {currentScreen === 'payment' && <PaymentSubscribe navigate={navigate} onboardingState={onboardingState} />}
      {currentScreen === 'active' && <ProtectionActive navigate={navigate} onboardingState={onboardingState} />}
      {currentScreen === 'dashboard' && <MainDashboard navigate={navigate} onboardingState={onboardingState} />}
      {currentScreen === 'triggered' && <ProtectionTriggered navigate={navigate} onboardingState={onboardingState} />}
      {currentScreen === 'adjust-coverage' && <AdjustCoverage navigate={navigate} onboardingState={onboardingState} updateState={updateState} />}
      {currentScreen === 'adjust-coverage-confirmation' && <AdjustCoverageConfirmation navigate={navigate} onboardingState={onboardingState} />}
      {currentScreen === 'wallet' && <ProtectionWallet navigate={navigate} onboardingState={onboardingState} />}
      {currentScreen === 'withdraw' && <WithdrawUSDC navigate={navigate} onboardingState={onboardingState} />}
      {currentScreen === 'payout-details' && <PayoutDetails navigate={navigate} onboardingState={onboardingState} />}
      {currentScreen === 'support' && <SupportCenter navigate={navigate} onboardingState={onboardingState} />}
      {currentScreen === 'billing' && <Billing navigate={navigate} onboardingState={onboardingState} />}
      {currentScreen === 'login' && <Login navigate={navigate} />}
      {currentScreen === 'merchant-hero' && <MerchantHero navigate={navigate} />}
    </div>
  );
}