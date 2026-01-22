const Features = () => {
  const services = [
    {
      number: '01',
      title: 'Incentive Design',
      description: 'Custom compensation and incentive structures tailored to your organization\'s goals, culture, and competitive landscape.',
    },
    {
      number: '02',
      title: 'Performance Analytics',
      description: 'Real-time dashboards and insights that help you understand what\'s working and where to optimize.',
    },
    {
      number: '03',
      title: 'Program Implementation',
      description: 'End-to-end rollout support, from stakeholder alignment to employee communication and training.',
    },
    {
      number: '04',
      title: 'Ongoing Optimization',
      description: 'Continuous monitoring and refinement to ensure your programs evolve with your business needs.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <span className="text-sm uppercase tracking-wider text-gray-500 block mb-4">Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              What we do
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-lg">
            Comprehensive services designed to transform how your organization approaches performance and motivation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-12 lg:p-16 group hover:bg-gray-50 transition-colors duration-300"
            >
              <span className="text-sm text-gray-400 font-medium">{service.number}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-4 group-hover:text-gray-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group/link"
              >
                Learn more
                <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
