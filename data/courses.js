// Helper function to generate dates with current year
const getCourseDates = (...dates) => {
  const currentYear = new Date().getFullYear();
  return dates.map((date) => `${date}, ${currentYear}`);
};

export const courses = [
  // Technology Courses (Primary)
  {
    id: "python-programming",
    slug: "python-programming",
    title: "Python Programming",
    shortDescription:
      "Master Python from basics to advanced concepts. Build real-world applications and start your programming journey.",
    fullDescription:
      "This comprehensive Python course takes you from complete beginner to confident programmer. You will learn Python fundamentals, data structures, object-oriented programming, file handling, and work with popular libraries like NumPy and Pandas. By the end, you will be ready to build your own applications and pursue advanced topics.",
    category: "technology",
    featured: true,
    duration: "3 Months",
    price: 8999,
    originalPrice: 12999,
    currency: "INR",
    level: "Beginner to Intermediate",
    language: "English & Urdu",
    certification: true,
    startDates: getCourseDates("January 15", "February 1", "March 1"),
    schedule: "Monday, Wednesday, Friday - 10:00 AM to 12:00 PM",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80",
    imageAlt: "Python programming code on screen",
    syllabus: [
      {
        week: "Week 1-2",
        title: "Python Fundamentals",
        topics: [
          "Introduction to Python",
          "Variables and Data Types",
          "Operators and Expressions",
          "Input/Output Operations",
          "Control Flow Statements",
        ],
      },
      {
        week: "Week 3-4",
        title: "Data Structures",
        topics: [
          "Lists and Tuples",
          "Dictionaries and Sets",
          "String Manipulation",
          "List Comprehensions",
          "Working with Collections",
        ],
      },
      {
        week: "Week 5-6",
        title: "Functions and Modules",
        topics: [
          "Defining Functions",
          "Parameters and Arguments",
          "Lambda Functions",
          "Modules and Packages",
          "Error Handling",
        ],
      },
      {
        week: "Week 7-8",
        title: "Object-Oriented Programming",
        topics: [
          "Classes and Objects",
          "Inheritance",
          "Polymorphism",
          "Encapsulation",
          "Special Methods",
        ],
      },
      {
        week: "Week 9-10",
        title: "File Handling & Libraries",
        topics: [
          "Reading and Writing Files",
          "CSV and JSON Processing",
          "Introduction to NumPy",
          "Pandas Basics",
          "Data Visualization",
        ],
      },
      {
        week: "Week 11-12",
        title: "Projects & Assessment",
        topics: [
          "Mini Project 1: Data Analysis Tool",
          "Mini Project 2: Automation Script",
          "Final Project",
          "Code Review",
          "Certification Exam",
        ],
      },
    ],
    outcomes: [
      "Write clean, efficient Python code",
      "Build command-line applications",
      "Work with data using Pandas and NumPy",
      "Understand object-oriented programming concepts",
      "Handle files and external data sources",
      "Debug and optimize Python programs",
    ],
    prerequisites: [
      "Basic computer literacy",
      "No prior programming experience required",
      "Dedication to practice coding regularly",
    ],
    instructor: {
      name: "Imran Ahmed Khan",
      title: "Senior Python Developer",
      bio: "Imran has over 8 years of experience in Python development and has trained 500+ students. He specializes in data science and automation.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    },
  },
  {
    id: "software-development",
    slug: "software-development-fundamentals",
    title: "Software Development Fundamentals",
    shortDescription:
      "Learn the core concepts of software development, including programming logic, algorithms, and best practices.",
    fullDescription:
      "This foundational course introduces you to the world of software development. Learn programming concepts that apply across all languages, understand how software is built from design to deployment, and gain hands-on experience with industry-standard tools and methodologies.",
    category: "technology",
    featured: true,
    duration: "4 Months",
    price: 11999,
    originalPrice: 15999,
    currency: "INR",
    level: "Beginner",
    language: "English & Urdu",
    certification: true,
    startDates: getCourseDates("January 20", "February 15"),
    schedule: "Tuesday, Thursday, Saturday - 2:00 PM to 4:00 PM",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    imageAlt: "Software developer working on multiple screens",
    syllabus: [
      {
        week: "Week 1-3",
        title: "Programming Fundamentals",
        topics: [
          "Introduction to Programming",
          "Problem-Solving Techniques",
          "Algorithms and Flowcharts",
          "Data Types and Variables",
          "Control Structures",
        ],
      },
      {
        week: "Week 4-6",
        title: "Data Structures & Algorithms",
        topics: [
          "Arrays and Strings",
          "Linked Lists",
          "Stacks and Queues",
          "Sorting Algorithms",
          "Searching Algorithms",
        ],
      },
      {
        week: "Week 7-9",
        title: "Software Design",
        topics: [
          "Software Development Life Cycle",
          "Requirements Analysis",
          "Design Patterns Introduction",
          "Version Control with Git",
          "Documentation",
        ],
      },
      {
        week: "Week 10-12",
        title: "Database Fundamentals",
        topics: [
          "Introduction to Databases",
          "SQL Basics",
          "Database Design",
          "CRUD Operations",
          "Data Normalization",
        ],
      },
      {
        week: "Week 13-16",
        title: "Project Development",
        topics: [
          "Project Planning",
          "Team Collaboration",
          "Testing Basics",
          "Deployment Introduction",
          "Final Project Presentation",
        ],
      },
    ],
    outcomes: [
      "Understand core programming concepts",
      "Design algorithms and solve problems systematically",
      "Use version control systems effectively",
      "Work with databases and SQL",
      "Follow software development best practices",
      "Collaborate in team environments",
    ],
    prerequisites: [
      "Basic computer skills",
      "Enthusiasm to learn programming",
      "Logical thinking ability",
    ],
    instructor: {
      name: "Zahid Malik",
      title: "Software Architect",
      bio: "Zahid brings 12 years of industry experience from leading tech companies. He is passionate about teaching clean code practices.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
  },
  {
    id: "web-development",
    slug: "web-development-basics",
    title: "Web Development Basics",
    shortDescription:
      "Build modern websites from scratch. Learn HTML, CSS, JavaScript, and responsive design principles.",
    fullDescription:
      "Start your web development journey with this hands-on course. Learn to create beautiful, responsive websites using HTML5, CSS3, and JavaScript. By the end, you will have a portfolio of projects and the skills to build professional websites for clients or employers.",
    category: "technology",
    featured: true,
    duration: "3 Months",
    price: 9999,
    originalPrice: 13999,
    currency: "INR",
    level: "Beginner",
    language: "English & Urdu",
    certification: true,
    startDates: getCourseDates("January 10", "February 5", "March 10"),
    schedule: "Monday, Wednesday, Friday - 4:00 PM to 6:00 PM",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    imageAlt: "Web development on laptop with code editor",
    syllabus: [
      {
        week: "Week 1-2",
        title: "HTML5 Fundamentals",
        topics: [
          "HTML Structure",
          "Semantic Elements",
          "Forms and Inputs",
          "Media Elements",
          "Accessibility Basics",
        ],
      },
      {
        week: "Week 3-4",
        title: "CSS3 Styling",
        topics: [
          "CSS Selectors",
          "Box Model",
          "Flexbox Layout",
          "CSS Grid",
          "Animations and Transitions",
        ],
      },
      {
        week: "Week 5-6",
        title: "Responsive Design",
        topics: [
          "Media Queries",
          "Mobile-First Approach",
          "Responsive Images",
          "CSS Frameworks Overview",
          "Tailwind CSS Basics",
        ],
      },
      {
        week: "Week 7-9",
        title: "JavaScript Essentials",
        topics: [
          "JavaScript Syntax",
          "DOM Manipulation",
          "Events and Handlers",
          "Form Validation",
          "Fetch API Basics",
        ],
      },
      {
        week: "Week 10-12",
        title: "Projects & Portfolio",
        topics: [
          "Personal Portfolio Website",
          "Business Landing Page",
          "Interactive Web Application",
          "Deployment to GitHub Pages",
          "Course Review and Certification",
        ],
      },
    ],
    outcomes: [
      "Create responsive websites from scratch",
      "Write clean HTML5 and CSS3 code",
      "Implement interactive features with JavaScript",
      "Build a professional portfolio",
      "Deploy websites to live servers",
      "Understand web accessibility standards",
    ],
    prerequisites: [
      "Basic computer literacy",
      "Interest in web design",
      "Access to a computer with internet",
    ],
    instructor: {
      name: "Sara Qureshi",
      title: "Full-Stack Developer",
      bio: "Sara has built websites for over 50 businesses and loves teaching web development. She specializes in modern frontend frameworks.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
  },
  {
    id: "soft-skills",
    slug: "soft-skills-tech-professionals",
    title: "Soft Skills for Tech Professionals",
    shortDescription:
      "Develop essential communication, teamwork, and professional skills to succeed in the tech industry.",
    fullDescription:
      "Technical skills alone are not enough to succeed in today's workplace. This course helps you develop the soft skills that employers value most: communication, teamwork, time management, and professional etiquette. Perfect for tech students and professionals looking to advance their careers.",
    category: "technology",
    featured: false,
    duration: "6 Weeks",
    price: 4999,
    originalPrice: 6999,
    currency: "INR",
    level: "All Levels",
    language: "English & Urdu",
    certification: true,
    startDates: getCourseDates("January 25", "March 1"),
    schedule: "Saturday - 10:00 AM to 1:00 PM",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    imageAlt: "Team collaboration in office setting",
    syllabus: [
      {
        week: "Week 1",
        title: "Professional Communication",
        topics: [
          "Email Etiquette",
          "Presentation Skills",
          "Active Listening",
          "Written Communication",
        ],
      },
      {
        week: "Week 2",
        title: "Teamwork and Collaboration",
        topics: [
          "Working in Teams",
          "Conflict Resolution",
          "Remote Collaboration Tools",
          "Giving and Receiving Feedback",
        ],
      },
      {
        week: "Week 3",
        title: "Time Management",
        topics: [
          "Prioritization Techniques",
          "Meeting Deadlines",
          "Work-Life Balance",
          "Productivity Tools",
        ],
      },
      {
        week: "Week 4",
        title: "Problem Solving",
        topics: [
          "Critical Thinking",
          "Creative Problem Solving",
          "Decision Making",
          "Analytical Skills",
        ],
      },
      {
        week: "Week 5",
        title: "Career Development",
        topics: [
          "Resume Building",
          "Interview Preparation",
          "LinkedIn Optimization",
          "Networking Skills",
        ],
      },
      {
        week: "Week 6",
        title: "Professional Growth",
        topics: [
          "Personal Branding",
          "Continuous Learning",
          "Leadership Basics",
          "Final Presentation",
        ],
      },
    ],
    outcomes: [
      "Communicate effectively in professional settings",
      "Collaborate productively in teams",
      "Manage time and priorities efficiently",
      "Present ideas confidently",
      "Build a strong professional network",
      "Prepare for job interviews",
    ],
    prerequisites: [
      "Currently enrolled in or completed a tech course",
      "Interest in professional development",
    ],
    instructor: {
      name: "Faisal Ahmad",
      title: "Career Coach & HR Consultant",
      bio: "Faisal has helped hundreds of professionals land their dream jobs. He has 10 years of experience in HR and talent development.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    },
  },
  // Creative Courses (Additional Offerings)
  {
    id: "cutting-tailoring",
    slug: "cutting-tailoring",
    title: "Cutting and Tailoring",
    shortDescription:
      "Learn professional cutting and tailoring techniques to create custom garments from scratch.",
    fullDescription:
      "Master the art of cutting and tailoring with our comprehensive course. From basic stitching to creating complete outfits, you will learn traditional and modern techniques used by professional tailors. Perfect for those who want to start their own tailoring business or enhance their skills.",
    category: "creative",
    featured: false,
    duration: "4 Months",
    price: 7999,
    originalPrice: 9999,
    currency: "INR",
    level: "Beginner to Intermediate",
    language: "Urdu & Kashmiri",
    certification: true,
    startDates: getCourseDates("January 15", "March 1"),
    schedule: "Tuesday, Thursday - 10:00 AM to 12:30 PM",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageAlt: "Sewing machine with fabric and measuring tape",
    syllabus: [
      {
        week: "Week 1-4",
        title: "Foundation Skills",
        topics: [
          "Sewing Machine Operation",
          "Basic Hand Stitches",
          "Fabric Types and Selection",
          "Measuring Techniques",
          "Pattern Reading",
        ],
      },
      {
        week: "Week 5-8",
        title: "Pattern Making",
        topics: [
          "Basic Pattern Drafting",
          "Taking Body Measurements",
          "Pattern Adjustments",
          "Cutting Techniques",
          "Seam Allowances",
        ],
      },
      {
        week: "Week 9-12",
        title: "Garment Construction",
        topics: [
          "Blouse/Kameez Construction",
          "Trouser/Salwar Making",
          "Finishing Techniques",
          "Buttonholes and Zippers",
          "Hemming Methods",
        ],
      },
      {
        week: "Week 13-16",
        title: "Advanced Projects",
        topics: [
          "Complete Suit Making",
          "Traditional Kashmiri Designs",
          "Alterations and Repairs",
          "Business Basics",
          "Final Project",
        ],
      },
    ],
    outcomes: [
      "Operate sewing machines confidently",
      "Create patterns for various garments",
      "Construct complete outfits from scratch",
      "Perform professional alterations",
      "Start your own tailoring business",
    ],
    prerequisites: [
      "No prior experience required",
      "Interest in fashion and garment making",
    ],
    instructor: {
      name: "Shabnam Begum",
      title: "Master Tailor",
      bio: "Shabnam has over 20 years of experience in tailoring and has trained many successful tailors who now run their own businesses.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    },
  },
  {
    id: "mehndi-art",
    slug: "mehndi-art",
    title: "Mehndi Art",
    shortDescription:
      "Master traditional and modern mehndi designs. Learn techniques for bridal, party, and casual occasions.",
    fullDescription:
      "Discover the beautiful art of mehndi with our specialized course. Learn traditional Indian, Arabic, and fusion designs that are in high demand for weddings and celebrations. This course covers everything from basic patterns to intricate bridal mehndi, giving you skills to become a professional mehndi artist.",
    category: "creative",
    featured: false,
    duration: "2 Months",
    price: 5999,
    originalPrice: 7999,
    currency: "INR",
    level: "Beginner to Advanced",
    language: "Urdu & Kashmiri",
    certification: true,
    startDates: getCourseDates("January 20", "February 15"),
    schedule: "Saturday, Sunday - 11:00 AM to 1:00 PM",
    image: "/hina.jpg",
    imageAlt: "Intricate mehndi design on hands",
    syllabus: [
      {
        week: "Week 1-2",
        title: "Mehndi Basics",
        topics: [
          "Introduction to Mehndi",
          "Cone Preparation",
          "Basic Strokes and Patterns",
          "Lines and Curves",
          "Dot Work",
        ],
      },
      {
        week: "Week 3-4",
        title: "Traditional Designs",
        topics: [
          "Indian Traditional Patterns",
          "Arabic Mehndi Styles",
          "Kashmiri Designs",
          "Floral Patterns",
          "Paisley Motifs",
        ],
      },
      {
        week: "Week 5-6",
        title: "Modern Styles",
        topics: [
          "Contemporary Designs",
          "Fusion Patterns",
          "Minimalist Mehndi",
          "Glitter and Stone Work",
          "White Henna Techniques",
        ],
      },
      {
        week: "Week 7-8",
        title: "Bridal & Professional Work",
        topics: [
          "Bridal Mehndi Designs",
          "Full Hand Coverage",
          "Feet Designs",
          "Client Handling",
          "Pricing and Business Setup",
        ],
      },
    ],
    outcomes: [
      "Create traditional and modern mehndi designs",
      "Apply bridal mehndi professionally",
      "Mix and match design elements creatively",
      "Handle clients and manage bookings",
      "Start your own mehndi art business",
    ],
    prerequisites: [
      "No prior experience required",
      "Patience and steady hands",
      "Interest in art and design",
    ],
    instructor: {
      name: "Rukhsana Akhtar",
      title: "Professional Mehndi Artist",
      bio: "Rukhsana is a renowned mehndi artist with 15 years of experience. She has applied mehndi for over 1000 brides across Kashmir.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    },
  },
  {
    id: "fashion-designing",
    slug: "fashion-designing",
    title: "Fashion Designing",
    shortDescription:
      "Explore the world of fashion design. Learn sketching, color theory, fabric selection, and garment creation.",
    fullDescription:
      "Turn your passion for fashion into a career with our comprehensive fashion designing course. Learn everything from fashion illustration and design principles to fabric selection and garment construction. Create your own collection and build a portfolio that showcases your unique style.",
    category: "creative",
    featured: false,
    duration: "6 Months",
    price: 14999,
    originalPrice: 19999,
    currency: "INR",
    level: "Beginner to Intermediate",
    language: "English & Urdu",
    certification: true,
    startDates: getCourseDates("January 10", "April 1"),
    schedule: "Monday, Wednesday, Friday - 11:00 AM to 1:00 PM",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    imageAlt: "Fashion design sketches and fabric swatches",
    syllabus: [
      {
        week: "Week 1-4",
        title: "Design Fundamentals",
        topics: [
          "Introduction to Fashion",
          "Elements of Design",
          "Color Theory",
          "Fashion History",
          "Current Trends Analysis",
        ],
      },
      {
        week: "Week 5-8",
        title: "Fashion Illustration",
        topics: [
          "Figure Drawing",
          "Fashion Croquis",
          "Rendering Techniques",
          "Digital Fashion Illustration",
          "Portfolio Development",
        ],
      },
      {
        week: "Week 9-12",
        title: "Fabric and Textiles",
        topics: [
          "Fabric Types and Properties",
          "Textile Design Basics",
          "Fabric Selection for Designs",
          "Draping Techniques",
          "Embellishment Methods",
        ],
      },
      {
        week: "Week 13-16",
        title: "Pattern and Construction",
        topics: [
          "Pattern Making",
          "Garment Construction",
          "Fitting and Alterations",
          "Quality Control",
          "Production Planning",
        ],
      },
      {
        week: "Week 17-20",
        title: "Collection Development",
        topics: [
          "Collection Planning",
          "Theme and Mood Board",
          "Design Development",
          "Sample Creation",
          "Fashion Show Preparation",
        ],
      },
      {
        week: "Week 21-24",
        title: "Industry and Business",
        topics: [
          "Fashion Industry Overview",
          "Starting a Fashion Brand",
          "Marketing and Social Media",
          "Final Collection Showcase",
          "Career Guidance",
        ],
      },
    ],
    outcomes: [
      "Create professional fashion illustrations",
      "Understand color theory and design principles",
      "Select appropriate fabrics for designs",
      "Construct garments from your designs",
      "Develop a complete fashion collection",
      "Build a professional portfolio",
    ],
    prerequisites: [
      "Interest in fashion and design",
      "Basic drawing skills helpful but not required",
      "Creative mindset",
    ],
    instructor: {
      name: "Aisha Mir",
      title: "Fashion Designer",
      bio: "Aisha is an award-winning fashion designer with collections showcased at fashion weeks. She runs her own label and loves mentoring new designers.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
    },
  },
];

export const courseCategories = [
  { id: "all", name: "All Courses", icon: "appstore" },
  { id: "technology", name: "Technology", icon: "code" },
  { id: "creative", name: "Creative Skills", icon: "highlight" },
];

export const getCourseById = (id) => courses.find((course) => course.id === id);
export const getCourseBySlug = (slug) =>
  courses.find((course) => course.slug === slug);
export const getFeaturedCourses = () =>
  courses.filter((course) => course.featured);
export const getCoursesByCategory = (category) =>
  category === "all"
    ? courses
    : courses.filter((course) => course.category === category);

export default courses;
