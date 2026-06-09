import React, { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.05) {
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

function Fade({ children, delay = 0, visible, style = {} }) {
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  )
}

const Check = ({ color }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
    <circle cx="9" cy="9" r="8.5" fill={`${color}18`} stroke={color} strokeWidth="1"/>
    <path d="M5.5 9.2l2.3 2.3 4.2-4.8" stroke={color} strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ── CORNER DECORATIONS ── */
const CornerCar = () => (
  <svg width="108" height="70" viewBox="0 0 108 70" fill="none" style={{ opacity: 0.11 }}>
    <ellipse cx="54" cy="63" rx="36" ry="7" fill="#22c55e"/>
    <rect x="5" y="27" width="98" height="28" rx="11" fill="#22c55e"/>
    <rect x="19" y="10" width="70" height="24" rx="9" fill="#22c55e"/>
    <rect x="23" y="12" width="23" height="19" rx="4" fill="#fff" opacity="0.5"/>
    <rect x="60" y="12" width="23" height="19" rx="4" fill="#fff" opacity="0.5"/>
    <circle cx="23" cy="55" r="11" fill="#22c55e"/>
    <circle cx="85" cy="55" r="11" fill="#22c55e"/>
  </svg>
)

const CornerPhone = () => (
  <svg width="78" height="108" viewBox="0 0 78 108" fill="none" style={{ opacity: 0.11 }}>
    <rect x="9" y="5" width="50" height="86" rx="11" fill="#3b82f6"/>
    <rect x="15" y="13" width="38" height="58" rx="5" fill="#fff" opacity="0.4"/>
    <circle cx="34" cy="84" r="5" fill="#fff" opacity="0.55"/>
    <path d="M59 36 C71 36 77 42 77 48 C77 54 71 60 59 60" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" fill="none"/>
    <path d="M59 44 C64 44 67 46 67 48 C67 50 64 52 59 52" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <circle cx="59" cy="48" r="3" fill="#3b82f6"/>
  </svg>
)

const CornerAmbulance = () => (
  <svg width="106" height="66" viewBox="0 0 106 66" fill="none" style={{ opacity: 0.11 }}>
    <rect x="4" y="20" width="70" height="34" rx="8" fill="#f97316"/>
    <rect x="74" y="30" width="28" height="24" rx="6" fill="#f97316"/>
    <circle cx="19" cy="54" r="10" fill="#f97316"/>
    <circle cx="62" cy="54" r="10" fill="#f97316"/>
    <circle cx="88" cy="54" r="10" fill="#f97316"/>
    <rect x="15" y="26" width="18" height="16" rx="3" fill="#fff" opacity="0.5"/>
    <path d="M24 30v8M20 34h8" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="7" y="8" width="26" height="15" rx="5" fill="#f97316"/>
    <circle cx="13" cy="10" r="4" fill="#fde047" opacity="0.8"/>
  </svg>
)

const CornerShield = () => (
  <svg width="80" height="90" viewBox="0 0 80 90" fill="none" style={{ opacity: 0.11 }}>
    <path d="M40 4L5 18v28c0 22 14 40 35 50 21-10 35-28 35-50V18L40 4z" fill="#8b5cf6"/>
    <path d="M27 49l10 10L53 37" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function VehicleDetails() {
  const [ref, visible] = useInView()

  const cards = [
    {
      img: '/essential.png',
      imgBg: '#f0fdf4',
      corner: <CornerCar />,
      badge: 'ESSENTIAL',
      badgeColor: '#16a34a',
      badgeBg: '#dcfce7',
      title: 'Vehicle Information',
      color: '#16a34a',
      bg: '#f0fdf4',
      border: '#bbf7d0',
      items: ['Registration Number', 'Make & Model', 'Vehicle Type', 'Optional Notes'],
    },
    {
      img: '/public.png',
      imgBg: '#eff6ff',
      corner: <CornerPhone />,
      badge: 'SMART',
      badgeColor: '#1d4ed8',
      badgeBg: '#dbeafe',
      title: 'QR + NFC Technology',
      color: '#2563eb',
      bg: '#eff6ff',
      border: '#bfdbfe',
      items: ['QR Code Access', 'NFC Tap Support', 'Fast Identification', 'Easy Registration'],
    },
    {
      img: '/helpful.png',
      imgBg: '#fff7ed',
      corner: <CornerAmbulance />,
      badge: 'HELPFUL',
      badgeColor: '#c2410c',
      badgeBg: '#ffedd5',
      title: 'Emergency Assistance',
      color: '#f97316',
      bg: '#fff7ed',
      border: '#fed7aa',
      items: ['Report Emergency', 'Contact Vehicle Owner', 'Message Vehicle Owner', 'Emergency Contact Access'],
    },
    {
      img: '/secure.png',
      imgBg: '#faf5ff',
      corner: <CornerShield />,
      badge: 'SECURE',
      badgeColor: '#6d28d9',
      badgeBg: '#ede9fe',
      title: 'Privacy & Protection',
      color: '#8b5cf6',
      bg: '#faf5ff',
      border: '#e9d5ff',
      items: ['Owner Details Hidden', 'Secure Owner Connection', 'Privacy Controlled Sharing', 'Tamper-Resistant Vehicle Tag'],
    },
  ]

  return (
    <section ref={ref} style={{ background: '#f8fafc', padding: '64px 0 72px', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        .vd-outer { max-width: 1160px; margin: 0 auto; padding: 0 28px; }
        .vd-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          align-items: stretch;
        }
        .vd-card {
          background: #ffffff;
          border-radius: 22px;
          padding: 26px 22px 24px;
          border: 1.5px solid #e8edf3;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          box-shadow: 0 2px 14px rgba(15,23,42,0.045);
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1), box-shadow 0.28s ease, border-color 0.2s;
          cursor: pointer;
        }
        .vd-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(15,23,42,0.10);
          border-color: #d1d5db;
        }
        .vd-icon-box {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .vd-card:hover .vd-icon-box {
          transform: scale(1.08);
        }
        .vd-banner {
          background: #ffffff;
          border-radius: 18px;
          padding: 18px 28px;
          border: 1.5px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 18px;
          box-shadow: 0 4px 20px rgba(15,23,42,0.04);
          flex-wrap: wrap;
        }
        @media (max-width: 920px) {
          .vd-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .vd-grid { grid-template-columns: 1fr !important; }
          .vd-outer { padding: 0 16px; }
          .vd-banner { flex-direction: column; align-items: flex-start; padding: 18px 20px; }
        }
      `}</style>

      <div className="vd-outer">

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 38 }}>
          <Fade visible={visible} delay={0}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 14px', borderRadius: 100, background: '#f0fdf4', border: '1.5px solid #bbf7d0', marginBottom: 16 }}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <circle cx="5.5" cy="5.5" r="5" fill="#22c55e" opacity="0.25"/>
                <circle cx="5.5" cy="5.5" r="3" fill="#16a34a"/>
              </svg>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#16a34a', fontFamily: "'Sora', sans-serif", letterSpacing: '0.06em' }}>
                Vehicle Protection
              </span>
            </div>
          </Fade>

          <Fade visible={visible} delay={120}>
            <h2 className="animated-gradient-text" style={{
              fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.15,
            }}>
              Best Vehicle Owner Contact QR Stickers
            </h2>
          </Fade>

          <Fade visible={visible} delay={220}>
            <p style={{ color: '#4b7a62', fontSize: 15, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
              Get the <strong>best anti theft sticker for motorcycle</strong> security and <strong>top bike safety stickers with QR codes</strong>. Get instant scan notifications, GPS tracking, and secure vehicle owner contact alerts.
            </p>
          </Fade>
        </div>

        {/* 4-CARD GRID */}
        <div className="vd-grid">
          {cards.map((card, i) => (
            <Fade key={card.title} visible={visible} delay={230 + i * 80} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="vd-card">
                {/* Soft circle bg decoration */}
                <div style={{ position: 'absolute', top: -18, right: -18, width: 110, height: 110, borderRadius: '50%', background: card.bg, opacity: 0.75, pointerEvents: 'none' }} />
                {/* Corner watermark */}
                <div style={{ position: 'absolute', bottom: -4, right: -4, pointerEvents: 'none', zIndex: 0 }}>
                  {card.corner}
                </div>

                {/* Icon + Badge row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18, position: 'relative', zIndex: 1 }}>
                  <div
                    className="vd-icon-box"
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 18,
                      background: card.imgBg,
                      border: `1.5px solid ${card.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: `0 4px 16px ${card.color}14`,
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{ width: 52, height: 52, objectFit: 'contain' }}
                    />
                  </div>
                  <span style={{
                    background: card.badgeBg,
                    color: card.badgeColor,
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    padding: '4px 11px',
                    borderRadius: 999,
                    textTransform: 'uppercase',
                    fontFamily: "'DM Sans', sans-serif",
                    whiteSpace: 'nowrap',
                    marginTop: 4,
                    border: `1px solid ${card.color}25`
                  }}>
                    {card.badge}
                  </span>
                </div>

                {/* Color accent line */}
                <div style={{ width: 28, height: 2.5, borderRadius: 99, background: card.color, marginBottom: 12, position: 'relative', zIndex: 1 }} />

                {/* Title */}
                <h3 style={{ margin: '0 0 15px', fontSize: 16.5, fontWeight: 800, color: '#0f172a', lineHeight: 1.22, fontFamily: "'Sora', sans-serif", position: 'relative', zIndex: 1 }}>
                  {card.title}
                </h3>

                {/* Feature list */}
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, position: 'relative', zIndex: 1 }}>
                  {card.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13.5, color: '#374151', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, lineHeight: 1.4 }}>
                      <Check color={card.color} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          ))}
        </div>

        {/* BOTTOM BANNER */}
        <Fade visible={visible} delay={700}>
          <div className="vd-banner">
            {/* Left: shield icon + text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 46, height: 46, borderRadius: 13,
                background: '#f0fdf4', border: '1.5px solid #bbf7d0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, boxShadow: '0 3px 10px #22c55e18'
              }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2L3 6v7c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6L11 2z" fill="url(#bs)" stroke="#16a34a" strokeWidth="0.5"/>
                  <path d="M7 11.5l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="bs" x1="3" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4ade80"/>
                      <stop offset="1" stopColor="#16a34a"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15.5, color: '#0f172a', fontFamily: "'Sora', sans-serif", lineHeight: 1.25 }}>
                  One Scan Can Make a Big Difference
                </div>
                <div style={{ fontSize: 13, color: '#6b7280', marginTop: 4, fontFamily: "'DM Sans', sans-serif", maxWidth: 460, lineHeight: 1.55 }}>
                  Connect the right people at the right time during vehicle-related situations, emergencies, or lost-and-found cases.
                </div>
              </div>
            </div>

            {/* Right: vehicle image + QR icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
              {/* Vehicle detail image */}
              <img
                src="/vechicledetails.png"
                alt="Vehicle"
                style={{
                  height: 56,
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: 10,
                  display: 'block',
                }}
              />
              {/* QR icon box */}
              <div style={{
                width: 50, height: 50,
                background: '#0f172a',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(15,23,42,0.28)',
                flexShrink: 0,
              }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="2" width="10" height="10" rx="2" stroke="#fff" strokeWidth="1.5"/>
                  <rect x="4" y="4" width="6" height="6" rx="1" fill="#fff"/>
                  <rect x="16" y="2" width="10" height="10" rx="2" stroke="#fff" strokeWidth="1.5"/>
                  <rect x="18" y="4" width="6" height="6" rx="1" fill="#fff"/>
                  <rect x="2" y="16" width="10" height="10" rx="2" stroke="#fff" strokeWidth="1.5"/>
                  <rect x="4" y="18" width="6" height="6" rx="1" fill="#fff"/>
                  <rect x="16" y="16" width="4" height="4" rx="0.8" fill="#fff"/>
                  <rect x="22" y="16" width="4" height="4" rx="0.8" fill="#fff"/>
                  <rect x="16" y="22" width="4" height="4" rx="0.8" fill="#fff"/>
                  <rect x="22" y="22" width="4" height="4" rx="0.8" fill="#fff"/>
                </svg>
              </div>
            </div>
          </div>
        </Fade>

      </div>
    </section>
  )
}