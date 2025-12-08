# ABC Computronics & Kashmir Skill Institute

A modern, responsive single-page application website for a training institute offering computer courses and creative skills training. Built with Next.js 16, Tailwind CSS, and Ant Design.

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Responsive Design**: Works seamlessly on all devices (320px to 1920px+)
- **Dark/Light Theme**: Persistent theme toggle with system preference detection
- **Hero Carousel**: Full-width carousel with 3 customizable slides
- **Course Catalog**: Filterable course listings with detailed course pages
- **Enrollment System**: Client-side validated forms with honeypot bot protection
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, structured data (JSON-LD)
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Image optimization, code splitting, lazy loading

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: Ant Design 5
- **Carousel**: Swiper.js
- **Icons**: Ant Design Icons
- **Cookies**: js-cookie

## Project Structure

```
abc-computronics/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── enroll/        # Enrollment form endpoint
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── courses/           # Courses listing and detail pages
│   │   └── [slug]/        # Dynamic course detail page
│   ├── layout.js          # Root layout with SEO metadata
│   ├── ClientLayout.js    # Client-side layout wrapper
│   ├── page.js            # Home page
│   ├── sitemap.js         # Dynamic sitemap generation
│   ├── robots.js          # Robots.txt configuration
│   └── globals.css        # Global styles and theme variables
├── components/            # React components
│   ├── ui/                # UI primitives
│   │   └── ThemeToggle.js
│   ├── Header.js          # Site header with navigation
│   ├── Footer.js          # Site footer
│   ├── HeroCarousel.js    # Home page hero carousel
│   ├── CourseCard.js      # Course listing card
│   ├── CourseDetail.js    # Course detail modal
│   ├── CoursesSection.js  # Home page courses section
│   ├── EnrollmentForm.js  # Enrollment/contact form
│   ├── Testimonials.js    # Testimonials slider
│   ├── Features.js        # Features grid
│   ├── HowItWorks.js      # How it works section
│   ├── PricingCTA.js      # Combo offer section
│   ├── ContactCTA.js      # Contact call-to-action
│   ├── CookieConsent.js   # GDPR cookie consent banner
│   └── SEOHead.js         # Structured data component
├── data/                  # Static data and configuration
│   ├── siteConfig.js      # Site configuration and hero slides
│   ├── courses.js         # Course catalog data
│   ├── testimonials.js    # Testimonial data
│   └── i18n/              # Internationalization
│       └── en.js          # English translations
├── lib/                   # Utilities and context
│   └── ThemeContext.js    # Theme context provider
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd abc-computronics

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site URL (required for sitemap and SEO)
NEXT_PUBLIC_SITE_URL=https://abccomputronics.com

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact form API endpoint (optional - for external service)
NEXT_PUBLIC_FORM_ENDPOINT=https://your-form-handler.com/submit
```

### Site Configuration

Edit `data/siteConfig.js` to update:
- Business name and contact information
- Social media links
- SEO metadata
- Hero carousel content
- Feature highlights

### Course Data

Edit `data/courses.js` to:
- Add, modify, or remove courses
- Update pricing and schedules
- Change instructor information
- Modify syllabus content

### Testimonials

Edit `data/testimonials.js` to update student testimonials.

## Customization

### Theme Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: #1a4d3e;      /* Main brand color */
  --secondary: #d4a853;     /* Accent color */
  /* ... other variables */
}
```

### Adding a New Language

1. Create a new file in `data/i18n/` (e.g., `ur.js` for Urdu)
2. Copy the structure from `en.js`
3. Translate all strings
4. Import and implement in components

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

### Netlify

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

**Note**: For Netlify, add a `netlify.toml` file:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Production Settings

For optimal performance:

1. **Image Optimization**: Configure allowed domains in `next.config.mjs`
2. **Caching**: Implement appropriate cache headers
3. **CDN**: Use a CDN for static assets
4. **Analytics**: Add Google Analytics or Plausible

## SEO Checklist

- [x] Unique title and meta description for each page
- [x] Open Graph and Twitter Card meta tags
- [x] Structured data (JSON-LD) for Organization and Courses
- [x] Dynamic sitemap.xml generation
- [x] robots.txt configuration
- [x] Canonical URLs
- [x] Semantic HTML with proper heading hierarchy
- [x] Image alt texts
- [x] Mobile-friendly responsive design

## Accessibility Checklist

- [x] Skip to main content link
- [x] ARIA labels on interactive elements
- [x] Keyboard navigation support
- [x] Focus indicators
- [x] Color contrast compliance
- [x] Screen reader friendly carousel
- [x] Form validation error messages

## Performance Checklist

- [x] Next.js Image optimization
- [x] Code splitting with dynamic imports
- [x] Lazy loading for below-fold content
- [x] Preconnect to external domains
- [x] Optimized bundle with tree shaking
- [x] CSS-in-JS with server rendering

## Recommended Images

For optimal visual appeal, use these Unsplash queries:

| Section | Query | Suggested Alt Text |
|---------|-------|-------------------|
| Hero 1 | "python programming laptop" | Person coding on laptop in modern workspace |
| Hero 2 | "students classroom collaboration" | Students collaborating in a classroom |
| Hero 3 | "sewing creative workshop" | Creative workshop with sewing machines |
| About | "computer classroom students" | Students learning in a computer lab |
| Python | "python code screen" | Python programming code on screen |
| Web Dev | "web development laptop" | Web development on laptop with code editor |
| Tailoring | "sewing machine fabric" | Sewing machine with fabric and measuring tape |
| Fashion | "fashion design sketches" | Fashion design sketches and fabric swatches |
| Mehndi | "mehndi henna hands" | Intricate mehndi design on hands |

## API Endpoints

### POST /api/enroll

Submit enrollment inquiry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "course": "python-programming",
  "startDate": "2026-01-15",
  "message": "Optional message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Enrollment inquiry received successfully",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "course": "python-programming"
  }
}
```

## Adding Analytics

### Google Analytics

1. Get your GA4 measurement ID
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add the script to `app/layout.js`:
   ```jsx
   import Script from 'next/script';

   // In the head section:
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
     `}
   </Script>
   ```

### Plausible Analytics

Add to `app/layout.js`:
```jsx
<Script
  defer
  data-domain="abccomputronics.com"
  src="https://plausible.io/js/script.js"
/>
```

## License

This project is private and proprietary.

## Support

For questions or issues, contact:
- Email: info@abccomputronics.com
- Phone: +91 9876543210
