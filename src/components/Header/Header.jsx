import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCenterLogo, setShowCenterLogo] = useState(false);

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

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const leftNav = [
    { href: '#services', label: 'SERVICES' },
    { href: '#about', label: 'ABOUT' },
  ];

  const rightNav = [
    { href: '#case-studies', label: 'CASE STUDIES' },
    { href: '#contact', label: 'CONTACT' },
  ];

  const NavPill = ({ href, label, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="px-5 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200"
    >
      {label}
    </a>
  );

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
              {leftNav.map((link) => (
                <NavPill key={link.href} href={link.href} label={link.label} />
              ))}
            </div>

            {/* LEFT: Logo (tablet/mobile below lg) */}
            <a href="#" onClick={scrollToTop} className="lg:hidden" style={{ fontFamily: 'Anton, sans-serif' }}>
              <span className="text-2xl sm:text-3xl tracking-tight uppercase hover:text-[#961065] transition-colors">
                <span className="lowercase">i</span>NCENT<span className="lowercase">i</span>VE LAB
              </span>
            </a>

            {/* CENTER: CTA or Logo (desktop lg+) */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              {showCenterLogo ? (
                <a
                  href="#"
                  onClick={scrollToTop}
                  className="text-2xl tracking-tight uppercase text-gray-900 hover:text-[#961065] transition-colors duration-300"
                  style={{ fontFamily: 'Anton, sans-serif' }}
                >
                  <span className="lowercase">i</span>NCENT<span className="lowercase">i</span>VE LAB
                </a>
              ) : (
                <a href="https://app.cal.eu/incentivelab" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 tracking-wide hover:text-[#00CED1] transition-colors inline-flex items-center gap-1">
                  BOOK FREE 30 MINUTE SESSION
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>

            {/* RIGHT: Nav pills + hamburger */}
            <div className="flex items-center gap-2">
              {/* Desktop lg+: right nav pills */}
              <div className="hidden lg:flex items-center gap-2">
                {rightNav.map((link) => (
                  <NavPill key={link.href} href={link.href} label={link.label} />
                ))}
              </div>

              {/* Tablet md-lg: some nav pills */}
              <div className="hidden md:flex lg:hidden items-center gap-2">
                <NavPill href="#services" label="SERVICES" />
                <NavPill href="#about" label="ABOUT" />
                <NavPill href="#contact" label="CONTACT" />
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
              {[...leftNav, ...rightNav].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 hover:text-[#961065] transition-colors py-2 uppercase tracking-tight"
                    style={{ fontFamily: 'Anton, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">Get in touch</p>
            <a href="mailto:hello@incentivelab.com" className="text-lg font-medium text-gray-900 hover:text-gray-400 transition-colors">
              hello@incentivelab.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
