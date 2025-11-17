import { Twitter, Shield, MessageCircle } from 'lucide-react';
import coinedgeLogo from 'figma:asset/ee7b48a51d4105ba857fb5139e42be68703f45d3.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0E17] border-t border-[#1A1F2E] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Logo & Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <img src={coinedgeLogo} alt="Coinedge" className="h-8 brightness-0 invert" />
            </div>
            <p className="text-sm opacity-60 max-w-xs">
              Bitcoin downside protection that actually works. Simple subscriptions, automatic payouts, zero custody.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 opacity-60">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  Coverage Tiers
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  Protection Mechanics
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="mb-4 opacity-60">For</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  Merchants
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  Holders
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  Institutions
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 opacity-60">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:text-[#00D4FF] transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1A1F2E] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm opacity-60">
            © {currentYear} Coinedge. All rights reserved.
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@coinedge.app"
              className="text-sm opacity-60 hover:text-[#00D4FF] transition-colors"
            >
              hello@coinedge.app
            </a>
            <div className="w-px h-4 bg-[#1A1F2E]"></div>
            <a
              href="#"
              className="opacity-60 hover:text-[#00D4FF] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="opacity-60 hover:text-[#00D4FF] transition-colors"
              aria-label="Discord"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}