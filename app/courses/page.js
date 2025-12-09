import CoursesPageClient from '@/components/CoursesPageClient';
import { getAllCourses } from '@/lib/sanity.queries';

export default async function CoursesPage() {
  const courses = await getAllCourses();

  return <CoursesPageClient courses={courses} />;
}
