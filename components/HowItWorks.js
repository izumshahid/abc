'use client';

import { siteConfig } from '@/data/siteConfig';

export default function HowItWorks() {
  return (
    <section
      className="section"
      style={{ backgroundColor: 'var(--primary-dark)' }}
      aria-labelledby="how-it-works-title"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <span
            className="section-badge"
            style={{
              backgroundColor: 'var(--secondary)',
              color: 'var(--primary-dark)',
            }}
          >
            Simple Process
          </span>
          <h2
            id="how-it-works-title"
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Your journey to new skills in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.howItWorks.map((step, index) => (
            <div
              key={index}
              className="relative text-center"
            >
              {/* Connector line for desktop */}
              {index < siteConfig.howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-[var(--primary)]" />
              )}

              {/* Step number */}
              <div
                className="relative z-10 w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{
                  backgroundColor: 'var(--secondary)',
                  color: 'var(--primary-dark)',
                }}
              >
                {step.step}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
