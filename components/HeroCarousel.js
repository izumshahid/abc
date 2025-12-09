"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { urlFor } from "@/lib/sanity.client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function HeroCarousel({ slides = [] }) {
  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  return (
    <section
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden"
      aria-label="Hero carousel"
      role="region"
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        className="h-full"
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          paginationBulletMessage: "Go to slide {{index}}",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide._id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              {slide.image && (
                <Image
                  src={urlFor(slide.image).width(1920).url()}
                  alt={slide.image.alt || slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                  quality={85}
                />
              )}
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "var(--hero-overlay)" }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex items-center pt-28">
                <div className="container-custom">
                  <div className="max-w-2xl animate-fadeInUp">
                    <span className="inline-block px-5 py-2.5 mb-6 text-sm font-semibold rounded-full bg-[var(--secondary)] text-[var(--primary-dark)]">
                      Admissions Open for {new Date().getFullYear()}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--secondary)] font-semibold mb-6">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link href={slide.ctaLink}>
                        <Button
                          type="primary"
                          size="large"
                          style={{
                            backgroundColor: "var(--secondary)",
                            borderColor: "var(--secondary)",
                            color: "var(--primary-dark)",
                            fontWeight: 600,
                            height: "48px",
                            paddingInline: "32px",
                            fontSize: "16px",
                          }}
                        >
                          {slide.cta}
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button
                          size="large"
                          style={{
                            backgroundColor: "transparent",
                            borderColor: "white",
                            color: "white",
                            fontWeight: 600,
                            height: "48px",
                            paddingInline: "32px",
                            fontSize: "16px",
                          }}
                        >
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <LeftOutlined className="text-white text-lg" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <RightOutlined className="text-white text-lg" />
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}
