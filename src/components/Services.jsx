import { useTranslation } from 'react-i18next';
import ScrollReveal from './ScrollReveal';

const serviceItems = ['web', 'ai', 'mobile'];

const icons = {
  web: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  ai: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5" />
    </svg>
  ),
  mobile: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
    </svg>
  ),
};

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="section-spacing">
      <div className="container-content">
        <ScrollReveal>
          <div className="section-header-centered">
            <h2 className="heading-serif text-h2 mb-5">
              {t('services.sectionTitle')}
            </h2>
            <p className="text-body text-text-muted mx-auto" style={{ maxWidth: '700px' }}>
              {t('services.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[45%_1fr] gap-8 items-stretch">
          {/* Left — stacked service items in one card */}
          <ScrollReveal>
            <div className="bg-card border border-border rounded-card p-10 h-full flex flex-col">
              {serviceItems.map((key, i) => (
                <div key={key} className={`${i > 0 ? 'mt-16' : ''} ${i < serviceItems.length - 1 ? 'pb-16 border-b border-border' : ''}`}>
                  <div className="w-12 h-12 rounded-badge bg-dark flex items-center justify-center text-white mb-5">
                    {icons[key]}
                  </div>
                  <h3 className="heading-serif text-h3 mb-3">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className="text-[16px] text-text-muted leading-relaxed max-w-md">
                    {t(`services.items.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — image card */}
          <ScrollReveal delay={0.15}>
            <div className="bg-card border border-border rounded-card overflow-hidden h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center text-text-faint p-10">
                <div className="grid grid-cols-3 gap-3 mb-6 max-w-[200px] mx-auto">
                  <div className="aspect-[3/4] bg-surface rounded-[8px] rotate-[-3deg]" />
                  <div className="aspect-[3/4] bg-surface rounded-[8px] z-10" />
                  <div className="aspect-[3/4] bg-surface rounded-[8px] rotate-[3deg]" />
                </div>
                <p className="text-[14px]">Service Preview</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Services;
