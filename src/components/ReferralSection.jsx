export default function ReferralSection() {
  const steps = [
    {
      step: "01",
      title: "Get Your Link",
      desc: "Receive your unique referral code instantly after registration.",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 19l-3.5 3.5a3.536 3.536 0 0 1-5-5L8 14" stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M19 13l3.5-3.5a3.536 3.536 0 0 0-5-5L14 8" stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M13.5 18.5l5-5" stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      step: "02",
      title: "Friends Sign Up",
      desc: "Every person who registers through your link counts toward rewards.",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="11" r="4" stroke="#4ade80" strokeWidth="1.6" fill="none"/>
          <path d="M4 25c0-4.418 3.582-8 8-8" stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="22" cy="11" r="4" stroke="#4ade80" strokeWidth="1.6" fill="none" opacity="0.5"/>
          <path d="M20 25c0-4.418 1.343-7.418 4-8" stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round" opacity="0.5"/>
          <path d="M25 18v6M22 21h6" stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      step: "03",
      title: "Earn Rewards",
      desc: "Unlock discounts, gifts and premium access as your network grows.",
      svg: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4l2.9 8.9H28l-7.6 5.5 2.9 8.9L16 21.8l-7.3 5.5 2.9-8.9L4 12.9h9.1L16 4z" stroke="#4ade80" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(140deg, #041c32 0%, #05293d 50%, #053b35 100%)",
        padding: "40px",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ref-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1100px; margin: 0 auto 64px; }
        .ref-card {
          border: 1px solid rgba(74, 222, 128, 0.12);
          border-radius: 20px;
          padding: 36px 28px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .ref-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(74,222,128,0.06) 0%, transparent 60%);
          z-index: 0;
        }
        .ref-card:hover {
          border-color: rgba(74, 222, 128, 0.28);
          transform: translateY(-3px);
        }
        .ref-card > * { position: relative; z-index: 1; }
        .ref-icon-ring {
          width: 64px; height: 64px;
          border-radius: 50%;
          border: 1px solid rgba(74,222,128,0.25);
          background: rgba(74,222,128,0.07);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
        }
        .ref-connector {
          display: flex; align-items: center; gap: 12px; margin-bottom: 48px;
          max-width: 400px; margin-left: auto; margin-right: auto;
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
        style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {[0,1,2,3,4,5,6].map(i => (
          <line key={`v${i}`} x1={i*200} y1="0" x2={i*200} y2="600" stroke="#4ade80" strokeWidth="1"/>
        ))}
        {[0,1,2,3,4].map(i => (
          <line key={`h${i}`} x1="0" y1={i*150} x2="1200" y2={i*150} stroke="#4ade80" strokeWidth="1"/>
        ))}
      </svg>

      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", position: "relative" }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 28,
          padding: "6px 16px",
          borderRadius: 999,
          border: "1px solid rgba(74,222,128,0.2)",
          background: "rgba(74,222,128,0.07)",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1l1.6 4.8H14l-4.2 3 1.6 4.9L7 11l-4.4 2.7 1.6-4.9L0 5.8h5.4L7 1z" stroke="#4ade80" strokeWidth="1.1" strokeLinejoin="round" fill="none"/>
          </svg>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, color: "#4ade80", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Referral Program
          </span>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
          fontWeight: 800,
          lineHeight: 1.08,
          color: "#ffffff",
          marginBottom: 20,
          letterSpacing: "-0.03em",
        }}>
          Invite &amp; Earn{" "}
          <span style={{ color: "#4ade80" }}>Rewards</span>
        </h2>

        {/* Subheading */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 16,
          fontWeight: 300,
          color: "rgba(203,213,225,0.85)",
          lineHeight: 1.8,
          maxWidth: 560,
          margin: "0 auto 72px",
        }}>
          Share with friends and family — the more people you protect,
          the more rewards and exclusive benefits you unlock.
        </p>

        {/* Step cards */}
        <div className="ref-grid">
          {steps.map((s, i) => (
            <div key={i} className="ref-card">
              {/* Step number top-right */}
              <span style={{
                position: "absolute",
                top: 20,
                right: 22,
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(74,222,128,0.35)",
                letterSpacing: "0.06em",
              }}>
                {s.step}
              </span>

              <div className="ref-icon-ring">
                {s.svg}
              </div>

              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#f1f5f9",
                marginBottom: 10,
                letterSpacing: "-0.02em",
              }}>
                {s.title}
              </h3>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 300,
                color: "rgba(148,163,184,0.9)",
                lineHeight: 1.7,
                margin: 0,
              }}>
                {s.desc}
              </p>

              {/* Bottom green accent */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 28, right: 28,
                height: 1.5,
                background: "linear-gradient(90deg, #4ade80, transparent)",
                borderRadius: 1,
              }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <button style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            fontWeight: 700,
            color: "#041c32",
            background: "#4ade80",
            border: "none",
            borderRadius: 12,
            padding: "15px 36px",
            cursor: "pointer",
            letterSpacing: "-0.01em",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
          }}>
            Register &amp; Get Referral Code
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#041c32" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            color: "rgba(148,163,184,0.6)",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1L2 3v3c0 2.5 1.8 4.8 4 5.4C8.2 10.8 10 8.5 10 6V3L6 1z" stroke="rgba(148,163,184,0.5)" strokeWidth="1.1" strokeLinejoin="round" fill="none"/>
            </svg>
            No credit card required · Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}