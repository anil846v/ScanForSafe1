import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Features", to: "/features" },
    { label: "Use Cases", to: "/use-cases" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (to) =>
    to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(to);

  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
          -webkit-tap-highlight-color:transparent;
        }

        :root{
          --green:#16a34a;
          --green-dark:#15803d;
          --green-light:#dcfce7;
          --navy:#0f172a;
          --text:#334155;
          --white:#ffffff;
        }

        .sfs-nav{
          position:fixed;
          top:0;
          left:0;
          right:0;
          z-index:9999;
        }

        /* ── TOP LINE ── */
        .sfs-topbar{
          height:2.5px;
          background:linear-gradient(
            90deg,
            #064e3b,
            #16a34a,
            #4ade80,
            #bbf7d0,
            #4ade80,
            #16a34a,
            #064e3b
          );
          background-size:200% 100%;
          animation:topbar-slide 4s linear infinite;
        }

        @keyframes topbar-slide{
          0%  { background-position:0%   0; }
          100%{ background-position:200% 0; }
        }

        /* ── MAIN BAR ── */
        .sfs-bar{
          height:68px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 28px;
          background:rgba(255,255,255,0.82);
          backdrop-filter:blur(18px) saturate(180%);
          -webkit-backdrop-filter:blur(18px) saturate(180%);
          border-bottom:1px solid rgba(187,247,208,0.35);
          transition:all .35s ease;
          box-shadow:0 8px 30px rgba(22,163,74,0.05);
        }

        .sfs-nav.scrolled .sfs-bar{
          height:60px;
          background:rgba(255,255,255,0.90);
          box-shadow:0 10px 24px rgba(15,23,42,0.06);
        }

        /* ══════════════════════════════
           LOGO — FOREST HIGHLIGHT
        ══════════════════════════════ */
        .sfs-logo{
          display:flex;
          align-items:center;
          gap:12px;
          text-decoration:none;
          position:relative;
          padding:7px 14px 7px 8px;
          border-radius:18px;
          background:linear-gradient(
            135deg,
            rgba(6,78,59,0.07)   0%,
            rgba(22,163,74,0.10) 40%,
            rgba(187,247,208,0.22) 100%
          );
          border:1px solid rgba(22,163,74,0.18);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.75),
            0 4px 18px rgba(22,163,74,0.10);
          transition:all .3s ease;
          overflow:hidden;
        }

        /* animated forest shimmer sweep */
        .sfs-logo::before{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(
            105deg,
            transparent 30%,
            rgba(134,239,172,0.28) 50%,
            transparent 70%
          );
          background-size:200% 100%;
          animation:forest-shimmer 3.5s ease-in-out infinite;
          border-radius:18px;
          pointer-events:none;
        }

        @keyframes forest-shimmer{
          0%  { background-position:-100% 0; opacity:0;   }
          30% { opacity:1;                                 }
          60% { background-position:200%  0; opacity:1;   }
          100%{ background-position:200%  0; opacity:0;   }
        }

        /* leaf accent */
        .sfs-logo::after{
          content:"🌿";
          position:absolute;
          right:8px;
          top:4px;
          font-size:11px;
          opacity:0.4;
          animation:leaf-sway 4s ease-in-out infinite;
          pointer-events:none;
        }

        @keyframes leaf-sway{
          0%,100%{ transform:rotate(-8deg) scale(0.9); opacity:0.30; }
          50%    { transform:rotate( 8deg) scale(1.1); opacity:0.60; }
        }

        .sfs-logo:hover{
          background:linear-gradient(
            135deg,
            rgba(6,78,59,0.12)    0%,
            rgba(22,163,74,0.16)  50%,
            rgba(187,247,208,0.35) 100%
          );
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.85),
            0 8px 28px rgba(22,163,74,0.18);
          transform:translateY(-1px);
        }

        .sfs-logo-wrap{
          position:relative;
          width:46px;
          height:46px;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        /* pulsing radial forest glow */
        .sfs-logo-glow{
          position:absolute;
          width:56px;
          height:56px;
          border-radius:50%;
          background:radial-gradient(
            circle,
            rgba(22,163,74,0.30)  0%,
            rgba(6,78,59,0.14)   50%,
            transparent          75%
          );
          animation:logo-pulse 2.8s ease-in-out infinite;
        }

        @keyframes logo-pulse{
          0%,100%{ transform:scale(1);    opacity:0.7; }
          50%    { transform:scale(1.18); opacity:1;   }
        }

        /* expanding ring */
        .sfs-logo-ring{
          position:absolute;
          width:52px;
          height:52px;
          border-radius:50%;
          border:1.5px solid rgba(22,163,74,0.25);
          animation:ring-expand 2.8s ease-out infinite;
        }

        @keyframes ring-expand{
          0%  { transform:scale(0.9); opacity:0.8; }
          100%{ transform:scale(1.6); opacity:0;   }
        }

        .sfs-logo-img{
          position:relative;
          width:42px;
          height:42px;
          object-fit:contain;
          transition:all .3s ease;
          filter:
            drop-shadow(0 4px 12px rgba(22,163,74,0.25))
            drop-shadow(0 0  6px rgba(74,222,128,0.18));
        }

        .sfs-nav.scrolled .sfs-logo-img{
          width:38px;
          height:38px;
        }

        .sfs-logo-text{
          font-size:.82rem;
          font-weight:800;
          color:#16a34a;
          line-height:1;
          letter-spacing:-0.02em;
          font-family:Inter, system-ui, sans-serif;
          white-space:nowrap;
        }

        .sfs-logo-sub{
          margin-top:4px;
          font-size:9px;
          font-weight:800;
          letter-spacing:.22em;
          text-transform:uppercase;
          background:linear-gradient(90deg,#16a34a,#059669);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          display:flex;
          align-items:center;
          gap:5px;
        }

        .sfs-logo-sub::before,
        .sfs-logo-sub::after{
          content:"";
          display:inline-block;
          width:18px;
          height:1.5px;
          background:linear-gradient(90deg,#16a34a,#4ade80);
          border-radius:2px;
          flex-shrink:0;
        }

        /* ══════════════════════════════
           NAV LINKS — nudged right
        ══════════════════════════════ */
        .sfs-links{
          display:flex;
          align-items:center;
          gap:4px;
          margin-left:auto;
          margin-right:16px;
        }

        .sfs-link{
          position:relative;
          padding:10px 14px;
          border-radius:12px;
          text-decoration:none;
          color:#334155;
          font-size:13px;
          font-weight:700;
          transition:all .22s ease;
        }

        .sfs-link:hover{
          color:#16a34a;
          background:rgba(220,252,231,0.72);
        }

        .sfs-link.active{
          color:#15803d;
          background:linear-gradient(
            135deg,
            rgba(22,163,74,0.14),
            rgba(187,247,208,0.50)
          );
          box-shadow:inset 0 0 0 1px rgba(22,163,74,0.10);
        }

        .sfs-link.active::after{
          content:"";
          position:absolute;
          left:14px;
          right:14px;
          bottom:5px;
          height:2px;
          border-radius:999px;
          background:linear-gradient(90deg,#16a34a,#4ade80);
        }

        /* ── ACTIONS ── */
        .sfs-actions{
          display:flex;
          align-items:center;
          gap:10px;
          flex-shrink:0;
        }

        .sfs-login{
          height:40px;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0 18px;
          border-radius:12px;
          text-decoration:none;
          font-size:13px;
          font-weight:700;
          color:#15803d;
          border:1px solid rgba(22,163,74,0.14);
          background:rgba(255,255,255,0.75);
          transition:all .22s ease;
        }

        .sfs-login:hover{
          background:#fff;
          transform:translateY(-1px);
          box-shadow:0 8px 18px rgba(22,163,74,0.10);
        }

        .sfs-start{
          height:42px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          padding:0 20px;
          border-radius:13px;
          background:linear-gradient(135deg,#16a34a,#064e3b);
          color:#fff;
          text-decoration:none;
          font-size:13px;
          font-weight:800;
          box-shadow:0 12px 24px rgba(22,163,74,0.22);
          transition:all .22s ease;
        }

        .sfs-start:hover{
          transform:translateY(-2px);
          box-shadow:0 16px 30px rgba(22,163,74,0.28);
        }

        /* ── MOBILE BUTTON ── */
        .sfs-mobile-btn{
          display:none;
          width:40px;
          height:40px;
          border:none;
          border-radius:12px;
          background:rgba(255,255,255,0.75);
          backdrop-filter:blur(14px);
          cursor:pointer;
          font-size:20px;
          color:#15803d;
        }

        /* ── MOBILE MENU ── */
        .sfs-mobile-overlay{
          position:fixed;
          inset:0;
          background:rgba(15,23,42,0.45);
          backdrop-filter:blur(6px);
          opacity:0;
          pointer-events:none;
          transition:all .3s ease;
          z-index:9998;
        }

        .sfs-mobile-overlay.open{
          opacity:1;
          pointer-events:auto;
        }

        .sfs-mobile-drawer{
          position:absolute;
          top:0;
          right:0;
          width:min(88vw,320px);
          height:100%;
          background:rgba(255,255,255,0.96);
          backdrop-filter:blur(30px);
          padding:80px 22px 30px;
          display:flex;
          flex-direction:column;
          gap:10px;
          transform:translateX(100%);
          transition:all .35s ease;
          box-shadow:-10px 0 40px rgba(15,23,42,0.12);
        }

        .sfs-mobile-overlay.open .sfs-mobile-drawer{
          transform:translateX(0);
        }

        .sfs-mobile-link{
          padding:14px 16px;
          border-radius:14px;
          text-decoration:none;
          color:#334155;
          font-size:15px;
          font-weight:700;
          transition:all .18s ease;
        }

        .sfs-mobile-link:hover,
        .sfs-mobile-link.active{
          background:rgba(220,252,231,0.8);
          color:#15803d;
        }

        .sfs-mobile-actions{
          margin-top:18px;
          display:flex;
          flex-direction:column;
          gap:12px;
        }

        @media(max-width:980px){
          .sfs-links,
          .sfs-actions{
            display:none;
          }

          .sfs-mobile-btn{
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .sfs-bar{
            height:64px;
            padding:0 16px;
          }

          .sfs-logo{
            padding:6px 10px 6px 6px;
          }

          .sfs-logo-wrap{
            width:42px;
            height:42px;
          }

          .sfs-logo-img{
            width:38px;
            height:38px;
          }

          .sfs-logo-text{
            font-size:.95rem;
          }

          .sfs-logo-sub{
            font-size:9px;
          }
        }
      `}</style>

      <header
        className={`sfs-nav ${scrolled ? "scrolled" : ""}`}
      >
        <div className="sfs-topbar" />

        <div className="sfs-bar">

          {/* LOGO */}
          <Link to="/" className="sfs-logo">
            <div className="sfs-logo-wrap">
              <div className="sfs-logo-glow" />
              <div className="sfs-logo-ring" />
              <img
                src="/logo.png"
                alt="ScanForSafe"
                className="sfs-logo-img"
              />
            </div>

            <div>
              <div className="sfs-logo-text">
                ScanForSafe <span style={{color:"#0f172a"}}>Innovations Pvt Ltd</span>
              </div>
              <div className="sfs-logo-sub">
                Smart Shield
              </div>
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="sfs-links">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`sfs-link ${
                  isActive(item.to) ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="sfs-actions">
            <Link to="/login" className="sfs-login">
              Login
            </Link>
            <Link to="/products" className="sfs-start">
              Get Started →
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="sfs-mobile-btn"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`sfs-mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className="sfs-mobile-drawer"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position:"absolute",
              top:"18px",
              right:"18px",
              width:"38px",
              height:"38px",
              border:"none",
              borderRadius:"10px",
              background:"rgba(240,253,244,0.9)",
              cursor:"pointer",
              fontSize:"16px",
              color:"#15803d",
            }}
          >
            ✕
          </button>

          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`sfs-mobile-link ${
                isActive(item.to) ? "active" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="sfs-mobile-actions">
            <Link
              to="/login"
              className="sfs-login"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/products"
              className="sfs-start"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}