'use client'

import { useEffect, useRef, useState } from 'react'

const techSkills = [
  { name: 'React.js / Next.js', level: 88, category: 'FRONTEND' },
  { name: 'JavaScript / TypeScript', level: 85, category: 'FRONTEND' },
  { name: 'HTML / CSS', level: 90, category: 'FRONTEND' },
  { name: 'Node.js / REST APIs', level: 78, category: 'BACKEND' },
  { name: 'Java', level: 80, category: 'LANGUAGES' },
  { name: 'Python', level: 75, category: 'LANGUAGES' },
  { name: 'C', level: 70, category: 'LANGUAGES' },
  { name: 'SQL / Databases', level: 72, category: 'DATABASE' },
  { name: 'Git / GitHub', level: 85, category: 'TOOLS' },
  { name: 'Data Structures & Algorithms', level: 78, category: 'CS CORE' },
]

const toolStack = [
  { name: 'Next.js', icon: '▲' },
  { name: 'React', icon: '⚛' },
  { name: 'Node.js', icon: '⬡' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'SQL', icon: '🗃' },
  { name: 'Git', icon: '⎇' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Linux', icon: '🐧' },
  { name: 'REST APIs', icon: '⚡' },
]

function SkillBar({ name, level, category, delay }: { name: string; level: number; category: string; delay: number }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setAnimated(true), delay)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.6rem' }}>
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.12em', marginRight: '0.75rem' }}>
            {category}
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--white)' }}>
            {name}
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: animated ? 'var(--red)' : 'rgba(230,51,41,0.2)', transition: 'color 0.5s ease' }}>
          {level}%
        </span>
      </div>
      <div style={{ height: '2px', background: 'rgba(245,240,232,0.08)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0,
          height: '100%',
          width: animated ? `${level}%` : '0%',
          background: `linear-gradient(90deg, var(--red), ${level > 80 ? 'var(--white)' : 'rgba(230,51,41,0.6)'})`,
          transition: `width 1s ease ${delay}ms`,
        }} />
      </div>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', paddingTop: '7rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>

      {/* BG text */}
      <div style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', opacity: 0.03, fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'var(--white)', pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
        SKILLS
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '5rem', borderBottom: '1px solid rgba(245,240,232,0.08)', paddingBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginTop: '1.4rem' }}>03.</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 12vw, 10rem)', color: 'var(--white)', lineHeight: 0.9, margin: 0 }}>
            .TECH<br />
            <span style={{ WebkitTextStroke: '2px rgba(245,240,232,0.3)', color: 'transparent' }}>STACK</span>
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '5rem' }}>

          {/* Skill bars */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '2.5rem' }}>
              // TECHNICAL PROFICIENCY
            </div>
            {techSkills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 80} />
            ))}
          </div>

          {/* Tool grid */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '2.5rem' }}>
              // TOOLS & TECHNOLOGIES
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(245,240,232,0.05)' }}>
              {toolStack.map((tool, i) => (
                <div key={i}
                  style={{
                    background: 'var(--black)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'none',
                    transition: 'background 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(230,51,41,0.1)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--black)')}
                >
                  <span style={{ fontSize: '1.5rem' }}>{tool.icon}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(245,240,232,0.6)', letterSpacing: '0.08em', textAlign: 'center' }}>{tool.name}</span>
                </div>
              ))}
            </div>

            {/* Concepts */}
            <div style={{ marginTop: '3rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                // CORE CS CONCEPTS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Data Structures', 'Algorithms', 'OOP', 'Design Patterns', 'Software Engineering', 'Agile / Scrum', 'Code Reviews', 'Debugging', 'REST Architecture', 'CI Fundamentals', 'QA & Testing', 'Documentation'].map((concept) => (
                  <span key={concept} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.08em',
                    padding: '0.4rem 0.8rem',
                    border: '1px solid rgba(245,240,232,0.15)',
                    color: 'rgba(245,240,232,0.6)',
                    transition: 'all 0.2s ease',
                    cursor: 'none',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--red)'; (e.currentTarget as HTMLElement).style.color = 'var(--red)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,240,232,0.15)'; (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.6)' }}
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Certification */}
            <div style={{ marginTop: '3rem', padding: '1.5rem', border: '1px solid rgba(230,51,41,0.3)', background: 'rgba(230,51,41,0.05)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>CERTIFICATION</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--white)' }}>Cyber Security and Privacy</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(245,240,232,0.4)' }}>NPTEL — National Programme on Technology Enhanced Learning</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
