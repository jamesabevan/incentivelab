const Solution = () => {
  const steps = [
    {
      number: '01',
      title: 'MAP THE BEHAVIOUR GAP',
      description: 'What does your business need vs. what are your reps actually doing?',
    },
    {
      number: '02',
      title: 'DESIGN FOR ALIGNMENT',
      description: 'Structure incentives that close the gap and drive the right behaviours.',
    },
    {
      number: '03',
      title: 'BUILD THE MATHS',
      description: 'Create compensation plans that work - without overpaying or creating chaos.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p
            className="text-sm uppercase tracking-widest text-[#961065] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            THE SOLUTION
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 uppercase tracking-wide mb-6"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            THE INCENTIVE ENGINE<span style={{ color: '#00CED1' }}>™</span>
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            The 3-step framework for compensation that actually works.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connector Line (hidden on mobile, visible on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#961065] to-[#00CED1] opacity-20"></div>
              )}

              <div className="relative bg-gray-50 rounded-3xl p-8 md:p-10 hover:bg-gray-100 transition-colors duration-300">
                {/* Step Number */}
                <div
                  className="text-6xl md:text-7xl lg:text-8xl mb-6 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ fontFamily: 'Anton, sans-serif', color: '#961065' }}
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl md:text-3xl text-gray-900 uppercase tracking-wide mb-4"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-lg text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-lg rounded-full hover:bg-[#961065] transition-all duration-300"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            LEARN THE FRAMEWORK
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;
