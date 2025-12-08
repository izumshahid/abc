import dynamic from 'next/dynamic';
import HeroCarousel from '@/components/HeroCarousel';
import Features from '@/components/Features';
import CoursesSection from '@/components/CoursesSection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import PricingCTA from '@/components/PricingCTA';

// Dynamic imports for better code splitting
const ContactCTA = dynamic(() => import('@/components/ContactCTA'), {
  loading: () => <div className="h-64 bg-[var(--primary)]" />,
});

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Features />
      <CoursesSection />
      <HowItWorks />
      <Testimonials />
      <PricingCTA />
      <ContactCTA />
    </>
  );
}
