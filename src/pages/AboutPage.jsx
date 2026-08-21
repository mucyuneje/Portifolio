import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import GlassInfoCard from '../components/GlassInfoCard';

const tools = [
  { name: 'Framer', desc: 'Building fast, responsive websites with fluid interactions.', dark: true },
  { name: 'Figma', desc: 'Design, prototype & create systems.', dark: false },
  { name: 'Illustrator', desc: 'Create vector graphics & assets.', dark: false },
  { name: 'Photoshop', desc: 'Edit images & craft polished visuals.', dark: false },
];

const skills = [
  { num: '01', title: 'Design', detail: 'Figma, Illustrator, Photoshop' },
  { num: '02', title: 'Development', detail: 'React, Next.js, Node.js' },
  { num: '03', title: 'AI & Data', detail: 'Python, TensorFlow, OpenAI' },
];

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero split */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="eyebrow mb-6 inline-flex">{t('about.sectionTitle')}</span>
                <h1 className="heading-serif text-h1 mt-5 mb-6 max-w-[700px]">
                  Good design starts with clear thinking.
                </h1>
                <p className="text-body text-text-muted max-w-[600px] mb-8 leading-relaxed">
                  {t('about.p1')}
                </p>
                <p className="font-serif text-[32px] text-text-faint italic opacity-40">
                  {t('home.name').split(' ').slice(0, 2).join(' ')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-card overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-text-faint">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-white/30 flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl font-serif">M</span>
                      </div>
                      <p className="text-sm">Portrait Photo</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-surface rounded-card border border-border shadow-card flex items-center justify-center">
                  <div className="text-center text-text-faint text-[12px]">
                    <div className="w-16 h-16 bg-bg rounded-full mx-auto mb-2" />
                    Prop image
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tools section */}
      <section className="section-spacing bg-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <span className="eyebrow mb-5 inline-flex">Tools</span>
                <h2 className="heading-serif text-h2 mt-5 mb-5 max-w-[500px]">
                  The tools behind the work
                </h2>
                <p className="text-[17px] text-text-muted leading-relaxed max-w-[500px] mb-12">
                  The tools I use to shape ideas, design systems, build websites, and prepare polished final work.
                </p>
                <div>
                  {skills.map((skill) => (
                    <div key={skill.num} className="flex items-center gap-5 py-5 border-b border-border last:border-b-0">
                      <div className="w-12 h-12 rounded-badge bg-white border border-border flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-display font-semibold text-[16px] text-text">{skill.title}</p>
                        <p className="text-[14px] text-text-faint">{skill.detail}</p>
                      </div>
                      <span className="heading-serif text-[48px] font-medium text-text-faint opacity-30">{skill.num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="relative h-[500px] hidden lg:block">
                {tools.map((tool, i) => (
                  <div
                    key={tool.name}
                    className={`absolute w-[320px] rounded-card p-6 shadow-tool ${tool.dark ? 'bg-dark text-white' : 'bg-card border border-border text-text'}`}
                    style={{
                      top: `${i * 24}px`,
                      left: `${i * 12}px`,
                      transform: `rotate(${(i - 1.5) * 2}deg)`,
                      zIndex: tools.length - i,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-icon flex items-center justify-center ${tool.dark ? 'bg-white/10' : 'bg-bg'}`}>
                        <span className="text-[14px] font-bold">{tool.name.charAt(0)}</span>
                      </div>
                      <h3 className="font-display font-semibold text-[18px]">{tool.name}</h3>
                    </div>
                    <p className={`text-[14px] leading-relaxed ${tool.dark ? 'text-white/60' : 'text-text-muted'}`}>
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[40%_1fr] gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-card overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-text-faint">
                    <p className="text-sm">Workspace photo</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card !p-5 !rounded-[16px]">
                  <p className="text-[12px] text-white/50 mb-1">Since</p>
                  <p className="heading-serif text-[28px] font-medium text-white mb-1">2016</p>
                  <p className="text-[13px] text-white/60">Design & digital experiences</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <span className="eyebrow mb-5 inline-flex">My story</span>
                <h2 className="heading-serif text-h2 mt-5 mb-6 max-w-[560px]">
                  From curiosity to refined craft
                </h2>
                <p className="text-[17px] text-text-muted leading-relaxed max-w-[560px] mb-6">
                  {t('about.p1')}
                </p>
                <p className="text-[17px] text-text-muted leading-relaxed max-w-[560px] mb-8">
                  {t('about.p2')}
                </p>
                <div className="border-t border-border pt-6">
                  <p className="font-serif text-[32px] text-text-faint italic opacity-40 mb-2">Mucyuneje</p>
                  <p className="font-display font-semibold text-[16px] text-text">Mucyuneje Hirwa Arsene</p>
                  <p className="text-[14px] text-text-muted">Full-Stack & AI Developer</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact CTA band */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="bg-surface rounded-section p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="eyebrow mb-5 inline-flex">Start a project</span>
                <h2 className="heading-serif text-h2 mt-5 mb-5 max-w-[500px]">
                  Let's create something thoughtful together
                </h2>
                <p className="text-[17px] text-text-muted leading-relaxed max-w-[460px] mb-8">
                  Have a project in mind? I'd love to hear about it. Let's discuss your goals and find the best path forward.
                </p>
                <div className="flex gap-4 mb-8">
                  <Link to="/contact" className="btn-primary">Get in touch</Link>
                  <Link to="/projects" className="btn-secondary">View projects</Link>
                </div>
                <div className="border-t border-border pt-6 flex items-center gap-3 text-[14px] text-text-muted">
                  <span>Branding</span>
                  <span className="w-1 h-1 rounded-full bg-text-faint" />
                  <span>Web development</span>
                  <span className="w-1 h-1 rounded-full bg-text-faint" />
                  <span>AI Solutions</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-dark rounded-card p-8">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-[24px] text-white mb-2">
                  Available for new projects
                </h3>
                <p className="text-[15px] text-white/50 mb-6">
                  Currently booking for August – September 2026
                </p>
                <div className="border-t border-white/10 pt-6 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[13px] text-white/40">Email</p>
                      <p className="text-[16px] font-medium text-white">mucyunejehirwaarsene@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[13px] text-white/40">Location</p>
                      <p className="text-[16px] font-medium text-white">Kigali, Rwanda / Remote</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[13px] text-white/40">Response time</p>
                      <p className="text-[16px] font-medium text-white">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
