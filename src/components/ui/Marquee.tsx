import React from 'react';
import { ALL_SERIES } from '../../data/series.ts';

export const Marquee: React.FC = () => {
  const titles = ALL_SERIES.map((s) => s.title);

  return (
    <div className="bg-[#0A0A0A] hairline-b py-8 overflow-hidden select-none" aria-hidden="true">
      <div className="animate-marquee-single flex items-center gap-12">
        {[...titles, ...titles].map((title, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F2EFE8] uppercase tracking-tight">
              {title}
            </span>
            {/* Small flat yellow square separator */}
            <span className="w-2 h-2 bg-[#FFC400] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
