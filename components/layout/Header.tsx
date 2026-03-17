'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { TwitterIcon, MenuIcon, CloseIcon, RocketIcon } from '@/components/ui/Icons';
import styles from './Header.module.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#features' },
    { label: 'Community', href: '#community' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <div className={styles.logoIcon}>
            <RocketIcon size={24} color="#FFD700" />
          </div>
          <span className={styles.logoText}>{siteConfig.ticker}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Twitter"
          >
            <TwitterIcon size={20} />
          </a>
          <a
            href={siteConfig.links.pumpfun}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.buyButton}`}
          >
            Buy Now
          </a>
          
          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={siteConfig.links.pumpfun}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '16px' }}
        >
          Buy Now
        </a>
      </div>
    </header>
  );
}
