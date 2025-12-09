'use client';

import { ConfigProvider, App } from 'antd';
import { ThemeProvider } from '@/lib/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StructuredData } from '@/components/SEOHead';

const antdTheme = {
  token: {
    colorPrimary: '#1a4d3e',
    colorLink: '#1a4d3e',
    borderRadius: 8,
    fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
  },
  components: {
    Button: {
      borderRadius: 8,
    },
    Card: {
      borderRadius: 12,
    },
    Modal: {
      borderRadius: 16,
    },
  },
};

export default function ClientLayout({ children, courses, siteConfig }) {
  return (
    <ThemeProvider>
      <ConfigProvider theme={antdTheme}>
        <App>
          <StructuredData type="organization" siteConfig={siteConfig} />
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer courses={courses} siteConfig={siteConfig} />
        </App>
      </ConfigProvider>
    </ThemeProvider>
  );
}
