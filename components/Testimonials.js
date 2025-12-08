'use client';

import { Card, Avatar, Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '@/data/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section bg-[var(--accent)]"
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <span
            className="section-badge"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--secondary)',
            }}
          >
            Success Stories
          </span>
          <h2
            id="testimonials-title"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            What Our Students Say
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            Hear from our graduates who transformed their careers and lives through our courses
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Card
                className="h-full"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--card-border)',
                }}
              >
                <div className="flex flex-col h-full">
                  <Rate
                    disabled
                    defaultValue={testimonial.rating}
                    className="mb-4"
                  />
                  <p
                    className="mb-6 flex-grow italic"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                    <Avatar
                      src={testimonial.avatar}
                      size={50}
                      icon={<UserOutlined />}
                    />
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: 'var(--primary)' }}
                      >
                        {testimonial.role}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Course: {testimonial.course}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
