import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCenterLogo, setShowCenterLogo] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const serviceItems = [
    { href: '/services/quick-plan-review', label: 'Quick Plan Review' },
    { href: '/services/health-check', label: 'Health Check Diagnostic' },
    { href: '/services/executive-workshop', label: 'Executive Workshop' },
    { href: '/services/full-redesign', label: 'Full System Redesign' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Show center logo when scrolled past the hero logo area (around 300px)
      setShowCenterLogo(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleLogoClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const leftNav = [
    { href: '#services', label: 'SERVICES', isRoute: false },
    { href: '#about', label: 'ABOUT', isRoute: false },
  ];

  const rightNav = [
    { href: 'https://tally.so/r/rjjWg2', label: 'FREE STRESS TEST', isExternal: true },
    { href: '/contact', label: 'CONTACT', isRoute: true },
  ];

  // Services NavPill with dropdown
  const ServicesNavPill = () => {
    const handleServicesClick = (e) => {
      if (location.pathname !== '/') {
        e.preventDefault();
        window.location.href = '/#services';
      }
    };

    return (
      <div
        className="relative"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <a
          href="#services"
          onClick={handleServicesClick}
          className="px-5 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 inline-flex items-center gap-1"
        >
          SERVICES
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        {/* Dropdown */}
        <div
          className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${
            isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          <div className="py-2">
            {serviceItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#961065] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100">
            <a
              href="#services"
              onClick={handleServicesClick}
              className="block px-4 py-3 text-sm text-[#961065] hover:bg-gray-50 transition-colors font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              View All Services →
            </a>
          </div>
        </div>
      </div>
    );
  };

  const NavPill = ({ href, label, isRoute, isExternal, onClick }) => {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className="px-5 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200"
        >
          {label}
        </a>
      );
    }

    if (isRoute) {
      return (
        <Link
          to={href}
          onClick={onClick}
          className="px-5 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200"
        >
          {label}
        </Link>
      );
    }

    // For hash links, handle navigation if not on home page
    const handleClick = (e) => {
      if (location.pathname !== '/') {
        e.preventDefault();
        window.location.href = '/' + href;
      }
      if (onClick) onClick();
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        className="px-5 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200"
      >
        {label}
      </a>
    );
  };

  const MobileNavLink = ({ href, label, isRoute, isExternal }) => {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
          className="block text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 hover:text-[#961065] transition-colors py-2 uppercase tracking-tight"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          {label}
        </a>
      );
    }

    if (isRoute) {
      return (
        <Link
          to={href}
          onClick={() => setIsMenuOpen(false)}
          className="block text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 hover:text-[#961065] transition-colors py-2 uppercase tracking-tight"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          {label}
        </Link>
      );
    }

    const handleClick = () => {
      setIsMenuOpen(false);
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
      }
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        className="block text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 hover:text-[#961065] transition-colors py-2 uppercase tracking-tight"
        style={{ fontFamily: 'Anton, sans-serif' }}
      >
        {label}
      </a>
    );
  };

  // Render center content based on page
  const renderCenterContent = () => {
    // On contact page (or any non-home page), always show the logo
    if (!isHomePage) {
      return (
        <Link
          to="/"
          onClick={handleLogoClick}
          className="text-2xl tracking-tight uppercase text-gray-900 hover:text-[#961065] transition-colors duration-300"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          <span className="lowercase">i</span>NCENT<span className="lowercase">i</span>VE LAB
        </Link>
      );
    }

    // On homepage, show booking link initially, then logo after scrolling
    if (showCenterLogo) {
      return (
        <Link
          to="/"
          onClick={handleLogoClick}
          className="text-2xl tracking-tight uppercase text-gray-900 hover:text-[#961065] transition-colors duration-300"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          <span className="lowercase">i</span>NCENT<span className="lowercase">i</span>VE LAB
        </Link>
      );
    }

    return (
      <a
        href="https://app.cal.eu/incentivelab"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 tracking-wide hover:text-[#00CED1] transition-colors inline-flex items-center gap-1"
      >
        BOOK FREE 30 MINUTE SESSION
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'
        }`}
      >
        <nav className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">

            {/* LEFT: Nav pills (desktop lg+) */}
            <div className="hidden lg:flex items-center gap-2">
              <ServicesNavPill />
              <NavPill href="#about" label="ABOUT" isRoute={false} />
            </div>

            {/* LEFT: Logo (tablet/mobile below lg) */}
            <Link to="/" onClick={handleLogoClick} className="lg:hidden" style={{ fontFamily: 'Anton, sans-serif' }}>
              <span className="text-2xl sm:text-3xl tracking-tight uppercase hover:text-[#961065] transition-colors">
                <span className="lowercase">i</span>NCENT<span className="lowercase">i</span>VE LAB
              </span>
            </Link>

            {/* CENTER: CTA or Logo (desktop lg+) */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              {renderCenterContent()}
            </div>

            {/* RIGHT: Nav pills + hamburger */}
            <div className="flex items-center gap-2">
              {/* Desktop lg+: right nav pills */}
              <div className="hidden lg:flex items-center gap-2">
                {rightNav.map((link) => (
                  <NavPill key={link.href} href={link.href} label={link.label} isRoute={link.isRoute} isExternal={link.isExternal} />
                ))}
              </div>

              {/* Tablet md-lg: some nav pills */}
              <div className="hidden md:flex lg:hidden items-center gap-2">
                <ServicesNavPill />
                <NavPill href="#about" label="ABOUT" isRoute={false} />
                <NavPill href="/contact" label="CONTACT" isRoute={true} />
              </div>

              {/* Hamburger menu */}
              <button
                type="button"
                className="p-2 ml-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-7 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="px-6 sm:px-10 pt-20 pb-8 h-full flex flex-col">
          <nav className="flex-1 pt-8">
            <ul className="space-y-1">
              {/* Services with expandable submenu */}
              <li>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center gap-3 text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 hover:text-[#961065] transition-colors py-2 uppercase tracking-tight w-full text-left"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  SERVICES
                  <svg
                    className={`w-6 h-6 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 py-2 space-y-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-xl sm:text-2xl text-gray-600 hover:text-[#961065] transition-colors py-1"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <a
                      href="#services"
                      onClick={() => {
                        setIsMenuOpen(false);
                        if (location.pathname !== '/') {
                          window.location.href = '/#services';
                        }
                      }}
                      className="block text-xl sm:text-2xl text-[#961065] hover:text-[#00CED1] transition-colors py-1"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                    >
                      View All →
                    </a>
                  </div>
                </div>
              </li>
              {/* Other nav items (excluding SERVICES from leftNav) */}
              <li>
                <MobileNavLink href="#about" label="ABOUT" isRoute={false} />
              </li>
              {rightNav.map((link) => (
                <li key={link.href}>
                  <MobileNavLink href={link.href} label={link.label} isRoute={link.isRoute} isExternal={link.isExternal} />
                </li>
              ))}
            </ul>
          </nav>
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">Get in touch</p>
            <a href="mailto:james@thecroquet.com" className="text-lg font-medium text-gray-900 hover:text-gray-400 transition-colors">
              james@thecroquet.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
