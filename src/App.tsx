/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/layout/Header.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { IntroSplash } from './components/brand/IntroSplash.tsx';
import { Hero } from './components/home/Hero.tsx';
import { StatsSection } from './components/home/StatsSection.tsx';
import { AboutSection } from './components/home/AboutSection.tsx';
import { ProductionsRail } from './components/home/ProductionsRail.tsx';
import { Marquee } from './components/ui/Marquee.tsx';
import { ChannelsSection } from './components/home/ChannelsSection.tsx';
import { GroupSection } from './components/home/GroupSection.tsx';
import { NewsSection } from './components/home/NewsSection.tsx';
import { PartnersStrip } from './components/home/PartnersStrip.tsx';
import { ContactSection } from './components/home/ContactSection.tsx';

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2EFE8] flex flex-col font-sans selection:bg-[#FFC400] selection:text-[#0A0A0A]">
      {/* 1. Intro Splash (~2s, first visit per session, skippable) */}
      <IntroSplash onComplete={() => {}} />

      {/* 2. Header (Logo top right, nav left, 2px yellow progress bar) */}
      <Header onScrollToTop={scrollToTop} />

      {/* 3. Main Single Home Page Mockup */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Chiffres - Flat Yellow Band */}
        <StatsSection />

        {/* 3. A propos */}
        <AboutSection />

        {/* 4. Productions / A l'affiche */}
        <ProductionsRail />

        {/* 5. Marquee - Single Row */}
        <Marquee />

        {/* 6. Nos chaines */}
        <ChannelsSection />

        {/* 7. Le Groupe Marodi */}
        <GroupSection />

        {/* 8. Actualites */}
        <NewsSection />

        {/* 9. Diffusion et partenaires - Monochrome Wall */}
        <PartnersStrip />

        {/* 10. Contact */}
        <ContactSection />
      </main>

      {/* 4. Footer and back to top button */}
      <Footer onScrollToTop={scrollToTop} />
    </div>
  );
}
