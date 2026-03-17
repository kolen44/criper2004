// Site configuration - edit this file to customize your memecoin landing page

export const config = {
  // === BASIC INFO ===
  name: 'Gake The Pygmy Hippo',
  ticker: '$GAKE',
  tagline: 'To The Moon',
  description: 'The cutest hippo on the blockchain. Join the herd and ride to the moon with GAKE!',
  
  // === CONTRACT ADDRESS ===
  // This is the main contract address - all links will use this automatically
  contractAddress: '5AgZ3gTqwbJSpz91YVoFpcewVYwCFzmtWKUuGEYzpump',
  
  // === SOCIAL LINKS ===
  twitter: 'https://twitter.com/gake',
  
  // === STATS (Goals & Aspirations) ===
  stats: {
    holders: '100K+',
    holdersLabel: 'Target Holders',
    marketCap: '$10M',
    marketCapLabel: 'Target MC',
    growth: '1000x',
    growthLabel: 'Potential',
  },
  
  // === COMMUNITY INFO (replaces tokenomics) ===
  community: {
    title: 'Join the Movement',
    subtitle: 'Be part of something bigger than just a token',
    description: 'We\'re building the strongest community in crypto. Early believers get rewarded. Diamond hands get rich. Paper hands get rekt.',
    highlights: [
      {
        icon: 'Rocket',
        title: 'Early Stage',
        description: 'Get in while it\'s still early. The pump hasn\'t even started yet.',
      },
      {
        icon: 'Users',
        title: 'Growing Community',
        description: 'Thousands of believers already onboard. More joining every day.',
      },
      {
        icon: 'Fire',
        title: 'Viral Potential',
        description: 'The memes are cooking. One tweet can change everything.',
      },
      {
        icon: 'Diamond',
        title: 'Diamond Hands Win',
        description: 'Hold strong through the dips. The moon is waiting for believers.',
      },
    ],
    callToAction: 'Don\'t miss the rocket. Join the community now.',
  },
  
  // === FEATURES (icon names from Icons component) ===
  features: [
    {
      icon: 'Shield',
      title: 'Secure & Safe',
      description: 'Fully audited contract with locked liquidity. Your funds are protected by industry-leading security.',
    },
    {
      icon: 'Bolt',
      title: 'Lightning Fast',
      description: 'Built on Solana for blazing fast transactions. No more waiting for confirmations.',
    },
    {
      icon: 'Users',
      title: 'Strong Community',
      description: 'Join thousands of holders in our vibrant community. Together we grow stronger.',
    },
    {
      icon: 'Fire',
      title: 'Deflationary',
      description: 'Automatic token burns reduce supply over time. Your holdings become more valuable.',
    },
    {
      icon: 'Diamond',
      title: 'Diamond Hands',
      description: 'Rewards for long-term holders. The longer you hold, the more you earn.',
    },
    {
      icon: 'TrendingUp',
      title: 'Growing Fast',
      description: 'Rapid growth with solid fundamentals. Join the movement while it\'s still early.',
    },
  ],
  
  // === ROADMAP ===
  roadmap: [
    {
      phase: 'Phase 1',
      title: 'Launch',
      status: 'completed',
      icon: 'Rocket',
      items: [
        'Token Launch',
        'Website Launch',
        'Social Media Setup',
        '1,000 Holders',
        'CoinGecko Listing',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Growth',
      status: 'current',
      icon: 'Chart',
      items: [
        'CMC Listing',
        '10,000 Holders',
        'CEX Listings',
        'Influencer Partnerships',
        'NFT Collection Teaser',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Expansion',
      status: 'upcoming',
      icon: 'Globe',
      items: [
        '50,000 Holders',
        'Major CEX Listings',
        'NFT Collection Launch',
        'Merchandise Store',
        'Global Marketing Campaign',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Moon',
      status: 'upcoming',
      icon: 'Moon',
      items: [
        '100,000+ Holders',
        'Ecosystem Launch',
        'Play-to-Earn Game',
        'Metaverse Integration',
        'To the moon!',
      ],
    },
  ],
  
  // === HOW TO BUY ===
  howToBuy: [
    {
      step: '01',
      title: 'Create a Wallet',
      description: 'Download Phantom or Solflare wallet and create your account. Save your seed phrase securely!',
      icon: 'Wallet',
    },
    {
      step: '02',
      title: 'Get Some SOL',
      description: 'Buy SOL from an exchange like Coinbase or Binance and transfer it to your wallet.',
      icon: 'Coin',
    },
    {
      step: '03',
      title: 'Connect to DEX',
      description: 'Go to pump.fun or Jupiter, connect your wallet, and paste our contract address.',
      icon: 'ExternalLink',
    },
    {
      step: '04',
      title: 'Swap for Token',
      description: 'Enter the amount of SOL you want to swap and confirm the transaction. Welcome aboard!',
      icon: 'Rocket',
    },
  ],
  
  // === FAQ ===
  faq: [
    {
      question: 'What is GAKE?',
      answer: 'GAKE is a community-driven memecoin on Solana featuring the cutest pygmy hippo with ambitions to reach the moon. We combine fun with viral potential and a strong community.',
    },
    {
      question: 'How do I buy GAKE?',
      answer: 'You can buy GAKE on pump.fun. Simply connect your wallet, paste our contract address, and swap SOL for GAKE.',
    },
    {
      question: 'Why should I join early?',
      answer: 'Early believers always win. The pump hasn\'t even started yet. Get in while market cap is low and ride the wave to the moon.',
    },
    {
      question: 'Is this going to pump?',
      answer: 'Our community is growing fast, the memes are cooking, and the vibes are immaculate. Diamond hands will be rewarded.',
    },
    {
      question: 'Where can I join the community?',
      answer: 'Follow us on Twitter to stay updated. That\'s where the alpha drops, memes flow, and the community connects.',
    },
  ],
  
  // === SEO ===
  seo: {
    title: 'GAKE - The Pygmy Hippo | Memecoin on Solana',
    description: 'Join the cutest pygmy hippo on the blockchain. GAKE is a community-driven memecoin with a mission to reach the moon.',
    keywords: 'memecoin, solana, crypto, gake, pygmy hippo, hippo coin, defi',
    ogImage: '/images/og-image.png',
  },
  
  // === PARTNERS / INTEGRATIONS ===
  partners: [
    { name: 'Raydium', icon: 'Globe', url: '#' },
    { name: 'Jupiter', icon: 'Target', url: '#' },
    { name: 'Phantom', icon: 'Shield', url: '#' },
    { name: 'CoinGecko', icon: 'Chart', url: '#' },
    { name: 'DexScreener', icon: 'TrendingUp', url: '#' },
    { name: 'Solscan', icon: 'ExternalLink', url: '#' },
  ],
};

// Helper function to generate links based on contract address
export const getLinks = () => ({
  pumpfun: `https://pump.fun/coin/${config.contractAddress}`,
  axiom: `https://axiom.trade/meme/${config.contractAddress}`,
  dexscreener: `https://dexscreener.com/solana/${config.contractAddress}`,
  solscan: `https://solscan.io/token/${config.contractAddress}`,
  twitter: config.twitter,
});

// Export as siteConfig with dynamic links
export const siteConfig = {
  ...config,
  links: getLinks(),
};
