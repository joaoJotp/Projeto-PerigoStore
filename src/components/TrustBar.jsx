import React from 'react'
import { Truck, ShieldCheck, CreditCard } from 'lucide-react'

const items = [
  { icon: <Truck size={28} strokeWidth={1.5} />, title: 'Entrega Rápida', sub: 'Para todo o Brasil' },
  { icon: <ShieldCheck size={28} strokeWidth={1.5} />, title: 'Autenticidade Garantida', sub: 'Produtos de 1ª Linha' },
  { icon: <CreditCard size={28} strokeWidth={1.5} />, title: 'Pagamento Seguro', sub: 'Até 12x no Cartão' },
]

export default function TrustBar() {
  return (
    <section style={{ background: '#f0f2f5', borderBottom: '1px solid #e5e7eb', padding: '28px 0' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 24px',
        display: 'flex', justifyContent: 'center', gap: 64,
        flexWrap: 'wrap',
      }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ color: '#1a56db', flexShrink: 0 }}>{item.icon}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <strong style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 14, fontWeight: 700, letterSpacing: '0.04em',
                textTransform: 'uppercase', color: '#111',
              }}>{item.title}</strong>
              <span style={{
                fontSize: 12, fontWeight: 500, color: '#6b7280',
                textTransform: 'uppercase', letterSpacing: '0.05em',
              }}>{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}