'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:shubham.kumar.300804@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const contacts = [
    { label: 'EMAIL', value: 'shubham.kumar.300804@gmail.com', link: 'mailto:shubham.kumar.300804@gmail.com', copyValue: 'shubham.kumar.300804@gmail.com' },
    { label: 'PHONE', value: '+91 9798775388', link: 'tel:+919798775388', copyValue: '+91 9798775388' },
    { label: 'LINKEDIN', value: 'linkedin.com/in/shubham-kumar-ln', link: 'https://linkedin.com/in/shubham-kumar-ln', copyValue: null },
    { label: 'GITHUB', value: 'github.com/shubhamkumar9798', link: 'https://github.com/shubhamkumar9798', copyValue: null },
    
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', paddingTop: '7rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>

      {/* BG */}
      <div style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', opacity: 0.03, fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'var(--white)', pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
        HI
      </div>

      {/* Red side accent */}
      <div style={{ position: 'absolute', top: '20%', left: 0, width: '3px', height: '30%', background: 'var(--red)' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '5rem', borderBottom: '1px solid rgba(245,240,232,0.08)', paddingBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginTop: '1.4rem' }}>06.</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 12vw, 10rem)', color: 'var(--white)', lineHeight: 0.9, margin: 0 }}>
            .CONTACT<br />
            <span style={{ WebkitTextStroke: '2px rgba(245,240,232,0.3)', color: 'transparent' }}>US</span>
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem' }}>

          {/* Left: contact info */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '2rem' }}>
              // REACH OUT
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '400px' }}>
              Open to internships, collaborations, and interesting conversations about technology. Let's build something great together.
            </p>

            {/* Contact items */}
            <div style={{ display: 'grid', gap: '1px', background: 'rgba(245,240,232,0.05)', marginBottom: '3rem' }}>
              {contacts.map((c) => (
                <div key={c.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1.2rem 1.5rem', background: 'var(--black)',
                  transition: 'background 0.2s ease',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(230,51,41,0.05)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--black)')}
                >
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.12em', minWidth: '70px' }}>{c.label}</span>
                    <a
                      href={c.link}
                      target={c.link.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(245,240,232,0.7)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.7)')}
                    >
                      {c.value}
                    </a>
                  </div>
                  {c.copyValue && (
                    <button
                      onClick={() => copy(c.copyValue!, c.label)}
                      style={{
                        background: 'none', border: '1px solid rgba(245,240,232,0.1)',
                        padding: '0.3rem 0.7rem', fontFamily: 'var(--font-mono)',
                        fontSize: '0.55rem', letterSpacing: '0.1em',
                        color: copied === c.label ? 'var(--red)' : 'rgba(245,240,232,0.3)',
                        cursor: 'none', transition: 'all 0.2s ease',
                      }}
                    >
                      {copied === c.label ? 'COPIED!' : 'COPY'}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Location */}
            <div style={{ padding: '1.5rem', border: '1px solid rgba(245,240,232,0.08)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>LOCATION</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--white)' }}>Chennai, Tamil Nadu, India</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(245,240,232,0.4)', marginTop: '0.3rem' }}>UTC+5:30 — India Standard Time</div>
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--red)', letterSpacing: '0.15em', marginBottom: '2rem' }}>
              // SEND A MESSAGE
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              {[
                { name: 'name', label: 'YOUR NAME', type: 'input', placeholder: 'Shubham' },
                { name: 'email', label: 'EMAIL ADDRESS', type: 'input', placeholder: 'shubham.kumar.300804@gmail.com' },
                { name: 'subject', label: 'SUBJECT', type: 'input', placeholder: 'Internship Opportunity / Collaboration' },
              ].map((field) => (
                <div key={field.name}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%', background: 'rgba(245,240,232,0.04)',
                      border: '1px solid rgba(245,240,232,0.1)', borderBottom: '1px solid rgba(230,51,41,0.3)',
                      padding: '0.9rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                      color: 'var(--white)', outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={e => (e.target.style.borderBottomColor = 'var(--red)')}
                    onBlur={e => (e.target.style.borderBottomColor = 'rgba(230,51,41,0.3)')}
                  />
                </div>
              ))}

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Shubham, I'd love to discuss..."
                  style={{
                    width: '100%', background: 'rgba(245,240,232,0.04)',
                    border: '1px solid rgba(245,240,232,0.1)', borderBottom: '1px solid rgba(230,51,41,0.3)',
                    padding: '0.9rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                    color: 'var(--white)', outline: 'none', resize: 'vertical',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => (e.target.style.borderBottomColor = 'var(--red)')}
                  onBlur={e => (e.target.style.borderBottomColor = 'rgba(230,51,41,0.3)')}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: sent ? '#22c55e' : 'var(--red)',
                  border: 'none', padding: '1.2rem 2.5rem',
                  fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em',
                  color: 'var(--white)', cursor: 'none',
                  transition: 'all 0.3s ease',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                }}
              >
                {sent ? '✓ MESSAGE SENT' : 'SEND MESSAGE →'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer bar */}
        <div style={{
          marginTop: '8rem', paddingTop: '2rem',
          borderTop: '1px solid rgba(245,240,232,0.05)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'rgba(245,240,232,0.2)' }}>
            SHUBHAM KUMAR<span style={{ color: 'rgba(230,51,41,0.4)' }}>.</span>
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(245,240,232,0.2)', letterSpacing: '0.1em' }}>
            BUILT WITH NEXT.JS · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  )
}
