import React from 'react';

export const GroupSection: React.FC = () => {
  return (
    <section className="bg-[#121212] py-24 lg:py-40 hairline-b">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mb-16 lg:mb-24 space-y-4">
          <span className="font-heading font-semibold text-xs tracking-[0.1em] text-[#FFC400] uppercase block">
            Activités du groupe
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl tracking-tight text-[#F2EFE8]">
            Le Groupe Marodi
          </h2>
          <p className="text-base sm:text-lg text-[#B5B1A7] leading-relaxed">
            Au cœur de la production audiovisuelle sénégalaise et africaine.
          </p>
        </div>

        {/* Two columns, numbered 01 and 02, no icons, no boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-[#2A2A2A]">
          {/* Pillar 01 */}
          <div className="py-12 md:py-16 md:pr-12 space-y-6">
            <span className="font-heading font-extrabold text-3xl text-[#FFC400] block">
              01
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F2EFE8] uppercase">
              Production audiovisuelle
            </h3>
            <p className="text-base text-[#B5B1A7] leading-relaxed max-w-lg">
              Des récits qui touchent les cœurs et éveillent les consciences.
            </p>
          </div>

          {/* Pillar 02 */}
          <div className="py-12 md:py-16 md:pl-12 border-t md:border-t-0 md:border-l border-[#2A2A2A] space-y-6">
            <span className="font-heading font-extrabold text-3xl text-[#FFC400] block">
              02
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F2EFE8] uppercase">
              Publicité et branding
            </h3>
            <p className="text-base text-[#B5B1A7] leading-relaxed max-w-lg">
              Une régie publicitaire pour toucher votre cible au Sénégal et en Afrique.
            </p>
          </div>
        </div>

        {/* Plain text Marodi Corporate (not a link) */}
        <div className="pt-8">
          <span className="font-heading font-bold text-xs uppercase tracking-[0.1em] text-[#B5B1A7]">
            Marodi Corporate
          </span>
        </div>
      </div>
    </section>
  );
};
