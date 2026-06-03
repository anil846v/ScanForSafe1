import { useNavigate } from "react-router-dom";

export default function ReferralSection() {
  const navigate = useNavigate();

  const steps = [
    {
      step: "01",
      title: "Share Your Link",
      desc: "Get your unique referral link from your customer dashboard and share it with friends or family.",
      mobileDesc: "Get your unique referral link and share it with your loved ones.",
      color: "#0088ff",
      lightColor: "rgba(0,136,255,0.06)",
      hoverBg: "rgba(0,136,255,0.12)",
      bg: "rgba(0,136,255,0.10)",
      borderColor: "rgba(0,136,255,0.25)",
      stepColor: "rgba(0,136,255,0.40)",
      svg: (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
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
      mobileDesc: "They purchase and activate any ScanForSafe product.",
      color: "#9d00ff",
      lightColor: "rgba(157,0,255,0.06)",
      hoverBg: "rgba(157,0,255,0.12)",
      bg: "rgba(157,0,255,0.10)",
      borderColor: "rgba(157,0,255,0.25)",
      stepColor: "rgba(157,0,255,0.40)",
      svg: (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
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
      mobileDesc: "You earn cashback or premium benefits credited directly to your wallet.",
      color: "#00c853",
      lightColor: "rgba(0,200,83,0.06)",
      hoverBg: "rgba(0,200,83,0.12)",
      bg: "rgba(0,200,83,0.10)",
      borderColor: "rgba(0,200,83,0.25)",
      stepColor: "rgba(0,200,83,0.40)",
      svg: (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <path d="M16 4l2.9 8.9H28l-7.6 5.5 2.9 8.9L16 21.8l-7.3 5.5 2.9-8.9L4 12.9h9.1L16 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
  ]

  return (
    <section style={{
      width: '100%',
      background: 'linear-gradient(180deg, #f4f8f4 0%, #eaf3ea 100%)',
      padding: '52px 0 56px',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflowX: 'hidden',
      borderTop: '1px solid rgba(46,189,58,0.08)',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

        .ref-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto 36px;
          padding: 0 24px;
        }
        .ref-card {
          background: linear-gradient(145deg, #ffffff 0%, #f9fafb 100%);
          border: 2px solid var(--step-color-border, rgba(46,189,58,0.12));
          border-radius: 22px;
          padding: 32px 24px 36px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 4px 16px rgba(11,37,69,0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .ref-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(150px circle at top right, var(--step-color-light, rgba(46,189,58,0.04)), transparent);
          z-index: 0;
          transition: all 0.3s ease;
        }
        .ref-card:hover {
          border-color: var(--step-color, rgba(46,189,58,0.35));
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(11,37,69,0.08);
        }
        .ref-card:hover::before {
          background: radial-gradient(220px circle at top right, var(--step-color-hover-bg, rgba(46,189,58,0.10)), transparent);
        }
        .ref-card > * { position: relative; z-index: 1; }

        .ref-icon-ring {
          width: 60px; height: 60px;
          border-radius: 50%;
          border: 2px solid rgba(46,189,58,0.22);
          background: rgba(46,189,58,0.07);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .ref-card:hover .ref-icon-ring {
          transform: scale(1.07);
        }

        .ref-step-num {
          position: absolute;
          top: 16px; right: 18px;
          font-family: 'Sora', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.07em;
        }
        .ref-card-title {
          font-family: 'Sora', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #06160A;
          margin-bottom: 9px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .ref-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #4b6357;
          line-height: 1.7;
          margin: 0;
        }

        .ref-cta-btn {
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 50%, #0B2545 100%);
          border: none;
          border-radius: 13px;
          padding: 14px 32px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 28px rgba(46,189,58,0.32);
          transition: all 0.32s cubic-bezier(0.34,1.46,0.64,1);
        }
        .ref-cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.16) 0%, transparent 55%);
          pointer-events: none;
        }
        .ref-cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 40px rgba(46,189,58,0.40);
        }

        .ref-heading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          font-weight: 900;
          line-height: 1.0;
          color: #06160A;
          margin-bottom: 16px;
          letter-spacing: -0.04em;
        }
        .ref-heading .ref-green {
          background: linear-gradient(125deg, #0a2e10 0%, #2ebd3a 52%, #4bd557 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ref-subtext {
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          font-weight: 400;
          color: #4b6357;
          line-height: 1.75;
          max-width: 600px;
          margin: 0 auto 40px;
        }
        .ref-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          padding: 5px 14px;
          border-radius: 999px;
          border: 1.5px solid rgba(46,189,58,0.24);
          background: rgba(46,189,58,0.07);
          box-shadow: 0 2px 12px rgba(46,189,58,0.10), 0 1px 0 rgba(255,255,255,0.9) inset;
        }
        .ref-badge span {
          font-family: 'Sora', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #1a4a1e;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .ref-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2ebd3a;
          animation: refPulse 2s ease-out infinite;
          flex-shrink: 0;
        }
        @keyframes refPulse {
          0%   { box-shadow: 0 0 0 0 rgba(46,189,58,.7); }
          70%  { box-shadow: 0 0 0 7px rgba(46,189,58,0); }
          100% { box-shadow: 0 0 0 0 rgba(46,189,58,0); }
        }
        .ref-helper {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(75,99,87,0.6);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ref-desktop-subtext { display: block; }
        .ref-mobile-subtext { display: none; }
        .ref-desktop-desc { display: block; }
        .ref-mobile-desc { display: none; }

        @media (min-width: 601px) and (max-width: 1024px) {
          .ref-card-title {
            font-size: 17.5px !important;
          }
          .ref-card-desc {
            font-size: 14.5px !important;
            line-height: 1.65 !important;
          }
          .ref-subtext {
            font-size: 16px !important;
            line-height: 1.75 !important;
          }
        }

        @media (max-width: 760px) {
          .ref-desktop-subtext { display: none !important; }
          .ref-mobile-subtext { display: block !important; margin: 0 auto 24px !important; max-width: 460px; padding: 0 16px; }
          .ref-desktop-desc { display: none !important; }
          .ref-mobile-desc { display: block !important; }
          .ref-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
            padding: 0 16px !important;
            max-width: 500px !important;
            margin-bottom: 24px !important;
          }
          .ref-card {
            padding: 20px 14px 22px !important;
            border-radius: 18px !important;
          }
          .ref-card:nth-child(3) {
            grid-column: span 2 !important;
            max-width: 100% !important;
          }
          .ref-icon-ring {
            width: 44px !important;
            height: 44px !important;
            margin-bottom: 12px !important;
          }
          .ref-icon-ring svg {
            width: 22px !important;
            height: 22px !important;
          }
          .ref-card-title {
            font-size: 14.5px !important;
            margin-bottom: 6px !important;
          }
          .ref-card-desc {
            font-size: 12.5px !important;
            line-height: 1.45 !important;
          }
          .ref-step-num {
            top: 10px !important;
            right: 12px !important;
            font-size: 9px !important;
          }
          .ref-cta-btn {
            width: 100% !important;
            justify-content: center !important;
            background: #2ebd3a !important;
            box-shadow: 0 4px 14px rgba(46, 189, 58, 0.25) !important;
            border-radius: 12px !important;
          }
          .ref-cta-btn:hover {
            background: #27a231 !important;
          }
        }
        @media (max-width: 480px) {
          .ref-cta-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      {/* background grid */}
      <svg width="100%" height="100%" viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none' }}>
        {[0,1,2,3,4,5,6].map(i => <line key={`v${i}`} x1={i*200} y1="0" x2={i*200} y2="600" stroke="#2ebd3a" strokeWidth="1"/>)}
        {[0,1,2,3,4].map(i => <line key={`h${i}`} x1="0" y1={i*150} x2="1200" y2={i*150} stroke="#2ebd3a" strokeWidth="1"/>)}
      </svg>

      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', position: 'relative', padding: '0 24px' }}>

        {/* Badge */}
        <div className="ref-badge">
          <div className="ref-badge-dot" />
          <span>Referral Program</span>
        </div>

        {/* Heading */}
        <h2 className="ref-heading">
          Invite Friends,{' '}
          <span className="ref-green">Protect Lives</span>
        </h2>

        {/* Subtext - Desktop */}
        <p className="ref-subtext ref-desktop-subtext">
          Share your unique ScanForSafe referral link with friends and family. Help them secure their vehicles,
          bikes, senior citizens, and valuables with smart emergency protection tags, while earning direct
          commissions credited instantly to your wallet.
        </p>

        {/* Subtext - Mobile */}
        <p className="ref-subtext ref-mobile-subtext">
          Share your unique ScanForSafe referral link with friends and family. Help them secure their vehicles,
          bikes, senior citizens, and valuables.
        </p>

        {/* Step cards */}
        <div className="ref-grid">
          {steps.map((s, i) => (
            <div key={i} className="ref-card" style={{
              '--step-color': s.color,
              '--step-color-light': s.lightColor,
              '--step-color-hover-bg': s.hoverBg,
              '--step-color-border': s.borderColor,
            }}>
              <span className="ref-step-num" style={{ color: s.stepColor }}>{s.step}</span>

              <div className="ref-icon-ring" style={{ color: s.color, backgroundColor: s.bg, borderColor: s.borderColor }}>
                {s.svg}
              </div>

              <h3 className="ref-card-title">{s.title}</h3>
              <p className="ref-card-desc ref-desktop-desc">{s.desc}</p>
              <p className="ref-card-desc ref-mobile-desc">{s.mobileDesc}</p>

              <div style={{
                position: 'absolute',
                bottom: 0, left: 24, right: 24,
                height: 2,
                background: `linear-gradient(90deg, ${s.color}, transparent)`,
                borderRadius: 1,
              }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, maxWidth: 460, margin: '0 auto' }}>
          <button className="ref-cta-btn" onClick={() => navigate('/qr-form')}>
            Get Your Referral Code
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>

          <span className="ref-helper">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L2 3v3c0 2.5 1.8 4.8 4 5.4C8.2 10.8 10 8.5 10 6V3L6 1z" stroke="rgba(75,99,87,0.55)" strokeWidth="1.1" strokeLinejoin="round" fill="none"/>
            </svg>
            Help your community stay safe and get rewarded.
          </span>
        </div>

      </div>
    </section>
  )
}