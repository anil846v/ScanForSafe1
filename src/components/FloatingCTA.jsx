import { useState, useRef, useEffect } from 'react'

/* ══ SVG ICONS ══ */
function WhatsAppSVG() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="none"/>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16 5C10.477 5 6 9.477 6 15c0 1.89.527 3.656 1.44 5.166L6 27l7.013-1.41A9.948 9.948 0 0016 26c5.523 0 10-4.477 10-10S21.523 5 16 5zm-4.5 6.5c.18-.01.36.08.47.23l1.22 1.8a.66.66 0 01-.04.78l-.61.76a4.72 4.72 0 001.88 2.16l.77-.76a.66.66 0 01.8-.07l1.85 1.12c.17.1.27.3.25.5l-.21 1.57a.65.65 0 01-.64.54C13.63 19.73 10.5 16.44 10.5 12.62c0-.34.26-.62.6-.64l1.4-.08z"
        fill="white"
      />
    </svg>
  )
}

function BotSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="20" height="14" rx="3" stroke="white" strokeWidth="1.8"/>
      <circle cx="8.5" cy="14" r="1.5" fill="white"/>
      <circle cx="15.5" cy="14" r="1.5" fill="white"/>
      <path d="M8 18h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 7V4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="3" r="1.2" fill="white"/>
    </svg>
  )
}

function SendSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SparklesSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{position:'absolute',top:10,right:10}}>
      <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-5.26L3.82 10l6.09-1.74L12 2z" fill="rgba(255,255,255,0.8)"/>
      <path d="M19 14l.72 2.18L22 17l-2.28.82L19 20l-.72-2.18L16 17l2.28-.82L19 14z" fill="rgba(255,255,255,0.6)"/>
    </svg>
  )
}

function XSvg({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  )
}

function LoaderSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{animation:'spin 1s linear infinite'}}>
      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5"/>
      <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

/* ══ QUICK OPTIONS ══ */
const QUICK_OPTIONS = [
  { icon: '📦', label: 'How it Works', reply: 'ScanForSafe works using smart QR + NFC tags. If someone finds your lost item, they simply scan the tag and you instantly receive alerts and location updates.' },
  { icon: '🔐', label: 'Privacy & Security', reply: 'Your personal details stay protected. Only emergency or recovery information is shared securely after scanning.' },
  { icon: '📍', label: 'Track Lost Items', reply: 'Once a QR tag is scanned, you receive live notifications and the finder can contact you instantly through the secure system.' },
  { icon: '💧', label: 'Waterproof Tags', reply: 'Yes! All ScanForSafe smart tags are waterproof, durable, and built for daily use.' },
  { icon: '📵', label: 'No App Needed', reply: 'No app installation is required. Users can scan directly using their phone camera.' },
  { icon: '🚀', label: 'Get Started', reply: 'You can start by registering your smart QR tag and linking your emergency contact information securely.' },
]

/* ══ AI CHAT WINDOW ══ */
function AIChatWindow({ onClose }) {
  const [messages, setMessages] = useState([{ role: 'assistant', content: '👋 Welcome to ScanForSafe AI Assistant.\n\nChoose any option below or ask your own question.' }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, loading])

  async function sendMessage(customText = null) {
    const text = customText || input.trim()
    if (!text || loading) return
    if (!customText) setInput('')
    setMessages(prev => [...prev, { role: 'user', content: text }])
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 900))
      const option = QUICK_OPTIONS.find(o => o.label.toLowerCase() === text.toLowerCase())
      const reply = option ? option.reply : 'Thanks for your message 🚀 Our ScanForSafe support team will help you regarding QR tags, recovery, NFC setup, and emergency access.'
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch { setMessages(prev => [...prev, { role: 'assistant', content: 'Something went wrong. Please try again.' }]) }
    finally { setLoading(false) }
  }

  return (
    <div style={{
      position:'fixed', bottom:'100px', right:'24px', zIndex:100, width:'370px', maxHeight:'620px',
      background:'linear-gradient(145deg,#0d1b2a,#162236)',
      borderRadius:'28px', overflow:'hidden', display:'flex', flexDirection:'column',
      border:'1.5px solid rgba(99,179,255,0.18)',
      boxShadow:'0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04) inset',
      backdropFilter:'blur(20px)',
      animation:'chatPopup .4s cubic-bezier(.34,1.56,.64,1)',
    }}>
      {/* HEADER */}
      <div style={{
        position:'relative', overflow:'hidden',
        background:'linear-gradient(135deg,#0a1628 0%,#163460 50%,#1a4b8f 100%)',
        padding:'18px', display:'flex', alignItems:'center', gap:'14px',
        borderBottom:'1px solid rgba(99,179,255,0.15)',
      }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,transparent,rgba(99,179,255,0.08),transparent)', animation:'shineMove 4s linear infinite' }} />
        <div style={{ width:52, height:52, borderRadius:'18px', background:'linear-gradient(135deg,#1d4ed8,#2563eb)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 8px 24px rgba(37,99,235,0.5)', position:'relative', zIndex:2, flexShrink:0 }}>
          <BotSVG />
        </div>
        <div style={{ flex:1, position:'relative', zIndex:2 }}>
          <div style={{ fontSize:'16px', fontWeight:800, color:'#fff', fontFamily:"'Syne',sans-serif", letterSpacing:'-0.02em' }}>ScanForSafe AI</div>
          <div style={{ display:'flex', alignItems:'center', gap:'6px', marginTop:'4px', color:'rgba(147,197,253,0.85)', fontSize:'12px', fontFamily:"'DM Sans',sans-serif" }}>
            <span style={{ width:8, height:8, borderRadius:'50%', background:'#4ade80', animation:'pulseDot 1.8s infinite', display:'inline-block' }} />
            Online · Powered by AI
          </div>
        </div>
        <button onClick={onClose} style={{ width:34, height:34, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.12)', background:'rgba(255,255,255,0.07)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', position:'relative', zIndex:2, transition:'all 0.2s' }}>
          <XSvg size={18} />
        </button>
      </div>

      {/* QUICK OPTIONS */}
      <div style={{ padding:'12px 14px', display:'flex', flexWrap:'wrap', gap:'8px', background:'rgba(255,255,255,0.03)', borderBottom:'1px solid rgba(99,179,255,0.1)' }}>
        {QUICK_OPTIONS.map((item, idx) => (
          <button key={idx} onClick={() => sendMessage(item.label)} style={{
            border:'1px solid rgba(99,179,255,0.2)', cursor:'pointer', padding:'8px 13px', borderRadius:'999px',
            background:'rgba(255,255,255,0.05)', display:'flex', alignItems:'center', gap:'6px',
            fontSize:'11.5px', fontWeight:600, color:'#93c5fd', fontFamily:"'DM Sans',sans-serif",
            transition:'all 0.2s', letterSpacing:'0.01em',
          }}>
            <span>{item.icon}</span>{item.label}
          </button>
        ))}
      </div>

      {/* MESSAGES */}
      <div style={{ flex:1, overflowY:'auto', padding:'16px', display:'flex', flexDirection:'column', gap:'12px', background:'transparent' }}>
        {messages.map((m, idx) => (
          <div key={idx} style={{ display:'flex', justifyContent: m.role==='user' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth:'84%', padding:'12px 15px',
              borderRadius: m.role==='user' ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
              background: m.role==='user' ? 'linear-gradient(135deg,#1d4ed8,#2563eb)' : 'rgba(255,255,255,0.07)',
              color: m.role==='user' ? '#fff' : '#e2e8f0',
              fontSize:'13px', lineHeight:1.7, fontFamily:"'DM Sans',sans-serif",
              boxShadow: m.role==='user' ? '0 8px 24px rgba(37,99,235,0.3)' : 'none',
              border: m.role==='assistant' ? '1px solid rgba(99,179,255,0.15)' : 'none',
              whiteSpace:'pre-line',
            }}>{m.content}</div>
          </div>
        ))}
        {loading && (
          <div style={{ display:'flex' }}>
            <div style={{ background:'rgba(255,255,255,0.07)', padding:'12px 14px', borderRadius:'18px', display:'flex', gap:'6px', border:'1px solid rgba(99,179,255,0.15)' }}>
              {[0,1,2].map(d => <span key={d} style={{ width:7, height:7, borderRadius:'50%', background:'#60a5fa', animation:`bounce 1.2s ${d*0.2}s infinite`, display:'inline-block' }} />)}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div style={{ padding:'13px', borderTop:'1px solid rgba(99,179,255,0.1)', background:'rgba(255,255,255,0.02)', display:'flex', gap:'10px' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key==='Enter' && sendMessage()}
          placeholder="Type your message..."
          style={{
            flex:1, borderRadius:'999px', border:'1.5px solid rgba(99,179,255,0.2)',
            padding:'11px 16px', fontSize:'13px', outline:'none',
            background:'rgba(255,255,255,0.06)', color:'#e2e8f0', fontFamily:"'DM Sans',sans-serif",
          }}
        />
        <button onClick={() => sendMessage()} disabled={!input.trim()||loading} style={{
          width:46, height:46, borderRadius:'50%', border:'none', cursor:'pointer',
          background: input.trim()&&!loading ? 'linear-gradient(135deg,#2563eb,#1d4ed8)' : 'rgba(255,255,255,0.1)',
          display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
          boxShadow: input.trim()&&!loading ? '0 8px 24px rgba(37,99,235,0.35)' : 'none', transition:'all 0.2s',
        }}>
          {loading ? <LoaderSVG /> : <SendSVG />}
        </button>
      </div>
    </div>
  )
}

/* ══ FLOATING CTA ══ */
export default function FloatingCTA() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-6px)} }
        @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulseDot { 0%{box-shadow:0 0 0 0 rgba(74,222,128,.7)} 70%{box-shadow:0 0 0 10px rgba(74,222,128,0)} 100%{box-shadow:0 0 0 0 rgba(74,222,128,0)} }
        @keyframes shineMove { 0%{transform:translateX(-120%)} 100%{transform:translateX(120%)} }
        @keyframes chatPopup { from{opacity:0;transform:scale(.88) translateY(20px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes waPulse { 0%,100%{box-shadow:0 14px 32px rgba(37,211,102,.35)} 50%{box-shadow:0 14px 48px rgba(37,211,102,.6)} }
        @keyframes aiBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      `}</style>

      {chatOpen && <AIChatWindow onClose={() => setChatOpen(false)} />}

    {/* WHATSAPP BUTTON */}
<a
  href="https://whatsapp.com/channel/0029VbCNFw0JP2105GmsoT0H"
  target="_blank"
  rel="noreferrer"
  style={{
    position: 'fixed',
    bottom: '100px',
    right: '24px',
    zIndex: 50,
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg,#25D366,#128C48)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'float 3s ease-in-out infinite',
    border: '2px solid rgba(255,255,255,0.25)',
    boxShadow: '0 14px 32px rgba(37,211,102,.4)',
    overflow: 'hidden',
    textDecoration: 'none',
  }}
>
  {/* shine */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background:
        'linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)',
      animation: 'shineMove 4s linear infinite',
    }}
  />

  {/* ORIGINAL WHATSAPP SVG */}
  <svg
    width="34"
    height="34"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'relative', zIndex: 2 }}
  >
    <path
      d="M16 3C8.82 3 3 8.73 3 15.8c0 2.49.73 4.8 1.98 6.76L3 29l6.66-1.91A13.1 13.1 0 0016 28.6c7.18 0 13-5.73 13-12.8C29 8.73 23.18 3 16 3z"
      fill="white"
    />
    <path
      d="M22.1 18.9c-.34-.17-2-1-2.32-1.1-.31-.12-.54-.17-.77.17-.23.33-.88 1.1-1.08 1.33-.2.23-.4.25-.74.08-.34-.17-1.43-.52-2.72-1.66-1-.9-1.68-2-1.88-2.34-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.77-1.84-1.05-2.52-.28-.67-.56-.58-.77-.59h-.65c-.23 0-.6.08-.91.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.67 5.86 5 .82.35 1.47.56 1.97.72.83.26 1.58.22 2.17.13.66-.1 2-.82 2.28-1.62.28-.8.28-1.48.2-1.62-.08-.14-.31-.22-.65-.39z"
      fill="#25D366"
    />
  </svg>
</a>

      {/* AI CHAT BUTTON */}
      <button onClick={() => setChatOpen(o => !o)} style={{
        position:'fixed', bottom:'24px', right:'24px', zIndex:50,
        height:'64px', borderRadius:'999px', border:'none', cursor:'pointer',
        background:'linear-gradient(135deg,#1d4ed8,#2563eb,#4f46e5)',
        display:'flex', alignItems:'center', gap:'12px', padding:'0 22px',
        boxShadow:'0 16px 40px rgba(37,99,235,.45)',
        animation:'aiBounce 3s ease-in-out infinite',
        overflow:'hidden',
      }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)', animation:'shineMove 4s linear infinite' }} />
        <div style={{ width:40, height:40, borderRadius:'50%', background:'rgba(255,255,255,0.15)', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', zIndex:2, flexShrink:0 }}>
          {chatOpen ? <XSvg size={20} /> : <BotSVG />}
        </div>
        <div style={{ textAlign:'left', color:'#fff', position:'relative', zIndex:2 }}>
          <div style={{ fontSize:'14px', fontWeight:800, fontFamily:"'Syne',sans-serif", letterSpacing:'-0.02em' }}>AI Assistant</div>
          <div style={{ fontSize:'11px', opacity:.8, fontFamily:"'DM Sans',sans-serif", display:'flex', alignItems:'center', gap:'4px' }}>
            Ask anything
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
        <SparklesSVG />
      </button>
    </>
  )
}