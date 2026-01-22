const HowItWorks = () => {
  return (
    <section id="work" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-sm uppercase tracking-wider text-gray-500 block mb-4">Process</span>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              How we work
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed lg:pt-2">
              A proven methodology refined over hundreds of engagements. We move fast but never skip the fundamentals.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-0">
          {[
            {
              step: '01',
              title: 'Discovery',
              description: 'We start by understanding your business, your people, and your goals. Deep-dive workshops, stakeholder interviews, and data analysis.',
              duration: '2-3 weeks',
            },
            {
              step: '02',
              title: 'Design',
              description: 'Using insights from discovery, we architect incentive structures that align individual motivation with organizational objectives.',
              duration: '3-4 weeks',
            },
            {
              step: '03',
              title: 'Implementation',
              description: 'Seamless rollout with comprehensive change management, communication strategies, and technology integration.',
              duration: '4-6 weeks',
            },
            {
              step: '04',
              title: 'Optimization',
              description: 'Ongoing monitoring, analysis, and refinement. We stay engaged to ensure your programs continue to deliver results.',
              duration: 'Ongoing',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-14 border-t border-gray-200 group hover:bg-gray-50 -mx-6 px-6 transition-colors duration-300"
            >
              <div className="md:col-span-1">
                <span className="text-sm text-gray-400 font-medium">{item.step}</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <span className="text-sm text-gray-400">{item.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
