import { lazy, Suspense, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { HowItWorks } from './components/HowItWorks';
import { CustomizationSection } from './components/CustomizationSection';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

const AdoptModal = lazy(async () => {
  const module = await import('./components/AdoptModal');
  return { default: module.AdoptModal };
});

const InteractiveDemoModal = lazy(async () => {
  const module = await import('./components/InteractiveDemoModal');
  return { default: module.InteractiveDemoModal };
});

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isAdoptModalOpen, setIsAdoptModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <Navbar onAdoptClick={() => setIsAdoptModalOpen(true)} />
      <main className="flex flex-1 flex-col">
        <Hero
          onAdoptClick={() => setIsAdoptModalOpen(true)}
          onDemoClick={() => setIsDemoModalOpen(true)}
        />
        <FeatureStrip />
        <HowItWorks onDemoClick={() => setIsDemoModalOpen(true)} />
        <CustomizationSection onShopClick={() => setIsAdoptModalOpen(true)} />
        <Testimonials />
        <FinalCTA onAdoptClick={() => setIsAdoptModalOpen(true)} />
      </main>
      <Footer />
      {isDemoModalOpen ? (
        <Suspense fallback={null}>
          <InteractiveDemoModal isOpen onClose={() => setIsDemoModalOpen(false)} />
        </Suspense>
      ) : null}
      {isAdoptModalOpen ? (
        <Suspense fallback={null}>
          <AdoptModal isOpen onClose={() => setIsAdoptModalOpen(false)} />
        </Suspense>
      ) : null}
    </div>
  );
}
