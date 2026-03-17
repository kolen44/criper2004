'use client';

import { useEffect, useState } from 'react';
import styles from './BackgroundEffects.module.css';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function BackgroundEffects() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Generate fewer stars for better performance
    const newStars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      {/* Simple gradient background */}
      <div className={styles.gradientBg} />
      
      {/* Grid pattern */}
      <div className={styles.gridPattern} />

      {/* Stars */}
      <div className={styles.starsContainer}>
        {stars.map(star => (
          <div
            key={star.id}
            className={styles.star}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Two glowing orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      
      {/* Vignette */}
      <div className={styles.vignette} />
    </div>
  );
}
