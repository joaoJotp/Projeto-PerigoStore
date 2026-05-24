import React, { useState } from 'react'
import { Instagram, Twitter } from 'lucide-react'
import logo from '../assets/logo.png'

const links = [
  { label: 'Contato', page: 'contact' },
]

export default function Footer({ navigate }) {
  const [email, setEmail] = useState('')

  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '60px 0 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr', gap: 48 }} className="footer-grid">

        <div>
          <button onClick={() => navigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, background: 'none', border: 'none', cursor: 'pointer' }}>
            <img src={logo} alt="Perigo Store" style={{ height: 40, width: 40, objectFit: 'contain', borderRadius: 6 }} />
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: '0.05em', color: '#111' }}>PERIGO</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', color: '#c9a84c' }}>STORE</div>
            </div>
          </button>
          <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, marginBottom: 24, maxWidth: 280 }}>
            A maior autoridade em camisas de futebol premium do Brasil. Vista a sua paixão com produtos autênticos e qualidade de campo.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            {[Instagram, Twitter].map((Icon, i) => (
              <button key={i} style={{ width: 36, height: 36, background: '#f0f2f5', color: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111', marginBottom: 16 }}>Links Úteis</p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {links.map((l) => (
              <li key={l.label}>
                <button onClick={() => navigate(l.page)} style={{ fontSize: 13, color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: '0.2s ease' }}
                  onMouseEnter={e => e.target.style.color = '#111'}
                  onMouseLeave={e => e.target.style.color = '#6b7280'}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111', marginBottom: 8 }}>Novos Lançamentos</p>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 16, lineHeight: 1.6 }}>Receba lançamentos e ofertas exclusivas no seu e-mail.</p>
          <div style={{ display: 'flex' }}>
            <input type="email" placeholder="Seu e-mail" value={email} onChange={e => setEmail(e.target.value)}
              style={{ flex: 1, padding: '10px 14px', fontSize: 13, border: '1px solid #e5e7eb', borderRadius: '4px 0 0 4px', outline: 'none', fontFamily: "'Barlow', sans-serif" }} />
            <button style={{ background: '#111', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', padding: '10px 16px', borderRadius: '0 4px 4px 0', border: 'none', cursor: 'pointer' }}>OK</button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '48px auto 0', padding: '20px 24px', borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: 12, color: '#9ca3af' }}>© 2026 Perigo Store.</p>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#111', '#555', '#999'].map((c, i) => (
            <div key={i} style={{ width: 20, height: 20, background: c, borderRadius: 3 }} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </footer>
  )
}