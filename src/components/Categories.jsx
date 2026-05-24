import React from 'react'
import { ArrowRight } from 'lucide-react'
import nacionais from '../assets/nacionais.png'
import internacionais from '../assets/internacionais.png'
import selecoes from '../assets/selecoes.png'

const categories = [
  { id: 'nacionais', label: 'Nacionais', cta: 'Ver Coleção', size: 'large', img: nacionais, page: 'nacionais' },
  { id: 'selecoes', label: 'Seleções', cta: 'Explorar', size: 'small', img: selecoes, page: 'selecoes' },
  { id: 'internacionais', label: 'Internacionais', cta: 'Descobrir', size: 'wide', img: internacionais, page: 'internacionais' },
]

function Card({ cat, navigate }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(cat.page)}
      style={{
        position: 'relative', borderRadius: 8, overflow: 'hidden',
        height: cat.size === 'wide' ? 220 : 280, cursor: 'pointer',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.25)' : '0 2px 8px rgba(0,0,0,0.1)',
        transition: '0.3s ease',
      }}
    >
      <img src={cat.img} alt={cat.label} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center',
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
        transition: 'transform 0.6s ease',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
        transition: '0.3s ease',
      }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px', zIndex: 2 }}>
        <span style={{
          display: 'block', fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 4,
        }}>{cat.label}</span>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: hovered ? 10 : 6,
          fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', transition: '0.2s ease',
        }}>
          {cat.cta} <ArrowRight size={14} />
        </span>
      </div>
    </div>
  )
}

export default function Categories({ navigate }) {
  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ width: 4, height: 22, background: '#c9a84c', borderRadius: 2 }} />
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#111' }}>Categorias em Destaque</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div className="cat-top-row" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 8 }}>
            <Card cat={categories[0]} navigate={navigate} />
            <Card cat={categories[1]} navigate={navigate} />
          </div>
          <Card cat={categories[2]} navigate={navigate} />
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .cat-top-row { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}