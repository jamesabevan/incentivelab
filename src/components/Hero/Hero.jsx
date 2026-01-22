import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const calculateScale = () => {
      if (!textRef.current || !containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const padding = 64;
      const availableWidth = containerWidth - padding;

      textRef.current.style.transform = 'scaleX(1)';
      const textWidth = textRef.current.scrollWidth;

      const newScale = availableWidth / textWidth;
      setScale(newScale);
      setIsReady(true);
    };

    // Wait for fonts to load before calculating
    document.fonts.ready.then(() => {
      calculateScale();
      // Double-check after a short delay
      setTimeout(calculateScale, 100);
    });

    window.addEventListener('resize', calculateScale);

    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  return (
    <section className="min-h-screen bg-white pt-14 sm:pt-16 flex flex-col">
      {/* Giant Typography - ONLY on lg+ screens */}
      <div
        ref={containerRef}
        className="hidden lg:block px-8 pt-2 pb-0"
      >
        <h1 className="overflow-hidden">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span
              ref={textRef}
              style={{
                fontFamily: 'Anton, sans-serif',
                transform: `scaleX(${scale})`,
                transformOrigin: 'left center',
                display: 'inline-block',
                fontSize: '180px',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                opacity: isReady ? 1 : 0,
                transition: 'opacity 0.2s ease-in-out',
              }}
              className="text-gray-900 whitespace-nowrap uppercase cursor-pointer hover:text-[#961065]"
            >
              <span className="lowercase">i</span>NCENT<span className="lowercase">i</span>VE LAB
            </span>
          </a>
        </h1>

        {/* Horizontal divider line */}
        <div className="border-t border-gray-300 mt-4"></div>
      </div>

      {/* Hero Container */}
      <div className="flex-1 mt-0 lg:mt-6 px-4 lg:px-8">
        <div
          className="rounded-[24px] lg:rounded-[32px] min-h-[70vh] lg:min-h-[60vh] relative overflow-hidden flex flex-col items-center justify-center px-6 sm:px-12 py-16 sm:py-20"
          style={{ backgroundColor: '#961065' }}
        >
          {/* Hero Copy */}
          <div className="text-center max-w-4xl" style={{ fontFamily: 'Anton, sans-serif' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 uppercase tracking-wide">
              <span className="block">STOP PAYING</span>
              <span className="block">FOR THE WRONG BEHAVIOURS.</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 uppercase tracking-wide">
              BEHAVIOUR FIRST. SPREADSHEETS SECOND.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12 sm:mt-16">
            <a
              href="https://app.cal.eu/incentivelab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-black text-lg font-semibold rounded-full transition-all duration-200 hover:bg-[#00CED1] hover:text-white"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              BOOK FREE SESSION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
