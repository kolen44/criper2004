'use client';

import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/config/site';
import { Icon, CopyIcon, CheckIcon, ArrowRightIcon } from '@/components/ui/Icons';
import styles from './HowToBuy.module.css';

export function HowToBuy() {
  const [copied, setCopied] = useState(false);
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

  const copyContract = () => {
    navigator.clipboard.writeText(siteConfig.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={sectionRef} id="how-to-buy" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Simple Steps</span>
          <h2 className={styles.title}>How to Buy</h2>
          <p className={styles.subtitle}>
            Get your {siteConfig.ticker} in just 4 easy steps
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {siteConfig.howToBuy.map((step, index) => (
            <div
              key={index}
              className={`${styles.step} ${isVisible ? styles.stepVisible : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step number */}
              <div className={styles.stepNumber}>{step.step}</div>

              {/* Icon */}
              <div className={styles.stepIcon}>
                <Icon name={step.icon} size={32} color="#FFD700" />
              </div>

              {/* Content */}
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>

              {/* Arrow to next step */}
              {index < siteConfig.howToBuy.length - 1 && (
                <div className={styles.arrow}>
                  <ArrowRightIcon size={24} color="rgba(255,255,255,0.2)" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contract Address Card */}
        <div className={`${styles.contractCard} ${isVisible ? styles.contractCardVisible : ''}`}>
          <div className={styles.contractGlow} />
          
          <div className={styles.contractContent}>
            <p className={styles.contractLabel}>Contract Address</p>
            <button onClick={copyContract} className={styles.contractBox}>
              <code className={styles.contractAddress}>
                {siteConfig.contractAddress}
              </code>
              <span className={styles.copyButton}>
                {copied ? (
                  <CheckIcon size={20} color="#39FF14" />
                ) : (
                  <CopyIcon size={20} />
                )}
              </span>
            </button>
            {copied && <span className={styles.copiedText}>Copied to clipboard!</span>}
          </div>

          <a
            href={siteConfig.links.pumpfun}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ marginTop: '24px' }}
          >
            Buy {siteConfig.ticker} Now
          </a>
        </div>
      </div>
    </section>
  );
}
