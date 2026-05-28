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

        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        /* ══════════════════════════════════════
           NAV SHELL
        ══════════════════════════════════════ */

        .sfs-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          font-family: 'Space Grotesk', sans-serif;
        }

        .sfs-topbar {
          height: 2px;
          background: linear-gradient(
            90deg,
            #064e3b 0%,
            #16a34a 40%,
            #4ade80 60%,
            #16a34a 80%,
            #064e3b 100%
          );
        }

        .sfs-bar {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(226,232,240,0.8);
          transition: height .35s ease, box-shadow .35s ease;
          box-shadow: 0 1px 0 rgba(0,0,0,0.04);
        }

        .sfs-nav.scrolled .sfs-bar {
          height: 66px;
          box-shadow:
            0 4px 24px rgba(6,78,59,0.08),
            0 1px 0 rgba(0,0,0,0.04);
        }

        /* ══════════════════════════════════════
           LOGO BADGE — full redesign
        ══════════════════════════════════════ */

        .sfs-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          flex-shrink: 0;
        }

        /* Outer wrapper — float + size transition */
        .sfs-badge-wrap {
          position: relative;
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          animation: sfs-float 4s ease-in-out infinite;
          transition: width .35s ease, height .35s ease;
        }

        .sfs-nav.scrolled .sfs-badge-wrap {
          width: 52px;
          height: 52px;
        }

        @keyframes sfs-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }

        .sfs-logo:hover .sfs-badge-wrap {
          animation-play-state: paused;
          transform: scale(1.07) translateY(-3px);
          transition: transform .3s cubic-bezier(.34,1.3,.64,1);
        }

        /* Dual pulse rings */
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
        }

        @keyframes sfs-pulse-out {
          0%   { opacity: 0.75; transform: scale(0.9); }
          100% { opacity: 0;    transform: scale(1.2); }
        }

        /* Spinning conic ring — speeds up on hover */
        .sfs-ring-outer {
          position: absolute;
          inset: 0;
          border-radius: 18px;
          /* Conic gradient gives the spinning rainbow-green effect */
          background: conic-gradient(
            from 0deg,
            #22c55e 0%,
            #16a34a 25%,
            #0d9488 50%,
            #1d4ed8 65%,
            #16a34a 80%,
            #22c55e 100%
          );
          animation: sfs-spin-ring 5s linear infinite;
          padding: 3px;
          transition: border-radius .35s ease;
        }

        .sfs-nav.scrolled .sfs-ring-outer {
          border-radius: 15px;
        }

        .sfs-logo:hover .sfs-ring-outer {
          animation-duration: 1.4s;
        }

        @keyframes sfs-spin-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* White badge face */
        .sfs-badge-face {
          width: 100%;
          height: 100%;
          border-radius: 15px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: border-radius .35s ease;
        }

        .sfs-nav.scrolled .sfs-badge-face {
          border-radius: 13px;
        }

        /* Inner soft white vignette so edges feel clean */
        .sfs-badge-face::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 10px rgba(255,255,255,0.9);
          pointer-events: none;
          z-index: 5;
        }

        /* QR scan line */
        .sfs-scan-line {
          position: absolute;
          left: 6px; right: 6px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(22,163,74,0.65), transparent);
          animation: sfs-scan 2.6s ease-in-out infinite;
          border-radius: 999px;
          z-index: 4;
          pointer-events: none;
        }

        @keyframes sfs-scan {
          0%   { top: 8%;  opacity: 0; }
          12%  { opacity: 1; }
          88%  { opacity: 0.85; }
          100% { top: 92%; opacity: 0; }
        }

        /* Corner brackets */
        .sfs-bracket {
          position: absolute;
          width: 11px;
          height: 11px;
          z-index: 6;
          pointer-events: none;
          border-color: #16a34a;
          border-style: solid;
          opacity: 0.8;
        }
        .sfs-bracket.tl { top:5px;    left:5px;   border-width: 2px 0 0 2px; border-radius: 2px 0 0 0; }
        .sfs-bracket.tr { top:5px;    right:5px;  border-width: 2px 2px 0 0; border-radius: 0 2px 0 0; }
        .sfs-bracket.bl { bottom:5px; left:5px;   border-width: 0 0 2px 2px; border-radius: 0 0 0 2px; }
        .sfs-bracket.br { bottom:5px; right:5px;  border-width: 0 2px 2px 0; border-radius: 0 0 2px 0; }

        /*
          KEY FIX: mix-blend-mode: multiply makes the black background of the logo
          completely transparent against the white badge face.
          The green/blue shield fills the full badge area.
          object-fit: contain + 100% size = fills edge to edge.
        */
        .sfs-badge-img {
          width: 92%;
          height: 92%;
          object-fit: contain;
          position: relative;
          z-index: 3;
          mix-blend-mode: multiply;
          transition: transform .4s cubic-bezier(.34,1.3,.64,1);
          border-radius: 6px;
        }

        .sfs-logo:hover .sfs-badge-img {
          transform: scale(1.08);
        }

        /* ══════════════════════════════════════
           WORDMARK
        ══════════════════════════════════════ */

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
          border: 1px solid rgba(22,163,74,0.25);
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
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1.2); }
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

        /* ══════════════════════════════════════
           NAV LINKS
        ══════════════════════════════════════ */

        .sfs-links {
          display: flex;
          align-items: center;
          gap: 0;
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

        .sfs-link.active {
          color: #15803d;
        }

        .sfs-link.active::after {
          content: "";
          position: absolute;
          left: 14px; right: 14px;
          bottom: 4px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #16a34a, #4ade80);
        }

        /* ══════════════════════════════════════
           ACTION BUTTONS
        ══════════════════════════════════════ */

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
          border-color: rgba(46, 189, 58, .65);
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
          background: #1b7a21;
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

        /* ══════════════════════════════════════
           MOBILE
        ══════════════════════════════════════ */

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

        .sfs-mobile-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .sfs-mobile-drawer {
          position: absolute;
          top: 0; right: 0;
          width: min(88vw, 310px);
          height: 100%;
          background: #fff;
          padding: 84px 20px 30px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transform: translateX(100%);
          transition: transform .32s cubic-bezier(.4,0,.2,1);
          box-shadow: -8px 0 40px rgba(15,23,42,.12);
        }

        .sfs-mobile-overlay.open .sfs-mobile-drawer {
          transform: translateX(0);
        }

        .sfs-mobile-link {
          padding: 12px 14px;
          border-radius: 10px;
          text-decoration: none;
          color: #334155;
          font-size: 14.5px;
          font-weight: 600;
          transition: all .15s ease;
        }

        .sfs-mobile-link:hover,
        .sfs-mobile-link.active {
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

        /* ══════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════ */

        @media (max-width: 980px) {
          .sfs-links,
          .sfs-actions { display: none; }

          .sfs-mobile-btn { display: flex; }

          .sfs-bar {
            height: 68px;
            padding: 0 18px;
          }

          .sfs-badge-wrap {
            width: 52px;
            height: 52px;
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
        <div className="sfs-topbar" />

        <div className="sfs-bar">

          {/* ── LOGO ── */}
          <Link to="/" className="sfs-logo">
            <div className="sfs-badge-wrap">

              {/* Pulse rings behind everything */}
              <div className="sfs-pulse-ring" />
              <div className="sfs-pulse-ring" />

              {/* Spinning conic gradient ring */}
              <div className="sfs-ring-outer">
                <div className="sfs-badge-face">

                  {/* QR corner brackets */}
                  <div className="sfs-bracket tl" />
                  <div className="sfs-bracket tr" />
                  <div className="sfs-bracket bl" />
                  <div className="sfs-bracket br" />

                  {/* Animated scan line */}
                  <div className="sfs-scan-line" />

                  {/*
                    mix-blend-mode: multiply removes the black background
                    so the shield logo renders cleanly on the white face.
                    Use width/height 92% so it fills the badge edge-to-edge.
                  */}
                  <img
                    src="/logo.png"
                    alt="ScanForSafe"
                    className="sfs-badge-img"
                  />

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
              <div className="sfs-wordmark-secondary">
                Innovations Pvt Ltd
              </div>
            </div>
          </Link>

          {/* ── NAV LINKS ── */}
          <nav className="sfs-links" style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
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
            <Link to="/login" className="sfs-login">
              Login
            </Link>
            <button className="sfs-prereg" onClick={handlePreRegistration}>
              <span className="prereg-dot" />
              Pre Registration
            </button>
          </div>

          {/* ── MOBILE TOGGLE ── */}
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
        <div
          className="sfs-mobile-drawer"
          onClick={(e) => e.stopPropagation()}
        >
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
            <Link
              to="/login"
              className="sfs-mobile-login"
              onClick={() => setMobileOpen(false)}
            >
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