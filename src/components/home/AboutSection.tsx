import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="a-propos" className="bg-[#0A0A0A] py-24 lg:py-40 hairline-b scroll-mt-20">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <span className="font-heading font-semibold text-xs tracking-[0.1em] text-[#FFC400] uppercase block">
              Qui sommes-nous
            </span>

            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F2EFE8]">
              Voir l'Afrique racontée par les Africains.
            </h2>

            <div className="space-y-6 text-[#B5B1A7] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Tout a commencé en 2012, quand Serigne « Mass » Ndour, ingénieur passionné, lance une plateforme pour connecter la diaspora à sa culture. Avec « Maîtresse d'un homme marié », la série devient un fait de société.
              </p>
              <p>
                Aujourd'hui, Marodi TV réunit 350 personnes : scénaristes, réalisateurs, techniciens et plus de 200 acteurs. Du wolof au pulaar, en passant par le français, nous nous battons pour que chaque émotion soit universelle.
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] bg-[#121212] overflow-hidden border border-[#2A2A2A]">
              <img
                src="https://marodi.tv/wp-content/uploads/2026/01/1745163144047.jpeg"
                alt="Équipe Marodi TV en tournage à Dakar"
                className="w-full h-full object-cover"
                loading="lazy"
                width={720}
                height={900}
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
