import { useEffect, useRef, useState } from 'react';

const Problem = () => {
  const painPoints = [
    "Reps hitting quota, but revenue missing targets",
    "Best performers leaving because comp feels unfair",
    "Team chasing new logos while ignoring expansion",
    "Reps discounting heavily to close deals",
    "CRO and CFO fighting about comp costs",
    "Nobody can explain how the plan actually works",
  ];

  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [phase, setPhase] = useState('revealing'); // 'revealing', 'collapsing', 'covering'

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const startOffset = windowHeight * 0.5;
      const scrollRange = sectionHeight - windowHeight;

      if (sectionTop <= startOffset && sectionTop > -scrollRange) {
        const progress = (startOffset - sectionTop) / (scrollRange + startOffset);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));

        // Phase 1: Reveal cards (0 - 0.4 progress)
        // Phase 2: Hold all cards visible (0.4 - 0.55 progress)
        // Phase 3: Collapse cards (0.55 - 0.75 progress)
        // Phase 4: Cover with statement (0.75 - 1 progress)

        if (progress < 0.4) {
          setPhase('revealing');
          const cardsToShow = Math.min(
            Math.floor((progress / 0.4) * (painPoints.length + 0.5)),
            painPoints.length
          );
          setVisibleCards(cardsToShow);
        } else if (progress < 0.55) {
          setPhase('holding');
          setVisibleCards(painPoints.length);
        } else if (progress < 0.75) {
          setPhase('collapsing');
          setVisibleCards(painPoints.length);
        } else {
          setPhase('covering');
          setVisibleCards(painPoints.length);
        }
      } else if (sectionTop > startOffset) {
        setVisibleCards(0);
        setScrollProgress(0);
        setPhase('revealing');
      } else {
        setVisibleCards(painPoints.length);
        setScrollProgress(1);
        setPhase('covering');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [painPoints.length]);

  const getCardStyle = (index) => {
    const isVisible = index < visibleCards;
    const row = Math.floor(index / 2); // 0, 0, 1, 1, 2, 2

    // Calculate collapse amount based on phase
    let collapseOffset = 0;
    let scaleDown = 1;
    let opacityValue = isVisible ? 1 : 0;

    if (phase === 'collapsing' || phase === 'covering') {
      const collapseProgress = phase === 'covering' ? 1 :
        Math.min((scrollProgress - 0.55) / 0.2, 1);

      // Collapse rows together (each row moves up)
      collapseOffset = -row * 80 * collapseProgress;
      scaleDown = 1 - (row * 0.03 * collapseProgress);
    }

    if (phase === 'covering') {
      const coverProgress = Math.min((scrollProgress - 0.7) / 0.3, 1);
      opacityValue = 1 - coverProgress;
    }

    return {
      opacity: isVisible ? opacityValue : 0,
      transform: isVisible
        ? `translateY(${collapseOffset}px) scale(${scaleDown})`
        : `translateY(40px) scale(0.95)`,
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      zIndex: 10 - row,
    };
  };

  const getStatementStyle = () => {
    if (phase !== 'covering') {
      return {
        opacity: 0,
        transform: 'translateY(80px)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: 'none',
      };
    }

    const coverProgress = Math.min((scrollProgress - 0.7) / 0.3, 1);

    return {
      opacity: coverProgress,
      transform: `translateY(${80 - (coverProgress * 80)}px)`,
      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      pointerEvents: coverProgress > 0.5 ? 'auto' : 'none',
    };
  };

  const getCardColor = () => {
    return 'bg-gray-900 text-white';
  };

  const getIcon = (index) => {
    const icons = [
      // 1. Reps hitting quota, but revenue missing targets - target with X
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <circle cx="12" cy="12" r="6" strokeWidth={2} />
        <circle cx="12" cy="12" r="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeWidth={2} d="M4 4l4 4m12 12l-4-4" />
      </svg>,
      // 2. Best performers leaving - door with arrow
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>,
      // 3. Chasing new logos, ignoring expansion - diverging arrows
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>,
      // 4. Discounting heavily - scissors cutting price
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>,
      // 5. CRO and CFO fighting - users with conflict
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>,
      // 6. Nobody can explain - question mark
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
    ];
    return icons[index];
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ minHeight: '200vh' }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 min-h-screen flex flex-col pt-24 md:pt-28 pb-8 md:pb-12 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-6 md:mb-8">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 uppercase tracking-wide mb-3"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              YOUR COMPENSATION PLAN IS BROKEN.
            </h2>
            <p
              className="text-lg md:text-xl text-gray-600"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Here's how you know.
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Pain Points - 2 Column Grid */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {painPoints.map((point, index) => (
                  <div
                    key={index}
                    style={getCardStyle(index)}
                    className={`relative overflow-hidden rounded-xl p-6 md:p-8 py-6 md:py-9 ${getCardColor()}`}
                  >
                    {/* Large background number */}
                    <span
                      className="absolute -right-1 -top-2 text-[60px] md:text-[70px] font-bold select-none pointer-events-none text-[#961065]/50"
                      style={{ fontFamily: 'Anton, sans-serif' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#961065]">
                        <span className="text-white">
                          {getIcon(index)}
                        </span>
                      </div>

                      <p
                        className="text-sm md:text-base leading-snug"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        {point}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Statement - Slides over collapsed cards */}
              <div
                className="absolute inset-x-0 top-0"
                style={getStatementStyle()}
              >
                <div
                  className="rounded-2xl p-6 md:p-10 overflow-hidden relative"
                  style={{ backgroundColor: '#961065' }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00CED1]/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                  <div className="relative z-10 text-center">
                    <p
                      className="text-lg md:text-xl lg:text-2xl text-white/90 mb-3"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
                    >
                      The problem isn't your people.
                    </p>
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl text-white uppercase tracking-wide"
                      style={{ fontFamily: 'Anton, sans-serif' }}
                    >
                      IT'S THAT YOUR INCENTIVES ARE MISALIGNED.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
