import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import Partners from '@/components/sections/Partners';
import { Features } from '@/components/sections/Features';
import { HowToBuy } from '@/components/sections/HowToBuy';
import { Community } from '@/components/sections/Community';
import { Roadmap } from '@/components/sections/Roadmap';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Features />
        <HowToBuy />
        <Community />
        <Roadmap />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
