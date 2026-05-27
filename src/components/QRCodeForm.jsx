export default function QRCodeFormEnhanced() {
  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSd9A7Dl1-VyVYOpzuSFH1dy_vWdsYBxjFUqh6h3LpmicZwKRg/viewform'

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=520x520&data=${encodeURIComponent(formUrl)}&color=064e3b&bgcolor=ffffff`

  const stats = [
    {
      num: '5K+',
      sub: 'Products Scanned',
      badge: 'AP State Leader',
      title: 'Rapid Detection',
      desc: 'Scan · Detect · Protect',
    },
    {
      num: '98%',
      sub: 'Detection Accuracy',
      badge: 'All India Record',
      title: 'Zero False Alarms',
      desc: 'AI-Powered Safety Engine',
    },
    {
      num: '200+',
      sub: 'Partner Institutes',
      badge: 'TG State Leader',
      title: 'Real-Time Alerts',
      desc: 'Instant Smart Response',
    },
  ]

  const miniStats = [
    { num: '5K+', lbl: 'Scans' },
    { num: '98%', lbl: 'Accuracy' },
    { num: '200+', lbl: 'Institutes' },
  ]

  return (
    <div
      style={{
        fontFamily: "'Inter',sans-serif",
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top,#dcfce7 0%,#bbf7d0 40%,#064e3b 120%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Glow Background */}
      <div
        style={{
          position: 'absolute',
          top: -120,
          left: -120,
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'rgba(34,197,94,0.25)',
          filter: 'blur(90px)',
        }}
      />

      {/* HERO HEADER */}
      <div
        style={{
          background: 'linear-gradient(135deg,#022c22,#065f46,#047857)',
          padding: '18px 24px 28px',
          textAlign: 'center',
          borderBottom: '4px solid #4ade80',
          boxShadow: '0 10px 40px rgba(0,0,0,0.25)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'linear-gradient(90deg,#dc2626,#ef4444)',
            color: '#fff',
            padding: '10px 34px',
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 900,
            letterSpacing: '.08em',
            marginBottom: 14,
            boxShadow: '0 6px 18px rgba(239,68,68,0.4)',
          }}
        >
          🚀 Domination Continues...
        </div>

        <h1
          style={{
            color: '#fff',
            fontSize: 40,
            margin: 0,
            fontWeight: 900,
            letterSpacing: '-1px',
          }}
        >
          Scan For Safe
        </h1>

        <p
          style={{
            color: '#a7f3d0',
            marginTop: 10,
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          India's #1 Smart Safety Verification Platform
        </p>
      </div>

      {/* STAT SECTION */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: 20,
          padding: '36px 24px 10px',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 26,
              padding: '28px 22px',
              textAlign: 'center',
              boxShadow: '0 18px 40px rgba(0,0,0,0.18)',
              transition: 'transform .3s ease',
            }}
          >
            <div
              style={{
                fontSize: 58,
                fontWeight: 900,
                color: '#facc15',
                lineHeight: 1,
              }}
            >
              {s.num}
            </div>

            <div
              style={{
                marginTop: 8,
                color: '#ecfeff',
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {s.sub}
            </div>

            <div
              style={{
                display: 'inline-block',
                marginTop: 16,
                background: 'linear-gradient(90deg,#f97316,#dc2626)',
                padding: '8px 14px',
                borderRadius: 999,
                color: '#fff',
                fontSize: 10,
                fontWeight: 900,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
              }}
            >
              {s.badge}
            </div>

            <div style={{ marginTop: 18 }}>
              <div
                style={{
                  color: '#86efac',
                  fontWeight: 800,
                  fontSize: 14,
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  color: '#d1fae5',
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                {s.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN QR CARD */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '28px 20px 60px',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(14px)',
            borderRadius: 34,
            padding: '42px 34px',
            width: '100%',
            maxWidth: 520,
            textAlign: 'center',
            boxShadow: '0 25px 60px rgba(6,78,59,0.35)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative glow */}
          <div
            style={{
              position: 'absolute',
              top: -80,
              right: -80,
              width: 180,
              height: 180,
              background: 'rgba(34,197,94,0.18)',
              borderRadius: '50%',
              filter: 'blur(40px)',
            }}
          />

          <div
            style={{
              display: 'inline-block',
              background: '#dc2626',
              color: '#fff',
              fontSize: 10,
              fontWeight: 900,
              letterSpacing: '.3em',
              padding: '7px 18px',
              borderRadius: 999,
              marginBottom: 18,
              textTransform: 'uppercase',
            }}
          >
            Smart Shield
          </div>

          <h2
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: '#064e3b',
              margin: 0,
            }}
          >
            Scan & Verify
          </h2>

          <p
            style={{
              color: '#4b5563',
              fontSize: 14,
              lineHeight: 1.7,
              marginTop: 12,
              marginBottom: 28,
            }}
          >
            Scan the secure QR code below to access the
            <br />
            official safety verification form instantly.
          </p>

          {/* QR */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div
              style={{
                position: 'absolute',
                inset: -16,
                background: 'linear-gradient(135deg,#22c55e,#16a34a)',
                borderRadius: 28,
                filter: 'blur(16px)',
                opacity: 0.25,
              }}
            />

            <a href={formUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={qrUrl}
                alt="ScanForSafe QR"
                style={{
                  width: 260,
                  height: 260,
                  borderRadius: 24,
                  border: '5px solid #16a34a',
                  background: '#fff',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 10px 34px rgba(22,163,74,0.3)',
                  transition: 'all .35s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05) rotate(1deg)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                }}
              />
            </a>
          </div>

          {/* Mini Stats */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 30,
              gap: 14,
            }}
          >
            {miniStats.map((m, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  background: '#f0fdf4',
                  borderRadius: 18,
                  padding: '14px 10px',
                  border: '1px solid #bbf7d0',
                }}
              >
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 900,
                    color: '#065f46',
                  }}
                >
                  {m.num}
                </div>
                <div
                  style={{
                    marginTop: 4,
                    fontSize: 11,
                    color: '#6b7280',
                    fontWeight: 700,
                  }}
                >
                  {m.lbl}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 28,
              display: 'inline-block',
              background: 'linear-gradient(90deg,#16a34a,#059669)',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: 14,
              boxShadow: '0 10px 24px rgba(5,150,105,0.28)',
            }}
          >
            Open Verification Form →
          </a>

          <div
            style={{
              marginTop: 22,
              fontSize: 11,
              color: '#6b7280',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#16a34a',
                display: 'inline-block',
              }}
            />
            Secure • Instant • No App Required
          </div>
        </div>
      </div>
    </div>
  )
}
