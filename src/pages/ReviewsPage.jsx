import React, { useState } from 'react'
import { ArrowLeft, Star, ThumbsUp, Send } from 'lucide-react'
import logo from '../assets/logo.png'

const reviews = [
  { id: 1, name: 'João Pedro', role: 'Colecionador', initials: 'JP', color: '#cc0000', score: 99, stars: 5, product: 'Kit Real Madrid 24/25', text: 'A qualidade do tecido é impressionante. Já comprei em outros lugares, mas a Perigo Store realmente entrega o que promete. O kit do Real Madrid chegou impecável, embalagem perfeita e prazo antecipado.', likes: 24, date: '15 Mar 2025' },
  { id: 2, name: 'Ana Julia', role: 'São Paulo – SP', initials: 'AJ', color: '#1a56db', score: 99, stars: 5, product: 'Camisa Argentina 24/25', text: 'Atendimento de primeira. Tive uma dúvida sobre o tamanho e me responderam em minutos. A entrega para o Nordeste foi muito mais rápida do que eu esperava. Camisa idêntica à original.', likes: 18, date: '02 Abr 2025' },
  { id: 3, name: 'Antonio', role: 'Rio de Janeiro – RJ', initials: 'AS', color: '#0a5c41', score: 99, stars: 4, product: 'Flamengo Home 24/25', text: 'A camisa do Flamengo é perfeita, todos os detalhes, selos e tecidos originais. Com certeza serei cliente fiel para as próximas temporadas.', likes: 31, date: '20 Abr 2025' },
  { id: 4, name: 'Carlos Mendes', role: 'Belo Horizonte – MG', initials: 'CM', color: '#7c3aed', score: 98, stars: 5, product: 'Barcelona Home 24/25', text: 'Simplesmente incrível. A camisa do Barcelona chegou em perfeito estado, com todos os patches e escudos bordados com precisão. Recomendo demais!', likes: 15, date: '08 Mai 2025' },
  { id: 5, name: 'Fernanda Lima', role: 'Curitiba – PR', initials: 'FL', color: '#d97706', score: 97, stars: 5, product: 'Liverpool Away 24/25', text: 'Meu filho ficou encantado com a camisa do Liverpool. Chegou antes do prazo e a qualidade superou as expectativas. Voltarei a comprar com certeza!', likes: 22, date: '12 Mai 2025' },
  { id: 6, name: 'Rafael Costa', role: 'Porto Alegre – RS', initials: 'RC', color: '#0891b2', score: 96, stars: 4, product: 'Argentina Home 24/25', text: 'Ótima camisa, entrega rápida. O único ponto foi a embalagem simples, mas o produto em si é impecável. Nota 9 por isso.', likes: 9, date: '18 Mai 2025' },
]

function StarRating({ count, size = 16 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill={i < count ? '#f59e0b' : 'none'} color={i < count ? '#f59e0b' : '#d1d5db'} />
      ))}
    </div>
  )
}

function ReviewCard({ r }) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(r.likes)

  const toggleLike = () => {
    setLiked(!liked)
    setCount(liked ? count - 1 : count + 1)
  }

  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: r.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 15, fontWeight: 700, flexShrink: 0 }}>{r.initials}</div>
          <div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 15, fontWeight: 700, color: '#111' }}>{r.name}</p>
            <p style={{ fontSize: 12, color: '#9ca3af' }}>{r.role} · {r.date}</p>
          </div>
        </div>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, color: '#1a56db', lineHeight: 1 }}>{r.score}</span>
      </div>

      <StarRating count={r.stars} />

      <div style={{ background: '#f8f9fb', borderRadius: 6, padding: '8px 12px' }}>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9ca3af' }}>Produto avaliado</p>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>{r.product}</p>
      </div>

      <p style={{ fontSize: 14, lineHeight: 1.7, color: '#374151', flex: 1 }}>"{r.text}"</p>

      <button onClick={toggleLike} style={{ display: 'flex', alignItems: 'center', gap: 8, background: liked ? '#eff6ff' : 'none', border: liked ? '1px solid #bfdbfe' : '1px solid #e5e7eb', borderRadius: 8, padding: '8px 14px', cursor: 'pointer', color: liked ? '#1a56db' : '#6b7280', fontFamily: "'Barlow', sans-serif", fontSize: 13, width: 'fit-content', transition: '0.2s ease' }}>
        <ThumbsUp size={14} fill={liked ? '#1a56db' : 'none'} /> Útil ({count})
      </button>
    </div>
  )
}

export default function ReviewsPage({ navigate }) {
  const [form, setForm] = useState({ name: '', product: '', stars: 5, text: '' })
  const [submitted, setSubmitted] = useState(false)

  const avg = (reviews.reduce((a, r) => a + r.stars, 0) / reviews.length).toFixed(1)
  const total = reviews.reduce((a, r) => a + r.likes, 0)

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fb' }}>
      <header style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <button onClick={() => navigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', color: '#111' }}>
          <ArrowLeft size={18} />
          <img src={logo} alt="logo" style={{ height: 32, width: 32, objectFit: 'contain', borderRadius: 6 }} />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, color: '#111' }}>PERIGO</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.15em', color: '#c9a84c' }}>STORE</div>
          </div>
        </button>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7280' }}>Avaliações</span>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #111 0%, #1a1a2e 100%)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 10 }}>O que dizem nossos clientes</p>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px, 7vw, 72px)', color: '#fff', lineHeight: 1 }}>AVALIAÇÕES</h1>
          </div>
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { value: avg, label: 'Nota média' },
              { value: `${reviews.length}`, label: 'Avaliações' },
              { value: `${total}+`, label: 'Pessoas ajudadas' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: '#c9a84c', lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 32, alignItems: 'start' }} className="reviews-layout">

        {/* Grid de reviews */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="reviews-grid">
          {reviews.map(r => <ReviewCard key={r.id} r={r} />)}
        </div>

        {/* Formulário */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 32, position: 'sticky', top: 80 }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ width: 56, height: 56, background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Send size={24} color="#16a34a" />
              </div>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: '#111', marginBottom: 8 }}>AVALIAÇÃO ENVIADA!</h3>
              <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>Obrigado pelo seu feedback!</p>
              <button onClick={() => setSubmitted(false)} style={{ background: '#111', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 24px', borderRadius: 6, border: 'none', cursor: 'pointer' }}>Nova avaliação</button>
            </div>
          ) : (
            <>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, color: '#111', marginBottom: 6 }}>DEIXE SUA AVALIAÇÃO</h3>
              <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>Sua opinião ajuda outros clientes.</p>

              {[
                { name: 'name', label: 'Seu nome', placeholder: 'João Silva', type: 'input' },
                { name: 'product', label: 'Produto comprado', placeholder: 'Ex: Flamengo Home 24/25', type: 'input' },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#374151', marginBottom: 6 }}>{f.label}</label>
                  <input name={f.name} value={form[f.name]} onChange={e => setForm({ ...form, [e.target.name]: e.target.value })} placeholder={f.placeholder}
                    style={{ width: '100%', padding: '11px 14px', fontSize: 13, border: '1px solid #e5e7eb', borderRadius: 6, outline: 'none', fontFamily: "'Barlow', sans-serif", boxSizing: 'border-box' }} />
                </div>
              ))}

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#374151', marginBottom: 8 }}>Sua nota</label>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[1, 2, 3, 4, 5].map(n => (
                    <button key={n} onClick={() => setForm({ ...form, stars: n })}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2 }}>
                      <Star size={24} fill={n <= form.stars ? '#f59e0b' : 'none'} color={n <= form.stars ? '#f59e0b' : '#d1d5db'} />
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#374151', marginBottom: 6 }}>Comentário</label>
                <textarea name="text" value={form.text} onChange={e => setForm({ ...form, text: e.target.value })} placeholder="Conte sua experiência..." rows={4}
                  style={{ width: '100%', padding: '11px 14px', fontSize: 13, border: '1px solid #e5e7eb', borderRadius: 6, outline: 'none', fontFamily: "'Barlow', sans-serif", resize: 'vertical', boxSizing: 'border-box' }} />
              </div>

              <button onClick={() => { if (form.name && form.text) setSubmitted(true) }}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#111', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px', borderRadius: 6, border: 'none', cursor: 'pointer' }}>
                <Send size={16} /> Enviar Avaliação
              </button>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .reviews-layout { grid-template-columns: 1fr !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}