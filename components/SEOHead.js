'use client';

import { siteConfig } from '@/data/siteConfig';

export function generateStructuredData(type, data) {
  const baseOrg = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Main Market Road',
      addressLocality: 'Srinagar',
      addressRegion: 'Kashmir',
      postalCode: '190001',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
  };

  if (type === 'organization') {
    return baseOrg;
  }

  if (type === 'course' && data) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: data.title,
      description: data.fullDescription || data.shortDescription,
      provider: {
        '@type': 'EducationalOrganization',
        name: siteConfig.name,
        sameAs: siteConfig.url,
      },
      courseCode: data.id,
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'onsite',
        duration: data.duration,
        instructor: {
          '@type': 'Person',
          name: data.instructor?.name,
          jobTitle: data.instructor?.title,
        },
      },
      offers: {
        '@type': 'Offer',
        price: data.price,
        priceCurrency: data.currency || 'INR',
        availability: 'https://schema.org/InStock',
      },
    };
  }

  return baseOrg;
}

export function StructuredData({ type, data }) {
  const structuredData = generateStructuredData(type, data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
