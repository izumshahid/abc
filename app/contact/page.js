import ContactPageClient from '@/components/ContactPageClient';
import { getSiteConfig, getAllCourses } from '@/lib/sanity.queries';

export default async function ContactPage() {
  const [siteConfig, courses] = await Promise.all([
    getSiteConfig(),
    getAllCourses(),
  ]);

  return <ContactPageClient siteConfig={siteConfig} courses={courses} />;
}
