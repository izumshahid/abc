"use client";

import Link from "next/link";
import { Button } from "antd";
import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";

export default function ContactCTA({ siteConfig }) {
  if (!siteConfig) return null;

  // Get CTA content from Sanity with fallbacks
  const ctaTitle =
    siteConfig.contactCTA?.title || "Ready to Start Your Journey?";
  const ctaDescription =
    siteConfig.contactCTA?.description ||
    "Take the first step towards your new career. Contact us today to learn more about our courses and enrollment process.";
  const enrollButtonText =
    siteConfig.contactCTA?.enrollButtonText || "Enroll Now";
  const callButtonText = siteConfig.contactCTA?.callButtonText || "Call Us";
  const whatsappButtonText =
    siteConfig.contactCTA?.whatsappButtonText || "WhatsApp";

  return (
    <section
      className="section"
      style={{ backgroundColor: "var(--primary)" }}
      aria-labelledby="contact-cta-title"
    >
      <div className="container-custom text-center">
        <h2
          id="contact-cta-title"
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          {ctaTitle}
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          {ctaDescription}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
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
              }}
            >
              {enrollButtonText}
            </Button>
          </Link>
          <a href={`tel:${siteConfig.contact?.phone}`}>
            <Button
              size="large"
              icon={<PhoneOutlined />}
              style={{
                backgroundColor: "transparent",
                borderColor: "white",
                color: "white",
                height: "48px",
                paddingInline: "32px",
              }}
            >
              {callButtonText}
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
                backgroundColor: "#25D366",
                borderColor: "#25D366",
                color: "white",
                height: "48px",
                paddingInline: "32px",
              }}
            >
              {whatsappButtonText}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
