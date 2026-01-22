const ROI = () => {
  const stats = [
    {
      value: '£200K–£2M+',
      label: 'Typical addressable compensation issues uncovered',
    },
    {
      value: '10–50×',
      label: 'Average ROI on diagnostic investment',
    },
  ];

  const outcomes = [
    '15–30% improvement in quota attainment',
    '10–25% reduction in rep turnover',
    '20–40% improvement in forecast accuracy',
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            className="text-sm uppercase tracking-widest text-[#00CED1] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            THE NUMBERS
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl uppercase tracking-wide"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            THE ROI
          </h2>
        </div>

        {/* Big Stats */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10"
            >
              <div
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4"
                style={{ fontFamily: 'Anton, sans-serif', color: '#00CED1' }}
              >
                {stat.value}
              </div>
              <p
                className="text-lg md:text-xl text-white/70"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16 md:mb-20"></div>

        {/* Common Outcomes */}
        <div className="max-w-4xl mx-auto">
          <h3
            className="text-2xl md:text-3xl uppercase tracking-wide text-center mb-10"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            COMMON OUTCOMES
          </h3>

          <div className="space-y-4">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00CED1]/50 transition-colors duration-300"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#961065' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span
                  className="text-lg md:text-xl text-white"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                >
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROI;
