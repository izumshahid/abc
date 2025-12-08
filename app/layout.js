import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://abccomputronics.com"),
  title: {
    default:
      "ABC Computronics & Kashmir Skill Institute | Computer Courses & Creative Skills Training",
    template: "%s | ABC Computronics",
  },
  description: `Join Kashmir's premier training institute for Python programming, software development, web development, and creative skills like fashion designing and mehndi art. Admissions open for ${new Date().getFullYear()}!`,
  keywords: [
    "computer courses kashmir",
    "python training",
    "software development course",
    "web development",
    "creative skills",
    "fashion designing",
    "mehndi art",
    "skill training srinagar",
  ],
  authors: [{ name: "ABC Computronics" }],
  creator: "ABC Computronics",
  publisher: "ABC Computronics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abccomputronics.com",
    siteName: "ABC Computronics & Kashmir Skill Institute",
    title:
      "ABC Computronics & Kashmir Skill Institute | Computer Courses & Creative Skills Training",
    description: `Join Kashmir's premier training institute for Python programming, software development, web development, and creative skills. Admissions open for ${new Date().getFullYear()}!`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ABC Computronics - Learn Tech & Creative Skills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC Computronics & Kashmir Skill Institute",
    description:
      "Kashmir's premier training institute for tech and creative skills",
    images: ["/og-image.jpg"],
    creator: "@abccomputronics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme initialization script - runs before React hydrates to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getCookie(name) {
                  const value = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
                  return value ? value.pop() : '';
                }

                const savedTheme = getCookie('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1a4d3e" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ClientLayout>{children}</ClientLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
