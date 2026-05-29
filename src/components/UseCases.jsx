import {
  Bike,
  PawPrint,
  Laptop,
  Baby,
  UserCheck,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  MapPin,
  Bell,
  Clock,
  ScanLine,
  CreditCard,
} from 'lucide-react'

import bike1img from '../../assets/bike1.png'
import petimg from '../../assets/dog.png'
import seniorimg from '../../assets/senior.png'
import kidimg from '../../assets/kid.png'
import luggage from '../../assets/luggage1.png'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const USE_CASES = [
  {
    icon: Bike,
    title: 'Motorcycles & Bikes',
    category: 'VEHICLE',
    qrSize: '3.5 cm QR Sticker',
    description: 'Smart QR recovery sticker for bikes with instant owner GPS alerts.',
    cardBg: '#EAF3DE',
    accentColor: '#2ebd3a',
    iconBg: '#2ebd3a',
    tag: 'QR Sticker',
    tagBg: '#C0DD97',
    tagColor: '#27500A',
    titleColor: '#27500A',
    subColor: '#3B6D11',
    descColor: '#3B6D11',
    image: bike1img,
    badge: '🏍️',
    qrPosition: 'Fuel tank / handlebar',
    features: ['Waterproof', 'Tamper-proof', 'UV-resistant'],
    stats: [
      { icon: Clock, value: '< 3s', label: 'Alert' },
      { icon: MapPin, value: 'Live', label: 'GPS' },
      { icon: Bell, value: '24/7', label: 'Active' },
    ],
  },
  {
    icon: Laptop,
    title: 'Laptops & Valuables',
    category: 'TECH',
    qrSize: '3.5 cm QR Sticker',
    description: 'Discreet sticker for laptops & cameras. Lost device? Finder scans → instant location.',
    cardBg: '#E6F1FB',
    accentColor: '#1a6fbe',
    iconBg: '#0B2545',
    tag: 'QR Sticker',
    tagBg: '#B5D4F4',
    tagColor: '#0C447C',
    titleColor: '#0C447C',
    subColor: '#185FA5',
    descColor: '#185FA5',
    image: luggage,
    badge: '💻',
    qrPosition: 'On device / back cover',
    features: ['Discreet', 'Strong adhesive', 'Device-safe'],
    stats: [
      { icon: MapPin, value: 'Live', label: 'Location' },
      { icon: Bell, value: 'Instant', label: 'Alert' },
      { icon: Zap, value: '24/7', label: 'Secure' },
    ],
  },
  {
    icon: PawPrint,
    title: 'Dogs, Cats & Pets',
    category: 'PETS',
    qrSize: 'Collar QR Tag',
    description: 'Lightweight QR collar tag. Anyone scans → instant owner notification with GPS.',
    cardBg: '#EAF3DE',
    accentColor: '#2ebd3a',
    iconBg: '#2ebd3a',
    tag: 'Collar Tag',
    tagBg: '#C0DD97',
    tagColor: '#27500A',
    titleColor: '#27500A',
    subColor: '#3B6D11',
    descColor: '#3B6D11',
    image: petimg,
    badge: '🐕',
    qrPosition: 'On pet collar',
    features: ['Lightweight', 'Weatherproof', 'Easy scan'],
    stats: [
      { icon: MapPin, value: 'GPS', label: 'Per scan' },
      { icon: Bell, value: 'Auto', label: 'Alert' },
      { icon: Zap, value: '5+', label: 'Contacts' },
    ],
  },
  {
    icon: Baby,
    title: 'Children Safety',
    category: 'SAFETY',
    qrSize: 'Hand Band / Shoulder',
    description: 'QR wristband for kids. Scan in crowds → parents alerted instantly with live GPS.',
    cardBg: '#EEEDFE',
    accentColor: '#534AB7',
    iconBg: '#534AB7',
    tag: 'Hand Band',
    tagBg: '#CECBF6',
    tagColor: '#26215C',
    titleColor: '#26215C',
    subColor: '#534AB7',
    descColor: '#534AB7',
    image: kidimg,
    badge: '🧒',
    qrPosition: 'Hand band / shoulder',
    features: ['Soft band', 'No app needed', 'Instant alert'],
    stats: [
      { icon: Bell, value: 'Instant', label: 'Parent' },
      { icon: MapPin, value: 'Live', label: 'GPS' },
      { icon: Zap, value: 'Quick', label: 'Scan' },
    ],
  },
  {
    icon: ScanLine,
    title: 'Tags, Scanners & Cards',
    category: 'OFFICE',
    qrSize: 'QR Identity Tag',
    description: 'NFC cards & QR tags for employee IDs, student cards, and visitor badges.',
    cardBg: '#E1F5EE',
    accentColor: '#2ebd3a',
    iconBg: '#2ebd3a',
    tag: 'Smart Tag',
    tagBg: '#9FE1CB',
    tagColor: '#085041',
    titleColor: '#085041',
    subColor: '#0F6E56',
    descColor: '#0F6E56',
    imagePlaceholder: true,
    placeholderIcon: '🏷️',
    badge: '🏷️',
    qrPosition: 'Tag / Card / Scanner',
    features: ['NFC-ready', 'Multi-format', 'Instant scan'],
    stats: [
      { icon: ScanLine, value: 'NFC', label: 'Enabled' },
      { icon: CreditCard, value: 'Card', label: 'Format' },
      { icon: Zap, value: 'Fast', label: 'Access' },
    ],
  },
  {
    icon: UserCheck,
    title: 'Senior Citizens',
    category: 'CARE',
    qrSize: 'Emergency QR ID',
    description: 'Emergency profile with medical info & family contacts — critical help at one scan.',
    cardBg: '#EEEDFE',
    accentColor: '#7F77DD',
    iconBg: '#7F77DD',
    tag: 'Senior Care',
    tagBg: '#7F77DD',
    tagColor: '#fff',
    titleColor: '#26215C',
    subColor: '#534AB7',
    descColor: '#534AB7',
    image: seniorimg,
    badge: '👴',
    qrPosition: 'Wristband / wallet card',
    isNew: true,
    features: ['Medical ID', 'Blood group', 'SOS alert'],
    stats: [
      { icon: Zap, value: 'SOS', label: 'Support' },
      { icon: Bell, value: '5', label: 'Family' },
      { icon: MapPin, value: 'Quick', label: 'Access' },
    ],
  },
]

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function UseCases() {
  return (
    <section id="use-cases" style={{ background: '#f4f6f9', padding: '72px 0 80px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap');

        /* ── Grid: always 3 columns ── */
        .uc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .uc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .uc-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 14px;
            padding-bottom: 10px;
            scrollbar-width: none;
          }
          .uc-grid::-webkit-scrollbar { display: none; }
        }

        /* ── Card ── */
        .uc-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.055);
          box-shadow: 0 2px 6px rgba(0,0,0,0.04), 0 8px 22px rgba(0,0,0,0.06);
          transition: transform 0.32s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.32s cubic-bezier(.22,.68,0,1.2);
          display: flex;
          flex-direction: column;
          animation: fadeUp 0.55s ease both;
        }
        @media (max-width: 580px) {
          .uc-card { min-width: 268px; max-width: 268px; scroll-snap-align: start; flex-shrink: 0; }
        }
        .uc-card:hover {
          transform: translateY(-8px) scale(1.014);
          box-shadow: 0 4px 14px rgba(0,0,0,0.05), 0 24px 48px rgba(0,0,0,0.13);
        }
        .uc-card:nth-child(1) { animation-delay: 0.04s; }
        .uc-card:nth-child(2) { animation-delay: 0.10s; }
        .uc-card:nth-child(3) { animation-delay: 0.16s; }
        .uc-card:nth-child(4) { animation-delay: 0.22s; }
        .uc-card:nth-child(5) { animation-delay: 0.28s; }
        .uc-card:nth-child(6) { animation-delay: 0.34s; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Accent bar ── */
        .uc-accent-bar { height: 4px; width: 100%; flex-shrink: 0; }

        /* ── Image ── */
        .uc-img-wrap {
          position: relative;
          height: 175px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .uc-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(.25,.46,.45,.94);
        }
        .uc-card:hover .uc-img { transform: scale(1.09); }

        /* rich gradient overlay: darken bottom + subtle color tint */
        .uc-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .uc-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: transform 0.55s cubic-bezier(.25,.46,.45,.94);
        }
        .uc-card:hover .uc-placeholder { transform: scale(1.06); }

        /* ── QR badge (pulsing) ── */
        .uc-qr-badge {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(255,255,255,0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 10px;
          padding: 5px 10px;
          font-size: 9.5px;
          font-weight: 700;
          color: #2ebd3a;
          display: flex;
          align-items: center;
          gap: 5px;
          border: 1px solid rgba(46,189,58,0.15);
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
          font-family: 'DM Sans', sans-serif;
          animation: qrPulse 2.6s ease-in-out infinite;
        }
        @keyframes qrPulse {
          0%,100% { box-shadow: 0 2px 10px rgba(0,0,0,0.12); }
          50%      { box-shadow: 0 3px 16px rgba(46,189,58,0.28); }
        }

        /* ── NEW badge ── */
        .uc-new-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: linear-gradient(135deg, #534AB7, #7F77DD);
          color: #fff;
          font-size: 8.5px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 100px;
          letter-spacing: 0.07em;
          font-family: 'Outfit', sans-serif;
          box-shadow: 0 2px 8px rgba(83,74,183,0.4);
        }

        /* ── Body ── */
        .uc-body {
          padding: 13px 15px 15px;
          display: flex;
          flex-direction: column;
          gap: 9px;
          flex: 1;
        }

        .uc-category {
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          font-family: 'Outfit', sans-serif;
          opacity: 0.6;
        }

        .uc-top-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 6px;
        }

        /* ── Icon (float on hover) ── */
        .uc-icon-wrap {
          width: 35px;
          height: 35px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 3px 10px rgba(0,0,0,0.18);
          transition: transform 0.3s cubic-bezier(.22,.68,0,1.5);
        }
        .uc-card:hover .uc-icon-wrap {
          transform: translateY(-4px) scale(1.1);
        }

        .uc-title-block { flex: 1; min-width: 0; }

        .uc-desc {
          margin: 0;
          font-size: 12px;
          line-height: 1.62;
          letter-spacing: -0.01em;
          font-family: 'DM Sans', sans-serif;
        }

        .uc-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .uc-pill {
          font-size: 9.5px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Glass stats ── */
        .uc-stats {
          display: flex;
          gap: 2px;
          border-radius: 12px;
          padding: 8px 5px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.65);
          border: 1px solid rgba(255,255,255,0.85);
        }
        .uc-stat-cell {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .uc-stat-divider {
          width: 1px;
          background: rgba(0,0,0,0.06);
          border-radius: 1px;
          align-self: stretch;
          margin: 2px 0;
        }

        /* ── Footer ── */
        .uc-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          margin-top: auto;
        }

        .uc-finder {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
        }

        .uc-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2ebd3a;
          flex-shrink: 0;
          box-shadow: 0 0 0 2px rgba(46,189,58,0.2);
        }

        /* ── Learn btn (pill glass) ── */
        .uc-learn-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          font-weight: 800;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(0,0,0,0.08);
          padding: 6px 13px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.22s ease;
          font-family: 'Outfit', sans-serif;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .uc-learn-btn:hover {
          gap: 7px;
          background: rgba(255,255,255,0.95);
          box-shadow: 0 3px 12px rgba(0,0,0,0.1);
        }

        /* ── Mobile hint ── */
        .uc-scroll-hint {
          display: none;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: #999;
          font-family: 'DM Sans', sans-serif;
          margin-bottom: 10px;
        }
        @media (max-width: 580px) { .uc-scroll-hint { display: flex; } }
      `}</style>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 42 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '5px 16px', borderRadius: 100,
            background: '#e8f8eb', border: '1px solid #c6edd0', marginBottom: 14,
          }}>
            <ShieldCheck size={13} color="#2ebd3a" />
            <span style={{
              fontSize: 11.5, fontWeight: 700, color: '#2ebd3a',
              fontFamily: "'Outfit', sans-serif", letterSpacing: '0.03em',
            }}>
              Real-World Use Cases
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(24px, 3.2vw, 38px)', fontWeight: 900, color: '#0B2545',
            margin: '0 0 10px', lineHeight: 1.12,
            fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.025em',
          }}>
            Protect Everything You Love
          </h2>

          <p style={{
            color: '#4b7a62', fontSize: 14.5, maxWidth: 500, margin: '0 auto',
            lineHeight: 1.72, fontFamily: "'DM Sans', sans-serif",
          }}>
            Smart QR safety tags for bikes, laptops, pets, children,
            tags &amp; scanners, and senior citizens.
          </p>
        </div>

        {/* ── Mobile swipe hint ── */}
        <div className="uc-scroll-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Swipe to explore
        </div>

        {/* ── 3-column Grid ── */}
        <div className="uc-grid">
          {USE_CASES.map((uc) => <UseCard key={uc.title} {...uc} />)}
        </div>

      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */
function UseCard({
  icon: Icon, title, category, qrSize, description,
  cardBg, accentColor, iconBg, tag, tagBg, tagColor,
  titleColor, subColor, descColor,
  image, imagePlaceholder, placeholderIcon,
  badge, qrPosition, isNew, features, stats,
}) {
  return (
    <div className="uc-card" style={{ background: cardBg }}>

      {/* Accent bar */}
      <div className="uc-accent-bar" style={{ background: accentColor }} />

      {/* Image */}
      <div className="uc-img-wrap">
        {imagePlaceholder ? (
          <div
            className="uc-placeholder"
            style={{
              background: `linear-gradient(145deg, ${cardBg} 0%, ${iconBg}30 100%)`,
            }}
          >
            <span style={{ fontSize: 52, lineHeight: 1, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' }}>
              {placeholderIcon}
            </span>
            <span style={{
              fontSize: 10, fontWeight: 700, color: subColor,
              fontFamily: "'Outfit', sans-serif", opacity: 0.5,
            }}>
              {title}
            </span>
          </div>
        ) : (
          <img src={image} alt={title} className="uc-img" />
        )}

        {/* Rich overlay: dark gradient at bottom + accent color tint at top */}
        <div
          className="uc-overlay"
          style={{
            background: `linear-gradient(
              to bottom,
              ${accentColor}18 0%,
              transparent 38%,
              rgba(0,0,0,0.08) 65%,
              rgba(0,0,0,0.32) 100%
            )`,
          }}
        />

        {isNew && <div className="uc-new-badge">NEW</div>}
        <div className="uc-qr-badge"><QRIcon />{qrPosition}</div>
      </div>

      {/* Body */}
      <div className="uc-body">

        {/* Category */}
        <div className="uc-category" style={{ color: accentColor }}>{category}</div>

        {/* Icon + Title + Tag */}
        <div className="uc-top-row">
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', minWidth: 0 }}>
            <div className="uc-icon-wrap" style={{ background: iconBg }}>
              <Icon size={16} color="#fff" />
            </div>
            <div className="uc-title-block">
              <h3 style={{
                margin: 0, fontSize: 13.5, fontWeight: 800, color: titleColor,
                fontFamily: "'Outfit', sans-serif", lineHeight: 1.2,
                letterSpacing: '-0.02em', whiteSpace: 'nowrap',
                overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                {title}
              </h3>
              <div style={{
                fontSize: 10, color: subColor, marginTop: 2,
                fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
              }}>
                {badge} {qrSize}
              </div>
            </div>
          </div>
          <span style={{
            fontSize: 9.5, fontWeight: 800, padding: '3px 9px', borderRadius: 100,
            background: tagBg, color: tagColor, whiteSpace: 'nowrap',
            fontFamily: "'Outfit', sans-serif", flexShrink: 0,
          }}>
            {tag}
          </span>
        </div>

        {/* Description */}
        <p className="uc-desc" style={{ color: descColor }}>{description}</p>

        {/* Pills */}
        <div className="uc-pills">
          {features.map((f) => (
            <span key={f} className="uc-pill" style={{ background: tagBg, color: tagColor }}>{f}</span>
          ))}
        </div>

        {/* Glass stats with dividers */}
        <div className="uc-stats">
          {stats.map((s, i) => {
            const SI = s.icon
            return (
              <>
                {i > 0 && <div key={`div-${i}`} className="uc-stat-divider" />}
                <div key={i} className="uc-stat-cell">
                  <SI size={10} color={iconBg} />
                  <span style={{
                    fontSize: 12, fontWeight: 900, color: titleColor,
                    fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.02em',
                  }}>
                    {s.value}
                  </span>
                  <span style={{
                    fontSize: 7.5, color: subColor, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {s.label}
                  </span>
                </div>
              </>
            )
          })}
        </div>

        {/* Footer */}
        <div className="uc-footer">
          <div className="uc-finder" style={{ color: subColor }}>
            <span className="uc-dot" />
            Finder-friendly
          </div>
          <button type="button" className="uc-learn-btn" style={{ color: titleColor }}>
            Learn more <ArrowUpRight size={11} />
          </button>
        </div>

      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   QR ICON
───────────────────────────────────────────── */
function QRIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
      stroke="#2ebd3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3m0 4h4m-4-4v4m4-7h-4m4 0v3" />
    </svg>
  )
}