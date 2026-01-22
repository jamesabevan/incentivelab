const Services = () => {
  const services = [
    {
      tag: 'DIAGNOSE YOUR SYSTEM',
      title: 'COMPENSATION HEALTH CHECK',
      description: 'We audit your comp plan against the 9 Design Rules, identify where incentives are misaligned, and quantify what it\'s costing you.',
      price: 'From £6,500',
      cta: 'Learn more',
      accent: '#961065',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      tag: 'LEARN THE FRAMEWORK',
      title: 'THE INCENTIVE ENGINE™',
      description: 'The complete DIY methodology. All 9 Design Rules + the implementation framework I built managing £225M in revenue.',
      price: '£2,999',
      cta: 'Get the Framework',
      accent: '#00CED1',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      tag: 'ALIGN YOUR LEADERSHIP',
      title: 'EXECUTIVE WORKSHOP',
      description: 'Get your CRO, CFO, and leadership team aligned on compensation philosophy using the 9 Design Rules - before you touch a spreadsheet.',
      price: 'From £10,000',
      cta: 'Book Workshop',
      accent: '#961065',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      tag: 'REDESIGN END-TO-END',
      title: 'FULL COMPENSATION REDESIGN',
      description: 'We diagnose your system, align your leadership on the rules, then design and implement compensation that drives the right behaviours.',
      price: 'Custom pricing',
      cta: "Let's Talk",
      accent: '#00CED1',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-900">
      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-wide mb-6"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            HOW WE WORK TOGETHER
          </h2>
          <p
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            Built on <span className="text-[#00CED1]">The Incentive Engine™</span> framework - the 8-step methodology for implementing the 9 Design Rules.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${service.accent}20`, color: service.accent }}
              >
                {service.icon}
              </div>

              {/* Tag */}
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  color: service.accent,
                }}
              >
                {service.tag}
              </p>

              {/* Title */}
              <h3
                className="text-2xl md:text-3xl text-white uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-base md:text-lg text-white/60 leading-relaxed mb-8"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {service.description}
              </p>

              {/* Price & CTA Row */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span
                  className="text-2xl text-white"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  {service.price}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group/link"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                >
                  {service.cta}
                  <svg
                    className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Hover Accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: service.accent }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
