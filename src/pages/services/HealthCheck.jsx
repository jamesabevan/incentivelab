import { Link } from 'react-router-dom';

const HealthCheck = () => {
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
            Compensation Health Check
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-8"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            The comprehensive diagnostic that uncovers what's actually driving your compensation problems
          </p>
          <div
            className="inline-block px-6 py-3 bg-gray-100 rounded-full text-2xl text-gray-900"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            £6,500 - £70,000+
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
              A full diagnostic of your compensation system—data-driven, behavior-focused, and actionable.
            </p>
            <p>
              This is the deep-dive analysis that reveals root causes, not just symptoms. I assess your entire compensation architecture across 10 proven dimensions, analyze your performance data, identify behavioral misalignments, and quantify the impact.
            </p>
            <p>
              You'll walk away knowing exactly what's broken, why it's broken, what it's costing you, and the prioritized roadmap to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 md:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-12"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            What You Get
          </h2>

          <div className="space-y-12">
            {/* 10 Dimensions */}
            <div>
              <h3
                className="text-xl md:text-2xl text-[#00CED1] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Comprehensive Assessment Across 10 Dimensions
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Role Clarity & Ownership
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Territory Fairness & Segmentation
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Quota & Capacity Realism
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Pipeline & Forecast Discipline
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Incentive Behaviour Alignment
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Pricing, Discounting & Margin Protection
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Expansion & Retention Alignment
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Plan Mechanics & Motivation
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  RevOps, Accuracy & Governance
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Scalability & Model Fitness
                </div>
              </div>
            </div>

            {/* Data Analysis */}
            <div>
              <h3
                className="text-xl md:text-2xl text-[#00CED1] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Full Data Analysis
              </h3>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Attainment distributions and patterns
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Territory balance assessment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Quota realism analysis
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Discounting and margin trends
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Pipeline quality metrics
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Behavioral indicators
                </li>
              </ul>
            </div>

            {/* Diagnostic Report */}
            <div>
              <h3
                className="text-xl md:text-2xl text-[#00CED1] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                15-25 Page Diagnostic Report
              </h3>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Executive summary
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Overall health score (0-100) and tier classification
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Visual radar chart showing your profile
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Detailed analysis of each dimension
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Root cause identification
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Top 5-7 critical issues with quantified impact
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Data quality assessment
                </li>
              </ul>
            </div>

            {/* Implementation Roadmap */}
            <div>
              <h3
                className="text-xl md:text-2xl text-[#00CED1] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Prioritized Implementation Roadmap
              </h3>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Quick wins (30-60 days)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Medium-term improvements (3-6 months)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Strategic redesign considerations (6-12 months)
                </li>
              </ul>
            </div>

            {/* Executive Presentation */}
            <div>
              <h3
                className="text-xl md:text-2xl text-[#00CED1] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                90-Minute Executive Presentation
              </h3>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Walk through findings with leadership
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Answer strategic questions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Discuss priorities and next steps
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1] mt-1">•</span>
                  Align on approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Included */}
            <div>
              <h3
                className="text-2xl md:text-3xl text-white uppercase tracking-wide mb-6"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                What's Included
              </h3>
              <ul className="space-y-4 text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Complete data analysis (attainment, quotas, territories, payouts)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Behavioral misalignment identification
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Root cause analysis and impact quantification
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Comprehensive written report
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Executive presentation and Q&A
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Implementation roadmap with priorities
                </li>
              </ul>
            </div>

            {/* Not Included */}
            <div>
              <h3
                className="text-2xl md:text-3xl text-white uppercase tracking-wide mb-6"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                What's NOT Included
              </h3>
              <p className="text-white/60 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                This is diagnostic and strategic, not implementation:
              </p>
              <ul className="space-y-4 text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  New plan design or architecture (recommendations only)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Implementation support or project management
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Manager training or rollout materials
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Building spreadsheets or models
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Ongoing advisory beyond delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Data Requirements */}
      <section className="py-16 md:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Timeline */}
            <div>
              <h2
                className="text-3xl sm:text-4xl text-gray-900 uppercase tracking-wide mb-6"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Timeline
              </h2>
              <div
                className="text-4xl md:text-5xl text-[#00CED1] mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                2-3 Weeks
              </div>
              <p className="text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Depending on complexity and data readiness
              </p>
            </div>

            {/* Data Requirements */}
            <div>
              <h2
                className="text-3xl sm:text-4xl text-gray-900 uppercase tracking-wide mb-6"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Data Requirements
              </h2>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <strong>Required:</strong>
              </p>
              <ul className="space-y-2 text-gray-600 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li>• Current compensation plan documents (all roles)</li>
                <li>• 4-6 quarters of rep-level attainment data</li>
                <li>• Quota allocations by rep and period</li>
                <li>• Territory/account assignments</li>
                <li>• Role definitions</li>
              </ul>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <strong>Nice to have:</strong>
              </p>
              <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li>• Deal-level data (size, discount %, cycle time)</li>
                <li>• Pipeline metrics</li>
                <li>• Churn/retention data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-8"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Scales with organizational complexity:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 pr-4 text-gray-900 font-semibold">Company Profile</th>
                  <th className="text-left py-4 pr-4 text-gray-900 font-semibold">Price</th>
                  <th className="text-left py-4 text-gray-900 font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4">£5M revenue, 15 sellers, simple structure</td>
                  <td className="py-4 pr-4 text-[#00CED1] font-semibold">£7,800</td>
                  <td className="py-4">2 weeks</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4">£15M revenue, 40 sellers, moderate complexity</td>
                  <td className="py-4 pr-4 text-[#00CED1] font-semibold">£18,500</td>
                  <td className="py-4">2 weeks</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4">£30M revenue, 75 sellers, complex structure</td>
                  <td className="py-4 pr-4 text-[#00CED1] font-semibold">£35,000</td>
                  <td className="py-4">3 weeks</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4">£60M revenue, 150 sellers, multi-geo</td>
                  <td className="py-4 pr-4 text-[#00CED1] font-semibold">£58,500</td>
                  <td className="py-4">3 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-20 bg-white">
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
              £5-100M revenue B2B companies
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Companies experiencing clear compensation pain (low attainment, high turnover, forecasting issues)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Preparing for major comp redesign (need diagnosis first)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Post-funding companies needing to professionalize comp systems
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Annual health check for mature organizations
            </li>
          </ul>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-8"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            What Happens Next
          </h2>
          <div className="space-y-4 text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p><span className="text-[#00CED1] font-semibold">50%</span> move to Executive Workshop (need leadership alignment before implementing fixes)</p>
            <p><span className="text-[#00CED1] font-semibold">30%</span> move to Full System Redesign (ready to rebuild)</p>
            <p><span className="text-[#00CED1] font-semibold">15%</span> move to Advisory Retainer (want ongoing guidance)</p>
            <p><span className="text-[#00CED1] font-semibold">5%</span> implement themselves (diagnosis was enough)</p>
          </div>
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

export default HealthCheck;
