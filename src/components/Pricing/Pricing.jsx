const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-gray-950 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-sm uppercase tracking-wider text-gray-500 block mb-4">Engagement Models</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Flexible ways to work together
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-800 rounded-2xl overflow-hidden">
          {[
            {
              name: 'Project',
              description: 'For organizations with a specific initiative or program to design.',
              price: 'From $25k',
              features: [
                'Scoped engagement',
                'Defined deliverables',
                'Knowledge transfer',
                'Implementation support',
              ],
            },
            {
              name: 'Retainer',
              description: 'Ongoing partnership for continuous optimization and strategic guidance.',
              price: 'From $8k/mo',
              features: [
                'Dedicated team access',
                'Monthly strategy sessions',
                'Continuous optimization',
                'Priority support',
              ],
              highlighted: true,
            },
            {
              name: 'Advisory',
              description: 'Expert guidance for internal teams building their own programs.',
              price: 'Custom',
              features: [
                'Executive coaching',
                'Best practice sharing',
                'Program reviews',
                'On-call expertise',
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`p-8 md:p-12 lg:p-16 ${
                plan.highlighted ? 'bg-white text-gray-900' : 'bg-gray-900'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-3 ${plan.highlighted ? 'text-gray-900' : 'text-white'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-8 ${plan.highlighted ? 'text-gray-600' : 'text-gray-400'}`}>
                {plan.description}
              </p>

              <div className={`text-4xl md:text-5xl font-bold mb-8 ${plan.highlighted ? 'text-gray-900' : 'text-white'}`}>
                {plan.price}
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-gray-900' : 'text-gray-400'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? 'text-gray-600' : 'text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-4 rounded-full font-medium transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-500 text-sm mt-12">
          All engagements begin with a complimentary discovery call. No commitment required.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
