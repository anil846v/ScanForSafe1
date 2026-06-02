import {
  Bike, PawPrint, Laptop, Baby,
  UserCheck, ArrowUpRight, ShieldCheck,
  Zap, MapPin, Bell, Clock, ScanLine, CreditCard,
} from 'lucide-react'

import bike1img  from '../../assets/bike.png'
import petimg    from '../../assets/dog.png'
import seniorimg from '../../assets/senior.png'
import kidimg    from '../../assets/kid.png'
import luggage   from '../../assets/luggage1.png'
import idimg     from '../../assets/id.png'

/* ─────────────────────────── DATA ─────────────────────────── */
const USE_CASES = [
  {
    icon: Bike,
    title: 'Motorcycles & Bikes',
    category: 'VEHICLE',
    qrSize: '3.5 cm QR Sticker',
    description: 'Smart QR recovery sticker for bikes with instant owner GPS alerts.',
    cardBg: '#EAF3DE', accentColor: '#2ebd3a', iconBg: '#27500A', borderColor: '#92cc5a',
    tag: 'QR Sticker', tagBg: '#C0DD97', tagColor: '#27500A',
    titleColor: '#1a3d06', subColor: '#3B6D11', descColor: '#3B6D11',
    image: bike1img, badge: '🏍️', qrPosition: 'Fuel tank / handlebar',
    features: ['Waterproof', 'Tamper-proof', 'UV-resistant'],
    stats: [
      { icon: Clock,  value: '< 3s', label: 'Alert'  },
      { icon: MapPin, value: 'Live',  label: 'GPS'    },
      { icon: Bell,   value: '24/7',  label: 'Active' },
    ],
  },
  {
    icon: Laptop,
    title: 'Laptops & Valuables',
    category: 'TECH',
    qrSize: '3.5 cm QR Sticker',
    description: 'Discreet sticker for laptops & cameras. Lost device? Finder scans → instant location.',
    cardBg: '#E6F1FB', accentColor: '#1a6fbe', iconBg: '#0B2545', borderColor: '#6aaae8',
    tag: 'QR Sticker', tagBg: '#B5D4F4', tagColor: '#0C447C',
    titleColor: '#062040', subColor: '#185FA5', descColor: '#185FA5',
    image: luggage, badge: '💻', qrPosition: 'On device / back cover',
    features: ['Discreet', 'Strong adhesive', 'Device-safe'],
    stats: [
      { icon: MapPin, value: 'Live',    label: 'Location' },
      { icon: Bell,   value: 'Instant', label: 'Alert'    },
      { icon: Zap,    value: '24/7',    label: 'Secure'   },
    ],
  },
  {
    icon: PawPrint,
    title: 'Dogs, Cats & Pets',
    category: 'PETS',
    qrSize: 'Collar QR Tag',
    description: 'Lightweight QR collar tag. Anyone scans → instant owner notification with GPS.',
    cardBg: '#EAF3DE', accentColor: '#2ebd3a', iconBg: '#27500A', borderColor: '#92cc5a',
    tag: 'Collar Tag', tagBg: '#C0DD97', tagColor: '#27500A',
    titleColor: '#1a3d06', subColor: '#3B6D11', descColor: '#3B6D11',
    image: petimg, badge: '🐕', qrPosition: 'On pet collar',
    features: ['Lightweight', 'Weatherproof', 'Easy scan'],
    stats: [
      { icon: MapPin, value: 'GPS',  label: 'Per scan'  },
      { icon: Bell,   value: 'Auto', label: 'Alert'     },
      { icon: Zap,    value: '5+',   label: 'Contacts'  },
    ],
  },
  {
    icon: Baby,
    title: 'Children Safety',
    category: 'SAFETY',
    qrSize: 'Hand Band / Shoulder',
    description: 'QR wristband for kids. Scan in crowds → parents alerted instantly with live GPS.',
    cardBg: '#EEEDFE', accentColor: '#534AB7', iconBg: '#3C3489', borderColor: '#9b93e8',
    tag: 'Hand Band', tagBg: '#CECBF6', tagColor: '#26215C',
    titleColor: '#1a1644', subColor: '#534AB7', descColor: '#534AB7',
    image: kidimg, badge: '🧒', qrPosition: 'Hand band / shoulder',
    features: ['Soft band', 'No app needed', 'Instant alert'],
    stats: [
      { icon: Bell,   value: 'Instant', label: 'Parent' },
      { icon: MapPin, value: 'Live',    label: 'GPS'    },
      { icon: Zap,    value: 'Quick',   label: 'Scan'   },
    ],
  },
  {
    icon: ScanLine,
    title: 'Tags & ID Cards',
    category: 'OFFICE',
    qrSize: 'QR Identity Tag',
    description: 'QR tags for employee IDs, student cards, and visitor badges — scan and identify instantly.',
    cardBg: '#E1F5EE', accentColor: '#0F6E56', iconBg: '#085041', borderColor: '#3dba96',
    tag: 'Smart Tag', tagBg: '#9FE1CB', tagColor: '#085041',
    titleColor: '#043328', subColor: '#0F6E56', descColor: '#0F6E56',
    image: idimg, badge: '🏷️', qrPosition: 'Tag / Card',
    features: ['Multi-format', 'Instant scan', 'Reusable'],
    stats: [
      { icon: ScanLine,   value: 'QR',   label: 'Enabled' },
      { icon: CreditCard, value: 'Card',  label: 'Format'  },
      { icon: Zap,        value: 'Fast',  label: 'Access'  },
    ],
  },
  {
    icon: UserCheck,
    title: 'Senior Citizens',
    category: 'CARE',
    qrSize: 'Emergency QR ID',
    description: 'Emergency profile with medical info & family contacts — critical help at one scan.',
    cardBg: '#EEEDFE', accentColor: '#7F77DD', iconBg: '#534AB7', borderColor: '#9b93e8',
    tag: 'Senior Care', tagBg: '#534AB7', tagColor: '#fff',
    titleColor: '#1a1644', subColor: '#534AB7', descColor: '#534AB7',
    image: seniorimg, badge: '👴', qrPosition: 'Wristband / wallet card',
    isNew: true,
    features: ['Medical ID', 'Blood group', 'SOS alert'],
    stats: [
      { icon: Zap,    value: 'SOS',   label: 'Support' },
      { icon: Bell,   value: '5',     label: 'Family'  },
      { icon: MapPin, value: 'Quick', label: 'Access'  },
    ],
  },
]

/* ─────────────────────────── SECTION ─────────────────────────── */
export default function UseCases() {
  return (
    <section
      id="use-cases"
      style={{ background: '#f0f6f1', padding: '52px 0 60px' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

        /* ── Grid ── */
        .uc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 940px) { .uc-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 580px) {
          .uc-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* ── Card ── */
        .uc-card {
          position: relative; border-radius: 20px; overflow: hidden;
          display: flex; flex-direction: column;
          border: 2px solid var(--uc-border);
          outline: 1px solid rgba(255,255,255,0.55);
          outline-offset: -3px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.08);
          transition: transform 0.3s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.3s ease, border-color 0.25s ease;
          animation: ucUp 0.5s ease both;
        }
        @media (max-width: 580px) {
          .uc-card {
            min-width: 0;
            max-width: 100%;
          }
        }
        .uc-card:hover {
          transform: translateY(-8px) scale(1.013);
          border-color: var(--uc-accent);
          box-shadow: 0 4px 8px rgba(0,0,0,0.06), 0 20px 48px rgba(0,0,0,0.14);
        }
        .uc-card:nth-child(1){animation-delay:.04s} .uc-card:nth-child(2){animation-delay:.10s}
        .uc-card:nth-child(3){animation-delay:.16s} .uc-card:nth-child(4){animation-delay:.22s}
        .uc-card:nth-child(5){animation-delay:.28s} .uc-card:nth-child(6){animation-delay:.34s}
        @keyframes ucUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

        /* ── Image block ── */
        .uc-img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden; flex-shrink: 0;
          border-bottom: 2px solid var(--uc-border);
        }
        .uc-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.5s cubic-bezier(.25,.46,.45,.94);
        }
        .uc-card:hover .uc-img { transform: scale(1.07); }
        .uc-img-overlay { position: absolute; inset: 0; pointer-events: none; }

        /* category chip on image */
        .uc-cat-chip {
          position: absolute; top: 11px; left: 11px;
          background: rgba(255,255,255,0.92); backdrop-filter: blur(8px);
          border: 1.5px solid rgba(0,0,0,0.09);
          border-radius: 8px; padding: 4px 9px;
          font-size: 8.5px; font-weight: 800; letter-spacing: 0.13em;
          font-family: 'Sora', sans-serif;
          text-transform: uppercase;
        }

        /* QR scan badge */
        .uc-qr-badge {
          position: absolute; bottom: 10px; left: 10px;
          background: rgba(255,255,255,0.95);
          border: 1.5px solid rgba(46,189,58,0.35);
          border-radius: 8px; padding: 5px 10px;
          display: flex; align-items: center; gap: 5px;
          font-size: 9.5px; font-weight: 600; color: #157a24;
          font-family: 'DM Sans', sans-serif;
          box-shadow: 0 2px 10px rgba(0,0,0,0.13);
          animation: ucQrPulse 2.8s ease-in-out infinite;
        }
        @keyframes ucQrPulse {
          0%,100%{ box-shadow: 0 2px 10px rgba(0,0,0,0.13); }
          50%    { box-shadow: 0 3px 16px rgba(46,189,58,0.32); }
        }

        /* NEW badge */
        .uc-new-badge {
          position: absolute; top: 11px; right: 11px;
          background: linear-gradient(135deg,#4a41aa,#8b85e8);
          color: #fff; font-size: 8px; font-weight: 800;
          padding: 4px 10px; border-radius: 100px; letter-spacing: 0.1em;
          font-family: 'Sora', sans-serif;
          border: 1.5px solid rgba(255,255,255,0.28);
          box-shadow: 0 3px 10px rgba(74,65,170,0.42);
        }

        /* ── Body ── */
        .uc-body {
          padding: 12px 14px 14px;
          display: flex; flex-direction: column; gap: 8px; flex: 1;
        }

        /* title row */
        .uc-title-row {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 8px;
        }
        .uc-title-left {
          display: flex; gap: 9px; align-items: center; min-width: 0; flex: 1;
        }
        .uc-icon-box {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid rgba(255,255,255,0.22);
          box-shadow: 0 3px 8px rgba(0,0,0,0.22), 0 1px 0 rgba(255,255,255,0.12) inset;
          transition: transform 0.28s cubic-bezier(.22,.68,0,1.5);
        }
        .uc-card:hover .uc-icon-box { transform: translateY(-3px) scale(1.1); }

        /* ── FONT CHANGES: Sora for title, DM Sans for everything else ── */
        .uc-name {
          margin: 0; font-size: 14.5px; font-weight: 700; line-height: 1.18;
          letter-spacing: -0.03em;
          font-family: 'Sora', sans-serif;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .uc-sub {
          font-size: 10px; font-weight: 500; margin-top: 2px;
          font-family: 'DM Sans', sans-serif; opacity: 0.75;
        }

        .uc-tag-pill {
          font-size: 9px; font-weight: 700; padding: 4px 10px;
          border-radius: 100px; white-space: nowrap; flex-shrink: 0;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.03em;
          border: 2px solid transparent;
        }

        /* thin rule */
        .uc-rule { height: 1px; border: none; opacity: 0.2; flex-shrink: 0; }

        /* description */
        .uc-desc {
          margin: 0; font-size: 12px; line-height: 1.68; font-weight: 400;
          font-family: 'DM Sans', sans-serif;
        }

        /* pills */
        .uc-pills { display: flex; flex-wrap: wrap; gap: 4px; }
        .uc-pill {
          font-size: 9px; font-weight: 600; padding: 3px 9px; border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          border: 1.5px solid transparent;
        }

        /* stats */
        .uc-stats {
          display: flex; border-radius: 12px;
          background: rgba(255,255,255,0.7);
          border: 2px solid rgba(255,255,255,0.88);
          box-shadow: 0 1px 6px rgba(0,0,0,0.06);
          overflow: hidden;
        }
        .uc-stat {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 1px; padding: 8px 4px;
        }
        .uc-stat + .uc-stat { border-left: 1.5px solid rgba(0,0,0,0.08); }
        .uc-stat-val {
          font-size: 13px; font-weight: 800; line-height: 1;
          font-family: 'Sora', sans-serif;
          letter-spacing: -0.02em;
        }
        .uc-stat-lbl {
          font-size: 7px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.09em;
          font-family: 'DM Sans', sans-serif;
        }

        /* footer */
        .uc-footer {
          display: flex; align-items: center;
          justify-content: space-between; gap: 6px; margin-top: auto;
        }
        .uc-live {
          display: flex; align-items: center; gap: 5px;
          font-size: 10px; font-weight: 600;
          font-family: 'DM Sans', sans-serif;
        }
        .uc-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #2ebd3a;
          box-shadow: 0 0 0 2.5px rgba(46,189,58,0.22), 0 0 0 4.5px rgba(46,189,58,0.08);
        }
        .uc-btn {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 10.5px; font-weight: 700; padding: 6px 13px; border-radius: 999px;
          cursor: pointer; font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.01em;
          border: 2px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.82);
          box-shadow: 0 2px 5px rgba(0,0,0,0.07);
          transition: all 0.2s ease;
        }
        .uc-btn:hover { background:#fff; gap:7px; box-shadow:0 4px 12px rgba(0,0,0,0.12); border-color:rgba(0,0,0,0.2); }

        /* mobile swipe hint */
        .uc-swipe {
          display: none; align-items: center; gap: 5px;
          font-size: 11px; color: #999; margin-bottom: 10px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Section header badge ── */
        .uc-header-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 16px; border-radius: 100px;
          background: #daf2e1; border: 1.5px solid #82cc96; margin-bottom: 14px;
          box-shadow: 0 2px 8px rgba(46,189,58,0.1);
        }
        .uc-header-badge span {
          font-size: 11px; font-weight: 700; color: #157a24;
          font-family: 'Sora', sans-serif; letter-spacing: 0.07em;
          text-transform: uppercase;
        }
        .uc-header-h2 {
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 900;
          color: #06160A;
          margin: 0 0 10px;
          line-height: 1.0;
          font-family: 'Sora', sans-serif;
          letter-spacing: -0.04em;
        }
        .uc-header-h2 .uc-green {
          background: linear-gradient(125deg, #0a2e10 0%, #2ebd3a 52%, #4bd557 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .uc-header-p {
          color: #3a6b50; font-size: 14.5px; max-width: 480px; margin: 0 auto;
          line-height: 1.75; font-family: 'DM Sans', sans-serif; font-weight: 400;
        }
      `}</style>

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 20px' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div className="uc-header-badge">
            <ShieldCheck size={13} color="#157a24" />
            <span>Real-World Use Cases</span>
          </div>

          <h2 className="uc-header-h2">
            Protect Everything<br />
            <span className="uc-green">You Love</span>
          </h2>

          <p className="uc-header-p">
            Smart QR safety tags for bikes, laptops, pets, children, ID cards, and senior citizens.
          </p>
        </div>

        {/* ── Swipe hint (mobile) ── */}
        <div className="uc-swipe">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Swipe to explore
        </div>

        {/* ── Grid ── */}
        <div className="uc-grid">
          {USE_CASES.map(uc => <UCCard key={uc.title} {...uc} />)}
        </div>

      </div>
    </section>
  )
}

/* ─────────────────────────── CARD ─────────────────────────── */
function UCCard({
  icon: Icon, title, category, qrSize, description,
  cardBg, accentColor, iconBg, borderColor,
  tag, tagBg, tagColor, titleColor, subColor, descColor,
  image, badge, qrPosition, isNew, features, stats,
}) {
  return (
    <div
      className="uc-card"
      style={{
        background: cardBg,
        '--uc-border': borderColor,
        '--uc-accent': accentColor,
      }}
    >
      {/* ── Image ── */}
      <div className="uc-img-wrap">
        <img src={image} alt={title} className="uc-img" />
        <div
          className="uc-img-overlay"
          style={{
            background: `linear-gradient(to bottom,
              ${accentColor}10 0%,
              transparent 30%,
              rgba(0,0,0,0.04) 60%,
              rgba(0,0,0,0.22) 100%)`,
          }}
        />
        <div className="uc-cat-chip" style={{ color: accentColor }}>
          {category}
        </div>
        {isNew && <div className="uc-new-badge">✦ NEW</div>}
        <div className="uc-qr-badge">
          <QRIcon />
          {qrPosition}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="uc-body">

        {/* Title row */}
        <div className="uc-title-row">
          <div className="uc-title-left">
            <div className="uc-icon-box" style={{ background: iconBg }}>
              <Icon size={16} color="#fff" />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <h3 className="uc-name" style={{ color: titleColor }}>{title}</h3>
              <div className="uc-sub" style={{ color: subColor }}>{badge} {qrSize}</div>
            </div>
          </div>
          <span
            className="uc-tag-pill"
            style={{ background: tagBg, color: tagColor, borderColor: `${tagColor}50` }}
          >
            {tag}
          </span>
        </div>

        {/* Rule */}
        <hr className="uc-rule" style={{ background: accentColor }} />

        {/* Description */}
        <p className="uc-desc" style={{ color: descColor }}>{description}</p>

        {/* Feature pills */}
        <div className="uc-pills">
          {features.map(f => (
            <span
              key={f}
              className="uc-pill"
              style={{ background: tagBg, color: tagColor, borderColor: `${tagColor}40` }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="uc-stats">
          {stats.map(s => {
            const SI = s.icon
            return (
              <div key={s.label} className="uc-stat">
                <SI size={10} color={iconBg} />
                <span className="uc-stat-val" style={{ color: titleColor }}>{s.value}</span>
                <span className="uc-stat-lbl" style={{ color: subColor }}>{s.label}</span>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="uc-footer">
          <div className="uc-live" style={{ color: subColor }}>
            <span className="uc-dot" />
            Finder-friendly
          </div>
          <button type="button" className="uc-btn" style={{ color: titleColor }}>
            Learn more <ArrowUpRight size={11} />
          </button>
        </div>

      </div>
    </div>
  )
}

/* ─────────────────────────── QR ICON ─────────────────────────── */
function QRIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
      stroke="#157a24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3m0 4h4m-4-4v4m4-7h-4m4 0v3" />
    </svg>
  )
}