import Image from 'next/image';
import { Card, Avatar } from 'antd';
import {
  TrophyOutlined,
  TeamOutlined,
  BookOutlined,
  CheckCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { StructuredData } from '@/components/SEOHead';

export const metadata = {
  title: 'About Us',
  description: 'Learn about ABC Computronics & Kashmir Skill Institute - our mission to empower Kashmir\'s youth with technical and creative skills. Meet our expert instructors and discover our teaching methodology.',
  openGraph: {
    title: 'About Us | ABC Computronics & Kashmir Skill Institute',
    description: 'Learn about our mission to empower Kashmir\'s youth with technical and creative skills. Meet our expert instructors.',
  },
};

const stats = [
  { icon: <TeamOutlined />, value: '500+', label: 'Students Trained' },
  { icon: <BookOutlined />, value: '7+', label: 'Expert Courses' },
  { icon: <TrophyOutlined />, value: '95%', label: 'Success Rate' },
  { icon: <CheckCircleOutlined />, value: '50+', label: 'Placements' },
];

const team = [
  {
    name: 'Imran Ahmed Khan',
    role: 'Senior Python Developer & Instructor',
    bio: 'Over 8 years of experience in Python development and training',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    name: 'Sara Qureshi',
    role: 'Full-Stack Developer & Web Instructor',
    bio: 'Built websites for 50+ businesses, specialist in modern frameworks',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    name: 'Shabnam Begum',
    role: 'Master Tailor & Fashion Instructor',
    bio: '20 years of experience in tailoring and garment design',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
  },
  {
    name: 'Aisha Mir',
    role: 'Fashion Designer & Creative Lead',
    bio: 'Award-winning designer with collections at fashion weeks',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
  },
];

export default function AboutPage() {
  return (
    <>
      <StructuredData type="organization" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-28 bg-[var(--primary)]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="section-badge bg-[var(--secondary)] text-[var(--primary-dark)]">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering Kashmir with Skills for Tomorrow
            </h1>
            <p className="text-xl text-gray-200">
              ABC Computronics & Kashmir Skill Institute has been at the forefront of skill development in Kashmir,
              training students in both technical and creative disciplines since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[var(--background)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                <div
                  className="text-3xl mb-2"
                  style={{ color: 'var(--primary)' }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-[var(--background)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="Students in a computer classroom learning programming"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: 'var(--foreground)' }}
              >
                Our Mission
              </h2>
              <p
                className="mb-4 leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                At ABC Computronics & Kashmir Skill Institute, we believe that every individual deserves access to quality education that can transform their lives. Our mission is to bridge the skill gap in Kashmir by providing industry-relevant training that prepares students for successful careers in technology and creative fields.
              </p>
              <p
                className="mb-4 leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                We understand the unique challenges faced by youth in our region, including limited access to quality technical education and career opportunities. That is why we have designed our courses to be comprehensive, practical, and affordable. Our tech courses focus primarily on Python programming, software development fundamentals, and web development - skills that are in high demand globally and can open doors to remote work opportunities.
              </p>
              <p
                className="leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                Alongside our technology offerings, we also provide creative skills training including cutting and tailoring, mehndi art, and fashion designing. These courses serve students who wish to explore traditional crafts or combine technical skills with creative pursuits, making them versatile professionals ready for diverse career paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section bg-[var(--accent)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: 'var(--foreground)' }}
              >
                Our Teaching Approach
              </h2>
              <p
                className="mb-4 leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                We believe in learning by doing. Every course at ABC Computronics is designed around practical, project-based learning that ensures students do not just memorize concepts but truly understand how to apply them in real-world scenarios. Our instructors are industry professionals who bring years of hands-on experience to the classroom.
              </p>
              <p
                className="mb-4 leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                Our class sizes are intentionally kept small to ensure personalized attention for each student. We understand that everyone learns at their own pace, and our instructors are committed to helping every student succeed, regardless of their starting point. Whether you are a complete beginner or looking to upgrade existing skills, our adaptive teaching methodology meets you where you are.
              </p>
              <p
                className="leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                Beyond technical skills, we emphasize the development of soft skills that employers value - communication, teamwork, problem-solving, and professional etiquette. Our holistic approach ensures that when students graduate from our programs, they are not just technically competent but also confident professionals ready to make an impact in their chosen fields.
              </p>
            </div>
            <div className="relative h-80 md:h-full min-h-[400px] rounded-2xl overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Instructor helping students in a collaborative learning environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Students Achieve Section */}
      <section className="section bg-[var(--background)]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              What Our Students Achieve
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: 'var(--text-muted)' }}
            >
              Our graduates go on to build successful careers and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--secondary)' }}
              >
                <BookOutlined className="text-2xl" />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--foreground)' }}
              >
                Tech Career Launch
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Many of our Python and web development graduates have secured positions at tech companies,
                both locally and remotely with firms across India and beyond. Some have become successful
                freelancers earning competitive rates on global platforms.
              </p>
            </Card>

            <Card
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--secondary)' }}
              >
                <TrophyOutlined className="text-2xl" />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--foreground)' }}
              >
                Entrepreneurship
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Several students have launched their own businesses after completing our courses - from
                tailoring boutiques and fashion design studios to web development agencies and freelance
                consulting practices.
              </p>
            </Card>

            <Card
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--secondary)' }}
              >
                <TeamOutlined className="text-2xl" />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--foreground)' }}
              >
                Creative Excellence
              </h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Our fashion designing and mehndi art students have gained recognition for their work,
                with some becoming sought-after professionals for weddings and special events throughout Kashmir.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-[var(--accent)]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              Meet Our Instructors
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: 'var(--text-muted)' }}
            >
              Learn from industry professionals who are passionate about teaching
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--card-border)',
                }}
              >
                <Avatar
                  src={member.image}
                  size={100}
                  icon={<UserOutlined />}
                  className="mx-auto mb-4"
                />
                <h3
                  className="text-lg font-semibold"
                  style={{ color: 'var(--foreground)' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm mb-2"
                  style={{ color: 'var(--primary)' }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
