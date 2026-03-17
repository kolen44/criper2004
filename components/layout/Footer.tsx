import { siteConfig } from '@/config/site';
import { TwitterIcon, ExternalLinkIcon, RocketIcon } from '@/components/ui/Icons';
import styles from './Footer.module.css';

export function Footer() {
  const quickLinks = [
    { label: 'About', href: '#features' },
    { label: 'Community', href: '#community' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'How to Buy', href: '#how-to-buy' },
    { label: 'FAQ', href: '#faq' },
  ];

  const resources = [
    { label: 'pump.fun', href: siteConfig.links.pumpfun },
    { label: 'Axiom', href: siteConfig.links.axiom },
    { label: 'DexScreener', href: siteConfig.links.dexscreener },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <RocketIcon size={28} color="#FFD700" />
              </div>
              <span className={styles.logoText}>{siteConfig.ticker}</span>
            </div>
            <p className={styles.tagline}>{siteConfig.tagline}</p>
            <p className={styles.description}>{siteConfig.description}</p>
            
            {/* Social */}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <TwitterIcon size={20} />
              <span>Follow on X</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Trade</h4>
            <ul className={styles.linkList}>
              {resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.label}
                    <ExternalLinkIcon size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contract */}
          <div className={styles.contractSection}>
            <h4 className={styles.linkGroupTitle}>Contract Address</h4>
            <div className={styles.contractBox}>
              <code className={styles.contractAddress}>
                {siteConfig.contractAddress.slice(0, 20)}...
              </code>
            </div>
            <a
              href={siteConfig.links.pumpfun}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ marginTop: '16px' }}
            >
              Buy {siteConfig.ticker}
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            Cryptocurrency investments carry risk. Always do your own research.
          </p>
        </div>
      </div>
    </footer>
  );
}
