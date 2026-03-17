'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './Sparkles.module.css';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const COLORS = ['#FFD700', '#FF6B35', '#39FF14', '#00D4FF', '#8B5CF6'];

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
}

export function Sparkles({ children, className = '' }: SparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const generateSparkle = useCallback((): Sparkle => {
    return {
      id: Date.now() + Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = generateSparkle();
      setSparkles(prev => [...prev, newSparkle]);

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 1000);
    }, 400);

    return () => clearInterval(interval);
  }, [generateSparkle]);

  return (
    <span className={`${styles.container} ${className}`}>
      {sparkles.map(sparkle => (
        <span
          key={sparkle.id}
          className={styles.sparkle}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
            background: sparkle.color,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none">
            <path
              d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
              fill={sparkle.color}
            />
          </svg>
        </span>
      ))}
      <span className={styles.childWrapper}>{children}</span>
    </span>
  );
}
