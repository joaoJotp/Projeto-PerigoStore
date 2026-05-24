import React, { useState } from 'react'
import { ArrowLeft, ShoppingCart, Heart, Search } from 'lucide-react'
import logo from '../assets/logo.png'
import { useCart } from '../CartContext'
import camisaFlamengo from '../assets/flamengo.webp'
import camisaCorinthians from '../assets/CamisaCorinthias.jpg'
import camisaPalmeiras from '../assets/CamisaPalmeiras.webp'
import camisaSaoPaulo from '../assets/CamisaSaoPaulo.webp'
import camisaSantos from '../assets/CamisaSantos.jpg'
import camisaGremio from '../assets/CamisaGremio.webp'
import camisaVasco from '../assets/CamisaVasco.webp'
import camisaFluminense from '../assets/CamisaFluminense.webp'

const SIZES = ['P', 'M', 'G', 'GG']

const products = [
  { id: 'n1', name: 'Flamengo', brand: 'Adidas Performance', price: 199.99, badge: 'NEW', badgeColor: '#e53e3e', colors: ['#fff', '#cc0000', '#000'],img: camisaFlamengo, page: 'camisaFlamengo'  },
  { id: 'n2', name: 'Corinthians', brand: 'Nike', price: 219.99, badge: 'MAIS VENDIDO', badgeColor: '#c9a84c', colors: ['#ffffff', '#000'], img: camisaCorinthians, page: 'camisaCorinthians'},
  { id: 'n3', name: 'Palmeiras ', brand: 'Puma', price: 199.99, badge: null, colors: ['#006437', '#fff'], img: camisaPalmeiras, page: 'camisaPalmeiras'},
  { id: 'n4', name: 'São Paulo ', brand: 'New Balance', price: 189.99, badge: null, colors: ['#fff', '#cc0000', '#000'],img: camisaSaoPaulo, page: 'camisaSaoPaulo' },
  { id: 'n5', name: 'Santos ', brand: 'Umbro', price: 199.99, badge: 'NEW', badgeColor: '#e53e3e', colors: ['#fff','#000'], img: camisaSantos, page: 'camisaSantos' },
  { id: 'n6', name: 'Gremio', brand: 'New Balance', price: 179.99, badge: null, colors: ['#07ccfd'],img: camisaGremio, page: 'camisaGremio'},
  { id: 'n7', name: 'Vasco', brand: 'Kappa', price: 189.99, badge: null, colors: ['#df0b0b', '#fff', '#000'], img: camisaVasco, page: 'camisaVasco' },
  { id: 'n8', name: 'Fluminense', brand: 'Puma', price: 199.99, badge: null, colors: ['#ffffff', '#b31111','#18610e'], img: camisaFluminense, page: 'camisaFluminense'},
]

function Card({ p }) {
  const [liked, setLiked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [showSizes, setShowSizes] = useState(false)
  const [selectedSize, setSelectedSize] = useState('M')
  const { addToCart } = useCart()

  const handleCart = (e) => {
    e.stopPropagation()
    if (!showSizes) { setShowSizes(true); return }
    addToCart(p, selectedSize)
    setShowSizes(false)
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setShowSizes(false) }}
      style={{
        position: 'relative', background: '#fff',
        border: hovered ? '1px solid transparent' : '1px solid #e5e7eb',
        borderRadius: 10, overflow: 'hidden',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.14)' : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: '0.3s ease', cursor: 'pointer',
      }}
    >
      {p.badge && (
        <span style={{
          position: 'absolute', top: 10, left: 10, zIndex: 2,
          fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10,
          fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: '#fff', background: p.badgeColor, padding: '3px 8px', borderRadius: 4,
        }}>{p.badge}</span>
      )}
      <button onClick={(e) => { e.stopPropagation(); setLiked(!liked) }} style={{
        position: 'absolute', top: 10, right: 10, zIndex: 2,
        width: 30, height: 30, background: 'rgba(255,255,255,0.9)',
        borderRadius: '50%', display: 'flex', alignItems: 'center',
        justifyContent: 'center', border: 'none', cursor: 'pointer',
      }}>
        <Heart size={14} fill={liked ? '#e53e3e' : 'none'} color={liked ? '#e53e3e' : '#6b7280'} />
      </button>
      <div style={{ height: 200, overflow: 'hidden', background: hovered ? '#eef1f7' : '#f5f6f8', transition: '0.3s ease' }}>
        <img src={p.img} alt={p.name} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.07)' : 'scale(1)', transition: '0.5s ease',
        }} />
      </div>
      <div style={{ padding: 14 }}>
        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 2 }}>{p.name}</h3>
        <p style={{ fontSize: 12, color: '#6b7280', marginBottom: 10 }}>{p.brand}</p>
        {showSizes && (
          <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
            {SIZES.map(s => (
              <button key={s} onClick={(e) => { e.stopPropagation(); setSelectedSize(s) }}
                style={{ width: 34, height: 26, fontSize: 11, fontWeight: 700, fontFamily: "'Barlow Condensed', sans-serif", background: selectedSize === s ? '#111' : '#f0f2f5', color: selectedSize === s ? '#fff' : '#6b7280', borderRadius: 4, border: 'none', cursor: 'pointer' }}>
                {s}
              </button>
            ))}
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
              {p.colors.map((c, i) => (<span key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c, border: '1.5px solid rgba(0,0,0,0.1)', display: 'inline-block' }} />))}
            </div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 700, color: '#1a56db' }}>
              R$ {p.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <button onClick={handleCart} style={{ height: 34, background: showSizes ? '#c9a84c' : '#111', color: '#fff', borderRadius: 6, padding: '0 10px', display: 'flex', alignItems: 'center', gap: 5, border: 'none', cursor: 'pointer', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 700 }}>
            <ShoppingCart size={13} />{showSizes ? 'OK' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function NacionaisPage({ navigate }) {
  const [search, setSearch] = useState('')
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

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
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7280' }}>Camisas Nacionais</span>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #006400 0%, #004d00 50%, #002200 100%)', padding: '56px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 20px)' }} />
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 10, position: 'relative' }}>Os melhores clubes do Brasil</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px, 8vw, 80px)', color: '#fff', lineHeight: 1, marginBottom: 12, position: 'relative' }}>CAMISAS NACIONAIS</h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto', position: 'relative' }}>Flamengo, Palmeiras, Corinthians e muito mais. Produtos 100% originais.</p>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 16px', maxWidth: 400, marginBottom: 32 }}>
          <Search size={16} color="#9ca3af" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar time nacional..."
            style={{ border: 'none', outline: 'none', fontSize: 14, fontFamily: "'Barlow', sans-serif", width: '100%' }} />
        </div>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, color: '#9ca3af', marginBottom: 20 }}>
          {filtered.length} produto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </p>
        <div className="nac-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {filtered.map(p => <Card key={p.id} p={p} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .nac-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .nac-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; } }
      `}</style>
    </div>
  )
}
