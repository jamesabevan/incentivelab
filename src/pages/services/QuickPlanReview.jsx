import { Link } from 'react-router-dom';

const QuickPlanReview = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <p
            className="text-sm uppercase tracking-widest text-[#961065] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            Service
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 uppercase tracking-wide mb-6"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Compensation Plan Review
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-8"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            Expert validation in one week—no data archaeology required
          </p>
          <div
            className="inline-block px-6 py-3 bg-gray-100 rounded-full text-2xl text-gray-900"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            £5,000 - £12,000
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
              A rapid strategic review of your current compensation plans to identify critical structural issues and misalignments.
            </p>
            <p>
              This isn't a data-intensive diagnostic. It's an experienced eye on your plan design, assessing what you have against proven principles to spot the problems hiding in plain sight.
            </p>
            <p>
              Perfect when you need quick validation, a second opinion, or clarity on whether your plans are fundamentally sound or quietly destroying value.
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
            {/* Strategic Plan Assessment */}
            <div>
              <h3
                className="text-xl md:text-2xl text-[#961065] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Strategic Plan Assessment
              </h3>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Review of all in-scope compensation plan documents
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Evaluation against the 9 Canonical Design Rules
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Identification of structural red flags and behavioral misalignments
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Analysis of complexity, fairness, and scalability issues
                </li>
              </ul>
            </div>

            {/* Written Report */}
            <div>
              <h3
                className="text-xl md:text-2xl text-[#961065] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                8-10 Page Written Report
              </h3>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Executive summary of findings
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Problem identification with severity ranking (critical vs. minor)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Quick wins you can implement immediately (30-60 days)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Strategic fixes that require redesign (6-12 months)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Recommended next steps
                </li>
              </ul>
            </div>

            {/* Review Call */}
            <div>
              <h3
                className="text-xl md:text-2xl text-[#961065] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                60-Minute Review Call
              </h3>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Walk through findings
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Answer your questions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Discuss implementation priorities
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
                  Document review and strategic analysis
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Assessment against design principles
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Written report with prioritized recommendations
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Review call with Q&A
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
                This is a qualitative strategic review, not a quantitative diagnostic:
              </p>
              <ul className="space-y-4 text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Detailed data analysis (no attainment modeling, territory analysis)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  New plan design or architecture
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Implementation templates or support
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Multiple revision cycles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-8"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Timeline
          </h2>
          <div
            className="text-4xl md:text-5xl text-[#961065]"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            1 Week
          </div>
          <p className="text-lg text-gray-600 mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            From document receipt to final delivery
          </p>
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
            Based on complexity, not hours:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Simple */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3
                className="text-2xl text-gray-900 uppercase mb-2"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Simple
              </h3>
              <div
                className="text-3xl text-[#961065] mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                £5,000
              </div>
              <ul className="space-y-2 text-gray-600 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li>• 1-2 sales roles (e.g., AEs or AEs + SDRs)</li>
                <li>• Single geography</li>
                <li>• Simple product offering</li>
                <li>• &lt;30 quota carriers</li>
              </ul>
            </div>

            {/* Moderate */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#961065]">
              <h3
                className="text-2xl text-gray-900 uppercase mb-2"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Moderate
              </h3>
              <div
                className="text-3xl text-[#961065] mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                £8,000
              </div>
              <ul className="space-y-2 text-gray-600 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li>• 3-4 sales roles (AE, AM, SDR, CS)</li>
                <li>• 1-2 geographies</li>
                <li>• &lt;75 quota carriers</li>
              </ul>
            </div>

            {/* Complex */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3
                className="text-2xl text-gray-900 uppercase mb-2"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Complex
              </h3>
              <div
                className="text-3xl text-[#961065] mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                £12,000
              </div>
              <ul className="space-y-2 text-gray-600 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li>• 4+ sales roles including leadership layers</li>
                <li>• Multi-geography or multi-business unit</li>
                <li>• Complex product portfolio</li>
                <li>• 75+ quota carriers</li>
              </ul>
            </div>
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
              Companies wanting quick validation before investing in full redesign
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Leadership teams needing expert second opinion
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Organizations with specific concerns but limited time/budget
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              First step to understand scope before larger engagement
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
            <p><span className="text-[#961065] font-semibold">40%</span> of clients move to Health Check Diagnostic (need full data-driven analysis)</p>
            <p><span className="text-[#961065] font-semibold">30%</span> move to Executive Workshop (need leadership alignment first)</p>
            <p><span className="text-[#961065] font-semibold">20%</span> implement recommendations themselves (validation was enough)</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#961065]">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wide mb-8"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 text-lg rounded-full hover:bg-[#00CED1] hover:text-white transition-all duration-300"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white text-lg rounded-full border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300"
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

export default QuickPlanReview;
