import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  themeContext?: 'dark' | 'light' | 'auto';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  themeContext = 'auto',
}) => {
  // Dimensions map
  const dimensions = {
    sm: { icon: 28, text: 'text-sm', sub: 'text-[9px]' },
    md: { icon: 38, text: 'text-lg', sub: 'text-[11px]' },
    lg: { icon: 48, text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 64, text: 'text-3xl', sub: 'text-sm' },
  }[size];

  // SVG emblem replicating the user's provided logo exactly:
  // - Stylized bold "B"
  // - Stylized "7" with golden metallic tone
  // - Swooshing golden arc curving through
  // - Golden five-pointed star
  const EmblemSvg = (
    <svg
      width={dimensions.icon}
      height={dimensions.icon}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 select-none drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
      aria-label="BABAG7STAR Emblem"
    >
      <defs>
        {/* Gold gradients matching the brand image */}
        <linearGradient id="goldGradient" x1="20%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="35%" stopColor="#E0AA3E" />
          <stop offset="70%" stopColor="#C6922D" />
          <stop offset="100%" stopColor="#8C6016" />
        </linearGradient>
        <linearGradient id="goldShine" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#E5B242" />
          <stop offset="50%" stopColor="#FFE898" />
          <stop offset="100%" stopColor="#C48E28" />
        </linearGradient>
        <linearGradient id="badgeDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#17181C" />
          <stop offset="100%" stopColor="#08090B" />
        </linearGradient>
      </defs>

      {/* Rounded background tile when in badge or icon mode */}
      <rect
        x="2"
        y="2"
        width="116"
        height="116"
        rx="26"
        fill="url(#badgeDark)"
        stroke="#272A33"
        strokeWidth="2.5"
      />

      {/* Stylized 'B' */}
      <path
        d="M26 26 H50 C63 26 70 32 70 41 C70 47 66 52 59 55 C68 58 73 64 73 74 C73 85 64 92 49 92 H26 V26 Z M40 37 V52 H49 C54 52 57 49 57 44.5 C57 40 54 37 49 37 H40 Z M40 63 V81 H51 C57 81 60 77.5 60 72 C60 66.5 56 63 50 63 H40 Z"
        fill="#FFFFFF"
      />

      {/* Stylized '7' in Gold */}
      <path
        d="M62 28 H96 V37 L79 92 H65 L81 40 H62 V28 Z"
        fill="url(#goldGradient)"
      />

      {/* Dynamic Golden Swoosh Arc traversing the B and 7 */}
      <path
        d="M16 63 C24 49 46 41 78 40 C72 44 48 46 30 57 C22 62 18 69 16 75 C15.5 73 15.5 68 16 63 Z"
        fill="url(#goldShine)"
      />

      {/* Golden Star at top right */}
      <polygon
        points="93,22 96.5,31 106,31 98.5,36.5 101.5,46 93,40.5 84.5,46 87.5,36.5 80,31 89.5,31"
        fill="url(#goldGradient)"
        stroke="#0A0B0E"
        strokeWidth="1.5"
      />
    </svg>
  );

  if (variant === 'icon' || variant === 'badge') {
    return <div className={`inline-flex items-center ${className}`}>{EmblemSvg}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 font-display font-black tracking-tight ${className}`}>
      {EmblemSvg}
      <div className="flex flex-col justify-center leading-none">
        <div className={`flex items-center tracking-wider font-extrabold ${dimensions.text}`}>
          <span className="text-zinc-950 dark:text-white transition-colors duration-150">
            BABAG
          </span>
          <span className="text-[#D4A337] mx-0.5">7</span>
          <span className="text-zinc-950 dark:text-white transition-colors duration-150">
            STAR
          </span>
        </div>
        <span className={`text-zinc-500 dark:text-zinc-400 font-medium tracking-widest uppercase mt-0.5 ${dimensions.sub}`}>
          UK ELECTRONICS
        </span>
      </div>
    </div>
  );
};
