import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import ScrollReveal from '../components/ScrollReveal';

const ContactPage = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm('service_kztvuzs', 'template_is0j06s', e.target, 'w4giLfccrGV6o2wXq');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="section-spacing">
      <div className="container-wide">
        <ScrollReveal>
          <div className="section-header-centered">
            <span className="eyebrow mb-5 inline-flex">{t('contact.sectionTitle')}</span>
            <h1 className="heading-serif text-h1 mt-5 mb-5">
              Let's talk about your next project
            </h1>
            <p className="text-body text-text-muted mx-auto" style={{ maxWidth: '600px' }}>
              {t('contact.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 max-w-[1370px] mx-auto">
          {/* Left — Form */}
          <ScrollReveal>
            <div className="bg-card border border-border rounded-card p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="input-label">{t('contact.name')}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Jane Smith" required className="input-field" />
                </div>
                <div>
                  <label className="input-label">{t('contact.email')}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane@example.com" required className="input-field" />
                </div>
                <div>
                  <label className="input-label">{t('contact.subject')}</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry" required className="input-field" />
                </div>
                <div>
                  <label className="input-label">{t('contact.message')}</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={5} className="input-field resize-none" />
                </div>
                <input type="hidden" name="reply_to" value={formData.email} />
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-50">
                  {status === 'sending' ? t('contact.sending') : t('contact.send')}
                </button>
                {status === 'success' && <p className="text-[#059669] text-sm text-center">{t('contact.success')}</p>}
                {status === 'error' && <p className="text-red-500 text-sm text-center">{t('contact.error')}</p>}
              </form>
            </div>
          </ScrollReveal>

          {/* Right — Dark info card */}
          <ScrollReveal delay={0.15}>
            <div className="bg-dark rounded-card p-10 h-full flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-[24px] text-white mb-2">
                Available for new projects
              </h3>
              <p className="text-[15px] text-white/50 mb-8">
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
  );
};

export default ContactPage;
