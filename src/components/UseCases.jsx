import { useState } from 'react'
import {
  Bike,
  PawPrint,
  Package,
  Laptop,
  Baby,
  UserCheck,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  MapPin,
  Bell,
  Clock,
  Wifi,
} from 'lucide-react'

import bike1img from "../../assets/bike1.png"
import carimg from "../../assets/car1.png"
import petimg from "../../assets/dog.png"
import luggageimg from "../../assets/luggage1.png"
import seniorimg from "../../assets/senior.png"
import kidimg from "../../assets/kid.png"

const USE_CASES = [
  {
    icon: Bike,
    title: 'Motorcycles & Bikes',
    qrSize: '3.5 cm QR Sticker',
    description:
      'Weather-proof 3.5cm QR sticker placed on the fuel tank or handlebar. If your bike is found, the finder scans and you get an instant alert with GPS location.',
    cardBg: '#EAF3DE',
    iconBg: '#2ebd3a',
    tag: 'QR Sticker',
    tagBg: '#C0DD97',
    tagColor: '#27500A',
    titleColor: '#27500A',
    subColor: '#3B6D11',
    descColor: '#3B6D11',
    image: bike1img,
    badge: '🏍️',
    qrPosition: 'On fuel tank / handlebar',
    features: ['Waterproof', 'Tamper-evident', 'UV-resistant'],
    stats: [
      { icon: Clock, value: '< 3s',  label: 'Alert' },
      { icon: MapPin, value: 'Live',  label: 'GPS'   },
      { icon: Bell,  value: '24/7',   label: 'Active' },
    ],
  },
  {
    icon: Package,
    title: 'Bags & Luggage',
    qrSize: '3.5 cm QR Sticker',
    description:
      'Durable sticker or tag attached to your bag strap. Perfect for travel bags, school bags, and laptop bags. Works even in low-light.',
    cardBg: '#E6F1FB',
    iconBg: '#0B2545',
    tag: 'QR Tag',
    tagBg: '#B5D4F4',
    tagColor: '#0C447C',
    titleColor: '#0C447C',
    subColor: '#185FA5',
    descColor: '#185FA5',
    image: luggageimg,
    badge: '🎒',
    qrPosition: 'On bag strap / handle',
    features: ['Airport-ready', 'Low-light scan', 'Flexible tag'],
    stats: [
      { icon: Wifi,  value: 'NFC',    label: '+QR'    },
      { icon: MapPin, value: 'Global', label: 'Scan'  },
      { icon: Bell,  value: 'Instant',label: 'Alert'  },
    ],
  },
  {
    icon: PawPrint,
    title: 'Dogs, Cats & Pets',
    qrSize: 'Collar QR Tag',
    description:
      "Attach a lightweight QR tag to your pet's collar. If they wander, anyone can scan it and you'll receive an instant notification with their location.",
    cardBg: '#EAF3DE',
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
    features: ['Lightweight', 'Weatherproof', 'Any camera'],
    stats: [
      { icon: MapPin, value: 'GPS',   label: 'Per scan' },
      { icon: Bell,  value: 'Auto',   label: 'WhatsApp' },
      { icon: Zap,   value: '5+',     label: 'Contacts' },
    ],
  },
  {
    icon: Baby,
    title: 'Children Safety',
    qrSize: 'Hand Band / Shoulder',
    description:
      'Wearable QR wristband or shoulder tag for your child. If they get separated in crowded places, a good samaritan scans the band and you get alerted instantly.',
    cardBg: '#EEEDFE',
    iconBg: '#0B2545',
    tag: 'Hand Band',
    tagBg: '#CECBF6',
    tagColor: '#26215C',
    titleColor: '#26215C',
    subColor: '#534AB7',
    descColor: '#534AB7',
    image: kidimg,
    badge: '🧒',
    qrPosition: 'On hand band / shoulder',
    features: ['Soft band', 'No app needed', 'Instant alert'],
    stats: [
      { icon: Bell,  value: 'Instant', label: 'Parent' },
      { icon: MapPin, value: 'Live',   label: 'GPS'    },
      { icon: Zap,   value: 'Any',     label: 'Phone'  },
    ],
  },
  {
    icon: Laptop,
    title: 'Laptops & Valuables',
    qrSize: 'QR + NFC Sticker',
    description:
      'Stick a dual QR+NFC tag on your laptop, camera, or any valuable. Works with both QR scan and NFC tap for maximum recovery speed.',
    cardBg: '#E1F5EE',
    iconBg: '#2ebd3a',
    tag: 'NFC + QR',
    tagBg: '#9FE1CB',
    tagColor: '#085041',
    titleColor: '#085041',
    subColor: '#0F6E56',
    descColor: '#0F6E56',
    image: carimg,
    badge: '💻',
    qrPosition: 'Back of device',
    features: ['Ultra-thin', 'Dual mode', 'No bulge'],
    stats: [
      { icon: Wifi,  value: 'NFC',    label: '+QR'    },
      { icon: Bell,  value: 'Auto',   label: 'Alert'  },
      { icon: MapPin, value: 'Live',  label: 'GPS'    },
    ],
  },
  {
    icon: UserCheck,
    title: 'Senior Citizens',
    qrSize: 'Emergency QR + NFC',
    description:
      'Emergency profile with medical info, blood group, and contacts. NFC tap or QR scan gives responders instant access to critical details — no app needed.',
    cardBg: '#EEEDFE',
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
      { icon: Zap,   value: 'SOS',    label: 'Workflow' },
      { icon: Bell,  value: '5',      label: 'Family'   },
      { icon: MapPin, value: 'Med',   label: 'Info'     },
    ],
  },
]

export default function UseCases() {
  return (
    <section
      id="use-cases"
      style={{
        background: '#ffffff',
        padding: '90px 0 80px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 20px',
              borderRadius: 100,
              background: '#e8f8eb',
              border: '1px solid #c6edd0',
              marginBottom: 16,
            }}
          >
            <ShieldCheck size={15} color="#2ebd3a" strokeWidth={2.2} />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#2ebd3a' }}>
              Real-World Use Cases
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 900,
              color: '#0B2545',
              margin: '0 0 14px',
              lineHeight: 1.15,
            }}
          >
            Protect Everything You Love
          </h2>

          <p
            style={{
              color: '#4b7a62',
              fontSize: 16,
              maxWidth: 540,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            From bikes to babies — ScanForSafe QR tags and NFC chips keep your world safe and recoverable
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
          className="use-cases-grid"
        >
          {USE_CASES.map((uc) => (
            <UseCard key={uc.title} {...uc} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .use-cases-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .use-cases-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function UseCard({
  icon: Icon,
  title,
  qrSize,
  description,
  cardBg,
  iconBg,
  tag,
  tagBg,
  tagColor,
  titleColor,
  subColor,
  descColor,
  image,
  badge,
  qrPosition,
  isNew,
  features,
  stats,
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        background: cardBg,
        border: 'none',
        boxShadow: hovered
          ? '0 20px 48px rgba(0,0,0,0.12)'
          : '0 2px 12px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        position: 'relative',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* NEW badge */}
      {isNew && (
        <div
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            zIndex: 10,
            background: '#534AB7',
            color: '#fff',
            fontSize: 11,
            fontWeight: 800,
            padding: '4px 12px',
            borderRadius: 100,
            letterSpacing: '0.05em',
          }}
        >
          NEW
        </div>
      )}

      {/* Image */}
      <div style={{ position: 'relative', height: 244, overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block',
            background: '#f0f0f0',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.4s ease',
          }}
        />

        {/* Subtle overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.22))',
          }}
        />

        {/* QR position badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            background: '#ffffff',
            borderRadius: 10,
            padding: '7px 13px',
            fontSize: 12,
            fontWeight: 700,
            color: '#2ebd3a',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            border: '1.5px solid #e8f8eb',
            zIndex: 10,
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2ebd3a" strokeWidth="2.5">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <path d="M14 14h3v3m0 4h4m-4-4v4m4-7h-4m4 0v3" />
          </svg>
          {qrPosition}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '18px 18px 20px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>

        {/* Title row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon size={20} color="#fff" strokeWidth={2.2} />
            </div>

            <div>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: titleColor, lineHeight: 1.3 }}>
                {title}
              </h3>
              <div style={{ fontSize: 11, color: subColor, fontWeight: 600, marginTop: 3 }}>
                {badge} {qrSize}
              </div>
            </div>
          </div>

          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 100,
              background: tagBg,
              color: tagColor,
              whiteSpace: 'nowrap',
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            {tag}
          </span>
        </div>

        {/* Description */}
        <p style={{ margin: 0, fontSize: 14, color: descColor, lineHeight: 1.65 }}>
          {description}
        </p>

        {/* ── NEW: Feature pills ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {features.map((f) => (
            <span
              key={f}
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: '4px 11px',
                borderRadius: 100,
                background: tagBg,
                color: tagColor,
                border: `1px solid ${tagColor}22`,
                letterSpacing: '0.02em',
              }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* ── NEW: Stats strip ── */}
        <div
          style={{
            display: 'flex',
            gap: 6,
            background: 'rgba(255,255,255,0.55)',
            borderRadius: 14,
            padding: '10px 8px',
            border: `1px solid ${tagColor}18`,
          }}
        >
          {stats.map((s, i) => {
            const StatIcon = s.icon
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3,
                  borderRight: i < stats.length - 1 ? `1px solid ${tagColor}20` : 'none',
                  paddingRight: i < stats.length - 1 ? 6 : 0,
                }}
              >
                <StatIcon size={12} color={iconBg} strokeWidth={2.4} />
                <span style={{ fontSize: 13, fontWeight: 900, color: titleColor, lineHeight: 1 }}>
                  {s.value}
                </span>
                <span style={{ fontSize: 9.5, fontWeight: 600, color: subColor, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {s.label}
                </span>
              </div>
            )
          })}
        </div>

        {/* Footer row */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12,
              fontWeight: 700,
              color: subColor,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#2ebd3a',
                boxShadow: '0 0 0 4px rgba(46,189,58,0.10)',
                flexShrink: 0,
              }}
            />
            Finder-friendly setup
          </div>

          <button
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
              fontWeight: 800,
              color: titleColor,
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            Learn more
            <ArrowUpRight size={16} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </div>
  )
}