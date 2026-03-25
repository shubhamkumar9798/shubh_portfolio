'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: '01. HOME', href: '/' },
  { label: '02. ABOUT', href: '/about' },
  { label: '03. SKILLS', href: '/skills' },
  { label: '04. PROJECTS', href: '/projects' },
  { label: '05. EXPERIENCE', href: '/experience' },
  { label: '06. CONTACT', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10,10,10,0.95)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(230,51,41,0.2)' : 'none',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        <div className="flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '0.05em', color: 'var(--white)', lineHeight: 1 }}>
              SK<span style={{ color: 'var(--red)' }}>.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    color: isActive ? 'var(--red)' : 'rgba(245,240,232,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                  }}
                  className="hover-underline"
                  onMouseEnter={(e) => { if (!isActive) (e.target as HTMLElement).style.color = 'var(--white)' }}
                  onMouseLeave={(e) => { if (!isActive) (e.target as HTMLElement).style.color = 'rgba(245,240,232,0.6)' }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      width: '100%',
                      height: '1px',
                      background: 'var(--red)',
                    }} />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Time + Menu toggle */}
          <div className="flex items-center gap-4">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(245,240,232,0.4)', display: 'none' }} className="md:block">
              {time} IST
            </span>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'none' }}
            >
              <span style={{ display: 'block', width: 24, height: 1.5, background: menuOpen ? 'var(--red)' : 'var(--white)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none' }} />
              <span style={{ display: 'block', width: 24, height: 1.5, background: menuOpen ? 'var(--red)' : 'var(--white)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 24, height: 1.5, background: menuOpen ? 'var(--red)' : 'var(--white)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--black)',
          borderTop: '1px solid rgba(230,51,41,0.3)',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'all 0.3s ease',
        }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'block',
                padding: '1rem 1.5rem',
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                letterSpacing: '0.08em',
                color: pathname === link.href ? 'var(--red)' : 'var(--white)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(245,240,232,0.05)',
                transition: 'color 0.2s, padding-left 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
