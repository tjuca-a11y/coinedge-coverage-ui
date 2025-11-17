import { ArrowLeft } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';
import { Screen } from '../../App';

interface AppHeaderProps {
  navigate: (screen: Screen) => void;
  showBack?: boolean;
  backScreen?: Screen;
}

export function AppHeader({ navigate, showBack = false, backScreen = 'landing' }: AppHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E17]/80 backdrop-blur-xl border-b border-[#1A1F2E]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBack && (
            <button
              onClick={() => navigate(backScreen)}
              className="p-2 hover:bg-[#1A1F2E] rounded-lg transition-colors flex items-center gap-2 text-[#00D4FF]"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back</span>
            </button>
          )}
          <button onClick={() => navigate('landing')}>
            <img src={coinedgeLogo} alt="Coinedge" className="h-8 brightness-0 invert" />
          </button>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">Coverage</a>
          <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">Pricing</a>
          <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">Support</a>
        </nav>
      </div>
    </header>
  );
}
