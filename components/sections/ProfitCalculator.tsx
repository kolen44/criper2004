'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import styles from './ProfitCalculator.module.css';

const MULTIPLIERS = [
  { label: '10x', value: 10 },
  { label: '50x', value: 50 },
  { label: '100x', value: 100 },
  { label: '500x', value: 500 },
  { label: '1000x', value: 1000 },
];

export function ProfitCalculator() {
  const [investment, setInvestment] = useState(100);
  const [selectedMultiplier, setSelectedMultiplier] = useState(100);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestment(Number(e.target.value));
  };

  const profit = investment * selectedMultiplier;

  return (
    <section className={styles.section} id="calculator">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Profit Calculator</span>
          <h2 className={styles.title}>What If You Invested Early?</h2>
          <p className={styles.subtitle}>
            See your potential returns if {siteConfig.name} reaches the moon
          </p>
        </div>

        <div className={styles.calculator}>
          <div className={styles.inputSection}>
            <label className={styles.label}>Your Investment (USD)</label>
            <div className={styles.inputWrapper}>
              <span className={styles.currency}>$</span>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                min={10}
                max={100000}
                className={styles.input}
              />
            </div>
            <input
              type="range"
              min={10}
              max={10000}
              value={investment}
              onChange={handleSliderChange}
              className={styles.slider}
            />
            <div className={styles.sliderLabels}>
              <span>$10</span>
              <span>$10,000</span>
            </div>
          </div>

          <div className={styles.multiplierSection}>
            <label className={styles.label}>If {siteConfig.ticker} goes</label>
            <div className={styles.multipliers}>
              {MULTIPLIERS.map((mult) => (
                <button
                  key={mult.value}
                  className={`${styles.multiplierBtn} ${selectedMultiplier === mult.value ? styles.active : ''}`}
                  onClick={() => setSelectedMultiplier(mult.value)}
                >
                  {mult.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.resultSection}>
            <div className={styles.resultLabel}>Your Potential Return</div>
            <div className={styles.resultValue}>
              ${profit.toLocaleString()}
            </div>
            <div className={styles.resultProfit}>
              +${(profit - investment).toLocaleString()} profit
            </div>
          </div>

          <a 
            href={siteConfig.links.pumpfun}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Invest Now & Don&apos;t Miss Out
          </a>

          <p className={styles.disclaimer}>
            *This is a hypothetical calculator for entertainment purposes only. 
            Cryptocurrency investments carry high risk.
          </p>
        </div>
      </div>
    </section>
  );
}
