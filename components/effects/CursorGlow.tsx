'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './CursorGlow.module.css';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  if (!visible) return null;

  return (
    <div className={styles.cursorContainer}>
      <div
        className={styles.mainGlow}
        style={{
          transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
        }}
      />
    </div>
  );
}
