const Insight = () => {
  const traditionalSteps = [
    "Set revenue target",
    "Divide by number of reps",
    "Pick commission rate that fits budget",
    "Hope reps do the right things",
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide mb-4"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            MOST COMPENSATION PLANS
          </h2>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide"
            style={{ fontFamily: 'Anton, sans-serif', color: '#00CED1' }}
          >
            ARE DESIGNED BACKWARDS
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Traditional Approach */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-white/5 blur-2xl"></div>
            <div
              className="text-sm uppercase tracking-widest text-white/50 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              THE TRADITIONAL APPROACH
            </div>
            <div className="space-y-4">
              {traditionalSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60"
                    style={{ fontFamily: 'Anton, sans-serif' }}
                  >
                    {index + 1}
                  </span>
                  <span
                    className="text-lg text-white/80"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>

            {/* Result */}
            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p
                className="text-sm uppercase tracking-widest text-white/50 mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                THE RESULT
              </p>
              <p
                className="text-xl md:text-2xl text-white"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                Maths that amplifies the{' '}
                <span className="text-[#961065]">wrong behaviours.</span>
              </p>
            </div>
          </div>

          {/* The Fix */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-[#00CED1]/20 blur-3xl"></div>
            <div
              className="text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: '#00CED1' }}
            >
              THE FIX
            </div>

            <div
              className="p-8 md:p-12 rounded-3xl relative overflow-hidden"
              style={{ backgroundColor: '#961065' }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

              <h3
                className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide mb-6 relative z-10"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                START WITH BEHAVIOUR,
              </h3>
              <h3
                className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide relative z-10"
                style={{ fontFamily: 'Anton, sans-serif', color: '#00CED1' }}
              >
                NOT SPREADSHEETS.
              </h3>
            </div>

            {/* Arrow indicator */}
            <div className="flex justify-center mt-8">
              <div className="w-12 h-12 rounded-full bg-[#00CED1] flex items-center justify-center animate-bounce">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
