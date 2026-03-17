'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import { Icon } from '@/components/ui/Icons';
import styles from './Features.module.css';

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section ref={sectionRef} id="features" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Why Choose Us</span>
          <h2 className={styles.title}>
            Built Different
          </h2>
          <p className={styles.subtitle}>
            {siteConfig.name} isn't just another memecoin. We're building something special.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.grid}>
          {siteConfig.features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className={styles.cardGlow} />
              
              {/* Icon */}
              <div className={styles.iconContainer}>
                <Icon name={feature.icon} size={28} color="#FFD700" />
              </div>

              {/* Content */}
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>

              {/* Decorative corner */}
              <div className={styles.corner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
