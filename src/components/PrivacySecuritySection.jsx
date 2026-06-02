import React from 'react'

export default function PrivacySecuritySection() {
  const cards = [
    {
      title: "256-bit Encryption",
      desc: "AES military-grade encryption at rest and in transit",
      color: "#7c3aed",
      bg: "#f5f3ff",
      borderColor: "#ddd6fe",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="12" width="14" height="11" rx="2" stroke="#7c3aed" strokeWidth="1.5" fill="none"/>
          <path d="M10 12V9a4 4 0 0 1 8 0v3" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="14" cy="17.5" r="1.5" fill="#7c3aed"/>
          <line x1="14" y1="19" x2="14" y2="21" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Emergency-Only Access",
      desc: "Data surfaced strictly when a genuine emergency is detected",
      color: "#f97316",
      bg: "#fff7ed",
      borderColor: "#fed7aa",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 4L5 22h18L14 4z" stroke="#f97316" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
          <line x1="14" y1="12" x2="14" y2="17" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="14" cy="19.5" r="0.75" fill="#f97316"/>
        </svg>
      ),
    },
    {
      title: "User Controlled",
      desc: "You decide exactly which data is visible and to whom",
      color: "#0891b2",
      bg: "#ecfeff",
      borderColor: "#bae6fd",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="10" r="4" stroke="#0891b2" strokeWidth="1.5" fill="none"/>
          <path d="M6 22c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <circle cx="20" cy="10" r="2" fill="#0891b2" opacity="0.35"/>
          <path d="M22 8l1.5-1.5M22 12l1.5 1.5M24 10h2" stroke="#0891b2" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Zero Data Selling",
      desc: "Your information is never shared with or sold to third parties",
      color: "#16a34a",
      bg: "#e8f8eb",
      borderColor: "#bbf7d0",
      svg: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="10" cy="10" r="3.5" stroke="#16a34a" strokeWidth="1.5"/>
          <path d="M4.5 20c0-3 2.5-5.5 5.5-5.5S15.5 17 15.5 20" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M20 12l4 2v3c0 2.2-1.6 4.2-4 5-2.4-.8-4-2.8-4-5v-3l4-2z" stroke="#16a34a" strokeWidth="1.5" strokeLinejoin="round"/>
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
        padding: "40px 24px",
      }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

        .ps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; max-width: 1180px; margin: 0 auto; }
        .ps-card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .ps-card {
          background: #ffffff;
          border: 1.5px solid var(--ps-border-color);
          border-radius: 20px;
          padding: 28px 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .ps-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--ps-bg-color) 0%, #ffffff 70%);
          z-index: 0;
        }
          
        .ps-card:hover {
          transform: translateY(-6px);
          border-color: var(--ps-hover-border) !important;
          box-shadow: 0 15px 35px var(--ps-hover-shadow) !important;
        }
        .ps-card > * { position: relative; z-index: 1; }
        .ps-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }
        .ps-check-row {
          display: flex; align-items: flex-start; gap: 14px; margin-bottom: 18px;
        }

        .ps-mobile-para { display: none; }
        .ps-desktop-para { display: block; }
        .ps-mobile-banner { display: none; }

        @media (max-width: 900px) {
          .ps-grid { grid-template-columns: 1fr; gap: 32px; }
          .ps-desktop-para { display: none !important; }
          .ps-mobile-para { display: block !important; margin-bottom: 24px !important; }
          .ps-checklist { display: none !important; }
          .ps-mobile-banner {
            display: flex !important;
            margin-top: 20px;
            background: #f0fdf4;
            border: 1.5px solid #bbf7d0;
            border-radius: 14px;
            padding: 12px 16px;
            align-items: center;
            gap: 12px;
            text-align: left;
            width: 100%;
          }
        }

        @media (max-width: 560px) {
          .ps-card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .ps-card {
            padding: 16px 12px !important;
            border-radius: 14px !important;
          }
          .ps-icon-wrap {
            width: 40px !important;
            height: 40px !important;
            border-radius: 10px !important;
            margin-bottom: 12px !important;
          }
          .ps-icon-wrap svg {
            width: 20px !important;
            height: 20px !important;
          }
          .ps-card h3 {
            font-size: 13.5px !important;
            margin-bottom: 4px !important;
            font-weight: 800 !important;
          }
          .ps-card p {
            font-size: 10.5px !important;
            line-height: 1.45 !important;
          }
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
            <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 11, fontWeight: 700, color: "#15803d", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Privacy &amp; Security
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Sora', sans-serif", 
            fontSize: "clamp(26px, 4.5vw, 36px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#0B2545",
            marginBottom: 24,
            letterSpacing: "-0.03em",
          }}>
            Your Data Is Always<br />
            <span style={{ color: "#16a34a", fontWeight: 800 }}>In Your Control</span>
          </h2>

          {/* Body - Desktop */}
          <p className="ps-desktop-para" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            lineHeight: 1.8,
            color: "#374151",
            marginBottom: 40,
            maxWidth: 460,
            fontWeight: 500,
          }}>
            We handle sensitive personal and medical information
            with the highest level of care. Your family's safety
            data is protected with enterprise-grade security built
            for the most demanding environments.
          </p>

          {/* Body - Mobile */}
          <p className="ps-mobile-para" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            lineHeight: 1.7,
            color: "#374151",
            fontWeight: 500,
            maxWidth: 460,
            margin: 0
          }}>
            We handle sensitive personal and medical information with the highest level of care.
          </p>

          {/* Checklist */}
          <div className="ps-checklist">
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
                  fontWeight: 500,
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="ps-card-grid">
            {cards.map((card, i) => (
              <div
                key={i}
                className="ps-card"
                style={{
                  '--ps-border-color': card.borderColor,
                  '--ps-bg-color': card.bg,
                  '--ps-hover-border': card.color,
                  '--ps-hover-shadow': `rgba(${card.color === '#7c3aed' ? '124,58,237' : card.color === '#f97316' ? '249,115,22' : card.color === '#0891b2' ? '8,145,178' : '22,163,74'}, 0.15)`,
                }}
              >
                {/* Decorative corner accent */}
                <svg
                  width="60" height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: "absolute", top: 0, right: 0, opacity: 0.2 }}
                >
                  <path d="M60 0 Q60 60 0 60" stroke={card.color} strokeWidth="1" fill="none"/>
                </svg>

                <div className="ps-icon-wrap" style={{ background: card.bg }}>
                  {card.svg}
                </div>

                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#0B2545",
                  marginBottom: 8,
                  lineHeight: 1.25,
                }}>
                  {card.title}
                </h3>

                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#374151",
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
                  background: `linear-gradient(90deg, ${card.color}, transparent)`,
                  borderRadius: 1,
                }} />
              </div>
            ))}
          </div>

          {/* Privacy Banner - Mobile Only */}
          <div className="ps-mobile-banner">
            <div style={{
              width: 32, height: 32, borderRadius: '50%', background: '#dcfce7',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
            }}>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.5L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1.5z" stroke="#16a34a" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
                <path d="M5.5 8l2 2 3-3" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#14532d', fontFamily: "'Sora', sans-serif" }}>Your privacy, our priority.</div>
              <div style={{ fontSize: 11, color: '#166534', fontWeight: 500, marginTop: 2, fontFamily: "'DM Sans', sans-serif" }}>Built for trust. Built for life.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}