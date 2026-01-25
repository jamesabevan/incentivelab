import { Link } from 'react-router-dom';

const ExecutiveWorkshop = () => {
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
            Executive Compensation Workshop
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-8"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            Get your CRO, CFO, and CEO aligned on comp strategy before you redesign anything
          </p>
          <div
            className="inline-block px-6 py-3 bg-gray-100 rounded-full text-2xl text-gray-900"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            £10,000 - £18,000
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
              Strategic facilitation to align your leadership team on compensation philosophy and redesign approach.
            </p>
            <p>
              This is the workshop that stops the CRO/CFO/CEO fights over comp. The session where you get everyone in a room, work through the hard trade-offs, and walk out with a unified compensation philosophy and strategic blueprint.
            </p>
            <p>
              No data modeling. No spreadsheets. Just the strategic clarity and executive alignment that makes everything else possible.
            </p>
            <p>
              Perfect when comp has become political, when leadership can't agree on direction, or before you invest in a major redesign.
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
            {/* Pre-Workshop */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3
                className="text-xl md:text-2xl text-[#961065] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Pre-Workshop (Week 1)
              </h3>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  30-45 minute 1-on-1 interviews with CRO, CFO, and CEO
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Understand each leader's perspective, priorities, and concerns
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Review current compensation approach (documents only, no heavy data)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Identify key tensions and decision points
                </li>
              </ul>
            </div>

            {/* Workshop Day */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3
                className="text-xl md:text-2xl text-[#961065] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Workshop Day (Week 2)
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Half-day workshop (4 hours):
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <li>• Up to 5 participants (CRO, CFO, CEO, optionally VP Sales/RevOps)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Full-day workshop (7 hours):
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <li>• Up to 8 participants</li>
                    <li>• Extended deep-dives on complex dynamics</li>
                    <li>• Additional time for multi-business unit or multi-geo considerations</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Facilitated strategic session covering:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <li>• Current state review and challenges (30-45 mins)</li>
                    <li>• Framework: The 9 Design Rules (45-60 mins)</li>
                    <li>• Behavioral misalignment identification (60-90 mins)</li>
                    <li>• Compensation philosophy definition (45-60 mins)</li>
                    <li>• Design principles and guardrails (45-60 mins)</li>
                    <li>• Priority setting and success metrics (30-45 mins)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Post-Workshop */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3
                className="text-xl md:text-2xl text-[#961065] uppercase tracking-wide mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Post-Workshop (Week 3)
              </h3>
              <p className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                10-15 page Strategic Blueprint document including:
              </p>
              <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Summary of decisions and alignments reached
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Compensation philosophy statement
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Design principles customized to your GTM model
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Behavioral architecture framework
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Implementation roadmap with priorities
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Decision framework for future trade-offs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065] mt-1">•</span>
                  Success metrics and governance approach
                </li>
              </ul>
              <p className="mt-4 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Plus 30-minute follow-up call to review document
              </p>
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
                  Pre-workshop stakeholder interviews
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Half or full-day facilitated workshop
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Strategic Blueprint document
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00CED1]">✓</span>
                  Follow-up call and Q&A
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
                This is strategic alignment, not technical execution:
              </p>
              <ul className="space-y-4 text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Detailed data analysis or modeling
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  New compensation plan design
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Spreadsheet building or calculations
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Implementation support
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#961065]">✗</span>
                  Manager training
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
            className="text-4xl md:text-5xl text-[#961065] mb-6"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            3 Weeks Total
          </div>
          <div className="space-y-3 text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p><strong>Week 1:</strong> Pre-workshop interviews and prep</p>
            <p><strong>Week 2:</strong> Workshop session</p>
            <p><strong>Week 3:</strong> Blueprint delivery and follow-up</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900 uppercase tracking-wide mb-12"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Half-Day */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3
                className="text-2xl text-gray-900 uppercase mb-2"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Half-Day Workshop
              </h3>
              <div
                className="text-3xl text-[#961065] mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                £10,000 - £12,000
              </div>
              <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li>• 4 hours facilitated session</li>
                <li>• Up to 5 participants</li>
                <li>• Standard organizational complexity</li>
              </ul>
            </div>

            {/* Full-Day */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#961065]">
              <h3
                className="text-2xl text-gray-900 uppercase mb-2"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Full-Day Workshop
              </h3>
              <div
                className="text-3xl text-[#961065] mb-4"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                £15,000 - £18,000
              </div>
              <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <li>• 7 hours facilitated session</li>
                <li>• Up to 8 participants</li>
                <li>• Complex stakeholder dynamics or multi-business unit considerations</li>
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
          <ul className="space-y-4 text-lg text-gray-600 mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Companies with CRO/CFO/CEO misalignment on compensation strategy
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Post-Health Check clients (need alignment before acting on findings)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Pre-redesign for politically complex organizations
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Post-funding companies needing to align leadership before scaling
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00CED1]">✓</span>
              Annual strategic compensation planning
            </li>
          </ul>

          <h3
            className="text-2xl text-gray-900 uppercase tracking-wide mb-6"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            Perfect For These Situations
          </h3>
          <div className="space-y-4 text-gray-600 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p>"Our exec team can't agree on compensation philosophy"</p>
            <p>"CRO wants to motivate the team, CFO wants to control costs—both are frustrated"</p>
            <p>"We're about to redesign but leadership isn't aligned on priorities"</p>
            <p>"We're scaling from 30 to 100+ reps and need a unified strategy"</p>
          </div>
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
            <p><span className="text-[#961065] font-semibold">60%</span> move to Full System Redesign (alignment achieved, ready to build)</p>
            <p><span className="text-[#961065] font-semibold">25%</span> move to Health Check (need data diagnosis first)</p>
            <p><span className="text-[#961065] font-semibold">10%</span> implement internal changes (clarity was enough)</p>
            <p className="text-gray-500 mt-4">Many clients do this annually or semi-annually for strategic reviews</p>
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

export default ExecutiveWorkshop;
