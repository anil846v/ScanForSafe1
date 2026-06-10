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

// ── Icons ────────────────────────────────────────────────────────────────
const ShieldCheckIcon = ({ size = 20, color = "#22C55E" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const RefreshCwIcon = ({ size = 20, color = "#22C55E" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
  </svg>
);
const LockIcon = ({ size = 20, color = "#22C55E" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
);
const TargetIcon = ({ size = 44, color = "#22C55E" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    <line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/>
    <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
  </svg>
);
const EyeIcon = ({ size = 44, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IntegrityIcon = ({ size = 38, color = "#22C55E" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const CustomerFocusIcon = ({ size = 38, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const InnovationIcon = ({ size = 38, color = "#22C55E" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"/>
  </svg>
);
const CommitmentIcon = ({ size = 38, color = "#3B82F6" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);
const UsersStatIcon = ({ color = "#22C55E" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const GlobeIcon = ({ color = "#3B82F6" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
  </svg>
);
const ShieldStatIcon = ({ color = "#EAB308" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const HeadsetIcon = ({ color = "#8B5CF6" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0118 0v6"/>
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z"/>
    <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
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
      width: size, height: size, borderRadius: 14, flexShrink: 0,
      border: `2px solid ${borderColor}`,
      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
      background: "linear-gradient(135deg, #0d1b2a, #1a2f4a)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 4,
      overflow: "hidden",
    }}>
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      ) : (
        <>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "rgba(34,197,94,0.15)",
            border: `2px solid ${color}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color, fontWeight: 900, fontSize: 20 }}>{initials}</span>
          </div>
          <div style={{ width: 28, height: 2, background: color, borderRadius: 2, marginTop: 6 }}/>
        </>
      )}
    </div>
  );
};

// ── NAVBAR ────────────────────────────────────────────────────────────────
const Navbar = ({ isMobile }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "How It Works", "Features", "Solutions", "About Us", "Contact Us"];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#060d1a",
      borderBottom: "1px solid rgba(34,197,94,0.15)",
    }}>
      <div style={{
        padding: isMobile ? "0 20px" : "0 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: isMobile ? 56 : 64,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ScanForSafeLogo />
          <span style={{ color: "#fff", fontWeight: 800, fontSize: isMobile ? 15 : 18, letterSpacing: "-0.3px" }}>
            Scan<span style={{ color: "#22C55E" }}>For</span>Safe
          </span>
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navLinks.map(item => (
              <a key={item} href="#" style={{
                color: item === "About Us" ? "#22C55E" : "#94a3b8",
                fontSize: 14, fontWeight: item === "About Us" ? 600 : 500,
                textDecoration: "none",
                borderBottom: item === "About Us" ? "2px solid #22C55E" : "none",
                paddingBottom: item === "About Us" ? 2 : 0,
              }}>{item}</a>
            ))}
          </div>
        )}

        {/* Desktop CTA / Mobile hamburger */}
        {!isMobile ? (
          <button style={{
            background: "transparent", border: "1.5px solid #22C55E",
            color: "#22C55E", padding: "8px 22px",
            borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer",
          }}>Get in Touch</button>
        ) : (
          <button
            onClick={() => setMenuOpen(v => !v)}
            style={{ background: "transparent", border: "none", cursor: "pointer", padding: 4 }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          background: "#0a1628",
          borderTop: "1px solid rgba(34,197,94,0.12)",
          padding: "16px 20px 20px",
        }}>
          {navLinks.map(item => (
            <a key={item} href="#" style={{
              display: "block",
              color: item === "About Us" ? "#22C55E" : "#94a3b8",
              fontSize: 15, fontWeight: item === "About Us" ? 700 : 500,
              textDecoration: "none",
              padding: "11px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>{item}</a>
          ))}
          <button style={{
            marginTop: 16, width: "100%",
            background: "transparent", border: "1.5px solid #22C55E",
            color: "#22C55E", padding: "11px 0",
            borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer",
          }}>Get in Touch</button>
        </div>
      )}
    </nav>
  );
};

// ── MAIN COMPONENT ────────────────────────────────────────────────────────
export default function AboutUs() {
  const isMobile = useIsMobile();
  const px = isMobile ? "20px" : "56px";
  const sectionPy = isMobile ? "48px" : "72px";

  return (
    <div style={{
      fontFamily: "'Inter','Segoe UI',system-ui,sans-serif",
      color: "#111827", background: "#fff", margin: 0, padding: 0, overflowX: "hidden",
    }}>

      {/* ── NAVBAR ── */}
      <Navbar isMobile={isMobile} />

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: "3px solid #22C55E",
        background: "linear-gradient(135deg, #050c18 0%, #071220 40%, #0a1a2e 70%, #061525 100%)",
        minHeight: isMobile ? "auto" : 540,
        display: "flex",
        alignItems: "center",
      }}>
        {/* Ambient glow orbs */}
        <div style={{
          position: "absolute", left: -120, top: -80, width: 480, height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}/>
        <div style={{
          position: "absolute", right: "10%", bottom: -100, width: 520, height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}/>

        {/* Subtle grid lines texture */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.025, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}/>

        {/* Green bottom glow line */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent 0%, #22C55E 30%, #22C55E 70%, transparent 100%)",
          boxShadow: "0 0 24px rgba(34,197,94,0.6)",
        }}/>

        {/* Inner layout */}
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          padding: isMobile ? "48px 20px 44px" : "60px 72px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: isMobile ? 36 : 0,
          boxSizing: "border-box",
        }}>

          {/* LEFT: Text */}
          <div style={{
            flex: isMobile ? "none" : "0 0 52%",
            width: isMobile ? "100%" : "52%",
            zIndex: 2,
          }}>
            {/* ABOUT US pill */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20, alignSelf: "flex-start",
              background: "rgba(34,197,94,0.10)",
              border: "1.5px solid rgba(34,197,94,0.35)",
              borderRadius: 20, padding: "5px 16px 5px 10px",
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E", flexShrink: 0 }}/>
              <span style={{ color: "#22C55E", fontSize: 10, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase" }}>About Us</span>
            </div>

            {/* Headline */}
            <h1 style={{
              margin: "0 0 14px",
              fontSize: isMobile ? 30 : 48,
              fontWeight: 900, color: "#ffffff",
              lineHeight: 1.1, letterSpacing: "-1px",
            }}>
              Building a Safer,<br />
              Connected{" "}
              <span style={{ color: "#22C55E", textShadow: "0 0 32px rgba(34,197,94,0.45)" }}>World</span>
            </h1>

            {/* Green accent bar */}
            <div style={{
              width: 52, height: 3.5,
              background: "linear-gradient(90deg,#22C55E,#86efac)",
              borderRadius: 2, marginBottom: 18,
            }}/>

            <p style={{
              margin: "0 0 32px",
              color: "#8fa3bc", fontSize: isMobile ? 14 : 15.5,
              lineHeight: 1.8, fontWeight: 400,
              maxWidth: isMobile ? "100%" : 430,
            }}>
              ScanForSafe is on a mission to help individuals and organizations protect what matters most using smart QR technology and secure digital solutions.
            </p>

            {/* Feature badges */}
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
              gap: isMobile ? 8 : 10,
              maxWidth: isMobile ? "100%" : 460,
            }}>
              {[
                { icon: <ShieldCheckIcon size={14} color="#22C55E" />, title: "Secure", desc: "Security at every layer" },
                { icon: <RefreshCwIcon size={14} color="#22C55E" />, title: "Reliable", desc: "Solutions you can count on" },
                { icon: <LockIcon size={14} color="#22C55E" />, title: "Privacy First", desc: "Your data is protected" },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{
                  display: "flex", alignItems: "center", gap: 9,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(34,197,94,0.18)",
                  borderRadius: 10, padding: "10px 12px",
                  backdropFilter: "blur(8px)",
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 7,
                    background: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.28)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>{icon}</div>
                  <div>
                    <div style={{ color: "#e2e8f0", fontSize: 11.5, fontWeight: 700, marginBottom: 2 }}>{title}</div>
                    <div style={{ color: "#4e6a80", fontSize: 10, lineHeight: 1.3 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Logo image — properly fitted, centered, with glow */}
          <div style={{
            flex: isMobile ? "none" : "0 0 48%",
            width: isMobile ? "100%" : "48%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}>
            {/* Glow ring behind logo */}
            <div style={{
              position: "absolute",
              width: isMobile ? 220 : 340,
              height: isMobile ? 220 : 340,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(34,197,94,0.10) 0%, rgba(59,130,246,0.06) 50%, transparent 75%)",
              filter: "blur(24px)",
            }}/>
            <img
              src="/aboutus.png"
              alt="ScanForSafe Logo"
              style={{
                width: isMobile ? "78%" : "88%",
                maxWidth: isMobile ? 300 : 460,
                height: "auto",
                objectFit: "contain",
                display: "block",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 8px 40px rgba(34,197,94,0.18)) drop-shadow(0 4px 20px rgba(59,130,246,0.15))",
              }}
            />
          </div>

        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{
        padding: `${sectionPy} ${px}`,
        background: "linear-gradient(180deg, #f0fdf4 0%, #f8fafc 100%)",
        borderBottom: "2px solid #e5e7eb",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 16 : 28,
          }}>
            {[
              {
                icon: <TargetIcon size={isMobile ? 36 : 42} color="#22C55E" />,
                title: "Mission", titleColor: "#22C55E",
                iconBg: "linear-gradient(135deg,#f0fdf4,#dcfce7)", iconBorder: "#bbf7d0",
                cardBorder: "#d1fae5", topBar: "linear-gradient(90deg,#22C55E,#86efac)",
                shadow: "rgba(34,197,94,0.08)", bottomBar: "#22C55E",
                text: "To empower people and businesses with innovative, easy-to-use, and reliable solutions that enhance security, build trust, and create peace of mind — wherever they are in the world.",
              },
              {
                icon: <EyeIcon size={isMobile ? 36 : 42} color="#3B82F6" />,
                title: "Vision", titleColor: "#3B82F6",
                iconBg: "linear-gradient(135deg,#eff6ff,#dbeafe)", iconBorder: "#bfdbfe",
                cardBorder: "#dbeafe", topBar: "linear-gradient(90deg,#3B82F6,#93c5fd)",
                shadow: "rgba(59,130,246,0.08)", bottomBar: "#3B82F6",
                text: "To be the world's most trusted platform for digital identity and asset protection, enabling a safer and more transparent tomorrow for individuals and enterprises alike.",
              },
            ].map(({ icon, title, titleColor, iconBg, iconBorder, cardBorder, topBar, shadow, bottomBar, text }) => (
              <div key={title} style={{
                background: "#fff", borderRadius: 18,
                padding: isMobile ? "24px 20px 28px" : "36px 32px 40px",
                border: `2px solid ${cardBorder}`,
                boxShadow: `0 4px 24px ${shadow}, 0 1px 4px rgba(0,0,0,0.05)`,
                display: "flex", gap: isMobile ? 16 : 22, alignItems: "flex-start",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: topBar }}/>
                <div style={{ position: "absolute", bottom: 0, left: isMobile ? 20 : 32, width: 44, height: 3.5, background: bottomBar, borderRadius: 2 }}/>
                <div style={{
                  width: isMobile ? 60 : 76, height: isMobile ? 60 : 76,
                  borderRadius: 14, flexShrink: 0,
                  background: iconBg, border: `2px solid ${iconBorder}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 2px 12px ${shadow}`,
                }}>{icon}</div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ margin: "0 0 12px", fontSize: isMobile ? 18 : 22, fontWeight: 900, color: "#111827" }}>
                    Our <span style={{ color: titleColor }}>{title}</span>
                  </h2>
                  <p style={{ margin: 0, color: "#374151", fontSize: isMobile ? 13.5 : 15, lineHeight: 1.85 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section style={{
        padding: `${sectionPy} ${px}`,
        background: "#fff",
        borderBottom: "2px solid #e5e7eb",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 32 : 52 }}>
            <GreenDivider />
            <h2 style={{ margin: "0 0 10px", fontSize: isMobile ? 26 : 32, fontWeight: 900, color: "#111827" }}>
              Our Core <span style={{ color: "#22C55E" }}>Values</span>
            </h2>
            <p style={{ margin: 0, color: "#6b7280", fontSize: isMobile ? 13.5 : 15, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
              The principles that guide every decision, product, and partnership we build.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: isMobile ? 12 : 22,
          }}>
            {[
              { icon: <IntegrityIcon size={isMobile ? 30 : 38} color="#22C55E" />, label: "Integrity", iconBg: "linear-gradient(135deg,#f0fdf4,#dcfce7)", iconBorder: "#bbf7d0", iconShadow: "rgba(34,197,94,0.15)", topBar: "#22C55E", desc: "We uphold honesty and transparency in everything we do, building trust at every touchpoint." },
              { icon: <CustomerFocusIcon size={isMobile ? 30 : 38} color="#3B82F6" />, label: "Customer Focus", iconBg: "linear-gradient(135deg,#eff6ff,#dbeafe)", iconBorder: "#bfdbfe", iconShadow: "rgba(59,130,246,0.15)", topBar: "#3B82F6", desc: "Our customers are at the heart of every innovation, decision, and feature we ship." },
              { icon: <InnovationIcon size={isMobile ? 30 : 38} color="#22C55E" />, label: "Innovation", iconBg: "linear-gradient(135deg,#f0fdf4,#dcfce7)", iconBorder: "#bbf7d0", iconShadow: "rgba(34,197,94,0.15)", topBar: "#22C55E", desc: "We continuously evolve our platform to deliver smarter, faster, and more secure solutions." },
              { icon: <CommitmentIcon size={isMobile ? 30 : 38} color="#3B82F6" />, label: "Commitment", iconBg: "linear-gradient(135deg,#eff6ff,#dbeafe)", iconBorder: "#bfdbfe", iconShadow: "rgba(59,130,246,0.15)", topBar: "#3B82F6", desc: "We are committed to quality, reliability, and long-term partnerships that grow with you." },
            ].map(({ icon, label, iconBg, iconBorder, iconShadow, topBar, desc }) => (
              <div key={label} style={{
                textAlign: "center",
                padding: isMobile ? "24px 14px 20px" : "36px 22px 30px",
                background: "#fff", borderRadius: 16,
                border: "2px solid #e5e7eb",
                boxShadow: "0 2px 14px rgba(0,0,0,0.06)",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: topBar }}/>
                <div style={{
                  width: isMobile ? 54 : 68, height: isMobile ? 54 : 68,
                  borderRadius: "50%", background: iconBg, border: `2px solid ${iconBorder}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 14px",
                  boxShadow: `0 4px 14px ${iconShadow}`,
                }}>{icon}</div>
                <h3 style={{ margin: "0 0 8px", fontSize: isMobile ? 13 : 15.5, fontWeight: 800, color: "#111827" }}>{label}</h3>
                <p style={{ margin: 0, color: "#6b7280", fontSize: isMobile ? 12 : 13.5, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ── */}
      <section style={{
        padding: `${sectionPy} ${px}`,
        background: "linear-gradient(180deg,#f8fafc,#f0fdf4 100%)",
        borderBottom: "2px solid #e5e7eb",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 28 : 48 }}>
            <GreenDivider />
            <h2 style={{ margin: "0 0 10px", fontSize: isMobile ? 26 : 32, fontWeight: 900, color: "#111827" }}>
              Leadership <span style={{ color: "#22C55E" }}>Team</span>
            </h2>
            <p style={{ margin: 0, color: "#6b7280", fontSize: isMobile ? 13.5 : 15 }}>
              Experienced leaders driving innovation and trust at ScanForSafe.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 16 : 28,
          }}>
            {[
              {
                name: "Sudharani M", role: "Director", photo: "/sudharani.jpg",
                color: "#22C55E", borderColor: "#d1fae5", topBar: "#22C55E",
                shadow: "rgba(34,197,94,0.08)",
                quals: ["MBA", "PG Diploma in Computer Applications"],
                desc: "Experienced in business operations, customer engagement, and strategic planning. Passionate about delivering solutions that make the world safer and more connected."
              },
              {
                name: "Sailajeswari devi M", role: "Director", photo: "/sailajeswari.jpg",
                color: "#22C55E", borderColor: "#d1fae5", topBar: "#22C55E",
                shadow: "rgba(34,197,94,0.08)",
                quals: ["MA Economics", "PG Diploma in Computer Applications"],
                desc: "Specialized in finance, administration, and business development. Focused on building sustainable growth and strong partnerships."
              }
            ].map(({ name, role, photo, color, borderColor, topBar, shadow, quals, desc }) => (
              <div key={name} style={{
                background: "#fff", borderRadius: 18,
                padding: isMobile ? "20px" : "28px",
                border: `2px solid ${borderColor}`,
                boxShadow: `0 4px 24px ${shadow}, 0 1px 4px rgba(0,0,0,0.05)`,
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 16 : 22,
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg,${topBar},#86efac)` }}/>
                {isMobile ? (
                  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <LeaderAvatar src={photo} name={name} size={90} color={color} borderColor={borderColor} />
                    <div>
                      <h3 style={{ margin: "0 0 3px", fontSize: 16, fontWeight: 900, color: "#111827" }}>{name}</h3>
                      <div style={{ color, fontWeight: 700, fontSize: 13 }}>{role}</div>
                    </div>
                  </div>
                ) : (
                  <LeaderAvatar src={photo} name={name} size={128} color={color} borderColor={borderColor} />
                )}
                <div style={{ flex: 1, paddingTop: isMobile ? 0 : 4 }}>
                  {!isMobile && (
                    <>
                      <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 900, color: "#111827" }}>{name}</h3>
                      <div style={{ color, fontWeight: 700, fontSize: 13.5, marginBottom: 14 }}>{role}</div>
                    </>
                  )}
                  <div style={{ marginBottom: 12, marginTop: isMobile ? 12 : 0 }}>
                    {quals.map(q => (
                      <div key={q} style={{ display: "flex", alignItems: "center", gap: 8, color: "#374151", fontSize: 13, marginBottom: 5, fontWeight: 500 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, flexShrink: 0 }}/>
                        {q}
                      </div>
                    ))}
                  </div>
                  <div style={{ width: 32, height: 3, background: color, borderRadius: 2, marginBottom: 12 }}/>
                  <p style={{ margin: 0, color: "#4b5563", fontSize: 13, lineHeight: 1.8 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WE EXIST ── */}
      <section style={{
        padding: isMobile ? "40px 20px 48px" : "52px 56px 64px",
        background: "linear-gradient(180deg,#f0fdf4,#f8fafc)",
        borderBottom: "2px solid #e5e7eb",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            background: "#fff",
            borderRadius: 18,
            padding: isMobile ? "24px 20px" : "36px 40px",
            border: "2px solid #d1fae5",
            boxShadow: "0 4px 28px rgba(34,197,94,0.09), 0 1px 4px rgba(0,0,0,0.05)",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 16 : 28,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,#22C55E,#86efac,transparent)" }}/>
            {!isMobile && (
              <div style={{ position: "absolute", right: 48, top: "50%", transform: "translateY(-50%)", opacity: 0.06, pointerEvents: "none" }}>
                <svg width="140" height="140" viewBox="0 0 44 44">
                  <path d="M22 2L4 9v12c0 10.5 7.7 20.3 18 22.8C32.3 41.3 40 31.5 40 21V9L22 2z" fill="#22C55E"/>
                </svg>
              </div>
            )}
            <div style={{
              width: isMobile ? 52 : 64, height: isMobile ? 52 : 64,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#22C55E,#16a34a)",
              flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 18px rgba(34,197,94,0.35)",
              border: "3px solid #86efac",
            }}>
              <PeopleIcon size={isMobile ? 22 : 28} color="#fff" />
            </div>
            <div style={{ zIndex: 1 }}>
              <h3 style={{ margin: "0 0 10px", fontSize: isMobile ? 17 : 20, fontWeight: 900, color: "#111827" }}>Why We Exist</h3>
              <p style={{ margin: 0, color: "#374151", fontSize: isMobile ? 13.5 : 15, lineHeight: 1.85, maxWidth: 760 }}>
                We believe security is not just a feature — it's a promise. ScanForSafe was created to empower individuals and organizations with smart, simple, and secure technology that protects, connects, and gives peace of mind. Because in a digital world,{" "}
                <strong style={{ color: "#111827", fontWeight: 700 }}>trust is everything.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{
        background: "#060d1a",
        padding: isMobile ? "36px 20px" : "44px 56px",
        borderTop: "3px solid #22C55E",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: isMobile ? 12 : 20,
        }}>
          {[
            { icon: <UsersStatIcon color="#22C55E" />, value: "10K+", label: "Happy Customers", valueColor: "#22C55E", border: "rgba(34,197,94,0.25)", iconBg: "rgba(34,197,94,0.10)" },
            { icon: <GlobeIcon color="#3B82F6" />, value: "50+", label: "Countries Served", valueColor: "#3B82F6", border: "rgba(59,130,246,0.25)", iconBg: "rgba(59,130,246,0.10)" },
            { icon: <ShieldStatIcon color="#EAB308" />, value: "99.9%", label: "Trust & Reliability", valueColor: "#EAB308", border: "rgba(234,179,8,0.25)", iconBg: "rgba(234,179,8,0.10)" },
            { icon: <HeadsetIcon color="#8B5CF6" />, value: "24/7", label: "Customer Support", valueColor: "#8B5CF6", border: "rgba(139,92,246,0.25)", iconBg: "rgba(139,92,246,0.10)" },
          ].map(({ icon, value, label, valueColor, border, iconBg }) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: isMobile ? 12 : 18,
              background: "rgba(255,255,255,0.04)",
              border: `1.5px solid ${border}`,
              borderRadius: 14, padding: isMobile ? "16px 14px" : "22px 24px",
            }}>
              <div style={{
                width: isMobile ? 42 : 54, height: isMobile ? 42 : 54,
                borderRadius: 12, background: iconBg,
                border: `1.5px solid ${border}`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>{icon}</div>
              <div>
                <div style={{ color: valueColor, fontWeight: 900, fontSize: isMobile ? 20 : 28, lineHeight: 1, letterSpacing: "-0.5px" }}>{value}</div>
                <div style={{ color: "#94a3b8", fontSize: isMobile ? 11 : 13, marginTop: 4, fontWeight: 500 }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}