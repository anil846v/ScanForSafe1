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

/* ─────────────────────────────────────────────────────────
   ICON 1 – Car  (green SUV, 3D glossy Fluency style)
───────────────────────────────────────────────────────── */
const CarIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cBodyG" x1="0.1" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stopColor="#4ade80"/>
        <stop offset="100%" stopColor="#16a34a"/>
      </linearGradient>
      <linearGradient id="cRoofG" x1="0.1" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="#86efac"/>
        <stop offset="100%" stopColor="#22c55e"/>
      </linearGradient>
      <linearGradient id="cGlassG" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.95"/>
        <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.75"/>
      </linearGradient>
      <linearGradient id="cWheelG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#374151"/>
        <stop offset="100%" stopColor="#111827"/>
      </linearGradient>
      <linearGradient id="cRimG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6ee7b7"/>
        <stop offset="100%" stopColor="#059669"/>
      </linearGradient>
      <linearGradient id="cHlG" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#fde68a"/>
        <stop offset="100%" stopColor="#fbbf24"/>
      </linearGradient>
      <linearGradient id="cShadow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#15803d" stopOpacity="0.22"/>
        <stop offset="100%" stopColor="#15803d" stopOpacity="0"/>
      </linearGradient>
    </defs>

    {/* Soft green circle bg */}
    <circle cx="32" cy="32" r="30" fill="#dcfce7"/>

    {/* Ground shadow */}
    <ellipse cx="32" cy="57" rx="20" ry="4" fill="url(#cShadow)"/>

    {/* Car lower body */}
    <rect x="8" y="32" width="48" height="16" rx="6" fill="url(#cBodyG)"/>

    {/* Cabin / roof – SUV squared shape */}
    <path d="M16 32 C17 18 21 13 32 13 C43 13 47 18 48 32Z" fill="url(#cRoofG)"/>

    {/* Windshield */}
    <path d="M20 32 C21 20 24 16 32 16 C40 16 43 20 44 32Z" fill="url(#cGlassG)" opacity="0.9"/>

    {/* Left side window */}
    <rect x="10" y="18" width="10" height="14" rx="2.5" fill="url(#cGlassG)" opacity="0.8"/>

    {/* Right side window */}
    <rect x="44" y="18" width="10" height="14" rx="2.5" fill="url(#cGlassG)" opacity="0.8"/>

    {/* Windshield gloss streak */}
    <path d="M24 30 L27 17" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.38"/>

    {/* Body shine */}
    <path d="M10 36 Q32 33 54 36" stroke="#86efac" strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round"/>

    {/* Door divider */}
    <line x1="32" y1="32" x2="32" y2="47" stroke="#15803d" strokeWidth="1" opacity="0.35"/>

    {/* Roof rack */}
    <rect x="18" y="12" width="28" height="2.5" rx="1.25" fill="#15803d" opacity="0.4"/>

    {/* Left headlight */}
    <rect x="8" y="34" width="9" height="5" rx="2.5" fill="url(#cHlG)"/>
    <rect x="9" y="35" width="3.5" height="2.5" rx="1" fill="#fff" opacity="0.6"/>

    {/* Right taillight */}
    <rect x="47" y="34" width="9" height="5" rx="2.5" fill="#fca5a5"/>
    <rect x="48" y="35" width="3.5" height="2.5" rx="1" fill="#fff" opacity="0.4"/>

    {/* Left wheel */}
    <circle cx="18" cy="48" r="8" fill="url(#cWheelG)"/>
    <circle cx="18" cy="48" r="5.5" fill="url(#cRimG)"/>
    <circle cx="18" cy="48" r="3" fill="#d1fae5"/>
    <circle cx="18" cy="48" r="1.2" fill="#fff" opacity="0.7"/>
    <line x1="18" y1="43.5" x2="18" y2="52.5" stroke="#065f46" strokeWidth="1" opacity="0.3"/>
    <line x1="13.5" y1="48" x2="22.5" y2="48" stroke="#065f46" strokeWidth="1" opacity="0.3"/>

    {/* Right wheel */}
    <circle cx="46" cy="48" r="8" fill="url(#cWheelG)"/>
    <circle cx="46" cy="48" r="5.5" fill="url(#cRimG)"/>
    <circle cx="46" cy="48" r="3" fill="#d1fae5"/>
    <circle cx="46" cy="48" r="1.2" fill="#fff" opacity="0.7"/>
    <line x1="46" y1="43.5" x2="46" y2="52.5" stroke="#065f46" strokeWidth="1" opacity="0.3"/>
    <line x1="41.5" y1="48" x2="50.5" y2="48" stroke="#065f46" strokeWidth="1" opacity="0.3"/>
  </svg>
)

/* ─────────────────────────────────────────────────────────
   ICON 2 – QR + NFC
───────────────────────────────────────────────────────── */
const QRIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="42" height="42" rx="10" fill="#2563eb"/>
    <rect x="7" y="7" width="13" height="13" rx="2.5" fill="#fff"/>
    <rect x="9" y="9" width="9" height="9" rx="1.5" fill="#2563eb"/>
    <rect x="11" y="11" width="5" height="5" rx="1" fill="#fff"/>
    <rect x="26" y="7" width="13" height="13" rx="2.5" fill="#fff"/>
    <rect x="28" y="9" width="9" height="9" rx="1.5" fill="#2563eb"/>
    <rect x="30" y="11" width="5" height="5" rx="1" fill="#fff"/>
    <rect x="7" y="26" width="13" height="13" rx="2.5" fill="#fff"/>
    <rect x="9" y="28" width="9" height="9" rx="1.5" fill="#2563eb"/>
    <rect x="11" y="30" width="5" height="5" rx="1" fill="#fff"/>
    <rect x="26" y="22" width="4" height="4" rx="0.8" fill="#fff"/>
    <rect x="32" y="22" width="4" height="4" rx="0.8" fill="#fff"/>
    <rect x="38" y="22" width="4" height="4" rx="0.8" fill="#fff"/>
    <rect x="22" y="26" width="4" height="4" rx="0.8" fill="#fff"/>
    <rect x="26" y="26" width="4" height="4" rx="0.8" fill="#fff"/>
    <rect x="22" y="32" width="4" height="4" rx="0.8" fill="#fff"/>
    <rect x="32" y="32" width="4" height="4" rx="0.8" fill="#fff"/>
    <rect x="38" y="32" width="4" height="4" rx="0.8" fill="#fff"/>
    <rect x="26" y="38" width="4" height="4" rx="0.8" fill="#fff"/>
    <rect x="38" y="38" width="4" height="4" rx="0.8" fill="#fff"/>
    <rect x="34" y="36" width="28" height="26" rx="7" fill="#1d4ed8" stroke="#fff" strokeWidth="1.5"/>
    <circle cx="48" cy="49" r="1.8" fill="#fff"/>
    <path d="M43.5 49 C43.5 46 45.5 44 48 44 C50.5 44 52.5 46 52.5 49" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M40.5 49 C40.5 44.2 43.8 40.5 48 40.5 C52.2 40.5 55.5 44.2 55.5 49" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7"/>
  </svg>
)

/* ─────────────────────────────────────────────────────────
   ICON 3 – Emergency Siren
───────────────────────────────────────────────────────── */
const SirenIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="34" r="28" fill="#fff7ed"/>
    <line x1="32" y1="4" x2="32" y2="10" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="18" y1="8" x2="21" y2="13" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="46" y1="8" x2="43" y2="13" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="9"  y1="19" x2="14" y2="21" stroke="#f97316" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <line x1="55" y1="19" x2="50" y2="21" stroke="#f97316" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <path d="M18 38 C18 28 24 22 32 22 C40 22 46 28 46 38Z" fill="#f97316"/>
    <rect x="14" y="38" width="36" height="16" rx="7" fill="#f97316"/>
    <circle cx="32" cy="26" r="9" fill="#fde047"/>
    <circle cx="32" cy="26" r="6" fill="#fef9c3"/>
    <circle cx="32" cy="26" r="3.5" fill="#fde047"/>
    <circle cx="30" cy="24" r="1.5" fill="#fff" opacity="0.8"/>
    <path d="M18 40 Q32 37.5 46 40" stroke="#fb923c" strokeWidth="1.2" fill="none" opacity="0.5" strokeLinecap="round"/>
    <rect x="22" y="45" width="20" height="2.5" rx="1.25" fill="#ea580c" opacity="0.4"/>
    <rect x="22" y="49" width="20" height="2.5" rx="1.25" fill="#ea580c" opacity="0.4"/>
    <rect x="24" y="53" width="16" height="5" rx="2.5" fill="#ea580c"/>
  </svg>
)

/* ─────────────────────────────────────────────────────────
   ICON 4 – Shield + Lock
───────────────────────────────────────────────────────── */
const ShieldIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="34" r="28" fill="#f5f3ff"/>
    <path
      d="M32 8L10 18 v18 c0 14 9 25 22 30 13-5 22-16 22-30 V18 Z"
      fill="#ede9fe"
      stroke="#8b5cf6"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M25 33 v-5 a7 7 0 0 1 14 0 v5"
      stroke="#7c3aed"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <rect x="22" y="33" width="20" height="15" rx="4" fill="#7c3aed"/>
    <circle cx="32" cy="39" r="3" fill="#fff"/>
    <rect x="30.5" y="41" width="3" height="4.5" rx="1.5" fill="#fff"/>
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

const BannerSUV = () => (
  <svg width="116" height="72" viewBox="0 0 120 76" fill="none">
    <ellipse cx="60" cy="68" rx="44" ry="5" fill="#22c55e" opacity="0.18"/>
    <rect x="6" y="32" width="108" height="28" rx="10" fill="#22c55e"/>
    <rect x="22" y="14" width="76" height="24" rx="9" fill="#4ade80"/>
    <rect x="26" y="16" width="28" height="18" rx="4" fill="#bfdbfe" opacity="0.85"/>
    <rect x="66" y="16" width="26" height="18" rx="4" fill="#bfdbfe" opacity="0.85"/>
    <circle cx="28" cy="60" r="11" fill="#1f2937"/>
    <circle cx="28" cy="60" r="6.5" fill="#374151"/>
    <circle cx="92" cy="60" r="11" fill="#1f2937"/>
    <circle cx="92" cy="60" r="6.5" fill="#374151"/>
    <rect x="6" y="35" width="11" height="6" rx="3" fill="#fde047" opacity="0.95"/>
    <rect x="103" y="35" width="11" height="6" rx="3" fill="#fde047" opacity="0.95"/>
    <rect x="29" y="12" width="62" height="4" rx="2" fill="#15803d" opacity="0.6"/>
    <line x1="60" y1="34" x2="60" y2="58" stroke="#fff" strokeWidth="0.8" opacity="0.28"/>
  </svg>
)

export default function VehicleDetails() {
  const [ref, visible] = useInView()

  const cards = [
    {
      illo: <CarIcon />,
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
      illo: <QRIcon />,
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
      illo: <SirenIcon />,
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
      illo: <ShieldIcon />,
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

          <Fade visible={visible} delay={80}>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, margin: '0 0 14px', lineHeight: 1.1, color: '#0f172a', letterSpacing: '-0.03em' }}>
              Everything Your Vehicle{' '}
              <span style={{ color: '#22c55e' }}>Tag Can Do</span>
            </h2>
          </Fade>

          <Fade visible={visible} delay={150}>
            <p style={{ color: '#64748b', fontSize: 15.5, maxWidth: 520, margin: '0 auto', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
              One scan connects the right people at the right time — during emergencies, lost-and-found cases, or roadside situations
            </p>
          </Fade>
        </div>

        {/* 4-CARD GRID */}
        <div className="vd-grid">
          {cards.map((card, i) => (
            <Fade key={card.title} visible={visible} delay={230 + i * 80} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="vd-card">
                <div style={{ position: 'absolute', top: -18, right: -18, width: 110, height: 110, borderRadius: '50%', background: card.bg, opacity: 0.75, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: -4, right: -4, pointerEvents: 'none', zIndex: 0 }}>
                  {card.corner}
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18, position: 'relative', zIndex: 1 }}>
                  <div
                    className="vd-icon-box"
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 18,
                      background: card.bg,
                      border: `1.5px solid ${card.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: `0 4px 16px ${card.color}14`,
                    }}
                  >
                    {card.illo}
                  </div>
                  <span style={{ background: card.badgeBg, color: card.badgeColor, fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', padding: '4px 11px', borderRadius: 999, textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", whiteSpace: 'nowrap', marginTop: 4, border: `1px solid ${card.color}25` }}>
                    {card.badge}
                  </span>
                </div>

                <div style={{ width: 28, height: 2.5, borderRadius: 99, background: card.color, marginBottom: 12, position: 'relative', zIndex: 1 }} />

                <h3 style={{ margin: '0 0 15px', fontSize: 16.5, fontWeight: 800, color: '#0f172a', lineHeight: 1.22, fontFamily: "'Sora', sans-serif", position: 'relative', zIndex: 1 }}>
                  {card.title}
                </h3>

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
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 46, height: 46, borderRadius: 13, background: '#f0fdf4', border: '1.5px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 3px 10px #22c55e18' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
              <BannerSUV />
              <div style={{ width: 50, height: 50, background: '#0f172a', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(15,23,42,0.28)' }}>
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