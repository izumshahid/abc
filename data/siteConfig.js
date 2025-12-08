export const siteConfig = {
  name: "ABC Computronics & Kashmir Skill Institute",
  shortName: "ABC Computronics",
  tagline: `Welcome ${new Date().getFullYear()} with New Skills!`,
  description:
    "Leading training institute offering computer courses, software development, and creative skills. Learn Python, web development, and more from industry experts.",
  url: "https://abccomputronics.com",
  logo: "/logo.png",
  contact: {
    phone: "+91 9876543210",
    email: "info@abccomputronics.com",
    address: "Main Market Road, Srinagar, Kashmir, India - 190001",
    workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  social: {
    facebook: "https://facebook.com/abccomputronics",
    instagram: "https://instagram.com/abccomputronics",
    twitter: "https://twitter.com/abccomputronics",
    linkedin: "https://linkedin.com/company/abccomputronics",
    youtube: "https://youtube.com/@abccomputronics",
    whatsapp: "https://wa.me/919876543210",
  },
  seo: {
    home: {
      title:
        "ABC Computronics & Kashmir Skill Institute | Computer Courses & Creative Skills Training",
      description: `Join Kashmir's premier training institute for Python programming, software development, web development, and creative skills like fashion designing and mehndi art. Admissions open for ${new Date().getFullYear()}!`,
      keywords:
        "computer courses kashmir, python training, software development course, web development, creative skills, fashion designing, mehndi art, skill training srinagar",
    },
    about: {
      title: "About Us | ABC Computronics & Kashmir Skill Institute",
      description:
        "Learn about our mission to empower Kashmir's youth with technical and creative skills. Meet our expert instructors and discover our teaching methodology.",
      keywords:
        "about abc computronics, kashmir skill institute, tech training kashmir, computer education",
    },
    courses: {
      title:
        "Our Courses | ABC Computronics - Python, Web Development & Creative Skills",
      description:
        "Explore our comprehensive course catalog: Python programming, software development, web development basics, soft skills, and creative courses like tailoring and fashion design.",
      keywords:
        "python course, web development course, software training, fashion designing course, mehndi art classes, skill courses kashmir",
    },
    contact: {
      title: "Contact Us | ABC Computronics & Kashmir Skill Institute",
      description:
        "Get in touch with ABC Computronics for course inquiries, enrollment information, and partnership opportunities. Visit our Srinagar campus today!",
      keywords:
        "contact abc computronics, skill training inquiry, course enrollment kashmir",
    },
  },
  features: [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of hands-on experience",
      icon: "team",
    },
    {
      title: "Practical Training",
      description:
        "Gain real-world skills through project-based learning and workshops",
      icon: "tool",
    },
    {
      title: "Job Placement Support",
      description:
        "Get career guidance and job placement assistance after course completion",
      icon: "solution",
    },
    {
      title: "Flexible Schedules",
      description:
        "Choose from morning, evening, or weekend batches to fit your routine",
      icon: "schedule",
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "Choose Your Course",
      description:
        "Browse our courses and select the one that matches your career goals",
    },
    {
      step: 2,
      title: "Enroll Online",
      description:
        "Fill out the enrollment form and complete the registration process",
    },
    {
      step: 3,
      title: "Start Learning",
      description:
        "Attend classes, work on projects, and build your skills with our expert guidance",
    },
    {
      step: 4,
      title: "Get Certified",
      description:
        "Complete your course, receive certification, and launch your career",
    },
  ],
};

export const heroSlides = [
  {
    id: 1,
    title: `Welcome ${new Date().getFullYear()} with New Skills!`,
    subtitle:
      "Transform your future with ABC Computronics & Kashmir Skill Institute",
    description:
      "Learn Python, Web Development, and Software Skills from industry experts. Start your journey to a successful tech career today.",
    cta: "Explore Courses",
    ctaLink: "#courses",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80",
    imageAlt: "Person coding on laptop in modern workspace",
  },
  {
    id: 2,
    title: "New Year Special Offers!",
    subtitle: "Skill + Tech COMBO Offer",
    description:
      "Enroll in any tech course and get 50% off on creative skills training. Limited time offer for new admissions.",
    cta: "Claim Offer",
    ctaLink: "#contact",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80",
    imageAlt: "Students collaborating in a classroom setting",
  },
  {
    id: 3,
    title: "Learn Creative Skills",
    subtitle: "Fashion Designing, Mehndi Art & More",
    description:
      "Explore your creative side with our specialized courses in cutting, tailoring, fashion designing, and traditional mehndi art.",
    cta: "View Creative Courses",
    ctaLink: "#courses",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    imageAlt: "Creative workshop with sewing machines and fabric",
  },
];

export default siteConfig;
