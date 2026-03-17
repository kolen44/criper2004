'use client';

import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/config/site';
import { RocketIcon, CopyIcon, CheckIcon, SparklesIcon, ArrowRightIcon, ChevronDownIcon, ChartIcon } from '@/components/ui/Icons';
import styles from './Hero.module.css';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [showChartMenu, setShowChartMenu] = useState(false);
  const chartMenuRef = useRef<HTMLDivElement>(null);

  const copyContract = () => {
    navigator.clipboard.writeText(siteConfig.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chartMenuRef.current && !chartMenuRef.current.contains(event.target as Node)) {
        setShowChartMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className={styles.heroOrb1} />
      <div className={styles.heroOrb2} />
      <div className={styles.heroOrb3} />

      <div className={styles.container}>
        {/* Badge */}
        <div className={styles.badge}>
          <SparklesIcon size={16} color="#FFD700" />
          <span>The Next 1000x Gem</span>
        </div>

        {/* Title */}
        <h1 className={styles.title}>
          <span className={styles.titleTop}>{siteConfig.name}</span>
          <span className={styles.titleBottom}>{siteConfig.tagline}</span>
        </h1>

        {/* Description */}
        <p className={styles.description}>{siteConfig.description}</p>

        {/* Stats */}
        <div className={styles.stats}>
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

        {/* CTA Buttons */}
        <div className={styles.cta}>
          <a
            href={siteConfig.links.pumpfun}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary btn-lg ${styles.ctaButton}`}
          >
            <RocketIcon size={20} />
            Buy {siteConfig.ticker}
          </a>
          
          {/* Chart dropdown */}
          <div className={styles.chartDropdown} ref={chartMenuRef}>
            <button
              onClick={() => setShowChartMenu(!showChartMenu)}
              className={`btn btn-secondary btn-lg ${styles.ctaButton}`}
            >
              View Chart
              <ChevronDownIcon size={18} />
            </button>
            {showChartMenu && (
              <div className={styles.chartMenu}>
                <a
                  href={siteConfig.links.axiom}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.chartMenuItem}
                  onClick={() => setShowChartMenu(false)}
                >
                  <span className={styles.chartMenuIcon}>
                    <ChartIcon size={20} color="#FFD700" />
                  </span>
                  Axiom
                </a>
                <a
                  href={siteConfig.links.pumpfun}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.chartMenuItem}
                  onClick={() => setShowChartMenu(false)}
                >
                  <span className={styles.chartMenuIcon}>
                    <RocketIcon size={20} color="#FF6B35" />
                  </span>
                  Pump.fun
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Contract Address */}
        <div className={styles.contract}>
          <span className={styles.contractLabel}>Contract Address</span>
          <button onClick={copyContract} className={styles.contractBox}>
            <code className={styles.contractAddress}>{siteConfig.contractAddress}</code>
            <span className={styles.copyButton}>
              {copied ? (
                <CheckIcon size={18} color="#39FF14" />
              ) : (
                <CopyIcon size={18} />
              )}
            </span>
          </button>
          {copied && <span className={styles.copiedText}>Copied!</span>}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
