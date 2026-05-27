import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "Use Cases", to: "/use-cases" },
    { label: "How It Works", to: "/how-it-works" },
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

        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

        /* ── TOP ACCENT LINE ── */
        .sfs-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
          font-family: 'Space Grotesk', sans-serif;
        }

        .sfs-topbar {
          height: 2px;
          background: linear-gradient(90deg, #064e3b 0%, #16a34a 40%, #4ade80 60%, #16a34a 80%, #064e3b 100%);
        }

        /* ── MAIN BAR ── */
        .sfs-bar {
          height: 80px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(226,232,240,0.8);
          transition: height .35s ease, box-shadow .35s ease;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04);
        }
        .sfs-nav.scrolled .sfs-bar {
          height: 66px;
          box-shadow: 0 4px 24px rgba(6,78,59,0.08), 0 1px 0 rgba(0,0,0,0.04);
        }

        /* ══════════════════════════
           LOGO — clean, layered mark
        ══════════════════════════ */
        .sfs-logo {
          display: flex; align-items: center; gap: 14px;
          text-decoration: none; flex-shrink: 0;
        }

        /* The badge itself */
        .sfs-badge {
          position: relative;
          width: 56px; height: 56px; flex-shrink: 0;
          transition: transform .4s cubic-bezier(.34,1.3,.64,1);
        }
        .sfs-logo:hover .sfs-badge { transform: scale(1.07) translateY(-1px); }
        .sfs-nav.scrolled .sfs-badge { width: 46px; height: 46px; }

        /* Outer ring — the identity border */
        .sfs-badge-ring {
          position: absolute; inset: 0;
          border-radius: 16px;
          background: linear-gradient(145deg, #16a34a, #064e3b);
          padding: 2px;
          transition: border-radius .35s ease;
        }
        .sfs-nav.scrolled .sfs-badge-ring { border-radius: 14px; }

        /* Inner face */
        .sfs-badge-face {
          width: 100%; height: 100%;
          border-radius: 14px;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          position: relative;
        }

        /* Corner accent marks — minimal, structural */
        .sfs-badge-face::before,
        .sfs-badge-face::after {
          content: "";
          position: absolute;
          width: 10px; height: 10px;
          border-color: #16a34a; border-style: solid;
          opacity: 0.6;
          transition: opacity .3s ease;
        }
        .sfs-badge-face::before {
          top: 4px; left: 4px;
          border-width: 1.5px 0 0 1.5px;
          border-radius: 2px 0 0 0;
        }
        .sfs-badge-face::after {
          bottom: 4px; right: 4px;
          border-width: 0 1.5px 1.5px 0;
          border-radius: 0 0 2px 0;
        }
        .sfs-logo:hover .sfs-badge-face::before,
        .sfs-logo:hover .sfs-badge-face::after { opacity: 1; }

        /* Logo image */
        .sfs-badge-img {
          width: 78%; height: 78%;
          object-fit: contain;
          display: block;
          position: relative; z-index: 1;
          transition: transform .4s cubic-bezier(.34,1.3,.64,1);
        }
        .sfs-logo:hover .sfs-badge-img { transform: scale(1.1); }

        /* Subtle scan line — single, calm */
        .sfs-badge-scan {
          position: absolute;
          left: 6px; right: 6px; height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(22,163,74,0.5), transparent);
          border-radius: 999px;
          animation: scan 3s ease-in-out infinite;
          z-index: 2;
          pointer-events: none;
        }
        @keyframes scan {
          0%   { top: 12%; opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: .8; }
          100% { top: 88%; opacity: 0; }
        }

        /* ── LOGO TEXT ── */
        .sfs-wordmark {
          display: flex; flex-direction: column;
          justify-content: center; gap: 2px;
        }

        /* Row 1: Brand name + pill inline */
        .sfs-wordmark-row1 {
          display: flex; align-items: center; gap: 8px; line-height: 1;
        }

        .sfs-wordmark-primary {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem; font-weight: 900;
          letter-spacing: -.03em; line-height: 1;
          color: #0f172a; white-space: nowrap;
        }
        .sfs-wordmark-primary .accent {
          background: linear-gradient(135deg, #16a34a 0%, #059669 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Status pill — inline next to brand name */
        .sfs-status {
          display: inline-flex; align-items: center; gap: 4px;
          background: #f0fdf4; border: 1px solid rgba(22,163,74,0.25);
          border-radius: 999px; padding: 2px 7px;
          flex-shrink: 0;
        }
        .sfs-status-pulse {
          width: 5px; height: 5px; border-radius: 50%; background: #16a34a;
          animation: pulse-dot 2.2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: .5; transform: scale(.85); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        .sfs-status-label {
          font-size: 9px; font-weight: 800;
          letter-spacing: .16em; text-transform: uppercase; color: #15803d;
        }

        /* Row 2: Subtitle */
        .sfs-wordmark-secondary {
          font-size: 10px; font-weight: 600;
          letter-spacing: .05em; color: #94a3b8;
          text-transform: uppercase; line-height: 1; white-space: nowrap;
        }

        /* ── NAV LINKS ── */
        .sfs-links {
          display: flex; align-items: center; gap: 0;
          margin-left: auto; margin-right: 20px;
        }
        .sfs-link {
          position: relative; padding: 8px 14px; border-radius: 10px;
          text-decoration: none; color: #475569;
          font-size: 13px; font-weight: 600;
          letter-spacing: .01em;
          transition: color .2s ease, background .2s ease;
        }
        .sfs-link:hover { color: #15803d; background: rgba(220,252,231,.6); }
        .sfs-link.active { color: #15803d; }
        .sfs-link.active::after {
          content: ""; position: absolute;
          left: 14px; right: 14px; bottom: 4px;
          height: 2px; border-radius: 999px;
          background: linear-gradient(90deg, #16a34a, #4ade80);
        }

        /* ── ACTION BUTTONS ── */
        .sfs-actions { display: flex; align-items: center; gap: 10px; }

        .sfs-login {
          height: 40px; display: flex; align-items: center;
          padding: 0 20px; border-radius: 10px; text-decoration: none;
          font-size: 13px; font-weight: 700; color: #15803d;
          border: 1.5px solid rgba(22,163,74,.3); background: transparent;
          transition: all .22s ease;
        }
        .sfs-login:hover {
          background: #f0fdf4;
          border-color: rgba(22,163,74,.55);
          transform: translateY(-1px);
        }

        .sfs-prereg {
          height: 40px; display: flex; align-items: center; gap: 8px;
          padding: 0 22px; border-radius: 10px;
          background: #16a34a;
          color: #fff; border: none; cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: .01em;
          box-shadow: 0 1px 0 rgba(0,0,0,.12), 0 4px 16px rgba(22,163,74,.3);
          transition: all .22s ease; white-space: nowrap;
        }
        .sfs-prereg:hover {
          background: #15803d;
          transform: translateY(-1px);
          box-shadow: 0 1px 0 rgba(0,0,0,.12), 0 8px 24px rgba(22,163,74,.38);
        }
        .prereg-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #86efac; flex-shrink: 0;
          animation: pulse-dot 1.8s ease-in-out infinite;
        }

        /* ── MOBILE ── */
        .sfs-mobile-btn {
          display: none; width: 40px; height: 40px; border: none;
          border-radius: 10px; background: #f0fdf4;
          border: 1px solid rgba(22,163,74,.2);
          cursor: pointer; font-size: 18px; color: #15803d;
          align-items: center; justify-content: center;
        }

        .sfs-mobile-overlay {
          position: fixed; inset: 0; background: rgba(15,23,42,.5);
          backdrop-filter: blur(8px); opacity: 0; pointer-events: none;
          transition: opacity .3s ease; z-index: 9998;
        }
        .sfs-mobile-overlay.open { opacity: 1; pointer-events: auto; }
        .sfs-mobile-drawer {
          position: absolute; top: 0; right: 0;
          width: min(88vw, 310px); height: 100%;
          background: #fff;
          padding: 84px 20px 30px;
          display: flex; flex-direction: column; gap: 6px;
          transform: translateX(100%); transition: transform .32s cubic-bezier(.4,0,.2,1);
          box-shadow: -8px 0 40px rgba(15,23,42,.12);
        }
        .sfs-mobile-overlay.open .sfs-mobile-drawer { transform: translateX(0); }
        .sfs-mobile-link {
          padding: 12px 14px; border-radius: 10px; text-decoration: none;
          color: #334155; font-size: 14.5px; font-weight: 600;
          transition: all .15s ease;
        }
        .sfs-mobile-link:hover, .sfs-mobile-link.active {
          background: rgba(220,252,231,.8); color: #15803d;
        }
        .sfs-mobile-actions { margin-top: 16px; display: flex; flex-direction: column; gap: 10px; }

        @media (max-width: 980px) {
          .sfs-links, .sfs-actions { display: none; }
          .sfs-mobile-btn { display: flex; }
          .sfs-bar { height: 68px; padding: 0 18px; }
          .sfs-badge { width: 48px; height: 48px; }
        }
        @media (max-width: 480px) {
          .sfs-status { display: none; }
        }
        @media (max-width: 380px) {
          .sfs-wordmark-secondary { display: none; }
        }
      `}</style>

      <header className={`sfs-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="sfs-topbar" />
        <div className="sfs-bar">

          {/* ── LOGO ── */}
          <Link to="/" className="sfs-logo">
            <div className="sfs-badge">
              <div className="sfs-badge-ring">
                <div className="sfs-badge-face">
                  <img src="/logo.png" alt="ScanForSafe" className="sfs-badge-img" />
                  <div className="sfs-badge-scan" />
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

          {/* ── ACTIONS ── */}
          <div className="sfs-actions">
            <Link to="/login" className="sfs-login">Login</Link>
            <button className="sfs-prereg" onClick={handlePreRegistration}>
              <span className="prereg-dot" />
              Pre Registration
            </button>
          </div>

          <button className="sfs-mobile-btn" onClick={() => setMobileOpen(true)}>☰</button>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <div
        className={`sfs-mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="sfs-mobile-drawer" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute", top: "16px", right: "16px",
              width: "36px", height: "36px", border: "none",
              borderRadius: "9px", background: "#f0fdf4", cursor: "pointer",
              fontSize: "15px", color: "#15803d", display: "flex",
              alignItems: "center", justifyContent: "center"
            }}
          >✕</button>

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
            <Link to="/login" className="sfs-login" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
            <button className="sfs-prereg" onClick={handlePreRegistration}>
              <span className="prereg-dot" /> Pre Registration
            </button>
          </div>
        </div>
      </div>
    </>
  );
}