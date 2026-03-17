'use client';

import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/config/site';
import { ChevronDownIcon } from '@/components/ui/Icons';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({ item, index, isOpen, onClick, isVisible }: { 
  item: FAQItem; 
  index: number; 
  isOpen: boolean;
  onClick: () => void;
  isVisible: boolean;
}) {
  return (
    <div 
      className={`${styles.item} ${isOpen ? styles.itemOpen : ''} ${isVisible ? styles.itemVisible : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button 
        className={styles.question}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={styles.questionNumber}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={styles.questionText}>{item.question}</span>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
          <ChevronDownIcon />
        </span>
      </button>
      <div className={`${styles.answerWrapper} ${isOpen ? styles.answerWrapperOpen : ''}`}>
        <div className={styles.answer}>
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>FAQ</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Got questions? We&apos;ve got answers
          </p>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.faqList}>
            {siteConfig.faq.map((item, index) => (
              <FAQAccordion
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onClick={() => toggleQuestion(index)}
                isVisible={isVisible}
              />
            ))}
          </div>

          <div className={`${styles.sideCard} ${isVisible ? styles.sideCardVisible : ''}`}>
            <div className={styles.sideCardGlow} />
            <div className={styles.sideCardContent}>
              <h3 className={styles.sideCardTitle}>Still have questions?</h3>
              <p className={styles.sideCardText}>
                Join our community on Twitter for instant support and updates
              </p>
              <a 
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sideCardButton}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow Us on X
              </a>
            </div>
            <div className={styles.decoration}>
              <span className={styles.decorationEmoji}>?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
