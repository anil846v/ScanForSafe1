export default function ReferralSection() {
  const steps = [
    {
      step: "01",
      title: "Share Your Link",
      desc: "Get your unique referral link from your customer dashboard and share it with friends or family.",
      color: "#0088ff",
      lightColor: "rgba(0, 136, 255, 0.06)",
      hoverBg: "rgba(0, 136, 255, 0.12)",
      bg: "rgba(0, 136, 255, 0.1)",
      borderColor: "rgba(0, 136, 255, 0.25)",
      stepColor: "rgba(0, 136, 255, 0.35)",
      svg: (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 19l-3.5 3.5a3.536 3.536 0 0 1-5-5L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 13l3.5-3.5a3.536 3.536 0 0 0-5-5L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M13.5 18.5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      step: "02",
      title: "Friends Activate Tags",
      desc: "Your friends purchase and activate any ScanForSafe smart decal, key tag, or safety wristband.",
      color: "#9d00ff",
      lightColor: "rgba(157, 0, 255, 0.06)",
      hoverBg: "rgba(157, 0, 255, 0.12)",
      bg: "rgba(157, 0, 255, 0.1)",
      borderColor: "rgba(157, 0, 255, 0.25)",
      stepColor: "rgba(157, 0, 255, 0.35)",
      svg: (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="11" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M4 25c0-4.418 3.582-8 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="22" cy="11" r="4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
          <path d="M20 25c0-4.418 1.343-7.418 4-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          <path d="M25 18v6M22 21h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      step: "03",
      title: "Earn Protection Cash",
      desc: "Get ₹250 cash commission or premium subscription extensions credited directly to your wallet.",
      color: "#00c853",
      lightColor: "rgba(0, 200, 83, 0.06)",
      hoverBg: "rgba(0, 200, 83, 0.12)",
      bg: "rgba(0, 200, 83, 0.1)",
      borderColor: "rgba(0, 200, 83, 0.25)",
      stepColor: "rgba(0, 200, 83, 0.35)",
      svg: (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4l2.9 8.9H28l-7.6 5.5 2.9 8.9L16 21.8l-7.3 5.5 2.9-8.9L4 12.9h9.1L16 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(180deg, #f4f6f9 0%, #e9ecf1 100%)",
        padding: "20px 40px 20px 40px",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflowX: "hidden",
        borderTop: "1px solid rgba(46, 189, 58, 0.08)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ref-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto 52px; }
        .ref-card {
          background: linear-gradient(145deg, #ffffff 0%, #f9fafb 100%);
          border: 2px solid var(--step-color-border, rgba(46, 189, 58, 0.12));
          border-radius: 24px;
          padding: 40px 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.02);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .ref-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(160px circle at top right, var(--step-color-light, rgba(46, 189, 58, 0.04)), transparent);
          z-index: 0;
          transition: all 0.3s ease;
        }
        .ref-card:hover {
          border-color: var(--step-color, rgba(46, 189, 58, 0.35));
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(11, 37, 69, 0.08);
        }
        .ref-card:hover::before {
          background: radial-gradient(240px circle at top right, var(--step-color-hover-bg, rgba(46, 189, 58, 0.12)), transparent);
        }
        .ref-card:hover .ref-icon-ring {
          transform: scale(1.05);
          box-shadow: 0 4px 12px var(--step-color-light, rgba(46, 189, 58, 0.15));
        }
        .ref-card > * { position: relative; z-index: 1; }
        .ref-icon-ring {
          width: 64px; height: 64px;
          border-radius: 50%;
          border: 2px solid rgba(46, 189, 58, 0.25);
          background: rgba(46, 189, 58, 0.07);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .ref-cta-btn {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 100%);
          border: none;
          border-radius: 14px;
          padding: 13px 40px;
          cursor: pointer;
          letter-spacing: -0.01em;
          display: inline-flex;
          align-items: center;
          gap: 2px;
          box-shadow: 0 10px 24px rgba(46, 189, 58, 0.25);
          transition: all 0.25s ease-in-out;
        }
        .ref-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(46, 189, 58, 0.35);
          opacity: 0.95;
        }
        @media (max-width: 760px) {
          .ref-grid { grid-template-columns: 1fr; max-width: 440px; }
        }
      `}</style>

      {/* Background decorative SVG grid lines */}
      <svg
        width="100%" height="100%"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {[0,1,2,3,4,5,6].map(i => (
          <line key={`v${i}`} x1={i*200} y1="0" x2={i*200} y2="600" stroke="#2ebd3a" strokeWidth="1"/>
        ))}
        {[0,1,2,3,4].map(i => (
          <line key={`h${i}`} x1="0" y1={i*150} x2="1200" y2={i*150} stroke="#2ebd3a" strokeWidth="1"/>
        ))}
      </svg>

      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", position: "relative" }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 24,
          padding: "6px 16px",
          borderRadius: 999,
          border: "2px solid rgba(46, 189, 58, 0.2)",
          background: "rgba(46, 189, 58, 0.07)",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1l1.6 4.8H14l-4.2 3 1.6 4.9L7 11l-4.4 2.7 1.6-4.9L0 5.8h5.4L7 1z" stroke="#2ebd3a" strokeWidth="1.1" strokeLinejoin="round" fill="none"/>
          </svg>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "#2ebd3a", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Referral Program
          </span>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
          fontWeight: 800,
          lineHeight: 1.08,
          color: "#0B2545",
          marginBottom: 20,
          letterSpacing: "-0.03em",
        }}>
          Invite Friends, <span style={{ color: "#2ebd3a" }}>Protect Lives</span>
        </h2>

        {/* Subheading */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 15.5,
          fontWeight: 400,
          color: "#4A5568",
          lineHeight: 1.8,
          maxWidth: 640,
          margin: "0 auto 60px",
        }}>
          Share your unique ScanForSafe referral link with friends and family. Help them secure their vehicles, 
          bikes, senior citizens, and valuables with smart emergency protection tags, while earning direct commissions 
          credited instantly to your wallet.
        </p>

        {/* Step cards */}
        <div className="ref-grid">
          {steps.map((s, i) => (
            <div 
              key={i} 
              className="ref-card"
              style={{
                '--step-color': s.color,
                '--step-color-light': s.lightColor,
                '--step-color-hover-bg': s.hoverBg,
                '--step-color-border': s.borderColor,
              }}
            >
              {/* Step number top-right */}
              <span style={{
                position: "absolute",
                top: 20,
                right: 22,
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: s.stepColor,
                letterSpacing: "0.06em",
              }}>
                {s.step}
              </span>

              <div 
                className="ref-icon-ring"
                style={{
                  color: s.color,
                  backgroundColor: s.bg,
                  borderColor: s.borderColor,
                }}
              >
                {s.svg}
              </div>

              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#0B2545",
                marginBottom: 10,
                letterSpacing: "-0.02em",
              }}>
                {s.title}
              </h3>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "#5A6578",
                lineHeight: 1.7,
                margin: 0,
              }}>
                {s.desc}
              </p>

              {/* Bottom colored accent */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 28, right: 28,
                height: 2,
                background: `linear-gradient(90deg, ${s.color}, transparent)`,
                borderRadius: 1,
              }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <button className="ref-cta-btn">
            Get Your Referral Code
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            color: "rgba(90, 101, 120, 0.6)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1L2 3v3c0 2.5 1.8 4.8 4 5.4C8.2 10.8 10 8.5 10 6V3L6 1z" stroke="rgba(90, 101, 120, 0.5)" strokeWidth="1.1" strokeLinejoin="round" fill="none"/>
            </svg>
            Help your community stay safe and get rewarded.
          </span>
        </div>
      </div>
    </section>
  );
}