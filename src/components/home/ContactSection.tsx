import React, { useState } from 'react';
import { CONTACT_INFO } from '../../data/site.ts';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-[#0A0A0A] py-24 lg:py-40 hairline-b scroll-mt-20">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mb-16 lg:mb-24 space-y-4">
          <span className="font-heading font-semibold text-xs tracking-[0.1em] text-[#FFC400] uppercase block">
            Coordonnées
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F2EFE8]">
            Contactez Marodi TV, nous sommes à votre écoute.
          </h2>
        </div>

        {/* Three plain columns separated by hairlines, no form */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-[#2A2A2A]">
          {/* Column 1: Téléphone */}
          <div className="py-10 md:py-12 md:pr-8 space-y-3">
            <span className="font-heading font-bold text-xs tracking-[0.1em] text-[#B5B1A7] uppercase block">
              Téléphone
            </span>
            <a
              href={CONTACT_INFO.phoneRaw}
              className="font-heading font-bold text-2xl sm:text-3xl text-[#F2EFE8] hover:text-[#FFC400] transition-colors block"
            >
              {CONTACT_INFO.phone}
            </a>
            <p className="text-xs text-[#B5B1A7]">
              Accueil téléphonique du studio à Dakar.
            </p>
          </div>

          {/* Column 2: E-mail with Copier button */}
          <div className="py-10 md:py-12 md:px-8 border-t md:border-t-0 md:border-l border-[#2A2A2A] space-y-3">
            <span className="font-heading font-bold text-xs tracking-[0.1em] text-[#B5B1A7] uppercase block">
              E-mail
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_INFO.emailRaw}
                className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-[#F2EFE8] hover:text-[#FFC400] transition-colors break-all"
              >
                {CONTACT_INFO.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 border border-[#2A2A2A] bg-[#121212] hover:border-[#FFC400] text-xs font-heading font-bold text-[#FFC400] uppercase transition-colors shrink-0"
                title="Copier l'adresse e-mail"
                aria-label="Copier l'adresse e-mail"
              >
                {copied ? 'Copié' : 'Copier'}
              </button>
            </div>
            <p className="text-xs text-[#B5B1A7]">
              Pour toute demande générale ou professionnelle.
            </p>
          </div>

          {/* Column 3: Adresse */}
          <div className="py-10 md:py-12 md:pl-8 border-t md:border-t-0 md:border-l border-[#2A2A2A] space-y-3">
            <span className="font-heading font-bold text-xs tracking-[0.1em] text-[#B5B1A7] uppercase block">
              Adresse
            </span>
            <p className="font-heading font-bold text-2xl sm:text-3xl text-[#F2EFE8]">
              {CONTACT_INFO.address}
            </p>
            <p className="text-xs text-[#B5B1A7]">
              Dakar, Sénégal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
