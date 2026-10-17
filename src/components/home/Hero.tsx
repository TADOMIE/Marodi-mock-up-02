import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-start bg-[#0A0A0A] overflow-hidden pt-24 pb-16">
      {/* Background Poster & Lazy Video */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
        <img
          src="https://marodi.tv/wp-content/uploads/2026/01/6.png"
          alt=""
          aria-hidden="true"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(false)}
        />

        {/* Flat black overlay at 45% opacity, no gradients */}
        <div className="absolute inset-0 bg-[#0A0A0A]/45" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl space-y-8">
          {/* Main H1 - Two lines, masked reveal style */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-[#F2EFE8]">
            <span className="block">La référence des séries sénégalaises</span>
            <span className="block text-[#FFC400] mt-2">et de la production audiovisuelle</span>
          </h1>

          {/* Lead */}
          <p className="max-w-2xl text-lg sm:text-xl text-[#F2EFE8] leading-relaxed font-normal">
            Nous créons des séries captivantes et des contenus authentiques qui racontent notre culture, nos sociétés et nos rêves.
          </p>

          {/* Rectangular Yellow Button */}
          <div className="pt-4">
            <a
              href="#productions"
              className="btn-yellow inline-flex items-center gap-3"
            >
              <span>Découvrir nos productions</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current stroke-2"
              >
                <path d="M 1 7 L 13 7" strokeLinecap="square" />
                <path d="M 8 2 L 13 7 L 8 12" strokeLinecap="square" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Small scroll cue at the bottom */}
      <div className="absolute bottom-8 left-6 sm:left-10 lg:left-16 z-10 flex items-center gap-3 text-[#B5B1A7] text-xs font-heading font-semibold uppercase tracking-[0.1em]">
        <div className="w-2 h-2 bg-[#FFC400]" />
        <span>Défiler</span>
      </div>
    </section>
  );
};
