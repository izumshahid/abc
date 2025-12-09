"use client";

import Image from "next/image";
import { Modal, Tabs, Tag, Button, Timeline, Avatar, List } from "antd";
import {
  ClockCircleOutlined,
  TrophyOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  UserOutlined,
  BookOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

export default function CourseDetail({ course, visible, onClose, onEnroll }) {
  if (!course) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const tabItems = [
    {
      key: "overview",
      label: (
        <span className="flex items-center gap-1">
          <BookOutlined />
          Overview
        </span>
      ),
      children: (
        <div className="space-y-6">
          <div>
            <h4
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              Course Description
            </h4>
            <p style={{ color: "var(--text-muted)" }}>
              {course.fullDescription}
            </p>
          </div>

          <div>
            <h4
              className="font-semibold mb-3"
              style={{ color: "var(--foreground)" }}
            >
              What You&#39;ll Learn
            </h4>
            <List
              dataSource={course.outcomes}
              renderItem={(item) => (
                <List.Item className="border-none py-1">
                  <CheckCircleOutlined
                    style={{ color: "var(--primary)", marginRight: 8 }}
                  />
                  <span style={{ color: "var(--text-muted)" }}>{item}</span>
                </List.Item>
              )}
            />
          </div>

          <div>
            <h4
              className="font-semibold mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Prerequisites
            </h4>
            <List
              dataSource={course.prerequisites}
              renderItem={(item) => (
                <List.Item className="border-none py-1">
                  <span style={{ color: "var(--text-muted)" }}>
                    &#8226; {item}
                  </span>
                </List.Item>
              )}
            />
          </div>
        </div>
      ),
    },
    {
      key: "syllabus",
      label: (
        <span className="flex items-center gap-1">
          <CalendarOutlined />
          Syllabus
        </span>
      ),
      children: (
        <Timeline
          items={course.syllabus.map((module) => ({
            color: "green",
            children: (
              <div className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <Tag color="green">{module.week}</Tag>
                  <span
                    className="font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {module.title}
                  </span>
                </div>
                <ul className="pl-4 space-y-1">
                  {module.topics.map((topic, i) => (
                    <li
                      key={i}
                      style={{ color: "var(--text-muted)" }}
                      className="text-sm"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          }))}
        />
      ),
    },
    {
      key: "instructor",
      label: (
        <span className="flex items-center gap-1">
          <UserOutlined />
          Instructor
        </span>
      ),
      children: (
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Avatar
            src={course.instructor.image}
            size={100}
            icon={<UserOutlined />}
            className="shrink-0"
          />
          <div>
            <h4
              className="text-lg font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              {course.instructor.name}
            </h4>
            <p className="text-sm mb-2" style={{ color: "var(--primary)" }}>
              {course.instructor.title}
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              {course.instructor.bio}
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      styles={{
        body: { padding: 0 },
        content: { backgroundColor: "var(--card-bg)" },
      }}
      closeIcon={<span style={{ color: "var(--foreground)" }}>&#10005;</span>}
    >
      {/* Header Image */}
      <div className="relative h-48 md:h-64">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <Tag color={course.category === "technology" ? "green" : "purple"}>
              {course.category === "technology" ? "Technology" : "Creative"}
            </Tag>
            {course.certification && (
              <Tag icon={<SafetyCertificateOutlined />} color="gold">
                Certificate Included
              </Tag>
            )}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {course.title}
          </h2>
        </div>
      </div>

      {/* Course Meta */}
      <div
        className="p-4 md:p-6 border-b"
        style={{ borderColor: "var(--card-border)" }}
      >
        <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
          <span
            className="flex items-center gap-2"
            style={{ color: "var(--text-muted)" }}
          >
            <ClockCircleOutlined style={{ color: "var(--primary)" }} />
            {course.duration}
          </span>
          <span
            className="flex items-center gap-2"
            style={{ color: "var(--text-muted)" }}
          >
            <TrophyOutlined style={{ color: "var(--primary)" }} />
            {course.level}
          </span>
          <span
            className="flex items-center gap-2"
            style={{ color: "var(--text-muted)" }}
          >
            <GlobalOutlined style={{ color: "var(--primary)" }} />
            {course.language}
          </span>
          <span
            className="flex items-center gap-2"
            style={{ color: "var(--text-muted)" }}
          >
            <CalendarOutlined style={{ color: "var(--primary)" }} />
            {course.schedule}
          </span>
        </div>

        {/* Upcoming Batches */}
        <div className="mt-4">
          <span
            className="text-sm font-medium"
            style={{ color: "var(--foreground)" }}
          >
            Upcoming Batches:{" "}
          </span>
          <span style={{ color: "var(--text-muted)" }} className="text-sm">
            {course.startDates.join(" | ")}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4 md:p-6">
        <Tabs items={tabItems} />
      </div>

      {/* Footer */}
      <div
        className="sticky bottom-0 p-4 md:p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          borderColor: "var(--card-border)",
          backgroundColor: "var(--card-bg)",
        }}
      >
        <div>
          <span
            className="text-2xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            {formatPrice(course.price)}
          </span>
          {course.originalPrice && (
            <span
              className="ml-2 text-lg line-through"
              style={{ color: "var(--text-muted)" }}
            >
              {formatPrice(course.originalPrice)}
            </span>
          )}
        </div>
        <Button
          type="primary"
          size="large"
          onClick={() => onEnroll(course)}
          className="!text-white"
          style={{
            backgroundColor: "var(--secondary)",
            borderColor: "var(--secondary)",
            fontWeight: 600,
          }}
        >
          Enroll in This Course
        </Button>
      </div>
    </Modal>
  );
}
