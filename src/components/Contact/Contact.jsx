import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus({
      type: 'success',
      message: 'Thanks for reaching out. We\'ll be in touch within 24 hours.',
    });
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <div>
            <span className="text-sm uppercase tracking-wider text-gray-500 block mb-4">Contact</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Let's build something{' '}
              <span className="font-serif italic font-normal">together</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Whether you're looking to redesign your compensation structure or just
              want to explore what's possible, we'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Email</p>
                <a
                  href="mailto:hello@incentivelab.com"
                  className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  hello@incentivelab.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Phone</p>
                <a
                  href="tel:+15551234567"
                  className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Location</p>
                <p className="text-xl font-medium text-gray-900">
                  San Francisco, CA
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
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors text-lg"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors text-lg"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors text-lg"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors text-lg resize-none"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-pill-dark py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed mt-8"
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
