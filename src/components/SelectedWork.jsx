import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    key: 'p1',
    bg: 'from-emerald-100 to-emerald-200',
    accent: '#059669',
  },
  {
    key: 'p2',
    bg: 'from-violet-100 to-violet-200',
    accent: '#7c3aed',
  },
  {
    key: 'p3',
    bg: 'from-rose-100 to-rose-200',
    accent: '#e11d48',
  },
];

const SelectedWork = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All projects' },
    { key: 'ai', label: 'AI' },
    { key: 'business', label: 'Business' },
    { key: 'one-page', label: 'One page' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'saas', label: 'SaaS' },
  ];

  return (
    <section className="section-spacing">
      <div className="container-wide">
        <ScrollReveal>
          <div className="section-header-centered">
            <div className="mb-5">
              <span className="eyebrow">{t('projects.sectionTitle')}</span>
            </div>
            <h2 className="heading-serif text-h2 mb-5">
              {t('projects.sectionTitle')}
            </h2>
            <p className="text-body text-text-muted mx-auto" style={{ maxWidth: '600px' }}>
              {t('projects.description')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="filter-row mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={filter === f.key ? 'btn-pill-active' : 'btn-pill-inactive'}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <ScrollReveal key={project.key} delay={i * 0.1}>
              <Link to="/projects" className="group block">
                <div className={`bg-gradient-to-br ${project.bg} rounded-card overflow-hidden aspect-[4/3] relative mb-5`}>
                  {/* Browser mockup placeholder */}
                  <div className="absolute inset-8 bg-white rounded-[12px] shadow-card overflow-hidden">
                    <div className="h-7 bg-bg flex items-center gap-1.5 px-3">
                      <div className="w-2 h-2 rounded-full bg-red-300" />
                      <div className="w-2 h-2 rounded-full bg-yellow-300" />
                      <div className="w-2 h-2 rounded-full bg-green-300" />
                    </div>
                    <div className="h-[calc(100%-28px)] bg-white flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: project.accent + '15' }}>
                        <span className="text-2xl font-serif font-medium" style={{ color: project.accent }}>P</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="heading-serif text-[28px] font-medium group-hover:opacity-70 transition-opacity">
                    {t(`projects.items.${project.key}.title`)}
                  </h3>
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-dark group-hover:border-dark group-hover:text-white transition-all duration-fast">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
