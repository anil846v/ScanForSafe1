import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// ── TICKER DATA ──────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  { type: "feature",   icon: "📷",  text: "QR + NFC Enabled" },
  { type: "feature",   icon: "📵",  text: "No App Required" },
  { type: "feature",   icon: "💧",  text: "Waterproof Tags" },
  { type: "feature",   icon: "🚨",  text: "Secure Emergency Access" },
  { type: "launch",    icon: "🚀",  text: "Pre-launch is now open, and the official launch starts in July." },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home",        to: "/" },
    { label: "Features",   to: "/features" },
    { label: "Use Cases",  to: "/use-cases" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Franchise",  to: "/franchise" },
    { label: "Contact",    to: "/contact" },
  ];

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const handlePreRegistration = () => {
    setMobileOpen(false);
    navigate("/qr-form");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        body {
          margin: 0;
          overflow-x: hidden;
        }

        /* ═══════════════════════════════════════
           ROOT
        ═══════════════════════════════════════ */
        .sfs-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* ═══════════════════════════════════════
           TICKER BAR
        ═══════════════════════════════════════ */
        .sfs-ticker-bar {
          height: 32px;
          background: linear-gradient(
            90deg,
            #052e16 0%,
            #064e3b 40%,
            #065f46 60%,
            #064e3b 80%,
            #052e16 100%
          );
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .sfs-ticker-label {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 22px 0 14px;
          height: 100%;
          background: #16a34a;
          flex-shrink: 0;
          z-index: 3;
          clip-path: polygon(
            0 0, calc(100% - 10px) 0,
            100% 50%, calc(100% - 10px) 100%, 0 100%
          );
        }

        .sfs-ticker-label-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          animation: sfs-blink 1.6s ease-in-out infinite;
        }

        .sfs-ticker-label-text {
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #fff;
          white-space: nowrap;
        }

        .sfs-ticker-track {
          flex: 1;
          overflow: hidden;
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .sfs-ticker-belt {
          display: flex;
          align-items: center;
          white-space: nowrap;
          will-change: transform;
          animation: sfs-marquee 30s linear infinite;
        }

        .sfs-ticker-belt:hover { animation-play-state: paused; }

        @keyframes sfs-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }

        .sfs-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 0 26px;
          border-right: 1px solid rgba(255,255,255,.08);
          flex-shrink: 0;
        }

        /* ── special highlight for launch item ── */
        .sfs-ticker-item[data-type="launch"] .sfs-ticker-text {
          color: #86efac;
          font-size: 11.5px;
        }
        .sfs-ticker-item[data-type="launch"] {
          padding: 0 30px;
          border-right: 1px solid rgba(134,239,172,.18);
        }

        .sfs-ticker-icon { font-size: 11px; line-height: 1; }

        .sfs-ticker-text {
          font-size: 11px;
          font-weight: 700;
          color: #fcd34d;
          letter-spacing: .02em;
        }

        /* ═══════════════════════════════════════
           TOPBAR LINE
        ═══════════════════════════════════════ */
        .sfs-topbar {
          height: 2px;
          background: linear-gradient(
            90deg,
            #064e3b 0%, #16a34a 30%, #4ade80 50%, #16a34a 70%, #064e3b 100%
          );
          background-size: 200% 100%;
          animation: sfs-shimmer-line 4s linear infinite;
        }

        @keyframes sfs-shimmer-line {
          0%   { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        /* ═══════════════════════════════════════
           MAIN BAR
        ═══════════════════════════════════════ */
        .sfs-bar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(226,232,240,.9);
          transition: height .35s ease, box-shadow .35s ease;
          box-shadow: 0 1px 0 rgba(0,0,0,.04);
        }

        .sfs-nav.scrolled .sfs-bar {
          height: 60px;
          box-shadow:
            0 6px 30px rgba(6,78,59,.09),
            0 1px 0 rgba(0,0,0,.04);
        }

        /* ═══════════════════════════════════════
           LOGO WRAPPER
        ═══════════════════════════════════════ */
        .sfs-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* Badge container – handles size transition */
        .sfs-badge-wrap {
          position: relative;
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          transition: width .35s ease, height .35s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sfs-nav.scrolled .sfs-badge-wrap { width: 44px; height: 44px; }

        /* Logo image – no glow, no shadow */
        .sfs-logo-img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: contain;
          animation: logoFloat 4s ease-in-out infinite;
          transition: transform .3s ease;
        }

        @keyframes logoFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-2px); }
        }

        /* ── Corner bracket edges (matching logo style) ── */
        .sfs-logo-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          z-index: 3;
          pointer-events: none;
          transition: opacity .3s ease;
        }

        /* top-left */
        .sfs-logo-corner.tl {
          top: -3px; left: -3px;
          border-top: 2px solid #22c55e;
          border-left: 2px solid #22c55e;
          border-radius: 2px 0 0 0;
        }
        /* top-right */
        .sfs-logo-corner.tr {
          top: -3px; right: -3px;
          border-top: 2px solid #22c55e;
          border-right: 2px solid #22c55e;
          border-radius: 0 2px 0 0;
        }
        /* bottom-left */
        .sfs-logo-corner.bl {
          bottom: -3px; left: -3px;
          border-bottom: 2px solid #22c55e;
          border-left: 2px solid #22c55e;
          border-radius: 0 0 0 2px;
        }
        /* bottom-right */
        .sfs-logo-corner.br {
          bottom: -3px; right: -3px;
          border-bottom: 2px solid #22c55e;
          border-right: 2px solid #22c55e;
          border-radius: 0 0 2px 0;
        }

        /* Corners pulse on hover */
        .sfs-logo:hover .sfs-logo-corner {
          border-color: #4ade80;
          filter: drop-shadow(0 0 4px rgba(74,222,128,.7));
        }

        /* ── Scanner line ── */
        .sfs-scanner-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          z-index: 4;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(74,222,128,.6) 20%,
            #86efac 50%,
            rgba(74,222,128,.6) 80%,
            transparent 100%
          );
          box-shadow:
            0 0 6px 1px rgba(74,222,128,.55),
            0 0 14px 2px rgba(34,197,94,.3);
          border-radius: 999px;
          animation: sfs-scan 2.2s ease-in-out infinite;
        }

        /* thin trailing glow below the line */
        .sfs-scanner-line::after {
          content: "";
          position: absolute;
          left: 10%;
          right: 10%;
          top: 2px;
          height: 6px;
          background: linear-gradient(
            180deg,
            rgba(74,222,128,.18) 0%,
            transparent 100%
          );
          border-radius: 0 0 4px 4px;
        }

        @keyframes sfs-scan {
          0%   { top: 8%;  opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 88%; opacity: 0; }
        }

        /* ═══════════════════════════════════════
           WORDMARK
        ═══════════════════════════════════════ */
        .sfs-wordmark {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 3px;
        }

        .sfs-wordmark-row1 {
          display: flex;
          align-items: center;
          gap: 8px;
          line-height: 1;
        }

        .sfs-wordmark-primary {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: -.03em;
          line-height: 1;
          color: #0f172a;
          white-space: nowrap;
        }

        .sfs-wordmark-primary .accent {
          background: linear-gradient(135deg, #16a34a 0%, #059669 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sfs-status {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #f0fdf4;
          border: 1px solid rgba(22,163,74,.25);
          border-radius: 999px;
          padding: 2px 7px;
          flex-shrink: 0;
        }

        .sfs-status-pulse {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #16a34a;
          animation: sfs-blink 2.2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes sfs-blink {
          0%,100% { opacity: .4; transform: scale(.8); }
          50%      { opacity: 1; transform: scale(1.2); }
        }

        .sfs-status-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #15803d;
        }

        .sfs-wordmark-secondary {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .05em;
          color: #94a3b8;
          text-transform: uppercase;
          line-height: 1;
          white-space: nowrap;
        }

        /* ═══════════════════════════════════════
           NAV LINKS
        ═══════════════════════════════════════ */
        .sfs-links {
          display: flex;
          align-items: center;
          margin-left: auto;
          margin-right: 20px;
        }

        .sfs-link {
          position: relative;
          padding: 8px 14px;
          border-radius: 10px;
          text-decoration: none;
          color: #475569;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .01em;
          transition: color .2s ease, background .2s ease;
        }

        .sfs-link:hover {
          color: #15803d;
          background: rgba(220,252,231,.6);
        }

        .sfs-link.active { color: #15803d; }

        .sfs-link.active::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 4px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #16a34a, #4ade80);
        }

        /* ═══════════════════════════════════════
           ACTIONS
        ═══════════════════════════════════════ */
        .sfs-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sfs-login {
          height: 40px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          color: #15803d;
          border: 1.5px solid rgba(22,163,74,.3);
          background: transparent;
          transition: all .22s ease;
        }

        .sfs-login:hover {
          background: #e8f8eb;
          border-color: rgba(46,189,58,.65);
          transform: translateY(-1px);
        }

        .sfs-prereg {
          height: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 22px;
          border-radius: 10px;
          background: #16a34a;
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .01em;
          box-shadow:
            0 1px 0 rgba(0,0,0,.12),
            0 4px 16px rgba(22,163,74,.3);
          transition: all .22s ease;
          white-space: nowrap;
        }

        .sfs-prereg:hover {
          background: #15803d;
          transform: translateY(-1px);
          box-shadow:
            0 1px 0 rgba(0,0,0,.12),
            0 8px 24px rgba(22,163,74,.38);
        }

        .prereg-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #86efac;
          flex-shrink: 0;
          animation: sfs-blink 1.8s ease-in-out infinite;
        }

        /* ═══════════════════════════════════════
           MOBILE
        ═══════════════════════════════════════ */
        .sfs-mobile-btn {
          display: none;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(22,163,74,.2);
          border-radius: 10px;
          background: #f0fdf4;
          cursor: pointer;
          font-size: 18px;
          color: #15803d;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1060px) {
          .sfs-links,
          .sfs-actions { display: none; }

          .sfs-mobile-btn { display: flex; }

          .sfs-bar {
            height: 64px;
            padding: 0 18px;
          }

          .sfs-badge-wrap {
            width: 46px;
            height: 46px;
          }
        }

        @media (max-width: 480px) {
          .sfs-status { display: none; }
        }

        @media (max-width: 380px) {
          .sfs-wordmark-secondary { display: none; }
        }
      `}</style>

      <header className={`sfs-nav ${scrolled ? "scrolled" : ""}`}>

        {/* ── TICKER BAR ── */}
        <div className="sfs-ticker-bar">

          <div className="sfs-ticker-label">
            <span className="sfs-ticker-label-dot" />
            <span className="sfs-ticker-label-text">Live Feed</span>
          </div>

          <div className="sfs-ticker-track">
            <div className="sfs-ticker-belt">
              {[
                ...TICKER_ITEMS,
                ...TICKER_ITEMS,
                ...TICKER_ITEMS,
                ...TICKER_ITEMS,
                ...TICKER_ITEMS,
              ].map((it, idx) => (
                <span
                  key={idx}
                  className="sfs-ticker-item"
                  data-type={it.type}
                >
                  <span className="sfs-ticker-icon">{it.icon}</span>
                  <span className="sfs-ticker-text">{it.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* TOP LINE */}
        <div className="sfs-topbar" />

        {/* ── MAIN NAVBAR ── */}
        <div className="sfs-bar">

          {/* LOGO */}
          <Link to="/" className="sfs-logo">

            <div className="sfs-badge-wrap">
              {/* ── Corner bracket edges ── */}
              <span className="sfs-logo-corner tl" />
              <span className="sfs-logo-corner tr" />
              <span className="sfs-logo-corner bl" />
              <span className="sfs-logo-corner br" />

              {/* ── Animated scanner line ── */}
              <span className="sfs-scanner-line" />

              {/* ── YOUR LOGO IMAGE (public/logo.png) ── */}
              <img
                src="/logo.png"
                alt="ScanForSafe Logo"
                className="sfs-logo-img"
              />
            </div>

            {/* WORDMARK */}
            <div className="sfs-wordmark">
              <div className="sfs-wordmark-row1">
                <div className="sfs-wordmark-primary">
                  <span className="accent">ScanFor</span>Safe
                </div>

                <div className="sfs-status">
                  <span className="sfs-status-pulse" />
                  <span className="sfs-status-label">Smart Shield</span>
                </div>
              </div>

              <div className="sfs-wordmark-secondary">
                Innovations Pvt Ltd
              </div>
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="sfs-links">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`sfs-link ${isActive(item.to) ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="sfs-actions">
            <Link to="/login" className="sfs-login">Login</Link>

            <button className="sfs-prereg" onClick={handlePreRegistration}>
              <span className="prereg-dot" />
              Pre Registration
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="sfs-mobile-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}