import React, { useState } from 'react'
import { ArrowLeft, ShoppingCart, Heart, Search } from 'lucide-react'
import logo from '../assets/logo.png'
import { useCart } from '../CartContext'
import camisaliverpool from '../assets/liverpool.webp'
import camisaRealMadrid from '../assets/CamisaRealMadrid.webp'
import camisaBarcelona from '../assets/CamisaBarcelona.webp'
import camisaParis from '../assets/CamisaPsg.webp'
import camisaBayer from '../assets/CamisaBayernMunique.webp'
import camisaManchesterUnited from '../assets/CamisaManchesterUnited.webp'
import camisaManchesterCity from '../assets/CamisaManchesterCity.webp'
import camisaChelsea from '../assets/CamisaChelsea.webp'


const products = [
  { id: 1, name: 'Liverpool ', brand: 'Adidas Dri-FIT', price: 199.99, badge: null, colors: ['#000', '#d4af37'], img: camisaliverpool, page: 'camisaliverpool' },
  { id: 2, name: 'Real Madrid', brand: 'Nike Dri-FIT', price: 199.99, badge: 'NEW', badgeColor: '#e53e3e', colors: ['#eed705', '#fff' , '#000'], img: camisaRealMadrid, page: 'camisaRealMadrid'  },
  { id: 3, name: 'Barcelona', brand: 'Nike Classics', price: 199.99, badge: null, colors: ['#004d98', '#a50044'], img: camisaBarcelona, page: 'camisaBarcelona'  },
  { id: 4, name: 'Paris Saint-Germain', brand: 'Nike', price: 199.99, badge: null, colors: ['#ff0000', '#153f69'], img: camisaParis, page: 'camisaParis'  },
  { id: 5, name: 'Bayern de Munique', brand: 'Adidas', price: 199.99, badge: 'CHAMPIONS', badgeColor: '#c97e4c', colors: ['#ff0000', '#ffffff'], img: camisaBayer, page: 'camisaBayer'  },
  { id: 6, name: 'Manchester United', brand: 'Adidas', price: 199.99, badge: null, colors: ['#ff0000'],  img: camisaManchesterUnited, page: 'camisaManchesterUnited'  },
  { id: 7, name: 'Manchester City', brand: 'Nike', price: 199.99, badge: 'NEW', badgeColor: '#e53e3e', colors: ['#18caf7'],  img: camisaManchesterCity, page: 'camisaManchesterCity'  },
  { id: 8, name: 'Chelsea', brand: 'Adidas', price: 199.99, badge: null, colors: ['#0918f0', '#ffffff'], img: camisaChelsea , page: 'camisaChelsea '  },
]

const SIZES = ['P', 'M', 'G', 'GG']

function Card({ p }) {
  const { addToCart } = useCart()
  const [liked, setLiked] = React.useState(false)
  const [hovered, setHovered] = React.useState(false)
  const [showSizes, setShowSizes] = React.useState(false)
  const [selectedSize, setSelectedSize] = React.useState('M')

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
          fontFamily: "\'Barlow Condensed\', sans-serif", fontSize: 10,
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
        <h3 style={{ fontFamily: "\'Barlow Condensed\', sans-serif", fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 2 }}>{p.name}</h3>
        <p style={{ fontSize: 12, color: '#6b7280', marginBottom: 10 }}>{p.brand}</p>
        {showSizes && (
          <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
            {SIZES.map(s => (
              <button key={s} onClick={(e) => { e.stopPropagation(); setSelectedSize(s) }}
                style={{ width: 34, height: 26, fontSize: 11, fontWeight: 700, fontFamily: "\'Barlow Condensed\', sans-serif", background: selectedSize === s ? '#111' : '#f0f2f5', color: selectedSize === s ? '#fff' : '#6b7280', borderRadius: 4, border: 'none', cursor: 'pointer' }}>
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
            <span style={{ fontFamily: "\'Barlow Condensed\', sans-serif", fontSize: 18, fontWeight: 700, color: '#1a56db' }}>
              R$ {p.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <button onClick={handleCart} style={{ height: 34, background: showSizes ? '#c9a84c' : '#111', color: '#fff', borderRadius: 6, padding: '0 10px', display: 'flex', alignItems: 'center', gap: 5, border: 'none', cursor: 'pointer', fontFamily: "\'Barlow Condensed\', sans-serif", fontSize: 12, fontWeight: 700, transition: '0.2s ease' }}>
            <ShoppingCart size={13} />{showSizes ? 'OK' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  )
}


export default function InternacionaisPage({ navigate }) {
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
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7280' }}>Internacionais</span>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', padding: '56px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 10, position: 'relative' }}>Os maiores clubes do mundo</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px, 8vw, 80px)', color: '#fff', lineHeight: 1, marginBottom: 12, position: 'relative' }}>INTERNACIONAIS</h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto', position: 'relative' }}>Real Madrid, Barcelona, Liverpool, PSG e muito mais. Originais e com entrega para todo o Brasil.</p>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 16px', maxWidth: 400, marginBottom: 32 }}>
          <Search size={16} color="#9ca3af" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar clube internacional..."
            style={{ border: 'none', outline: 'none', fontSize: 14, fontFamily: "'Barlow', sans-serif", width: '100%' }} />
        </div>

        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, color: '#9ca3af', marginBottom: 20 }}>
          {filtered.length} produto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
        </p>

        <div className="int-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {filtered.map(p => <Card key={p.id} p={p} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .int-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .int-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; } }
      `}</style>
    </div>
  )
}