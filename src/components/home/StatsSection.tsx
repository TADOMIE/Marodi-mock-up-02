import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    { value: '300+', label: 'épisodes par an' },
    { value: '18,2 M', label: 'abonnés cumulés' },
    { value: '350', label: "personnes dans l'équipe" },
    { value: '200+', label: 'acteurs' },
  ];

  return (
    <section className="bg-[#FFC400] text-[#0A0A0A] py-16 lg:py-24 select-none">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Large Numerals Grid separated by thin black hairlines */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-[#0A0A0A]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-8 sm:py-12 px-4 sm:px-8 flex flex-col justify-between ${
                i > 0 ? 'lg:border-l border-[#0A0A0A]' : ''
              } ${i % 2 === 1 ? 'border-l border-[#0A0A0A] lg:border-l' : ''}`}
            >
              <span className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight block">
                {stat.value}
              </span>
              <span className="font-heading font-bold text-xs uppercase tracking-[0.1em] text-[#0A0A0A]/90 mt-3 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Statement sentence below */}
        <div className="pt-10">
          <p className="text-base sm:text-xl font-medium max-w-4xl text-[#0A0A0A] leading-relaxed">
            Avec plus de 300 épisodes produits chaque année, Marodi TV s'impose comme un acteur majeur de la production audiovisuelle en Afrique.
          </p>
        </div>
      </div>
    </section>
  );
};
