import { Heart, Phone, AlertTriangle, Wifi, QrCode, ShieldCheck, User, Droplets, Watch, CheckCircle2, Lock } from 'lucide-react'
import oldman from "/assets/oldman.png";

export default function SeniorCitizenSection() {

  const desktopFeatures = [
    {
      icon: Heart,
      color: '#ef4444',
      bg: '#fef2f2',
      title: 'Medical Information Access',
      desc: 'Important medical details like blood group, allergies, conditions, and doctor information — available when needed.',
    },
    {
      icon: User,
      color: '#f97316',
      bg: '#fff7ed',
      title: 'Emergency Contact Access',
      desc: 'Quickly connect with family members or caregivers during critical situations.',
    },
    {
      icon: QrCode,
      color: '#0891b2',
      bg: '#ecfeff',
      title: 'QR + NFC Technology',
      desc: 'Scan the QR code or tap the NFC tag using any smartphone. No app required.',
    },
    {
      icon: Watch,
      color: '#2ebd3a',
      bg: '#f0fdf4',
      title: 'Wristband & ID Card Options',
      desc: 'Durable, lightweight, and comfortable for daily wear. Always ready when you need it most.',
    },
  ]

  const mobileSeniorFeatures = [
    { icon: Heart,         color: '#ef4444', bg: '#fef2f2', title: 'Medical Profile',    desc: 'Blood group, conditions, medications & more' },
    { icon: AlertTriangle, color: '#f97316', bg: '#fff7ed', title: 'Emergency Alerts',   desc: 'Instant SMS & WhatsApp alerts to family' },
    { icon: QrCode,        color: '#0891b2', bg: '#ecfeff', title: 'NFC + QR Support',   desc: 'Works with NFC tap or QR code scan' },
    { icon: Watch,         color: '#2ebd3a', bg: '#f0fdf4', title: 'Smart Band Support', desc: 'Wearable ID band for 24/7 safety' },
  ]

  return (
    <section style={{ background: 'linear-gradient(180deg,#f8fafc 0%,#e8f8eb 100%)', padding: '56px 0 64px' }}>
      <style>{`
        .sc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
        .sc-feat-card {
          display: flex; gap: 14px; align-items: flex-start;
          background: #fff; border-radius: 16px; padding: 18px 20px;
          border: 1.5px solid #e8f8eb;
          box-shadow: 0 2px 12px rgba(22,101,52,0.07);
          transition: all 0.25s ease;
        }
        .sc-feat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(22,101,52,0.12);
        }
        .sc-profile-card {
          background: #fff; border-radius: 24px; padding: 24px;
          max-width: 380px; width: 100%;
          box-shadow: 0 20px 60px rgba(6,78,59,0.12);
          border: 1.5px solid #e8f8eb;
        }
        .sc-bottom-banner {
          background: #fff; border-radius: 16px;
          padding: 18px 24px; margin-top: 36px;
          border: 1.5px solid #e8f8eb;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
          box-shadow: 0 4px 16px rgba(22,101,52,0.06);
        }
        .sc-mobile-layout { display: none; }
        .sc-mobile-grid { display: none; }

        @media (max-width: 768px) {
          .sc-grid { display: none !important; }
          .sc-bottom-banner { display: none !important; }
          .sc-mobile-layout {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .sc-mobile-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            width: 100%;
            margin-bottom: 20px;
          }
        }
        @media (min-width: 601px) and (max-width: 1024px) {
          .sc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 20px', borderRadius: 100,
            background: '#fff', border: '1.5px solid #e8f8eb', marginBottom: 14,
            boxShadow: '0 2px 8px rgba(22,101,52,0.08)',
          }}>
            <Heart size={14} color="#2ebd3a" fill="#2ebd3a" />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#2ebd3a', fontFamily: "'Sora', sans-serif" }}>Senior Citizen Protection</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900,
            color: '#0B2545', margin: '0 0 12px', fontFamily: "'Sora', sans-serif", lineHeight: 1.2,
          }}>
            Protecting Seniors{' '}
            <span style={{ color: '#2ebd3a' }}>When Every Second Matters</span>
          </h2>
          <p style={{ color: '#4b7a62', fontSize: 15, maxWidth: 540, margin: '0 auto', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
            One scan can help responders, caregivers, and family members access important information and emergency contacts quickly.
          </p>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="sc-grid">

          {/* LEFT — Profile Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="sc-profile-card">

              {/* Profile Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, paddingBottom: 18, borderBottom: '1px solid #f1f5f9' }}>
                <div style={{
                  width: 62, height: 62, borderRadius: '50%', background: 'linear-gradient(135deg,#2ebd3a,#0B2545)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(22,101,52,0.25)', flexShrink: 0, overflow: 'hidden',
                }}>
                  <User size={30} color="#e8f8eb" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 17, color: '#0B2545', fontFamily: "'Sora', sans-serif" }}>Ramesh Nair</div>
                  <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2, fontFamily: "'DM Sans', sans-serif" }}>Age: 72 • Nellore, AP</div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 4,
                    background: '#e8f8eb', borderRadius: 6, padding: '3px 10px',
                    fontSize: 11, fontWeight: 700, color: '#2ebd3a', fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <ShieldCheck size={10} /> Protected
                  </div>
                </div>
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  background: '#f9fafb', border: '1.5px solid #e2e8f0', borderRadius: 10,
                  padding: '8px 10px',
                }}>
                  <QrCode size={20} color="#2ebd3a" style={{ marginBottom: 3 }} />
                  <span style={{ fontSize: 9, fontWeight: 800, color: '#0B2545', fontFamily: "'Sora', sans-serif" }}>ScanForSafe</span>
                </div>
              </div>

              {/* Medical Info */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 9, fontFamily: "'DM Sans', sans-serif" }}>
                  Medical Information <span style={{ color: '#d1d5db', fontWeight: 500 }}>(Optional)</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {[
                    { label: 'Blood Group',       value: 'B+',         icon: <Droplets size={13} color="#ef4444" /> },
                    { label: 'Medical Condition', value: 'Diabetic',   icon: <Heart size={13} color="#f97316" /> },
                    { label: 'Allergies',         value: 'Penicillin', icon: <AlertTriangle size={13} color="#eab308" /> },
                    { label: 'Doctor',            value: 'Dr. Reddy',  icon: <User size={13} color="#2ebd3a" /> },
                  ].map(({ label, value, icon }) => (
                    <div key={label} style={{ background: '#f9fafb', borderRadius: 10, padding: '10px 12px', border: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                        {icon}
                        <span style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#11355e', fontFamily: "'Sora', sans-serif" }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contacts */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 9, fontFamily: "'DM Sans', sans-serif" }}>
                  Emergency Contacts
                </div>
                {[
                  { name: 'Suresh Nair (Son)',        phone: '+91 98765XXXXX' },
                  { name: 'Lakshmi Nair (Daughter)',  phone: '+91 87654XXXXX' },
                ].map(c => (
                  <div key={c.name} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '9px 12px', background: '#f8fafc', borderRadius: 10, marginBottom: 7,
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#11355e', fontFamily: "'DM Sans', sans-serif" }}>{c.name}</span>
                    <button style={{
                      padding: '5px 13px', borderRadius: 8, background: '#2ebd3a',
                      color: '#fff', fontSize: 11, fontWeight: 700, border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 4, fontFamily: "'DM Sans', sans-serif",
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
                  borderRadius: 12, padding: '12px 0', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: 6,
                }}>
                  <Wifi size={14} color="#e8f8eb" />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#e8f8eb', fontFamily: "'DM Sans', sans-serif" }}>NFC Tap</span>
                </div>
                <div style={{
                  flex: 1, background: '#f8fafc', borderRadius: 12, padding: '12px 0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  border: '1.5px solid #e8f8eb',
                }}>
                  <QrCode size={14} color="#2ebd3a" />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#2ebd3a', fontFamily: "'DM Sans', sans-serif" }}>QR Scan</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — Feature Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {desktopFeatures.map(({ icon: Icon, color, bg, title, desc }) => (
              <div key={title} className="sc-feat-card">
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={21} color={color} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14.5, color: '#0B2545', marginBottom: 4, fontFamily: "'Sora', sans-serif" }}>{title}</div>
                  <div style={{ fontSize: 13.5, color: '#4b7a62', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM BANNER — Desktop */}
        <div className="sc-bottom-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 42, height: 42, borderRadius: 11, background: '#e8f8eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={20} color="#2ebd3a" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 14.5, color: '#0B2545', fontFamily: "'Sora', sans-serif" }}>Privacy First</div>
              <div style={{ fontSize: 13, color: '#6b7280', fontFamily: "'DM Sans', sans-serif" }}>
                Your personal information is secure and visible only when someone scans your tag.
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Lock size={14} color="#2ebd3a" />
            <span style={{ fontSize: 12.5, fontWeight: 700, color: '#2ebd3a', fontFamily: "'DM Sans', sans-serif" }}>Your data is safe and always protected</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {[
              { icon: ShieldCheck, label: 'Secure' },
              { icon: CheckCircle2, label: 'Reliable' },
              { icon: Heart, label: 'Trusted by Thousands' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Icon size={13} color="#2ebd3a" />
                <span style={{ fontSize: 12.5, color: '#4b7a62', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="sc-mobile-layout">
          {/* Mobile Profile Card */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: 18,
            border: '1.5px solid #e8f8eb',
            boxShadow: '0 8px 24px rgba(6,78,59,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%', marginBottom: 20,
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
                  fontSize: 10, fontWeight: 700, color: '#2ebd3a', fontFamily: "'DM Sans', sans-serif",
                }}>
                  <ShieldCheck size={10} /> Protected
                </div>
              </div>
            </div>
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              background: '#f9fafb', border: '1.5px solid #e2e8f0', borderRadius: 12,
              padding: '8px 12px', minWidth: 72,
            }}>
              <QrCode size={18} color="#2ebd3a" style={{ marginBottom: 4 }} />
              <span style={{ fontSize: 9, fontWeight: 800, color: '#0B2545', lineHeight: 1, fontFamily: "'Sora', sans-serif" }}>SFSI-1123</span>
              <span style={{ fontSize: 8, color: '#9ca3af', fontWeight: 600, marginTop: 2, fontFamily: "'DM Sans', sans-serif" }}>Scan ID</span>
            </div>
          </div>

          {/* Mobile Feature Grid */}
          <div className="sc-mobile-grid">
            {mobileSeniorFeatures.map(({ icon: Icon, color, bg, title, desc }) => (
              <div key={title} style={{
                background: '#fff', border: '1.5px solid #e8f8eb', borderRadius: 16,
                padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 8,
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: color, borderRadius: '16px 0 0 16px' }} />
                <div style={{
                  width: 36, height: 36, borderRadius: 10, background: bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color={color} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 2px', fontSize: 14, fontWeight: 800, color: '#0B2545', fontFamily: "'Sora', sans-serif" }}>{title}</h4>
                  <p style={{ margin: 0, fontSize: 12, color: '#64748b', fontWeight: 500, lineHeight: 1.35, fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Privacy Banner */}
          <div style={{
            background: '#fff', borderRadius: 14, padding: '14px 16px',
            border: '1.5px solid #e8f8eb', display: 'flex', alignItems: 'center',
            gap: 12, width: '100%', boxShadow: '0 2px 12px rgba(22,101,52,0.05)',
          }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: '#e8f8eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={18} color="#2ebd3a" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 13, color: '#0B2545', fontFamily: "'Sora', sans-serif" }}>Privacy First</div>
              <div style={{ fontSize: 11.5, color: '#6b7280', fontFamily: "'DM Sans', sans-serif" }}>Secure and visible only when someone scans your tag.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}