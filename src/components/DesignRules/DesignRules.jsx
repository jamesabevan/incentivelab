const DesignRules = () => {
  const rules = [
    {
      number: '01',
      title: 'PEOPLE PROTECT DOWNSIDE BEFORE THEY CHASE UPSIDE',
      description: "Minimum thresholds don't motivate - they kill it. Design for security first.",
      size: 'large',
      theme: 'magenta',
    },
    {
      number: '02',
      title: 'UNEXPECTED BEHAVIOUR MEANS INCENTIVES ARE MISALIGNED',
      description: "If your reps are doing something you didn't expect, your comp plan told them to.",
      size: 'medium',
      theme: 'dark',
    },
    {
      number: '03',
      title: 'START WITH BEHAVIOUR, NOT TARGETS OR RATES',
      description: 'Most plans are designed backwards. Define what behaviours you need first.',
      size: 'medium',
      theme: 'cyan',
    },
    {
      number: '04',
      title: "AVERAGES TELL YOU NOTHING ABOUT HOW A SYSTEM BEHAVES",
      description: "70% quota attainment is meaningless if half your team is at 40% and half at 100%.",
      size: 'small',
      theme: 'dark',
    },
    {
      number: '05',
      title: "IF IT FEELS UNFAIR, IT IS - REGARDLESS OF THE MATHS",
      description: "Fair doesn't mean equal. If people don't trust it, it won't work.",
      size: 'small',
      theme: 'light',
    },
    {
      number: '06',
      title: "IF PEOPLE CAN'T EXPLAIN THE PLAN, IT WON'T WORK",
      description: 'Complexity is a tax on motivation. Simple wins.',
      size: 'small',
      theme: 'light',
    },
    {
      number: '07',
      title: "MATHS AMPLIFIES BEHAVIOUR; IT DOESN'T CREATE IT",
      description: "Stop trying to fix behaviour with spreadsheets. Get the behaviour right first.",
      size: 'small',
      theme: 'dark',
    },
    {
      number: '08',
      title: 'QUOTA ONLY WORKS IF PEOPLE TRUST IT',
      description: 'Political quota setting destroys credibility. Trust is everything.',
      size: 'bottom-half',
      theme: 'magenta',
    },
    {
      number: '09',
      title: 'INCENTIVE SYSTEMS DRIFT UNLESS YOU ACTIVELY GOVERN THEM',
      description: "Last year's great plan is this year's problem. Systems need maintenance.",
      size: 'bottom-half',
      theme: 'cyan',
    },
  ];

  const getCardStyles = (theme) => {
    switch (theme) {
      case 'magenta':
        return {
          bg: 'bg-[#961065]',
          text: 'text-white',
          subtext: 'text-white/70',
          number: 'text-white/10',
        };
      case 'cyan':
        return {
          bg: 'bg-[#00CED1]',
          text: 'text-gray-900',
          subtext: 'text-gray-900/70',
          number: 'text-gray-900/10',
        };
      case 'dark':
        return {
          bg: 'bg-gray-900',
          text: 'text-white',
          subtext: 'text-white/70',
          number: 'text-white/5',
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-900',
          subtext: 'text-gray-600',
          number: 'text-gray-900/5',
        };
    }
  };

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-4 md:row-span-2';
      case 'medium':
        return 'md:col-span-2 md:row-span-2';
      case 'bottom-half':
        return 'md:col-span-3';
      default:
        return 'md:col-span-2 md:row-span-1';
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p
            className="text-sm uppercase tracking-widest text-[#961065] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            MY THESIS
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 uppercase tracking-wide mb-6"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            THE 9 DESIGN RULES
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            The principles behind compensation that actually works.
          </p>
        </div>

        {/* Experience Statement - Creative Version */}
        <div className="mb-12 md:mb-16">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* Years Card */}
            <div className="bg-gray-100 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute -right-4 -top-4 text-[100px] text-gray-200 font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>15</div>
              <span className="text-[#961065] text-sm uppercase tracking-widest mb-2 block" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Experience</span>
              <span className="text-4xl md:text-5xl text-gray-900 block mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>15+</span>
              <span className="text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>Years in the field</span>
            </div>

            {/* Revenue Card */}
            <div className="bg-[#E8D5E0] rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute -right-4 -top-4 text-[80px] text-[#961065]/10 font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>£</div>
              <span className="text-[#961065] text-sm uppercase tracking-widest mb-2 block" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Revenue Managed</span>
              <span className="text-4xl md:text-5xl text-gray-900 block mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>£500M+</span>
              <span className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>In B2B sales</span>
            </div>

            {/* Statement Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 flex items-center border-2 border-gray-200">
              <p className="text-xl md:text-2xl text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                Here's what I learnt<span className="text-gray-400">...</span>
              </p>
              <svg className="w-8 h-8 text-[#961065] ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bento Grid of Rules */}
        <div className="grid md:grid-cols-6 gap-4 md:gap-6 mb-16">
          {rules.map((rule, index) => {
            const styles = getCardStyles(rule.theme);
            const sizeClasses = getSizeClasses(rule.size);

            return (
              <div
                key={index}
                className={`${styles.bg} ${sizeClasses} rounded-3xl p-6 md:p-8 relative overflow-hidden group transition-transform duration-300 hover:scale-[1.02]`}
              >
                {/* Large Background Number */}
                <span
                  className={`absolute -right-4 -top-8 text-[120px] md:text-[180px] font-bold ${styles.number} select-none pointer-events-none`}
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  {rule.number}
                </span>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Rule Number */}
                  <span
                    className={`text-sm ${styles.subtext} uppercase tracking-widest mb-4`}
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    RULE {rule.number}
                  </span>

                  {/* Title */}
                  <h3
                    className={`${styles.text} uppercase tracking-wide mb-4 ${
                      rule.size === 'large' ? 'text-2xl md:text-3xl' :
                      rule.size === 'medium' ? 'text-xl md:text-2xl' :
                      rule.size === 'bottom-half' ? 'text-xl md:text-2xl lg:text-3xl' : 'text-lg md:text-xl'
                    }`}
                    style={{ fontFamily: 'Anton, sans-serif' }}
                  >
                    {rule.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`${styles.subtext} mt-auto ${
                      rule.size === 'small' ? 'text-sm' :
                      rule.size === 'bottom-half' ? 'text-base md:text-lg' : 'text-base md:text-lg'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                  >
                    {rule.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="text-center p-8 md:p-12 bg-gray-900 rounded-3xl"
        >
          <p
            className="text-lg md:text-xl text-white/70 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            Want to see how these rules apply to your comp plan?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00CED1] text-gray-900 text-lg rounded-full hover:bg-white transition-all duration-300"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            TAKE THE STRESS TEST
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesignRules;
