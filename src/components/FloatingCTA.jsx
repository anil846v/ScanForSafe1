import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  Bot,
  X,
  Send,
  Loader2,
} from 'lucide-react'

/* ── AI Chat Window ── */
function AIChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! 👋 I'm ScanForSafe's AI assistant. Ask me anything — lost items, how QR tags work, rewards, or setup help!",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function sendMessage() {
    const text = input.trim()
    if (!text || loading) return
    setInput('')

    const updated = [...messages, { role: 'user', content: text }]
    setMessages(updated)
    setLoading(true)

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system:
            'You are a friendly and helpful AI assistant for ScanForSafe — a QR tag platform that helps people recover lost items (luggage, pets, vehicles, kids, seniors) using WhatsApp alerts, GPS tracking, and a finder reward system. Answer user questions about the product clearly and concisely. Keep responses short (2-4 sentences max). Use emojis sparingly.',
          messages: updated.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })
      const data = await res.json()
      const reply =
        data?.content?.[0]?.text ?? 'Sorry, I could not get a response.'
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '24px',
        zIndex: 60,
        width: '340px',
        maxHeight: '480px',
        borderRadius: '20px',
        background: '#fff',
        boxShadow:
          '0 24px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(37,99,235,0.12)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1.5px solid #e2e8f0',
        animation: 'popIn .25s cubic-bezier(.34,1.3,.64,1)',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%)',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Bot size={20} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: '#fff',
              fontFamily: "'Outfit',sans-serif",
            }}
          >
            ScanForSafe AI
          </div>
          <div
            style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.75)',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#4ade80',
                display: 'inline-block',
              }}
            />
            Online · Powered by Claude AI
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.15)',
            border: 'none',
            borderRadius: '50%',
            width: 30,
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background .2s',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')
          }
        >
          <X size={15} color="#fff" />
        </button>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          background: '#f8fafc',
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                maxWidth: '80%',
                padding: '10px 13px',
                borderRadius:
                  m.role === 'user'
                    ? '16px 16px 4px 16px'
                    : '16px 16px 16px 4px',
                background:
                  m.role === 'user'
                    ? 'linear-gradient(135deg,#2563eb,#1d4ed8)'
                    : '#fff',
                color: m.role === 'user' ? '#fff' : '#1e293b',
                fontSize: 13,
                lineHeight: 1.65,
                fontWeight: 500,
                boxShadow:
                  m.role === 'user'
                    ? '0 4px 12px rgba(37,99,235,0.25)'
                    : '0 2px 8px rgba(0,0,0,0.07)',
                border:
                  m.role === 'assistant' ? '1px solid #e2e8f0' : 'none',
              }}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div
              style={{
                padding: '10px 14px',
                borderRadius: '16px 16px 16px 4px',
                background: '#fff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                display: 'flex',
                gap: 5,
                alignItems: 'center',
              }}
            >
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#93c5fd',
                    display: 'inline-block',
                    animation: `bounce 1.2s ease-in-out ${d * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        style={{
          padding: '12px 14px',
          background: '#fff',
          borderTop: '1.5px solid #e2e8f0',
          display: 'flex',
          gap: 8,
          alignItems: 'center',
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask anything…"
          style={{
            flex: 1,
            border: '1.5px solid #e2e8f0',
            borderRadius: 999,
            padding: '9px 14px',
            fontSize: 13,
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 500,
            color: '#0f172a',
            outline: 'none',
            background: '#f8fafc',
            transition: 'border-color .2s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#60a5fa')}
          onBlur={(e) => (e.target.style.borderColor = '#e2e8f0')}
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim() || loading}
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: 'none',
            background:
              input.trim() && !loading
                ? 'linear-gradient(135deg,#2563eb,#1d4ed8)'
                : '#e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: input.trim() && !loading ? 'pointer' : 'default',
            transition: 'all .2s',
            flexShrink: 0,
            boxShadow:
              input.trim() && !loading
                ? '0 4px 12px rgba(37,99,235,0.3)'
                : 'none',
          }}
        >
          {loading ? (
            <Loader2 size={16} color="#94a3b8" style={{ animation: 'spin 1s linear infinite' }} />
          ) : (
            <Send size={15} color={input.trim() ? '#fff' : '#94a3b8'} />
          )}
        </button>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════
   MAIN FLOATING CTA
══════════════════════════════════════════════ */
export default function FloatingCTA() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap');
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes shine { 0%{left:-120%} 100%{left:120%} }
        @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes popIn { from{opacity:0;transform:scale(0.88) translateY(12px)} to{opacity:1;transform:scale(1) translateY(0)} }
      `}</style>

      {/* AI Chat Window */}
      {chatOpen && <AIChatWindow onClose={() => setChatOpen(false)} />}

      {/* Glow — WhatsApp */}
      <div style={{
        position:'fixed', bottom:'100px', right:'22px',
        width:'70px', height:'70px', borderRadius:'9999px',
        background:'rgba(37,211,102,0.18)', filter:'blur(18px)', zIndex:40,
      }} />

      {/* Glow — AI Bot */}
      <div style={{
        position:'fixed', bottom:'22px', right:'22px',
        width:'70px', height:'70px', borderRadius:'9999px',
        background:'rgba(37,99,235,0.18)', filter:'blur(18px)', zIndex:40,
      }} />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position:'fixed', bottom:'96px', right:'24px', zIndex:50,
          width:'62px', height:'62px', borderRadius:'9999px',
          background:'linear-gradient(135deg,#2ebd3a 0%,#249e30 100%)',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 12px 30px rgba(37,211,102,0.35), inset 0 1px 0 rgba(255,255,255,0.3)',
          textDecoration:'none', transition:'all 0.35s ease', overflow:'hidden',
          backdropFilter:'blur(10px)', animation:'float 3s ease-in-out infinite',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
      >
        <div style={{
          position:'absolute', width:'120%', height:'40%',
          background:'linear-gradient(to right,transparent,rgba(255,255,255,0.4),transparent)',
          transform:'rotate(-25deg)', top:'-20%', left:'-120%',
          animation:'shine 3s infinite',
        }} />
        {/* WhatsApp SVG icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {/* Online dot */}
        <span style={{
          position:'absolute', top:'8px', right:'8px',
          width:'12px', height:'12px', borderRadius:'9999px',
          background:'#fff', border:'2px solid #2ebd3a',
        }} />
      </a>

      {/* AI Chatbot Button */}
      <button
        onClick={() => setChatOpen((o) => !o)}
        aria-label="Open AI Chat"
        style={{
          position:'fixed', bottom:'24px', right:'24px', zIndex:50,
          width:'62px', height:'62px', borderRadius:'9999px',
          background: chatOpen
            ? 'linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 100%)'
            : 'linear-gradient(135deg,#2563eb 0%,#1d4ed8 100%)',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 12px 30px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.3)',
          border:'none', cursor:'pointer', transition:'all 0.35s ease',
          overflow:'hidden', backdropFilter:'blur(10px)',
          animation: chatOpen ? 'none' : 'float 3s ease-in-out infinite',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
      >
        <div style={{
          position:'absolute', width:'120%', height:'40%',
          background:'linear-gradient(to right,transparent,rgba(255,255,255,0.4),transparent)',
          transform:'rotate(-25deg)', top:'-20%', left:'-120%',
          animation:'shine 3s infinite',
        }} />
        {chatOpen ? (
          <X size={26} color="white" strokeWidth={2.5} />
        ) : (
          <Bot size={28} color="white" strokeWidth={2} />
        )}
        {/* Sparkle badge */}
        {!chatOpen && (
          <div style={{
            position:'absolute', top:'7px', right:'7px',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <Sparkles size={14} color="#fff" />
          </div>
        )}
      </button>

      {/* Mini Quick Action */}
      <div style={{
        position:'fixed', bottom:'180px', right:'18px', zIndex:45,
        background:'rgba(11,37,69,0.92)', color:'#fff',
        padding:'10px 14px', borderRadius:'9999px',
        display:'flex', alignItems:'center', gap:'8px',
        fontSize:'13px', fontWeight:600,
        boxShadow:'0 8px 24px rgba(0,0,0,0.18)',
        backdropFilter:'blur(10px)',
      }}>
        Need Help?
        <ArrowUpRight size={16} />
      </div>
    </>
  )
}