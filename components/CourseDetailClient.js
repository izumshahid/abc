'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, Tag, Timeline, Avatar, List, Card, Breadcrumb } from 'antd';
import {
  ClockCircleOutlined,
  TrophyOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  ArrowLeftOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import EnrollmentForm from '@/components/EnrollmentForm';
import { urlFor } from '@/lib/sanity.client';

export default function CourseDetailClient({ course }) {
  const [showEnrollment, setShowEnrollment] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const discountPercent = course.originalPrice
    ? Math.round((1 - course.price / course.originalPrice) * 100)
    : 0;

  return (
    <>
      {/* Header Image Section */}
      <section className="relative pt-24">
        <div className="relative h-64 md:h-80 lg:h-96">
          {course.image && (
            <Image
              src={urlFor(course.image).width(1920).height(500).url()}
              alt={course.image.alt || course.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0">
          <div className="container-custom">
            <Breadcrumb
              items={[
                {
                  href: '/',
                  title: (
                    <span className="text-gray-300 hover:text-white">
                      <HomeOutlined /> Home
                    </span>
                  ),
                },
                {
                  href: '/courses',
                  title: <span className="text-gray-300 hover:text-white">Courses</span>,
                },
                {
                  title: <span className="text-white">{course.title}</span>,
                },
              ]}
            />
          </div>
        </div>

        {/* Course Title */}
        <div className="absolute bottom-6 left-0 right-0">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2 mb-3">
              <Tag
                color={course.category === 'technology' ? 'green' : 'purple'}
              >
                {course.category === 'technology' ? 'Technology' : 'Creative'}
              </Tag>
              {course.certification && (
                <Tag icon={<SafetyCertificateOutlined />} color="gold">
                  Certificate Included
                </Tag>
              )}
              {discountPercent > 0 && (
                <Tag color="red">{discountPercent}% OFF</Tag>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {course.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[var(--background)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Course Meta */}
              <div
                className="flex flex-wrap gap-4 md:gap-6 text-sm mb-8 p-4 rounded-lg"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                <span className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                  <ClockCircleOutlined style={{ color: 'var(--primary)' }} />
                  {course.duration}
                </span>
                <span className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                  <TrophyOutlined style={{ color: 'var(--primary)' }} />
                  {course.level}
                </span>
                <span className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                  <GlobalOutlined style={{ color: 'var(--primary)' }} />
                  {course.language}
                </span>
                <span className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                  <CalendarOutlined style={{ color: 'var(--primary)' }} />
                  {course.schedule}
                </span>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: 'var(--foreground)' }}
                >
                  Course Overview
                </h2>
                <p
                  className="leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {course.fullDescription}
                </p>
              </div>

              {/* Learning Outcomes */}
              {course.outcomes && course.outcomes.length > 0 && (
                <div className="mb-10">
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ color: 'var(--foreground)' }}
                  >
                    What You Will Learn
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {course.outcomes.map((outcome, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 p-3 rounded-lg"
                        style={{ backgroundColor: 'var(--accent)' }}
                      >
                        <CheckCircleOutlined
                          style={{ color: 'var(--primary)', marginTop: 4 }}
                        />
                        <span style={{ color: 'var(--foreground)' }}>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Syllabus */}
              {course.syllabus && course.syllabus.length > 0 && (
                <div className="mb-10">
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Course Syllabus
                  </h2>
                  <Timeline
                    items={course.syllabus.map((module) => ({
                      color: 'green',
                      children: (
                        <Card
                          size="small"
                          style={{
                            backgroundColor: 'var(--card-bg)',
                            borderColor: 'var(--card-border)',
                          }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Tag color="green">{module.week}</Tag>
                            <span
                              className="font-semibold"
                              style={{ color: 'var(--foreground)' }}
                            >
                              {module.title}
                            </span>
                          </div>
                          <ul className="pl-4 space-y-1">
                            {module.topics && module.topics.map((topic, i) => (
                              <li
                                key={i}
                                style={{ color: 'var(--text-muted)' }}
                                className="text-sm"
                              >
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </Card>
                      ),
                    }))}
                  />
                </div>
              )}

              {/* Prerequisites */}
              {course.prerequisites && course.prerequisites.length > 0 && (
                <div className="mb-10">
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Prerequisites
                  </h2>
                  <List
                    dataSource={course.prerequisites}
                    renderItem={(item) => (
                      <List.Item
                        className="border-none py-2"
                        style={{ borderColor: 'var(--card-border)' }}
                      >
                        <span style={{ color: 'var(--text-muted)' }}>&#8226; {item}</span>
                      </List.Item>
                    )}
                  />
                </div>
              )}

              {/* Instructor */}
              {course.instructor && (
                <div className="mb-10">
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Your Instructor
                  </h2>
                  <Card
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--card-border)',
                    }}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <Avatar
                        src={course.instructor.image ? urlFor(course.instructor.image).width(100).url() : null}
                        size={100}
                        icon={<UserOutlined />}
                        className="shrink-0"
                      />
                      <div>
                        <h3
                          className="text-xl font-semibold"
                          style={{ color: 'var(--foreground)' }}
                        >
                          {course.instructor.name}
                        </h3>
                        <p
                          className="mb-2"
                          style={{ color: 'var(--primary)' }}
                        >
                          {course.instructor.title}
                        </p>
                        <p style={{ color: 'var(--text-muted)' }}>
                          {course.instructor.bio}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--card-border)',
                  }}
                >
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span
                        className="text-3xl font-bold"
                        style={{ color: 'var(--primary)' }}
                      >
                        {formatPrice(course.price)}
                      </span>
                      {course.originalPrice && (
                        <span
                          className="text-lg line-through"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {formatPrice(course.originalPrice)}
                        </span>
                      )}
                    </div>
                    {discountPercent > 0 && (
                      <p className="text-green-600 text-sm font-medium">
                        You save {formatPrice(course.originalPrice - course.price)} ({discountPercent}% off)
                      </p>
                    )}
                  </div>

                  {/* Upcoming Batches */}
                  {course.startDates && course.startDates.length > 0 && (
                    <div className="mb-6">
                      <h4
                        className="font-semibold mb-2"
                        style={{ color: 'var(--foreground)' }}
                      >
                        Upcoming Batches
                      </h4>
                      <div className="space-y-2">
                        {course.startDates.map((date, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-2 rounded"
                            style={{ backgroundColor: 'var(--accent)' }}
                          >
                            <CalendarOutlined style={{ color: 'var(--primary)' }} />
                            <span style={{ color: 'var(--text-muted)' }}>{date}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <Button
                    type="primary"
                    size="large"
                    block
                    onClick={() => setShowEnrollment(true)}
                    style={{
                      backgroundColor: 'var(--secondary)',
                      borderColor: 'var(--secondary)',
                      color: 'var(--primary-dark)',
                      fontWeight: 600,
                      height: '48px',
                    }}
                    className="mb-3"
                  >
                    Enroll Now
                  </Button>

                  <Link href="/contact">
                    <Button
                      size="large"
                      block
                      style={{
                        borderColor: 'var(--primary)',
                        color: 'var(--primary)',
                      }}
                    >
                      Ask a Question
                    </Button>
                  </Link>

                  {/* Course Info Summary */}
                  <div
                    className="mt-6 pt-6 border-t"
                    style={{ borderColor: 'var(--card-border)' }}
                  >
                    <h4
                      className="font-semibold mb-3"
                      style={{ color: 'var(--foreground)' }}
                    >
                      This Course Includes
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li
                        className="flex items-center gap-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <CheckCircleOutlined style={{ color: 'var(--primary)' }} />
                        {course.duration} of intensive training
                      </li>
                      <li
                        className="flex items-center gap-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <CheckCircleOutlined style={{ color: 'var(--primary)' }} />
                        Hands-on projects and assignments
                      </li>
                      <li
                        className="flex items-center gap-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <CheckCircleOutlined style={{ color: 'var(--primary)' }} />
                        Certificate upon completion
                      </li>
                      <li
                        className="flex items-center gap-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <CheckCircleOutlined style={{ color: 'var(--primary)' }} />
                        Job placement assistance
                      </li>
                      <li
                        className="flex items-center gap-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <CheckCircleOutlined style={{ color: 'var(--primary)' }} />
                        Lifetime access to course materials
                      </li>
                    </ul>
                  </div>
                </Card>

                {/* Back Link */}
                <div className="mt-4 text-center">
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 hover:underline"
                    style={{ color: 'var(--primary)' }}
                  >
                    <ArrowLeftOutlined />
                    Back to All Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentForm
        preSelectedCourse={course}
        visible={showEnrollment}
        onClose={() => setShowEnrollment(false)}
      />
    </>
  );
}
