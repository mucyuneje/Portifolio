import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../components/ScrollReveal';

const articles = [
  { id: 1, title: 'Building Scalable Design Systems', category: 'Web design', date: 'Aug 10, 2026', bg: 'from-amber-100 to-orange-100' },
  { id: 2, title: 'AI in Product Development', category: 'Product design', date: 'Jul 28, 2026', bg: 'from-blue-100 to-indigo-100' },
  { id: 3, title: 'The Future of UI Design', category: 'UI Design', date: 'Jul 15, 2026', bg: 'from-green-100 to-emerald-100' },
];

const filterOptions = ['All articles', 'Web design', 'Product design', 'UI Design'];

const ArticlesPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All articles');

  return (
    <section className="section-spacing">
      <div className="container-wide">
        <ScrollReveal>
          <div className="section-header-centered">
            <span className="eyebrow mb-5 inline-flex">Journal</span>
            <h1 className="heading-serif text-h1 mt-5 mb-5">
              Thoughts on design, process, and clarity
            </h1>
            <p className="text-body text-text-muted mx-auto" style={{ maxWidth: '650px' }}>
              A collection of ideas, notes, and practical reflections on design systems, websites, creative direction, and digital craft.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="filter-row mb-12">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={filter === f ? 'btn-pill-active' : 'btn-pill-inactive'}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-7">
          {articles.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 0.1}>
              <article className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${article.bg} rounded-card aspect-[16/10] mb-5 flex items-center justify-center`}>
                  <div className="w-12 h-12 rounded-full bg-white/40 flex items-center justify-center">
                    <svg className="w-5 h-5 text-text/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[13px] text-text-faint">{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-text-faint" />
                  <span className="text-[13px] text-text-faint">{article.date}</span>
                </div>
                <h3 className="heading-serif text-[22px] font-medium group-hover:opacity-70 transition-opacity">
                  {article.title}
                </h3>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage;
