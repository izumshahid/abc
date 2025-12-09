"use client";

import Link from "next/link";
import { Button, Card, Tag } from "antd";
import { GiftOutlined, CheckCircleOutlined } from "@ant-design/icons";

export default function PricingCTA({ banner }) {
  // If no banner or banner is not active, don't render anything
  if (!banner || !banner.isActive) {
    return null;
  }

  return (
    <section
      className="section"
      style={{ backgroundColor: "var(--accent)" }}
      aria-labelledby="pricing-title"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Card
            className="overflow-hidden"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
          >
            <div className="md:flex">
              {/* Left side - Offer details */}
              <div className="md:w-2/3 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <GiftOutlined
                    style={{
                      fontSize: 32,
                      color: "var(--secondary)",
                    }}
                  />
                  {banner.tagline && (
                    <Tag color="red" className="text-base px-3 py-1">
                      {banner.tagline}
                    </Tag>
                  )}
                </div>

                <h2
                  id="pricing-title"
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "var(--foreground)" }}
                >
                  {banner.title}
                </h2>

                <p className="mb-6" style={{ color: "var(--text-muted)" }}>
                  {banner.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {banner.features?.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      <CheckCircleOutlined
                        style={{ color: "var(--primary)" }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 mt-2">
                  <Link href={banner.primaryButtonLink || "/contact"}>
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        backgroundColor: "var(--primary)",
                        borderColor: "var(--primary)",
                        color: "white",
                        fontWeight: 600,
                        height: "48px",
                        paddingInline: "32px",
                      }}
                    >
                      {banner.primaryButtonText || "Claim This Offer"}
                    </Button>
                  </Link>
                  <Link href={banner.secondaryButtonLink || "/#courses"}>
                    <Button
                      size="large"
                      style={{
                        borderColor: "var(--primary)",
                        color: "var(--primary)",
                        backgroundColor: "transparent",
                        fontWeight: 600,
                        height: "48px",
                        paddingInline: "32px",
                      }}
                    >
                      {banner.secondaryButtonText || "Browse Courses"}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right side - Visual */}
              <div
                className="md:w-1/3 p-8 md:p-10 flex items-center justify-center"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <div className="text-center text-white">
                  <div className="text-6xl md:text-7xl font-bold mb-2">
                    {banner.discountPercentage}%
                  </div>
                  <div className="text-xl">OFF</div>
                  {banner.discountText && (
                    <div className="text-sm mt-2 opacity-80">
                      {banner.discountText}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Limited time notice */}
          {banner.disclaimer && (
            <p
              className="text-center mt-4"
              style={{ color: "var(--text-muted)" }}
            >
              {banner.disclaimer}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
