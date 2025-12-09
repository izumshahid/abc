'use client';

import Link from 'next/link';
import { Button } from 'antd';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';

export default function ContactCTA({ siteConfig }) {
  if (!siteConfig) return null;

  return (
    <section
      className="section"
      style={{ backgroundColor: 'var(--primary)' }}
      aria-labelledby="contact-cta-title"
    >
      <div className="container-custom text-center">
        <h2
          id="contact-cta-title"
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Take the first step towards your new career. Contact us today to learn more about our courses and enrollment process.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: 'var(--secondary)',
                borderColor: 'var(--secondary)',
                color: 'var(--primary-dark)',
                fontWeight: 600,
                height: '48px',
                paddingInline: '32px',
              }}
            >
              Enroll Now
            </Button>
          </Link>
          <a href={`tel:${siteConfig.contact?.phone}`}>
            <Button
              size="large"
              icon={<PhoneOutlined />}
              style={{
                backgroundColor: 'transparent',
                borderColor: 'white',
                color: 'white',
                height: '48px',
                paddingInline: '32px',
              }}
            >
              Call Us
            </Button>
          </a>
          <a
            href={siteConfig.social?.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="large"
              icon={<WhatsAppOutlined />}
              style={{
                backgroundColor: '#25D366',
                borderColor: '#25D366',
                color: 'white',
                height: '48px',
                paddingInline: '32px',
              }}
            >
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
