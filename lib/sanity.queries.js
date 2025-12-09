import { client } from './sanity.client';

// Course Queries
export async function getAllCourses() {
  return client.fetch(
    `*[_type == "course"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      shortDescription,
      fullDescription,
      category,
      featured,
      duration,
      price,
      originalPrice,
      currency,
      level,
      language,
      certification,
      startDates,
      schedule,
      image,
      syllabus,
      outcomes,
      prerequisites,
      instructor
    }`
  );
}

export async function getCourseBySlug(slug) {
  return client.fetch(
    `*[_type == "course" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      shortDescription,
      fullDescription,
      category,
      featured,
      duration,
      price,
      originalPrice,
      currency,
      level,
      language,
      certification,
      startDates,
      schedule,
      image,
      syllabus,
      outcomes,
      prerequisites,
      instructor
    }`,
    { slug }
  );
}

export async function getFeaturedCourses() {
  return client.fetch(
    `*[_type == "course" && featured == true] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      shortDescription,
      category,
      duration,
      price,
      originalPrice,
      currency,
      level,
      image
    }`
  );
}

export async function getCoursesByCategory(category) {
  if (category === 'all') {
    return getAllCourses();
  }

  return client.fetch(
    `*[_type == "course" && category == $category] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      shortDescription,
      category,
      duration,
      price,
      originalPrice,
      currency,
      level,
      image
    }`,
    { category }
  );
}

// Testimonial Queries
export async function getAllTestimonials() {
  return client.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc) {
      _id,
      name,
      role,
      avatar,
      rating,
      course,
      content,
      featured
    }`
  );
}

export async function getFeaturedTestimonials() {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] | order(_createdAt desc) {
      _id,
      name,
      role,
      avatar,
      rating,
      course,
      content,
      featured
    }`
  );
}

// Hero Slides Queries
export async function getHeroSlides() {
  return client.fetch(
    `*[_type == "heroSlide"] | order(order asc) {
      _id,
      title,
      subtitle,
      description,
      cta,
      ctaLink,
      image,
      order
    }`
  );
}

// Site Config Queries
export async function getSiteConfig() {
  return client.fetch(
    `*[_type == "siteConfig"][0] {
      _id,
      name,
      shortName,
      tagline,
      description,
      url,
      logo,
      contact,
      social,
      features,
      howItWorks
    }`
  );
}
