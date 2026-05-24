import React from 'react'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../CartContext'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQty, total, clearCart } = useCart()

  const fmt = (v) => `R$ ${v.toFixed(2).replace('.', ',')}`

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)',
          zIndex: 200, backdropFilter: 'blur(2px)',
          animation: 'fadeIn 0.25s ease',
        }}
      />

      {/* Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '100%', maxWidth: 420,
        background: '#fff', zIndex: 201,
        display: 'flex', flexDirection: 'column',
        boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
        animation: 'slideIn 0.3s ease',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid #e5e7eb',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ShoppingBag size={20} color="#111" />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#111' }}>
              Seu Carrinho
            </span>
            {items.length > 0 && (
              <span style={{ background: '#111', color: '#fff', borderRadius: '50%', width: 20, height: 20, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {items.reduce((s, i) => s + i.qty, 0)}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', borderRadius: 6, background: '#f5f5f5', border: 'none', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: 80 }}>
              <ShoppingBag size={48} color="#e5e7eb" style={{ margin: '0 auto 16px' }} />
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, color: '#9ca3af', letterSpacing: '0.04em' }}>SEU CARRINHO ESTÁ VAZIO</p>
              <p style={{ fontSize: 13, color: '#c9a4a4', marginTop: 8 }}>Adicione produtos para continuar</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.key} style={{
                display: 'flex', gap: 14,
                background: '#fafafa', borderRadius: 10,
                padding: 12, border: '1px solid #f0f0f0',
              }}>
                <div style={{ width: 80, height: 80, borderRadius: 8, overflow: 'hidden', flexShrink: 0, background: '#f0f2f5' }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, color: '#111', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</p>
                  <p style={{ fontSize: 12, color: '#6b7280', marginBottom: 8 }}>Tam: {item.size}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: '#1a56db' }}>{fmt(item.price * item.qty)}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <button onClick={() => updateQty(item.key, -1)} style={{ width: 26, height: 26, background: '#eee', border: 'none', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: 13, fontWeight: 700, minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.key, 1)} style={{ width: 26, height: 26, background: '#111', color: '#fff', border: 'none', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <Plus size={12} />
                      </button>
                      <button onClick={() => removeFromCart(item.key)} style={{ width: 26, height: 26, background: '#fee2e2', color: '#e53e3e', border: 'none', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: 4 }}>
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: '#6b7280' }}>Subtotal</span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 15, fontWeight: 700, color: '#111' }}>{fmt(total)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{ fontSize: 13, color: '#6b7280' }}>Frete</span>
              <span style={{ fontSize: 13, color: '#16a34a', fontWeight: 600 }}>Grátis acima de R$ 299</span>
            </div>
            <button
              onClick={() => alert('Processando pagamento... (integração com gateway a configurar)')}
              style={{
                width: '100%', padding: '15px', background: '#111', color: '#fff',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                borderRadius: 6, border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}
            >
              Finalizar Compra <ArrowRight size={16} />
            </button>
            <button
              onClick={clearCart}
              style={{
                width: '100%', padding: '10px', marginTop: 8, background: 'none',
                color: '#9ca3af', fontSize: 12, border: 'none', cursor: 'pointer',
              }}
            >
              Limpar carrinho
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideIn { from { transform: translateX(100%) } to { transform: translateX(0) } }
      `}</style>
    </>
  )
}
