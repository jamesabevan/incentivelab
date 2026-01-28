import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      tag: 'VALIDATE YOUR PLANS',
      title: 'QUICK PLAN REVIEW',
      description: 'Get expert validation of your compensation plans in just one week. I\'ll assess your plans against proven design principles and identify your top 3-5 critical misalignments—without needing detailed data or long engagements.',
      price: 'From £5,000',
      cta: 'Learn more',
      link: '/services/quick-plan-review',
      accent: '#961065',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      tag: 'ALIGN YOUR LEADERSHIP',
      title: 'EXECUTIVE ALIGNMENT WORKSHOP',
      description: 'Get your CRO, CFO, and CEO aligned on compensation philosophy before you redesign anything. A facilitated half or full-day session that creates strategic clarity and ends executive tension over comp decisions.',
      price: 'From £10,000',
      cta: 'Learn more',
      link: '/services/executive-workshop',
      accent: '#961065',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      tag: 'REDESIGN END-TO-END',
      title: 'FULL SYSTEM REDESIGN',
      description: 'Complete compensation architecture redesign using the proven 8-Step Incentive Engine framework. I design the strategy, structure, and specifications—your team implements. From behavior mapping to governance, delivered in 8-16 weeks.',
      price: 'From £35,000',
      cta: 'Learn more',
      link: '/services/full-redesign',
      accent: '#00CED1',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-gray-900">
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
            Built on <span className="text-[#00CED1]">The Incentive Engine™</span> framework - the 8-step methodology for implementing the 9 Design Rules
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-white/10 hover:border-[#961065] transition-all duration-300 hover:bg-white/10 flex flex-col"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#00CED120', color: '#00CED1' }}
              >
                {service.icon}
              </div>

              {/* Tag */}
              <p
                className="text-xs uppercase tracking-widest mb-4 text-[#00CED1]"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
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
                className="text-base md:text-lg text-white/60 leading-relaxed flex-1"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {service.description}
              </p>

              {/* Price & CTA Row */}
              <div className="flex items-center justify-between pt-6 mt-8 border-t border-white/10">
                <span
                  className="text-2xl text-white"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  {service.price}
                </span>
                <Link
                  to={service.link}
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
