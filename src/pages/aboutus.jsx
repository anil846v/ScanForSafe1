import React, { useState, useEffect } from "react";

// ── Responsive hook ───────────────────────────────────────────────────────
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
};

// ── ScanForSafe Logo ──────────────────────────────────────────────────────
const ScanForSafeLogo = () => (
  <svg width="36" height="36" viewBox="0 0 44 44" fill="none">
    <defs>
      <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ADE80" />
        <stop offset="100%" stopColor="#16A34A" />
      </linearGradient>
    </defs>
    <path d="M22 2L4 9v12c0 10.5 7.7 20.3 18 22.8C32.3 41.3 40 31.5 40 21V9L22 2z"
      fill="url(#lg1)" opacity="0.18" stroke="url(#lg1)" strokeWidth="1.8"/>
    <path d="M15 15 Q11 19 15 22 Q19 25 15 29" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
    <path d="M29 15 Q33 19 29 22 Q25 25 29 29" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15" y1="15" x2="29" y2="15" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15" y1="22" x2="29" y2="22" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15" y1="29" x2="29" y2="29" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const CircleCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="8 12 11 15 16 10" />
  </svg>
);
const RefreshCw = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);
const RefreshCwIcon = ({ size = 20, color = "#22C55E" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
  </svg>
);
const TargetIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const EyeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const CheckIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
);
const UsersIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const BulbIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
  </svg>
);
const HandshakeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const Globe = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
  </svg>
);
const UserGroup = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const HeadSet = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0118 0v6" />
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
  </svg>
);
const ShieldStat = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
  </svg>
);

const ShieldCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 11 11 13 15 9" />
  </svg>
);

const Lock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const PeopleIcon = ({ size = 28, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// ── Divider ───────────────────────────────────────────────────────────────
const GreenDivider = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
    <div style={{ height: 2, width: 40, background: "linear-gradient(90deg,#22C55E,transparent)" }}/>
    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }}/>
    <div style={{ height: 2, width: 40, background: "linear-gradient(90deg,transparent,#22C55E)" }}/>
  </div>
);

// ── Leader Avatar ─────────────────────────────────────────────────────────
const LeaderAvatar = ({ src, name, size = 128, color = "#22C55E", borderColor = "#d1fae5" }) => {
  const initials = name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "#fff", border: `3px solid ${borderColor}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", flexShrink: 0
    }}>
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span style={{ fontSize: size * 0.35, fontWeight: 700, color: color }}>{initials}</span>
      )}
    </div>
  );
};

export default function AboutUs() {
  const isMobile = useIsMobile();
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, Arial, sans-serif", color: "#1a2332", background: "#fff", margin: 0, padding: 0, paddingTop: "80px" }}>



      {/* ── HERO ── */}
      <div className="about-hero-section">
        <style>{`
          .about-hero-section {
            width: 100%;
            min-height: 520px;
            background: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), 
                        linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #004b23 80%, #031a07 100%);
            background-size: 32px 32px, 100% 100%;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
            font-family: 'DM Sans', sans-serif;
            margin-top: 0;
            border-bottom: 1px solid rgba(34, 197, 94, 0.14);
          }
          .about-hero-orb {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
          }
          .about-hero-orb.orb-1 {
            width: 560px;
            height: 560px;
            background: radial-gradient(circle, rgba(34, 197, 94, 0.16) 0%, transparent 65%);
            top: -180px;
            right: -120px;
            animation: orbMove1 14s ease-in-out infinite;
          }
          .about-hero-orb.orb-2 {
            width: 480px;
            height: 480px;
            background: radial-gradient(circle, rgba(0, 87, 184, 0.22) 0%, transparent 65%);
            bottom: -160px;
            left: -100px;
            animation: orbMove2 18s ease-in-out infinite;
          }
          @keyframes orbMove1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(60px, -40px) scale(1.1); }
            66% { transform: translate(-30px, 30px) scale(0.95); }
          }
          @keyframes orbMove2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-70px, 30px) scale(1.05); }
            66% { transform: translate(40px, -50px) scale(1.1); }
          }
          .about-hero-image-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            background: url('/aboutus.png') no-repeat right 18% bottom / auto 90%;
            z-index: 2;
            animation: gentleFloat 8s ease-in-out infinite;
          }

          @keyframes gentleFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          .about-hero-container {
            max-width: 1280px;
            width: 100%;
            margin: 0 auto;
            padding: 40px 48px;
            display: flex;
            align-items: center;
            position: relative;
            z-index: 4;
          }
          .about-hero-content {
            max-width: 620px;
            text-align: left;
            position: relative;
            z-index: 5;
          }
          .about-hero-tagline {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 20px;
          }
          .about-hero-tagline-line {
            width: 18px;
            height: 2px;
            background-color: #22c55e;
            display: inline-block;
          }
          .about-hero-tagline-text {
            color: #22c55e;
            font-size: 13.5px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          .about-hero-heading {
            font-family: 'Sora', sans-serif;
            font-size: 52px;
            font-weight: 800;
            line-height: 1.15;
            color: #ffffff;
            margin: 0 0 20px 0;
            letter-spacing: -1.5px;
          }
          .about-hero-heading .text-green {
            color: #22c55e;
          }
          .about-hero-description {
            font-size: 15.5px;
            line-height: 1.7;
            color: #cbd5e1;
            margin: 0 0 36px 0;
            max-width: 520px;
          }
          .about-hero-features {
            display: flex;
            align-items: center;
            gap: 24px;
            flex-wrap: wrap;
          }
          .about-hero-feature-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }
          .about-hero-feature-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1.5px solid #22c55e;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #22c55e;
            flex-shrink: 0;
            background-color: rgba(34, 197, 94, 0.12);
          }
          .about-hero-feature-info {
            display: flex;
            flex-direction: column;
          }
          .about-hero-feature-title {
            font-size: 14.5px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 2px;
          }
          .about-hero-feature-desc {
            font-size: 11.5px;
            line-height: 1.4;
            color: #94a3b8;
          }
          .about-hero-feature-divider {
            width: 1px;
            height: 38px;
            background-color: rgba(255, 255, 255, 0.15);
          }

          @media (max-width: 1024px) {
            .about-hero-heading {
              font-size: 42px;
              letter-spacing: -1px;
            }
            .about-hero-section {
              flex-direction: column;
              min-height: auto;
              padding: 0;
            }
            .about-hero-image-bg {
              position: relative;
              width: 100%;
              height: 360px;
              order: 2;
              background-position: center bottom !important;
              background-size: contain !important;
              animation: none;
            }
            .about-hero-container {
              padding: 48px 24px;
              justify-content: center;
              order: 1;
            }
            .about-hero-content {
              max-width: 100%;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .about-hero-tagline {
              justify-content: center;
            }
            .about-hero-description {
              margin-bottom: 28px;
              max-width: 100%;
            }
            .about-hero-features {
              justify-content: center;
              gap: 20px;
            }
            .about-hero-feature-divider {
              display: none;
            }
            .about-hero-feature-item {
              flex-direction: column;
              align-items: center;
              text-align: center;
              min-width: 140px;
            }
          }

          @media (max-width: 480px) {
            .about-hero-heading {
              font-size: 32px !important;
              line-height: 1.25 !important;
            }
          }
        `}</style>

        {/* Glowing background blobs */}
        <div className="about-hero-orb orb-1"></div>
        <div className="about-hero-orb orb-2"></div>
        <div className="about-hero-image-bg"></div>
        
        <div className="about-hero-container">
          <div className="about-hero-content">
            
            <div className="about-hero-tagline">
              <span className="about-hero-tagline-line"></span>
              <span className="about-hero-tagline-text">ABOUT US</span>
            </div>

            <h1 className="about-hero-heading">
              Building a Safer,<br />
              Connected <span className="text-green">World</span>
            </h1>

            <p className="about-hero-description">
              ScanForSafe is on a mission to help individuals and organizations protect what matters most using smart QR technology and secure digital solutions.
            </p>

            <div className="about-hero-features">
              
              <div className="about-hero-feature-item">
                <div className="about-hero-feature-icon">
                  <ShieldCheck />
                </div>
                <div className="about-hero-feature-info">
                  <div className="about-hero-feature-title">Secure</div>
                  <div className="about-hero-feature-desc">Built with security<br />at every layer</div>
                </div>
              </div>

              <div className="about-hero-feature-divider"></div>

              <div className="about-hero-feature-item">
                <div className="about-hero-feature-icon">
                  <CircleCheck />
                </div>
                <div className="about-hero-feature-info">
                  <div className="about-hero-feature-title">Reliable</div>
                  <div className="about-hero-feature-desc">Solutions you can<br />count on</div>
                </div>
              </div>

              <div className="about-hero-feature-divider"></div>

              <div className="about-hero-feature-item">
                <div className="about-hero-feature-icon">
                  <Lock />
                </div>
                <div className="about-hero-feature-info">
                  <div className="about-hero-feature-title">Privacy First</div>
                  <div className="about-hero-feature-desc">Your data is always<br />protected</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ── MISSION & VISION ── */}
      <section className="about-us-section" style={{ padding: "50px", background: "#f8fafc", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          
          {/* Section Header */}
          <div className="section-header" style={{ textAlign: "center", marginBottom: 54 }}>
            <h2 style={{ margin: "0 0 8px", fontSize: 28, fontWeight: 800, color: "#0f172a", fontFamily: "'Sora', sans-serif", letterSpacing: "-0.5px" }}>
              Mission & <span style={{ color: "#22c55e" }}>Vision</span>
            </h2>
            <p style={{ margin: "0 auto", color: "#64748b", fontSize: 15, maxWidth: 600, lineHeight: 1.6 }}>
              Our purpose and goals guiding us toward a safer, more connected tomorrow.
            </p>
          </div>

          <style>{`
            .mission-vision-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 32px;
            }
            @media (max-width: 768px) {
              .about-us-section {
                padding: 32px 16px !important;
              }
              .section-header {
                margin-bottom: 24px !important;
              }
              .section-header h2 {
                font-size: 22px !important;
              }
              .section-header p {
                font-size: 13.5px !important;
              }
              .mission-vision-grid {
                gap: 16px !important;
              }
              .mission-vision-card {
                padding: 20px 16px !important;
                gap: 12px !important;
              }
              .mission-vision-card h2 {
                font-size: 18px !important;
                margin-bottom: 6px !important;
              }
              .mission-vision-card p {
                font-size: 13.5px !important;
                line-height: 1.6 !important;
              }
            }
          `}</style>

          <div className="mission-vision-grid">
            {/* Mission Card */}
            <div style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderLeft: "5px solid #22c55e",
              borderRadius: "12px",
              padding: "36px",
              boxShadow: "0 12px 24px -10px rgba(0, 0, 0, 0.05)",
              display: "flex",
              alignItems: "flex-start",
              gap: 20
            }} className="mission-vision-card">
              <div style={{
                width: 54, height: 54, borderRadius: 12, background: "#f0fdf4",
                border: "1px solid #bbf7d0", display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0, color: "#22c55e"
              }}>
                <TargetIcon />
              </div>
              <div>
                <h2 style={{ margin: "0 0 12px", fontSize: 20, fontWeight: 700, color: "#0f172a", fontFamily: "'Sora', sans-serif" }}>
                  Our <span style={{ color: "#22c55e" }}>Mission</span>
                </h2>
                <p style={{ margin: 0, color: "#475569", fontSize: 14.5, lineHeight: 1.75 }}>
                  To empower people and businesses with innovative, easy-to-use, and reliable solutions that enhance security, build trust, and create peace of mind.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div style={{
              background: "#f4f8ff",
              border: "1px solid #d0e1fd",
              borderLeft: "5px solid #2563eb",
              borderRadius: "12px",
              padding: "36px",
              boxShadow: "0 12px 24px -10px rgba(37, 99, 235, 0.06)",
              display: "flex",
              alignItems: "flex-start",
              gap: 20
            }} className="mission-vision-card">
              <div style={{
                width: 54, height: 54, borderRadius: 12, background: "#eff6ff",
                border: "1px solid #bfdbfe", display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0, color: "#2563eb"
              }}>
                <EyeIcon />
              </div>
              <div>
                <h2 style={{ margin: "0 0 12px", fontSize: 20, fontWeight: 700, color: "#0f172a", fontFamily: "'Sora', sans-serif" }}>
                  Our <span style={{ color: "#2563eb" }}>Vision</span>
                </h2>
                <p style={{ margin: 0, color: "#475569", fontSize: 14.5, lineHeight: 1.75 }}>
                  To be the world's most trusted platform for digital identity and asset protection, enabling a safer and more transparent tomorrow.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="about-values-section" style={{ padding: "50px", background: "#ffffff", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div className="about-values-header" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 48 }}>
            <div style={{ flex: 1, height: 1, background: "#cbd5e1" }} />
            <h2 style={{
              margin: 0,
              fontSize: 24,
              fontWeight: 800,
              color: "#0f172a",
              whiteSpace: "nowrap",
              fontFamily: "'Sora', sans-serif",
              letterSpacing: "-0.5px"
            }}>
              Our Core <span style={{ color: "#22c55e" }}>Values</span>
            </h2>
            <div style={{ flex: 1, height: 1, background: "#cbd5e1" }} />
          </div>

          {/* 4 value columns with vertical dividers */}
          <div className="core-values-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px 0"
          }}>
            <style>{`
              .core-value-item {
                transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                cursor: pointer;
                border-radius: 12px;
              }
              .core-value-item:hover {
                transform: translateY(-8px);
                background-color: #f8fafc;
                box-shadow: 0 12px 20px -8px rgba(0, 0, 0, 0.05);
              }
              .core-value-icon-box {
                transition: all 0.35s ease;
              }
              .core-value-item:hover .core-value-icon-box {
                transform: scale(1.1);
                box-shadow: 0 6px 15px -4px rgba(0, 0, 0, 0.08);
              }
              .val-green:hover .core-value-icon-box {
                background-color: #22c55e !important;
                border-color: #22c55e !important;
                color: #ffffff !important;
              }
              .val-blue:hover .core-value-icon-box {
                background-color: #2563eb !important;
                border-color: #2563eb !important;
                color: #ffffff !important;
              }
              @media (max-width: 768px) {
                .about-values-section {
                  padding: 32px 16px !important;
                }
                .about-values-header {
                  margin-bottom: 24px !important;
                  gap: 12px !important;
                }
                .about-values-header h2 {
                  font-size: 20px !important;
                }
                .core-values-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                  gap: 0 !important;
                }
                .core-value-col {
                  border-right: 1.5px solid #e2e8f0 !important;
                  border-bottom: 1.5px solid #e2e8f0 !important;
                  padding: 18px 12px !important;
                }
                .core-value-col:nth-child(2n) {
                  border-right: none !important;
                }
                .core-value-col:nth-child(3),
                .core-value-col:nth-child(4) {
                  border-bottom: none !important;
                }
                .core-value-icon-box {
                  margin: 0 auto 10px !important;
                  width: 48px !important;
                  height: 48px !important;
                }
                .core-value-icon-box svg {
                  width: 18px !important;
                  height: 18px !important;
                }
                .core-value-col h3 {
                  font-size: 14.5px !important;
                  margin-bottom: 6px !important;
                }
                .core-value-col p {
                  font-size: 12.5px !important;
                  line-height: 1.5 !important;
                }
                .core-value-item:hover {
                  transform: none !important;
                  background-color: transparent !important;
                  box-shadow: none !important;
                }
                .val-green:hover .core-value-icon-box,
                .val-blue:hover .core-value-icon-box {
                  background-color: transparent !important;
                  color: inherit !important;
                  border-color: inherit !important;
                }
              }
            `}</style>
            {[
              { icon: <CheckIcon />, iconBg: "#f0fdf4", iconBorder: "#bbf7d0", iconColor: "#22c55e", label: "Integrity", desc: "We uphold honesty and transparency in everything we do." },
              { icon: <UsersIcon />, iconBg: "#eff6ff", iconBorder: "#bfdbfe", iconColor: "#2563eb", label: "Customer Focus", desc: "Our customers are at the heart of our innovation and decisions." },
              { icon: <BulbIcon />, iconBg: "#f0fdf4", iconBorder: "#bbf7d0", iconColor: "#22c55e", label: "Innovation", desc: "We continuously innovate to deliver smarter and more secure solutions." },
              { icon: <HandshakeIcon />, iconBg: "#eff6ff", iconBorder: "#bfdbfe", iconColor: "#2563eb", label: "Commitment", desc: "We are committed to quality, reliability, and long-term partnerships." },
            ].map(({ icon, iconBg, iconBorder, iconColor, label, desc }, index) => (
              <div key={label} style={{
                textAlign: "center",
                padding: "16px 28px",
                borderRight: index < 3 ? "1.5px solid #e2e8f0" : "none",
                boxSizing: "border-box"
              }} className={`core-value-col core-value-item ${iconColor === "#22c55e" ? "val-green" : "val-blue"}`}>
                <div style={{
                  width: 58, height: 58, borderRadius: "50%", background: iconBg,
                  border: `1.5px solid ${iconBorder}`,
                  color: iconColor,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 18px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
                }} className="core-value-icon-box">{icon}</div>
                <h3 style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 700, color: "#0f172a", fontFamily: "'Sora', sans-serif" }}>{label}</h3>
                <p style={{ margin: 0, color: "#475569", fontSize: 13.5, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section style={{ padding: "50px", background: "#f8fafc", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <h2 style={{ margin: "0 0 8px", fontSize: 28, fontWeight: 800, color: "#0f172a", fontFamily: "'Sora', sans-serif", letterSpacing: "-0.5px" }}>
              Leadership <span style={{ color: "#22c55e" }}>Team</span>
            </h2>
            <p style={{ margin: "0 auto", color: "#64748b", fontSize: 15, maxWidth: 600, lineHeight: 1.6 }}>
              Experienced leaders driving innovation, security, and trust at ScanForSafe.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20
          }} className="leader-grid">
            <style>{`
              .leader-card {
                border: 1.5px solid #dbeafe !important;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                display: flex;
                align-items: stretch;
                padding: 0 !important;
                overflow: hidden;
                gap: 20px !important;
                box-shadow: 0 10px 30px rgba(51, 109, 234, 0.1), 0 2px 10px rgba(0, 0, 0, 0.04) !important;
              }
              .leader-card:hover {
                transform: translateY(-5px);
                // border-width: 0.5px !important;
                // border-color: #2563eb !important;
                box-shadow: 0 20px 40px rgba(37, 99, 235, 0.2), 0 4px 15px rgba(0, 0, 0, 0.06) !important;
              }
              .leader-card-image-wrapper {
                width: 240px;
                height: auto;
                align-self: stretch;
                position: relative;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                background: #f1f5f9;
              }
              .leader-card-info {
                padding: 32px 32px 32px 0 !important;
              }
              .leader-card-info ul {
                padding-left: 20px !important;
                list-style-type: disc !important;
              }
              @media (max-width: 1024px) {
                .leader-grid {
                  grid-template-columns: 1fr !important;
                }
              }
              @media (max-width: 550px) {
                .leader-card {
                  flex-direction: column !important;
                  align-items: center !important;
                  padding: 24px !important;
                }
                .leader-card-image-wrapper {
                  width: 220px !important;
                  height: 260px !important;
                  align-self: auto !important;
                  border-radius: 12px !important;
                }
                .leader-card-info {
                  align-items: center !important;
                  text-align: center !important;
                  display: flex !important;
                  flex-direction: column !important;
                  padding: 12px 0 0 0 !important;
                }
                .leader-card-info ul {
                  padding-left: 20px !important;
                  list-style-type: disc !important;
                  align-self: flex-start !important;
                  text-align: left !important;
                }
              }
            `}</style>
            
            {/* Sudharani M */}
            <div style={{
              background: "#ffffff",
              borderRadius: 16,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.03)",
              display: "flex",
              gap: 28
            }} className="leader-card">
              {/* Image Frame Placeholder */}
              <div className="leader-card-image-wrapper">
                <div style={{ position: "absolute", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span style={{ fontSize: 9, color: "#94a3b8", marginTop: 6, fontWeight: 600, letterSpacing: "1px" }}>PHOTO</span>
                </div>
                <img 
                  src="/Sudharani.png" 
                  alt="Sudharani M" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    zIndex: 2
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ flex: 1 }} className="leader-card-info">
                <h3 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700, color: "#0f172a", fontFamily: "'Sora', sans-serif" }}>Sudharani M</h3>
                <div style={{ color: "#22c55e", fontWeight: 700, fontSize: 13.5, textTransform: "uppercase", letterSpacing: "1px" }}>Director</div>
                
                {/* Qualifications List */}
                <ul style={{ margin: "12px 0 14px 0", paddingLeft: 18, color: "#334155", fontSize: 13.5, lineHeight: 1.6 }}>
                  {["MBA", "PG Diploma in Computer Applications"].map(q => (
                    <li key={q} style={{ marginBottom: 4 }}>{q}</li>
                  ))}
                </ul>

                {/* Green Accent Line */}
                <div style={{ width: 48, height: 3, backgroundColor: "#22c55e", margin: "14px 0 16px 0", borderRadius: 2 }} />

                <p style={{ margin: 0, color: "#475569", fontSize: 13.5, lineHeight: 1.7 }}>
                  Experienced in business operations, customer engagement, and strategic planning. Passionate about delivering solutions that make the world safer and more connected.
                </p>
              </div>
            </div>

            {/* Sailajeswari devi M */}
            <div style={{
              background: "#ffffff",
              borderRadius: 16,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.03)",
              display: "flex",
              gap: 28
            }} className="leader-card">
              {/* Image Frame Placeholder */}
              <div className="leader-card-image-wrapper">
                <div style={{ position: "absolute", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span style={{ fontSize: 9, color: "#94a3b8", marginTop: 6, fontWeight: 600, letterSpacing: "1px" }}>PHOTO</span>
                </div>
                <img 
                  src="/Sailajeswari.png" 
                  alt="Sailajeswari devi M" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    zIndex: 2
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ flex: 1 }} className="leader-card-info">
                <h3 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700, color: "#0f172a", fontFamily: "'Sora', sans-serif" }}>Sailajeswari devi M</h3>
                <div style={{ color: "#22c55e", fontWeight: 700, fontSize: 13.5, textTransform: "uppercase", letterSpacing: "1px" }}>Director</div>
                
                {/* Qualifications List */}
                <ul style={{ margin: "12px 0 14px 0", paddingLeft: 18, color: "#334155", fontSize: 13.5, lineHeight: 1.6 }}>
                  {["MA Economics", "PG Diploma in Computer Applications"].map(q => (
                    <li key={q} style={{ marginBottom: 4 }}>{q}</li>
                  ))}
                </ul>

                {/* Green Accent Line */}
                <div style={{ width: 48, height: 3, backgroundColor: "#22c55e", margin: "14px 0 16px 0", borderRadius: 2 }} />

                <p style={{ margin: 0, color: "#475569", fontSize: 13.5, lineHeight: 1.7 }}>
                  Specialized in finance, administration, and business development. Focused on building sustainable growth and strong relationships.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY WE EXIST ── */}
      <section style={{ padding: "0px 50px", background: "#f8fafc", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
          background: "#f3f5f4",
          borderRadius: 16,
          border: "1px solid #b3e8c5",
          boxShadow: "0 10px 25px -10px rgba(34, 197, 94, 0.08)",
          padding: "36px 40px",
          display: "flex",
          alignItems: "center",
          gap: 28,
          position: "relative",
          overflow: "hidden"
        }} className="why-exist-container">
          <style>{`
            @media (max-width: 600px) {
              .why-exist-container {
                flex-direction: column;
                text-align: center;
                align-items: center;
                padding: 32px 24px;
              }
            }
          `}</style>
          
          {/* Faint watermark shield on the right */}
          <div style={{
            position: "absolute",
            right: -20,
            bottom: -20,
            opacity: 0.04,
            pointerEvents: "none",
            color: "#22c55e"
          }}>
            <svg width="220" height="220" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>

          <div style={{
            width: 58, height: 58, borderRadius: 14, background: "#dcfce7",
            border: "1px solid #bbf7d0",
            display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center",
            color: "#16a34a", flexShrink: 0
          }}>
            <PeopleIcon color="#16a34a" />
          </div>

          <div style={{ zIndex: 1, position: "relative" }}>
            <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700, color: "#181918", fontFamily: "'Sora', sans-serif" }}>Why We Exist</h3>
            <p style={{ margin: 0, color: "#0d0e0e", fontSize: 14.5, lineHeight: 1.7 }}>
              We believe security is not just a feature, it's a promise. ScanForSafe was created to empower individuals and organizations with smart, simple, and secure technology that protects, connects, and gives peace of mind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}