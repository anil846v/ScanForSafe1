export default function PrivacySecuritySection() {
  const cards = [
    {
      title: "256-bit Encryption",
      desc: "AES military-grade encryption at rest and in transit",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="12" width="14" height="11" rx="2" stroke="#166534" strokeWidth="1.5" fill="none"/>
          <path d="M10 12V9a4 4 0 0 1 8 0v3" stroke="#166534" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="14" cy="17.5" r="1.5" fill="#166534"/>
          <line x1="14" y1="19" x2="14" y2="21" stroke="#166534" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Emergency-Only Access",
      desc: "Data surfaced strictly when a genuine emergency is detected",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 4L5 22h18L14 4z" stroke="#166534" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
          <line x1="14" y1="12" x2="14" y2="17" stroke="#166534" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="14" cy="19.5" r="0.75" fill="#166534"/>
        </svg>
      ),
    },
    {
      title: "User Controlled",
      desc: "You decide exactly which data is visible and to whom",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="10" r="4" stroke="#166534" strokeWidth="1.5" fill="none"/>
          <path d="M6 22c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <circle cx="20" cy="10" r="2" fill="#166534" opacity="0.35"/>
          <path d="M22 8l1.5-1.5M22 12l1.5 1.5M24 10h2" stroke="#166534" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Zero Data Selling",
      desc: "Your information is never shared with or sold to third parties",
      svg: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="10" cy="10" r="3.5"
          stroke="#166534"
          strokeWidth="1.5"/>
  <path d="M4.5 20c0-3 2.5-5.5 5.5-5.5S15.5 17 15.5 20"
        stroke="#166534"
        strokeWidth="1.5"
        strokeLinecap="round"/>
  <path d="M20 12l4 2v3c0 2.2-1.6 4.2-4 5-2.4-.8-4-2.8-4-5v-3l4-2z"
        stroke="#166534"
        strokeWidth="1.5"
        strokeLinejoin="round"/>
</svg>
      ),
    },
  ];

  const checks = [
    "Encrypted storage — data never exposed publicly",
    "Emergency-only access when actually needed",
    "You control what information is visible",
    "No data sold to third parties",
  ];

  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(160deg, #ffffff 0%, #ffffff 60%, #ecfdf5 100%)",
        padding: "40px",
fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .ps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; max-width: 1180px; margin: 0 auto; }
        .ps-card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .ps-card {
          background: #ffffff;
          border: 1px solid #bbf7d0;
          border-radius: 20px;
          padding: 28px 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .ps-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 60%);
          z-index: 0;
        }
          
        .ps-card:hover {
          transform: translateY(-6px);
  border: 2px solid #16a34a;
  box-shadow: 0 15px 35px rgba(22, 163, 74, 0.15);
        }
        .ps-card > * { position: relative; z-index: 1; }
        .ps-icon-wrap {
          width: 52px; height: 52px;
          background: #dcfce7;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
        .ps-check-row {
          display: flex; align-items: flex-start; gap: 14px; margin-bottom: 18px;
        }
        @media (max-width: 900px) {
          .ps-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 560px) {
          .ps-card-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ps-grid">
        {/* LEFT */}
        <div>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1.5L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1.5z" stroke="#15803d" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
              <path d="M5.5 8l2 2 3-3" stroke="#15803d" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: "#15803d", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Privacy &amp; Security
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
fontFamily: "Inter, sans-serif", 
  fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
            fontWeight: 800,
  lineHeight: 1.1,
            color: "#0f1a14",
            marginBottom: 24,
  letterSpacing: "-0.03em",
          }}>
            Your Data Is Always<br />
<span style={{
  color: "#16a34a",
  fontWeight: 800
}}>
  In Your Control
</span>          </h2>

          {/* Body */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            lineHeight: 1.8,
            color: "#374151",
            marginBottom: 40,
            maxWidth: 460,
            fontWeight: 300,
          }}>
            We handle sensitive personal and medical information
            with the highest level of care. Your family's safety
            data is protected with enterprise-grade security built
            for the most demanding environments.
          </p>

          {/* Checklist */}
          <div>
            {checks.map((item, i) => (
              <div key={i} className="ps-check-row">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: 2 }}>
                  <circle cx="11" cy="11" r="10.25" stroke="#16a34a" strokeWidth="1.5" fill="#f0fdf4"/>
                  <path d="M7 11l3 3 5-5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: "#1f2937",
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          {/* <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 24 }}>
            <button style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "#ffffff",
              background: "#16a34a",
              border: "none",
              borderRadius: 10,
              padding: "12px 26px",
              cursor: "pointer",
              letterSpacing: "0.01em",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              View security docs
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#6b7280", display: "flex", alignItems: "center", gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#9ca3af" strokeWidth="1.2"/><path d="M7 4.5v3l2 1" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round"/></svg>
              Last audited March 2025
            </span>
          </div> */}
        </div>

        {/* RIGHT */}
        <div className="ps-card-grid">
          {cards.map((card, i) => (
            <div key={i} className="ps-card">
              {/* Decorative corner accent */}
              <svg
                width="60" height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", top: 0, right: 0, opacity: 0.25 }}
              >
                <path d="M60 0 Q60 60 0 60" stroke="#d0e1d6" strokeWidth="1" fill="none"/>
              </svg>

              <div className="ps-icon-wrap">
                {card.svg}
              </div>

              <h3 style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 18,
                fontWeight: 400,
                color: "#0f1a14",
                marginBottom: 8,
                lineHeight: 1.25,
              }}>
                {card.title}
              </h3>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 300,
                color: "#4b5563",
                lineHeight: 1.6,
                margin: 0,
              }}>
                {card.desc}
              </p>

              {/* Bottom accent line */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 24, right: 24,
                height: 2,
                background: "linear-gradient(90deg, #0c9e3f, transparent)",
                borderRadius: 1,
              }} />
            </div>
          ))}

          {/* Trust badge strip */}
          {/* <div style={{
            gridColumn: "1 / -1",
            border: "1px solid #bbf7d0",
            borderRadius: 14,
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#f0fdf4",
            gap: 12,
            flexWrap: "wrap",
          }}>
            {[
              { label: "SOC 2 Type II", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="3" stroke="#15803d" strokeWidth="1.2"/><path d="M5 8l2 2 4-4" stroke="#15803d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { label: "HIPAA Ready", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L3 4.5v3.5C3 11 5.2 13.5 8 14c2.8-.5 5-3 5-6V4.5L8 2z" stroke="#15803d" strokeWidth="1.2" fill="none" strokeLinejoin="round"/></svg> },
              { label: "GDPR Compliant", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#15803d" strokeWidth="1.2"/><path d="M5 8l2 2 4-4" stroke="#15803d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { label: "ISO 27001", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="2" stroke="#15803d" strokeWidth="1.2"/><line x1="5.5" y1="6" x2="10.5" y2="6" stroke="#15803d" strokeWidth="1.2" strokeLinecap="round"/><line x1="5.5" y1="9" x2="8.5" y2="9" stroke="#15803d" strokeWidth="1.2" strokeLinecap="round"/></svg> },
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                {t.icon}
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, color: "#15803d" }}>{t.label}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}