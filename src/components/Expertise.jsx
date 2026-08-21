import { useTranslation } from 'react-i18next';
import ScrollReveal from './ScrollReveal';

const expertiseKeys = ['affordability', 'consistency', 'scalability', 'speed', 'flexibility', 'diversity', 'support', 'convenience'];

const Expertise = () => {
  const { t } = useTranslation();

  return (
    <section className="section-spacing">
      <div className="container-content">
        <ScrollReveal>
          <div className="section-header-centered">
            <span className="eyebrow mb-5 inline-flex">{t('expertise.sectionTitle')}</span>
            <h2 className="heading-serif text-h2 mt-5 mb-5">{t('expertise.sectionTitle')}</h2>
            <p className="text-body text-text-muted mx-auto" style={{ maxWidth: '600px' }}>
              {t('expertise.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertiseKeys.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.06}>
              <div className="bg-card border border-border rounded-card p-6 text-center hover:shadow-card hover:border-text-faint/30 transition-all duration-slow group">
                <div className="w-10 h-10 rounded-badge bg-bg flex items-center justify-center mx-auto mb-4 group-hover:bg-dark group-hover:text-white transition-all duration-slow">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-[16px] text-text mb-1">
                  {t(`expertise.items.${key}.title`)}
                </h3>
                <p className="text-[13px] text-text-muted leading-relaxed">
                  {t(`expertise.items.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
