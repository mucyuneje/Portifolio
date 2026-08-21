import { useTranslation } from 'react-i18next';
import ScrollReveal from './ScrollReveal';

const stepKeys = ['s1', 's2', 's3', 's4', 's5', 's6'];

const Process = () => {
  const { t } = useTranslation();

  return (
    <section className="section-spacing bg-surface">
      <div className="container-content">
        <ScrollReveal>
          <div className="section-header-centered">
            <span className="eyebrow mb-5 inline-flex">{t('process.sectionTitle')}</span>
            <h2 className="heading-serif text-h2 mt-5 mb-5">{t('process.sectionTitle')}</h2>
            <p className="text-body text-text-muted mx-auto" style={{ maxWidth: '650px' }}>
              {t('process.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stepKeys.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-card p-8">
                <span className="heading-serif text-[48px] font-medium text-text-faint opacity-30 mb-4 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="heading-serif text-[22px] font-medium mb-3">
                  {t(`process.steps.${key}.title`)}
                </h3>
                <p className="text-[15px] text-text-muted leading-relaxed">
                  {t(`process.steps.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
