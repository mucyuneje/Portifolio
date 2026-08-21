import { useTranslation } from 'react-i18next';
import ScrollReveal from './ScrollReveal';

const mockups = [
  {
    id: 1,
    title: 'Design System',
    bg: 'bg-white',
    content: (
      <div className="p-6 h-full flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="px-4 py-2 bg-dark text-white text-[13px] rounded-badge font-medium">Primary</div>
          <div className="px-4 py-2 bg-white border border-border text-[13px] rounded-badge font-medium text-text">Secondary</div>
          <div className="px-4 py-2 bg-white border border-border text-[13px] rounded-badge font-medium text-text">Outline</div>
        </div>
        <div className="flex-1 flex items-end gap-3 mt-auto">
          <div className="w-10 h-10 rounded-icon bg-surface" />
          <div className="w-10 h-10 rounded-icon bg-surface" />
          <div className="w-10 h-10 rounded-icon bg-surface" />
          <div className="w-10 h-10 rounded-icon bg-surface" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Analytics',
    bg: 'bg-white',
    content: (
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[13px] text-text-faint">Unique Visitors</p>
            <p className="heading-serif text-[24px] font-medium">9,706</p>
          </div>
          <div className="text-right">
            <p className="text-[13px] text-text-faint">Pageviews</p>
            <p className="heading-serif text-[24px] font-medium">6,816</p>
          </div>
        </div>
        <div className="flex-1 flex items-end">
          <svg className="w-full h-24" viewBox="0 0 200 80" fill="none">
            <path d="M0 60 Q50 20 100 40 T200 10" stroke="#111" strokeWidth="2" fill="none" />
            <path d="M0 60 Q50 20 100 40 T200 10 V80 H0Z" fill="rgba(17,17,17,0.05)" />
          </svg>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="w-2 h-2 rounded-full bg-dark" />
          <p className="text-[12px] text-text-faint">Aug 3, 2026</p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Notification',
    bg: 'bg-white',
    content: (
      <div className="p-6 h-full flex flex-col justify-center gap-4">
        <div className="bg-bg rounded-[16px] p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center">
              <span className="text-white text-[12px] font-medium">M</span>
            </div>
            <div>
              <p className="text-[14px] font-medium text-text">New message</p>
              <p className="text-[12px] text-text-faint">2 min ago</p>
            </div>
          </div>
          <p className="text-[13px] text-text-muted">Let's discuss the project scope and timeline...</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1.5 bg-dark text-white text-[12px] rounded-pill font-medium">Available</span>
          <span className="px-3 py-1.5 bg-surface text-text-muted text-[12px] rounded-pill font-medium">Framer Expert</span>
        </div>
      </div>
    ),
  },
];

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section className="section-spacing">
      <div className="container-content">
        <ScrollReveal>
          <div className="section-header-centered">
            <div className="mb-5">
              <span className="eyebrow">{t('benefits.sectionTitle')}</span>
            </div>
            <h2 className="heading-serif text-h2 mb-5">
              {t('benefits.sectionTitle')}
            </h2>
            <p className="text-body text-text-muted mx-auto" style={{ maxWidth: '650px' }}>
              {t('benefits.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-7">
          {mockups.map((mockup, i) => (
            <ScrollReveal key={mockup.id} delay={i * 0.1}>
              <div className={`${mockup.bg} border border-border rounded-card overflow-hidden h-[300px] shadow-card hover:shadow-card-hover transition-shadow duration-slow`}>
                {mockup.content}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
