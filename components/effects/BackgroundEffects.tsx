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

      {/* Rocket */}
      <div className={styles.rocketContainer}>
        <svg 
          width="100" 
          height="200" 
          viewBox="0 0 100 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={styles.rocketSvg}
        >
          {/* Flame outer glow */}
          <ellipse cx="50" cy="175" rx="20" ry="35" fill="url(#flameGlow)" className={styles.flameOuter} />
          
          {/* Flame layers */}
          <path d="M35 140 Q30 165 40 190 Q50 200 60 190 Q70 165 65 140 Q50 155 35 140" fill="url(#flameOrange)" className={styles.flame} />
          <path d="M40 140 Q35 160 45 180 Q50 188 55 180 Q65 160 60 140 Q50 150 40 140" fill="url(#flameYellow)" className={styles.flame} />
          <path d="M45 140 Q42 155 48 170 Q50 175 52 170 Q58 155 55 140 Q50 148 45 140" fill="#fff" className={styles.flameCore} />
          
          {/* Left fin */}
          <path d="M20 120 L10 145 L25 135 L30 115 Z" fill="url(#finGradient)" />
          <path d="M22 122 L14 142 L26 133 L30 117 Z" fill="url(#finHighlight)" opacity="0.3" />
          
          {/* Right fin */}
          <path d="M80 120 L90 145 L75 135 L70 115 Z" fill="url(#finGradient)" />
          <path d="M78 122 L86 142 L74 133 L70 117 Z" fill="url(#finHighlight)" opacity="0.3" />
          
          {/* Center fin */}
          <path d="M42 130 L50 150 L58 130 Z" fill="url(#finGradient)" />
          
          {/* Rocket body */}
          <path d="M30 45 Q30 130 35 140 L65 140 Q70 130 70 45 Q70 20 50 5 Q30 20 30 45" fill="url(#bodyGradient)" />
          
          {/* Body highlight */}
          <path d="M35 50 Q35 120 38 135 L45 135 Q42 120 42 50 Q42 30 50 15 Q38 25 35 50" fill="url(#bodyHighlight)" opacity="0.4" />
          
          {/* Body shadow */}
          <path d="M60 50 Q60 120 58 135 L65 135 Q68 120 68 50 Q68 25 50 10 Q65 25 60 50" fill="#1a1a2e" opacity="0.3" />
          
          {/* Window frame */}
          <circle cx="50" cy="55" r="14" fill="#2d3748" />
            <clipPath id="windowClip">
              <circle cx="50" cy="55" r="12" />
            </clipPath>
            <image 
              href="/niga.jpg" 
              x="38" 
              y="43" 
              width="24" 
              height="24" 
              clipPath="url(#windowClip)"
              preserveAspectRatio="xMidYMid slice"
            />
            
            {/* Window reflection */}
            <ellipse cx="44" cy="50" rx="4" ry="3" fill="rgba(255,255,255,0.4)" />
          <rect x="35" y="85" width="30" height="4" rx="2" fill="#e53e3e" />
          <rect x="38" y="93" width="24" height="3" rx="1.5" fill="#c53030" />
          
          {/* Rivets */}
          <circle cx="36" cy="70" r="1.5" fill="#4a5568" />
          <circle cx="64" cy="70" r="1.5" fill="#4a5568" />
          <circle cx="36" cy="105" r="1.5" fill="#4a5568" />
          <circle cx="64" cy="105" r="1.5" fill="#4a5568" />
          
          {/* Engine nozzle */}
          <ellipse cx="50" cy="138" rx="12" ry="4" fill="#2d3748" />
          <ellipse cx="50" cy="140" rx="10" ry="3" fill="#1a1a2e" />
          
          <defs>
            <linearGradient id="bodyGradient" x1="30" y1="70" x2="70" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a0aec0" />
              <stop offset="25%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#f7fafc" />
              <stop offset="75%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#718096" />
            </linearGradient>
            
            <linearGradient id="bodyHighlight" x1="35" y1="0" x2="45" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            
            <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fc8181" />
              <stop offset="50%" stopColor="#e53e3e" />
              <stop offset="100%" stopColor="#c53030" />
            </linearGradient>
            
            <linearGradient id="finHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            
            <radialGradient id="windowGradient" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#63b3ed" />
              <stop offset="50%" stopColor="#3182ce" />
              <stop offset="100%" stopColor="#1a365d" />
            </radialGradient>
            
            <linearGradient id="flameOrange" x1="50" y1="140" x2="50" y2="195" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f6ad55" />
              <stop offset="50%" stopColor="#ed8936" />
              <stop offset="100%" stopColor="#dd6b20" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="flameYellow" x1="50" y1="140" x2="50" y2="185" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#faf089" />
              <stop offset="40%" stopColor="#f6e05e" />
              <stop offset="100%" stopColor="#ecc94b" stopOpacity="0" />
            </linearGradient>
            
            <radialGradient id="flameGlow" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#f6ad55" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ed8936" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Two glowing orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      
      {/* Vignette */}
      <div className={styles.vignette} />
    </div>
  );
}
