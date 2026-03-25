'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const ROLES = ['FULL-STACK DEVELOPER', 'REACT SPECIALIST', 'NEXT.JS ENGINEER', 'CS UNDERGRAD @ SSN']

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [count, setCount] = useState(0)

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex]
    const speed = isDeleting ? 40 : 80

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < current.length) {
        setDisplayText(current.slice(0, displayText.length + 1))
      } else if (!isDeleting && displayText.length === current.length) {
        setTimeout(() => setIsDeleting(true), 1800)
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(current.slice(0, displayText.length - 1))
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  // Counting animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < 2027) return prev + 31
        clearInterval(interval)
        return 2027
      })
    }, 10)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      {/* Big background text */}
      <div style={{
        position: 'absolute', bottom: '-2rem', right: '-2rem', opacity: 0.03,
        fontFamily: 'var(--font-display)', fontSize: 'clamp(12rem, 30vw, 28rem)', lineHeight: 1,
        color: 'var(--white)', pointerEvents: 'none', userSelect: 'none',
      }}>
        DEV
      </div>

      {/* Red accent block */}
      <div style={{
        position: 'absolute', top: '20%', right: 0, width: '4px', height: '40%',
        background: 'var(--red)',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', paddingTop: '8rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        {/* Status tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.5)' }}>
            AVAILABLE FOR INTERNSHIPS & COLLABORATIONS
          </span>
        </div>

        {/* Main heading */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(5rem, 16vw, 15rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              color: 'var(--white)',
              margin: 0,
            }}
              className="glitch"
              data-text="SHUBHAM"
            >
              SHUBHAM
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5rem', flexWrap: 'wrap' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(5rem, 16vw, 15rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
              color: 'transparent',
              WebkitTextStroke: '2px var(--white)',
              margin: 0,
            }}>
              KUMAR
            </h1>
            <div style={{
              background: 'var(--red)',
              padding: '0.4rem 1rem',
              marginBottom: '0.8rem',
              alignSelf: 'flex-end',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.5vw, 1.8rem)', color: 'var(--white)', letterSpacing: '0.05em' }}>
                .PORTFOLIO
              </span>
            </div>
          </div>
        </div>

        {/* Typewriter role */}
        <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: 'var(--red)', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>~/</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.8rem, 2vw, 1rem)', color: 'rgba(245,240,232,0.8)', letterSpacing: '0.08em' }}>
            {displayText}
          </span>
          <span style={{ width: 2, height: '1.2em', background: 'var(--red)', display: 'inline-block', animation: 'blink 1s step-end infinite' }} />
        </div>

        {/* Info row */}
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginBottom: '4rem', borderTop: '1px solid rgba(245,240,232,0.1)', paddingTop: '2rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>LOCATION</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.7)' }}>Chennai, India</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>INSTITUTION</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.7)' }}>SSN College of Engineering</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>GRADUATING</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.7)' }}>2027 — B.E. CSE</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>CGPA</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.7)' }}>7.67 / 10</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'var(--red)',
              border: 'none',
              padding: '1rem 2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'var(--white)',
              cursor: 'none',
              transition: 'all 0.2s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--red-dark)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--red)')}
            >
              VIEW PROJECTS →
            </button>
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'transparent',
              border: '1px solid rgba(245,240,232,0.3)',
              padding: '1rem 2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'var(--white)',
              cursor: 'none',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => { (e.currentTarget.style.borderColor = 'var(--red)'); (e.currentTarget.style.color = 'var(--red)') }}
              onMouseLeave={e => { (e.currentTarget.style.borderColor = 'rgba(245,240,232,0.3)'); (e.currentTarget.style.color = 'var(--white)') }}
            >
              GET IN TOUCH
            </button>
          </Link>
          <a
            href="https://github.com/shubhamkumar9798"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button style={{
              background: 'transparent',
              border: '1px solid rgba(245,240,232,0.1)',
              padding: '1rem 2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'rgba(245,240,232,0.4)',
              cursor: 'none',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.4)')}
            >
              GITHUB ↗
            </button>
          </a>
        </div>

        {/* Stats bar */}
        <div style={{
          marginTop: '5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          borderTop: '1px solid rgba(245,240,232,0.1)',
          borderBottom: '1px solid rgba(245,240,232,0.1)',
        }}>
          {[
            { num: '8+', label: 'PROJECTS' },
            { num: '50+', label: 'JUNIORS MENTORED' },
            { num: '3×', label: 'HACKATHON WINNER' },
            { num: '6K+', label: 'TEAMS BEATEN' },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: '1.5rem 1rem',
              borderRight: i < 3 ? '1px solid rgba(245,240,232,0.1)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: i === 0 ? 'var(--red)' : 'var(--white)', lineHeight: 1 }}>
                {stat.num}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em', color: 'rgba(245,240,232,0.4)', marginTop: '0.4rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div style={{
        overflow: 'hidden',
        borderTop: '1px solid rgba(230,51,41,0.3)',
        borderBottom: '1px solid rgba(230,51,41,0.3)',
        padding: '0.8rem 0',
        marginTop: '2rem',
        background: 'rgba(230,51,41,0.05)',
      }}>
        <div className="marquee-track" style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'rgba(230,51,41,0.6)', letterSpacing: '0.1em', gap: '3rem', display: 'flex' }}>
          {Array(10).fill('REACT.JS · NEXT.JS · NODE.JS · JAVA · PYTHON · TYPESCRIPT · SQL · REST APIs · GIT · AGILE ·').map((t, i) => (
            <span key={i} style={{ paddingRight: '3rem', whiteSpace: 'nowrap' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.4 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em' }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--white), transparent)' }} />
      </div>
    </div>
  )
}
