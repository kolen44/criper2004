# 🐕 MOONDOG - Meme Coin Landing Page

A modern, responsive landing page for a meme coin built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design** - Dark theme with neon accents and gradient effects
- **Animated Components** - Smooth animations using CSS and Framer Motion
- **Responsive** - Fully responsive design for all device sizes
- **SEO Optimized** - Built-in meta tags and Open Graph support
- **TypeScript** - Full type safety throughout the codebase
- **Tailwind CSS** - Utility-first CSS framework for rapid development

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Navigate to the project directory
cd memecoin-landing

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
memecoin-landing/
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── layout/
│   │   ├── Header.tsx   # Navigation header
│   │   └── Footer.tsx   # Page footer
│   ├── sections/
│   │   ├── Hero.tsx     # Hero section with stats
│   │   ├── Features.tsx # Features grid
│   │   ├── Tokenomics.tsx # Token distribution
│   │   ├── Roadmap.tsx  # Project roadmap
│   │   ├── FAQ.tsx      # Frequently asked questions
│   │   └── CTA.tsx      # Call to action
│   └── ui/
│       ├── Button.tsx   # Reusable button component
│       ├── Section.tsx  # Section wrapper component
│       └── FAQAccordion.tsx # Accordion component
├── lib/
│   └── utils.ts         # Utility functions
└── package.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```ts
colors: {
  primary: '#FFD700',      // Main brand color
  secondary: '#FF6B35',    // Accent color
  accent: '#00D4FF',       // Highlight color
  dark: '#0A0A0F',         // Background
}
```

### Content

- **Hero Section**: Edit `components/sections/Hero.tsx`
- **Features**: Edit `components/sections/Features.tsx`
- **Tokenomics**: Edit `components/sections/Tokenomics.tsx`
- **Roadmap**: Edit `components/sections/Roadmap.tsx`
- **FAQ**: Edit `components/sections/FAQ.tsx`

### Metadata

Update SEO metadata in `app/layout.tsx`:

```ts
export const metadata: Metadata = {
  title: 'Your Coin Name',
  description: 'Your description',
  // ...
};
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS Animations + Framer Motion
- **Components**: Class Variance Authority (CVA)

## 📝 License

MIT License - feel free to use this for your projects!

## ⚠️ Disclaimer

This is a template for educational purposes. Not financial advice. Always DYOR (Do Your Own Research) before investing in any cryptocurrency.
