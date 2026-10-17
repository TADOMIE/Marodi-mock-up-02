import React, { useState, useEffect } from 'react';
import { MarodiLogo } from '../brand/MarodiLogo.tsx';

interface HeaderProps {
  onScrollToTop: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToTop }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);

      setIsScrolled(currentScrollY > 40);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
          setIsVisible(false);
        } else if (lastScrollY - currentScrollY > 8) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock scroll on mobile menu open + Escape handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navAnchors = [
    { label: 'À propos', href: '#a-propos' },
    { label: 'Productions', href: '#productions' },
    { label: 'Chaînes', href: '#chaines' },
    { label: 'Actualités', href: '#actualites' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Skip link */}
      <a
        href="#a-propos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#FFC400] text-[#0A0A0A] font-heading font-bold text-xs uppercase tracking-wider"
      >
        Aller au contenu
      </a>

      {/* 2px flat yellow scroll progress line */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#FFC400] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Header bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'bg-[#0A0A0A] hairline-b py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Navigation on the LEFT (desktop) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {navAnchors.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-heading font-semibold text-xs tracking-[0.08em] text-[#B5B1A7] hover:text-[#F2EFE8] uppercase transition-colors relative py-1 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FFC400] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* Plain text 'Menu' button on the LEFT (mobile) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden font-heading font-bold text-xs tracking-[0.1em] text-[#F2EFE8] uppercase py-2"
            aria-expanded={mobileMenuOpen}
            aria-label="Ouvrir le menu"
          >
            Menu
          </button>

          {/* Logo only at the TOP RIGHT corner */}
          <button
            onClick={onScrollToTop}
            className="text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC400]"
            aria-label="Retour au haut de page"
          >
            <MarodiLogo size="md" showText={true} />
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-[#0A0A0A] flex flex-col justify-between p-8 sm:p-12 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          {/* Header row in mobile overlay */}
          <div className="flex items-center justify-between hairline-b pb-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="font-heading font-bold text-xs tracking-[0.1em] text-[#FFC400] uppercase"
              aria-label="Fermer le menu"
            >
              Fermer [Esc]
            </button>
            <MarodiLogo size="sm" showText={true} />
          </div>

          {/* Anchors in large type */}
          <nav className="flex flex-col gap-6 py-12" aria-label="Navigation mobile">
            {navAnchors.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-bold text-3xl sm:text-4xl text-[#F2EFE8] hover:text-[#FFC400] uppercase tracking-tight flex items-baseline gap-4"
              >
                <span className="font-heading text-xs text-[#FFC400] font-normal">
                  0{idx + 1}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Footer in mobile overlay */}
          <div className="hairline-t pt-6 text-xs text-[#B5B1A7] space-y-1">
            <p>Marodi TV. Studio de production audiovisuelle.</p>
            <p className="text-[#FFC400]">Dakar</p>
          </div>
        </div>
      )}
    </>
  );
};
