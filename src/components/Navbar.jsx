import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// ── TICKER DATA ──────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  { type: "feature", icon: "📷", text: "QR + NFC Enabled" },
  { type: "feature", icon: "📵", text: "No App Required" },
  { type: "feature", icon: "💧", text: "Waterproof Tags" },
  { type: "feature", icon: "🚨", text: "Secure Emergency Access" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]  = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate  = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home",         to: "/" },
    { label: "Features",     to: "/features" },
    { label: "Use Cases",    to: "/use-cases" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Franchise", to: "/franchise" },
    { label: "Contact", to: "/contact" },
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

        /* ══ ROOT ══ */
        .sfs-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* ══ TICKER BAR ══ */
        .sfs-ticker-bar {
          height: 32px;
          background: linear-gradient(90deg, #052e16 0%, #064e3b 40%, #065f46 60%, #064e3b 80%, #052e16 100%);
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
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);
        }

        .sfs-ticker-label-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #fff;
          animation: sfs-blink 1.6s ease-in-out infinite;
          flex-shrink: 0;
        }

        .sfs-ticker-label-text {
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #fff;
          white-space: nowrap;
        }

        .sfs-ticker-bar::after {
          content: "";
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 60px;
          background: linear-gradient(90deg, transparent, #064e3b);
          z-index: 2;
          pointer-events: none;
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
          animation: sfs-marquee 22s linear infinite;
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

        .sfs-ticker-icon { font-size: 11px; flex-shrink: 0; line-height: 1; }
        .sfs-ticker-text {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,.78);
          white-space: nowrap;
          letter-spacing: .015em;
        }

        .sfs-ticker-item[data-type="feature"] .sfs-ticker-text {
          color: #fcd34d;
          font-weight: 700;
          letter-spacing: .02em;
        }
        .sfs-ticker-item[data-type="feature"] .sfs-ticker-icon { font-size: 12px; }
        .sfs-ticker-item[data-type="feature"] { border-right: 1px solid rgba(74,222,128,.15); }

        /* ══ TOPBAR LINE ══ */
        .sfs-topbar {
          height: 2px;
          background: linear-gradient(90deg,
            #064e3b 0%, #16a34a 30%, #4ade80 50%, #16a34a 70%, #064e3b 100%
          );
          background-size: 200% 100%;
          animation: sfs-shimmer-line 4s linear infinite;
        }

        @keyframes sfs-shimmer-line {
          0%   { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        /* ══ MAIN BAR ══ */
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
          box-shadow: 0 6px 30px rgba(6,78,59,.09), 0 1px 0 rgba(0,0,0,.04);
        }

        /* ══ LOGO ══ */
        .sfs-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .sfs-badge-wrap {
          position: relative;
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          transition: width .35s ease, height .35s ease;
        }

        .sfs-nav.scrolled .sfs-badge-wrap { width: 44px; height: 44px; }

        .sfs-logo:hover .sfs-badge-wrap {
          transform: scale(1.05);
        }

        /* Dual pulse rings
        .sfs-pulse-ring {
          position: absolute;
          inset: -7px;
          border-radius: 24px;
          border: 1.5px solid rgba(34,197,94,0.35);
          animation: sfs-pulse-out 2.8s ease-out infinite;
          pointer-events: none;
        }
        .sfs-pulse-ring:nth-child(2) {
          animation-delay: 1s;
          inset: -14px;
          border-radius: 29px;
        } */

        @keyframes sfs-pulse-out {
          0%   { opacity: 0.75; transform: scale(0.9); }
          100% { opacity: 0;    transform: scale(1.2); }
        }

        /* Spinning conic ring — speeds up on hover */
        .sfs-ring-outer {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: linear-gradient(145deg, #22c55e, #16a34a, #059669);
          padding: 2.5px;
          transition: border-radius .35s ease;
          overflow: hidden;
        }

        .sfs-nav.scrolled .sfs-ring-outer {
          border-radius: 15px;
        }

        .sfs-logo:hover .sfs-ring-outer {
          animation-duration: 1.4s;
        }

        /* @keyframes sfs-spin-ring {
          from { transform: rotate(100deg); }
          to   { transform: rotate(360deg); }
        } */

        .sfs-badge-face {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 11px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          transition: border-radius .35s ease;
        }

        /* ── Logo Scanning Laser ── */
        .sfs-logo-laser {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 10%, #16a34a 40%, #4ade80 50%, #16a34a 60%, transparent 90%);
          box-shadow: 0 0 6px #16a34a, 0 0 10px #4ade80;
          z-index: 5;
          pointer-events: none;
          animation: sfs-logo-scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;

          /* Clip strictly to the transparent shield shape */
          mask-image: url('/logo.png');
          -webkit-mask-image: url('/logo.png');
          mask-size: 92% 92%;
          -webkit-mask-size: 92% 92%;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-position: center;
        }

        .sfs-logo:hover .sfs-logo-laser {
          animation-duration: 1.4s;
          background: linear-gradient(90deg, transparent 10%, #22c55e 40%, #86efac 50%, #22c55e 60%, transparent 90%);
          box-shadow: 0 0 10px #22c55e, 0 0 14px #86efac;
        }

        @keyframes sfs-logo-scan {
          0% {
            top: -6%;
            opacity: 0;
          }
          8%, 92% {
            opacity: 1;
          }
          100% {
            top: 106%;
            opacity: 0;
          }
        }

        /* ── QR Scanner Viewfinder Corners ── */
        .sfs-logo-corner {
          position: absolute;
          width: 9px;
          height: 9px;
          border-color: #2ebd3a;
          border-style: solid;
          border-width: 0;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .sfs-logo-corner-tl {
          top: 1px;
          left: 1.5px;
          border-top-width: 2.2px;
          border-left-width: 2.2px;
          border-top-left-radius: 3.5px;
        }

        .sfs-logo-corner-tr {
          top: 1px;
          right: 0.5px;
          border-top-width: 2.2px;
          border-right-width: 2.2px;
          border-top-right-radius: 3.5px;
        }

        .sfs-logo-corner-bl {
          bottom: 6px;
          left: 2px;
          border-bottom-width: 2.2px;
          border-left-width: 2.2px;
          border-bottom-left-radius: 3.5px;
        }

        .sfs-logo-corner-br {
          bottom: 6px;
          right: 2px;
          border-bottom-width: 2.2px;
          border-right-width: 2.2px;
          border-bottom-right-radius: 3.5px;
        }

        /* Hover animation - make them pulse or expand slightly! */
        .sfs-logo:hover .sfs-logo-corner {
          border-color: #4ade80;
          filter: drop-shadow(0 0 3px #2ebd3a);
        }
        
        .sfs-logo:hover .sfs-logo-corner-tl { top: -4.5px; left: -4.5px; }
        .sfs-logo:hover .sfs-logo-corner-tr { top: -4.5px; right: -4.5px; }
        .sfs-logo:hover .sfs-logo-corner-bl { bottom: -4.5px; left: -4.5px; }
        .sfs-logo:hover .sfs-logo-corner-br { bottom: -4.5px; right: -4.5px; }

        .sfs-nav.scrolled .sfs-badge-face {
          border-radius: 11px;
          background: radial-gradient(circle at 50% 50%, rgba(74,222,128,.15) 0%, transparent 70%);
          animation: sfs-glow-pulse 2.4s ease-in-out infinite;
          pointer-events: none;
          z-index: 2;
        }

        @keyframes sfs-glow-pulse {
          0%,10% { opacity: 0; }
          30%    { opacity: 1; }
          55%    { opacity: 0; }
          100%   { opacity: 0; }
        }

        .sfs-badge-img {
          width: 90%; height: 90%;
          object-fit: contain;
          mix-blend-mode: multiply;
          position: relative;
          z-index: 1;
          transition: transform .35s ease;
        }

        .sfs-logo:hover .sfs-badge-img { transform: scale(1.06); }

        .sfs-ping-ring {
          position: absolute;
          inset: -5px;
          border-radius: 20px;
          border: 1.5px solid rgba(74,222,128,.5);
          animation: sfs-ping-out 2.4s ease-out infinite;
          pointer-events: none;
        }

        @keyframes sfs-ping-out {
          0%   { opacity: .7; transform: scale(.88); inset: -5px; }
          70%  { opacity: 0;  transform: scale(1.1); inset: -12px; }
          100% { opacity: 0; }
        }

        /* ══ WORDMARK ══ */
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
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #16a34a;
          animation: sfs-blink 2.2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes sfs-blink {
          0%,100% { opacity: .4; transform: scale(.8); }
          50%      { opacity: 1;  transform: scale(1.2); }
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

        /* ══ NAV LINKS ══ */
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

        .sfs-link:hover { color: #15803d; background: rgba(220,252,231,.6); }
        .sfs-link.active { color: #15803d; }
        .sfs-link.active::after {
          content: "";
          position: absolute;
          left: 14px; right: 14px; bottom: 4px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #16a34a, #4ade80);
        }

        /* ══ ACTIONS ══ */
        .sfs-actions { display: flex; align-items: center; gap: 10px; }

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
          box-shadow: 0 1px 0 rgba(0,0,0,.12), 0 4px 16px rgba(22,163,74,.3);
          transition: all .22s ease;
          white-space: nowrap;
        }

        .sfs-prereg:hover {
          background: #15803d;
          transform: translateY(-1px);
          box-shadow: 0 1px 0 rgba(0,0,0,.12), 0 8px 24px rgba(22,163,74,.38);
        }

        .prereg-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #86efac;
          flex-shrink: 0;
          animation: sfs-blink 1.8s ease-in-out infinite;
        }

        /* ══ MOBILE TOGGLE ══ */
        .sfs-mobile-btn {
          display: none;
          width: 40px; height: 40px;
          border: 1px solid rgba(22,163,74,.2);
          border-radius: 10px;
          background: #f0fdf4;
          cursor: pointer;
          font-size: 18px;
          color: #15803d;
          align-items: center;
          justify-content: center;
        }

        /* ══ MOBILE DRAWER ══ */
        .sfs-mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15,23,42,.5);
          backdrop-filter: blur(8px);
          opacity: 0;
          pointer-events: none;
          transition: opacity .3s ease;
          z-index: 9998;
        }

        .sfs-mobile-overlay.open { opacity: 1; pointer-events: auto; }

        .sfs-mobile-drawer {
          position: absolute;
          top: 0; right: 0;
          width: min(88vw, 310px);
          height: 100%;
          background: #fff;
          padding: 90px 20px 30px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transform: translateX(100%);
          transition: transform .32s cubic-bezier(.4,0,.2,1);
          box-shadow: -8px 0 40px rgba(15,23,42,.12);
        }

        .sfs-mobile-overlay.open .sfs-mobile-drawer { transform: translateX(0); }

        .sfs-mobile-link {
          padding: 12px 14px;
          border-radius: 10px;
          text-decoration: none;
          color: #334155;
          font-size: 14.5px;
          font-weight: 600;
          transition: all .15s ease;
        }

        .sfs-mobile-link:hover, .sfs-mobile-link.active {
          background: rgba(220,252,231,.8);
          color: #15803d;
        }

        .sfs-mobile-actions {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sfs-mobile-prereg {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 10px;
          background: #16a34a;
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(22,163,74,.3);
        }

        .sfs-mobile-login {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          color: #15803d;
          border: 1.5px solid rgba(22,163,74,.3);
          background: transparent;
        }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 1060px) {
          .sfs-links, .sfs-actions { display: none; }
          .sfs-mobile-btn { display: flex; }
          .sfs-bar { height: 64px; padding: 0 18px; }
          .sfs-badge-wrap { width: 46px; height: 46px; }
        }

        @media (max-width: 480px) { .sfs-status { display: none; } }
        @media (max-width: 380px) { .sfs-wordmark-secondary { display: none; } }
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
              {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((it, idx) => (
                <span key={idx} className="sfs-ticker-item" data-type={it.type}>
                  <span className="sfs-ticker-icon">{it.icon}</span>
                  <span className="sfs-ticker-text">{it.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOPBAR LINE ── */}
        <div className="sfs-topbar" />

        {/* ── MAIN BAR ── */}
        <div className="sfs-bar">

          {/* LOGO */}
          <Link to="/" className="sfs-logo">
            <div className="sfs-badge-wrap">
              {/* QR scanner corner brackets */}
              <div className="sfs-logo-corner sfs-logo-corner-tl" />
              <div className="sfs-logo-corner sfs-logo-corner-tr" />
              <div className="sfs-logo-corner sfs-logo-corner-bl" />
              <div className="sfs-logo-corner sfs-logo-corner-br" />

              <div className="sfs-badge-border">
                <div className="sfs-badge-face">
                  <img
                    src="/logo.png"
                    alt="ScanForSafe"
                    className="sfs-badge-img"
                  />
                  <div className="sfs-logo-laser" />
                </div>
              </div>
            </div>

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
              <div className="sfs-wordmark-secondary">Innovations Pvt Ltd</div>
            </div>
          </Link>

          {/* ── NAV LINKS ── */}
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

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`sfs-mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="sfs-mobile-drawer" onClick={(e) => e.stopPropagation()}>
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`sfs-mobile-link ${isActive(item.to) ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="sfs-mobile-actions">
            <Link to="/login" className="sfs-mobile-login" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
            <button className="sfs-mobile-prereg" onClick={handlePreRegistration}>
              <span className="prereg-dot" />
              Pre Registration
            </button>
          </div>
        </div>
      </div>
    </>
  );
}