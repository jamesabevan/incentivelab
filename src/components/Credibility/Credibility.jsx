const Credibility = () => {
  const stats = [
    { value: '15+', label: 'YEARS' },
    { value: '£500M+', label: 'REVENUE MANAGED' },
    { value: '200+', label: 'SELLERS SUPPORTED' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative z-10 -mt-[35vh]">
      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-2"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs sm:text-sm md:text-base text-gray-500 uppercase tracking-wider"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-16 md:mb-20"></div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Avatar Placeholder */}
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#961065] to-[#00CED1] flex items-center justify-center">
              <span
                className="text-3xl md:text-4xl text-white"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                JB
              </span>
            </div>

            {/* Bio Text */}
            <div className="flex-1">
              <p
                className="text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                Built compensation systems for teams from 5 to 200+ sellers at{' '}
                <span className="font-semibold">Mölnlycke</span>,{' '}
                <span className="font-semibold">Adaptavist</span> (£225M revenue), and{' '}
                <span className="font-semibold">Solcoro</span>.
              </p>
              <p
                className="text-lg md:text-xl text-gray-600"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                I've seen what breaks at scale - and how to fix it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
