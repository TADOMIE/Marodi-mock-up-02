import React, { useEffect, useState } from 'react';

interface IntroSplashProps {
  onComplete: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isWiping, setIsWiping] = useState<boolean>(false);

  const handleSkip = () => {
    setIsVisible(false);
    sessionStorage.setItem('marodi_intro_seen_v2', 'true');
    onComplete();
  };

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('marodi_intro_seen_v2');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasSeen === 'true' || prefersReducedMotion) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Sequence stages (~2 seconds total)
    const t1 = setTimeout(() => setStage(1), 200);  // Flat yellow diamond scales in
    const t2 = setTimeout(() => setStage(2), 700);  // Charcoal "m" and red play triangle appear
    const t3 = setTimeout(() => setStage(3), 1200); // Three swooshes draw
    const t4 = setTimeout(() => {
      setStage(4);
      setIsWiping(true);
    }, 1800); // Diamond fills screen in flat yellow & splits
    const t5 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('marodi_intro_seen_v2', 'true');
      onComplete();
    }, 2300);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleSkip();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A] overflow-hidden select-none cursor-pointer transition-opacity duration-300 ${
        isWiping ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={handleSkip}
      role="dialog"
      aria-modal="true"
      aria-label="Introduction Marodi TV"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Flat Logo mark */}
        <div
          className="transition-transform duration-500 ease-out"
          style={{
            transform:
              stage >= 4
                ? 'scale(14)'
                : stage >= 1
                ? 'scale(1)'
                : 'scale(0.6)',
            opacity: stage >= 1 ? 1 : 0,
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Flat yellow diamond */}
            <rect
              x="14"
              y="14"
              width="72"
              height="72"
              rx="18"
              transform="rotate(45 50 50)"
              fill="#FFC400"
            />

            {/* Swooshes */}
            {stage >= 3 && (
              <g>
                <path
                  d="M 24 74 C 36 78 52 74 65 62"
                  stroke="#0A0A0A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 21 68 C 32 72 46 68 58 56"
                  stroke="#C8372D"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M 23 60 C 32 64 42 60 52 50"
                  stroke="#FFFFFF"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              </g>
            )}

            {/* "m" and Red Play */}
            {stage >= 2 && (
              <>
                <g fill="#0A0A0A">
                  <path d="M 33 41 C 33 39 34 38 36 38 C 38 38 39 39 39 41 L 39 59 C 39 61 38 62 36 62 C 34 62 33 61 33 59 Z" />
                  <path d="M 39 44 C 41 40 45 38 49 38 C 53 38 56 40 57 44 C 59 40 63 38 67 38 C 71 38 74 41 74 46 L 74 59 C 74 61 72.5 62 70.5 62 C 68.5 62 67 61 67 59 L 67 47 C 67 44 65.5 43 63.5 43 C 61.5 43 60 44 60 47 L 60 59 C 60 61 58.5 62 56.5 62 C 54.5 62 53 61 53 59 L 53 47 C 53 44 51.5 43 49.5 43 C 47.5 43 46 44 46 47 L 46 59 C 46 61 44.5 62 42.5 62 C 40.5 62 39 61 39 59 Z" />
                </g>
                <polygon points="46,47 46,55 54,51" fill="#C8372D" />
              </>
            )}
          </svg>
        </div>

        {/* Small flat title */}
        <div
          className="mt-6 text-center transition-opacity duration-300"
          style={{ opacity: stage >= 2 ? 1 : 0 }}
        >
          <span className="font-heading font-extrabold text-2xl tracking-[0.2em] text-[#F2EFE8] uppercase">
            MARODI TV
          </span>
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute top-8 right-8 px-4 py-2 border border-[#2A2A2A] bg-[#121212] text-xs font-heading font-bold uppercase tracking-[0.1em] text-[#B5B1A7] hover:text-[#FFC400] hover:border-[#FFC400] transition-colors"
        aria-label="Passer l'introduction"
      >
        Passer
      </button>
    </div>
  );
};
