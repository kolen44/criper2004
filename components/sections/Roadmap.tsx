'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import { Icon, CheckIcon } from '@/components/ui/Icons';
import styles from './Roadmap.module.css';

export function Roadmap() {
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

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return styles.statusCompleted;
      case 'current':
        return styles.statusCurrent;
      default:
        return styles.statusUpcoming;
    }
  };

  return (
    <section ref={sectionRef} id="roadmap" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>The Journey</span>
          <h2 className={styles.title}>Roadmap</h2>
          <p className={styles.subtitle}>
            Our path to the moon and beyond. Every milestone brings us closer to greatness.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {siteConfig.roadmap.map((phase, index) => (
            <div
              key={index}
              className={`${styles.phase} ${getStatusStyles(phase.status)} ${
                isVisible ? styles.phaseVisible : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Phase indicator */}
              <div className={styles.indicator}>
                <div className={styles.indicatorDot}>
                  {phase.status === 'completed' ? (
                    <CheckIcon size={16} color="#39FF14" />
                  ) : (
                    <Icon name={phase.icon} size={20} color={phase.status === 'current' ? '#FFD700' : 'rgba(255,255,255,0.3)'} />
                  )}
                </div>
                {index < siteConfig.roadmap.length - 1 && <div className={styles.indicatorLine} />}
              </div>

              {/* Phase content */}
              <div className={styles.phaseContent}>
                <div className={styles.phaseHeader}>
                  <span className={styles.phaseNumber}>{phase.phase}</span>
                  <h3 className={styles.phaseTitle}>{phase.title}</h3>
                  {phase.status === 'current' && (
                    <span className={styles.currentBadge}>In Progress</span>
                  )}
                </div>

                <ul className={styles.phaseItems}>
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={styles.phaseItem}
                      style={{ animationDelay: `${index * 0.2 + itemIndex * 0.1}s` }}
                    >
                      <span className={styles.itemDot} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className={styles.bgGlow} />
    </section>
  );
}
