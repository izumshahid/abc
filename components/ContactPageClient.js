'use client';

import { Card } from 'antd';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import EnrollmentForm from '@/components/EnrollmentForm';

export default function ContactPageClient({ siteConfig, courses }) {
  if (!siteConfig) return null;

  const contactInfo = [
    {
      icon: <EnvironmentOutlined className="text-2xl" />,
      title: 'Visit Us',
      content: siteConfig.contact?.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact?.address || '')}`,
    },
    {
      icon: <PhoneOutlined className="text-2xl" />,
      title: 'Call Us',
      content: siteConfig.contact?.phone,
      link: `tel:${siteConfig.contact?.phone}`,
    },
    {
      icon: <MailOutlined className="text-2xl" />,
      title: 'Email Us',
      content: siteConfig.contact?.email,
      link: `mailto:${siteConfig.contact?.email}`,
    },
    {
      icon: <ClockCircleOutlined className="text-2xl" />,
      title: 'Working Hours',
      content: siteConfig.contact?.workingHours,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 bg-[var(--primary)]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="section-badge bg-[var(--secondary)] text-[var(--primary-dark)]">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              Have questions about our courses? Want to enroll? We would love to hear from you.
              Fill out the form below or reach us through any of our contact channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-[var(--background)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: 'var(--foreground)' }}
              >
                Contact Information
              </h2>
              <p
                className="mb-8"
                style={{ color: 'var(--text-muted)' }}
              >
                Reach out to us for course inquiries, enrollment assistance, or any questions
                you may have. Our team is here to help you start your learning journey.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--card-border)',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)' }}
                    >
                      {item.icon}
                    </div>
                    <h3
                      className="font-semibold mb-1"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('https') ? '_blank' : undefined}
                        rel={item.link.startsWith('https') ? 'noopener noreferrer' : undefined}
                        className="hover:underline"
                        style={{ color: 'var(--primary)' }}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p style={{ color: 'var(--text-muted)' }}>{item.content}</p>
                    )}
                  </Card>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Card
                style={{
                  backgroundColor: 'var(--primary)',
                  borderColor: 'var(--primary)',
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center">
                    <WhatsAppOutlined className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Quick Response via WhatsApp
                    </h3>
                    <p className="text-gray-200 text-sm mb-2">
                      Get instant replies to your queries
                    </p>
                    <a
                      href={siteConfig.social?.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--secondary)] hover:underline font-medium"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </Card>

              {/* Location Map */}
              <div className="mt-8">
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ color: 'var(--foreground)' }}
                >
                  Find Us
                </h3>
                <div className="h-64 rounded-lg overflow-hidden border" style={{ borderColor: 'var(--card-border)' }}>
                  <iframe
                    src="https://www.google.com/maps?q=34.086208,74.7966629&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ABC Computronics Location Map"
                  ></iframe>
                </div>
                <a
                  href="https://www.google.com/maps/place/Shri+Maharaja+Hari+Singh+Hospital/@34.086208,74.7966629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline mt-2 inline-block"
                  style={{ color: 'var(--primary)' }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Enrollment Form */}
            <div>
              <Card
                title={
                  <span style={{ color: 'var(--foreground)' }}>
                    Enrollment Inquiry Form
                  </span>
                }
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--card-border)',
                }}
                styles={{
                  header: {
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--card-border)',
                  },
                }}
              >
                <EnrollmentForm courses={courses} />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
