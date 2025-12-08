"use client";

import Link from "next/link";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { siteConfig } from "@/data/siteConfig";
import { courses } from "@/data/courses";

export default function Footer() {
  const techCourses = courses
    .filter((c) => c.category === "technology")
    .slice(0, 4);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FacebookOutlined />,
      href: siteConfig.social.facebook,
      label: "Facebook",
    },
    {
      icon: <InstagramOutlined />,
      href: siteConfig.social.instagram,
      label: "Instagram",
    },
    {
      icon: <TwitterOutlined />,
      href: siteConfig.social.twitter,
      label: "Twitter",
    },
    {
      icon: <LinkedinOutlined />,
      href: siteConfig.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <YoutubeOutlined />,
      href: siteConfig.social.youtube,
      label: "YouTube",
    },
    {
      icon: <WhatsAppOutlined />,
      href: siteConfig.social.whatsapp,
      label: "WhatsApp",
    },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/#courses", label: "Courses" },
    { href: "/contact", label: "Contact" },
    { href: "/#testimonials", label: "Testimonials" },
  ];

  return (
    <footer
      className="bg-[var(--primary-dark)] text-white pt-8"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 lg:gap-16">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[var(--secondary)]">
              ABC Computronics
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed text-base">
              Kashmir&#39;s premier training institute offering computer
              courses, software development, and creative skills training.
              Empowering youth with skills for the future.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center hover:bg-[var(--secondary)] hover:text-[var(--primary-dark)] transition-colors text-white"
                  style={{ fontSize: '18px', color: '#ffffff' }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--secondary)]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="!text-white hover:text-[var(--secondary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--secondary)]">
              Popular Courses
            </h3>
            <ul className="space-y-2">
              {techCourses.map((course) => (
                <li key={course.id}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="!text-white hover:text-[var(--secondary)] transition-colors"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--secondary)]">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <EnvironmentOutlined className="text-[var(--secondary)] mt-1" />
                <span className="text-white">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneOutlined className="text-[var(--secondary)]" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="!text-white hover:text-[var(--secondary)] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailOutlined className="text-[var(--secondary)]" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="!text-white hover:text-[var(--secondary)] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 !text-white text-sm">
              {siteConfig.contact.workingHours}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--primary)]">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[var(--secondary)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[var(--secondary)] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
