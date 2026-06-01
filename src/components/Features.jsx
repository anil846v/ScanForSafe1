import { useState, useRef } from 'react'

/* ─────────────────────────────────────────────
   SVG ICON COMPONENTS
───────────────────────────────────────────── */
const Icons = {
  WhatsApp: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  Phone: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
  ),
  Users: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  MapPin: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Zap: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Shield: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Clock: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  RefreshCw: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
    </svg>
  ),
  Car: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v4M4 8H2a1 1 0 00-1 1v5a1 1 0 001 1h1v2a1 1 0 001 1h1a1 1 0 001-1v-2h10v2a1 1 0 001 1h1a1 1 0 001-1v-2h1a1 1 0 001-1V9a1 1 0 00-1-1h-2M4 8h16M6.5 13.5a1 1 0 100-2 1 1 0 000 2zM17.5 13.5a1 1 0 100-2 1 1 0 000 2z"/>
      <path d="M6 8l2-4h8l2 4"/>
    </svg>
  ),
  Luggage: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="7" width="14" height="14" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/>
    </svg>
  ),
  Paw: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/>
      <path d="M9 10a5 5 0 015 5v3.5a3.5 3.5 0 01-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 018 11.5"/>
      <circle cx="4" cy="8" r="2"/>
    </svg>
  ),
  Backpack: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10a4 4 0 014-4h8a4 4 0 014 4v10H4V10z"/>
      <path d="M9 6V5a3 3 0 016 0v1"/>
      <line x1="4" y1="15" x2="20" y2="15"/>
      <path d="M10 19v-4h4v4"/>
    </svg>
  ),
  PersonCane: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="4" r="2"/>
      <path d="M6 9h6l-1 5H7L6 9z"/>
      <path d="M7 14l-2 7"/>
      <path d="M11 14l1 4"/>
      <path d="M14 11l4 8"/>
      <circle cx="18" cy="20" r="1" fill={color}/>
    </svg>
  ),
  Accessibility: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2"/>
      <path d="M6 8h12M10 8v8l-3 4M14 8v4l3 6M8 20h8"/>
    </svg>
  ),
  SearchCar: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="7"/>
      <line x1="15.5" y1="15.5" x2="21" y2="21"/>
      <path d="M7 10h6M8 8l1-2h4l1 2"/>
      <circle cx="8.5" cy="11.5" r=".5" fill={color}/><circle cx="11.5" cy="11.5" r=".5" fill={color}/>
    </svg>
  ),
  FamilyHome: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
      <circle cx="8" cy="7" r="1.2" fill={color} opacity="0.7"/>
      <circle cx="12" cy="6" r="1.2" fill={color} opacity="0.7"/>
      <circle cx="16" cy="7" r="1.2" fill={color} opacity="0.7"/>
    </svg>
  ),
  Heart: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  ),
  Star: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  CheckCircle: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  Send: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  QrCode: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      <rect x="5" y="5" width="3" height="3" fill={color}/><rect x="16" y="5" width="3" height="3" fill={color}/><rect x="16" y="16" width="3" height="3" fill={color}/><rect x="5" y="16" width="3" height="3" fill={color}/>
    </svg>
  ),
  Lock: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  ),
  Bell: ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
    </svg>
  ),
  Wifi: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
    </svg>
  ),
  Battery: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="18" height="11" rx="2" ry="2"/><path d="M22 11v4" strokeWidth="3" strokeLinecap="round"/>
      <rect x="4" y="9" width="12" height="7" rx="1" fill={color} opacity="0.6"/>
    </svg>
  ),
  Signal: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="0" y="15" width="4" height="9" rx="1"/><rect x="6" y="10" width="4" height="14" rx="1"/><rect x="12" y="5" width="4" height="19" rx="1"/><rect x="18" y="0" width="4" height="24" rx="1" opacity="0.3"/>
    </svg>
  ),
  MicOff: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6"/><path d="M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8"/>
    </svg>
  ),
  Volume2: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>
    </svg>
  ),
}

const FEATURE_ICONS = {
  whatsapp: Icons.WhatsApp,
  call:     Icons.Phone,
  contacts: Icons.Users,
  gps:      Icons.MapPin,
  setup:    Icons.Zap,
  privacy:  Icons.Shield,
  history:  Icons.Clock,
  update:   Icons.RefreshCw,
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const FEATURES = [
  { id: 'whatsapp', bg: '#dcfce7', accent: '#16a34a', tagBg: '#bbf7d0', tagColor: '#14532d', tag: 'Most Loved',     title: 'WhatsApp Alerts',        desc: 'Instant WhatsApp notification the moment anyone scans your QR — GPS location and direct call included.',      pills: ['Instant Alert', 'GPS Included', 'No App'] },
  { id: 'call',     bg: '#e0e7ff', accent: '#4338ca', tagBg: '#c7d2fe', tagColor: '#1e1b4b', tag: 'Zero Friction',  title: 'One-Touch Call Connect',  desc: 'Finders call you in one tap — no app, no sign-up. Works even from a basic feature phone anywhere.',           pills: ['One Tap', 'No Sign-up', 'Any Phone'] },
  { id: 'contacts', bg: '#ede9fe', accent: '#7c3aed', tagBg: '#ddd6fe', tagColor: '#3b0764', tag: 'Family Ready',  title: '5 Emergency Contacts',   desc: 'Add family, friends or your vet. If the first contact misses it, the next is notified automatically.',        pills: ['5 Contacts', 'Auto Fallback', '5-Min Retry'] },
  { id: 'gps',      bg: '#ccfbf1', accent: '#0d9488', tagBg: '#99f6e4', tagColor: '#134e4a', tag: 'Smart',          title: 'GPS on Every Scan',       desc: 'Each scan captures precise GPS coordinates and sends a live Maps link so you can locate your item fast.',      pills: ['Live GPS', 'Maps Link', 'Real-Time'] },
  { id: 'setup',    bg: '#fef3c7', accent: '#d97706', tagBg: '#fde68a', tagColor: '#78350f', tag: '3 Minutes',      title: 'Instant Activation',      desc: 'Peel, stick and protected. Register your tag in under 3 minutes — zero technical knowledge required.',        pills: ['Under 3 Min', 'Guided Setup', 'Instant Live'] },
  { id: 'privacy',  bg: '#ffe4e6', accent: '#e11d48', tagBg: '#fecdd3', tagColor: '#881337', tag: 'Privacy First',  title: 'Your Info Stays Hidden',  desc: 'Your phone number is never on the tag. The QR links to a secure proxy — finders see only what you allow.',    pills: ['Encrypted', 'No Personal Data', 'GDPR Safe'] },
  { id: 'history',  bg: '#dbeafe', accent: '#2563eb', tagBg: '#bfdbfe', tagColor: '#1e3a8a', tag: 'Full Visibility',title: 'Scan History & Logs',     desc: 'Dashboard logs every scan — time, location, device. Know exactly when and where your item was found.',        pills: ['Full Timeline', 'Device Info', 'Exportable'] },
  { id: 'update',   bg: '#ffedd5', accent: '#ea580c', tagBg: '#fed7aa', tagColor: '#7c2d12', tag: 'Always Current', title: 'Update Info Anytime',     desc: 'Changed your number? Update in 30 seconds from any device. The physical tag never needs replacing.',          pills: ['Instant Update', 'Any Device', 'Reassignable'] },
]

const USE_CASES = [
  { Icon: Icons.Car,          label: 'Vehicles',        sub: 'Road accidents & emergencies', bg: '#dcfce7', accent: '#16a34a', textColor: '#14532d', border: '#4ade80', stat: '2yr QR validity' },
  { Icon: Icons.Luggage,      label: 'Luggage',         sub: 'Airport & travel recovery',    bg: '#dbeafe', accent: '#2563eb', textColor: '#1e3a8a', border: '#60a5fa', stat: 'Scan anywhere' },
  { Icon: Icons.Paw,          label: 'Pets',            sub: 'Lost pet QR tag recovery',     bg: '#fef3c7', accent: '#d97706', textColor: '#78350f', border: '#fbbf24', stat: '24/7 alerts' },
  { Icon: Icons.Backpack,     label: 'School Kids',     sub: 'Bus transit child safety',     bg: '#ede9fe', accent: '#7c3aed', textColor: '#3b0764', border: '#a78bfa', stat: 'Parent notified' },
  { Icon: Icons.PersonCane,   label: 'Senior Citizens', sub: 'Medical emergency response',   bg: '#ffe4e6', accent: '#e11d48', textColor: '#881337', border: '#fca5a5', stat: 'SOS workflow' },
  { Icon: Icons.Accessibility,label: 'Special Needs',   sub: 'Community assisted return',    bg: '#ccfbf1', accent: '#0d9488', textColor: '#134e4a', border: '#5eead4', stat: 'Care team alerts' },
  { Icon: Icons.SearchCar,    label: 'Missing Vehicle', sub: 'Community alert & recovery',   bg: '#ffedd5', accent: '#ea580c', textColor: '#7c2d12', border: '#fb923c', stat: 'Anti-fraud verified' },
  { Icon: Icons.FamilyHome,   label: 'Family Safety',   sub: 'Daily peace of mind',          bg: '#e0e7ff', accent: '#4338ca', textColor: '#1e1b4b', border: '#818cf8', stat: 'Up to 5 members' },
]

/* ─────────────────────────────────────────────
   ANDROID PHONE FRAME (OnePlus/Redmi style)
───────────────────────────────────────────── */
function AndroidPhoneFrame({ children, screenBg = '#0a0a0a', accentColor = '#16a34a' }) {
  const now = new Date()
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })

  return (
    <div style={{ position: 'relative', width: 272 }}>
      {/* Outer shell — aluminium frame */}
      <div style={{
        width: 272,
        background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 40%, #242424 70%, #1c1c1c 100%)',
        borderRadius: 46,
        padding: '0',
        position: 'relative',
        boxShadow: `
          0 0 0 1px rgba(255,255,255,0.08),
          0 0 0 2px #111,
          0 2px 0 3px rgba(255,255,255,0.04),
          4px 0 0 2px #0d0d0d,
          -4px 0 0 2px #0d0d0d,
          0 32px 64px rgba(0,0,0,0.6),
          0 8px 24px rgba(0,0,0,0.4),
          inset 0 1px 0 rgba(255,255,255,0.12),
          inset 0 -1px 0 rgba(0,0,0,0.3)
        `,
      }}>
        {/* Screen glass with inner bezel */}
        <div style={{
          margin: '10px 8px',
          borderRadius: 38,
          overflow: 'hidden',
          position: 'relative',
          background: screenBg,
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.8)',
        }}>
          {/* Status bar */}
          <div style={{
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            padding: '8px 16px 6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 10,
            flexShrink: 0,
          }}>
            {/* Punch-hole camera left */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{
                width: 11, height: 11,
                borderRadius: '50%',
                background: '#0a0a0a',
                border: '1.5px solid rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04)',
              }} />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 10, fontWeight: 600, letterSpacing: '.02em', marginLeft: 4 }}>{timeStr}</span>
            </div>
            {/* Status icons right */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Icons.Signal size={13} color="rgba(255,255,255,0.8)" />
              <Icons.Wifi size={13} color="rgba(255,255,255,0.8)" />
              <Icons.Battery size={14} color="rgba(255,255,255,0.8)" />
            </div>
          </div>

          {/* Screen content */}
          <div style={{
            height: 478,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            background: screenBg,
          }}>
            {children}
          </div>

          {/* Home indicator */}
          <div style={{
            background: 'rgba(0,0,0,0.9)',
            padding: '5px 0 7px',
            display: 'flex',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <div style={{
              width: 90,
              height: 4,
              borderRadius: 99,
              background: `linear-gradient(90deg, rgba(255,255,255,0.15), ${accentColor}90, rgba(255,255,255,0.15))`,
              boxShadow: `0 0 8px ${accentColor}40`,
            }} />
          </div>
        </div>

        {/* Physical side buttons */}
        {/* Power button right */}
        <div style={{
          position: 'absolute', right: -3, top: 130,
          width: 4, height: 58,
          background: 'linear-gradient(180deg, #3a3a3a, #1a1a1a, #3a3a3a)',
          borderRadius: '0 4px 4px 0',
          boxShadow: '2px 0 4px rgba(0,0,0,0.4), inset 1px 0 0 rgba(255,255,255,0.06)',
        }} />
        {/* Alert slider top-right (OnePlus signature) */}
        <div style={{
          position: 'absolute', right: -3, top: 88,
          width: 4, height: 30,
          background: 'linear-gradient(180deg, #3a3a3a, #1a1a1a, #3a3a3a)',
          borderRadius: '0 4px 4px 0',
          boxShadow: '2px 0 4px rgba(0,0,0,0.4)',
        }} />
        {/* Vol up left */}
        <div style={{
          position: 'absolute', left: -3, top: 100,
          width: 4, height: 46,
          background: 'linear-gradient(180deg, #3a3a3a, #1a1a1a, #3a3a3a)',
          borderRadius: '4px 0 0 4px',
          boxShadow: '-2px 0 4px rgba(0,0,0,0.4), inset -1px 0 0 rgba(255,255,255,0.06)',
        }} />
        {/* Vol down left */}
        <div style={{
          position: 'absolute', left: -3, top: 156,
          width: 4, height: 46,
          background: 'linear-gradient(180deg, #3a3a3a, #1a1a1a, #3a3a3a)',
          borderRadius: '4px 0 0 4px',
          boxShadow: '-2px 0 4px rgba(0,0,0,0.4)',
        }} />

        {/* Camera module top-right back (subtle bump visible from front — reflection) */}
        <div style={{
          position: 'absolute', top: 16, right: 20,
          width: 28, height: 8,
          background: 'rgba(255,255,255,0.03)',
          borderRadius: 4,
          border: '1px solid rgba(255,255,255,0.05)',
        }} />
      </div>

      {/* Accent glow under phone */}
      <div style={{
        position: 'absolute',
        bottom: -12, left: '50%', transform: 'translateX(-50%)',
        width: 160, height: 20,
        background: `radial-gradient(ellipse, ${accentColor}35 0%, transparent 70%)`,
        filter: 'blur(6px)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}

/* ─────────────────────────────────────────────
   SIM CTA
───────────────────────────────────────────── */
function SimCTA({ running, hasData, onRun, onReset, accent, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginTop: 20 }}>
      <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {!running && !hasData && (
          <>
            <div style={{ position: 'absolute', width: 224, height: 52, borderRadius: 99, border: `2px solid ${accent}`, opacity: 0.3, animation: 'ctaPulse 1.8s ease-out infinite' }} />
            <div style={{ position: 'absolute', width: 224, height: 52, borderRadius: 99, border: `2px solid ${accent}`, opacity: 0.15, animation: 'ctaPulse 1.8s ease-out 0.5s infinite' }} />
          </>
        )}
        <button
          onClick={onRun}
          disabled={running}
          style={{
            width: 214, padding: '12px 0',
            background: running ? '#e2e8f0' : `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`,
            color: running ? '#94a3b8' : '#fff',
            border: 'none', borderRadius: 99,
            fontSize: 13, fontWeight: 800, letterSpacing: '.04em',
            cursor: running ? 'not-allowed' : 'pointer',
            transition: 'all 0.25s',
            boxShadow: running ? 'none' : `0 8px 24px ${accent}45, 0 2px 8px ${accent}30`,
            position: 'relative', zIndex: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
        >
          {running
            ? <><span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⟳</span> Running…</>
            : <><span>▶</span> {label}</>
          }
        </button>
      </div>
      {hasData && !running && (
        <button onClick={onReset} style={{ padding: '5px 20px', background: 'transparent', color: '#94a3b8', border: '1.5px solid #e2e8f0', borderRadius: 99, fontSize: 11, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.color = '#64748b' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#94a3b8' }}>
          ↺ Reset
        </button>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   WHATSAPP SIMULATOR
───────────────────────────────────────────── */
const WA_STEPS = [
  { id: 'scan',    delay: 0,    duration: 1000, label: 'QR Scanned',        sub: 'Someone scanned your tag',       color: '#0ea5e9' },
  { id: 'gps',     delay: 1200, duration: 1200, label: 'GPS Captured',       sub: 'Location: 13.0827°N, 80.2707°E', color: '#f59e0b' },
  { id: 'send',    delay: 2600, duration: 1000, label: 'Sending WhatsApp…', sub: 'Routing to +91-98XXX-XXXXX',     color: '#16a34a' },
  { id: 'deliver', delay: 3800, duration: 800,  label: 'Delivered ✓✓',       sub: 'Message delivered successfully', color: '#16a34a' },
  { id: 'read',    delay: 4800, duration: 600,  label: 'Read ✓✓',            sub: 'Owner opened the message',       color: '#2563eb' },
  { id: 'call',    delay: 5600, duration: 800,  label: 'Owner Calling Back', sub: 'Direct call connected',          color: '#7c3aed' },
]
const WA_MESSAGE = {
  header: '🔔 ScanForSafe Alert',
  lines: ['🏷️ Item "Black Laptop Bag" scanned.', '📍 Location: Egmore, Chennai', '🗺️ maps.google.com/?q=13.08,80.27', '⏰ Time: Just Now', '📱 Device: Android · Chrome', '', '📞 Tap to call the finder →']
}
const STEP_ICONS = { scan: Icons.QrCode, gps: Icons.MapPin, send: Icons.WhatsApp, deliver: Icons.CheckCircle, read: Icons.Bell, call: Icons.Phone }

function WhatsAppSimulatorWrapper() {
  const [running, setRunning] = useState(false)
  const [completedSteps, setCompletedSteps] = useState([])
  const [activeStep, setActiveStep] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const [typedLines, setTypedLines] = useState([])
  const timersRef = useRef([])

  const reset = () => { timersRef.current.forEach(clearTimeout); timersRef.current = []; setRunning(false); setCompletedSteps([]); setActiveStep(null); setShowMessage(false); setTypedLines([]) }
  const run = () => {
    reset(); setRunning(true)
    WA_STEPS.forEach((step, i) => {
      const t1 = setTimeout(() => setActiveStep(step.id), step.delay)
      const t2 = setTimeout(() => {
        setCompletedSteps(p => [...p, step.id])
        if (i === WA_STEPS.length - 1) {
          setActiveStep(null); setShowMessage(true)
          WA_MESSAGE.lines.forEach((_, li) => {
            const t3 = setTimeout(() => setTypedLines(p => [...p, WA_MESSAGE.lines[li]]), li * 260)
            timersRef.current.push(t3)
          })
          const tDone = setTimeout(() => setRunning(false), WA_MESSAGE.lines.length * 260 + 500)
          timersRef.current.push(tDone)
        }
      }, step.delay + step.duration)
      timersRef.current.push(t1, t2)
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <AndroidPhoneFrame screenBg="#1a1a1a" accentColor="#16a34a">
        <div style={{ background: 'linear-gradient(180deg,#075E54,#054d45)', padding: '10px 14px 10px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#25D366,#16a34a)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <Icons.Bell size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#fff', letterSpacing: '.01em' }}>ScanForSafe Bot</div>
            <div style={{ fontSize: 9, color: running ? '#a7f3d0' : '#86efac', display: 'flex', alignItems: 'center', gap: 3 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#25D366', boxShadow: '0 0 4px #25D366' }} />
              {running ? 'typing...' : 'online'}
            </div>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 10px', display: 'flex', flexDirection: 'column', gap: 5, background: '#0f1f1c' }}>
          {!showMessage && !running && completedSteps.length === 0 && (
            <div style={{ textAlign: 'center', marginTop: 60 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(37,211,102,0.15)', border: '2px solid rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                <Icons.WhatsApp size={26} color="#25D366" />
              </div>
              <div style={{ fontSize: 11, color: '#86efac', fontWeight: 700 }}>Tap "Simulate Alert" below</div>
              <div style={{ fontSize: 9.5, color: '#4a7c59', marginTop: 3 }}>Watch real-time delivery flow</div>
            </div>
          )}
          {(running || completedSteps.length > 0) && !showMessage && WA_STEPS.map(step => {
            const done = completedSteps.includes(step.id)
            const active = activeStep === step.id
            const StepIcon = STEP_ICONS[step.id] || Icons.CheckCircle
            return (
              <div key={step.id} style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', borderRadius: 10,
                background: done ? 'rgba(37,211,102,0.12)' : active ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${done ? 'rgba(37,211,102,0.3)' : active ? step.color + '60' : 'rgba(255,255,255,0.05)'}`,
                transition: 'all 0.3s',
              }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: done ? '#16a34a' : active ? step.color + '25' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s' }}>
                  {done ? <Icons.CheckCircle size={12} color="#fff" /> : <StepIcon size={12} color={active ? step.color : '#4a7c59'} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 9.5, fontWeight: 700, color: done ? '#25D366' : active ? step.color : '#4a7c59' }}>{step.label}</div>
                  {(done || active) && <div style={{ fontSize: 8.5, color: '#4a7c59', marginTop: 1 }}>{step.sub}</div>}
                </div>
                {active && <div style={{ display: 'flex', gap: 2 }}>{[0,1,2].map(d => <div key={d} style={{ width: 4, height: 4, borderRadius: '50%', background: step.color, animation: `bounce 0.8s ease ${d*0.15}s infinite` }} />)}</div>}
              </div>
            )
          })}
          {showMessage && (
            <div style={{ background: 'rgba(37,211,102,0.08)', borderRadius: '14px 14px 14px 4px', padding: '10px 12px', maxWidth: '90%', border: '1px solid rgba(37,211,102,0.25)', animation: 'fadeUp 0.4s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <Icons.Bell size={11} color="#25D366" />
                <div style={{ fontSize: 10, fontWeight: 900, color: '#25D366' }}>{WA_MESSAGE.header}</div>
              </div>
              {typedLines.map((line, i) => (
                <div key={i} style={{ fontSize: 9.5, color: '#d1fae5', lineHeight: 1.7, minHeight: line === '' ? 5 : undefined, animation: 'fadeUp 0.25s ease' }}>{line}</div>
              ))}
              {typedLines.length === WA_MESSAGE.lines.length && (
                <div style={{ marginTop: 8, background: 'linear-gradient(135deg,#25D366,#16a34a)', borderRadius: 8, padding: '5px 10px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, animation: 'fadeUp 0.3s ease' }}>
                  <Icons.Phone size={11} color="#fff" />
                  <span style={{ fontSize: 9.5, fontWeight: 800, color: '#fff' }}>Call Finder Now</span>
                </div>
              )}
              <div style={{ textAlign: 'right', fontSize: 8, color: '#4a7c59', marginTop: 4 }}>{typedLines.length === WA_MESSAGE.lines.length ? '✓✓' : '✓'} Just now</div>
            </div>
          )}
        </div>
        <div style={{ background: '#0a1a16', padding: '7px 10px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 20, padding: '5px 12px', fontSize: 9, color: '#4a7c59', border: '1px solid rgba(255,255,255,0.06)' }}>Type a message</div>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icons.Send size={12} color="#fff" />
          </div>
        </div>
      </AndroidPhoneFrame>
      <SimCTA running={running} hasData={completedSteps.length > 0 || showMessage} onRun={run} onReset={reset} accent="#16a34a" label="Simulate Alert" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   CALL CONNECT SIMULATOR
───────────────────────────────────────────── */
const CALL_STEPS = [
  { id: 'scan',    delay: 0,    duration: 900,  label: 'QR Code Scanned',    color: '#4338ca', Icon: Icons.QrCode },
  { id: 'page',    delay: 1100, duration: 800,  label: 'Finder Page Loaded', color: '#4338ca', Icon: Icons.Wifi },
  { id: 'tap',     delay: 2100, duration: 600,  label: 'Finder Taps Call',   color: '#4338ca', Icon: Icons.Phone },
  { id: 'ring',    delay: 2900, duration: 1400, label: 'Calling Owner…',     color: '#6366f1', Icon: Icons.Phone },
  { id: 'answer',  delay: 4500, duration: 800,  label: 'Owner Answers',      color: '#16a34a', Icon: Icons.CheckCircle },
  { id: 'connect', delay: 5500, duration: 600,  label: 'Connected!',         color: '#16a34a', Icon: Icons.Heart },
]

function CallSimulatorWrapper() {
  const [running, setRunning] = useState(false)
  const [completedSteps, setCompletedSteps] = useState([])
  const [activeStep, setActiveStep] = useState(null)
  const [phase, setPhase] = useState('idle')
  const [callTime, setCallTime] = useState(0)
  const timersRef = useRef([])
  const callTimerRef = useRef(null)

  const reset = () => { timersRef.current.forEach(clearTimeout); clearInterval(callTimerRef.current); setRunning(false); setCompletedSteps([]); setActiveStep(null); setPhase('idle'); setCallTime(0) }
  const run = () => {
    reset(); setRunning(true); setPhase('qr')
    CALL_STEPS.forEach((step, i) => {
      const t1 = setTimeout(() => { setActiveStep(step.id); if (step.id === 'ring') setPhase('calling'); if (step.id === 'connect') { setPhase('connected'); callTimerRef.current = setInterval(() => setCallTime(p => p+1), 1000) } }, step.delay)
      const t2 = setTimeout(() => { setCompletedSteps(p => [...p, step.id]); if (i === CALL_STEPS.length-1) { setActiveStep(null); setRunning(false) } }, step.delay + step.duration)
      timersRef.current.push(t1, t2)
    })
  }
  const fmtTime = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`

  const screenContent = () => {
    if (phase === 'idle') return (
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding: 20, background: '#0a0f1e' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(67,56,202,0.2)', border: '2px solid rgba(99,102,241,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, boxShadow: '0 0 20px rgba(99,102,241,0.2)' }}>
          <Icons.Phone size={28} color="#818cf8" />
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: '#e0e7ff', textAlign: 'center' }}>One-Touch Call</div>
        <div style={{ fontSize: 10, color: '#6366f1', textAlign: 'center', marginTop: 6, lineHeight: 1.6 }}>No app. No sign-up.<br/>Works on any phone.</div>
      </div>
    )
    if (phase === 'qr') return (
      <div style={{ flex:1, display:'flex', flexDirection:'column', gap:5, padding: '14px 12px', overflowY:'auto', background: '#0a0f1e' }}>
        {CALL_STEPS.slice(0,3).map(step => {
          const done = completedSteps.includes(step.id); const active = activeStep === step.id
          return (
            <div key={step.id} style={{ display:'flex', alignItems:'center', gap:8, padding:'7px 10px', borderRadius:10, background: done ? 'rgba(99,102,241,0.15)' : active ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)', border: `1px solid ${done ? 'rgba(99,102,241,0.4)' : active ? step.color+'50' : 'rgba(255,255,255,0.05)'}`, transition:'all 0.3s' }}>
              <div style={{ width:26,height:26,borderRadius:'50%',background:done?'#4338ca':'rgba(255,255,255,0.05)',display:'flex',alignItems:'center',justifyContent:'center' }}>
                {done ? <Icons.CheckCircle size={13} color="#fff"/> : <step.Icon size={13} color={active?step.color:'#6366f1'}/>}
              </div>
              <div style={{fontSize:10, fontWeight:700, color: done?'#818cf8':active?step.color:'#4a4a7a'}}>{step.label}</div>
              {active && <div style={{marginLeft:'auto',display:'flex',gap:2}}>{[0,1,2].map(d=><div key={d} style={{width:4,height:4,borderRadius:'50%',background:step.color,animation:`bounce 0.8s ease ${d*0.15}s infinite`}}/>)}</div>}
            </div>
          )
        })}
      </div>
    )
    if (phase === 'calling') return (
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'linear-gradient(160deg,#0a0f1e,#1e1b4b)', padding:20 }}>
        <div style={{ position:'relative', marginBottom:20 }}>
          <div style={{ position:'absolute', inset:-16, borderRadius:'50%', border:'2px solid rgba(99,102,241,0.2)', animation:'pulse 1.5s ease infinite' }} />
          <div style={{ position:'absolute', inset:-8, borderRadius:'50%', border:'2px solid rgba(99,102,241,0.35)', animation:'pulse 1.5s ease 0.3s infinite' }} />
          <div style={{ width:70, height:70, borderRadius:'50%', background:'linear-gradient(135deg,rgba(99,102,241,0.3),rgba(67,56,202,0.4))', border:'2px solid #818cf8', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 0 30px rgba(99,102,241,0.4)' }}>
            <Icons.Phone size={28} color="#c7d2fe" />
          </div>
        </div>
        <div style={{fontSize:13, fontWeight:800, color:'#e0e7ff', marginBottom:4}}>Calling Owner…</div>
        <div style={{fontSize:10, color:'#6366f1', marginBottom:24}}>+91-98XXX-XXXXX</div>
        <div style={{display:'flex', gap:20}}>
          <div style={{width:46,height:46,borderRadius:'50%',background:'rgba(239,68,68,0.2)',border:'2px solid rgba(239,68,68,0.5)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Icons.Phone size={18} color="#ef4444" />
          </div>
          <div style={{width:46,height:46,borderRadius:'50%',background:'rgba(34,197,94,0.2)',border:'2px solid rgba(34,197,94,0.5)',display:'flex',alignItems:'center',justifyContent:'center',animation:'pulse 1s ease infinite'}}>
            <Icons.Phone size={18} color="#22c55e" />
          </div>
        </div>
      </div>
    )
    if (phase === 'connected') return (
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'linear-gradient(160deg,#052e16,#14532d)', padding:20 }}>
        <div style={{ width:70, height:70, borderRadius:'50%', background:'rgba(22,163,74,0.25)', border:'2px solid #4ade80', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:12, boxShadow:'0 0 30px rgba(74,222,128,0.3)' }}>
          <Icons.Heart size={30} color="#4ade80" />
        </div>
        <div style={{fontSize:12, fontWeight:800, color:'#dcfce7', marginBottom:2}}>Connected!</div>
        <div style={{fontSize:10, color:'#86efac', marginBottom:10}}>Owner & Finder on Call</div>
        <div style={{fontSize:22, fontWeight:900, color:'#4ade80', fontFamily:'monospace', letterSpacing:3, background:'rgba(0,0,0,0.3)', padding:'6px 16px', borderRadius:10}}>{fmtTime(callTime)}</div>
        <div style={{display:'flex', gap:14, marginTop:20}}>
          {[Icons.MicOff, Icons.Phone, Icons.Volume2].map((Icon, i) => (
            <div key={i} style={{width:38,height:38,borderRadius:'50%',background:i===1?'rgba(239,68,68,0.3)':'rgba(255,255,255,0.1)',border:`1px solid ${i===1?'rgba(239,68,68,0.5)':'rgba(255,255,255,0.15)'}`,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Icon size={16} color={i===1?'#ef4444':'rgba(255,255,255,0.7)'} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
      <AndroidPhoneFrame screenBg="#0a0f1e" accentColor="#4338ca">{screenContent()}</AndroidPhoneFrame>
      <SimCTA running={running} hasData={completedSteps.length > 0} onRun={run} onReset={reset} accent="#4338ca" label="Simulate Call" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   EMERGENCY CONTACTS SIMULATOR
───────────────────────────────────────────── */
const CONTACTS_LIST = [
  { name: 'Priya (Wife)',     num: '+91-98400-XXXXX', relation: 'Primary',    status: 'idle' },
  { name: 'Rajan (Brother)',  num: '+91-99400-XXXXX', relation: 'Fallback 1', status: 'idle' },
  { name: 'Dr. Kumar (Vet)',  num: '+91-94400-XXXXX', relation: 'Fallback 2', status: 'idle' },
  { name: 'Meena (Neighbor)', num: '+91-90400-XXXXX', relation: 'Fallback 3', status: 'idle' },
  { name: 'Raj (Friend)',     num: '+91-88400-XXXXX', relation: 'Fallback 4', status: 'idle' },
]

function ContactsSimulatorWrapper() {
  const [running, setRunning] = useState(false)
  const [contacts, setContacts] = useState(CONTACTS_LIST.map(c=>({...c})))
  const [log, setLog] = useState([])
  const timersRef = useRef([])

  const reset = () => { timersRef.current.forEach(clearTimeout); setRunning(false); setContacts(CONTACTS_LIST.map(c=>({...c}))); setLog([]) }
  const run = () => {
    reset(); setRunning(true)
    const events = [
      { t: 400,  i: 0, status: 'sending',  msg: '📤 Alerting Priya…' },
      { t: 1400, i: 0, status: 'missed',   msg: '❌ Priya missed — retrying in 5 min' },
      { t: 2200, i: 1, status: 'sending',  msg: '📤 Alerting Rajan…' },
      { t: 3200, i: 1, status: 'missed',   msg: '❌ Rajan missed — next contact' },
      { t: 4000, i: 2, status: 'sending',  msg: '📤 Alerting Dr. Kumar…' },
      { t: 5100, i: 2, status: 'answered', msg: '✅ Dr. Kumar responded!' },
    ]
    events.forEach(ev => {
      const t = setTimeout(() => {
        setContacts(prev => { const next=[...prev]; next[ev.i]={...next[ev.i],status:ev.status}; return next })
        setLog(p => [...p, ev.msg])
        if (ev.status === 'answered') setRunning(false)
      }, ev.t)
      timersRef.current.push(t)
    })
  }

  const statusConfig = { idle: { bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)', color: '#4a4a7a', label: '—' }, sending: { bg: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.35)', color: '#fbbf24', label: 'Alerting…' }, missed: { bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.3)', color: '#ef4444', label: 'Missed' }, answered: { bg: 'rgba(34,197,94,0.12)', border: 'rgba(34,197,94,0.35)', color: '#22c55e', label: 'Responded ✓' } }
  const contactIcons = [Icons.Heart, Icons.Users, Icons.Shield, Icons.Star, Icons.Users]

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
      <AndroidPhoneFrame screenBg="#0d0720" accentColor="#7c3aed">
        <div style={{ background: 'linear-gradient(180deg,#1a0a40,#0d0720)', padding: '10px 14px', flexShrink:0, borderBottom:'1px solid rgba(124,58,237,0.3)' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
            <div style={{ width:34, height:34, borderRadius:'50%', background:'rgba(124,58,237,0.3)', border:'1.5px solid rgba(167,139,250,0.4)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <Icons.Users size={16} color="#a78bfa" />
            </div>
            <div>
              <div style={{fontSize:12, fontWeight:800, color:'#e9d5ff'}}>Emergency Chain</div>
              <div style={{fontSize:9, color:'#7c3aed'}}>Auto-escalates until answered</div>
            </div>
          </div>
        </div>
        <div style={{ flex:1, overflowY:'auto', padding:'10px 10px', background:'#0d0720' }}>
          {contacts.map((c, i) => {
            const cfg = statusConfig[c.status]
            const ContactIcon = contactIcons[i]
            return (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 10px', borderRadius:12, marginBottom:5, background:cfg.bg, border:`1.5px solid ${cfg.border}`, transition:'all 0.4s' }}>
                <div style={{ width:32, height:32, borderRadius:'50%', background:'rgba(124,58,237,0.2)', border:`1px solid rgba(124,58,237,0.3)`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <ContactIcon size={14} color={c.status==='answered'?'#22c55e':c.status==='missed'?'#ef4444':c.status==='sending'?'#fbbf24':'#7c3aed'} />
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{fontSize:10, fontWeight:800, color:'#e9d5ff', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{c.name}</div>
                  <div style={{fontSize:8.5, color:'#7c3aed'}}>{c.relation}</div>
                </div>
                <div style={{ fontSize:8.5, fontWeight:700, color:cfg.color, flexShrink:0, display:'flex', alignItems:'center', gap:4 }}>
                  {cfg.label}
                  {c.status==='sending' && <div style={{display:'flex',gap:2}}>{[0,1,2].map(d=><div key={d} style={{width:3,height:3,borderRadius:'50%',background:'#fbbf24',animation:`bounce 0.8s ease ${d*0.15}s infinite`}}/>)}</div>}
                </div>
              </div>
            )
          })}
          {log.length > 0 && (
            <div style={{ marginTop:6, background:'rgba(124,58,237,0.08)', borderRadius:10, padding:'8px 10px', border:'1px solid rgba(124,58,237,0.2)' }}>
              {log.map((l,i)=><div key={i} style={{fontSize:8.5, color:'#c4b5fd', lineHeight:1.8, animation:'fadeUp 0.3s ease'}}>{l}</div>)}
            </div>
          )}
        </div>
      </AndroidPhoneFrame>
      <SimCTA running={running} hasData={log.length>0} onRun={run} onReset={reset} accent="#7c3aed" label="Simulate Chain" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   GPS SIMULATOR
───────────────────────────────────────────── */
function GPSSimulatorWrapper() {
  const [phase, setPhase] = useState('idle')
  const [accuracy, setAccuracy] = useState(0)
  const [coords, setCoords] = useState(null)
  const [running, setRunning] = useState(false)
  const [dots, setDots] = useState(0)
  const timersRef = useRef([])
  const dotRef = useRef(null)

  const reset = () => { timersRef.current.forEach(clearTimeout); clearInterval(dotRef.current); setPhase('idle'); setAccuracy(0); setCoords(null); setRunning(false); setDots(0) }
  const run = () => {
    reset(); setRunning(true); setPhase('scanning')
    dotRef.current = setInterval(() => setDots(d=>(d+1)%4), 500)
    timersRef.current.push(setTimeout(() => {
      setPhase('locating')
      let acc = 0
      const accInterval = setInterval(() => { acc += 8; if (acc >= 100) { acc=100; clearInterval(accInterval) } setAccuracy(acc) }, 60)
      timersRef.current.push(setTimeout(() => {
        clearInterval(accInterval); clearInterval(dotRef.current)
        setCoords({ lat:'13.0827° N', lng:'80.2707° E', area:'Egmore, Chennai, TN', time:'Just now', device:'Android · Chrome 124' })
        setPhase('done'); setRunning(false)
      }, 2000))
    }, 1500))
  }
  const dotStr = '.'.repeat(dots)

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
      <AndroidPhoneFrame screenBg="#001a14" accentColor="#0d9488">
        <div style={{ background:'linear-gradient(180deg,#001a14,#00221a)', padding:'10px 14px', flexShrink:0, borderBottom:'1px solid rgba(13,148,136,0.3)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:34,height:34,borderRadius:'50%',background:'rgba(13,148,136,0.25)',border:'1.5px solid rgba(20,184,166,0.4)',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <Icons.MapPin size={16} color="#5eead4" />
            </div>
            <div>
              <div style={{fontSize:12,fontWeight:800,color:'#ccfbf1'}}>GPS Location Capture</div>
              <div style={{fontSize:9,color:'#0d9488'}}>Precision on every scan</div>
            </div>
          </div>
        </div>
        <div style={{ flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:16,background:'#001a14' }}>
          {phase==='idle' && (
            <>
              <div style={{ width:72,height:72,borderRadius:'50%',background:'rgba(13,148,136,0.15)',border:'2px solid rgba(20,184,166,0.3)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:12,boxShadow:'0 0 30px rgba(13,148,136,0.2)' }}>
                <Icons.MapPin size={34} color="#14b8a6" />
              </div>
              <div style={{fontSize:12,fontWeight:700,color:'#99f6e4',textAlign:'center'}}>Tap button below to simulate</div>
              <div style={{fontSize:10,color:'#0d9488',textAlign:'center',marginTop:4}}>GPS coordinates will be captured</div>
            </>
          )}
          {phase==='scanning' && (
            <>
              <div style={{ width:64,height:64,borderRadius:'50%',background:'rgba(13,148,136,0.15)',border:'2px solid rgba(20,184,166,0.3)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:12,animation:'pulse 0.8s ease infinite' }}>
                <Icons.QrCode size={32} color="#14b8a6" />
              </div>
              <div style={{fontSize:12,fontWeight:700,color:'#5eead4',marginTop:4}}>Scanning QR{dotStr}</div>
            </>
          )}
          {phase==='locating' && (
            <div style={{ width:'100%',textAlign:'center' }}>
              <div style={{ width:64,height:64,borderRadius:'50%',background:'rgba(13,148,136,0.2)',border:'2px solid #14b8a6',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px',animation:'pulse 0.6s ease infinite' }}>
                <Icons.MapPin size={30} color="#5eead4" />
              </div>
              <div style={{fontSize:11,fontWeight:700,color:'#14b8a6',margin:'4px 0 8px'}}>Acquiring GPS{dotStr}</div>
              <div style={{width:'100%',height:8,background:'rgba(13,148,136,0.2)',borderRadius:99,overflow:'hidden'}}>
                <div style={{height:'100%',background:'linear-gradient(90deg,#0d9488,#14b8a6)',width:`${accuracy}%`,transition:'width 0.06s linear',borderRadius:99}} />
              </div>
              <div style={{fontSize:9,color:'#0d9488',marginTop:4}}>{accuracy}% accuracy</div>
            </div>
          )}
          {phase==='done' && coords && (
            <div style={{ width:'100%',display:'flex',flexDirection:'column',gap:7 }}>
              <div style={{ background:'rgba(13,148,136,0.12)',borderRadius:12,padding:'10px 12px',border:'1.5px solid rgba(20,184,166,0.3)' }}>
                <div style={{ display:'flex',alignItems:'center',gap:6,marginBottom:3 }}>
                  <Icons.MapPin size={12} color="#5eead4" />
                  <div style={{fontSize:8.5,fontWeight:700,color:'#5eead4',textTransform:'uppercase',letterSpacing:'.06em'}}>Location Captured</div>
                </div>
                <div style={{fontSize:11,fontWeight:800,color:'#ccfbf1'}}>{coords.area}</div>
                <div style={{fontSize:9,color:'#14b8a6',fontFamily:'monospace',marginTop:2}}>{coords.lat} · {coords.lng}</div>
              </div>
              <div style={{ background:'rgba(13,148,136,0.08)',borderRadius:12,padding:'10px 12px',border:'1.5px solid rgba(20,184,166,0.2)' }}>
                {[['⏰ Time', coords.time],['📱 Device', coords.device]].map(([k,v])=>(
                  <div key={k} style={{display:'flex',justifyContent:'space-between',fontSize:9,lineHeight:2}}>
                    <span style={{color:'#0d9488'}}>{k}</span>
                    <span style={{fontWeight:700,color:'#ccfbf1'}}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ background:'linear-gradient(135deg,#0d9488,#14b8a6)',borderRadius:10,padding:'8px 12px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',gap:6 }}>
                <Icons.MapPin size={12} color="#fff" />
                <span style={{fontSize:9.5,fontWeight:800,color:'#fff'}}>Open in Google Maps →</span>
              </div>
            </div>
          )}
        </div>
      </AndroidPhoneFrame>
      <SimCTA running={running} hasData={phase!=='idle'} onRun={run} onReset={reset} accent="#0d9488" label="Simulate GPS Scan" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   SETUP SIMULATOR
───────────────────────────────────────────── */
const SETUP_STEPS = [
  { label: 'Peel & Stick Tag',       sub: 'Attach to your item',      icon: Icons.Star,      duration: 900  },
  { label: 'Open Setup Link',        sub: 'scanforsafe.com/activate', icon: Icons.Wifi,      duration: 700  },
  { label: 'Enter Your Number',      sub: '+91 • Verified instantly', icon: Icons.Phone,     duration: 1000 },
  { label: 'Add Emergency Contacts', sub: 'Up to 5 contacts',         icon: Icons.Users,     duration: 800  },
  { label: 'Tag Goes Live!',         sub: 'Your item is now protected',icon: Icons.CheckCircle, duration: 600  },
]

function SetupSimulatorWrapper() {
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState([])
  const [active, setActive] = useState(-1)
  const [elapsed, setElapsed] = useState(0)
  const timersRef = useRef([])
  const elapsedRef = useRef(null)
  const total = SETUP_STEPS.reduce((a,s) => a + s.duration + 400, 0)

  const reset = () => { timersRef.current.forEach(clearTimeout); clearInterval(elapsedRef.current); setRunning(false); setDone([]); setActive(-1); setElapsed(0) }
  const run = () => {
    reset(); setRunning(true)
    let t = 0
    SETUP_STEPS.forEach((step, i) => {
      const tStart = setTimeout(() => setActive(i), t); t += step.duration
      const tEnd = setTimeout(() => { setDone(p=>[...p,i]); if (i===SETUP_STEPS.length-1) { setActive(-1); setRunning(false); clearInterval(elapsedRef.current) } }, t)
      t += 400; timersRef.current.push(tStart, tEnd)
    })
    elapsedRef.current = setInterval(() => setElapsed(p => p+100), 100)
  }
  const pct = Math.min(100, Math.round((elapsed/total)*100))

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
      <AndroidPhoneFrame screenBg="#1a0e00" accentColor="#d97706">
        <div style={{ background:'linear-gradient(180deg,#2a1600,#1a0e00)', padding:'10px 14px', flexShrink:0, borderBottom:'1px solid rgba(217,119,6,0.3)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:34,height:34,borderRadius:'50%',background:'rgba(217,119,6,0.2)',border:'1.5px solid rgba(251,191,36,0.4)',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <Icons.Zap size={16} color="#fbbf24" />
            </div>
            <div>
              <div style={{fontSize:12,fontWeight:800,color:'#fef3c7'}}>Activation Wizard</div>
              <div style={{fontSize:9,color:'#d97706'}}>Under 3 minutes • Zero tech needed</div>
            </div>
          </div>
        </div>
        <div style={{ flex:1,overflowY:'auto',padding:'10px',background:'#1a0e00' }}>
          {(running || done.length > 0) && (
            <div style={{ marginBottom:10 }}>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:9,color:'#d97706',marginBottom:3}}>
                <span>Progress</span><span style={{fontWeight:700,color:'#fbbf24'}}>{pct}%</span>
              </div>
              <div style={{height:6,background:'rgba(217,119,6,0.2)',borderRadius:99,overflow:'hidden',border:'1px solid rgba(217,119,6,0.2)'}}>
                <div style={{height:'100%',width:`${pct}%`,background:'linear-gradient(90deg,#d97706,#f59e0b)',borderRadius:99,transition:'width 0.1s linear',boxShadow:'0 0 8px rgba(251,191,36,0.4)'}} />
              </div>
            </div>
          )}
          {SETUP_STEPS.map((step, i) => {
            const isDone = done.includes(i); const isActive = active === i
            return (
              <div key={i} style={{ display:'flex',alignItems:'flex-start',gap:10,padding:'8px 10px',borderRadius:12,marginBottom:5, background:isDone?'rgba(217,119,6,0.1)':isActive?'rgba(255,255,255,0.04)':'rgba(255,255,255,0.02)', border:`1.5px solid ${isDone?'rgba(217,119,6,0.4)':isActive?'rgba(217,119,6,0.6)':'rgba(255,255,255,0.05)'}`, transition:'all 0.3s' }}>
                <div style={{ width:30,height:30,borderRadius:'50%',flexShrink:0, background:isDone?'linear-gradient(135deg,#d97706,#f59e0b)':isActive?'rgba(217,119,6,0.2)':'rgba(255,255,255,0.04)', display:'flex',alignItems:'center',justifyContent:'center', boxShadow:isDone?'0 0 12px rgba(217,119,6,0.4)':'' }}>
                  {isDone ? <Icons.CheckCircle size={14} color="#fff" /> : <step.icon size={14} color={isActive?'#fbbf24':'#78350f'} />}
                </div>
                <div>
                  <div style={{fontSize:10.5,fontWeight:800,color:isDone?'#fbbf24':isActive?'#d97706':'#4a3000'}}>{step.label}</div>
                  {(isDone||isActive) && <div style={{fontSize:9,color:'#92400e',marginTop:1}}>{step.sub}</div>}
                  {isActive && <div style={{display:'flex',gap:2,marginTop:4}}>{[0,1,2].map(d=><div key={d} style={{width:4,height:4,borderRadius:'50%',background:'#d97706',animation:`bounce 0.8s ease ${d*0.15}s infinite`}}/>)}</div>}
                </div>
              </div>
            )
          })}
          {done.length === SETUP_STEPS.length && (
            <div style={{ textAlign:'center',padding:'10px 0',animation:'fadeUp 0.4s ease' }}>
              <div style={{ width:48,height:48,borderRadius:'50%',background:'rgba(217,119,6,0.2)',border:'2px solid #fbbf24',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 8px',boxShadow:'0 0 20px rgba(251,191,36,0.3)' }}>
                <Icons.CheckCircle size={22} color="#fbbf24" />
              </div>
              <div style={{fontSize:11,fontWeight:800,color:'#fbbf24'}}>Protected in {(elapsed/1000).toFixed(1)}s!</div>
            </div>
          )}
        </div>
      </AndroidPhoneFrame>
      <SimCTA running={running} hasData={done.length>0} onRun={run} onReset={reset} accent="#d97706" label="Start Setup Demo" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   PRIVACY SIMULATOR
───────────────────────────────────────────── */
function PrivacySimulatorWrapper() {
  const [phase, setPhase] = useState('idle')
  const [running, setRunning] = useState(false)
  const [visibleItems, setVisibleItems] = useState([])
  const timersRef = useRef([])

  const reset = () => { timersRef.current.forEach(clearTimeout); setPhase('idle'); setRunning(false); setVisibleItems([]) }
  const run = () => {
    reset(); setRunning(true); setPhase('scanning')
    timersRef.current.push(setTimeout(() => setPhase('proxy'), 1200))
    timersRef.current.push(setTimeout(() => {
      setPhase('reveal')
      const items = ['name','location','callBtn']
      items.forEach((item,i) => { const t = setTimeout(()=>setVisibleItems(p=>[...p,item]), i*500); timersRef.current.push(t) })
      setTimeout(()=>setRunning(false), items.length*500+400)
    }, 2800))
  }
  const HIDDEN = ['+91-98400-XXXXX', '12, MG Road, Chennai', 'owner@email.com', 'Bank Details', 'Aadhaar Number']
  const HIDDEN_ICONS = [Icons.Phone, Icons.MapPin, Icons.Bell, Icons.Shield, Icons.Lock]

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
      <AndroidPhoneFrame screenBg="#1a000a" accentColor="#e11d48">
        <div style={{ background:'linear-gradient(180deg,#2a0010,#1a000a)', padding:'10px 14px', flexShrink:0, borderBottom:'1px solid rgba(225,29,72,0.3)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:34,height:34,borderRadius:'50%',background:'rgba(225,29,72,0.2)',border:'1.5px solid rgba(251,113,133,0.4)',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <Icons.Shield size={16} color="#fb7185" />
            </div>
            <div>
              <div style={{fontSize:12,fontWeight:800,color:'#ffe4e6'}}>Privacy Shield</div>
              <div style={{fontSize:9,color:'#e11d48'}}>Your data never touches the QR</div>
            </div>
          </div>
        </div>
        <div style={{ flex:1,overflowY:'auto',padding:12,background:'#1a000a' }}>
          {phase==='idle' && (
            <div style={{ textAlign:'center',paddingTop:24 }}>
              <div style={{ width:64,height:64,borderRadius:'50%',background:'rgba(225,29,72,0.15)',border:'2px solid rgba(251,113,133,0.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px',boxShadow:'0 0 24px rgba(225,29,72,0.2)' }}>
                <Icons.Lock size={30} color="#fb7185" />
              </div>
              <div style={{fontSize:11,fontWeight:700,color:'#fecdd3'}}>See what the finder sees</div>
              <div style={{fontSize:9,color:'#881337',marginTop:3}}>vs. what your QR actually contains</div>
            </div>
          )}
          {phase==='scanning' && (
            <div style={{ textAlign:'center',paddingTop:30 }}>
              <div style={{ width:56,height:56,borderRadius:'50%',background:'rgba(225,29,72,0.15)',border:'2px solid rgba(251,113,133,0.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px',animation:'pulse 0.6s ease infinite' }}>
                <Icons.QrCode size={28} color="#fb7185" />
              </div>
              <div style={{fontSize:11,fontWeight:700,color:'#fb7185'}}>Finder scans QR…</div>
            </div>
          )}
          {phase==='proxy' && (
            <div style={{ textAlign:'center',paddingTop:10 }}>
              <div style={{ width:50,height:50,borderRadius:'50%',background:'rgba(225,29,72,0.2)',border:'2px solid rgba(251,113,133,0.4)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 8px',boxShadow:'0 0 20px rgba(225,29,72,0.3)' }}>
                <Icons.Lock size={22} color="#fb7185" />
              </div>
              <div style={{fontSize:10,fontWeight:700,color:'#fb7185',margin:'0 0 10px'}}>Secure proxy intercepts</div>
              <div style={{ display:'flex',flexDirection:'column',gap:4 }}>
                {HIDDEN.map((h,i) => {
                  const HIcon = HIDDEN_ICONS[i]
                  return (
                    <div key={i} style={{ background:'rgba(225,29,72,0.1)', border:'1px solid rgba(225,29,72,0.25)', borderRadius:8, padding:'5px 10px', display:'flex', alignItems:'center', gap:8 }}>
                      <HIcon size={11} color="#e11d48" />
                      <span style={{fontSize:9,fontWeight:700,color:'#ef4444',filter:'blur(3px)',flex:1}}>{h}</span>
                      <Icons.Lock size={10} color="#e11d48" />
                    </div>
                  )
                })}
              </div>
            </div>
          )}
          {phase==='reveal' && (
            <div>
              <div style={{ fontSize:9,fontWeight:700,color:'#22c55e',background:'rgba(34,197,94,0.1)',border:'1px solid rgba(34,197,94,0.25)',borderRadius:8,padding:'5px 10px',marginBottom:8,textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',gap:6 }}>
                <Icons.CheckCircle size={12} color="#22c55e" />
                <span>What the finder actually sees:</span>
              </div>
              {visibleItems.includes('name') && (
                <div style={{ background:'rgba(255,255,255,0.04)',border:'1.5px solid rgba(251,113,133,0.25)',borderRadius:10,padding:'8px 12px',marginBottom:6,animation:'fadeUp 0.3s ease' }}>
                  <div style={{fontSize:9,color:'#881337',marginBottom:2}}>Item Owner</div>
                  <div style={{fontSize:11,fontWeight:800,color:'#fecdd3'}}>Verified ScanForSafe User</div>
                  <div style={{fontSize:9,color:'#9f1239'}}>No name. No address. Just trust.</div>
                </div>
              )}
              {visibleItems.includes('location') && (
                <div style={{ background:'rgba(255,255,255,0.04)',border:'1.5px solid rgba(251,113,133,0.25)',borderRadius:10,padding:'8px 12px',marginBottom:6,animation:'fadeUp 0.3s ease' }}>
                  <div style={{fontSize:9,color:'#881337',marginBottom:2}}>Item Name</div>
                  <div style={{fontSize:11,fontWeight:800,color:'#fecdd3'}}>"Black Laptop Bag"</div>
                </div>
              )}
              {visibleItems.includes('callBtn') && (
                <div style={{ background:'linear-gradient(135deg,#e11d48,#be123c)',borderRadius:10,padding:'8px 12px',textAlign:'center',animation:'fadeUp 0.3s ease',display:'flex',alignItems:'center',justifyContent:'center',gap:8 }}>
                  <Icons.Phone size={13} color="#fff" />
                  <div>
                    <div style={{fontSize:10,fontWeight:800,color:'#fff'}}>Call Owner (Proxied)</div>
                    <div style={{fontSize:8,color:'#fecdd3'}}>Real number never revealed</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </AndroidPhoneFrame>
      <SimCTA running={running} hasData={phase!=='idle'} onRun={run} onReset={reset} accent="#e11d48" label="Simulate Privacy" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   HISTORY SIMULATOR
───────────────────────────────────────────── */
const HISTORY_EVENTS = [
  { time: 'Today, 2:41 PM',     loc: 'Egmore, Chennai',     device: 'Android · Chrome',  type: 'new' },
  { time: 'Yesterday, 8:12 AM', loc: 'Chennai Airport, T2', device: 'iPhone · Safari',   type: 'safe' },
  { time: 'Dec 18, 3:55 PM',    loc: 'Anna Nagar, Chennai', device: 'Android · Firefox', type: 'safe' },
  { time: 'Dec 15, 11:20 AM',   loc: 'T. Nagar, Chennai',   device: 'Android · Chrome',  type: 'safe' },
]

function HistorySimulatorWrapper() {
  const [running, setRunning] = useState(false)
  const [visible, setVisible] = useState([])
  const [active, setActive] = useState(null)
  const timersRef = useRef([])

  const reset = () => { timersRef.current.forEach(clearTimeout); setRunning(false); setVisible([]); setActive(null) }
  const run = () => {
    reset(); setRunning(true)
    HISTORY_EVENTS.forEach((_,i) => {
      const t = setTimeout(() => {
        setActive(i)
        setTimeout(() => { setVisible(p=>[...p,i]); setActive(null); if (i===HISTORY_EVENTS.length-1) setRunning(false) }, 500)
      }, i*800)
      timersRef.current.push(t)
    })
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
      <AndroidPhoneFrame screenBg="#00061a" accentColor="#2563eb">
        <div style={{ background:'linear-gradient(180deg,#000d2e,#00061a)', padding:'10px 14px', flexShrink:0, borderBottom:'1px solid rgba(37,99,235,0.3)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:34,height:34,borderRadius:'50%',background:'rgba(37,99,235,0.2)',border:'1.5px solid rgba(96,165,250,0.4)',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <Icons.Clock size={16} color="#60a5fa" />
            </div>
            <div>
              <div style={{fontSize:12,fontWeight:800,color:'#dbeafe'}}>Scan Timeline</div>
              <div style={{fontSize:9,color:'#2563eb'}}>Every scan logged • Exportable</div>
            </div>
          </div>
        </div>
        <div style={{ flex:1,overflowY:'auto',padding:'10px',background:'#00061a' }}>
          {visible.length===0 && !running && (
            <div style={{ textAlign:'center',paddingTop:40 }}>
              <div style={{ width:56,height:56,borderRadius:'50%',background:'rgba(37,99,235,0.15)',border:'2px solid rgba(96,165,250,0.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px' }}>
                <Icons.Bell size={26} color="#60a5fa" />
              </div>
              <div style={{fontSize:11,fontWeight:700,color:'#bfdbfe'}}>Tap button below to load history</div>
            </div>
          )}
          {HISTORY_EVENTS.map((ev,i) => {
            const isVis = visible.includes(i); const isAct = active === i
            if (!isVis && !isAct) return null
            return (
              <div key={i} style={{ background:ev.type==='new'?'rgba(37,99,235,0.15)':'rgba(255,255,255,0.03)', border:`1.5px solid ${ev.type==='new'?'rgba(96,165,250,0.4)':'rgba(255,255,255,0.08)'}`, borderRadius:12,padding:'9px 10px',marginBottom:6,animation:'fadeUp 0.4s ease',opacity:isAct?0.5:1,transition:'opacity 0.3s' }}>
                <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:4 }}>
                  <div style={{ display:'flex',alignItems:'center',gap:7 }}>
                    <div style={{ width:28,height:28,borderRadius:'50%',background:'rgba(37,99,235,0.2)',border:'1px solid rgba(96,165,250,0.3)',display:'flex',alignItems:'center',justifyContent:'center' }}>
                      <Icons.MapPin size={13} color={ev.type==='new'?'#60a5fa':'#4a6a9a'} />
                    </div>
                    <div style={{fontSize:10,fontWeight:800,color:ev.type==='new'?'#93c5fd':'#bfdbfe'}}>{ev.loc}</div>
                  </div>
                  {ev.type==='new' && <span style={{fontSize:8,fontWeight:700,background:'#2563eb',color:'#fff',padding:'2px 7px',borderRadius:99}}>NEW</span>}
                </div>
                <div style={{ display:'flex',justifyContent:'space-between',fontSize:8.5,color:'#3b4a6b',paddingLeft:35 }}>
                  <span>⏰ {ev.time}</span><span>📱 {ev.device}</span>
                </div>
              </div>
            )
          })}
          {visible.length===HISTORY_EVENTS.length && (
            <div style={{ background:'linear-gradient(135deg,#1d4ed8,#2563eb)',borderRadius:10,padding:'8px 12px',textAlign:'center',animation:'fadeUp 0.3s ease',marginTop:4,display:'flex',alignItems:'center',justifyContent:'center',gap:7 }}>
              <Icons.Bell size={12} color="#fff" />
              <span style={{fontSize:9.5,fontWeight:800,color:'#fff'}}>Export as CSV / PDF</span>
            </div>
          )}
        </div>
      </AndroidPhoneFrame>
      <SimCTA running={running} hasData={visible.length>0} onRun={run} onReset={reset} accent="#2563eb" label="Load History" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   UPDATE INFO SIMULATOR
───────────────────────────────────────────── */
function UpdateSimulatorWrapper() {
  const [phase, setPhase] = useState('idle')
  const [running, setRunning] = useState(false)
  const [typedNum, setTypedNum] = useState('')
  const timersRef = useRef([])
  const typeRef = useRef(null)
  const NEW_NUM = '+91-77000-12345'

  const reset = () => { timersRef.current.forEach(clearTimeout); clearInterval(typeRef.current); setPhase('idle'); setRunning(false); setTypedNum('') }
  const run = () => {
    reset(); setRunning(true); setPhase('form')
    let i = 0
    typeRef.current = setInterval(() => {
      if (i >= NEW_NUM.length) {
        clearInterval(typeRef.current)
        timersRef.current.push(setTimeout(() => { setPhase('saving'); timersRef.current.push(setTimeout(()=>{ setPhase('done'); setRunning(false) }, 1600)) }, 600))
        return
      }
      setTypedNum(NEW_NUM.slice(0,i+1)); i++
    }, 80)
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
      <AndroidPhoneFrame screenBg="#1a0800" accentColor="#ea580c">
        <div style={{ background:'linear-gradient(180deg,#2a1000,#1a0800)', padding:'10px 14px', flexShrink:0, borderBottom:'1px solid rgba(234,88,12,0.3)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:34,height:34,borderRadius:'50%',background:'rgba(234,88,12,0.2)',border:'1.5px solid rgba(251,146,60,0.4)',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <Icons.RefreshCw size={16} color="#fb923c" />
            </div>
            <div>
              <div style={{fontSize:12,fontWeight:800,color:'#ffedd5'}}>Update Dashboard</div>
              <div style={{fontSize:9,color:'#ea580c'}}>Change anytime • No new tag needed</div>
            </div>
          </div>
        </div>
        <div style={{ flex:1,display:'flex',flexDirection:'column',justifyContent:'center',padding:14,background:'#1a0800' }}>
          {phase==='idle' && (
            <div style={{ textAlign:'center' }}>
              <div style={{ width:64,height:64,borderRadius:'50%',background:'rgba(234,88,12,0.15)',border:'2px solid rgba(251,146,60,0.35)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px',boxShadow:'0 0 24px rgba(234,88,12,0.2)' }}>
                <Icons.RefreshCw size={30} color="#fb923c" />
              </div>
              <div style={{fontSize:11,fontWeight:700,color:'#fed7aa'}}>Changed your number?</div>
              <div style={{fontSize:9,color:'#7c2d12',marginTop:4}}>Update in 30 seconds — tag stays same</div>
            </div>
          )}
          {(phase==='form'||phase==='saving') && (
            <div style={{ display:'flex',flexDirection:'column',gap:10 }}>
              <div style={{ background:'rgba(255,255,255,0.04)',borderRadius:12,padding:'10px 14px',border:'1px solid rgba(234,88,12,0.2)' }}>
                <div style={{fontSize:8.5,color:'#7c2d12',marginBottom:3,textTransform:'uppercase',letterSpacing:'.06em'}}>Current Number</div>
                <div style={{fontSize:12,fontWeight:700,color:'rgba(251,146,60,0.4)',textDecoration:'line-through',display:'flex',alignItems:'center',gap:8}}>
                  <Icons.Phone size={12} color="rgba(251,146,60,0.4)" />
                  +91-98400-XXXXX
                </div>
              </div>
              <div style={{ textAlign:'center',fontSize:16,color:'#ea580c' }}>↓</div>
              <div style={{ background:'rgba(255,255,255,0.04)',borderRadius:12,padding:'10px 14px',border:`1.5px solid ${phase==='saving'?'rgba(234,88,12,0.6)':'rgba(234,88,12,0.2)'}`,transition:'all 0.3s' }}>
                <div style={{fontSize:8.5,color:'#7c2d12',marginBottom:3,textTransform:'uppercase',letterSpacing:'.06em'}}>New Number</div>
                <div style={{fontSize:12,fontWeight:700,color:'#fb923c',fontFamily:'monospace',display:'flex',alignItems:'center',gap:8}}>
                  <Icons.Phone size={12} color="#fb923c" />
                  {typedNum}<span style={{animation:'blink 0.8s step-end infinite',opacity:phase==='form'?1:0}}>|</span>
                </div>
              </div>
              {phase==='saving' && (
                <div style={{ background:'linear-gradient(135deg,#ea580c,#dc2626)',borderRadius:10,padding:'8px 0',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',gap:8 }}>
                  <div style={{display:'flex',gap:3}}>{[0,1,2].map(d=><div key={d} style={{width:5,height:5,borderRadius:'50%',background:'#fff',animation:`bounce 0.8s ease ${d*0.15}s infinite`}}/>)}</div>
                  <span style={{fontSize:10,fontWeight:800,color:'#fff'}}>Saving…</span>
                </div>
              )}
            </div>
          )}
          {phase==='done' && (
            <div style={{ textAlign:'center',animation:'fadeUp 0.4s ease' }}>
              <div style={{ width:56,height:56,borderRadius:'50%',background:'rgba(34,197,94,0.15)',border:'2px solid rgba(74,222,128,0.4)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px',boxShadow:'0 0 20px rgba(34,197,94,0.2)' }}>
                <Icons.CheckCircle size={26} color="#4ade80" />
              </div>
              <div style={{fontSize:13,fontWeight:900,color:'#4ade80',marginBottom:6}}>Updated!</div>
              <div style={{ background:'rgba(255,255,255,0.04)',borderRadius:12,padding:'8px 14px',border:'1.5px solid rgba(251,146,60,0.35)',marginBottom:8,display:'flex',alignItems:'center',justifyContent:'center',gap:8 }}>
                <Icons.Phone size={13} color="#fb923c" />
                <span style={{fontSize:12,fontWeight:800,color:'#fb923c',fontFamily:'monospace'}}>{NEW_NUM}</span>
              </div>
              <div style={{fontSize:9,color:'#7c2d12',lineHeight:1.6}}>Physical tag unchanged.<br/>All future scans use new number.</div>
            </div>
          )}
        </div>
      </AndroidPhoneFrame>
      <SimCTA running={running} hasData={phase!=='idle'} onRun={run} onReset={reset} accent="#ea580c" label="Demo Update" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   SIMULATOR REGISTRY
───────────────────────────────────────────── */
function FeatureSimulator({ featureId }) {
  switch (featureId) {
    case 'whatsapp': return <WhatsAppSimulatorWrapper />
    case 'call':     return <CallSimulatorWrapper />
    case 'contacts': return <ContactsSimulatorWrapper />
    case 'gps':      return <GPSSimulatorWrapper />
    case 'setup':    return <SetupSimulatorWrapper />
    case 'privacy':  return <PrivacySimulatorWrapper />
    case 'history':  return <HistorySimulatorWrapper />
    case 'update':   return <UpdateSimulatorWrapper />
    default:         return null
  }
}

/* ─────────────────────────────────────────────
   FEATURE CARD
───────────────────────────────────────────── */
function FeatureCard({ f, active, onClick }) {
  const IconComp = FEATURE_ICONS[f.id]
  return (
    <div onClick={onClick} style={{
      borderRadius: 18, padding: '18px 16px',
      background: active
        ? `linear-gradient(135deg, ${f.accent} 0%, ${f.accent}dd 100%)`
        : '#fff',
      border: `2px solid ${active ? f.accent : f.bg}`,
      cursor: 'pointer', transition: 'all 0.3s ease',
      transform: active ? 'translateY(-5px) scale(1.01)' : 'none',
      boxShadow: active
        ? `0 16px 40px ${f.accent}35, 0 4px 12px ${f.accent}20, inset 0 1px 0 rgba(255,255,255,0.2)`
        : `0 2px 8px rgba(0,0,0,0.04), 0 0 0 0 transparent`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle shimmer on active */}
      {active && <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)', pointerEvents:'none' }} />}

      <span style={{
        display:'inline-flex', alignItems:'center', gap:5,
        background: active ? 'rgba(255,255,255,0.2)' : f.tagBg,
        color: active ? '#fff' : f.tagColor,
        fontSize: 9.5, fontWeight: 800, padding: '3px 10px', borderRadius: 99,
        letterSpacing:'.07em', textTransform:'uppercase', marginBottom: 12,
        border: `1px solid ${active ? 'rgba(255,255,255,0.25)' : f.tagBg}`,
      }}>
        {f.tag}
      </span>

      <div style={{ width:40, height:40, borderRadius:12, background: active ? 'rgba(255,255,255,0.18)' : f.bg, border: `1.5px solid ${active ? 'rgba(255,255,255,0.25)' : f.tagBg}`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:10 }}>
        <IconComp size={20} color={active ? '#fff' : f.accent} />
      </div>

      <h3 style={{ fontSize: 14, fontWeight: 800, margin: '0 0 6px', color: active ? '#fff' : '#0B2545', letterSpacing:'-.01em', lineHeight:1.2 }}>{f.title}</h3>
      <p style={{ fontSize: 12, lineHeight: 1.65, margin: '0 0 12px', color: active ? 'rgba(255,255,255,0.85)' : '#64748b' }}>{f.desc}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
        {f.pills.map(p => (
          <span key={p} style={{
            fontSize: 9.5, fontWeight: 700, padding: '3px 9px', borderRadius: 99,
            background: active ? 'rgba(255,255,255,0.15)' : f.bg,
            color: active ? '#fff' : f.tagColor,
            border: `1px solid ${active ? 'rgba(255,255,255,0.22)' : f.tagBg}`,
          }}>{p}</span>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   USE CASE CARD
───────────────────────────────────────────── */
function UseCaseCard({ uc, active, onClick }) {
  const { Icon } = uc
  return (
    <div onClick={onClick} style={{
      borderRadius: 18, padding: '22px 14px 18px',
      background: active ? `linear-gradient(135deg, ${uc.accent} 0%, ${uc.accent}cc 100%)` : uc.bg,
      border: `2.5px solid ${active ? uc.accent : uc.border}`,
      textAlign:'center', cursor:'pointer',
      transition:'all 0.3s ease',
      transform: active ? 'translateY(-6px) scale(1.02)' : 'none',
      boxShadow: active ? `0 18px 40px ${uc.accent}40, 0 6px 16px ${uc.accent}25` : `0 3px 12px ${uc.accent}18`,
      position:'relative', overflow:'hidden',
    }}>
      {/* shimmer overlay when active */}
      {active && <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 55%)', pointerEvents:'none' }} />}

      {/* SVG icon circle */}
      <div style={{
        width: 56, height: 56, borderRadius: '50%',
        background: active ? 'rgba(255,255,255,0.2)' : '#fff',
        border: `2px solid ${active ? 'rgba(255,255,255,0.35)' : uc.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 12px',
        transition: 'all 0.3s',
        transform: active ? 'scale(1.12)' : 'scale(1)',
        boxShadow: active
          ? '0 6px 20px rgba(0,0,0,0.2)'
          : `0 4px 12px ${uc.accent}20`,
      }}>
        <Icon size={26} color={active ? '#fff' : uc.accent} />
      </div>

      <div style={{ fontSize:13.5, fontWeight:800, color:active?'#fff':uc.textColor, marginBottom:4 }}>{uc.label}</div>
      <div style={{ fontSize:10.5, color:active?'rgba(255,255,255,0.78)':'#64748b', marginBottom:10, lineHeight:1.4 }}>{uc.sub}</div>
      <span style={{
        display:'inline-flex', alignItems:'center', gap:4,
        background: active?'rgba(255,255,255,0.22)':'#fff',
        border: `1.5px solid ${active?'rgba(255,255,255,0.35)':uc.border}`,
        borderRadius:99, padding:'3px 10px',
        fontSize:9, fontWeight:800, letterSpacing:'.06em', textTransform:'uppercase',
        color: active?'#fff':uc.textColor,
      }}>
        {uc.stat}
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────── */
function SectionHeader({ badge, badgeBg, badgeBorder, badgeColor, title, highlight, highlightGradient, desc }) {
  return (
    <div style={{ textAlign:'center', marginBottom:52 }}>
      <div style={{ display:'inline-flex', alignItems:'center', gap:7, background:badgeBg, border:`1.5px solid ${badgeBorder}`, borderRadius:99, padding:'7px 20px', fontSize:11.5, fontWeight:800, color:badgeColor, letterSpacing:'.06em', textTransform:'uppercase', marginBottom:16 }}>
        {badge}
      </div>
      <h2 style={{ fontSize:'clamp(1.8rem, 3.8vw, 3rem)', fontWeight:900, color:'#0B2545', letterSpacing:'-.04em', lineHeight:1.1, margin:'0 0 14px', fontFamily:"'Outfit', sans-serif" }}>
        {title}{' '}
        <span style={{ background:highlightGradient, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{highlight}</span>
      </h2>
      <p style={{ fontSize:15, color:'#4b7a62', maxWidth:500, margin:'0 auto', lineHeight:1.8 }}>{desc}</p>
    </div>
  )
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Features() {
  const [activeFeature, setActiveFeature] = useState('whatsapp')
  const [activeUC, setActiveUC] = useState(0)

  return (
    <section style={{ background:'linear-gradient(180deg, #f0f4f8 0%, #f8fafc 100%)', padding:'90px 24px 96px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&display=swap');
        * { box-sizing: border-box; }
        .feat-layout { display: grid; grid-template-columns: 1fr 300px; gap: 40px; align-items: start; }
        .feat-grid   { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .uc-grid     { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .phone-sticky { position: sticky; top: 80px; display: flex; flex-direction: column; align-items: center; }
        @media (max-width: 1024px) {
          .feat-layout { grid-template-columns: 1fr; }
          .phone-sticky { position: relative; top: 0; margin: 0 auto 32px; }
          .uc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .feat-grid { grid-template-columns: 1fr; }
          .uc-grid   { grid-template-columns: 1fr; }
        }
        @keyframes bounce {
          0%,100% { transform: translateY(0); opacity: 0.4; }
          50%      { transform: translateY(-4px); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.1); opacity: 0.7; }
        }
        @keyframes blink {
          0%,100% { opacity: 1; } 50% { opacity: 0; }
        }
        @keyframes ctaPulse {
          0%   { transform: scale(1);    opacity: 0.5; }
          100% { transform: scale(1.38); opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{ maxWidth:1160, margin:'0 auto' }}>

        {/* ── FEATURES SECTION ── */}
        <SectionHeader
          badge="✦ Platform Features"
          badgeBg="#dcfce7" badgeBorder="#4ade80" badgeColor="#14532d"
          title="Powerful Features for"
          highlight="Peace of Mind"
          highlightGradient="linear-gradient(130deg,#16a34a,#059669)"
          desc="Every feature has a live simulation — click any card, then hit the button to see it in action."
        />

        <div className="feat-layout" style={{ marginBottom:88 }}>
          <div className="feat-grid">
            {FEATURES.map(f => (
              <FeatureCard key={f.id} f={f} active={activeFeature===f.id} onClick={()=>setActiveFeature(f.id)} />
            ))}
          </div>
          <div className="phone-sticky">
            <FeatureSimulator featureId={activeFeature} />
          </div>
        </div>

        {/* ── USE CASES ── */}
        <SectionHeader
          badge="🛡️ Protection Categories"
          badgeBg="#ffedd5" badgeBorder="#fb923c" badgeColor="#7c2d12"
          title="8 Safety Categories."
          highlight="One Smart Platform."
          highlightGradient="linear-gradient(130deg,#ea580c,#dc2626)"
          desc="From lost luggage to road emergencies — ScanForSafe covers every real-world scenario."
        />

        <div className="uc-grid" style={{ marginBottom:64 }}>
          {USE_CASES.map((uc,i) => (
            <UseCaseCard key={i} uc={uc} active={activeUC===i} onClick={()=>setActiveUC(activeUC===i?-1:i)} />
          ))}
        </div>

        {/* ── TRUST PILLS ── */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'10px 18px', paddingTop:28, borderTop:'1.5px solid #e2e8f0' }}>
          {[
            { icon: Icons.Lock,       text: 'ISO-grade data privacy' },
            { icon: Icons.Zap,        text: 'Works 24/7 — even offline' },
            { icon: Icons.Phone,      text: 'Any smartphone camera' },
            { icon: Icons.Shield,     text: 'End-to-end encrypted' },
            { icon: Icons.Star,       text: 'Made for India' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} style={{ display:'flex', alignItems:'center', gap:8, background:'#fff', border:'1.5px solid #e2e8f0', borderRadius:99, padding:'7px 18px', fontSize:12.5, fontWeight:700, color:'#334155', transition:'all .2s ease', cursor:'default' }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='#86efac'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)' }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='#e2e8f0'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none' }}>
              <Icon size={14} color="#16a34a" />
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}