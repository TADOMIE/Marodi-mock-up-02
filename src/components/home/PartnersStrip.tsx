import React from 'react';
import { PARTNERS } from '../../data/site.ts';

export const PartnersStrip: React.FC = () => {
  return (
    <section className="bg-[#121212] py-20 lg:py-32 hairline-b select-none" aria-label="Partenaires de diffusion">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-12">
          <span className="font-heading font-semibold text-xs tracking-[0.1em] text-[#B5B1A7] uppercase block">
            Diffusion et partenaires
          </span>
        </div>

        {/* Monochrome static wall of partner logos, forced to flat white */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-12 items-center">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="h-12 flex items-center justify-center p-2"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-8 max-w-full object-contain filter brightness-0 invert opacity-70"
                loading="lazy"
                width={140}
                height={40}
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
