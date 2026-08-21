import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import GlassInfoCard from './GlassInfoCard';

const AnimatedCounter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const numTarget = parseInt(target.replace(/[^0-9]/g, ''), 10);

  useEffect(() => {
    if (!numTarget) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * numTarget));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numTarget]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Hero = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const stats = [
    { value: '20', suffix: '+', label: t('home.statProjects') },
    { value: '5', suffix: 'yr', label: t('home.statExperience') },
    { value: '15', suffix: '+', label: t('home.statClients') },
  ];

  return (
    <section ref={ref} className="px-6 md:px-10 lg:px-[85px] pt-5">
      <div className="mx-auto max-w-container bg-surface rounded-section overflow-hidden min-h-[880px] grid grid-cols-1 lg:grid-cols-2 relative">
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-center px-10 md:px-[100px] lg:px-[145px] py-16 lg:py-0 relative z-10">
          <div
            className={`transition-all duration-slow ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="heading-serif text-hero max-w-[650px] mb-6">
              {t('home.name').split(' ').slice(0, 2).join(' ')}{' '}
              <span className="text-text-faint">{t('home.name').split(' ').slice(2).join(' ')}</span>
            </h1>
          </div>

          <div
            className={`transition-all duration-slow delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-body text-text-muted max-w-card-text mb-8 leading-relaxed">
              {t('home.description')}
            </p>
          </div>

          <div
            className={`transition-all duration-slow delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link to="/projects" className="btn-primary">
                {t('home.cta')}
              </Link>
              <Link to="/contact" className="btn-secondary">
                {t('home.contact')}
              </Link>
            </div>
          </div>

          <div
            className={`transition-all duration-slow delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex gap-16">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="heading-serif text-stat font-medium mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[15px] text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — Image with bleed */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 flex items-end justify-end overflow-hidden">
              {/* Placeholder portrait area */}
              <div className="w-[110%] h-[110%] flex items-center justify-center">
                <div className="text-center text-white/40">
                  <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-5xl font-serif font-medium">M</span>
                  </div>
                  <p className="text-sm">Portrait Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Glass info card overlay — bottom-left of image area */}
          <div className="absolute bottom-6 left-6 z-20">
            <GlassInfoCard
              eyebrow="Select project"
              title={t('home.badge')}
              description="Share a few details, and I'll get back with a clear direction."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
