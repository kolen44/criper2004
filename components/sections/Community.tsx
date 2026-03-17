'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import { Icon, RocketIcon } from '@/components/ui/Icons';
import styles from './Community.module.css';

export function Community() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="community" className={styles.section}>
      {/* Background effects */}
      <div className={styles.bgGlow} />
      
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
          <span className={styles.badge}>
            <span className={styles.badgePulse} />
            Community
          </span>
          <h2 className={styles.title}>{siteConfig.community.title}</h2>
          <p className={styles.subtitle}>{siteConfig.community.subtitle}</p>
        </div>

        {/* Main content */}
        <div className={styles.content}>
          {/* Left side - Description */}
          <div className={`${styles.descriptionCard} ${isVisible ? styles.descriptionVisible : ''}`}>
            <div className={styles.descriptionGlow} />
            <p className={styles.description}>{siteConfig.community.description}</p>
            
            <div className={styles.pumpInfo}>
              <div className={styles.pumpIcon}>
                <RocketIcon size={32} color="#39FF14" />
              </div>
              <div className={styles.pumpText}>
                <span className={styles.pumpLabel}>PUMP INCOMING</span>
                <span className={styles.pumpSubtext}>The chart is about to go vertical</span>
              </div>
            </div>

            <a 
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Join the Movement
            </a>
          </div>

          {/* Right side - Highlights grid */}
          <div className={styles.highlightsGrid}>
            {siteConfig.community.highlights.map((item, index) => (
              <div 
                key={index}
                className={`${styles.highlightCard} ${isVisible ? styles.highlightVisible : ''}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className={styles.highlightIcon}>
                  <Icon name={item.icon} size={28} color="#FFD700" />
                </div>
                <h3 className={styles.highlightTitle}>{item.title}</h3>
                <p className={styles.highlightDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.bottomCta} ${isVisible ? styles.bottomCtaVisible : ''}`}>
          <p className={styles.ctaText}>{siteConfig.community.callToAction}</p>
          <div className={styles.ctaStats}>
            <div className={styles.ctaStat}>
              <span className={styles.ctaStatValue}>{siteConfig.stats.holders}</span>
              <span className={styles.ctaStatLabel}>{siteConfig.stats.holdersLabel}</span>
            </div>
            <div className={styles.ctaStatDivider}>→</div>
            <div className={styles.ctaStat}>
              <span className={styles.ctaStatValue}>{siteConfig.stats.marketCap}</span>
              <span className={styles.ctaStatLabel}>{siteConfig.stats.marketCapLabel}</span>
            </div>
            <div className={styles.ctaStatDivider}>→</div>
            <div className={styles.ctaStat}>
              <span className={styles.ctaStatValue}>{siteConfig.stats.growth}</span>
              <span className={styles.ctaStatLabel}>{siteConfig.stats.growthLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
