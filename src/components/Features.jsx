import { useState, useEffect, useRef } from 'react'

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
  { emoji: '🚗', label: 'Vehicles',        sub: 'Road accidents & emergencies', bg: '#dcfce7', accent: '#16a34a', textColor: '#14532d', border: '#4ade80', stat: '2yr QR validity' },
  { emoji: '🧳', label: 'Luggage',         sub: 'Airport & travel recovery',    bg: '#dbeafe', accent: '#2563eb', textColor: '#1e3a8a', border: '#60a5fa', stat: 'Scan anywhere' },
  { emoji: '🐾', label: 'Pets',            sub: 'Lost pet QR tag recovery',     bg: '#fef3c7', accent: '#d97706', textColor: '#78350f', border: '#fbbf24', stat: '24/7 alerts' },
  { emoji: '🎒', label: 'School Kids',     sub: 'Bus transit child safety',     bg: '#ede9fe', accent: '#7c3aed', textColor: '#3b0764', border: '#a78bfa', stat: 'Parent notified' },
  { emoji: '👴', label: 'Senior Citizens', sub: 'Medical emergency response',   bg: '#ffe4e6', accent: '#e11d48', textColor: '#881337', border: '#fca5a5', stat: 'SOS workflow' },
  { emoji: '💛', label: 'Special Needs',   sub: 'Community assisted return',    bg: '#ccfbf1', accent: '#0d9488', textColor: '#134e4a', border: '#5eead4', stat: 'Care team alerts' },
  { emoji: '🔍', label: 'Missing Vehicle', sub: 'Community alert & recovery',   bg: '#ffedd5', accent: '#ea580c', textColor: '#7c2d12', border: '#fb923c', stat: 'Anti-fraud verified' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Family Safety',  sub: 'Daily peace of mind',          bg: '#e0e7ff', accent: '#4338ca', textColor: '#1e1b4b', border: '#818cf8', stat: 'Up to 5 members' },
]

/* ── WHATSAPP REAL-TIME SIMULATION ── */
const WA_STEPS = [
  { id: 'scan',    delay: 0,    duration: 1000, label: 'QR Scanned',          sub: 'Someone scanned your tag',                icon: '📷', color: '#0ea5e9' },
  { id: 'gps',     delay: 1200, duration: 1200, label: 'GPS Captured',         sub: 'Location: 13.0827° N, 80.2707° E',         icon: '📍', color: '#f59e0b' },
  { id: 'send',    delay: 2600, duration: 1000, label: 'Sending WhatsApp…',   sub: 'Routing to +91-98XXX-XXXXX',               icon: '💬', color: '#16a34a' },
  { id: 'deliver', delay: 3800, duration: 800,  label: 'Delivered ✓✓',         sub: 'Message delivered successfully',            icon: '✅', color: '#16a34a' },
  { id: 'read',    delay: 4800, duration: 600,  label: 'Read ✓✓',              sub: 'Owner opened the WhatsApp message',         icon: '👁️', color: '#2563eb' },
  { id: 'call',    delay: 5600, duration: 800,  label: 'Owner Calling Back',   sub: 'Direct call connected to finder',           icon: '📞', color: '#7c3aed' },
]

const WA_MESSAGE = {
  header: '🔔 *ScanForSafe Alert*',
  lines: [
    '🏷️ Your item *"Black Laptop Bag"* was scanned.',
    '📍 Location: *Egmore, Chennai*',
    '🗺️ Maps: maps.google.com/?q=13.08,80.27',
    '⏰ Time: *Just Now*',
    '📱 Device: Android · Chrome',
    '',
    '📞 Tap to call the finder instantly →',
  ]
}

function WhatsAppSimulator() {
  const [running, setRunning] = useState(false)
  const [completedSteps, setCompletedSteps] = useState([])
  const [activeStep, setActiveStep] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const [typedLines, setTypedLines] = useState([])
  const [pulse, setPulse] = useState(false)
  const timersRef = useRef([])

  const reset = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
    setRunning(false)
    setCompletedSteps([])
    setActiveStep(null)
    setShowMessage(false)
    setTypedLines([])
    setPulse(false)
  }

  const runSimulation = () => {
    reset()
    setRunning(true)

    WA_STEPS.forEach((step, i) => {
      const t1 = setTimeout(() => {
        setActiveStep(step.id)
        setPulse(true)
        setTimeout(() => setPulse(false), 400)
      }, step.delay)

      const t2 = setTimeout(() => {
        setCompletedSteps(prev => [...prev, step.id])
        if (i === WA_STEPS.length - 1) {
          setActiveStep(null)
          setShowMessage(true)
          // Type lines one by one
          WA_MESSAGE.lines.forEach((line, li) => {
            const t3 = setTimeout(() => {
              setTypedLines(prev => [...prev, line])
            }, li * 280)
            timersRef.current.push(t3)
          })
          const tDone = setTimeout(() => setRunning(false), WA_MESSAGE.lines.length * 280 + 500)
          timersRef.current.push(tDone)
        }
      }, step.delay + step.duration)

      timersRef.current.push(t1, t2)
    })
  }

  return (
    <div style={{ width: 260, flexShrink: 0 }}>
      {/* Phone frame */}
      <div style={{
        width: 260, height: 520,
        background: '#1e293b',
        borderRadius: 38, padding: 10,
        border: '4px solid #334155',
        boxShadow: '0 24px 60px rgba(0,0,0,0.28)',
        position: 'relative',
      }}>
        {/* notch */}
        <div style={{ position: 'absolute', top: 15, left: '50%', transform: 'translateX(-50%)', width: 75, height: 18, background: '#000', borderRadius: 12, zIndex: 10 }} />
        {/* screen */}
        <div style={{
          width: '100%', height: '100%',
          borderRadius: 30, overflow: 'hidden',
          background: '#ECE5DD',
          display: 'flex', flexDirection: 'column',
          border: '2px solid #000',
        }}>
          {/* WA header */}
          <div style={{
            background: '#075E54', padding: '28px 12px 10px',
            display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
          }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🔔</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>ScanForSafe Bot</div>
              <div style={{ fontSize: 9, color: '#a7f3d0' }}>{running ? '● typing...' : 'online'}</div>
            </div>
          </div>

          {/* Chat body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {!showMessage && !running && completedSteps.length === 0 && (
              <div style={{ textAlign: 'center', marginTop: 60 }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>💬</div>
                <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>Tap "Simulate Alert"</div>
                <div style={{ fontSize: 10, color: '#94a3b8' }}>See the real-time flow</div>
              </div>
            )}

            {/* Step indicators */}
            {(running || completedSteps.length > 0) && !showMessage && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 4 }}>
                {WA_STEPS.map(step => {
                  const done = completedSteps.includes(step.id)
                  const active = activeStep === step.id
                  return (
                    <div key={step.id} style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      padding: '5px 8px', borderRadius: 8,
                      background: done ? '#dcfce7' : active ? '#fff' : 'rgba(255,255,255,0.4)',
                      border: `1px solid ${done ? '#86efac' : active ? step.color : 'transparent'}`,
                      transition: 'all 0.3s ease',
                      transform: active ? 'scale(1.02)' : 'scale(1)',
                    }}>
                      <span style={{ fontSize: 14 }}>{done ? '✅' : active ? step.icon : '⬜'}</span>
                      <div>
                        <div style={{ fontSize: 9.5, fontWeight: 800, color: done ? '#15803d' : active ? step.color : '#94a3b8' }}>{step.label}</div>
                        {(done || active) && <div style={{ fontSize: 8.5, color: '#64748b' }}>{step.sub}</div>}
                      </div>
                      {active && (
                        <div style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
                          {[0, 1, 2].map(d => (
                            <div key={d} style={{
                              width: 4, height: 4, borderRadius: '50%', background: step.color,
                              animation: `bounce 0.8s ease ${d * 0.15}s infinite`,
                            }} />
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {/* WA Message bubble */}
            {showMessage && (
              <div style={{
                background: '#fff', borderRadius: '12px 12px 12px 3px',
                padding: '10px 12px', maxWidth: '85%',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                border: '1px solid #d1fae5',
                animation: 'fadeUp 0.4s ease',
              }}>
                <div style={{ fontSize: 9.5, fontWeight: 900, color: '#075E54', marginBottom: 5 }}>
                  {WA_MESSAGE.header}
                </div>
                {typedLines.map((line, i) => (
                  <div key={i} style={{
                    fontSize: 9, color: line === '' ? undefined : '#1a1a1a',
                    lineHeight: 1.7, minHeight: line === '' ? 6 : undefined,
                    animation: 'fadeUp 0.25s ease',
                  }}>
                    {line}
                  </div>
                ))}
                {typedLines.length === WA_MESSAGE.lines.length && (
                  <div style={{
                    marginTop: 6, background: '#25D366', borderRadius: 6,
                    padding: '4px 8px', textAlign: 'center',
                    fontSize: 8.5, fontWeight: 800, color: '#fff',
                    animation: 'fadeUp 0.3s ease',
                  }}>
                    📞 Call Finder Now
                  </div>
                )}
                <div style={{ textAlign: 'right', fontSize: 8, color: '#94a3b8', marginTop: 3 }}>
                  {typedLines.length === WA_MESSAGE.lines.length ? '✓✓' : '✓'} Just now
                </div>
              </div>
            )}
          </div>

          {/* WA input bar */}
          <div style={{
            background: '#f0f0f0', padding: '6px 8px',
            display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0,
          }}>
            <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '5px 10px', fontSize: 9, color: '#aaa' }}>
              Type a message
            </div>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>🎤</div>
          </div>
        </div>

        {/* Side buttons */}
        <div style={{ position: 'absolute', left: -4, top: 85, width: 3, height: 26, background: '#475569', borderRadius: '3px 0 0 3px' }} />
        <div style={{ position: 'absolute', left: -4, top: 120, width: 3, height: 36, background: '#475569', borderRadius: '3px 0 0 3px' }} />
        <div style={{ position: 'absolute', right: -4, top: 110, width: 3, height: 44, background: '#475569', borderRadius: '0 3px 3px 0' }} />
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button
          onClick={runSimulation}
          disabled={running}
          style={{
            flex: 1, padding: '10px 0',
            background: running ? '#dcfce7' : 'linear-gradient(135deg,#16a34a,#22c55e)',
            color: running ? '#15803d' : '#fff',
            border: 'none', borderRadius: 10,
            fontSize: 11.5, fontWeight: 800, cursor: running ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: running ? 'none' : '0 4px 14px #16a34a50',
          }}
        >
          {running ? '⏳ Sending…' : '▶ Simulate Alert'}
        </button>
        {(completedSteps.length > 0 || showMessage) && (
          <button
            onClick={reset}
            style={{
              padding: '10px 14px',
              background: '#f1f5f9', color: '#64748b',
              border: '1.5px solid #e2e8f0', borderRadius: 10,
              fontSize: 11, fontWeight: 700, cursor: 'pointer',
            }}
          >
            ↺
          </button>
        )}
      </div>

      {/* Label */}
      <div style={{
        background: '#fff', border: '1.5px solid #e2e8f0',
        borderRadius: 12, padding: '10px 16px', textAlign: 'center',
        marginTop: 8,
      }}>
        <div style={{ fontSize: 9.5, color: '#94a3b8', fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 3 }}>
          Live Simulation
        </div>
        <div style={{ fontSize: 13.5, fontWeight: 800, color: '#0B2545' }}>
          💬 WhatsApp Alerts
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ── STANDARD PHONE MOCKUP ── */
function PhoneMockup({ activeId }) {
  const feature = FEATURES.find(f => f.id === activeId)
  return (
    <div style={{ width: 260, flexShrink: 0 }}>
      <div style={{
        width: 260, height: 520,
        background: '#1e293b',
        borderRadius: 38, padding: 10,
        border: '4px solid #334155',
        boxShadow: '0 24px 60px rgba(0,0,0,0.22)',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: 15, left: '50%', transform: 'translateX(-50%)', width: 75, height: 18, background: '#000', borderRadius: 12, zIndex: 10 }} />
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
          <div style={{ fontSize: 14, fontWeight: 800, color: feature?.tagColor, marginBottom: 6 }}>{feature?.title}</div>
          <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.6, marginBottom: 16 }}>{feature?.desc}</div>
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
          <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
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
        <div style={{ position: 'absolute', left: -4, top: 85, width: 3, height: 26, background: '#475569', borderRadius: '3px 0 0 3px' }} />
        <div style={{ position: 'absolute', left: -4, top: 120, width: 3, height: 36, background: '#475569', borderRadius: '3px 0 0 3px' }} />
        <div style={{ position: 'absolute', right: -4, top: 110, width: 3, height: 44, background: '#475569', borderRadius: '0 3px 3px 0' }} />
      </div>
      <div style={{
        background: '#fff', border: '1.5px solid #e2e8f0',
        borderRadius: 12, padding: '10px 16px', textAlign: 'center',
        marginTop: 8,
      }}>
        <div style={{ fontSize: 9.5, color: '#94a3b8', fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 3 }}>
          Previewing
        </div>
        <div style={{ fontSize: 13.5, fontWeight: 800, color: '#0B2545' }}>
          {feature?.emoji} {feature?.title}
        </div>
      </div>
    </div>
  )
}

/* ── FEATURE CARD ── */
function FeatureCard({ f, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: 16, padding: '18px 16px',
        background: active ? f.accent : '#fff',
        border: `1.5px solid ${active ? f.accent : f.bg}`,
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        transform: active ? 'translateY(-4px)' : 'none',
        boxShadow: active ? `0 12px 32px ${f.accent}30` : '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      <span style={{
        display: 'inline-block',
        background: active ? 'rgba(255,255,255,0.2)' : f.tagBg,
        color: active ? '#fff' : f.tagColor,
        fontSize: 10, fontWeight: 700,
        padding: '3px 9px', borderRadius: 99,
        letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 10,
      }}>
        {f.tag}
      </span>
      <div style={{ fontSize: 28, marginBottom: 8 }}>{f.emoji}</div>
      <h3 style={{ fontSize: 14.5, fontWeight: 800, margin: '0 0 6px', color: active ? '#fff' : '#0B2545' }}>{f.title}</h3>
      <p style={{ fontSize: 12.5, lineHeight: 1.6, margin: '0 0 12px', color: active ? 'rgba(255,255,255,0.85)' : '#64748b' }}>{f.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
        {f.pills.map(p => (
          <span key={p} style={{
            fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 99,
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

/* ── USE CASE CARD (with prominent border) ── */
function UseCaseCard({ uc, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        borderRadius: 16, padding: '20px 14px 18px',
        background: active ? uc.accent : uc.bg,
        border: `2.5px solid ${active ? uc.accent : uc.border}`,
        textAlign: 'center', cursor: 'pointer',
        transition: 'all 0.25s ease',
        transform: active ? 'translateY(-5px)' : 'none',
        boxShadow: active
          ? `0 14px 32px ${uc.accent}35`
          : `0 3px 12px ${uc.accent}18, inset 0 0 0 1px ${uc.border}40`,
      }}
    >
      <div style={{
        fontSize: 34, marginBottom: 8,
        transform: active ? 'scale(1.18)' : 'scale(1)',
        transition: 'transform 0.25s ease',
      }}>
        {uc.emoji}
      </div>
      <div style={{ fontSize: 13.5, fontWeight: 800, color: active ? '#fff' : uc.textColor, marginBottom: 4 }}>
        {uc.label}
      </div>
      <div style={{ fontSize: 10.5, color: active ? 'rgba(255,255,255,0.78)' : '#64748b', marginBottom: 10, lineHeight: 1.4 }}>
        {uc.sub}
      </div>
      <span style={{
        display: 'inline-block',
        background: active ? 'rgba(255,255,255,0.22)' : '#fff',
        border: `1.5px solid ${active ? 'rgba(255,255,255,0.35)' : uc.border}`,
        borderRadius: 99, padding: '3px 10px',
        fontSize: 9, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase',
        color: active ? '#fff' : uc.textColor,
      }}>
        {uc.stat}
      </span>
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
  const isWhatsApp = activeFeature === 'whatsapp'

  return (
    <section style={{ background: '#f8fafc', padding: '90px 24px 96px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&display=swap');
        * { box-sizing: border-box; }
        .feat-layout { display: grid; grid-template-columns: 1fr 280px; gap: 36px; align-items: start; }
        .feat-grid   { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .uc-grid     { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .phone-sticky { position: sticky; top: 90px; display: flex; flex-direction: column; align-items: center; gap: 0; }
        @media (max-width: 1024px) {
          .feat-layout { grid-template-columns: 1fr; }
          .phone-sticky { position: relative; top: 0; margin: 0 auto 32px; }
          .uc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .feat-grid { grid-template-columns: 1fr; }
          .uc-grid   { grid-template-columns: 1fr; }
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

          {/* sticky phone / simulator */}
          <div className="phone-sticky">
            {isWhatsApp ? (
              <WhatsAppSimulator />
            ) : (
              <PhoneMockup activeId={activeFeature} />
            )}
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

        <div className="uc-grid" style={{ marginBottom: 64 }}>
          {USE_CASES.map((uc, i) => (
            <UseCaseCard
              key={i} uc={uc}
              active={activeUC === i}
              onClick={() => setActiveUC(activeUC === i ? -1 : i)}
            />
          ))}
        </div>

        {/* ── TRUST PILLS ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 20px', marginTop: 16, paddingTop: 28, borderTop: '1.5px solid #e2e8f0' }}>
          {['🔐 ISO-grade data privacy', '⚡ Works 24/7 — even offline', '📱 Any smartphone camera', '🔒 End-to-end encrypted', '🇮🇳 Made for India'].map(item => (
            <div
              key={item}
              style={{
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