const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <div
          className="relative rounded-[32px] md:rounded-[48px] p-10 md:p-16 lg:p-20 overflow-hidden"
          style={{ backgroundColor: '#961065' }}
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00CED1]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-wide mb-6"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              NOT SURE WHERE TO START?
            </h2>

            <p
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
            >
              Take our 3-Minute Compensation Stress Test - get instant visibility into where your compensation system is broken.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 bg-white text-gray-900 text-lg rounded-full hover:bg-[#00CED1] hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                TAKE THE FREE TEST
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="https://app.cal.eu/incentivelab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 bg-transparent text-white text-lg rounded-full border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                BOOK A 30-MINUTE CALL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
