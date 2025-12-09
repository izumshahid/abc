'use client';

import Image from 'next/image';
import { Card, Tag, Button } from 'antd';
import {
  ClockCircleOutlined,
  TrophyOutlined,
  StarFilled,
} from '@ant-design/icons';
import { urlFor } from '@/lib/sanity.client';

export default function CourseCard({ course, onViewDetails }) {
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
    <Card
      hoverable
      className="h-full overflow-hidden group"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
      }}
      cover={
        <div className="relative h-48 overflow-hidden">
          {course.image ? (
            <Image
              src={course.image.asset ? urlFor(course.image).width(800).height(400).url() : course.image}
              alt={course.image.alt || course.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center">
              <span className="text-white text-2xl font-bold opacity-20">
                {course.title.charAt(0)}
              </span>
            </div>
          )}
          {course.featured && (
            <div className="absolute top-3 left-3">
              <Tag
                icon={<StarFilled />}
                style={{
                  backgroundColor: 'var(--secondary)',
                  color: 'var(--primary-dark)',
                  border: 'none',
                  fontWeight: 600,
                }}
              >
                Featured
              </Tag>
            </div>
          )}
          {discountPercent > 0 && (
            <div className="absolute top-3 right-3">
              <Tag color="red" style={{ fontWeight: 600 }}>
                {discountPercent}% OFF
              </Tag>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      }
      styles={{ body: { padding: '20px' } }}
    >
      <div className="flex flex-col h-full">
        {/* Category Tag */}
        <Tag
          color={course.category === 'technology' ? 'green' : 'purple'}
          className="self-start mb-3"
        >
          {course.category === 'technology' ? 'Technology' : 'Creative'}
        </Tag>

        {/* Title */}
        <h3
          className="text-lg font-semibold mb-3 line-clamp-2"
          style={{ color: 'var(--foreground)' }}
        >
          {course.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm mb-5 line-clamp-2 leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {course.shortDescription}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 mb-5 text-sm">
          <span
            className="flex items-center gap-1"
            style={{ color: 'var(--text-muted)' }}
          >
            <ClockCircleOutlined />
            {course.duration}
          </span>
          <span
            className="flex items-center gap-1"
            style={{ color: 'var(--text-muted)' }}
          >
            <TrophyOutlined />
            {course.level}
          </span>
        </div>

        {/* Price & CTA */}
        <div className="mt-auto pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
          <div className="flex items-center justify-between">
            <div>
              <span
                className="text-xl font-bold"
                style={{ color: 'var(--primary)' }}
              >
                {formatPrice(course.price)}
              </span>
              {course.originalPrice && (
                <span
                  className="ml-2 text-sm line-through"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {formatPrice(course.originalPrice)}
                </span>
              )}
            </div>
            <Button
              type="primary"
              onClick={() => onViewDetails(course)}
              style={{
                backgroundColor: 'var(--primary)',
                borderColor: 'var(--primary)',
              }}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
