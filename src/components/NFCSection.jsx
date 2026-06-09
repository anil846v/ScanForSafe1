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
        background:
          'linear-gradient(135deg,#0B2545 0%,#2ebd3a 50%,#081c35 100%)',
        padding: '60px 0',
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
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          className="nfc-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 50,
            alignItems: 'center',
          }}
        >
          {/* LEFT (Unaltered, as requested) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: 280,
                height: 280,
              }}
            >
              {/* pulse rings */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(232,248,235,0.3)',
                    animation: `nfcPulse ${
                      1.6 + i * 0.5
                    }s ease-out ${i * 0.4}s infinite`,
                  }}
                />
              ))}

              {/* center */}
              <div
                style={{
                  position: 'absolute',
                  inset: '50px',
                  background:
                    'linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.08))',
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
                  <Wifi
                    size={48}
                    color="#e8f8eb"
                    strokeWidth={1.5}
                  />

                  <div
                    style={{
                      color: '#e8f8eb',
                      fontWeight: 800,
                      fontSize: 14,
                      marginTop: 8,
                    }}
                  >
                    NFC Ready
                  </div>
                </div>
              </div>

              {/* chips */}
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
              ].map(({ transform, ...rest }) => (
                <div
                  key={rest.label}
                  style={{
                    position: 'absolute',
                    ...rest,
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
                  {rest.icon}
                  {rest.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 100,
                background: 'rgba(46, 189, 58, 0.15)',
                border: '1px solid rgba(46, 189, 58, 0.25)',
                marginBottom: 16,
              }}
            >
              <Wifi size={14} color="#4ade80" />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#4ade80',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                NFC Technology
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 3.8vw, 46px)',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 16px',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              NFC Technology – <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #4ade80 0%, #2ebd3a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Tap. Connect. Protect.
              </span>
            </h2>

            <p
              className="nfc-desc"
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '32px',
                maxWidth: '560px',
              }}
            >
              Tap any NFC-enabled smartphone to securely connect with the owner or access emergency contact information when needed. No app. No hassle. Just a simple tap.
            </p>

            <div
              className="nfc-features-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              {cards.map(({ icon: Icon, title, sub, fullWidth }) => (
                <div
                  key={title}
                  className="nfc-feature-card"
                  style={{
                    gridColumn: fullWidth ? '1 / -1' : 'auto',
                    background: 'rgba(6, 26, 14, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(46, 189, 58, 0.15)',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(46, 189, 58, 0.15)',
                      border: '1px solid rgba(46, 189, 58, 0.3)',
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
                      className="nfc-card-title"
                      style={{
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '15px',
                        marginBottom: '4px',
                      }}
                    >
                      {title}
                    </div>
                    <div
                      className="nfc-card-sub"
                      style={{
                        color: 'rgba(255, 255, 255, 0.65)',
                        fontSize: '13px',
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

          {/* Bottom Products Container */}
          <div
            style={{
              gridColumn: '1 / -1',
              border: '1px solid rgba(46, 189, 58, 0.2)',
              borderRadius: '24px',
              background: 'rgba(6, 26, 14, 0.3)',
              backdropFilter: 'blur(8px)',
              padding: '24px',
              marginTop: '20px',
              width: '100%',
            }}
          >
            <div
              style={{
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '20px',
                textAlign: 'left',
              }}
            >
              Available Across ScanForSafe Products
            </div>

            <div
              className="products-flex-container"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              {products.map((prod, index) => (
                <Fragment key={prod.name}>
                  {index > 0 && (
                    <div
                      className="product-divider"
                      style={{
                        width: '1px',
                        height: '24px',
                        background: 'rgba(46, 189, 58, 0.25)',
                        alignSelf: 'center',
                      }}
                    />
                  )}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      flex: '1',
                      justifyContent: 'center',
                      minWidth: '150px',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'rgba(46, 189, 58, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1px solid rgba(46, 189, 58, 0.3)',
                      }}
                    >
                      <prod.icon size={16} color="#4ade80" />
                    </div>
                    <span
                      style={{
                        color: '#e8f8eb',
                        fontSize: '14px',
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
      </div>

      <style>{`
        @keyframes nfcPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }

          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        .nfc-feature-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .nfc-feature-card:hover {
          transform: translateY(-2px);
          border-color: rgba(46, 189, 58, 0.35) !important;
          background: rgba(6, 26, 14, 0.55) !important;
          box-shadow: 0 10px 30px rgba(46, 189, 58, 0.08);
        }

        @media (max-width: 1024px) {
          .product-divider {
            display: none !important;
          }
          .products-flex-container {
            justify-content: center !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 768px) {
          .nfc-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (min-width: 601px) and (max-width: 1024px) {
          .nfc-desc {
            font-size: 17.5px !important;
            line-height: 1.75 !important;
          }
          .nfc-card-title {
            font-size: 15.5px !important;
          }
          .nfc-card-sub {
            font-size: 13.5px !important;
          }
          .nfc-bottom-title {
            font-size: 15.5px !important;
          }
          .nfc-bottom-sub {
            font-size: 13.5px !important;
          }
        }
        @media (max-width: 480px) {
          .nfc-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}