import React, { useState } from 'react';
import { Product, ProductCategory } from '../data/products';

interface ProductVisualProps {
  product: Product;
  aspectRatio?: 'square' | 'wide' | 'tall';
  className?: string;
  priority?: boolean;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  product,
  aspectRatio = 'square',
  className = '',
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  const aspectClass = {
    square: 'aspect-square',
    wide: 'aspect-[16/10]',
    tall: 'aspect-[3/4]',
  }[aspectRatio];

  // Specific bespoke vector silhouette when fallback is needed or for category graphics
  const renderCategoryIconIllustration = (category: ProductCategory) => {
    switch (category) {
      case 'Headphones':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-lg" fill="none">
            <path
              d="M25 68 C25 38, 95 38, 95 68"
              stroke="#D4A337"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <rect x="18" y="58" width="16" height="34" rx="8" fill="#22252C" stroke="#D4A337" strokeWidth="2" />
            <rect x="86" y="58" width="16" height="34" rx="8" fill="#22252C" stroke="#D4A337" strokeWidth="2" />
            <circle cx="26" cy="75" r="4" fill="#D4A337" />
            <circle cx="94" cy="75" r="4" fill="#D4A337" />
          </svg>
        );
      case 'Speakers':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-lg" fill="none">
            <rect x="30" y="24" width="60" height="74" rx="14" fill="#1C1E24" stroke="#D4A337" strokeWidth="2.5" />
            <circle cx="60" cy="50" r="14" stroke="#D4A337" strokeWidth="2" fill="#282B33" />
            <circle cx="60" cy="50" r="5" fill="#D4A337" />
            <circle cx="60" cy="80" r="8" stroke="#71717A" strokeWidth="1.5" fill="#282B33" />
            <line x1="42" y1="33" x2="78" y2="33" stroke="#D4A337" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'Watches':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-lg" fill="none">
            <rect x="46" y="10" width="28" height="24" rx="4" fill="#27272A" />
            <rect x="46" y="86" width="28" height="24" rx="4" fill="#27272A" />
            <rect x="36" y="30" width="48" height="60" rx="16" fill="#18181B" stroke="#D4A337" strokeWidth="2.5" />
            <circle cx="60" cy="60" r="16" stroke="#52525B" strokeWidth="1.5" />
            <line x1="60" y1="60" x2="60" y2="52" stroke="#D4A337" strokeWidth="2" strokeLinecap="round" />
            <line x1="60" y1="60" x2="67" y2="60" stroke="#F5D061" strokeWidth="2" strokeLinecap="round" />
            <circle cx="60" cy="60" r="2.5" fill="#D4A337" />
          </svg>
        );
      case 'Power Banks':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-lg" fill="none">
            <rect x="32" y="20" width="56" height="82" rx="10" fill="#1C1E24" stroke="#3F3F46" strokeWidth="2" />
            <rect x="40" y="30" width="40" height="20" rx="4" fill="#090A0D" stroke="#D4A337" strokeWidth="1" />
            <text x="60" y="44" fill="#D4A337" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              98%
            </text>
            <circle cx="48" cy="85" r="3" fill="#D4A337" />
            <rect x="62" y="83" width="14" height="4" rx="1.5" fill="#71717A" />
          </svg>
        );
      case 'Wireless Earbuds':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-lg" fill="none">
            <rect x="32" y="38" width="56" height="44" rx="18" fill="#1C1E24" stroke="#D4A337" strokeWidth="2" />
            <line x1="32" y1="56" x2="88" y2="56" stroke="#2E323D" strokeWidth="1.5" />
            <circle cx="60" cy="68" r="3" fill="#10B981" />
          </svg>
        );
      case 'Charging Cables':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-lg" fill="none">
            <path
              d="M30 90 C30 50, 90 70, 90 30"
              stroke="#D4A337"
              strokeWidth="4"
              strokeDasharray="4 2"
              strokeLinecap="round"
            />
            <rect x="22" y="86" width="16" height="22" rx="3" fill="#22252C" stroke="#D4A337" strokeWidth="1.5" />
            <rect x="82" y="14" width="16" height="22" rx="3" fill="#22252C" stroke="#D4A337" strokeWidth="1.5" />
          </svg>
        );
      case 'Chargers':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-lg" fill="none">
            <rect x="34" y="32" width="52" height="62" rx="10" fill="#1C1E24" stroke="#D4A337" strokeWidth="2" />
            <rect x="42" y="44" width="18" height="5" rx="1" fill="#D4A337" />
            <rect x="42" y="55" width="18" height="5" rx="1" fill="#D4A337" />
            <rect x="42" y="66" width="22" height="7" rx="1.5" fill="#3B82F6" />
            <rect x="74" y="20" width="8" height="14" rx="2" fill="#71717A" />
            <rect x="48" y="20" width="6" height="14" rx="1" fill="#71717A" />
          </svg>
        );
      case 'Wireless Chargers':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-lg" fill="none">
            <circle cx="60" cy="60" r="42" fill="#18181B" stroke="#D4A337" strokeWidth="2.5" />
            <circle cx="60" cy="60" r="26" stroke="#3F3F46" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="60" cy="60" r="10" fill="#D4A337" fillOpacity="0.2" stroke="#D4A337" strokeWidth="2" />
          </svg>
        );
      case 'Keyboards':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-lg" fill="none">
            <rect x="18" y="38" width="84" height="46" rx="8" fill="#18181B" stroke="#D4A337" strokeWidth="2" />
            {/* Keys grid */}
            {[0, 1, 2].map((row) =>
              [0, 1, 2, 3, 4, 5].map((col) => (
                <rect
                  key={`${row}-${col}`}
                  x={24 + col * 12}
                  y={44 + row * 12}
                  width="9"
                  height="9"
                  rx="2"
                  fill={col === 5 && row === 1 ? '#D4A337' : '#27272A'}
                />
              ))
            )}
          </svg>
        );
      case 'Mice':
        return (
          <svg viewBox="0 0 120 120" className="w-24 h-24 drop-shadow-lg" fill="none">
            <path
              d="M40 50 C40 30, 80 30, 80 50 L80 75 C80 92, 40 92, 40 75 Z"
              fill="#18181B"
              stroke="#D4A337"
              strokeWidth="2.5"
            />
            <line x1="60" y1="33" x2="60" y2="54" stroke="#3F3F46" strokeWidth="2" />
            <rect x="57" y="40" width="6" height="12" rx="3" fill="#D4A337" />
          </svg>
        );
    }
  };

  const hasSpecificPhoto =
    product.image &&
    !imageFailed &&
    (product.image.includes('headphones_studio_shot') ||
      product.image.includes('smartwatch_studio_shot') ||
      product.image.includes('desk_peripherals_shot') ||
      product.image.includes('hero_electronics_showcase'));

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center ${aspectClass} ${className}`}
    >
      {/* Subtle background ambient ring */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-black/30 pointer-events-none" />

      {hasSpecificPhoto ? (
        <img
          src={product.image}
          alt={product.name}
          onError={() => setImageFailed(true)}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none group-hover:scale-105 transition-transform duration-300">
          {/* Subtle gold halo glow behind the vector */}
          <div className="absolute w-28 h-28 rounded-full bg-[#D4A337]/10 blur-xl pointer-events-none" />
          <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
            {renderCategoryIconIllustration(product.category)}
          </div>
          <div className="relative z-10 mt-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
            {product.category}
          </div>
        </div>
      )}

      {/* Stock badge overlay on image */}
      {product.stockCount <= 10 && (
        <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 text-[10px] font-semibold bg-amber-500/90 text-zinc-950 rounded backdrop-blur-sm shadow-sm">
          Only {product.stockCount} left
        </div>
      )}
    </div>
  );
};
