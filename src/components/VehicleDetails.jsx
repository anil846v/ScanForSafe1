import { Car, MapPin, ShieldCheck, Bell, Zap, Lock, Navigation, Phone, Wifi } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function AnimatedItem({ children, delay = 0, visible, style = {} }) {
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.34,1.2,0.64,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  )
}

export default function VehicleDetails() {
  const [sectionRef, visible] = useInView(0.1)

  const mobileFeatures = [
    { icon: Zap,          label: 'Instant Scan',  desc: 'Under 2 seconds',      color: '#f97316', bg: '#fff7ed' },
    { icon: Wifi,         label: 'Always Online', desc: '99.9% uptime',         color: '#0891b2', bg: '#ecfeff' },
    { icon: Lock,         label: 'Encrypted',     desc: 'Bank-level security',  color: '#7c3aed', bg: '#f5f3ff' },
    { icon: Phone,        label: 'Multi-channel', desc: 'App · SMS · WhatsApp', color: '#2ebd3a', bg: '#e8f8eb' },
    { icon: Car,          label: 'Vehicle Info',  desc: 'All details in one scan', color: '#2ebd3a', bg: '#e8f8eb' },
    { icon: Navigation,   label: 'GPS Tracking',  desc: 'Real-time location',   color: '#0891b2', bg: '#ecfeff' },
    { icon: Bell,         label: 'Alert System',  desc: 'Instant notifications', color: '#f97316', bg: '#fff7ed' },
    { icon: ShieldCheck,  label: 'Security',      desc: 'Enterprise grade',     color: '#7c3aed', bg: '#f5f3ff' },
  ]

  const highlights = [
    { icon: Zap,   label: 'Instant Scan',  desc: 'Under 2 seconds',      color: '#f97316', bg: '#fff7ed' },
    { icon: Wifi,  label: 'Always Online', desc: '99.9% uptime',         color: '#0891b2', bg: '#ecfeff' },
    { icon: Lock,  label: 'Encrypted',     desc: 'Bank-level security',  color: '#7c3aed', bg: '#f5f3ff' },
    { icon: Phone, label: 'Multi-channel', desc: 'App · SMS · WhatsApp', color: '#2ebd3a', bg: '#e8f8eb' },
  ]

  const cards = [
    {
      icon: Car, title: 'Vehicle Info', color: '#2ebd3a', bg: '#e8f8eb',
      badge: 'Essential', badgeColor: '#2ebd3a', badgeBg: '#e8f8eb',
      items: ['Registration Number', 'Make & Model', 'Color & Year', 'Insurance Details'],
    },
    {
      icon: Navigation, title: 'GPS Tracking', color: '#0891b2', bg: '#ecfeff',
      badge: 'Live', badgeColor: '#0891b2', badgeBg: '#ecfeff',
      items: ['Live scan location', 'Google Maps link', 'Scan history log', 'Last seen timestamp'],
    },
    {
      icon: Bell, title: 'Alert System', color: '#f97316', bg: '#fff7ed',
      badge: 'Instant', badgeColor: '#f97316', badgeBg: '#fff7ed',
      items: ['Instant app notification', 'WhatsApp for emergencies', 'SMS fallback alert', '5 emergency contacts'],
    },
    {
      icon: ShieldCheck, title: 'Security', color: '#7c3aed', bg: '#f5f3ff',
      badge: 'Pro', badgeColor: '#7c3aed', badgeBg: '#f5f3ff',
      items: ['Tamper-evident sticker', 'Privacy controls', 'Anti-theft mode', 'QR + NFC dual layer'],
    },
  ]

  return (
    <section ref={sectionRef} style={{ background: '#ffffff', padding: '48px 0 56px', overflow: 'hidden' }}>
      <style>{`
        @keyframes gradient-x {
          0%,100% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
        }
        @keyframes float-up {
          0%,100% { transform: translateY(0px) }
          50% { transform: translateY(-6px) }
        }
        .animated-gradient-text {
          background: linear-gradient(135deg, #0B2545 0%, #2ebd3a 40%, #0891b2 70%, #0B2545 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-x 4s ease infinite;
        }
        .highlight-card:hover { transform: translateY(-5px) !important; }
        .feature-card:hover .card-top-line { width: 100% !important; }

        .vd-mobile-grid {
          display: none;
        }
        .vd-mobile-btn {
          display: none;
        }

        @media (max-width: 768px) {
          .vd-desktop-highlights, .vd-desktop-cards {
            display: none !important;
          }
          .vd-mobile-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
            margin-bottom: 24px !important;
          }
          .vd-mobile-btn {
            display: flex !important;
            width: 100% !important;
            background: #2ebd3a !important;
            color: #ffffff !important;
            font-family: 'DM Sans', sans-serif !important;
            font-size: 14px !important;
            font-weight: 700 !important;
            padding: 14px 20px !important;
            border-radius: 12px !important;
            border: none !important;
            cursor: pointer !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 8px !important;
            box-shadow: 0 4px 14px rgba(46, 189, 58, 0.25) !important;
            transition: all 0.2s ease !important;
            text-decoration: none !important;
          }
          .vd-mobile-btn:hover {
            background: #27a231 !important;
            box-shadow: 0 6px 18px rgba(46, 189, 58, 0.35) !important;
          }
        }

        @media (min-width: 601px) and (max-width: 1024px) {
          .vd-desktop-cards {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .vd-desktop-highlights {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .feature-card h3 {
            font-size: 20px !important;
          }
          .feature-card li {
            font-size: 15px !important;
          }
          .highlight-card div {
            font-size: 15px !important;
          }
          .vd-mobile-card h4 {
            font-size: 16px !important;
          }
          .vd-mobile-card p {
            font-size: 13.5px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <AnimatedItem visible={visible} delay={0}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px',
              borderRadius: 100, background: '#e8f8eb', border: '1px solid #c6f0cc', marginBottom: 14,
            }}>
              <Car size={14} color="#2ebd3a" />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#2ebd3a' }}>Vehicle Protection</span>
            </div>
          </AnimatedItem>

          <AnimatedItem visible={visible} delay={120}>
            <h2 className="animated-gradient-text" style={{
              fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.15,
            }}>
              Vehicle Details & Protection
            </h2>
          </AnimatedItem>

          <AnimatedItem visible={visible} delay={220}>
            <p style={{ color: '#4b7a62', fontSize: 15, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              Add your vehicle info once. Let the QR sticker do the rest —&nbsp;
              <strong style={{ color: '#0B2545' }}>24/7 protection</strong>, instant alerts, and GPS tracking
            </p>
          </AnimatedItem>
        </div>

        {/* ── HIGHLIGHT STRIP ── */}
        <div className="vd-desktop-highlights" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gap: 14,
          marginBottom: 28,
        }}>
          {highlights.map(({ icon: Icon, label, desc, color, bg }, i) => (
            <AnimatedItem key={label} visible={visible} delay={320 + i * 80}>
              <div
                className="highlight-card"
                style={{
                  background: bg,
                  border: `1.5px solid ${color}33`,
                  borderRadius: 18, padding: '16px 18px',
                  display: 'flex', alignItems: 'center', gap: 14,
                  transition: 'all .3s cubic-bezier(0.34,1.2,0.64,1)',
                  cursor: 'default',
                  boxShadow: `0 2px 12px ${color}14`,
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 12px 32px ${color}30`
                  e.currentTarget.style.borderColor = color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = `0 2px 12px ${color}14`
                  e.currentTarget.style.borderColor = `${color}33`
                  e.currentTarget.style.transform = ''
                }}
              >
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: color, borderRadius: '18px 0 0 18px' }} />
                <div style={{ width: 44, height: 44, borderRadius: 13, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 12px ${color}22`, border: `1.5px solid ${color}22` }}>
                  <Icon size={21} color={color} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#0B2545', marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 500 }}>{desc}</div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* ── 4 FEATURE CARDS ── */}
        <div className="vd-desktop-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(265px,1fr))', gap: 20 }}>
          {cards.map(({ icon: Icon, title, color, bg, badge, badgeColor, badgeBg, items }, i) => (
            <AnimatedItem key={title} visible={visible} delay={560 + i * 100}>
              <div
                className="feature-card"
                style={{
                  background: '#fafafa', borderRadius: 22, padding: '24px 22px 26px',
                  border: '1.5px solid #e5e7eb',
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  cursor: 'pointer', position: 'relative', overflow: 'hidden',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = `0 24px 52px ${color}28`
                  e.currentTarget.style.borderColor = color
                  e.currentTarget.style.background = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = '#e5e7eb'
                  e.currentTarget.style.background = '#fafafa'
                }}
              >
                <div className="card-top-line" style={{
                  position: 'absolute', top: 0, left: 0, height: 3,
                  width: '40%',
                  background: `linear-gradient(90deg,${color},${color}55)`,
                  borderRadius: '22px 22px 0 0',
                  transition: 'width 0.4s ease',
                }} />

                <div style={{
                  position: 'absolute', bottom: -18, right: -18,
                  width: 80, height: 80, borderRadius: '50%',
                  background: `${color}10`,
                  border: `2px solid ${color}18`,
                }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 15, background: bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 4px 14px ${color}28`,
                    animation: 'float-up 3s ease-in-out infinite',
                  }}>
                    <Icon size={25} color={color} />
                  </div>
                  <span style={{
                    background: badgeBg, color: badgeColor,
                    fontSize: 10, fontWeight: 900, letterSpacing: '.14em',
                    padding: '5px 13px', borderRadius: 999,
                    textTransform: 'uppercase',
                    border: `1.5px solid ${color}40`,
                    boxShadow: `0 2px 8px ${color}18`,
                  }}>
                    {badge}
                  </span>
                </div>

                <h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 900, color: '#0B2545', lineHeight: 1.2 }}>{title}</h3>
                <div style={{ width: 32, height: 3, background: `linear-gradient(90deg,${color},${color}44)`, borderRadius: 999, marginBottom: 14 }} />

                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {items.map((item, idx) => (
                    <li key={item} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      fontSize: 13.5, color: '#374151',
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateX(0)' : 'translateX(-12px)',
                      transition: `opacity 0.5s ease ${700 + i * 100 + idx * 60}ms, transform 0.5s ease ${700 + i * 100 + idx * 60}ms`,
                    }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: 7, background: bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        border: `1px solid ${color}33`,
                      }}>
                        <div style={{ width: 7, height: 7, borderRadius: '50%', background: color }} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* ── MOBILE GRID & CTA (MOBILE ONLY) ── */}
        <div className="vd-mobile-grid">
          {mobileFeatures.map(({ icon: Icon, label, desc, color, bg }) => (
            <div
              key={label}
              className="vd-mobile-card"
              style={{
                background: '#ffffff',
                border: '1.5px solid #e5e7eb',
                borderRadius: 16,
                padding: '16px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: color, borderRadius: '16px 0 0 16px' }} />
              <div style={{
                width: 36, height: 36, borderRadius: 10, background: bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 2px 6px ${color}15`,
              }}>
                <Icon size={18} color={color} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 2px', fontSize: 14.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Sora', sans-serif" }}>{label}</h4>
                <p style={{ margin: 0, fontSize: 12.5, color: '#64748b', fontWeight: 500, lineHeight: 1.35, fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button type="button" className="vd-mobile-btn">
          View Vehicle Details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </button>

      </div>
    </section>
  )
}