'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', paddingTop: '7rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>

      {/* Background text */}
      <div style={{ position: 'absolute', top: '10%', right: '-5rem', opacity: 0.03, fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'var(--white)', pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
        ABOUT
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Page Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '5rem', borderBottom: '1px solid rgba(245,240,232,0.08)', paddingBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginTop: '1.4rem' }}>02.</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 12vw, 10rem)', color: 'var(--white)', lineHeight: 0.9, margin: 0 }}>
            .ABOUT<br />
            <span style={{ WebkitTextStroke: '2px rgba(245,240,232,0.3)', color: 'transparent' }}>ME</span>
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>

          {/* Main intro block */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>

            {/* Large quote */}
            <div style={{
              borderLeft: '3px solid var(--red)',
              paddingLeft: '2rem',
              position: 'relative',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: 'var(--white)',
                lineHeight: 1.2,
                letterSpacing: '0.02em',
              }}>
                I BUILD THINGS THAT LIVE ON THE WEB — FAST, SCALABLE, AND BUILT TO LAST.
              </p>
            </div>

            {/* Bio paragraphs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '1rem' }}>// WHO AM I</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.8 }}>
                  Computer Science Engineering student at SSN College of Engineering, Chennai. Hands-on experience spanning software design, development, testing, and deployment — from idea to production.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '1rem' }}>// WHAT I DO</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.8 }}>
                  I specialize in full-stack web development with React.js and Next.js. I write clean, maintainable code and enjoy working on real-world problems through collaborative team environments.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '1rem' }}>// BEYOND CODE</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.8 }}>
                  Vice President of Build Club at SSN-IITMRP, where I mentor 50+ juniors. Hackathon finalist and prize-winner, pushing limits under tight deadlines on real product challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Identity card - brutalist style */}
          <div style={{
            background: 'var(--white)',
            color: 'var(--black)',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 0, right: 0,
              background: 'var(--red)',
              padding: '0.4rem 1rem',
              fontFamily: 'var(--font-display)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              color: 'var(--white)',
            }}>
              PROFILE
            </div>

            {[
              { label: 'NAME', value: 'Shubham Kumar' },
              { label: 'ROLE', value: 'Full-Stack Developer' },
              { label: 'EMAIL', value: 'shubham.kumar.300804@gmail.com' },
              { label: 'PHONE', value: '+91 9798775388' },
              { label: 'LOCATION', value: 'Chennai, India' },
              { label: 'STATUS', value: 'Open to Opportunities' },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(10,10,10,0.5)', marginBottom: '0.3rem' }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--black)' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements strip */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '2rem' }}>
              // ACHIEVEMENTS & ROLES
            </div>
            <div style={{ display: 'grid', gap: '1px', background: 'rgba(245,240,232,0.05)' }}>
              {[
                { tag: '🏆', title: 'Smart India Hackathon 2024', sub: 'National Finalist — among 6000+ teams' },
                { tag: '🥇', title: 'Khacks 2.0 Kurukshetra', sub: 'Best Track Prize — out of 150+ teams' },
                { tag: '🥉', title: 'Tech Summit 6.0 — SRM University', sub: 'Second Runner Up & Best UI/UX Prize' },
                { tag: '👥', title: 'Vice President — Build Club, SSN-IITMRP', sub: 'Mentored 50+ juniors · Organized Innovation Day with 100+ experts' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '3rem 1fr',
                  gap: '1.5rem',
                  alignItems: 'center',
                  padding: '1.5rem',
                  background: 'rgba(245,240,232,0.02)',
                  borderLeft: '2px solid transparent',
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderLeftColor = 'var(--red)')}
                  onMouseLeave={e => (e.currentTarget.style.borderLeftColor = 'transparent')}
                >
                  <span style={{ fontSize: '1.5rem' }}>{item.tag}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--white)', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>{item.title}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.5)' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/skills" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'var(--red)', border: 'none', padding: '1rem 2rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.12em',
                color: 'var(--white)', cursor: 'none',
              }}>
                VIEW SKILLS →
              </button>
            </Link>
            <a
              href="mailto:shubham.kumar.300804@gmail.com"
              style={{ textDecoration: 'none' }}
            >
              <button style={{
                background: 'transparent', border: '1px solid rgba(245,240,232,0.2)',
                padding: '1rem 2rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                letterSpacing: '0.12em', color: 'rgba(245,240,232,0.6)', cursor: 'none',
              }}>
                EMAIL ME
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
