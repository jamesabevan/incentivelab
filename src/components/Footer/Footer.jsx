import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const navigationLinks = [
    { label: 'Services', href: '#services', isRoute: false },
    { label: 'About', href: '#about', isRoute: false },
    { label: 'Case Studies', href: '#case-studies', isRoute: false },
    { label: 'Contact', href: '/contact', isRoute: true },
  ];

  const servicesLinks = [
    { label: 'Health Check', href: '#services' },
    { label: 'Framework', href: '#services' },
    { label: 'Workshop', href: '#services' },
    { label: 'Full Redesign', href: '#services' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ];

  // Handle hash link clicks - navigate to homepage if not already there
  const handleHashClick = (e, href) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      window.location.href = '/' + href;
    }
  };

  return (
    <footer className="bg-gray-950 text-white">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              to="/"
              className="text-3xl md:text-4xl tracking-tight uppercase"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              <span className="lowercase">i</span>NCENT<span className="lowercase">i</span>VE LAB
            </Link>
            <p
              className="text-gray-400 mt-6 max-w-sm leading-relaxed text-lg"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
            >
              Performance consulting for organisations that believe their people deserve better.
            </p>

            {/* Contact */}
            <div className="mt-8">
              <a
                href="mailto:james@thecroquet.com"
                className="text-white hover:text-[#961065] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
              >
                james@thecroquet.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Navigation */}
              <div>
                <p
                  className="text-sm text-gray-500 uppercase tracking-widest mb-6"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  NAVIGATION
                </p>
                <ul className="space-y-4">
                  {navigationLinks.map((link, index) => (
                    <li key={index}>
                      {link.isRoute ? (
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white transition-colors"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          onClick={(e) => handleHashClick(e, link.href)}
                          className="text-gray-400 hover:text-white transition-colors"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <p
                  className="text-sm text-gray-500 uppercase tracking-widest mb-6"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  SERVICES
                </p>
                <ul className="space-y-4">
                  {servicesLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        onClick={(e) => handleHashClick(e, link.href)}
                        className="text-gray-400 hover:text-white transition-colors"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p
                  className="text-sm text-gray-500 uppercase tracking-widest mb-6"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  LEGAL
                </p>
                <ul className="space-y-4">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-sm text-gray-500"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
          >
            &copy; {currentYear} Incentive Lab. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
