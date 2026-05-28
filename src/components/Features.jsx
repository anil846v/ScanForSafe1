import { useState } from 'react'

const FEATURES = [
  { id: 'whatsapp', bg: '#dcfce7', accent: '#16a34a', tagBg: '#bbf7d0', tagColor: '#14532d', emoji: '💬', tag: 'Most Loved',     title: 'WhatsApp Alerts',        desc: 'Instant WhatsApp notification the moment anyone scans your QR — GPS location and direct call included.',      pills: ['Instant Alert', 'GPS Included', 'No App'] },
  { id: 'call',     bg: '#e0e7ff', accent: '#4338ca', tagBg: '#c7d2fe', tagColor: '#1e1b4b', emoji: '📞', tag: 'Zero Friction',  title: 'One-Touch Call Connect',  desc: 'Finders call you in one tap — no app, no sign-up. Works even from a basic feature phone anywhere.',           pills: ['One Tap', 'No Sign-up', 'Any Phone'] },
  { id: 'contacts', bg: '#ede9fe', accent: '#7c3aed', tagBg: '#ddd6fe', tagColor: '#3b0764', emoji: '👨‍👩‍👧', tag: 'Family Ready',  title: '5 Emergency Contacts',   desc: 'Add family, friends or your vet. If the first contact misses it, the next is notified automatically.',        pills: ['5 Contacts', 'Auto Fallback', '5-Min Retry'] },
  { id: 'gps',      bg: '#ccfbf1', accent: '#0d9488', tagBg: '#99f6e4', tagColor: '#134e4a', emoji: '📍', tag: 'Smart',          title: 'GPS on Every Scan',       desc: 'Each scan captures precise GPS coordinates and sends a live Maps link so you can locate your item fast.',      pills: ['Live GPS', 'Maps Link', 'Real-Time'] },
  { id: 'setup',    bg: '#fef3c7', accent: '#d97706', tagBg: '#fde68a', tagColor: '#78350f', emoji: '⚡', tag: '3 Minutes',      title: 'Instant Activation',      desc: 'Peel, stick and protected. Register your tag in under 3 minutes — zero technical knowledge required.',        pills: ['Under 3 Min', 'Guided Setup', 'Instant Live'] },
  { id: 'privacy',  bg: '#ffe4e6', accent: '#e11d48', tagBg: '#fecdd3', tagColor: '#881337', emoji: '🔒', tag: 'Privacy First',  title: 'Your Info Stays Hidden',  desc: 'Your phone number is never on the tag. The QR links to a secure proxy — finders see only what you allow.',    pills: ['Encrypted', 'No Personal Data', 'GDPR Safe'] },
  { id: 'history',  bg: '#dbeafe', accent: '#2563eb', tagBg: '#bfdbfe', tagColor: '#1e3a8a', emoji: '🔔', tag: 'Full Visibility',title: 'Scan History & Logs',     desc: 'Dashboard logs every scan — time, location, device. Know exactly when and where your item was found.',        pills: ['Full Timeline', 'Device Info', 'Exportable'] },
  { id: 'update',   bg: '#ffedd5', accent: '#ea580c', tagBg: '#fed7aa', tagColor: '#7c2d12', emoji: '🔄', tag: 'Always Current', title: 'Update Info Anytime',     desc: 'Changed your number? Update in 30 seconds from any device. The physical tag never needs replacing.',          pills: ['Instant Update', 'Any Device', 'Reassignable'] },
]

const USE_CASES = [
  { emoji: '🚗', label: 'Vehicles',        sub: 'Road accidents & emergencies', bg: '#dcfce7', accent: '#16a34a', textColor: '#14532d', reward: true,  stat: '2yr QR validity' },
  { emoji: '🧳', label: 'Luggage',         sub: 'Airport & travel recovery',    bg: '#dbeafe', accent: '#2563eb', textColor: '#1e3a8a', reward: false, stat: 'Scan anywhere' },
  { emoji: '🐾', label: 'Pets',            sub: 'Lost pet QR tag recovery',     bg: '#fef3c7', accent: '#d97706', textColor: '#78350f', reward: true,  stat: '24/7 alerts' },
  { emoji: '🎒', label: 'School Kids',     sub: 'Bus transit child safety',     bg: '#ede9fe', accent: '#7c3aed', textColor: '#3b0764', reward: false, stat: 'Parent notified' },
  { emoji: '👴', label: 'Senior Citizens', sub: 'Medical emergency response',   bg: '#ffe4e6', accent: '#e11d48', textColor: '#881337', reward: false, stat: 'SOS workflow' },
  { emoji: '💛', label: 'Special Needs',   sub: 'Community assisted return',    bg: '#ccfbf1', accent: '#0d9488', textColor: '#134e4a', reward: false, stat: 'Care team alerts' },
  { emoji: '🔍', label: 'Missing Vehicle', sub: 'Community alert & recovery',   bg: '#ffedd5', accent: '#ea580c', textColor: '#7c2d12', reward: true,  stat: 'Anti-fraud verified' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Family Safety',  sub: 'Daily peace of mind',          bg: '#e0e7ff', accent: '#4338ca', textColor: '#1e1b4b', reward: false, stat: 'Up to 5 members' },
]

const REWARD_TIERS = [
  { tier: 'Bronze',   range: '₹500 – ₹1,000',   icon: '🥉', headerFrom: '#78350f', headerTo: '#b45309', bodyBg: '#fef3c7', border: '#fbbf24', titleColor: '#78350f' },
  { tier: 'Silver',   range: '₹1,000 – ₹5,000',  icon: '🥈', headerFrom: '#334155', headerTo: '#64748b', bodyBg: '#f1f5f9', border: '#94a3b8', titleColor: '#1e293b' },
  { tier: 'Gold',     range: '₹5,000 – ₹25,000', icon: '🥇', headerFrom: '#92400e', headerTo: '#d97706', bodyBg: '#fffbeb', border: '#f59e0b', titleColor: '#78350f' },
  { tier: 'Platinum', range: '₹25,000+',          icon: '💎', headerFrom: '#3b0764', headerTo: '#7c3aed', bodyBg: '#f5f3ff', border: '#a78bfa', titleColor: '#3b0764' },
]

const PAYOUT_STEPS = [
  { step: '01', emoji: '📝', label: 'Owner sets reward',      desc: 'Reports missing item and commits a chosen reward amount' },
  { step: '02', emoji: '🔍', label: 'Finder scans QR',        desc: "Reward notice pops up instantly on the finder's scan page" },
  { step: '03', emoji: '📲', label: 'Submit verified report', desc: 'Finder submits OTP-verified report — fraud checked' },
  { step: '04', emoji: '💸', label: 'Reward transferred',     desc: 'Cash sent instantly via UPI/Bank once verified by owner' },
]

/* ── SIMPLE FEATURE CARD ── */
function FeatureCard({ f, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: 16,
        padding: '18px 16px',
        background: active ? f.accent : '#fff',
        border: `1.5px solid ${active ? f.accent : f.bg}`,
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        transform: active ? 'translateY(-4px)' : 'none',
        boxShadow: active ? `0 12px 32px ${f.accent}30` : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {/* tag */}
      <span style={{
        display: 'inline-block',
        background: active ? 'rgba(255,255,255,0.2)' : f.tagBg,
        color: active ? '#fff' : f.tagColor,
        fontSize: 10, fontWeight: 700,
        padding: '3px 9px', borderRadius: 99,
        letterSpacing: '.06em', textTransform: 'uppercase',
        marginBottom: 10,
      }}>
        {f.tag}
      </span>

      <div style={{ fontSize: 28, marginBottom: 8 }}>{f.emoji}</div>

      <h3 style={{
        fontSize: 14.5, fontWeight: 800, margin: '0 0 6px',
        color: active ? '#fff' : '#0B2545',
      }}>
        {f.title}
      </h3>

      <p style={{
        fontSize: 12.5, lineHeight: 1.6, margin: '0 0 12px',
        color: active ? 'rgba(255,255,255,0.85)' : '#64748b',
      }}>
        {f.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
        {f.pills.map(p => (
          <span key={p} style={{
            fontSize: 10, fontWeight: 700,
            padding: '3px 9px', borderRadius: 99,
            background: active ? 'rgba(255,255,255,0.18)' : f.bg,
            color: active ? '#fff' : f.tagColor,
            border: `1px solid ${active ? 'rgba(255,255,255,0.25)' : f.tagBg}`,
          }}>
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── SIMPLE USE-CASE CARD ── */
function UseCaseCard({ uc, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: 16, padding: '18px 14px 16px',
        background: active ? uc.accent : '#fff',
        border: `1.5px solid ${active ? uc.accent : uc.bg}`,
        textAlign: 'center', cursor: 'pointer',
        transition: 'all 0.25s ease',
        transform: active ? 'translateY(-4px)' : 'none',
        boxShadow: active ? `0 12px 28px ${uc.accent}28` : '0 2px 8px rgba(0,0,0,0.04)',
        position: 'relative',
      }}
    >
      {uc.reward && (
        <div style={{
          position: 'absolute', top: 8, right: 8,
          background: active ? 'rgba(255,255,255,0.2)' : '#fef9c3',
          border: `1px solid ${active ? 'rgba(255,255,255,0.3)' : '#fbbf24'}`,
          borderRadius: 99, padding: '2px 7px',
          fontSize: 8.5, fontWeight: 800,
          color: active ? '#fff' : '#92400e',
        }}>
          🏆 Reward
        </div>
      )}

      <div style={{
        fontSize: 34, marginBottom: 8,
        transform: active ? 'scale(1.15)' : 'scale(1)',
        transition: 'transform 0.25s ease',
      }}>
        {uc.emoji}
      </div>

      <div style={{ fontSize: 14, fontWeight: 800, color: active ? '#fff' : uc.textColor, marginBottom: 4 }}>
        {uc.label}
      </div>

      <div style={{ fontSize: 10.5, color: active ? 'rgba(255,255,255,0.75)' : '#64748b', marginBottom: 10, lineHeight: 1.4 }}>
        {uc.sub}
      </div>

      <span style={{
        display: 'inline-block',
        background: active ? 'rgba(255,255,255,0.18)' : uc.bg,
        border: `1px solid ${active ? 'rgba(255,255,255,0.25)' : uc.accent}30`,
        borderRadius: 99, padding: '3px 9px',
        fontSize: 9, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase',
        color: active ? '#fff' : uc.textColor,
      }}>
        {uc.stat}
      </span>
    </div>
  )
}

/* ── MINIMAL PHONE MOCKUP ── */
function PhoneMockup({ activeId }) {
  const feature = FEATURES.find(f => f.id === activeId)

  return (
    <div style={{
      width: 260, height: 520,
      background: '#1e293b',
      borderRadius: 38, padding: 10,
      border: '4px solid #334155',
      boxShadow: '0 24px 60px rgba(0,0,0,0.22)',
      position: 'relative', flexShrink: 0,
    }}>
      {/* notch */}
      <div style={{ position: 'absolute', top: 15, left: '50%', transform: 'translateX(-50%)', width: 75, height: 18, background: '#000', borderRadius: 12, zIndex: 10 }} />
      {/* screen */}
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 30, overflow: 'hidden',
        background: feature?.bg || '#f8fafc',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 24, textAlign: 'center',
        border: '2px solid #000',
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 30, marginBottom: 16,
          boxShadow: `0 8px 24px ${feature?.accent}30`,
          border: `2px solid ${feature?.accent}40`,
        }}>
          {feature?.emoji}
        </div>

        <div style={{ fontSize: 14, fontWeight: 800, color: feature?.tagColor, marginBottom: 6 }}>
          {feature?.title}
        </div>

        <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.6, marginBottom: 16 }}>
          {feature?.desc}
        </div>

        {/* notification bar */}
        <div style={{
          width: '100%', background: '#fff',
          borderRadius: 10, padding: '8px 12px',
          border: `1.5px solid ${feature?.accent}30`,
          display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            background: feature?.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, flexShrink: 0,
          }}>
            {feature?.emoji}
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 9.5, fontWeight: 800, color: '#0f172a' }}>ScanForSafe Alert</div>
            <div style={{ fontSize: 8.5, color: '#64748b' }}>Tap to view details →</div>
          </div>
        </div>

        <div style={{
          marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {feature?.pills.map(p => (
            <span key={p} style={{
              fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 99,
              background: '#fff', color: feature?.tagColor,
              border: `1px solid ${feature?.accent}30`,
            }}>
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* side buttons */}
      <div style={{ position: 'absolute', left: -4, top: 85, width: 3, height: 26, background: '#475569', borderRadius: '3px 0 0 3px' }} />
      <div style={{ position: 'absolute', left: -4, top: 120, width: 3, height: 36, background: '#475569', borderRadius: '3px 0 0 3px' }} />
      <div style={{ position: 'absolute', right: -4, top: 110, width: 3, height: 44, background: '#475569', borderRadius: '0 3px 3px 0' }} />
    </div>
  )
}

/* ── SECTION HEADER ── */
function SectionHeader({ badge, badgeBg, badgeBorder, badgeColor, title, highlight, highlightGradient, desc }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 52 }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        background: badgeBg, border: `1.5px solid ${badgeBorder}`,
        borderRadius: 99, padding: '7px 20px',
        fontSize: 11.5, fontWeight: 800, color: badgeColor,
        letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 16,
      }}>
        {badge}
      </div>
      <h2 style={{
        fontSize: 'clamp(1.8rem, 3.8vw, 3rem)', fontWeight: 900,
        color: '#0B2545', letterSpacing: '-.04em', lineHeight: 1.1,
        margin: '0 0 14px', fontFamily: "'Outfit', sans-serif",
      }}>
        {title}{' '}
        <span style={{
          background: highlightGradient,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          {highlight}
        </span>
      </h2>
      <p style={{ fontSize: 15, color: '#4b7a62', maxWidth: 500, margin: '0 auto', lineHeight: 1.8 }}>{desc}</p>
    </div>
  )
}

/* ── MAIN COMPONENT ── */
export default function Features() {
  const [activeFeature, setActiveFeature] = useState('whatsapp')
  const [activeUC, setActiveUC] = useState(0)
  const activeF = FEATURES.find(f => f.id === activeFeature)

  return (
    <section style={{ background: '#f8fafc', padding: '90px 24px 96px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&display=swap');
        * { box-sizing: border-box; }
        .feat-layout { display: grid; grid-template-columns: 1fr 280px; gap: 36px; align-items: start; }
        .feat-grid   { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .uc-grid     { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .tier-grid   { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .step-grid   { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .phone-sticky { position: sticky; top: 90px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
        @media (max-width: 1024px) {
          .feat-layout { grid-template-columns: 1fr; }
          .phone-sticky { position: relative; top: 0; margin: 0 auto 32px; }
          .uc-grid { grid-template-columns: repeat(2, 1fr); }
          .tier-grid { grid-template-columns: repeat(2, 1fr); }
          .step-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .feat-grid { grid-template-columns: 1fr; }
          .uc-grid   { grid-template-columns: 1fr; }
          .tier-grid { grid-template-columns: 1fr; }
          .step-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: 1140, margin: '0 auto' }}>

        {/* ── FEATURES SECTION ── */}
        <SectionHeader
          badge="✦ Platform Features"
          badgeBg="#dcfce7" badgeBorder="#4ade80" badgeColor="#14532d"
          title="Powerful Features for"
          highlight="Peace of Mind"
          highlightGradient="linear-gradient(130deg,#16a34a,#059669)"
          desc="Everything you need — no app needed on the finder's end. Click any card to preview."
        />

        <div className="feat-layout" style={{ marginBottom: 88 }}>
          {/* feature cards */}
          <div className="feat-grid">
            {FEATURES.map(f => (
              <FeatureCard
                key={f.id} f={f}
                active={activeFeature === f.id}
                onClick={() => setActiveFeature(f.id)}
              />
            ))}
          </div>

          {/* sticky phone */}
          <div className="phone-sticky">
            <PhoneMockup activeId={activeFeature} />
            <div style={{
              background: '#fff', border: '1.5px solid #e2e8f0',
              borderRadius: 12, padding: '10px 16px', textAlign: 'center',
              width: '100%', maxWidth: 260,
            }}>
              <div style={{ fontSize: 9.5, color: '#94a3b8', fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 3 }}>
                Previewing
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: '#0B2545' }}>
                {activeF?.emoji} {activeF?.title}
              </div>
            </div>
          </div>
        </div>

        {/* ── USE CASES SECTION ── */}
        <SectionHeader
          badge="🛡️ Protection Categories"
          badgeBg="#ffedd5" badgeBorder="#fb923c" badgeColor="#7c2d12"
          title="8 Safety Categories."
          highlight="One Smart Platform."
          highlightGradient="linear-gradient(130deg,#ea580c,#dc2626)"
          desc="From lost luggage to road emergencies — ScanForSafe covers every real-world scenario."
        />

        <div className="uc-grid" style={{ marginBottom: 88 }}>
          {USE_CASES.map((uc, i) => (
            <UseCaseCard
              key={i} uc={uc}
              active={activeUC === i}
              onClick={() => setActiveUC(activeUC === i ? -1 : i)}
            />
          ))}
        </div>

        {/* ── REWARD SECTION ── */}
        <div style={{
          background: '#fff', borderRadius: 24, padding: '48px 36px 40px',
          border: '1.5px solid #e2e8f0',
          boxShadow: '0 8px 32px rgba(15,23,42,0.05)',
        }}>
          <SectionHeader
            badge="🏆 Reward System"
            badgeBg="#fef9c3" badgeBorder="#fbbf24" badgeColor="#92400e"
            title="Get Rewarded for"
            highlight="Finding & Returning"
            highlightGradient="linear-gradient(130deg,#16a34a,#22c55e)"
            desc="Owners set an optional cash reward. Verified finders receive payouts directly — OTP protected, secure, and fraud-resistant."
          />

          {/* tier cards */}
          <div className="tier-grid" style={{ marginBottom: 36 }}>
            {REWARD_TIERS.map((r, i) => (
              <div key={i} style={{
                borderRadius: 18, overflow: 'hidden',
                border: `1.5px solid ${r.border}`,
                boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  background: `linear-gradient(135deg,${r.headerFrom},${r.headerTo})`,
                  padding: '22px 14px 18px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: 38, lineHeight: 1, marginBottom: 6 }}>{r.icon}</div>
                  <div style={{ fontSize: 17, fontWeight: 900, color: '#fff', fontFamily: "'Outfit',sans-serif" }}>{r.tier}</div>
                </div>
                <div style={{ background: r.bodyBg, padding: '16px 14px', textAlign: 'center', borderTop: `1px solid ${r.border}` }}>
                  <div style={{ fontSize: 14.5, fontWeight: 900, color: r.titleColor, marginBottom: 3, fontFamily: "'Outfit',sans-serif" }}>{r.range}</div>
                  <div style={{ fontSize: 10, color: r.titleColor, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em', opacity: 0.7 }}>Reward Range</div>
                </div>
              </div>
            ))}
          </div>

          {/* payout steps */}
          <div style={{ background: '#f8fafc', borderRadius: 16, padding: '28px 24px', border: '1px solid #e2e8f0' }}>
            <div style={{ textAlign: 'center', marginBottom: 22 }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: '#16a34a', letterSpacing: '.1em', textTransform: 'uppercase' }}>
                How Payouts Work
              </span>
            </div>
            <div className="step-grid">
              {PAYOUT_STEPS.map((s, i) => (
                <div key={i} style={{
                  background: '#fff', borderRadius: 14,
                  border: '1.5px solid #e2e8f0',
                  padding: '20px 14px', textAlign: 'center',
                  transition: 'all .25s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#86efac'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'none' }}
                >
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#16a34a,#4ade80)',
                    fontSize: 11, fontWeight: 900, color: '#fff', marginBottom: 10,
                  }}>
                    {s.step}
                  </div>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{s.emoji}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: '#0B2545', marginBottom: 5 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TRUST PILLS ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 20px', marginTop: 52, paddingTop: 28, borderTop: '1.5px solid #e2e8f0' }}>
          {['🔐 ISO-grade data privacy', '⚡ Works 24/7 — even offline', '📱 Any smartphone camera', '🔒 End-to-end encrypted', '🇮🇳 Made for India'].map(item => (
            <div key={item} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: '#fff', border: '1.5px solid #e2e8f0',
              borderRadius: 99, padding: '7px 18px',
              fontSize: 12.5, fontWeight: 700, color: '#334155',
              transition: 'all .2s ease', cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#86efac'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'none' }}
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}