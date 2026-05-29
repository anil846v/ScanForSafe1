import { useState, useRef } from 'react'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   PHONE FRAME WRAPPER
───────────────────────────────────────────── */
function PhoneFrame({ children, screenBg = '#f8fafc' }) {
  return (
    <div style={{
      width: 260,
      background: '#1e293b',
      borderRadius: 38,
      padding: 10,
      border: '4px solid #334155',
      boxShadow: '0 24px 60px rgba(0,0,0,0.28)',
      position: 'relative',
    }}>
      {/* notch */}
      <div style={{ position: 'absolute', top: 15, left: '50%', transform: 'translateX(-50%)', width: 75, height: 18, background: '#000', borderRadius: 12, zIndex: 10 }} />
      {/* screen */}
      <div style={{
        width: '100%',
        height: 480,
        borderRadius: 30,
        overflow: 'hidden',
        background: screenBg,
        border: '2px solid #000',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {children}
      </div>
      {/* side buttons */}
      <div style={{ position: 'absolute', left: -4, top: 85, width: 3, height: 26, background: '#475569', borderRadius: '3px 0 0 3px' }} />
      <div style={{ position: 'absolute', left: -4, top: 120, width: 3, height: 36, background: '#475569', borderRadius: '3px 0 0 3px' }} />
      <div style={{ position: 'absolute', right: -4, top: 110, width: 3, height: 44, background: '#475569', borderRadius: '0 3px 3px 0' }} />
    </div>
  )
}

/* ─────────────────────────────────────────────
   EXTERNAL SIM CTA — big attractive button BELOW phone
───────────────────────────────────────────── */
function SimCTA({ running, hasData, onRun, onReset, accent, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginTop: 18 }}>
      {/* pulsing ring when idle */}
      <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {!running && !hasData && (
          <>
            <div style={{
              position: 'absolute', width: 220, height: 54,
              borderRadius: 99,
              border: `2px solid ${accent}`,
              opacity: 0.35,
              animation: 'ctaPulse 1.8s ease-out infinite',
            }} />
            <div style={{
              position: 'absolute', width: 220, height: 54,
              borderRadius: 99,
              border: `2px solid ${accent}`,
              opacity: 0.18,
              animation: 'ctaPulse 1.8s ease-out 0.5s infinite',
            }} />
          </>
        )}
        <button
          onClick={onRun}
          disabled={running}
          style={{
            width: 210,
            padding: '13px 0',
            background: running
              ? '#e2e8f0'
              : `linear-gradient(135deg, ${accent} 0%, ${accent}bb 100%)`,
            color: running ? '#94a3b8' : '#fff',
            border: 'none',
            borderRadius: 99,
            fontSize: 14,
            fontWeight: 900,
            letterSpacing: '.03em',
            cursor: running ? 'not-allowed' : 'pointer',
            transition: 'all 0.25s',
            boxShadow: running ? 'none' : `0 8px 28px ${accent}55`,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {running ? '⏳  Running…' : `▶  ${label}`}
        </button>
      </div>

      {/* reset */}
      {hasData && !running && (
        <button
          onClick={onReset}
          style={{
            padding: '6px 22px',
            background: 'transparent',
            color: '#94a3b8',
            border: '1.5px solid #e2e8f0',
            borderRadius: 99,
            fontSize: 11,
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.color = '#64748b' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#94a3b8' }}
        >
          ↺ Reset
        </button>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   1. WHATSAPP SIMULATOR
───────────────────────────────────────────── */
const WA_STEPS = [
  { id: 'scan',    delay: 0,    duration: 1000, label: 'QR Scanned',         sub: 'Someone scanned your tag',       icon: '📷', color: '#0ea5e9' },
  { id: 'gps',     delay: 1200, duration: 1200, label: 'GPS Captured',        sub: 'Location: 13.0827°N, 80.2707°E', icon: '📍', color: '#f59e0b' },
  { id: 'send',    delay: 2600, duration: 1000, label: 'Sending WhatsApp…',  sub: 'Routing to +91-98XXX-XXXXX',     icon: '💬', color: '#16a34a' },
  { id: 'deliver', delay: 3800, duration: 800,  label: 'Delivered ✓✓',        sub: 'Message delivered successfully', icon: '✅', color: '#16a34a' },
  { id: 'read',    delay: 4800, duration: 600,  label: 'Read ✓✓',             sub: 'Owner opened the message',       icon: '👁️', color: '#2563eb' },
  { id: 'call',    delay: 5600, duration: 800,  label: 'Owner Calling Back',  sub: 'Direct call connected to finder',icon: '📞', color: '#7c3aed' },
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

function WhatsAppSimulator({ running, setRunning, completedSteps, setCompletedSteps, activeStep, setActiveStep, showMessage, setShowMessage, typedLines, setTypedLines, timersRef }) {
  return (
    <PhoneFrame screenBg="#ECE5DD">
      {/* WA header */}
      <div style={{ background: '#075E54', padding: '28px 12px 10px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🔔</div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>ScanForSafe Bot</div>
          <div style={{ fontSize: 9, color: '#a7f3d0' }}>{running ? '● typing...' : 'online'}</div>
        </div>
      </div>
      {/* chat */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {!showMessage && !running && completedSteps.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>💬</div>
            <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>Tap "Simulate Alert" below</div>
            <div style={{ fontSize: 10, color: '#94a3b8' }}>See the real-time flow</div>
          </div>
        )}
        {(running || completedSteps.length > 0) && !showMessage && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {WA_STEPS.map(step => {
              const done = completedSteps.includes(step.id)
              const active = activeStep === step.id
              return (
                <div key={step.id} style={{
                  display: 'flex', alignItems: 'center', gap: 6, padding: '5px 8px', borderRadius: 8,
                  background: done ? '#dcfce7' : active ? '#fff' : 'rgba(255,255,255,0.4)',
                  border: `1px solid ${done ? '#86efac' : active ? step.color : 'transparent'}`,
                  transition: 'all 0.3s', transform: active ? 'scale(1.02)' : 'scale(1)',
                }}>
                  <span style={{ fontSize: 14 }}>{done ? '✅' : active ? step.icon : '⬜'}</span>
                  <div>
                    <div style={{ fontSize: 9.5, fontWeight: 800, color: done ? '#15803d' : active ? step.color : '#94a3b8' }}>{step.label}</div>
                    {(done || active) && <div style={{ fontSize: 8.5, color: '#64748b' }}>{step.sub}</div>}
                  </div>
                  {active && (
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
                      {[0,1,2].map(d => <div key={d} style={{ width: 4, height: 4, borderRadius: '50%', background: step.color, animation: `bounce 0.8s ease ${d*0.15}s infinite` }} />)}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
        {showMessage && (
          <div style={{ background: '#fff', borderRadius: '12px 12px 12px 3px', padding: '10px 12px', maxWidth: '85%', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', border: '1px solid #d1fae5', animation: 'fadeUp 0.4s ease' }}>
            <div style={{ fontSize: 9.5, fontWeight: 900, color: '#075E54', marginBottom: 5 }}>{WA_MESSAGE.header}</div>
            {typedLines.map((line, i) => (
              <div key={i} style={{ fontSize: 9, color: '#1a1a1a', lineHeight: 1.7, minHeight: line === '' ? 6 : undefined, animation: 'fadeUp 0.25s ease' }}>{line}</div>
            ))}
            {typedLines.length === WA_MESSAGE.lines.length && (
              <div style={{ marginTop: 6, background: '#25D366', borderRadius: 6, padding: '4px 8px', textAlign: 'center', fontSize: 8.5, fontWeight: 800, color: '#fff', animation: 'fadeUp 0.3s ease' }}>📞 Call Finder Now</div>
            )}
            <div style={{ textAlign: 'right', fontSize: 8, color: '#94a3b8', marginTop: 3 }}>{typedLines.length === WA_MESSAGE.lines.length ? '✓✓' : '✓'} Just now</div>
          </div>
        )}
      </div>
      {/* WA input bar */}
      <div style={{ background: '#f0f0f0', padding: '6px 8px', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
        <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '5px 10px', fontSize: 9, color: '#aaa' }}>Type a message</div>
        <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>🎤</div>
      </div>
    </PhoneFrame>
  )
}

function WhatsAppSimulatorWrapper() {
  const [running, setRunning] = useState(false)
  const [completedSteps, setCompletedSteps] = useState([])
  const [activeStep, setActiveStep] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const [typedLines, setTypedLines] = useState([])
  const timersRef = useRef([])

  const reset = () => {
    timersRef.current.forEach(clearTimeout); timersRef.current = []
    setRunning(false); setCompletedSteps([]); setActiveStep(null)
    setShowMessage(false); setTypedLines([])
  }

  const run = () => {
    reset(); setRunning(true)
    WA_STEPS.forEach((step, i) => {
      const t1 = setTimeout(() => setActiveStep(step.id), step.delay)
      const t2 = setTimeout(() => {
        setCompletedSteps(p => [...p, step.id])
        if (i === WA_STEPS.length - 1) {
          setActiveStep(null); setShowMessage(true)
          WA_MESSAGE.lines.forEach((_, li) => {
            const t3 = setTimeout(() => setTypedLines(p => [...p, WA_MESSAGE.lines[li]]), li * 280)
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <WhatsAppSimulator running={running} setRunning={setRunning} completedSteps={completedSteps} setCompletedSteps={setCompletedSteps} activeStep={activeStep} setActiveStep={setActiveStep} showMessage={showMessage} setShowMessage={setShowMessage} typedLines={typedLines} setTypedLines={setTypedLines} timersRef={timersRef} />
      <SimCTA running={running} hasData={completedSteps.length > 0 || showMessage} onRun={run} onReset={reset} accent="#16a34a" label="Simulate Alert" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   2. CALL CONNECT SIMULATOR
───────────────────────────────────────────── */
const CALL_STEPS = [
  { id: 'scan',    delay: 0,    duration: 900,  label: 'QR Code Scanned',      icon: '📷', color: '#4338ca' },
  { id: 'page',    delay: 1100, duration: 800,  label: 'Finder Page Loaded',   icon: '🌐', color: '#4338ca' },
  { id: 'tap',     delay: 2100, duration: 600,  label: 'Finder Taps Call',     icon: '👆', color: '#4338ca' },
  { id: 'ring',    delay: 2900, duration: 1400, label: 'Calling Owner…',       icon: '📳', color: '#6366f1' },
  { id: 'answer',  delay: 4500, duration: 800,  label: 'Owner Answers',        icon: '📞', color: '#16a34a' },
  { id: 'connect', delay: 5500, duration: 600,  label: 'Connected!',           icon: '🤝', color: '#16a34a' },
]

function CallSimulatorWrapper() {
  const [running, setRunning] = useState(false)
  const [completedSteps, setCompletedSteps] = useState([])
  const [activeStep, setActiveStep] = useState(null)
  const [phase, setPhase] = useState('idle')
  const [callTime, setCallTime] = useState(0)
  const timersRef = useRef([])
  const callTimerRef = useRef(null)

  const reset = () => {
    timersRef.current.forEach(clearTimeout); timersRef.current = []
    clearInterval(callTimerRef.current)
    setRunning(false); setCompletedSteps([]); setActiveStep(null); setPhase('idle'); setCallTime(0)
  }

  const run = () => {
    reset(); setRunning(true); setPhase('qr')
    CALL_STEPS.forEach((step, i) => {
      const t1 = setTimeout(() => {
        setActiveStep(step.id)
        if (step.id === 'ring') setPhase('calling')
        if (step.id === 'connect') { setPhase('connected'); callTimerRef.current = setInterval(() => setCallTime(p => p+1), 1000) }
      }, step.delay)
      const t2 = setTimeout(() => {
        setCompletedSteps(p => [...p, step.id])
        if (i === CALL_STEPS.length - 1) { setActiveStep(null); setRunning(false) }
      }, step.delay + step.duration)
      timersRef.current.push(t1, t2)
    })
  }

  const fmtTime = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`

  const screenContent = () => {
    if (phase === 'idle') return (
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding: 20 }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>📞</div>
        <div style={{ fontSize: 13, fontWeight: 800, color: '#1e1b4b', textAlign: 'center' }}>One-Touch Call</div>
        <div style={{ fontSize: 10, color: '#64748b', textAlign: 'center', marginTop: 6, lineHeight: 1.6 }}>No app. No sign-up.<br/>Works on any phone.</div>
      </div>
    )
    if (phase === 'qr') return (
      <div style={{ flex:1, display:'flex', flexDirection:'column', gap:4, padding: '30px 10px 10px', overflowY:'auto' }}>
        {CALL_STEPS.slice(0,3).map(step => {
          const done = completedSteps.includes(step.id)
          const active = activeStep === step.id
          return (
            <div key={step.id} style={{
              display:'flex', alignItems:'center', gap:8, padding:'6px 10px', borderRadius:10,
              background: done ? '#e0e7ff' : active ? '#fff' : 'rgba(255,255,255,0.5)',
              border: `1px solid ${done ? '#818cf8' : active ? step.color : 'transparent'}`,
              transition: 'all 0.3s',
            }}>
              <span style={{fontSize:16}}>{done ? '✅' : active ? step.icon : '⬜'}</span>
              <div style={{fontSize:10, fontWeight:700, color: done ? '#3730a3' : active ? step.color : '#94a3b8'}}>{step.label}</div>
              {active && <div style={{marginLeft:'auto', display:'flex', gap:2}}>
                {[0,1,2].map(d => <div key={d} style={{width:4,height:4,borderRadius:'50%',background:step.color,animation:`bounce 0.8s ease ${d*0.15}s infinite`}}/>)}
              </div>}
            </div>
          )
        })}
      </div>
    )
    if (phase === 'calling') return (
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'linear-gradient(160deg,#1e1b4b,#312e81)', padding:20 }}>
        <div style={{ width:70, height:70, borderRadius:'50%', background:'rgba(99,102,241,0.3)', border:'3px solid #818cf8', display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, marginBottom:14, animation:'pulse 1.2s ease infinite' }}>📱</div>
        <div style={{fontSize:13, fontWeight:800, color:'#fff', marginBottom:4}}>Calling Owner…</div>
        <div style={{fontSize:10, color:'#a5b4fc'}}>+91-98XXX-XXXXX</div>
        <div style={{display:'flex', gap:14, marginTop:28}}>
          <div style={{width:44,height:44,borderRadius:'50%',background:'#ef4444',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>📵</div>
          <div style={{width:44,height:44,borderRadius:'50%',background:'#22c55e',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,animation:'pulse 1s ease infinite'}}>📞</div>
        </div>
      </div>
    )
    if (phase === 'connected') return (
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'linear-gradient(160deg,#14532d,#15803d)', padding:20 }}>
        <div style={{ width:70, height:70, borderRadius:'50%', background:'rgba(22,163,74,0.3)', border:'3px solid #4ade80', display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, marginBottom:12 }}>🤝</div>
        <div style={{fontSize:12, fontWeight:800, color:'#fff', marginBottom:2}}>Connected!</div>
        <div style={{fontSize:10, color:'#86efac', marginBottom:8}}>Owner & Finder on Call</div>
        <div style={{fontSize:20, fontWeight:900, color:'#fff', fontFamily:'monospace', letterSpacing:2}}>{fmtTime(callTime)}</div>
        <div style={{display:'flex', gap:14, marginTop:20}}>
          <div style={{width:36,height:36,borderRadius:'50%',background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}>🔇</div>
          <div style={{width:36,height:36,borderRadius:'50%',background:'#ef4444',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}>📵</div>
          <div style={{width:36,height:36,borderRadius:'50%',background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}>🔊</div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PhoneFrame screenBg="#f0f4ff">{screenContent()}</PhoneFrame>
      <SimCTA running={running} hasData={completedSteps.length > 0} onRun={run} onReset={reset} accent="#4338ca" label="Simulate Call" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   3. EMERGENCY CONTACTS SIMULATOR
───────────────────────────────────────────── */
const CONTACTS_LIST = [
  { name: 'Priya (Wife)',    num: '+91-98400-XXXXX', relation: 'Primary',    emoji: '👩', status: 'idle' },
  { name: 'Rajan (Brother)', num: '+91-99400-XXXXX', relation: 'Fallback 1', emoji: '👨', status: 'idle' },
  { name: 'Dr. Kumar (Vet)', num: '+91-94400-XXXXX', relation: 'Fallback 2', emoji: '🩺', status: 'idle' },
  { name: 'Meena (Neighbor)',num: '+91-90400-XXXXX', relation: 'Fallback 3', emoji: '🏠', status: 'idle' },
  { name: 'Raj (Friend)',    num: '+91-88400-XXXXX', relation: 'Fallback 4', emoji: '🤝', status: 'idle' },
]

function ContactsSimulatorWrapper() {
  const [running, setRunning] = useState(false)
  const [contacts, setContacts] = useState(CONTACTS_LIST.map(c => ({...c})))
  const [log, setLog] = useState([])
  const timersRef = useRef([])

  const reset = () => {
    timersRef.current.forEach(clearTimeout); timersRef.current = []
    setRunning(false); setContacts(CONTACTS_LIST.map(c=>({...c}))); setLog([])
  }

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
        setContacts(prev => {
          const next = [...prev]; next[ev.i] = {...next[ev.i], status: ev.status}; return next
        })
        setLog(p => [...p, ev.msg])
        if (ev.status === 'answered') setRunning(false)
      }, ev.t)
      timersRef.current.push(t)
    })
  }

  const statusColor = s => ({ idle: '#e2e8f0', sending: '#fde68a', missed: '#fecdd3', answered: '#bbf7d0' }[s])
  const statusText  = s => ({ idle: '—', sending: '📤 Alerting', missed: '❌ Missed', answered: '✅ Responded' }[s])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PhoneFrame screenBg="#f5f3ff">
        <div style={{ background: '#7c3aed', padding: '28px 12px 10px', flexShrink: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>Emergency Contact Chain</div>
          <div style={{ fontSize: 9, color: '#ddd6fe' }}>Auto-escalates until answered</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
          {contacts.map((c, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '7px 8px', borderRadius: 10, marginBottom: 4,
              background: c.status === 'answered' ? '#dcfce7' : c.status === 'missed' ? '#ffe4e6' : c.status === 'sending' ? '#fef9c3' : '#fff',
              border: `1.5px solid ${statusColor(c.status)}`,
              transition: 'all 0.4s',
            }}>
              <div style={{ fontSize: 20, flexShrink: 0 }}>{c.emoji}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: '#1e1b4b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                <div style={{ fontSize: 8.5, color: '#64748b' }}>{c.relation}</div>
              </div>
              <div style={{ fontSize: 8, fontWeight: 700, color: c.status === 'answered' ? '#15803d' : c.status === 'missed' ? '#b91c1c' : c.status === 'sending' ? '#92400e' : '#94a3b8', flexShrink: 0, textAlign: 'right' }}>
                {statusText(c.status)}
                {c.status === 'sending' && <div style={{ display: 'flex', gap: 2, marginTop: 2, justifyContent: 'flex-end' }}>
                  {[0,1,2].map(d => <div key={d} style={{width:3,height:3,borderRadius:'50%',background:'#d97706',animation:`bounce 0.8s ease ${d*0.15}s infinite`}}/>)}
                </div>}
              </div>
            </div>
          ))}
          {log.length > 0 && (
            <div style={{ marginTop: 6, background: '#fff', borderRadius: 8, padding: '6px 8px', border: '1px solid #e9d5ff' }}>
              {log.map((l, i) => <div key={i} style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.7, animation: 'fadeUp 0.3s ease' }}>{l}</div>)}
            </div>
          )}
        </div>
      </PhoneFrame>
      <SimCTA running={running} hasData={log.length > 0} onRun={run} onReset={reset} accent="#7c3aed" label="Simulate Chain" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   4. GPS SIMULATOR
───────────────────────────────────────────── */
function GPSSimulatorWrapper() {
  const [phase, setPhase] = useState('idle')
  const [accuracy, setAccuracy] = useState(0)
  const [coords, setCoords] = useState(null)
  const [running, setRunning] = useState(false)
  const [dots, setDots] = useState(0)
  const timersRef = useRef([])
  const dotRef = useRef(null)

  const reset = () => {
    timersRef.current.forEach(clearTimeout); clearInterval(dotRef.current)
    setPhase('idle'); setAccuracy(0); setCoords(null); setRunning(false); setDots(0)
  }

  const run = () => {
    reset(); setRunning(true); setPhase('scanning')
    dotRef.current = setInterval(() => setDots(d => (d+1)%4), 500)
    timersRef.current.push(setTimeout(() => {
      setPhase('locating')
      let acc = 0
      const accInterval = setInterval(() => {
        acc += 8; if (acc >= 100) { acc = 100; clearInterval(accInterval) }
        setAccuracy(acc)
      }, 60)
      timersRef.current.push(setTimeout(() => {
        clearInterval(accInterval); clearInterval(dotRef.current)
        setCoords({ lat: '13.0827° N', lng: '80.2707° E', area: 'Egmore, Chennai, TN', time: 'Just now', device: 'Android · Chrome 124' })
        setPhase('done'); setRunning(false)
      }, 2000))
    }, 1500))
  }

  const dotStr = '.'.repeat(dots)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PhoneFrame screenBg="#f0fdfb">
        <div style={{ background: '#0d9488', padding: '28px 12px 10px', flexShrink: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>GPS Location Capture</div>
          <div style={{ fontSize: 9, color: '#99f6e4' }}>Precision coordinates on every scan</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          {phase === 'idle' && (
            <>
              <div style={{ fontSize: 44, marginBottom: 10 }}>🗺️</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#134e4a', textAlign: 'center' }}>Tap button below to simulate</div>
              <div style={{ fontSize: 10, color: '#64748b', textAlign: 'center', marginTop: 4 }}>GPS coordinates will be captured</div>
            </>
          )}
          {phase === 'scanning' && (
            <>
              <div style={{ fontSize: 40, animation: 'pulse 0.8s ease infinite' }}>📷</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#0d9488', marginTop: 10 }}>Scanning QR{dotStr}</div>
            </>
          )}
          {phase === 'locating' && (
            <div style={{ width: '100%', textAlign: 'center' }}>
              <div style={{ fontSize: 36, animation: 'pulse 0.6s ease infinite' }}>📍</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#0d9488', margin: '10px 0 8px' }}>Acquiring GPS{dotStr}</div>
              <div style={{ width: '100%', height: 8, background: '#ccfbf1', borderRadius: 99, overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'linear-gradient(90deg,#0d9488,#14b8a6)', width: `${accuracy}%`, transition: 'width 0.06s linear', borderRadius: 99 }} />
              </div>
              <div style={{ fontSize: 9, color: '#64748b', marginTop: 4 }}>{accuracy}% accuracy</div>
            </div>
          )}
          {phase === 'done' && coords && (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ background: '#fff', borderRadius: 12, padding: '10px 12px', border: '1.5px solid #99f6e4' }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#64748b', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '.05em' }}>📍 Location Captured</div>
                <div style={{ fontSize: 11, fontWeight: 800, color: '#134e4a' }}>{coords.area}</div>
                <div style={{ fontSize: 9, color: '#0d9488', fontFamily: 'monospace', marginTop: 2 }}>{coords.lat} · {coords.lng}</div>
              </div>
              <div style={{ background: '#fff', borderRadius: 12, padding: '10px 12px', border: '1.5px solid #99f6e4' }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#64748b', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '.05em' }}>📊 Scan Details</div>
                {[['⏰ Time', coords.time], ['📱 Device', coords.device]].map(([k,v]) => (
                  <div key={k} style={{ display:'flex', justifyContent:'space-between', fontSize:9, lineHeight:1.8 }}>
                    <span style={{color:'#94a3b8'}}>{k}</span>
                    <span style={{fontWeight:700, color:'#134e4a'}}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#0d9488', borderRadius: 10, padding: '8px 12px', textAlign: 'center', fontSize: 9.5, fontWeight: 800, color: '#fff' }}>
                🗺️ Open in Google Maps →
              </div>
            </div>
          )}
        </div>
      </PhoneFrame>
      <SimCTA running={running} hasData={phase !== 'idle'} onRun={run} onReset={reset} accent="#0d9488" label="Simulate GPS Scan" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   5. INSTANT ACTIVATION SIMULATOR
───────────────────────────────────────────── */
const SETUP_STEPS = [
  { label: 'Peel & Stick Tag',      sub: 'Attach to your item',       icon: '🏷️', duration: 900  },
  { label: 'Open Setup Link',       sub: 'scanforsafe.com/activate',  icon: '🌐', duration: 700  },
  { label: 'Enter Your Number',     sub: '+91 • Verified instantly',  icon: '📱', duration: 1000 },
  { label: 'Add Emergency Contacts',sub: 'Up to 5 contacts',          icon: '👨‍👩‍👧', duration: 800  },
  { label: 'Tag Goes Live! ✅',     sub: 'Your item is now protected',icon: '🎉', duration: 600  },
]

function SetupSimulatorWrapper() {
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState([])
  const [active, setActive] = useState(-1)
  const [elapsed, setElapsed] = useState(0)
  const timersRef = useRef([])
  const elapsedRef = useRef(null)
  const total = SETUP_STEPS.reduce((a, s) => a + s.duration + 400, 0)

  const reset = () => {
    timersRef.current.forEach(clearTimeout); clearInterval(elapsedRef.current)
    setRunning(false); setDone([]); setActive(-1); setElapsed(0)
  }

  const run = () => {
    reset(); setRunning(true)
    let t = 0
    SETUP_STEPS.forEach((step, i) => {
      const tStart = setTimeout(() => setActive(i), t)
      t += step.duration
      const tEnd = setTimeout(() => {
        setDone(p => [...p, i])
        if (i === SETUP_STEPS.length - 1) { setActive(-1); setRunning(false); clearInterval(elapsedRef.current) }
      }, t)
      t += 400
      timersRef.current.push(tStart, tEnd)
    })
    elapsedRef.current = setInterval(() => setElapsed(p => p + 100), 100)
  }

  const pct = Math.min(100, Math.round((elapsed / total) * 100))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PhoneFrame screenBg="#fffbeb">
        <div style={{ background: '#d97706', padding: '28px 12px 10px', flexShrink: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>Activation Wizard</div>
          <div style={{ fontSize: 9, color: '#fde68a' }}>Under 3 minutes • Zero tech needed</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 10px 0' }}>
          {(running || done.length > 0) && (
            <div style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: '#64748b', marginBottom: 3 }}>
                <span>Progress</span><span>{pct}%</span>
              </div>
              <div style={{ height: 6, background: '#fde68a', borderRadius: 99, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg,#d97706,#f59e0b)', borderRadius: 99, transition: 'width 0.1s linear' }} />
              </div>
            </div>
          )}
          {SETUP_STEPS.map((step, i) => {
            const isDone = done.includes(i)
            const isActive = active === i
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 10px', borderRadius: 10, marginBottom: 5,
                background: isDone ? '#fff7ed' : isActive ? '#fff' : 'rgba(255,255,255,0.4)',
                border: `1.5px solid ${isDone ? '#fbbf24' : isActive ? '#d97706' : '#e5e7eb'}`,
                transition: 'all 0.3s',
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: isDone ? '#d97706' : isActive ? '#fef3c7' : '#f1f5f9',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
                }}>
                  {isDone ? '✓' : step.icon}
                </div>
                <div>
                  <div style={{ fontSize: 10.5, fontWeight: 800, color: isDone ? '#92400e' : isActive ? '#d97706' : '#94a3b8' }}>{step.label}</div>
                  {(isDone || isActive) && <div style={{ fontSize: 9, color: '#64748b', marginTop: 1 }}>{step.sub}</div>}
                  {isActive && <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
                    {[0,1,2].map(d => <div key={d} style={{width:4,height:4,borderRadius:'50%',background:'#d97706',animation:`bounce 0.8s ease ${d*0.15}s infinite`}}/>)}
                  </div>}
                </div>
              </div>
            )
          })}
          {done.length === SETUP_STEPS.length && (
            <div style={{ textAlign: 'center', padding: '10px 0', animation: 'fadeUp 0.4s ease' }}>
              <div style={{ fontSize: 28 }}>🎉</div>
              <div style={{ fontSize: 11, fontWeight: 800, color: '#92400e' }}>Protected in {(elapsed/1000).toFixed(1)}s!</div>
            </div>
          )}
        </div>
      </PhoneFrame>
      <SimCTA running={running} hasData={done.length > 0} onRun={run} onReset={reset} accent="#d97706" label="Start Setup Demo" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   6. PRIVACY SIMULATOR
───────────────────────────────────────────── */
function PrivacySimulatorWrapper() {
  const [phase, setPhase] = useState('idle')
  const [running, setRunning] = useState(false)
  const [visibleItems, setVisibleItems] = useState([])
  const timersRef = useRef([])

  const reset = () => {
    timersRef.current.forEach(clearTimeout)
    setPhase('idle'); setRunning(false); setVisibleItems([])
  }

  const run = () => {
    reset(); setRunning(true); setPhase('scanning')
    timersRef.current.push(setTimeout(() => setPhase('proxy'), 1200))
    timersRef.current.push(setTimeout(() => {
      setPhase('reveal')
      const items = ['name', 'location', 'callBtn']
      items.forEach((item, i) => {
        const t = setTimeout(() => setVisibleItems(p => [...p, item]), i * 500)
        timersRef.current.push(t)
      })
      setTimeout(() => setRunning(false), items.length * 500 + 400)
    }, 2800))
  }

  const HIDDEN = ['📱 +91-98400-XXXXX', '🏠 12, MG Road, Chennai', '📧 owner@email.com', '💳 Bank Details', '🆔 Aadhaar Number']

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PhoneFrame screenBg="#fff1f2">
        <div style={{ background: '#e11d48', padding: '28px 12px 10px', flexShrink: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>Privacy Shield</div>
          <div style={{ fontSize: 9, color: '#fecdd3' }}>Your data never touches the QR code</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: 12 }}>
          {phase === 'idle' && (
            <div style={{ textAlign: 'center', paddingTop: 30 }}>
              <div style={{ fontSize: 40, marginBottom: 10 }}>🔒</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#881337' }}>Tap button below to see what the finder sees</div>
              <div style={{ fontSize: 9, color: '#64748b', marginTop: 4 }}>vs. what your QR actually contains</div>
            </div>
          )}
          {phase === 'scanning' && (
            <div style={{ textAlign: 'center', paddingTop: 40 }}>
              <div style={{ fontSize: 36, animation: 'pulse 0.6s ease infinite' }}>📷</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#e11d48', marginTop: 10 }}>Finder scans QR…</div>
            </div>
          )}
          {phase === 'proxy' && (
            <div style={{ textAlign: 'center', paddingTop: 20 }}>
              <div style={{ fontSize: 28 }}>🔐</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#e11d48', margin: '8px 0 12px' }}>Secure proxy intercepts</div>
              <div style={{ fontSize: 9, color: '#64748b', marginBottom: 10, lineHeight: 1.6 }}>Your real info is BLOCKED</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {HIDDEN.map((h, i) => (
                  <div key={i} style={{ background: '#ffe4e6', border: '1px solid #fecdd3', borderRadius: 8, padding: '5px 10px', fontSize: 9, fontWeight: 700, color: '#b91c1c', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span>🚫</span><span style={{ filter: 'blur(3px)' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {phase === 'reveal' && (
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, color: '#15803d', background: '#dcfce7', borderRadius: 8, padding: '6px 10px', marginBottom: 8, textAlign: 'center' }}>
                ✅ What the finder actually sees:
              </div>
              {visibleItems.includes('name') && (
                <div style={{ background: '#fff', border: '1.5px solid #fecdd3', borderRadius: 10, padding: '8px 12px', marginBottom: 6, animation: 'fadeUp 0.3s ease' }}>
                  <div style={{ fontSize: 9, color: '#94a3b8', marginBottom: 2 }}>Item Owner</div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: '#881337' }}>Verified ScanForSafe User</div>
                  <div style={{ fontSize: 9, color: '#64748b' }}>No name. No address. Just trust.</div>
                </div>
              )}
              {visibleItems.includes('location') && (
                <div style={{ background: '#fff', border: '1.5px solid #fecdd3', borderRadius: 10, padding: '8px 12px', marginBottom: 6, animation: 'fadeUp 0.3s ease' }}>
                  <div style={{ fontSize: 9, color: '#94a3b8', marginBottom: 2 }}>Item Name</div>
                  <div style={{ fontSize: 11, fontWeight: 800, color: '#881337' }}>"Black Laptop Bag"</div>
                </div>
              )}
              {visibleItems.includes('callBtn') && (
                <div style={{ background: '#e11d48', borderRadius: 10, padding: '8px 12px', textAlign: 'center', animation: 'fadeUp 0.3s ease' }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: '#fff' }}>📞 Call Owner (Proxied)</div>
                  <div style={{ fontSize: 8, color: '#fecdd3', marginTop: 2 }}>Real number never revealed</div>
                </div>
              )}
            </div>
          )}
        </div>
      </PhoneFrame>
      <SimCTA running={running} hasData={phase !== 'idle'} onRun={run} onReset={reset} accent="#e11d48" label="Simulate Privacy" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   7. SCAN HISTORY SIMULATOR
───────────────────────────────────────────── */
const HISTORY_EVENTS = [
  { time: 'Today, 2:41 PM',     loc: 'Egmore, Chennai',     device: 'Android · Chrome',  type: 'new',  icon: '🆕' },
  { time: 'Yesterday, 8:12 AM', loc: 'Chennai Airport, T2', device: 'iPhone · Safari',   type: 'safe', icon: '✈️' },
  { time: 'Dec 18, 3:55 PM',    loc: 'Anna Nagar, Chennai', device: 'Android · Firefox', type: 'safe', icon: '📍' },
  { time: 'Dec 15, 11:20 AM',   loc: 'T. Nagar, Chennai',   device: 'Android · Chrome',  type: 'safe', icon: '🏬' },
]

function HistorySimulatorWrapper() {
  const [running, setRunning] = useState(false)
  const [visible, setVisible] = useState([])
  const [active, setActive] = useState(null)
  const timersRef = useRef([])

  const reset = () => {
    timersRef.current.forEach(clearTimeout)
    setRunning(false); setVisible([]); setActive(null)
  }

  const run = () => {
    reset(); setRunning(true)
    HISTORY_EVENTS.forEach((_, i) => {
      const t = setTimeout(() => {
        setActive(i)
        setTimeout(() => {
          setVisible(p => [...p, i])
          setActive(null)
          if (i === HISTORY_EVENTS.length - 1) setRunning(false)
        }, 500)
      }, i * 800)
      timersRef.current.push(t)
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PhoneFrame screenBg="#eff6ff">
        <div style={{ background: '#2563eb', padding: '28px 12px 10px', flexShrink: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>Scan Timeline</div>
          <div style={{ fontSize: 9, color: '#bfdbfe' }}>Every scan logged • Exportable anytime</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 10px' }}>
          {visible.length === 0 && !running && (
            <div style={{ textAlign: 'center', paddingTop: 50 }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>🔔</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#1e3a8a' }}>Tap button below to load history</div>
            </div>
          )}
          {HISTORY_EVENTS.map((ev, i) => {
            const isVis = visible.includes(i)
            const isAct = active === i
            if (!isVis && !isAct) return null
            return (
              <div key={i} style={{
                background: ev.type === 'new' ? '#dbeafe' : '#fff',
                border: `1.5px solid ${ev.type === 'new' ? '#60a5fa' : '#e2e8f0'}`,
                borderRadius: 12, padding: '8px 10px', marginBottom: 6,
                animation: 'fadeUp 0.4s ease',
                opacity: isAct ? 0.5 : 1, transition: 'opacity 0.3s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 16 }}>{ev.icon}</span>
                    <div style={{ fontSize: 10, fontWeight: 800, color: ev.type === 'new' ? '#1d4ed8' : '#0f172a' }}>{ev.loc}</div>
                  </div>
                  {ev.type === 'new' && <span style={{ fontSize: 8, fontWeight: 700, background: '#2563eb', color: '#fff', padding: '2px 6px', borderRadius: 99 }}>NEW</span>}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8.5, color: '#64748b' }}>
                  <span>⏰ {ev.time}</span>
                  <span>📱 {ev.device}</span>
                </div>
              </div>
            )
          })}
          {visible.length === HISTORY_EVENTS.length && (
            <div style={{ background: '#2563eb', borderRadius: 10, padding: '7px 12px', textAlign: 'center', animation: 'fadeUp 0.3s ease', marginTop: 4 }}>
              <div style={{ fontSize: 9, fontWeight: 800, color: '#fff' }}>📥 Export as CSV / PDF</div>
            </div>
          )}
        </div>
      </PhoneFrame>
      <SimCTA running={running} hasData={visible.length > 0} onRun={run} onReset={reset} accent="#2563eb" label="Load History" />
    </div>
  )
}

/* ─────────────────────────────────────────────
   8. UPDATE INFO SIMULATOR
───────────────────────────────────────────── */
function UpdateSimulatorWrapper() {
  const [phase, setPhase] = useState('idle')
  const [running, setRunning] = useState(false)
  const [typedNum, setTypedNum] = useState('')
  const timersRef = useRef([])
  const typeRef = useRef(null)
  const NEW_NUM = '+91-77000-12345'

  const reset = () => {
    timersRef.current.forEach(clearTimeout); clearInterval(typeRef.current)
    setPhase('idle'); setRunning(false); setTypedNum('')
  }

  const run = () => {
    reset(); setRunning(true); setPhase('form')
    let i = 0
    typeRef.current = setInterval(() => {
      if (i >= NEW_NUM.length) {
        clearInterval(typeRef.current)
        timersRef.current.push(setTimeout(() => {
          setPhase('saving')
          timersRef.current.push(setTimeout(() => {
            setPhase('done'); setRunning(false)
          }, 1600))
        }, 600))
        return
      }
      setTypedNum(NEW_NUM.slice(0, i+1)); i++
    }, 80)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PhoneFrame screenBg="#fff7ed">
        <div style={{ background: '#ea580c', padding: '28px 12px 10px', flexShrink: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#fff' }}>Update Dashboard</div>
          <div style={{ fontSize: 9, color: '#fed7aa' }}>Change anytime • No new tag needed</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 14 }}>
          {phase === 'idle' && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 10 }}>🔄</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#7c2d12' }}>Changed your number?</div>
              <div style={{ fontSize: 9, color: '#64748b', marginTop: 4 }}>Update in 30 seconds — tag stays same</div>
            </div>
          )}
          {(phase === 'form' || phase === 'saving') && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ background: '#fff', borderRadius: 10, padding: '10px 12px', border: '1.5px solid #fed7aa' }}>
                <div style={{ fontSize: 8.5, color: '#94a3b8', marginBottom: 3 }}>CURRENT NUMBER</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#7c2d12', textDecoration: 'line-through', opacity: 0.6 }}>+91-98400-XXXXX</div>
              </div>
              <div style={{ textAlign: 'center', fontSize: 16 }}>↓</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '10px 12px', border: `1.5px solid ${phase === 'saving' ? '#fb923c' : '#e2e8f0'}`, transition: 'all 0.3s' }}>
                <div style={{ fontSize: 8.5, color: '#94a3b8', marginBottom: 3 }}>NEW NUMBER</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#ea580c', fontFamily: 'monospace' }}>
                  {typedNum}<span style={{ animation: 'blink 0.8s step-end infinite', opacity: phase === 'form' ? 1 : 0 }}>|</span>
                </div>
              </div>
              {phase === 'saving' && (
                <div style={{ background: '#ea580c', borderRadius: 10, padding: '8px 0', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <div style={{ display: 'flex', gap: 3 }}>
                      {[0,1,2].map(d => <div key={d} style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', animation: `bounce 0.8s ease ${d*0.15}s infinite` }} />)}
                    </div>
                    <span style={{ fontSize: 10, fontWeight: 800, color: '#fff' }}>Saving…</span>
                  </div>
                </div>
              )}
            </div>
          )}
          {phase === 'done' && (
            <div style={{ textAlign: 'center', animation: 'fadeUp 0.4s ease' }}>
              <div style={{ fontSize: 44, marginBottom: 8 }}>✅</div>
              <div style={{ fontSize: 13, fontWeight: 900, color: '#7c2d12', marginBottom: 4 }}>Updated!</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '8px 12px', border: '1.5px solid #fb923c', marginBottom: 8 }}>
                <div style={{ fontSize: 9, color: '#94a3b8', marginBottom: 2 }}>Now active</div>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#ea580c', fontFamily: 'monospace' }}>{NEW_NUM}</div>
              </div>
              <div style={{ fontSize: 9, color: '#64748b', lineHeight: 1.6 }}>Physical tag unchanged.<br/>All future scans use new number.</div>
            </div>
          )}
        </div>
      </PhoneFrame>
      <SimCTA running={running} hasData={phase !== 'idle'} onRun={run} onReset={reset} accent="#ea580c" label="Demo Update" />
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

/* ─────────────────────────────────────────────
   USE CASE CARD
───────────────────────────────────────────── */
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
        boxShadow: active ? `0 14px 32px ${uc.accent}35` : `0 3px 12px ${uc.accent}18`,
      }}
    >
      <div style={{ fontSize: 34, marginBottom: 8, transform: active ? 'scale(1.18)' : 'scale(1)', transition: 'transform 0.25s' }}>{uc.emoji}</div>
      <div style={{ fontSize: 13.5, fontWeight: 800, color: active ? '#fff' : uc.textColor, marginBottom: 4 }}>{uc.label}</div>
      <div style={{ fontSize: 10.5, color: active ? 'rgba(255,255,255,0.78)' : '#64748b', marginBottom: 10, lineHeight: 1.4 }}>{uc.sub}</div>
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

/* ─────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────── */
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
        <span style={{ background: highlightGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          {highlight}
        </span>
      </h2>
      <p style={{ fontSize: 15, color: '#4b7a62', maxWidth: 500, margin: '0 auto', lineHeight: 1.8 }}>{desc}</p>
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
    <section style={{ background: '#f8fafc', padding: '90px 24px 96px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&display=swap');
        * { box-sizing: border-box; }
        .feat-layout { display: grid; grid-template-columns: 1fr 300px; gap: 36px; align-items: start; }
        .feat-grid   { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
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
          50%      { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.08); opacity: 0.75; }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @keyframes ctaPulse {
          0%   { transform: scale(1);    opacity: 0.5; }
          100% { transform: scale(1.35); opacity: 0; }
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
          desc="Every feature has a live simulation — click any card, then hit the button to see it in action."
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

          {/* sticky simulator — phone + big CTA below */}
          <div className="phone-sticky">
            <FeatureSimulator featureId={activeFeature} />
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