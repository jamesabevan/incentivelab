import { Link } from 'react-router-dom';

const FullRedesign = () => {
  const steps = [
    {
      number: '01',
      title: 'GTM Alignment & Behaviour Mapping',
      week: 'Week 1-2',
      description: 'Understand what behaviors your business model requires vs. what your reps actually do.',
      deliverables: [
        'Role mapping (clear definitions for all sales roles)',
        'Behavior audit (what you need vs. what you\'re getting)',
        'Revenue model linkage (how behavior connects to outcomes)',
        'Executive alignment sessions',
        'Hidden incentives identification',
      ],
    },
    {
      number: '02',
      title: 'Data Extraction & Truth-Finding',
      week: 'Week 2-3',
      description: 'Pull all the data and find the real problem (not the symptoms).',
      deliverables: [
        'Attainment distribution analysis',
        'Territory balance assessment',
        'Forecast variance patterns',
        'Pipeline quality metrics',
        'Discounting pattern analysis',
        'Root cause identification with quantified impact',
      ],
    },
    {
      number: '03',
      title: 'Compensation Plan Deconstruction',
      week: 'Week 3-4',
      description: 'Systematically tear down your existing plans and measure them against behavior alignment, fairness perception, simplicity, model strength, budget volatility, role fit, and scaling risk.',
      deliverables: [
        'Current plan assessment scorecard',
        'Gap analysis and critical issues',
        'What to keep vs. what to rebuild',
      ],
    },
    {
      number: '04',
      title: 'Modelling Engine Rebuild',
      week: 'Week 4-6',
      description: 'Build the new incentive model from scratch.',
      deliverables: [
        'Attainment curves (linear, accelerated, or step functions)',
        'Threshold logic (floors and ceilings)',
        'Accelerator/decelerator design',
        'Budget and scenario testing (60%, 85%, 110% attainment cases)',
        'CFO guardrails and cost protections',
        'Model specifications for implementation',
      ],
    },
    {
      number: '05',
      title: 'Quota & Territory Intelligence System',
      week: 'Week 6-7',
      description: 'This is where most comp plans fail. We fix it.',
      deliverables: [
        'Capacity modeling (how much CAN each rep sell?)',
        'TAM-aligned territory allocation',
        'Segmentation strategy (enterprise, mid-market, SMB)',
        'Coverage mapping (who owns what)',
        'Quota setting methodology (transparent and trusted)',
        'Ramp logic for new hires',
      ],
    },
    {
      number: '06',
      title: 'Incentive Architecture Design',
      week: 'Week 7-9',
      description: 'Put the whole system together into clean, behavior-driven structure.',
      deliverables: [
        'Complete compensation plans for all roles (AE, AM, SDR, CS, leadership)',
        'Metrics and measurement definitions',
        'Payout structures and formulas',
        'Rules dictionary (edge cases, splits, exceptions)',
        'Renewals and expansion logic',
        'Anti-gaming protections',
        'Implementation specifications for your RevOps/Finance team',
      ],
    },
    {
      number: '07',
      title: 'Behavioural Rollout & Manager Enablement',
      week: 'Week 9-10',
      description: 'A system only works if people use it. We prepare your team.',
      deliverables: [
        'Manager scripts and talking points',
        'Rep one-pagers (easy-to-understand plan summaries for each role)',
        'Enablement session content (slides, agendas)',
        'Objection handling guide',
        'FAQ documents',
        'Play-by-play rollout plan (week-by-week timeline)',
        'Communication templates',
      ],
    },
    {
      number: '08',
      title: 'Governance & Scaling Controls',
      week: 'Week 10-12',
      description: 'Protect the system over time so it doesn\'t drift.',
      deliverables: [
        'Quarterly quota check process',
        'Monthly model calibration approach',
        'Exceptions process and approval workflow',
        'CFO scenario testing framework',
        'Annual comp redesign triggers',
        'Governance calendar',
        'Documentation and knowledge transfer',
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <p
            className="text-sm uppercase tracking-widest text-[#00CED1] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            Service
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 uppercase tracking-wide mb-6"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Full Incentive Engine Redesign
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-8"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            Complete compensation architecture redesign—I design the strategy, your team implements
          </p>
          <div
            className="inline-block px-6 py-3 bg-gray-100 rounded-full text-2xl text-gray-900"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            £35,000 - £250,000+
          </div>
        </div>
      </section>

      {/* What This Is */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-8"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            What This Is
          </h2>
          <div className="space-y-6 text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p>
              The complete end-to-end redesign of your compensation system using the proven 8-Step Incentive Engine framework.
            </p>
            <p>
              This is the full engagement. From behavior mapping to governance, we rebuild your entire compensation architecture from the ground up—strategically sound, behaviorally aligned, and built to scale.
            </p>
            <p className="font-semibold text-gray-900">
              I design the architecture. Your team builds the house.
            </p>
            <p>
              Think of me as the architect who creates the blueprints, specifications, and plans. Your RevOps/Finance team are the builders who configure the systems and build the spreadsheets to my specifications. I don't swing the hammer, but I make sure you're building the right thing.
            </p>
          </div>
        </div>
      </section>

      {/* The 8-Step Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-12"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            The 8-Step Process
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border-l-4"
                style={{ borderColor: index % 2 === 0 ? '#00CED1' : '#961065' }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <span
                    className="text-4xl md:text-5xl"
                    style={{
                      fontFamily: 'Anton, sans-serif',
                      color: index % 2 === 0 ? '#00CED1' : '#961065',
                    }}
                  >
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3
                        className="text-xl md:text-2xl text-gray-900 uppercase tracking-wide"
                        style={{ fontFamily: 'Anton, sans-serif' }}
                      >
                        {step.title}
                      </h3>
                      <span
                        className="text-sm px-3 py-1 rounded-full bg-gray-200 text-gray-600 self-start"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {step.week}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {step.description}
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Deliverables:
                      </p>
                      <ul className="space-y-1 text-gray-600 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span style={{ color: index % 2 === 0 ? '#00CED1' : '#961065' }}>•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Deliverables Package */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wide mb-12"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Complete Deliverables Package
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Strategy & Design */}
            <div>
              <h3
                className="text-xl text-[#00CED1] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Strategy & Design
              </h3>
              <ul className="space-y-3 text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">•</span>
                  New compensation architecture for all roles
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">•</span>
                  Quota setting methodology and calculator specifications
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">•</span>
                  Territory allocation model and framework
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">•</span>
                  Cost modeling and budget scenarios
                </li>
              </ul>
            </div>

            {/* Implementation Specifications */}
            <div>
              <h3
                className="text-xl text-[#00CED1] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Implementation Specifications
              </h3>
              <ul className="space-y-3 text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">•</span>
                  Detailed plan documents for each role
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">•</span>
                  Formula specifications for spreadsheet building
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">•</span>
                  Rules and logic for system configuration
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">•</span>
                  Quality assurance checklist
                </li>
              </ul>
            </div>

            {/* Enablement Materials */}
            <div>
              <h3
                className="text-xl text-[#961065] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Enablement Materials
              </h3>
              <ul className="space-y-3 text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">•</span>
                  Manager training materials (slides, scripts, guides)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">•</span>
                  Rep communication materials (one-pagers, FAQs)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">•</span>
                  Rollout timeline and playbook
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">•</span>
                  Objection handling resources
                </li>
              </ul>
            </div>

            {/* Governance Framework */}
            <div>
              <h3
                className="text-xl text-[#961065] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Governance Framework
              </h3>
              <ul className="space-y-3 text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">•</span>
                  Ongoing governance calendar
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">•</span>
                  Review and calibration processes
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">•</span>
                  Exception handling workflow
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">•</span>
                  Annual redesign trigger assessment
                </li>
              </ul>
            </div>
          </div>

          {/* Executive Presentation */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h3
              className="text-xl text-white uppercase tracking-wide mb-4"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              Plus Executive Presentation
            </h3>
            <ul className="space-y-3 text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li className="flex items-start gap-3">
                <span className="text-[#00CED1]">•</span>
                Summary deck for board/leadership
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00CED1]">•</span>
                Business case and expected outcomes
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00CED1]">•</span>
                Implementation timeline
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="py-16 md:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Included */}
            <div>
              <h3
                className="text-2xl md:text-3xl text-gray-900 uppercase tracking-wide mb-6"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                What's Included
              </h3>
              <ul className="space-y-4 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  All 8 steps of the Incentive Engine framework
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Complete compensation architecture for all roles
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Implementation specifications and blueprints
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Manager and rep enablement materials
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Rollout planning and change management
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Governance framework and processes
                </li>
              </ul>
            </div>

            {/* Not Included */}
            <div>
              <h3
                className="text-2xl md:text-3xl text-gray-900 uppercase tracking-wide mb-6"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                What's NOT Included
              </h3>
              <p className="text-gray-500 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                I design the architecture. Your team implements it.
              </p>
              <ul className="space-y-4 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Building the actual spreadsheets/calculators (you get specifications, your team builds)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  System configuration in Salesforce/Xactly/etc. (your RevOps implements to my specs)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Day-to-day administration after launch
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Ongoing management beyond handoff
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <strong>Think of it this way:</strong> I'm the architect who designs the blueprints. Your RevOps/Finance are the builders who construct the house. I don't swing the hammer, but I make sure you're building the right thing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-8"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Timeline
          </h2>
          <div
            className="text-4xl md:text-5xl text-[#00CED1] mb-6"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            8-16 Weeks
          </div>
          <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Depending on organizational complexity:
          </p>
          <div className="space-y-3 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p><strong>Small companies (£5-15M):</strong> 8-10 weeks</p>
            <p><strong>Mid-market (£15-50M):</strong> 10-12 weeks</p>
            <p><strong>Enterprise (£50M+):</strong> 12-16 weeks</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-8"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Scales with organizational complexity and business value:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 pr-4 text-gray-900 font-semibold">Company Profile</th>
                  <th className="text-left py-4 pr-4 text-gray-900 font-semibold">Price Range</th>
                  <th className="text-left py-4 text-gray-900 font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4">£5-15M, &lt;50 sellers, simple</td>
                  <td className="py-4 pr-4 text-[#00CED1] font-semibold">£35,000 - £50,000</td>
                  <td className="py-4">8-10 weeks</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4">£15-40M, 50-100 sellers, moderate</td>
                  <td className="py-4 pr-4 text-[#00CED1] font-semibold">£50,000 - £90,000</td>
                  <td className="py-4">10-12 weeks</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4">£40-100M, 100-200 sellers, complex</td>
                  <td className="py-4 pr-4 text-[#00CED1] font-semibold">£90,000 - £150,000</td>
                  <td className="py-4">12-14 weeks</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4">£100M+, 200+ sellers, enterprise</td>
                  <td className="py-4 pr-4 text-[#00CED1] font-semibold">£150,000 - £250,000+</td>
                  <td className="py-4">14-16 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why this pricing:
            </h4>
            <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Larger organizations have more at stake. If you're spending £5M+ annually on sales compensation, a £100k investment to optimize that system is ~2% of annual spend. Companies typically find £200k-2M+ in addressable issues (excess discounting, territory imbalance, misaligned behaviors). The ROI is 10-50× in Year 1.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-8"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Who This Is For
          </h2>
          <ul className="space-y-4 text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Post-Health Check clients (diagnosis done, ready to rebuild)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Post-Workshop clients (leadership aligned, ready to execute)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Companies with acute compensation pain (system is broken, needs full rebuild)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Post-funding companies needing to scale compensation properly
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              GTM transformation requiring new compensation architecture
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              M&A integration requiring unified comp system
            </li>
          </ul>
        </div>
      </section>

      {/* Customer Requirements */}
      <section className="py-16 md:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-8"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Requirements for Success
          </h2>
          <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            You need:
          </p>
          <ul className="space-y-4 text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">•</span>
              Full executive commitment (CRO, CFO, CEO aligned)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">•</span>
              Internal resources to support: RevOps/Finance to implement in systems, Sales leadership to execute rollout
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">•</span>
              Data availability and quality
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">•</span>
              8-16 week timeline commitment
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">•</span>
              Willingness to make hard decisions
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">•</span>
              Budget for implementation beyond design
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#00CED1]">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-8"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white text-lg rounded-full hover:bg-[#961065] transition-all duration-300"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              Schedule Discovery Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://tally.so/r/rjjWg2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-gray-900 text-lg rounded-full border-2 border-gray-900/30 hover:bg-gray-900 hover:text-white transition-all duration-300"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              Take Free Stress Test First
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullRedesign;
