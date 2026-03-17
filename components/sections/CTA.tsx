'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import { RocketIcon, TwitterIcon } from '@/components/ui/Icons';
import styles from './CTA.module.css';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="cta" className={styles.section} ref={sectionRef}>
      {/* Background Effects */}
      <div className={styles.bgGradient} />
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        <div className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}>
          <div className={styles.cardGlow} />
          
          <div className={styles.content}>
            <div className={`${styles.iconContainer} ${isVisible ? styles.iconVisible : ''}`}>
              <RocketIcon size={48} color="#FFD700" />
            </div>

            <h2 className={`${styles.title} ${isVisible ? styles.titleVisible : ''}`}>
              Ready to Join the Revolution?
            </h2>

            <p className={`${styles.subtitle} ${isVisible ? styles.subtitleVisible : ''}`}>
              Don&apos;t miss your chance to be part of the next big memecoin movement.
              Early believers get the biggest rewards.
            </p>

            <div className={`${styles.buttons} ${isVisible ? styles.buttonsVisible : ''}`}>
              <a 
                href="#how-to-buy" 
                className={styles.primaryBtn}
              >
                <span className={styles.btnText}>Buy {siteConfig.ticker} Now</span>
                <span className={styles.btnGlow} />
              </a>

              <a 
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                <TwitterIcon size={20} />
                <span>Join Community</span>
              </a>
            </div>

            <div className={`${styles.stats} ${isVisible ? styles.statsVisible : ''}`}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{siteConfig.stats.holders}</span>
                <span className={styles.statLabel}>{siteConfig.stats.holdersLabel}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statValue}>{siteConfig.stats.marketCap}</span>
                <span className={styles.statLabel}>{siteConfig.stats.marketCapLabel}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statValue}>{siteConfig.stats.growth}</span>
                <span className={styles.statLabel}>{siteConfig.stats.growthLabel}</span>
              </div>
            </div>
          </div>

          {/* Floating particles */}
          <div className={styles.particles}>
            {[...Array(15)].map((_, i) => (
              <span 
                key={i} 
                className={styles.particle}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
