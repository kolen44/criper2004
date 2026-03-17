'use client';

import { useEffect, useState } from 'react';
import styles from './LiveTicker.module.css';

interface Purchase {
  id: number;
  wallet: string;
  amount: string;
  time: string;
}

const WALLETS = [
  '7xK9...m3Fp', '3nVd...8hJq', '9pLm...2wRt', 'Bk4n...qZ7x', 
  '5tYu...hN3k', 'Fg8m...xP2v', '2wQz...kL9j', 'Hj6n...mD4r',
  'Xp3k...9vBn', '4rEd...tY7m', 'Lm8x...3qWz', 'Ns5v...pK2h'
];

const AMOUNTS = [
  '10,000', '25,000', '50,000', '100,000', '75,000', '150,000',
  '33,000', '88,000', '42,000', '200,000', '15,000', '67,000'
];

const TIMES = [
  '2 min ago', '5 min ago', '8 min ago', '12 min ago', '15 min ago',
  '23 min ago', '30 min ago', '45 min ago', '1 hour ago'
];

function generatePurchase(id: number): Purchase {
  return {
    id,
    wallet: WALLETS[Math.floor(Math.random() * WALLETS.length)],
    amount: AMOUNTS[Math.floor(Math.random() * AMOUNTS.length)],
    time: TIMES[Math.floor(Math.random() * TIMES.length)],
  };
}

export function LiveTicker() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate initial purchases
    const initial = Array.from({ length: 8 }, (_, i) => generatePurchase(i));
    setPurchases(initial);

    // Add new purchase every 5 seconds
    const interval = setInterval(() => {
      setPurchases(prev => {
        const newPurchase = generatePurchase(Date.now());
        return [newPurchase, ...prev.slice(0, 7)];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.ticker}>
      <div className={styles.tickerContent}>
        {[...purchases, ...purchases].map((purchase, index) => (
          <div key={`${purchase.id}-${index}`} className={styles.tickerItem}>
            <span className={styles.dot} />
            <span className={styles.wallet}>{purchase.wallet}</span>
            <span className={styles.action}>bought</span>
            <span className={styles.amount}>{purchase.amount}</span>
            <span className={styles.token}>$MOONDOG</span>
            <span className={styles.time}>{purchase.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
