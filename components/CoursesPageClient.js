'use client';

import { useState } from 'react';
import { Input, Segmented } from 'antd';
import { SearchOutlined, AppstoreOutlined, CodeOutlined, HighlightOutlined } from '@ant-design/icons';
import CourseCard from '@/components/CourseCard';
import CourseDetail from '@/components/CourseDetail';
import EnrollmentForm from '@/components/EnrollmentForm';

const { Search } = Input;

const courseCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'technology', name: 'Technology' },
  { id: 'creative', name: 'Creative Skills' },
];

export default function CoursesPageClient({ courses }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [enrollCourse, setEnrollCourse] = useState(null);

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
  };

  const handleEnroll = (course) => {
    setEnrollCourse(course);
    setSelectedCourse(null);
    setShowEnrollment(true);
  };

  const categoryOptions = courseCategories.map((cat) => ({
    value: cat.id,
    label: (
      <span className="flex items-center gap-2">
        {cat.id === 'all' && <AppstoreOutlined />}
        {cat.id === 'technology' && <CodeOutlined />}
        {cat.id === 'creative' && <HighlightOutlined />}
        {cat.name}
      </span>
    ),
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 bg-[var(--primary)]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="section-badge bg-[var(--secondary)] text-[var(--primary-dark)]">
              Our Courses
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore All Courses
            </h1>
            <p className="text-xl text-gray-200">
              Choose from our comprehensive range of technology and creative skill courses.
              Find the perfect course to kickstart or advance your career.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section bg-[var(--background)]">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <Segmented
              options={categoryOptions}
              value={activeCategory}
              onChange={setActiveCategory}
              size="large"
            />
            <Search
              placeholder="Search courses..."
              allowClear
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ maxWidth: 300 }}
              size="large"
              prefix={<SearchOutlined />}
            />
          </div>

          {/* Results count */}
          <p
            className="mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
          </p>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course._id}
                  course={course}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <div
              className="text-center py-12"
              style={{ color: 'var(--text-muted)' }}
            >
              <p className="text-lg mb-2">No courses found matching your criteria.</p>
              <p>Try adjusting your search or filter selection.</p>
            </div>
          )}
        </div>
      </section>

      {/* Course Detail Modal */}
      <CourseDetail
        course={selectedCourse}
        visible={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnroll}
      />

      {/* Enrollment Modal */}
      <EnrollmentForm
        preSelectedCourse={enrollCourse}
        visible={showEnrollment}
        onClose={() => {
          setShowEnrollment(false);
          setEnrollCourse(null);
        }}
        courses={courses}
      />
    </>
  );
}
