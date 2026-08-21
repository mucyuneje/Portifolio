import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/articles', label: t('nav.articles') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-[12px] bg-white/10 flex items-center justify-center">
                <span className="text-white font-display font-semibold text-sm">M</span>
              </div>
              <span className="font-display font-semibold text-[20px] tracking-tight text-white">
                Mucyuneje
              </span>
            </Link>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-display text-[13px] font-semibold mb-5 uppercase tracking-wider text-white/40">Pages</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-[15px] text-white/50 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-[13px] font-semibold mb-5 uppercase tracking-wider text-white/40">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:mucyunejehirwaarsene@gmail.com" className="text-[15px] text-white/50 hover:text-white transition-colors">
                mucyunejehirwaarsene@gmail.com
              </a>
              <a href="https://github.com/mucyuneje" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white/50 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white/50 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[13px]">
            © {new Date().getFullYear()} Mucyuneje Hirwa Arsene. {t('footer.copyright')}
          </p>
          <p className="text-white/20 text-[13px]">
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
