import { useState, useRef, useEffect } from 'react'
import {
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  Bot,
  X,
  Send,
  Loader2,
} from 'lucide-react'

/* ══════════════════════════════════════════════
   AI CHAT WINDOW
══════════════════════════════════════════════ */
function AIChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! 👋 I'm ScanForSafe's AI assistant. Ask me anything — lost items, QR tags, setup help, rewards, or recovery support!",
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
      await new Promise((r) => setTimeout(r, 1400))

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Your ScanForSafe QR tag helps recover lost items instantly using WhatsApp alerts and live location sharing 🚀',
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Something went wrong. Please try again.',
        },
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
        maxHeight: '500px',
        borderRadius: '24px',
        background: '#fff',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow:
          '0 30px 70px rgba(0,0,0,0.18), 0 8px 20px rgba(37,99,235,0.12)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'chatPopup .35s cubic-bezier(.34,1.56,.64,1)',
        backdropFilter: 'blur(14px)',
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: 'linear-gradient(135deg,#0B2545 0%,#2563eb 100%)',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)',
            animation: 'shineMove 5s linear infinite',
          }}
        />

        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Bot size={22} color="#fff" />
        </div>

        <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
          <div
            style={{
              fontSize: '15px',
              fontWeight: 800,
              color: '#fff',
            }}
          >
            ScanForSafe AI
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginTop: '2px',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#4ade80',
                animation: 'pulseDot 1.8s infinite',
              }}
            />
            Online Support
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(255,255,255,0.14)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <X size={16} color="#fff" />
        </button>
      </div>

      {/* MESSAGES */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          background:
            'linear-gradient(180deg,#f8fafc 0%,#f1f5f9 100%)',
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent:
                m.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                maxWidth: '80%',
                padding: '12px 14px',
                borderRadius:
                  m.role === 'user'
                    ? '18px 18px 6px 18px'
                    : '18px 18px 18px 6px',
                background:
                  m.role === 'user'
                    ? 'linear-gradient(135deg,#2563eb,#1d4ed8)'
                    : '#fff',
                color: m.role === 'user' ? '#fff' : '#0f172a',
                fontSize: '13px',
                lineHeight: 1.6,
                boxShadow:
                  m.role === 'user'
                    ? '0 10px 24px rgba(37,99,235,0.25)'
                    : '0 4px 12px rgba(0,0,0,0.06)',
                border:
                  m.role === 'assistant'
                    ? '1px solid #e2e8f0'
                    : 'none',
              }}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: 'flex' }}>
            <div
              style={{
                background: '#fff',
                padding: '12px 14px',
                borderRadius: '18px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                gap: '6px',
              }}
            >
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#60a5fa',
                    animation: `bounce 1.2s ${d * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div
        style={{
          padding: '14px',
          background: '#fff',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          gap: '8px',
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask anything..."
          style={{
            flex: 1,
            borderRadius: '999px',
            border: '1.5px solid #dbeafe',
            padding: '11px 16px',
            fontSize: '13px',
            outline: 'none',
            background: '#f8fafc',
          }}
        />

        <button
          onClick={sendMessage}
          disabled={!input.trim() || loading}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: 'none',
            background:
              input.trim() && !loading
                ? 'linear-gradient(135deg,#2563eb,#1d4ed8)'
                : '#cbd5e1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow:
              input.trim() && !loading
                ? '0 8px 18px rgba(37,99,235,0.28)'
                : 'none',
          }}
        >
          {loading ? (
            <Loader2
              size={18}
              color="#fff"
              style={{ animation: 'spin 1s linear infinite' }}
            />
          ) : (
            <Send size={17} color="#fff" />
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

        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes bounce {
          0%,80%,100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(74,222,128,.7); }
          70% { box-shadow: 0 0 0 12px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }

        @keyframes shineMove {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }

        @keyframes sparkle {
          0%,100% {
            transform: scale(1) rotate(0deg);
            opacity: .7;
          }
          50% {
            transform: scale(1.25) rotate(12deg);
            opacity: 1;
          }
        }

        @keyframes arrowMove {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }

        @keyframes chatPopup {
          from {
            opacity: 0;
            transform: scale(.88) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      {/* CHAT WINDOW */}
      {chatOpen && (
        <AIChatWindow onClose={() => setChatOpen(false)} />
      )}

      {/* GLOW EFFECTS */}
      <div
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '22px',
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(37,211,102,0.22)',
          filter: 'blur(18px)',
          zIndex: 40,
        }}
      />

      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '22px',
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(37,99,235,0.24)',
          filter: 'blur(18px)',
          zIndex: 40,
        }}
      />

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919999999999"
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
          background:
            'linear-gradient(135deg,#25D366 0%,#16a34a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow:
            '0 14px 32px rgba(37,211,102,0.35)',
          animation: 'float 3s ease-in-out infinite',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)',
            animation: 'shineMove 3s linear infinite',
          }}
        />

        <MessageCircle
          size={30}
          color="#fff"
          style={{ position: 'relative', zIndex: 2 }}
        />

        <span
          style={{
            position: 'absolute',
            top: '7px',
            right: '7px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#fff',
            border: '2px solid #22c55e',
          }}
        />
      </a>

      {/* AI BUTTON */}
      <button
        onClick={() => setChatOpen((o) => !o)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 50,
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          background: chatOpen
            ? 'linear-gradient(135deg,#1e3a8a,#1d4ed8)'
            : 'linear-gradient(135deg,#2563eb,#1d4ed8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          boxShadow:
            '0 14px 32px rgba(37,99,235,0.35)',
          animation: chatOpen
            ? 'none'
            : 'float 3s ease-in-out infinite',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)',
            animation: 'shineMove 3s linear infinite',
          }}
        />

        {chatOpen ? (
          <X
            size={28}
            color="#fff"
            style={{ position: 'relative', zIndex: 2 }}
          />
        ) : (
          <Bot
            size={30}
            color="#fff"
            style={{ position: 'relative', zIndex: 2 }}
          />
        )}

        {!chatOpen && (
          <Sparkles
            size={14}
            color="#fff"
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              animation: 'sparkle 2s ease-in-out infinite',
            }}
          />
        )}
      </button>

      {/* ANIMATED NEED HELP */}
      <div
        style={{
          position: 'fixed',
          bottom: chatOpen ? '585px' : '180px',
          right: '18px',
          zIndex: 45,
          background:
            'linear-gradient(135deg,#0B2545 0%,#2563eb 100%)',
          color: '#fff',
          padding: '12px 18px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '13px',
          fontWeight: 700,
          boxShadow:
            '0 12px 30px rgba(37,99,235,0.28)',
          backdropFilter: 'blur(12px)',
          overflow: 'hidden',
          cursor: 'pointer',
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)',
            animation: 'shineMove 4s linear infinite',
          }}
        />

        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#4ade80',
            animation: 'pulseDot 1.8s infinite',
            zIndex: 2,
          }}
        />

        <span
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          Need Help?
          <ArrowUpRight
            size={16}
            style={{
              animation: 'arrowMove 1.5s infinite',
            }}
          />
        </span>

        <Sparkles
          size={14}
          style={{
            position: 'absolute',
            top: '7px',
            right: '10px',
            color: '#fff',
            animation: 'sparkle 2s ease-in-out infinite',
          }}
        />
      </div>
    </>
  )
}