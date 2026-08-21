import { useTranslation } from 'react-i18next';

const logos = [
  { name: 'TodoFusion', icon: '◆' },
  { name: 'Identify', icon: '◇' },
  { name: 'Nexus AI', icon: '△' },
  { name: 'Landify', icon: '○' },
  { name: 'Flexify', icon: '□' },
  { name: 'Codify', icon: '▽' },
  { name: 'Flowbox', icon: '◎' },
];

const LogoStrip = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-24">
      <div className="container-wide">
        <p className="text-center text-[15px] text-text-muted mb-10 font-medium">
          {t('home.statClients')} — trusted by teams worldwide
        </p>
        <div className="flex items-center justify-between gap-8 overflow-hidden opacity-40">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2.5 flex-shrink-0">
              <span className="text-xl text-text">{logo.icon}</span>
              <span className="font-display font-medium text-[20px] text-text whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
