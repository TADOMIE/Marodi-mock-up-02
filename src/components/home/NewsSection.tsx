import React from 'react';

export const NewsSection: React.FC = () => {
  const newsRows = [
    {
      date: '27 janv. 2026',
      category: 'Castings',
      headline: 'Alerte casting : Marodi TV à la recherche de ses prochaines étoiles',
    },
    {
      date: '27 janv. 2026',
      category: 'Castings',
      headline: 'Le Casting Tour arrive à Dakar',
    },
    {
      date: '7 janv. 2026',
      category: 'Actualités',
      headline: 'Financez votre projet audiovisuel avec And Tekki',
    },
    {
      date: '27 nov. 2025',
      category: 'Actualités',
      headline: 'Diariatou Sow décroche le Sotigui du meilleur espoir africain',
    },
  ];

  return (
    <section id="actualites" className="bg-[#0A0A0A] py-24 lg:py-40 hairline-b scroll-mt-20">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mb-16 space-y-4">
          <span className="font-heading font-semibold text-xs tracking-[0.1em] text-[#FFC400] uppercase block">
            Presse & actualité
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl tracking-tight text-[#F2EFE8]">
            Actualités
          </h2>
        </div>

        {/* Plain list of 4 rows */}
        <div className="border-t border-[#2A2A2A]">
          {newsRows.map((item, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 border-b border-[#2A2A2A] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group select-none transition-colors"
            >
              {/* Date (left) */}
              <div className="md:col-span-2 text-xs font-heading font-semibold text-[#B5B1A7] uppercase tracking-wider">
                {item.date}
              </div>

              {/* Category */}
              <div className="md:col-span-2 text-xs font-heading font-bold text-[#FFC400] uppercase tracking-[0.1em]">
                {item.category}
              </div>

              {/* Headline (large) - shifts 8px on hover */}
              <div className="md:col-span-7">
                <span className="font-heading font-bold text-xl sm:text-2xl text-[#F2EFE8] group-hover:text-[#FFC400] transition-all duration-300 transform group-hover:translate-x-2 inline-block">
                  {item.headline}
                </span>
              </div>

              {/* Arrow on right */}
              <div className="md:col-span-1 hidden md:flex justify-end text-[#B5B1A7] group-hover:text-[#FFC400] transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current stroke-2 group-hover:translate-x-1 transition-transform"
                >
                  <path d="M 2 8 L 14 8" strokeLinecap="square" />
                  <path d="M 9 3 L 14 8 L 9 13" strokeLinecap="square" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
