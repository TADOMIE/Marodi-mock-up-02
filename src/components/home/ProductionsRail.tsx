import React, { useRef, useState } from 'react';
import { FEATURED_SERIES } from '../../data/series.ts';

export const ProductionsRail: React.FC = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const scrollRail = (direction: 'left' | 'right') => {
    if (!railRef.current) return;
    const offset = direction === 'left' ? -380 : 380;
    railRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="productions" className="bg-[#121212] py-24 lg:py-40 hairline-b scroll-mt-20 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-heading font-semibold text-xs tracking-[0.1em] text-[#FFC400] uppercase block">
              Programmation
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl tracking-tight text-[#F2EFE8]">
              À l'affiche
            </h2>
          </div>

          {/* Two square arrow buttons (44px square, no pills) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollRail('left')}
              className="w-11 h-11 border border-[#2A2A2A] bg-[#0A0A0A] hover:bg-[#FFC400] text-[#F2EFE8] hover:text-[#0A0A0A] flex items-center justify-center transition-colors"
              aria-label="Faire défiler vers la gauche"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-2">
                <path d="M 9 2 L 4 7 L 9 12" strokeLinecap="square" />
              </svg>
            </button>
            <button
              onClick={() => scrollRail('right')}
              className="w-11 h-11 border border-[#2A2A2A] bg-[#0A0A0A] hover:bg-[#FFC400] text-[#F2EFE8] hover:text-[#0A0A0A] flex items-center justify-center transition-colors"
              aria-label="Faire défiler vers la droite"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current stroke-2">
                <path d="M 5 2 L 10 7 L 5 12" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Rail */}
      <div
        ref={railRef}
        className="flex gap-8 overflow-x-auto px-6 sm:px-10 lg:px-16 pb-6 pt-2 snap-x snap-mandatory scroll-smooth scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {FEATURED_SERIES.map((series, idx) => {
          const indexNum = String(idx + 1).padStart(2, '0');
          const langDisplay =
            series.lang === 'wolof'
              ? 'Wolof'
              : series.lang === 'pulaar'
              ? 'Pulaar'
              : 'Français';
          const isLoaded = loadedImages[series.slug];

          return (
            <div
              key={series.slug}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start select-none group"
            >
              {/* Poster tile - square, hover scale 1.03 with clean ease */}
              <div className="relative aspect-square overflow-hidden bg-[#0A0A0A] border border-[#2A2A2A]">
                {/* Fallback typography inside the square tile */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-[#0A0A0A]">
                  <span className="font-heading font-extrabold text-2xl text-[#2A2A2A] uppercase">
                    {series.title}
                  </span>
                </div>

                <img
                  src={series.poster}
                  alt={series.title}
                  className={`w-full h-full object-cover transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  width={600}
                  height={600}
                  onLoad={() =>
                    setLoadedImages((prev) => ({ ...prev, [series.slug]: true }))
                  }
                  onError={() =>
                    setLoadedImages((prev) => ({ ...prev, [series.slug]: false }))
                  }
                />

                {/* Flat index number in upper-left corner */}
                <div className="absolute top-3 left-3 bg-[#0A0A0A] px-2 py-0.5 border border-[#2A2A2A] text-xs font-heading font-bold text-[#FFC400] z-10">
                  {indexNum}
                </div>

                {/* Flat black bar sliding up on hover with the title */}
                <div className="absolute inset-x-0 bottom-0 bg-[#0A0A0A] p-3 border-t border-[#2A2A2A] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] z-10">
                  <span className="font-heading font-bold text-sm text-[#FFC400] uppercase truncate block">
                    {series.title}
                  </span>
                </div>
              </div>

              {/* Title & Metadata plain text separated by slashes (no badge, no pill) */}
              <div className="pt-4 space-y-1">
                <h3 className="font-heading font-bold text-xl text-[#F2EFE8] uppercase truncate">
                  {series.title}
                </h3>
                <p className="text-xs font-heading text-[#B5B1A7] tracking-wider uppercase">
                  {langDisplay} / {series.genre} / {series.badge}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
