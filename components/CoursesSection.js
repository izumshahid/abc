'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Segmented } from 'antd';
import { AppstoreOutlined, CodeOutlined, HighlightOutlined } from '@ant-design/icons';
import CourseCard from './CourseCard';
import CourseDetail from './CourseDetail';
import EnrollmentForm from './EnrollmentForm';
import { courses, courseCategories } from '@/data/courses';

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [enrollCourse, setEnrollCourse] = useState(null);

  const filteredCourses =
    activeCategory === 'all'
      ? courses
      : courses.filter((course) => course.category === activeCategory);

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
    <section
      id="courses"
      className="section"
      style={{ backgroundColor: 'var(--background)' }}
      aria-labelledby="courses-title"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <span
            className="section-badge"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--primary)',
            }}
          >
            Our Courses
          </span>
          <h2
            id="courses-title"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            Start Your Learning Journey
          </h2>
          <p
            className="max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--text-muted)' }}
          >
            Choose from our range of tech and creative skill courses designed to help you succeed in your career
          </p>

          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <Segmented
              options={categoryOptions}
              value={activeCategory}
              onChange={setActiveCategory}
              size="large"
            />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredCourses.slice(0, 6).map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* View All Button */}
        {courses.length > 6 && (
          <div className="text-center">
            <Link href="/courses">
              <Button
                size="large"
                style={{
                  borderColor: 'var(--primary)',
                  color: 'var(--primary)',
                }}
              >
                View All Courses
              </Button>
            </Link>
          </div>
        )}
      </div>

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
      />
    </section>
  );
}
