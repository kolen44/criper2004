'use client';

import { useState, useEffect } from 'react';
import styles from './GlitchText.module.css';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export function GlitchText({ text, className = '', intensity = 'medium' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, intensity === 'high' ? 4000 : intensity === 'medium' ? 8000 : 12000);

    return () => clearInterval(glitchInterval);
  }, [intensity]);

  return (
    <span
      className={`${styles.glitchText} ${styles[intensity]} ${isGlitching ? styles.active : ''} ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
}
