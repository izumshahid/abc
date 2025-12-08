'use client';

import { Card } from 'antd';
import {
  TeamOutlined,
  ToolOutlined,
  SolutionOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import { siteConfig } from '@/data/siteConfig';

const iconMap = {
  team: <TeamOutlined style={{ fontSize: 32 }} />,
  tool: <ToolOutlined style={{ fontSize: 32 }} />,
  solution: <SolutionOutlined style={{ fontSize: 32 }} />,
  schedule: <ScheduleOutlined style={{ fontSize: 32 }} />,
};

export default function Features() {
  return (
    <section
      className="section"
      style={{ backgroundColor: 'var(--background)' }}
      aria-labelledby="features-title"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <span
            className="section-badge"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--primary)',
            }}
          >
            Why Choose Us
          </span>
          <h2
            id="features-title"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            What Makes Us Different
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            We are committed to providing the best learning experience to help you achieve your career goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--secondary)',
                }}
              >
                {iconMap[feature.icon]}
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--foreground)' }}
              >
                {feature.title}
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
