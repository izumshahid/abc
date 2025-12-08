'use client';

import { useState, useEffect } from 'react';
import { Button } from 'antd';
import Cookies from 'js-cookie';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    if (!consent) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365 });
    setVisible(false);
    // Enable analytics here
    // window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
  };

  const handleDecline = () => {
    Cookies.set('cookie_consent', 'declined', { expires: 365 });
    setVisible(false);
    // Ensure analytics stays disabled
    // window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-description"
    >
      <div
        className="container-custom max-w-4xl mx-auto rounded-lg shadow-lg p-4 md:p-6"
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--card-border)',
          border: '1px solid',
        }}
      >
        <div className="md:flex items-center justify-between gap-4">
          <div className="mb-4 md:mb-0">
            <h3
              className="font-semibold mb-1"
              style={{ color: 'var(--foreground)' }}
            >
              Cookie Preferences
            </h3>
            <p
              id="cookie-description"
              className="text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              We use cookies to enhance your browsing experience and analyze site traffic.
              By clicking &quot;Accept&quot;, you consent to our use of cookies.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button onClick={handleDecline}>Decline</Button>
            <Button
              type="primary"
              onClick={handleAccept}
              style={{
                backgroundColor: 'var(--primary)',
                borderColor: 'var(--primary)',
              }}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
