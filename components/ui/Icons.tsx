import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

// Rocket icon
export const RocketIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4.5 16.5C3 18 3 21 3 21C3 21 6 21 7.5 19.5C8.32843 18.6716 8.32843 17.3284 7.5 16.5C6.67157 15.6716 5.32843 15.6716 4.5 16.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 4C14.5 4 16 6 18 8C20 10 22 11.5 22 11.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M14.5 4C14.5 4 13 6 11 8S7.5 12 7.5 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M21.5 2.5L20 4M12.5 11.5L14 10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 15L2 22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="17" cy="7" r="3" stroke={color} strokeWidth="2"/>
  </svg>
);

// Chart/Growth icon
export const ChartIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 3V21H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 14L12 9L15 12L21 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 6H21V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Diamond icon
export const DiamondIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L2 9L12 22L22 9L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 9H22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 2L8 9L12 22L16 9L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Shield/Security icon
export const ShieldIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L3 7V12C3 17 7 21 12 22C17 21 21 17 21 12V7L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Users/Community icon
export const UsersIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="9" cy="7" r="4" stroke={color} strokeWidth="2"/>
    <path d="M3 21V19C3 16.79 4.79 15 7 15H11C13.21 15 15 16.79 15 19V21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="7" r="3" stroke={color} strokeWidth="2"/>
    <path d="M21 21V19C21 17.34 19.66 16 18 16H17" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Wallet icon
export const WalletIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="3" stroke={color} strokeWidth="2"/>
    <path d="M2 10H22" stroke={color} strokeWidth="2"/>
    <circle cx="17" cy="14" r="2" fill={color}/>
  </svg>
);

// Bolt/Lightning icon
export const BoltIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill={color}/>
  </svg>
);

// Fire icon
export const FireIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 22C16.4183 22 20 18.4183 20 14C20 10.5 17 7 14 4C14 7 12 9 10 9C8 9 6 7.5 6 5C3 8 4 11 4 14C4 18.4183 7.58172 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22C14.2091 22 16 19.9853 16 17.5C16 15.5 14.5 14 13 13C13 15 12 16 11 16C10 16 9 15 9 14C8 15 8 16 8 17.5C8 19.9853 9.79086 22 12 22Z" fill={color}/>
  </svg>
);

// Moon icon
export const MoonIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88299 19.5345 5.67423 18.3258C4.46546 17.117 3.62593 15.589 3.25391 13.9205C2.8819 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.88737 6.53324 4.84175C7.88562 3.79614 9.50779 3.15731 11.21 3C10.2134 4.34827 9.73387 6.00945 9.85856 7.68141C9.98324 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1415C17.9906 14.2662 19.6517 13.7866 21 12.79Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Star icon
export const StarIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);

// Globe icon
export const GlobeIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <path d="M2 12H22" stroke={color} strokeWidth="2"/>
    <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke={color} strokeWidth="2"/>
  </svg>
);

// Lock icon
export const LockIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" stroke={color} strokeWidth="2"/>
    <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="1.5" fill={color}/>
  </svg>
);

// Coin/Token icon
export const CoinIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <path d="M12 6V18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 9C15 7.89543 13.6569 7 12 7C10.3431 7 9 7.89543 9 9C9 10.1046 10.3431 11 12 11C13.6569 11 15 11.8954 15 13C15 14.1046 13.6569 15 12 15C10.3431 15 9 14.1046 9 13" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Copy icon
export const CopyIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="9" y="9" width="13" height="13" rx="2" stroke={color} strokeWidth="2"/>
    <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke={color} strokeWidth="2"/>
  </svg>
);

// Check icon
export const CheckIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M20 6L9 17L4 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Arrow Right icon
export const ArrowRightIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Twitter/X icon
export const TwitterIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// External Link icon
export const ExternalLinkIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3H21V9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14L21 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Chevron Down icon
export const ChevronDownIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 9L12 15L18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Chevron Up icon
export const ChevronUpIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 15L12 9L6 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Menu icon
export const MenuIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 12H21M3 6H21M3 18H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Close icon
export const CloseIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 6L6 18M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Play icon
export const PlayIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M8 5.14V19.14L19 12.14L8 5.14Z"/>
  </svg>
);

// Sparkles icon
export const SparklesIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 15L19.5 17L21.5 17.5L19.5 18L19 20L18.5 18L16.5 17.5L18.5 17L19 15Z" fill={color}/>
    <path d="M5 3L5.5 4.5L7 5L5.5 5.5L5 7L4.5 5.5L3 5L4.5 4.5L5 3Z" fill={color}/>
  </svg>
);

// Zap icon
export const ZapIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Target icon
export const TargetIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
  </svg>
);

// Trending Up icon
export const TrendingUpIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 6H23V12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Clock icon
export const ClockIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <path d="M12 6V12L16 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Gift icon
export const GiftIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="8" width="18" height="14" rx="2" stroke={color} strokeWidth="2"/>
    <path d="M12 8V22" stroke={color} strokeWidth="2"/>
    <path d="M3 12H21" stroke={color} strokeWidth="2"/>
    <path d="M12 8C12 8 12 4 8 4C6 4 4 5.5 4 7.5C4 9.5 6 10 8 10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 8C12 8 12 4 16 4C18 4 20 5.5 20 7.5C20 9.5 18 10 16 10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Crown icon
export const CrownIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 17L4 7L8 12L12 5L16 12L20 7L22 17H2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V17Z" fill={color}/>
  </svg>
);

// Heart icon
export const HeartIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"/>
  </svg>
);

// Percent icon
export const PercentIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="7" cy="7" r="3" stroke={color} strokeWidth="2"/>
    <circle cx="17" cy="17" r="3" stroke={color} strokeWidth="2"/>
    <path d="M5 19L19 5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icon map for dynamic rendering
export const IconMap: Record<string, React.FC<IconProps>> = {
  Rocket: RocketIcon,
  Chart: ChartIcon,
  Diamond: DiamondIcon,
  Shield: ShieldIcon,
  Users: UsersIcon,
  Wallet: WalletIcon,
  Bolt: BoltIcon,
  Fire: FireIcon,
  Moon: MoonIcon,
  Star: StarIcon,
  Globe: GlobeIcon,
  Lock: LockIcon,
  Coin: CoinIcon,
  Copy: CopyIcon,
  Check: CheckIcon,
  ArrowRight: ArrowRightIcon,
  Twitter: TwitterIcon,
  ExternalLink: ExternalLinkIcon,
  ChevronDown: ChevronDownIcon,
  ChevronUp: ChevronUpIcon,
  Menu: MenuIcon,
  Close: CloseIcon,
  Play: PlayIcon,
  Sparkles: SparklesIcon,
  Zap: ZapIcon,
  Target: TargetIcon,
  TrendingUp: TrendingUpIcon,
  Clock: ClockIcon,
  Gift: GiftIcon,
  Crown: CrownIcon,
  Heart: HeartIcon,
  Percent: PercentIcon,
};

// Dynamic icon component
export const Icon: React.FC<IconProps & { name: string }> = ({ name, ...props }) => {
  const IconComponent = IconMap[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  return <IconComponent {...props} />;
};
