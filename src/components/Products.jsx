import React, { useState } from 'react'
import { ArrowRight, ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '../CartContext'
import camisaVasco from '../assets/CamisaVasco.webp'
import camisaFranca from '../assets/CamisaFranca.webp'
import camisaRealMadrid from '../assets/CamisaRealMadrid.webp'
import camisaChelsea from '../assets/CamisaChelsea.webp'

// Using reliable Unsplash images for football jerseys
const products = [
  {
    id: 1,
    name: 'Vasco',
    brand: 'Kappa',
    price: 199.99,
    badge: 'NEW ARRIVAL',
    badgeColor: '#e53e3e',
    colors: ['#ffffff', '#cc0000', '#000000'],
     img: camisaVasco, page: 'camisaVasco',
  },
  {
    id: 2,
    name: 'França',
    brand: 'Nike',
    price: 199.99,
    badge: 'WORLD CHAMPIONS',
    badgeColor: '#1a56db',
    colors: ['#0011ff', '#ffffff'],
     img: camisaFranca, page: 'camisaFranca',
  },
  {
    id: 3,
    name: 'Real Madrid',
    brand: 'Adidas Dri-FIT',
    price: 199.99,
    badge: null,
    colors: ['#ffffff', '#caa607', '#000000'],
    img: camisaRealMadrid, page: 'camisaRealMadrid',
  },
  {
    id: 4,
    name: 'Chelsea ',
    brand: 'Nike Classics Collection',
    price: 199.99,
    badge: null,
    colors: ['#004d98', '#ffffff' , ''],
    img: camisaChelsea, page: 'camisaChelsea',
  },
]

const SIZES = ['P', 'M', 'G', 'GG']

function ProductCard({ p }) {
  const [liked, setLiked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [selectedSize, setSelectedSize] = useState('M')
  const [showSizes, setShowSizes] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.stopPropagation()
    if (!showSizes) {
      setShowSizes(true)
      return
    }
    addToCart(p, selectedSize)
    setShowSizes(false)
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setShowSizes(false) }}
      style={{
        position: 'relative',
        background: '#fff',
        border: hovered ? '1px solid transparent' : '1px solid #e5e7eb',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.16)' : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: '0.4s ease',
        cursor: 'pointer',
      }}
    >
      {p.badge && (
        <span style={{
          position: 'absolute', top: 12, left: 12, zIndex: 2,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: '#fff',
          background: p.badgeColor, padding: '4px 8px', borderRadius: 4,
        }}>{p.badge}</span>
      )}

      <button
        onClick={(e) => { e.stopPropagation(); setLiked(!liked) }}
        style={{
          position: 'absolute', top: 12, right: 12, zIndex: 2,
          width: 32, height: 32,
          background: 'rgba(255,255,255,0.92)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: liked ? '#e53e3e' : '#6b7280',
          transition: '0.2s ease',
          backdropFilter: 'blur(4px)',
          border: 'none', cursor: 'pointer',
        }}
      >
        <Heart size={16} fill={liked ? '#e53e3e' : 'none'} color={liked ? '#e53e3e' : 'currentColor'} />
      </button>

      <div style={{
        background: hovered ? '#eef1f7' : '#f0f2f5',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: 220, overflow: 'hidden',
        transition: '0.3s ease',
      }}>
        <img
          src={p.img}
          alt={p.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />
      </div>

      <div style={{ padding: 16 }}>
        <h3 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 15, fontWeight: 700, color: '#111',
          marginBottom: 2, letterSpacing: '0.01em',
        }}>{p.name}</h3>
        <p style={{ fontSize: 12, color: '#6b7280', marginBottom: 12 }}>{p.brand}</p>

        {/* Size picker */}
        {showSizes && (
          <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
            {SIZES.map(s => (
              <button
                key={s}
                onClick={(e) => { e.stopPropagation(); setSelectedSize(s) }}
                style={{
                  width: 36, height: 28, fontSize: 11, fontWeight: 700,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: selectedSize === s ? '#111' : '#f0f2f5',
                  color: selectedSize === s ? '#fff' : '#6b7280',
                  borderRadius: 4, border: 'none', cursor: 'pointer',
                  transition: '0.15s ease',
                }}
              >{s}</button>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
              {p.colors.map((c, i) => (
                <span key={i} style={{
                  width: 12, height: 12, borderRadius: '50%',
                  background: c, border: '1.5px solid rgba(0,0,0,0.1)',
                  display: 'inline-block',
                }} />
              ))}
            </div>
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 18, fontWeight: 700, color: '#1a56db',
            }}>R$ {p.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <button
            onClick={handleAddToCart}
            style={{
              height: 36, background: showSizes ? '#c9a84c' : '#111', color: '#fff',
              borderRadius: 4, padding: '0 12px',
              display: 'flex', alignItems: 'center', gap: 6,
              transition: '0.2s ease', border: 'none', cursor: 'pointer',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 12, fontWeight: 700, letterSpacing: '0.05em',
            }}
          >
            <ShoppingCart size={14} />
            {showSizes ? 'Confirmar' : 'Adicionar'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Products({ navigate }) {
  return (
    <section style={{ padding: '0 0 80px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', marginBottom: 32,
        }}>
          <div>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 12, fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#1a56db', marginBottom: 4,
            }}>Coleção 24/25</p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 22, fontWeight: 700, color: '#111',
            }}>Mais Vendidos</h2>
          </div>
          <button onClick={() => navigate('collection')} style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 13, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: '#111',
            background: 'none', border: 'none', cursor: 'pointer',
          }}>
            Ver Tudo <ArrowRight size={16} />
          </button>
        </div>

        <div
          className="products-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }}
        >
          {products.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
        }
      `}</style>
    </section>
  )
}
