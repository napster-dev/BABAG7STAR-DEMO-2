import React from 'react';
import { BrandLogo } from './BrandLogo';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, Truck, RotateCcw, Clock, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, setCatalogCategoryFilter } = useStore();

  const handleCategoryClick = (category: string) => {
    setCatalogCategoryFilter(category);
    navigateTo('catalog');
  };

  return (
    <footer className="w-full bg-zinc-950 text-zinc-300 border-t border-zinc-800">
      {/* 4 Trust Value Pillars */}
      <div className="border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#D4A337] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">2-Year UK Warranty</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Full hardware coverage on every device with fast replacement from our UK repair centre.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#D4A337] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Tracked UK Delivery</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Free standard delivery on orders over £40. Dispatched same-day via Royal Mail and DPD.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#D4A337] shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">30-Day Money Back</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Try in your home or studio with zero risk. Hassle-free prepaid returns for UK customers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#D4A337] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">UK Customer Support</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Dedicated London & Birmingham technical team reachable Monday to Friday, 8am–6pm GMT.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" themeContext="dark" />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              BABAG7STAR engineers high-grade consumer electronics, acoustic monitoring, wearables, and GaN power accessories for consumers across the United Kingdom. Built for endurance, reliability, and certified safety.
            </p>
            <div className="pt-2 text-xs text-zinc-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4A337]" />
                <span>74 Great Eastern St, Shoreditch, London EC2A 3NT</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4A337]" />
                <span>0800 747 8899 (Freephone UK)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4A337]" />
                <span>support@babag7star.co.uk</span>
              </div>
            </div>
          </div>

          {/* Categories column 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Audio & Wearables
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => handleCategoryClick('Headphones')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  ANC Headphones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Wireless Earbuds')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  Wireless Earbuds
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Speakers')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  Bluetooth Speakers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Watches')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  Titanium Smartwatches
                </button>
              </li>
            </ul>
          </div>

          {/* Categories column 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Power & Peripherals
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => handleCategoryClick('Power Banks')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  140W Laptop Power Banks
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Chargers')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  GaN III Fast Wall Chargers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Wireless Chargers')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  3-in-1 Magnetic Stands
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Charging Cables')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  240W Braided Cables
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Keyboards')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  Mechanical Keyboards (UK ISO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('Mice')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  Ergonomic & 8K Mice
                </button>
              </li>
            </ul>
          </div>

          {/* Information & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Trust & Service
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  About Our Quality Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#D4A337] transition-colors"
                >
                  Contact & Warranty Claim
                </button>
              </li>
              <li>
                <span className="text-zinc-500">UKCA & CE Compliance</span>
              </li>
              <li>
                <span className="text-zinc-500">WEEE Electronics Recycling</span>
              </li>
              <li>
                <span className="text-zinc-500">BS 1363 3-Pin Safety Standard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with legal & UK compliance badges */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 BABAG7STAR LTD. Registered in England & Wales (Company No. 14285910). VAT Reg GB 384 9201 44.
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] text-zinc-400">
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">UKCA</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">CE</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">RoHS</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Qi2</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">BS 1363</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
