'use client';

import { useEffect, useState } from 'react';
import styles from './FloatingNotification.module.css';

interface Notification {
  id: number;
  wallet: string;
  amount: string;
}

const WALLETS = [
  '7xK9...m3Fp', '3nVd...8hJq', '9pLm...2wRt', 'Bk4n...qZ7x', 
  '5tYu...hN3k', 'Fg8m...xP2v', '2wQz...kL9j', 'Hj6n...mD4r'
];

const AMOUNTS = ['$500', '$1,200', '$2,500', '$800', '$3,000', '$1,500', '$750', '$4,200'];

export function FloatingNotification() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const newNotification = {
        id: Date.now(),
        wallet: WALLETS[Math.floor(Math.random() * WALLETS.length)],
        amount: AMOUNTS[Math.floor(Math.random() * AMOUNTS.length)],
      };
      setNotification(newNotification);
      setShow(true);

      // Hide after 4 seconds
      setTimeout(() => setShow(false), 4000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Then show every 8-15 seconds
    const interval = setInterval(() => {
      showNotification();
    }, 8000 + Math.random() * 7000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  return (
    <div className={`${styles.notification} ${show ? styles.show : ''}`}>
      <div className={styles.icon}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>New Purchase!</div>
        <div className={styles.text}>
          <span className={styles.wallet}>{notification.wallet}</span> just bought{' '}
          <span className={styles.amount}>{notification.amount}</span> worth
        </div>
      </div>
      <div className={styles.time}>Just now</div>
    </div>
  );
}
