import { Heart, Phone, AlertTriangle, Wifi, QrCode, ShieldCheck, User, Droplets, Watch } from 'lucide-react'
import oldman from "/assets/oldman.png";
export default function SeniorCitizenSection() {
  const mobileSeniorFeatures = [
    { icon: Heart,          color: '#ef4444', bg: '#fef2f2', title: 'Medical Profile',     desc: 'Blood group, conditions, medications & more' },
    { icon: AlertTriangle,  color: '#f97316', bg: '#fff7ed', title: 'Emergency Alerts',    desc: 'Instant SMS & WhatsApp alerts to family' },
    { icon: QrCode,         color: '#2ebd3a', bg: '#f0fdf4', title: 'NFC + QR Support',    desc: 'Works with NFC tap or QR code scan' },
    { icon: Watch,          color: '#0891b2', bg: '#ecfeff', title: 'Smart Band Support',  desc: 'Wearable ID band for 24/7 safety' },
  ]

  return (
    <section style={{ background: 'linear-gradient(180deg,#f8fafc 0%,#e8f8eb 100%)', padding: '48px 0 56px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 20px', borderRadius: 100,
            background: '#fff', border: '1.5px solid #e8f8eb', marginBottom: 14,
            boxShadow: '0 2px 8px rgba(22,101,52,0.08)',
          }}>
            <Heart size={14} color="#2ebd3a" fill="#2ebd3a" />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#2ebd3a', fontFamily: "'Sora', sans-serif" }}>Senior Citizen Protection</span>
          </div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, color: '#0B2545', margin: '0 0 12px', fontFamily: "'Sora', sans-serif" }}>
            Emergency Protection for
            <span style={{ color: '#2ebd3a' }}> Senior Citizens</span>
          </h2>
          <p style={{ color: '#4b7a62', fontSize: 15, maxWidth: 520, margin: '0 auto', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
            One scan gives responders instant access to medical details, blood group, and emergency contacts — no smartphone needed
          </p>
        </div>

        {/* DESKTOP VIEW GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}
          className="senior-grid">

          {/* LEFT — profile card mockup */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              background: '#fff', borderRadius: 28, padding: 24, maxWidth: 360, width: '100%',
              boxShadow: '0 20px 60px rgba(6,78,59,0.12)', border: '1.5px solid #e8f8eb',
            }}>
              {/* header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, paddingBottom: 18, borderBottom: '1px solid #f8fafc' }}>
                <div style={{
                  width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg,#2ebd3a,#0B2545)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(22,101,52,0.25)', flexShrink: 0,
                }}>
                  <User size={28} color="#e8f8eb" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 17, color: '#0B2545' }}>Ramesh Nair</div>
                  <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>Age: 72 • Nellore, AP</div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 4,
                    background: '#e8f8eb', borderRadius: 6, padding: '2px 8px',
                    fontSize: 11, fontWeight: 700, color: '#2ebd3a',
                  }}>
                    <ShieldCheck size={10} /> Protected
                  </div>
                </div>
              </div>

              {/* medical info */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 9 }}>
                  Medical Information
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
                  {[
                    { label: 'Blood Group', value: 'B+',         icon: <Droplets size={13} color="#ef4444" /> },
                    { label: 'Condition',   value: 'Diabetic',   icon: <Heart size={13} color="#f97316" /> },
                    { label: 'Allergies',   value: 'Penicillin', icon: <AlertTriangle size={13} color="#eab308" /> },
                    { label: 'Doctor',      value: 'Dr. Reddy',  icon: <User size={13} color="#2ebd3a" /> },
                  ].map(({ label, value, icon }) => (
                    <div key={label} style={{
                      background: '#f9fafb', borderRadius: 10, padding: '9px 11px',
                      border: '1px solid #f8fafc',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                        {icon}
                        <span style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600 }}>{label}</span>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#11355e' }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* emergency contacts */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 9 }}>
                  Emergency Contacts
                </div>
                {[
                  { name: 'Suresh Nair (Son)',       phone: '+91 98765XXXXX' },
                  { name: 'Lakshmi Nair (Daughter)', phone: '+91 87654XXXXX' },
                ].map(c => (
                  <div key={c.name} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '8px 11px', background: '#f8fafc', borderRadius: 10, marginBottom: 6,
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#11355e' }}>{c.name}</span>
                    <button style={{
                      padding: '4px 12px', borderRadius: 8, background: '#2ebd3a',
                      color: '#fff', fontSize: 11, fontWeight: 700, border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}>
                      <Phone size={11} /> Call
                    </button>
                  </div>
                ))}
              </div>

              {/* NFC + QR */}
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{
                  flex: 1, background: 'linear-gradient(135deg,#0B2545,#2ebd3a)',
                  borderRadius: 12, padding: '11px 0', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: 6,
                }}>
                  <Wifi size={14} color="#e8f8eb" />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#e8f8eb' }}>NFC Tap</span>
                </div>
                <div style={{
                  flex: 1, background: '#f8fafc', borderRadius: 12, padding: '11px 0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  border: '1px solid #e8f8eb',
                }}>
                  <QrCode size={14} color="#2ebd3a" />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#2ebd3a' }}>QR Scan</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — features */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                {
                  icon: Heart, color: '#ef4444', bg: '#fef2f2',
                  title: 'Medical Profile',
                  desc: 'Blood group, conditions, allergies, medications, and doctor details — all accessible with one scan. Critical in emergencies.',
                },
                {
                  icon: AlertTriangle, color: '#f97316', bg: '#fff7ed',
                  title: 'Emergency Alert System',
                  desc: 'Tap or scan triggers an instant notification to all registered family members, with GPS location of the senior.',
                },
                {
                  icon: Wifi, color: '#2ebd3a', bg: '#f8fafc',
                  title: 'NFC + QR Dual Support',
                  desc: 'Works with both NFC tap and QR code scan. No app required for responders — opens in any browser instantly.',
                },
                {
                  icon: ShieldCheck, color: '#2ebd3a', bg: '#e8f8eb',
                  title: 'Wristband & Wallet Card',
                  desc: 'Available as a waterproof wristband or wallet-size card. Comfortable for daily use by senior citizens.',
                },
              ].map(({ icon: Icon, color, bg, title, desc }) => (
                <div key={title} style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  background: '#fff', borderRadius: 16, padding: '16px 18px',
                  border: '1px solid #e8f8eb', boxShadow: '0 2px 12px rgba(22,101,52,0.07)',
                }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <div className="sc-feat-title" style={{ fontWeight: 800, fontSize: 14, color: '#0B2545', marginBottom: 4 }}>{title}</div>
                    <div className="sc-feat-desc" style={{ fontSize: 13.5, color: '#4b7a62', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PREMIUM MOBILE-ONLY VIEW */}
        <div className="sc-mobile-layout">
          {/* Mobile Profile Card */}
          <div className="sc-mobile-profile" style={{
            background: '#fff', borderRadius: 20, padding: 18,
            border: '1.5px solid #e8f8eb',
            boxShadow: '0 8px 24px rgba(6,78,59,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%', marginBottom: 20
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img
                 src={oldman}
                alt="Ramesh Nair"
                style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '2px solid #2ebd3a' }}
              />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: '#0B2545', fontFamily: "'Sora', sans-serif" }}>Ramesh Nair</div>
                <div style={{ fontSize: 11, color: '#6b7280', margin: '2px 0 4px', fontFamily: "'DM Sans', sans-serif" }}>Age: 72 • Nellore, AP</div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  background: '#e8f8eb', borderRadius: 6, padding: '2px 8px',
                  fontSize: 10, fontWeight: 700, color: '#2ebd3a', fontFamily: "'DM Sans', sans-serif"
                }}>
                  <ShieldCheck size={10} /> Protected
                </div>
              </div>
            </div>
            
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              background: '#f9fafb', border: '1.5px solid #e2e8f0', borderRadius: 12,
              padding: '8px 12px', minWidth: 72
            }}>
              <QrCode size={18} color="#2ebd3a" style={{ marginBottom: 4 }} />
              <span style={{ fontSize: 9, fontWeight: 800, color: '#0B2545', lineHeight: 1, fontFamily: "'Sora', sans-serif" }}>SFSI-1123</span>
              <span style={{ fontSize: 8, color: '#9ca3af', fontWeight: 600, marginTop: 2, fontFamily: "'DM Sans', sans-serif" }}>Scan ID</span>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="sc-mobile-grid">
            {mobileSeniorFeatures.map(({ icon: Icon, color, bg, title, desc }) => (
              <div
                key={title}
                className="sc-mobile-card"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e8f8eb',
                  borderRadius: 16,
                  padding: '16px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(22,101,52,0.03)',
                  textAlign: 'left'
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
                  <h4 style={{ margin: '0 0 2px', fontSize: 14.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Sora', sans-serif" }}>{title}</h4>
                  <p style={{ margin: 0, fontSize: 12.5, color: '#64748b', fontWeight: 500, lineHeight: 1.35, fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button type="button" className="sc-mobile-btn">
            View Full Profile
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>

      <style>{`
        .sc-mobile-layout {
          display: none;
        }

        @media (min-width: 601px) and (max-width: 1024px) {
          .senior-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .senior-grid > div {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
          .sc-feat-title {
            font-size: 16px !important;
          }
          .sc-feat-desc {
            font-size: 14.5px !important;
          }
          .sc-mobile-card h4 {
            font-size: 16px !important;
          }
          .sc-mobile-card p {
            font-size: 13.5px !important;
          }
        }

        @media (max-width: 768px) {
          .senior-grid {
            display: none !important;
          }
          .sc-mobile-layout {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .sc-mobile-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
            width: 100%;
            margin-bottom: 24px !important;
          }
          .sc-mobile-card {
            background: #ffffff;
            border: 1.5px solid #e8f8eb;
            border-radius: 16px;
            padding: 16px 14px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: relative;
            box-shadow: 0 2px 8px rgba(22,101,52,0.03);
          }
          .sc-mobile-btn {
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
          .sc-mobile-btn:hover {
            background: #27a231 !important;
            box-shadow: 0 6px 18px rgba(46, 189, 58, 0.35) !important;
          }
        }
      `}</style>
    </section>
  )
}