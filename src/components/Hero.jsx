import React from 'react'
import heroBg from '../assets/hero-bg.png'

export default function Hero({ navigate }) {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden', paddingTop: 64,
    }}>
      <img src={heroBg} alt="Hero" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, width: '100%', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 560 }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(16px, 2.5vw, 24px)', fontWeight: 300, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>Vista</p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(80px, 13vw, 150px)', lineHeight: 0.88, color: '#fff', marginBottom: 20 }}>
            SUA<br />PAIXÃO
          </h1>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(12px, 1.8vw, 16px)', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a84c', lineHeight: 1.6 }}>
            Camisas Oficiais<br /><span style={{ opacity: 0.8 }}>dos Maiores Times</span>
          </p>
          <div style={{ marginTop: 36 }}>
            <button onClick={() => navigate('contact')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#1a56db', color: '#fff',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 14, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', padding: '16px 36px',
              borderRadius: 4, border: 'none', cursor: 'pointer', transition: '0.2s ease',
            }}>
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #c9a84c 0%, transparent 70%)', zIndex: 3 }} />
    </section>
  )
}