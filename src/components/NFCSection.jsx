import { Fragment } from 'react'
import {
  Wifi,
  Smartphone,
  ShieldCheck,
  Zap,
  QrCode,
  Bell,
  Lock,
  Car,
  PawPrint,
  Briefcase,
  User,
  Baby,
} from 'lucide-react'

export default function NFCSection() {
  const cards = [
    {
      icon: Smartphone,
      title: 'Tap Any Phone',
      sub: 'Works on all modern NFC-enabled smartphones',
    },
    {
      icon: Zap,
      title: 'Instant Access',
      sub: 'Quick access to relevant information',
    },
    {
      icon: ShieldCheck,
      title: 'No App Needed',
      sub: 'No downloads or sign-ups. Just tap and connect.',
    },
    {
      icon: QrCode,
      title: 'Dual Mode',
      sub: 'NFC tap + QR scan both supported',
    },
    {
      icon: Lock,
      title: 'Privacy Protected',
      sub: 'Owner details remain hidden and under your control',
      fullWidth: true,
    },
  ]

  const products = [
    { name: 'Vehicle Tags', icon: Car },
    { name: 'Pet Tags', icon: PawPrint },
    { name: 'Luggage Tags', icon: Briefcase },
    { name: 'Senior Citizen Bands', icon: User },
    { name: 'Child Safety Bands', icon: Baby },
  ]

  return (
    <section
      style={{
        background: 'linear-gradient(135deg,#0B2545 0%,#2ebd3a 50%,#081c35 100%)',
        padding: '52px 0 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* dots grid bg */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.07,
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          className="nfc-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: 56,
            alignItems: 'center',
          }}
        >
          {/* ── LEFT: NFC pulse animation ── */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 280, height: 280 }}>
              {/* pulse rings */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(232,248,235,0.3)',
                    animation: `nfcPulse ${1.6 + i * 0.5}s ease-out ${i * 0.4}s infinite`,
                  }}
                />
              ))}

              {/* center orb */}
              <div
                style={{
                  position: 'absolute',
                  inset: '50px',
                  background: 'linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.08))',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 60px rgba(232,248,235,0.2)',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <Wifi size={48} color="#e8f8eb" strokeWidth={1.5} />
                  <div style={{ color: '#e8f8eb', fontWeight: 800, fontSize: 14, marginTop: 8 }}>
                    NFC Ready
                  </div>
                </div>
              </div>

              {/* floating chips */}
              {[
                {
                  top: '8%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  label: 'Tap to Scan',
                  icon: <Smartphone size={16} color="#2ebd3a" />,
                },
                {
                  top: '50%',
                  left: '-5%',
                  transform: 'translateY(-50%)',
                  label: 'Instant Alert',
                  icon: <Bell size={16} color="#2ebd3a" />,
                },
                {
                  bottom: '8%',
                  right: '0%',
                  label: 'No App Needed',
                  icon: <Zap size={16} color="#2ebd3a" />,
                },
              ].map(({ transform, icon, label, ...pos }) => (
                <div
                  key={label}
                  style={{
                    position: 'absolute',
                    ...pos,
                    transform,
                    background: '#e8f8eb',
                    borderRadius: 12,
                    padding: '8px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#2ebd3a',
                    boxShadow: '0 8px 24px rgba(6,78,59,0.3)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {icon}
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: text + cards ── */}
          <div>
            {/* pill badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 100,
                background: 'rgba(46,189,58,0.15)',
                border: '1px solid rgba(46,189,58,0.30)',
                marginBottom: 18,
              }}
            >
              <Wifi size={13} color="#4ade80" />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#4ade80',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                NFC Technology
              </span>
            </div>

            {/* heading */}
            <h2
              style={{
                fontSize: 'clamp(28px,3.8vw,46px)',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 14px',
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
              }}
            >
              NFC Technology —{' '}
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg,#4ade80 0%,#2ebd3a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Tap. Connect. Protect.
              </span>
            </h2>

            {/* description */}
            <p
              style={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: 15.5,
                lineHeight: 1.65,
                margin: '0 0 24px',
                maxWidth: 520,
              }}
            >
              Tap any NFC-enabled smartphone to securely connect with the owner or access emergency contact information when needed. No app. No hassle. Just a simple tap.
            </p>

            {/* feature cards */}
            <div
              className="nfc-features-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}
            >
              {cards.map(({ icon: Icon, title, sub, fullWidth }) => (
                <div
                  key={title}
                  className="nfc-feature-card"
                  style={{
                    gridColumn: fullWidth ? '1 / -1' : 'auto',
                    background: 'rgba(6,26,14,0.42)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(46,189,58,0.15)',
                    borderRadius: '14px',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(46,189,58,0.18)',
                      border: '1px solid rgba(46,189,58,0.30)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color="#4ade80" />
                  </div>
                  <div>
                    <div
                      style={{
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '14.5px',
                        marginBottom: '3px',
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        color: 'rgba(255,255,255,0.62)',
                        fontSize: '12.5px',
                        lineHeight: '1.4',
                      }}
                    >
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Products bar — full bleed at bottom ── */}
      <div
        style={{
          borderTop: '1px solid rgba(46,189,58,0.18)',
          background: 'rgba(6,26,14,0.35)',
          backdropFilter: 'blur(8px)',
          padding: '18px 32px',
          marginTop: '36px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div
            className="products-flex-container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {products.map((prod, index) => (
              <Fragment key={prod.name}>
                {index > 0 && (
                  <div
                    className="product-divider"
                    style={{
                      width: '1px',
                      height: '22px',
                      background: 'rgba(46,189,58,0.25)',
                      alignSelf: 'center',
                    }}
                  />
                )}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '9px',
                    flex: '1',
                    justifyContent: 'center',
                    minWidth: '130px',
                  }}
                >
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(46,189,58,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(46,189,58,0.28)',
                    }}
                  >
                    <prod.icon size={15} color="#4ade80" />
                  </div>
                  <span
                    style={{
                      color: '#e8f8eb',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {prod.name}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes nfcPulse {
          0%   { transform: scale(0.85); opacity: 0.75; }
          100% { transform: scale(1.9);  opacity: 0; }
        }
        .nfc-feature-card {
          transition: all 0.28s cubic-bezier(0.4,0,0.2,1) !important;
        }
        .nfc-feature-card:hover {
          transform: translateY(-2px);
          border-color: rgba(46,189,58,0.35) !important;
          background: rgba(6,26,14,0.60) !important;
          box-shadow: 0 8px 28px rgba(46,189,58,0.10);
        }
        @media (max-width: 1024px) {
          .product-divider { display: none !important; }
          .products-flex-container { justify-content: center !important; gap: 18px !important; }
        }
        @media (max-width: 820px) {
          .nfc-main-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 480px) {
          .nfc-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}