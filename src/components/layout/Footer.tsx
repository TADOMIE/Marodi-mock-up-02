import React, { useState, useEffect } from 'react';
import { MarodiLogo } from '../brand/MarodiLogo.tsx';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navAnchors = [
    { label: 'À propos', href: '#a-propos' },
    { label: 'Productions', href: '#productions' },
    { label: 'Chaînes', href: '#chaines' },
    { label: 'Actualités', href: '#actualites' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialNames = ['YouTube', 'Facebook', 'X', 'Instagram', 'TikTok', 'LinkedIn'];

  return (
    <footer className="bg-[#0A0A0A] hairline-t text-[#B5B1A7] pt-20 pb-16 relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        {/* Top Row: Logo, Statement & Nav Anchors */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6 space-y-4">
            <MarodiLogo size="md" showText={true} />
            <p className="text-base text-[#F2EFE8] max-w-md font-medium mt-4">
              La référence des séries sénégalaises et de la production audiovisuelle.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="font-heading font-semibold text-xs tracking-[0.08em] text-[#F2EFE8] uppercase block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              {navAnchors.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#FFC400] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="font-heading font-semibold text-xs tracking-[0.08em] text-[#F2EFE8] uppercase block">
              Réseaux officiels
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#B5B1A7]">
              {socialNames.map((name) => (
                <span key={name} className="select-none">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="hairline-t pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#B5B1A7]">
          <div className="space-y-1">
            <p>
              © {currentYear} Marodi SA. Tous droits réservés.
            </p>
            <p className="text-[#FFC400]">
              Maquette de démonstration. Contenus et images © Marodi SA.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="select-none">Mentions légales</span>
            <span className="select-none">Politique de confidentialité</span>
          </div>
        </div>
      </div>

      {/* 44px Square Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={onScrollToTop}
          className="fixed bottom-6 right-6 w-11 h-11 border border-[#FFC400] bg-[#0A0A0A] hover:bg-[#FFC400] text-[#FFC400] hover:text-[#0A0A0A] font-heading font-bold text-xs uppercase flex items-center justify-center transition-colors z-30"
          aria-label="Haut de page"
          title="Haut de page"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current stroke-2"
          >
            <path d="M 2 8 L 7 3 L 12 8" strokeLinecap="square" />
            <path d="M 7 3 L 7 13" strokeLinecap="square" />
          </svg>
        </button>
      )}
    </footer>
  );
};
