import React, { useState } from 'react'
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, Instagram, Twitter } from 'lucide-react'
import logo from '../assets/logo.png'

export default function ContactPage({ navigate }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = () => {
    if (form.name && form.email && form.message) setSent(true)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fb', fontFamily: "'Barlow', sans-serif" }}>

      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <button onClick={() => navigate('home')} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', color: '#111' }}>
          <ArrowLeft size={18} />
          <img src={logo} alt="logo" style={{ height: 32, width: 32, objectFit: 'contain', borderRadius: 6 }} />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, color: '#111' }}>PERIGO</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.15em', color: '#c9a84c' }}>STORE</div>
          </div>
        </button>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7280' }}>Fale Conosco</span>
      </header>

      {/* Hero da página */}
      <div style={{ background: 'linear-gradient(135deg, #111 0%, #1a1a2e 100%)', padding: '64px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 12 }}>Estamos aqui para ajudar</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px, 8vw, 80px)', color: '#fff', lineHeight: 1, marginBottom: 16 }}>FALE COM A<br />PERIGO STORE</h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto' }}>Dúvidas sobre pedidos, tamanhos, entregas ou autenticidade? Nossa equipe responde em até 2 horas.</p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 40 }} className="contact-grid">

        {/* Info cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { icon: <Mail size={20} />, title: 'E-mail', value: 'contato@perigostore.com.br', sub: 'Respondemos em até 2h' },
            { icon: <Phone size={20} />, title: 'WhatsApp', value: '+55 (11) 943422963', sub: 'Seg–Sex, 9h às 18h' },
            { icon: <MapPin size={20} />, title: 'Localização', value: 'São Paulo – SP', sub: 'Atendimento online para todo o Brasil' },
            { icon: <Clock size={20} />, title: 'Horário', value: 'Seg–Sex: 9h às 18h', sub: 'Sáb: 9h às 13h' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ width: 44, height: 44, background: '#f0f4ff', color: '#1a56db', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: 4 }}>{item.title}</p>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 2 }}>{item.value}</p>
                <p style={{ fontSize: 12, color: '#6b7280' }}>{item.sub}</p>
              </div>
            </div>
          ))}

          {/* Redes sociais */}
          <div style={{ background: '#111', borderRadius: 10, padding: '24px', marginTop: 4 }}>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c9a84c', marginBottom: 16 }}>Nossas Redes</p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[{ Icon: Instagram, label: '@perigostore' }, { Icon: Twitter, label: '@perigostore' }].map(({ Icon, label }, i) => (
                <button key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 14px', cursor: 'pointer', fontSize: 13, fontFamily: "'Barlow', sans-serif" }}>
                  <Icon size={16} /> {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '40px' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: 64, height: 64, background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Send size={28} color="#16a34a" />
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: '#111', marginBottom: 12 }}>MENSAGEM ENVIADA!</h2>
              <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 32 }}>Nossa equipe entrará em contato em até 2 horas.</p>
              <button onClick={() => setSent(false)} style={{ background: '#111', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '14px 32px', borderRadius: 6, border: 'none', cursor: 'pointer' }}>Enviar outra mensagem</button>
            </div>
          ) : (
            <>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, color: '#111', marginBottom: 8 }}>ENVIE UMA MENSAGEM</h2>
              <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 32 }}>Preencha o formulário e retornaremos em breve.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-row">
                {[
                  { name: 'name', label: 'Nome completo', placeholder: 'João Silva' },
                  { name: 'email', label: 'E-mail', placeholder: 'joao@email.com' },
                ].map((f) => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#374151', marginBottom: 6 }}>{f.label}</label>
                    <input name={f.name} value={form[f.name]} onChange={handle} placeholder={f.placeholder}
                      style={{ width: '100%', padding: '12px 14px', fontSize: 14, border: '1px solid #e5e7eb', borderRadius: 6, outline: 'none', fontFamily: "'Barlow', sans-serif", boxSizing: 'border-box' }} />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#374151', marginBottom: 6 }}>Assunto</label>
                <select name="subject" value={form.subject} onChange={handle}
                  style={{ width: '100%', padding: '12px 14px', fontSize: 14, border: '1px solid #e5e7eb', borderRadius: 6, outline: 'none', fontFamily: "'Barlow', sans-serif', background: '#fff'" }}>
                  <option value="">Selecione um assunto</option>
                  <option>Dúvida sobre pedido</option>
                  <option>Troca ou devolução</option>
                  <option>Autenticidade do produto</option>
                  <option>Disponibilidade de tamanho</option>
                  <option>Outro</option>
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#374151', marginBottom: 6 }}>Mensagem</label>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Descreva sua dúvida ou pedido..." rows={5}
                  style={{ width: '100%', padding: '12px 14px', fontSize: 14, border: '1px solid #e5e7eb', borderRadius: 6, outline: 'none', fontFamily: "'Barlow', sans-serif", resize: 'vertical', boxSizing: 'border-box' }} />
              </div>

              <button onClick={submit} style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                background: '#111', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 15, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '16px', borderRadius: 6, border: 'none', cursor: 'pointer',
              }}>
                <Send size={18} /> Enviar Mensagem
              </button>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}