import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

const FAQItem = ({ questionKey, isOpen, onToggle }) => {
  const { t } = useTranslation();

  return (
    <div className="border-b border-border last:border-b-0">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left group">
        <span className={`font-display text-[16px] font-medium transition-colors pr-4 ${isOpen ? 'text-text' : 'text-text-muted group-hover:text-text'}`}>
          {t(`faq.items.${questionKey}.question`)}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-bg flex items-center justify-center text-text-muted group-hover:bg-surface transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[15px] text-text-muted leading-relaxed pb-5">
              {t(`faq.items.${questionKey}.answer`)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-spacing bg-surface">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-16 max-w-[1370px] mx-auto">
          <ScrollReveal>
            <div>
              <span className="eyebrow mb-5 inline-flex">{t('faq.sectionTitle')}</span>
              <h2 className="heading-serif text-h2 mt-5 mb-4">{t('faq.sectionTitle')}</h2>
              <p className="text-[17px] text-text-muted">{t('faq.description')}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="border-t border-border">
              {faqKeys.map((key, i) => (
                <FAQItem key={key} questionKey={key} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
