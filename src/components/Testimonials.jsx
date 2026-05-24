import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    score: 99, stars: 5,
    text: 'A qualidade do tecido é impressionante. Já comprei em outros lugares, mas a Perigo Store realmente entrega o que promete. O kit do Real Madrid chegou impecável.',
    name: 'João Pedro', role: 'Colecionador', initials: 'JP', color: '#cc0000',
  },
  {
    score: 99, stars: 5,
    text: 'Atendimento de primeira. Tive uma dúvida sobre o tamanho e me responderam em minutos. A entrega para o Nordeste foi muito mais rápida do que eu esperava.',
    name: 'Ana Julia', role: 'São Paulo – SP', initials: 'MS', color: '#1a56db',
  },
  {
    score: 99, stars: 4,
    text: 'A camisa do Flamengo é perfeita, todos os detalhes, selos e tecidos originais. Com certeza serei cliente fiel para as próximas temporadas.',
    name: 'Antonio', role: 'Rio de Janeiro – RJ', initials: 'JS', color: '#0a5c41',
  },
]

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: 2, margin: '8px 0 12px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill={i < count ? '#1a56db' : 'none'} color={i < count ? '#1a56db' : '#d1d5db'} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section style={{ background: '#dde6f5', padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{
          textAlign: 'center',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 14, fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: '#111',
          marginBottom: 48,
        }}>O que dizem nossos atletas</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 12,
              padding: 28, display: 'flex', flexDirection: 'column', gap: 0,
            }}>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 52, color: '#1a56db', lineHeight: 1,
              }}>99</span>
              <Stars count={t.stars} />
              <p style={{
                fontSize: 14, lineHeight: 1.65, color: '#374151',
                marginBottom: 20, flex: 1,
              }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: t.color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 13, fontWeight: 700,
                }}>{t.initials}</div>
                <div>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, color: '#111' }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: '#6b7280' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}