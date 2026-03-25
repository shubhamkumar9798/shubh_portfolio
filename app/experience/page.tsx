'use client'

import { useState } from 'react'

const education = [
  {
    id: 'EDU-01',
    institution: 'SSN College of Engineering',
    degree: 'B.E. Computer Science Engineering',
    period: '2023 — 2027',
    score: 'CGPA: 7.67 / 10',
    location: 'Chennai, India',
    subjects: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management', 'Web Development', 'Software Engineering', 'Computer Networks'],
  },
  {
    id: 'EDU-02',
    institution: 'SHMS Inter Mahavidyalaya',
    degree: '+2 (PCM)',
    period: '2020 — 2022',
    score: '90%',
    location: 'Dhanbad, India',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    id: 'EDU-03',
    institution: 'SGD Modern School',
    degree: 'Matriculation (Class X)',
    period: 'Until 2020',
    score: '89.4%',
    location: 'India',
    subjects: ['Science', 'Mathematics', 'English', 'Social Studies'],
  },
]

const experience = [
  {
    id: 'JOB-01',
    role: 'Vice President',
    company: 'Build Club — SSN IITMRP',
    period: '2023 — PRESENT',
    type: 'LEADERSHIP',
    responsibilities: [
      'Led and collaborated with cross-functional teams on club initiatives',
      'Mentored 50+ junior students in software development',
      'Organized Innovation Day with 100+ industry experts',
      'Conducted workshops on React.js, REST APIs, and Agile teamwork',
      'Managed real-world, scalable software projects with junior teams',
    ],
  },
  {
    id: 'JOB-02',
    role: 'Hackathon Finalist & Award Winner',
    company: 'Smart India Hackathon 2024',
    period: '2024',
    type: 'ACHIEVEMENT',
    responsibilities: [
      'National finalist among 6000+ competing teams',
      'Developed full-stack platform under strict 36-hour deadline',
      'Collaborated with team on architecture, frontend, and deployment',
      'Delivered production-ready code with documentation',
    ],
  },
  {
    id: 'JOB-03',
    role: 'Best Track Prize Winner',
    company: 'Khacks 2.0 — Kurukshetra University',
    period: '2024',
    type: 'ACHIEVEMENT',
    responsibilities: [
      'Won Best Track Prize among 150+ competing teams',
      'Built vocational training platform with ML integration',
      'Led frontend architecture and UI/UX decisions',
      'Integrated recommendation engine for adaptive learning',
    ],
  },
]

export default function ExperiencePage() {
  const [activeEdu, setActiveEdu] = useState('EDU-01')
  const activeEduData = education.find(e => e.id === activeEdu)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', paddingTop: '7rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', opacity: 0.03, fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'var(--white)', pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
        EXP
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '5rem', borderBottom: '1px solid rgba(245,240,232,0.08)', paddingBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginTop: '1.4rem' }}>05.</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 12vw, 10rem)', color: 'var(--white)', lineHeight: 0.9, margin: 0 }}>
            .EDUCATION<br />
            <span style={{ WebkitTextStroke: '2px rgba(245,240,232,0.3)', color: 'transparent' }}>&amp; ROLES</span>
          </h1>
        </div>

        {/* Education section */}
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '2.5rem' }}>
            // EDUCATION
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(245,240,232,0.05)', marginBottom: '2rem' }}>
            {education.map((edu) => (
              <button
                key={edu.id}
                onClick={() => setActiveEdu(edu.id)}
                style={{
                  background: activeEdu === edu.id ? 'rgba(230,51,41,0.1)' : 'var(--black)',
                  border: 'none',
                  padding: '1.5rem',
                  textAlign: 'left',
                  cursor: 'none',
                  borderTop: activeEdu === edu.id ? '2px solid var(--red)' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: activeEdu === edu.id ? 'var(--red)' : 'rgba(245,240,232,0.3)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{edu.id}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9rem', color: 'var(--white)', marginBottom: '0.3rem' }}>{edu.institution}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: activeEdu === edu.id ? 'var(--red)' : 'rgba(245,240,232,0.4)' }}>{edu.score}</div>
              </button>
            ))}
          </div>

          {activeEduData && (
            <div style={{ padding: '2.5rem', border: '1px solid rgba(230,51,41,0.2)', background: 'rgba(230,51,41,0.03)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>INSTITUTION</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--white)', lineHeight: 1.1 }}>{activeEduData.institution}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>DEGREE</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(245,240,232,0.8)' }}>{activeEduData.degree}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>PERIOD</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(245,240,232,0.8)' }}>{activeEduData.period}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>SCORE</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--red)' }}>{activeEduData.score}</div>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(245,240,232,0.4)', letterSpacing: '0.12em', marginBottom: '0.8rem' }}>KEY SUBJECTS</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {activeEduData.subjects.map(s => (
                    <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', padding: '0.3rem 0.7rem', border: '1px solid rgba(245,240,232,0.15)', color: 'rgba(245,240,232,0.6)' }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Experience / Roles */}
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '2.5rem' }}>
            // EXPERIENCE & ACHIEVEMENTS
          </div>

          <div style={{ display: 'grid', gap: '1px', background: 'rgba(245,240,232,0.05)' }}>
            {experience.map((exp, i) => (
              <div key={exp.id} style={{
                background: 'var(--black)',
                padding: '2.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.5rem',
                transition: 'background 0.2s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(230,51,41,0.04)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--black)')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'rgba(245,240,232,0.3)', letterSpacing: '0.1em' }}>{exp.id}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', background: i === 0 ? 'var(--red)' : 'rgba(245,240,232,0.08)', color: 'var(--white)', padding: '0.2rem 0.6rem', letterSpacing: '0.08em' }}>{exp.type}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--white)', lineHeight: 1.1, letterSpacing: '0.02em' }}>
                      {exp.role}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--red)', marginTop: '0.3rem' }}>{exp.company}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 3vw, 2rem)', color: 'rgba(245,240,232,0.15)', textAlign: 'right' }}>
                    {exp.period}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem' }}>
                  {exp.responsibilities.map((r, j) => (
                    <div key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--red)', flexShrink: 0, marginTop: '0.1rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>→</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.6 }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
