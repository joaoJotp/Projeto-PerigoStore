import React, { useState, useEffect } from 'react'
import { ShoppingCart, User, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { useCart } from '../CartContext'

export default function Navbar({ navigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, setIsOpen } = useCart()

  const navLinks = [
    { label: 'Categorias em Destaque', key: 'home' },
    { label: 'Coleção', key: 'collection' },
    { label: 'Avaliação', key: 'reviews' },
    { label: 'Contato', key: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid #e5e7eb' : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      transition: '0.4s ease',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 24px',
        height: 64, display: 'flex', alignItems: 'center', gap: 40,
      }}>
        <button onClick={() => navigate('home')} style={{
          display: 'flex', alignItems: 'center', gap: 8,
          flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer',
        }}>
          <img src={logo} alt="Perigo Store" style={{ height: 36, width: 36, objectFit: 'contain', borderRadius: 6 }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: '0.05em', color: '#111' }}>PERIGO</span>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', color: '#c9a84c' }}>STORE</span>
          </div>
        </button>

        <nav style={{ display: 'flex', gap: 4, flex: 1 }} className="nav-desktop">
          {navLinks.map((link) => (
            <button key={link.key} onClick={() => navigate(link.key)} style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: currentPage === link.key ? '#111' : '#6b7280',
              padding: '6px 12px', borderRadius: 4,
              borderBottom: currentPage === link.key ? '2px solid #111' : 'none',
              background: 'none', border: 'none',
              cursor: 'pointer', transition: '0.2s ease',
            }}>
              {link.label}
            </button>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }}>
          <button style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: '#111', background: 'none', border: 'none', cursor: 'pointer' }}>
            <User size={20} />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: '#111', position: 'relative', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <ShoppingCart size={20} />
            {count > 0 && (
              <span style={{
                position: 'absolute', top: 4, right: 4,
                width: 16, height: 16, background: '#c9a84c', color: '#fff',
                borderRadius: '50%', fontSize: 10, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{count}</span>
            )}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle"
            style={{ width: 38, height: 38, display: 'none', alignItems: 'center', justifyContent: 'center', color: '#111', borderRadius: 4, background: 'none', border: 'none', cursor: 'pointer' }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px 24px', borderTop: '1px solid #e5e7eb', background: '#fff' }}>
          {navLinks.map((link) => (
            <button key={link.key} onClick={() => { navigate(link.key); setMobileOpen(false) }} style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 15, fontWeight: 600, letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: currentPage === link.key ? '#111' : '#6b7280',
              padding: '12px 0',
              background: 'none', border: 'none',
              borderBottom: '1px solid #e5e7eb',
              cursor: 'pointer', textAlign: 'left',
            }}>
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
