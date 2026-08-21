import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/articles', label: t('nav.articles') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 md:px-10 lg:px-[85px]">
      <nav
        className={`w-full max-w-nav flex items-center justify-between rounded-[22px] bg-white/95 backdrop-blur-xl px-6 py-4 transition-shadow duration-slow ${
          scrolled ? 'shadow-nav mt-4' : 'mt-5'
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-[12px] bg-dark flex items-center justify-center">
            <span className="text-white font-display font-semibold text-sm">M</span>
          </div>
          <span className="font-display font-semibold text-[22px] tracking-tight text-text">
            Mucyuneje
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-[16px] font-normal transition-colors ${
                  isActive ? 'text-text font-medium' : 'text-text-muted hover:text-text'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link to="/contact" className="btn-primary text-[15px] px-6 py-3">
            {t('home.badge')}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-[1.5px] bg-text transition-all duration-fast origin-center ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`w-5 h-[1.5px] bg-text transition-all duration-fast ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-[1.5px] bg-text transition-all duration-fast origin-center ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute top-[80px] left-6 right-6 bg-white rounded-card shadow-card p-6 border border-border">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 text-[16px] font-medium rounded-[12px] transition-colors ${
                    isActive ? 'text-text bg-bg' : 'text-text-muted hover:text-text hover:bg-bg'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 pt-3 border-t border-border">
              <LanguageSwitcher />
            </div>
            <Link to="/contact" className="btn-primary mt-3 text-center">
              {t('home.badge')}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
