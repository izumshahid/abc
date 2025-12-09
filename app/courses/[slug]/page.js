import CourseDetailClient from '@/components/CourseDetailClient';
import { getCourseBySlug } from '@/lib/sanity.queries';
import { notFound } from 'next/navigation';

export default async function CourseDetailPage({ params }) {
  const course = await getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}
