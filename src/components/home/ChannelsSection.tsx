import React from 'react';

export const ChannelsSection: React.FC = () => {
  const channels = [
    {
      title: 'Marodi TV Sénégal',
      image: 'https://marodi.tv/wp-content/uploads/2026/01/unnamed-4.jpg',
      desc: 'La référence des séries sénégalaises. Retrouvez vos sagas préférées en wolof, comme Key & Za ou Crédule.',
      url: 'https://www.youtube.com/@maroditvprod?sub_confirmation=1',
    },
    {
      title: 'Marodi TV International',
      image: 'https://marodi.tv/wp-content/uploads/2026/01/channels4_profile.jpg',
      desc: 'Nos productions traversent les frontières. Découvrez nos séries doublées ou sous-titrées en français.',
      url: 'https://www.youtube.com/@Marodi.International?sub_confirmation=1',
    },
    {
      title: 'Marodi TV Pulaar',
      image: 'https://marodi.tv/wp-content/uploads/2026/01/channels4_profile-1.jpg',
      desc: 'Une sélection de séries produites entièrement en pulaar, comme Le Poids du Silence ou Djame et Fatoumata.',
      url: 'https://www.youtube.com/@MarodiTVPulaar?sub_confirmation=1',
    },
  ];

  return (
    <section id="chaines" className="bg-[#0A0A0A] py-24 lg:py-40 hairline-b scroll-mt-20">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-16 lg:mb-24 space-y-4">
          <span className="font-heading font-semibold text-xs tracking-[0.1em] text-[#FFC400] uppercase block">
            Distribution digitale
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl tracking-tight text-[#F2EFE8]">
            Du wolof au français, en passant par le pulaar
          </h2>
          <p className="text-base sm:text-lg text-[#B5B1A7] leading-relaxed max-w-3xl">
            Marodi TV est bien plus qu'un producteur de séries : nous sommes les narrateurs des histoires qui façonnent notre culture et notre imaginaire collectif.
          </p>
        </div>

        {/* 3 Columns separated by hairlines (no cards, no colored borders, no icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y md:border-b-0 border-[#2A2A2A]">
          {channels.map((ch, idx) => (
            <div
              key={ch.title}
              className={`py-8 md:py-0 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between space-y-6 ${
                idx > 0 ? 'border-t md:border-t-0 md:border-l border-[#2A2A2A]' : ''
              }`}
            >
              <div className="space-y-6">
                {/* Image */}
                <div className="aspect-[16/10] bg-[#121212] overflow-hidden border border-[#2A2A2A]">
                  <img
                    src={ch.image}
                    alt={ch.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={640}
                    height={400}
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-2xl text-[#F2EFE8] uppercase">
                    {ch.title}
                  </h3>
                  <p className="text-sm text-[#B5B1A7] leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
              </div>

              {/* Text link 'Regarder' with arrow (external, new tab) */}
              <div className="pt-2">
                <a
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-[0.08em] text-[#FFC400] hover:text-[#F2EFE8] transition-colors group"
                >
                  <span className="underline underline-offset-4">Regarder</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current stroke-2 group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M 1 6 L 11 6" strokeLinecap="square" />
                    <path d="M 7 2 L 11 6 L 7 10" strokeLinecap="square" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
