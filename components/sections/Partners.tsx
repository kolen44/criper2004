'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import styles from './Partners.module.css';

export default function Partners() {
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

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Trusted By</span>
          <h3 className={styles.title}>Our Partners & Exchanges</h3>
        </div>

        <div className={styles.marqueeWrapper}>
          <div className={`${styles.marquee} ${isVisible ? styles.marqueeVisible : ''}`}>
            <div className={styles.marqueeContent}>
              {[...siteConfig.partners, ...siteConfig.partners].map((partner, index) => (
                <a 
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.partnerItem}
                >
                  <span className={styles.partnerName}>{partner.name}</span>
                </a>
              ))}
            </div>
            <div className={styles.marqueeContent} aria-hidden="true">
              {[...siteConfig.partners, ...siteConfig.partners].map((partner, index) => (
                <a 
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.partnerItem}
                >
                  <span className={styles.partnerName}>{partner.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.badges} ${isVisible ? styles.badgesVisible : ''}`}>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L3 7V12C3 17 7 21 12 22C17 21 21 17 21 12V7L12 2Z"/>
            </svg>
            <span>Audited</span>
          </div>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12L11 14L15 10M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
            </svg>
            <span>Verified</span>
          </div>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
            </svg>
            <span>Fast</span>
          </div>
        </div>
      </div>
    </section>
  );
}
