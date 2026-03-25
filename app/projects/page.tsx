'use client'

import { useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    id: 'WK-001',
    title: 'EduQuest',
    subtitle: 'Interactive Learning Platform with Gamification',
    type: 'SELF-INITIATED',
    year: '2024',
    stack: ['Next.js', 'React', 'TypeScript', 'PHP'],
    description:
      'A scalable web application built with Next.js featuring gamified learning mechanics — leaderboards, XP systems, and challenges to drive user engagement. Focused on clean, reusable architecture and performance optimization.',
    highlights: [
      'Gamification: leaderboards, XP systems, challenges',
      'Clean, maintainable & reusable component architecture',
      'Performance optimization & debugging',
      'Scalable Next.js full-stack implementation',
    ],
    color: 'var(--red)',
    link: '#',
  },
  {
    id: 'WK-002',
    title: 'SAKSHAM',
    subtitle: 'Interactive Code Learning Platform',
    type: 'K! HACKS 2.0 — BEST TRACK PRIZE',
    year: '2024',
    stack: ['Next.js', 'Monaco Editor', 'REST APIs', 'TypeScript'],
    description:
      'National-finalist project at K! hacks 2.0 Kurukshetra. A responsive full-stack code learning platform integrating Monaco Editor with real-time code execution, error handling, debugging support, and Agile-driven development.',
    highlights: [
      'Integrated Monaco Editor with real-time execution',
      'Error handling & debugging toolchain',
      'Agile sprint-based development under tight deadlines',
      'Full-stack Next.js with API integration',
    ],
    color: 'var(--white)',
    link: '#',
  },
  {
    id: 'WK-003',
    title: 'VocabPro',
    subtitle: 'Vocational Training Platform',
    type: 'SIH 2024 — NATIONAL FINALIST',
    year: '2024',
    stack: ['Next.js', 'ML Integration', 'REST APIs', 'Python'],
    description:
      'Award-winning platform at Smart India Hackathon 2024 for adaptive vocational training. Integrated an ML-based recommendation module for personalized learning paths, with a modular Next.js UI focused on usability and performance.',
    highlights: [
      'ML-based recommendation for adaptive learning',
      'Modular, maintainable Next.js UI',
      'Contributed to testing, bug fixing & documentation',
      'Best Track Prize — 150+ teams competing',
    ],
    color: 'var(--red)',
    link: '#',
  },
  {
    id: 'WK-004',
    title: 'Sleep StressFree',
    subtitle: 'AI-Driven Health Monitoring Application',
    type: 'INTERNALLY FUNDED — SSN',
    year: '2024',
    stack: ['Next.js', 'REST APIs', 'SQL', 'Google OAuth 2.0'],
    description:
      'A full-stack health monitoring web app powered by AI for stress detection. Built with secure Google OAuth 2.0 authentication, SQL-based relational data handling, comprehensive unit tests, and production-grade QA practices.',
    highlights: [
      'Google OAuth 2.0 secure authentication',
      'Unit tests, QA checks & bug fixes',
      'SQL-based relational data handling',
      'Full REST API integration with Next.js',
    ],
    color: 'var(--white)',
    link: '#',
  },
  {
  id: 'WK-005',
  title: 'Academic Research Insight & Originality Platform',
  subtitle: 'AI-Powered Research Workspace & Publishing System',
  type: 'HACKATHON PROJECT — KI Hacks 3.0',
  year: '2024',
  stack: [
    'Next.js',
    'FastAPI',
    'LLMs',
    'BERT',
    'OCR',
    'OpenAlex API',
    'LaTeX Editor',
    'HTML',
    'CSS',
    'JavaScript'
  ],
  description:
    'An AI-powered research platform that enables students and researchers to write, verify, and publish original papers with confidence. The system integrates plagiarism detection, AI-content analysis, research trend insights, and LaTeX-based editing into a single seamless workspace.',
  highlights: [
    'Integrated LaTeX editor for full research paper writing and editing',
    'AI-powered research topic assistant using LLMs',
    'BERT-based AI vs Human content detection (trained on 45k+ papers)',
    'Plagiarism detection with similarity and source matching',
    'OCR-based document processing and analysis',
    'OpenAlex-powered year-wise research trend visualization',
    'Automated contribution statement generator for journals',
    'End-to-end research publishing workflow in one platform',
  ],
  color: 'var(--white)',
  link: '#',
},
{
  id: 'WK-006',
  title: 'HireSphere',
  subtitle: 'Smart Talent Acquisition System for Campus Recruitment',
  type: 'HACKATHON PROJECT',
  year: '2024',
  stack: [
    'Next.js',
    'Node.js',
    'MongoDB',
    'Python',
    'LLMs',
    'AI/ML',
    'Tailwind CSS',
    'REST APIs',
    'GitHub Pages',
    'Vercel'
  ],
  description:
    'An AI-driven campus recruitment platform designed to streamline hiring by intelligently matching students with job opportunities based on skills, interests, and career trajectories. It integrates ATS scoring, skill gap analysis, and real-time analytics to create a seamless end-to-end hiring ecosystem for students, recruiters, and colleges.',
  highlights: [
    'AI/ML-based role matching using student skills and interests',
    'Career trajectory simulator predicting 2–5 year growth paths',
    'ATS scorer for intelligent candidate shortlisting',
    'Skill gap analysis with personalized upskilling roadmap',
    'Smart filters for quick shortlisting (GPA, skills, projects)',
    'Unified platform connecting students, recruiters, and colleges',
    'Real-time recruiter–student communication system',
    'Bias-free hiring with fairness index and anonymized screening',
    'End-to-end hiring workflow (assessment → shortlist → offer)',
    'Data-driven insights and analytics for recruiters and institutions',
  ],
  color: 'var(--white)',
  link: '#',
},
{
  id: 'WK-007',
  title: 'Iveraa Salon',
  subtitle: 'Full Stack Salon Website with Owner Dashboard',
  type: 'FULL STACK PROJECT',
  year: '2024',
  stack: [
    'Next.js 14 (App Router)',
    'Supabase',
    'PostgreSQL',
    'Tailwind CSS',
    'TypeScript',
    'Vercel',
    'Google Fonts'
  ],
  description:
    'A modern, mobile-first salon website built with Next.js and Supabase, featuring a fully functional owner dashboard for managing services, reviews, content, and customer interactions. The platform includes secure authentication, real-time updates, and a seamless user experience optimized for both customers and business owners.',
  highlights: [
    'Full-stack Next.js app with integrated APIs and server components',
    'Supabase backend with PostgreSQL, authentication, and storage',
    'Secure owner-only dashboard with protected routes and RLS policies',
    'Dynamic content management for services, reviews, FAQs, and homepage',
    'Image upload and storage using Supabase Storage',
    'Mobile-first responsive design with Tailwind CSS',
    'Real-time updates without manual deployment',
    'Customizable UI with Google Fonts and theme configuration',
    'Deployed on Vercel with environment-based configuration',
    'Production-ready architecture with scalable backend services',
  ],
  color: 'var(--white)',
  link: 'https://github.com/shubhamkumar9798/iveraa_salon',
},
]

export default function ProjectsPage() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', paddingTop: '7rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', top: '10%', right: '-5rem', opacity: 0.03, fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'var(--white)', pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
        WORKS
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '5rem', borderBottom: '1px solid rgba(245,240,232,0.08)', paddingBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginTop: '1.4rem' }}>04.</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 12vw, 10rem)', color: 'var(--white)', lineHeight: 0.9, margin: 0 }}>
            .SELECTED<br />
            <span style={{ WebkitTextStroke: '2px rgba(245,240,232,0.3)', color: 'transparent' }}>WORKS</span>
          </h1>
        </div>

        {/* Projects grid */}
        <div style={{ display: 'grid', gap: '1px', background: 'rgba(245,240,232,0.05)' }}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === project.id ? 'rgba(230,51,41,0.06)' : 'var(--black)',
                padding: '3rem',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '2rem',
                alignItems: 'start',
                cursor: 'none',
                transition: 'background 0.3s ease',
                borderLeft: hovered === project.id ? '3px solid var(--red)' : '3px solid transparent',
              }}
            >
              <div>
                {/* Project meta */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(245,240,232,0.3)', letterSpacing: '0.1em' }}>
                    {project.id}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em',
                    padding: '0.25rem 0.7rem',
                    background: i % 2 === 0 ? 'var(--red)' : 'rgba(245,240,232,0.08)',
                    color: 'var(--white)',
                  }}>
                    {project.type}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(245,240,232,0.3)' }}>
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--white)', lineHeight: 1, margin: '0 0 0.3rem 0', letterSpacing: '0.01em' }}>
                  {project.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--red)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.7, maxWidth: '600px', marginBottom: '2rem' }}>
                  {project.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', marginBottom: '2rem' }}>
                  {project.highlights.map((h, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <span style={{ color: 'var(--red)', marginTop: '0.1rem', flexShrink: 0 }}>→</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(245,240,232,0.5)', lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stack tags */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.stack.map((tech) => (
                    <span key={tech} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em',
                      padding: '0.3rem 0.7rem', border: '1px solid rgba(230,51,41,0.3)',
                      color: 'var(--red)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right side: number */}
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(4rem, 8vw, 8rem)',
                  color: hovered === project.id ? 'var(--red)' : 'rgba(245,240,232,0.05)',
                  lineHeight: 1,
                  transition: 'color 0.3s ease',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ marginTop: '5rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(245,240,232,0.4)', letterSpacing: '0.1em', marginBottom: '2rem' }}>
            MORE PROJECTS AVAILABLE ON GITHUB
          </p>
          <a
            href="https://github.com/shubhamkumar9798"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button style={{
              background: 'transparent', border: '1px solid rgba(245,240,232,0.2)',
              padding: '1.2rem 3rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
              letterSpacing: '0.15em', color: 'var(--white)', cursor: 'none',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { (e.currentTarget).style.borderColor = 'var(--red)'; (e.currentTarget).style.background = 'rgba(230,51,41,0.1)' }}
              onMouseLeave={e => { (e.currentTarget).style.borderColor = 'rgba(245,240,232,0.2)'; (e.currentTarget).style.background = 'transparent' }}
            >
              VIEW ALL ON GITHUB ↗
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
