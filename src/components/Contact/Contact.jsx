import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    timeline: '',
    budget: '',
    source: '',
    projectBrief: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '13e18346-66a4-4aa5-82b2-07a6caa6072c',
          subject: 'Incentive Lab Website Enquiry',
          from_name: 'Incentive Lab Website',
          to: 'james@thecroquet.com',
          name: formData.name,
          email: formData.email,
          role: formData.role || 'Not specified',
          timeline: formData.timeline || 'Not specified',
          budget: formData.budget || 'Not specified',
          source: formData.source || 'Not specified',
          project_brief: formData.projectBrief,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: "Thanks for reaching out. We'll be in touch within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          role: '',
          timeline: '',
          budget: '',
          source: '',
          projectBrief: '',
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const timelineOptions = [
    { value: '', label: 'Timeline' },
    { value: 'immediately', label: 'Immediately' },
    { value: '1-2-weeks', label: '1-2 weeks' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: 'flexible', label: 'Flexible / Not sure' },
  ];

  const budgetOptions = [
    { value: '', label: 'Budget' },
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-plus', label: '$100,000+' },
    { value: 'not-sure', label: 'Not sure yet' },
  ];

  const sourceOptions = [
    { value: '', label: 'How did you hear about us?' },
    { value: 'google', label: 'Google search' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'referral', label: 'Referral' },
    { value: 'social-media', label: 'Social media' },
    { value: 'event', label: 'Event or conference' },
    { value: 'podcast', label: 'Podcast' },
    { value: 'other', label: 'Other' },
  ];

  const inputClasses = "w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#961065] focus:ring-0 transition-colors text-lg text-gray-900 placeholder-gray-400";

  const selectClasses = "w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#961065] focus:ring-0 transition-colors text-lg cursor-pointer appearance-none";

  return (
    <section id="contact" className="section-padding bg-white pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <div>
            <span
              className="text-sm uppercase tracking-widest text-[#961065] block mb-4"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              CONTACT
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8 leading-tight uppercase tracking-tight"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              LET'S TALK ABOUT YOUR{' '}
              <span className="text-[#961065]">PROJECT</span>
            </h2>
            <p
              className="text-gray-600 text-lg leading-relaxed mb-12"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
            >
              Whether you're looking to redesign your compensation structure or just
              want to explore what's possible, we'd love to hear from you.
            </p>

            {/* Prefer to book directly */}
            <div className="p-8 bg-gray-50 rounded-2xl border-l-4 border-[#961065]">
              <h3
                className="text-xl text-gray-900 mb-2 uppercase tracking-wide"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                PREFER TO BOOK DIRECTLY?
              </h3>
              <p
                className="text-gray-600 mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                Choose a time that works for you in our calendar.
              </p>
              <a
                href="https://app.cal.eu/incentivelab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#961065] font-medium hover:text-gray-900 transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                Choose a time
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-12 space-y-6">
              <div>
                <p
                  className="text-sm uppercase tracking-widest text-gray-500 mb-2"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  EMAIL
                </p>
                <a
                  href="mailto:james@thecroquet.com"
                  className="text-xl font-medium text-gray-900 hover:text-[#961065] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                >
                  james@thecroquet.com
                </a>
              </div>
              <div>
                <p
                  className="text-sm uppercase tracking-widest text-gray-500 mb-2"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  LOCATION
                </p>
                <p
                  className="text-xl font-medium text-gray-900"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                >
                  United Kingdom
                </p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {status.message && (
              <div
                className={`mb-8 p-6 rounded-xl ${
                  status.type === 'success'
                    ? 'bg-[#961065]/10 text-[#961065] border border-[#961065]/20'
                    : 'bg-red-50 text-red-800'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  placeholder="Name *"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  placeholder="Email *"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={inputClasses}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  placeholder="Your role / position"
                />
              </div>

              <div className="relative">
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={selectClasses}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: formData.timeline ? '#111827' : '#9ca3af'
                  }}
                >
                  {timelineOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={selectClasses}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: formData.budget ? '#111827' : '#9ca3af'
                  }}
                >
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className={selectClasses}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: formData.source ? '#111827' : '#9ca3af'
                  }}
                >
                  {sourceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div>
                <textarea
                  id="projectBrief"
                  name="projectBrief"
                  required
                  rows={4}
                  value={formData.projectBrief}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  placeholder="Project brief — describe your project in a few lines *"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-8 py-4 px-8 bg-[#961065] text-white font-semibold rounded-full hover:bg-[#7a0d54] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
