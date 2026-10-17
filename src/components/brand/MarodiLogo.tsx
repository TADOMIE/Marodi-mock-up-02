import React from 'react';

interface MarodiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const MarodiLogo: React.FC<MarodiLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconDimensions = {
    sm: { w: 28, h: 28 },
    md: { w: 36, h: 36 },
    lg: { w: 48, h: 48 },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* 100% Flat SVG Marodi Emblem without gradients or filters */}
      <svg
        width={iconDimensions.w}
        height={iconDimensions.h}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo Marodi TV"
      >
        {/* Flat Yellow Rounded Diamond */}
        <rect
          x="14"
          y="14"
          width="72"
          height="72"
          rx="18"
          transform="rotate(45 50 50)"
          fill="#FFC400"
        />

        {/* 3 flat curved swooshes */}
        <path
          d="M 24 74 C 36 78 52 74 65 62"
          stroke="#0A0A0A"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 21 68 C 32 72 46 68 58 56"
          stroke="#C8372D"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M 23 60 C 32 64 42 60 52 50"
          stroke="#FFFFFF"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Flat charcoal 'm' */}
        <g fill="#0A0A0A">
          <path d="M 33 41 C 33 39 34 38 36 38 C 38 38 39 39 39 41 L 39 59 C 39 61 38 62 36 62 C 34 62 33 61 33 59 Z" />
          <path d="M 39 44 C 41 40 45 38 49 38 C 53 38 56 40 57 44 C 59 40 63 38 67 38 C 71 38 74 41 74 46 L 74 59 C 74 61 72.5 62 70.5 62 C 68.5 62 67 61 67 59 L 67 47 C 67 44 65.5 43 63.5 43 C 61.5 43 60 44 60 47 L 60 59 C 60 61 58.5 62 56.5 62 C 54.5 62 53 61 53 59 L 53 47 C 53 44 51.5 43 49.5 43 C 47.5 43 46 44 46 47 L 46 59 C 46 61 44.5 62 42.5 62 C 40.5 62 39 61 39 59 Z" />
        </g>

        {/* Flat Red Play Triangle */}
        <polygon points="46,47 46,55 54,51" fill="#C8372D" />
      </svg>

      {/* Small uppercase tracked wordmark */}
      {showText && (
        <span className="font-heading font-extrabold text-sm sm:text-base tracking-[0.15em] text-[#F2EFE8] uppercase">
          MARODI TV
        </span>
      )}
    </div>
  );
};
