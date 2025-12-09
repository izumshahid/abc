import dynamic from 'next/dynamic';
import HeroCarousel from '@/components/HeroCarousel';
import Features from '@/components/Features';
import CoursesSection from '@/components/CoursesSection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import PricingCTA from '@/components/PricingCTA';
import {
  getHeroSlides,
  getSiteConfig,
  getFeaturedCourses,
  getFeaturedTestimonials,
  getActivePromotionalBanner
} from '@/lib/sanity.queries';

// Dynamic imports for better code splitting
const ContactCTA = dynamic(() => import('@/components/ContactCTA'), {
  loading: () => <div className="h-64 bg-[var(--primary)]" />,
});

export default async function Home() {
  // Fetch data from Sanity
  const [heroSlides, siteConfig, courses, testimonials, promotionalBanner] = await Promise.all([
    getHeroSlides(),
    getSiteConfig(),
    getFeaturedCourses(),
    getFeaturedTestimonials(),
    getActivePromotionalBanner(),
  ]);

  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <Features features={siteConfig?.features || []} />
      <CoursesSection courses={courses} />
      <HowItWorks steps={siteConfig?.howItWorks || []} />
      <Testimonials testimonials={testimonials} />
      <PricingCTA banner={promotionalBanner} />
      <ContactCTA siteConfig={siteConfig} />
    </>
  );
}
