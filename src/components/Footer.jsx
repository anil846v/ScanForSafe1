import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Lock,
  Leaf,
} from "lucide-react";

const logo = "/logo.png";

// Real brand SVG icons
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const TwitterXIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "Use Cases", to: "/use-cases" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Franchise", to: "/franchise" },
    { label: "Contact", to: "/contact" }
  ];

  const socialLinks = [
    {
      Icon: FacebookIcon,
      href: "https://facebook.com/Scanforsafeinnovations",
      label: "Facebook"
    },
    {
      Icon: InstagramIcon,
      href: "https://www.instagram.com/scanforsafeinnovations?igsh=anhlN2t1eG9qNDV2",
      label: "Instagram"
    },
    {
      Icon: TwitterXIcon,
      href: "https://twitter.com",
      label: "X (Twitter)"
    },
    {
      Icon: LinkedInIcon,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      Icon: TelegramIcon,
      href: "https://t.me/scanforsafe",
      label: "Telegram"
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .sfs-footer {
          position: relative;
          background-image: url('/footer_bg.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
          border-top: 3px solid #2ebd3a;
          color: #f1f5f9;
          font-family: 'Inter', sans-serif;
          width: 100%;
          overflow: hidden;
        }

        @media (hover: none) {
          .sfs-footer {
            background-attachment: scroll;
          }
        }

        .sfs-footer-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(11, 37, 69, 0.95) 0%, rgba(5, 18, 36, 0.96) 100%);
          z-index: 1;
        }

        .sfs-footer-container {
          position: relative;
          max-width: 1300px;
          margin: 0 auto;
          padding: 80px clamp(20px, 5vw, 60px) 30px;
          z-index: 2;
        }

        .sfs-footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: clamp(30px, 5vw, 80px);
          margin-bottom: 60px;
        }

        .sfs-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sfs-footer-logo-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .sfs-footer-logo-box {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid #2ebd3a;
          box-shadow: 0 0 20px rgba(46, 189, 58, 0.3);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sfs-footer-logo-img {
          width: 82%;
          height: auto;
          object-fit: contain;
        }

        .sfs-footer-title {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 800;
          margin: 0;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .sfs-footer-title span {
          color: #2ebd3a;
          text-shadow: 0 0 10px rgba(46, 189, 58, 0.2);
        }

        .sfs-footer-tagline {
          font-size: 10px;
          font-weight: 700;
          color: #2ebd3a;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .sfs-footer-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #cbd5e1;
          margin: 0;
          max-width: 440px;
        }

        .sfs-footer-socials {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .sfs-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        /* Platform-specific ALWAYS-ON brand colours */
        .sfs-social-icon[data-platform="Facebook"] {
          color: #1877F2;
          border-color: rgba(24, 119, 242, 0.35);
          background: rgba(24, 119, 242, 0.08);
        }
        .sfs-social-icon[data-platform="Facebook"]:hover {
          background: #1877F2;
          color: #ffffff;
          border-color: #1877F2;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(24, 119, 242, 0.45);
        }

        .sfs-social-icon[data-platform="Instagram"] {
          color: #e1306c;
          border-color: rgba(225, 48, 108, 0.35);
          background: rgba(225, 48, 108, 0.08);
        }
        .sfs-social-icon[data-platform="Instagram"]:hover {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: #ffffff;
          border-color: #dc2743;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(220, 39, 67, 0.45);
        }

        .sfs-social-icon[data-platform="X (Twitter)"] {
          color: #e7e9ea;
          border-color: rgba(231, 233, 234, 0.25);
          background: rgba(231, 233, 234, 0.06);
        }
        .sfs-social-icon[data-platform="X (Twitter)"]:hover {
          background: #e7e9ea;
          color: #000000;
          border-color: #e7e9ea;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(231, 233, 234, 0.25);
        }

        .sfs-social-icon[data-platform="LinkedIn"] {
          color: #0A66C2;
          border-color: rgba(10, 102, 194, 0.35);
          background: rgba(10, 102, 194, 0.08);
        }
        .sfs-social-icon[data-platform="LinkedIn"]:hover {
          background: #0A66C2;
          color: #ffffff;
          border-color: #0A66C2;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(10, 102, 194, 0.45);
        }

        .sfs-social-icon[data-platform="Telegram"] {
          color: #26A5E4;
          border-color: rgba(38, 165, 228, 0.35);
          background: rgba(38, 165, 228, 0.08);
        }
        .sfs-social-icon[data-platform="Telegram"]:hover {
          background: #26A5E4;
          color: #ffffff;
          border-color: #26A5E4;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(38, 165, 228, 0.45);
        }

        .sfs-footer-section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #2ebd3a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0 0 24px 0;
          position: relative;
          display: inline-block;
        }

        .sfs-footer-section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 32px;
          height: 2px;
          background: #2ebd3a;
          border-radius: 2px;
        }

        .sfs-footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sfs-footer-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .sfs-footer-link:hover {
          color: #ffffff;
          transform: translateX(5px);
        }

        .sfs-footer-link-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2ebd3a;
          opacity: 0.6;
          transition: all 0.2s ease;
        }

        .sfs-footer-link:hover .sfs-footer-link-dot {
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 8px #2ebd3a;
        }

        .sfs-footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sfs-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .sfs-footer-contact-icon {
          color: #2ebd3a;
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .sfs-footer-contact-text strong {
          color: #ffffff;
          display: block;
          margin-bottom: 2px;
        }

        .sfs-footer-newsletter-wrap {
          border-top: 1.5px dashed rgba(255, 255, 255, 0.1);
          border-bottom: 1.5px dashed rgba(255, 255, 255, 0.1);
          padding: 30px 0;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .sfs-newsletter-info h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .sfs-newsletter-info p {
          font-size: 13.5px;
          color: #cbd5e1;
          margin: 0;
        }

        .sfs-newsletter-form {
          display: flex;
          width: 100%;
          max-width: 440px;
          background: rgba(255, 255, 255, 0.04);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 4px;
          transition: all 0.25s ease;
        }

        .sfs-newsletter-form:focus-within {
          border-color: #2ebd3a;
          box-shadow: 0 0 16px rgba(46, 189, 58, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .sfs-newsletter-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          padding: 10px 14px;
          font-size: 13.5px;
          width: 100%;
        }

        .sfs-newsletter-input::placeholder {
          color: #94a3b8;
        }

        .sfs-newsletter-btn {
          background: #2ebd3a;
          color: #ffffff;
          border: none;
          outline: none;
          border-radius: 10px;
          padding: 0 20px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .sfs-newsletter-btn:hover {
          background: #239c2d;
          box-shadow: 0 4px 12px rgba(46, 189, 58, 0.3);
        }

        .sfs-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 30px;
          border-top: 1.5px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
        }

        .sfs-footer-copy {
          font-size: 13px;
          color: #94a3b8;
          margin: 0;
        }

        .sfs-footer-copy strong {
          color: #cbd5e1;
        }

        .sfs-footer-badges {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .sfs-footer-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
        }

        .sfs-footer-badge-icon {
          color: #2ebd3a;
        }

        @media (max-width: 992px) {
          .sfs-footer-main {
            grid-template-columns: 1.2fr 1fr;
          }
          .sfs-footer-brand {
            grid-column: span 2;
          }
        }

        @media (max-width: 600px) {
          .sfs-footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sfs-footer-brand {
            grid-column: span 1;
          }
          .sfs-footer-container {
            padding-top: 60px;
          }
          .sfs-footer-newsletter-wrap {
            flex-direction: column;
            align-items: flex-start;
          }
          .sfs-newsletter-form {
            max-width: 100%;
          }
          .sfs-footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .sfs-footer-badges {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="sfs-footer">
        <div className="sfs-footer-overlay"></div>
        <div className="sfs-footer-container">

          {/* NEWSLETTER ROW */}
          <div className="sfs-footer-newsletter-wrap">
            <div className="sfs-newsletter-info">
              <h3>Get Safety Alerts & Updates</h3>
              <p>Subscribe to our corporate newsletter for modern verification insights.</p>
            </div>

            <form onSubmit={handleSubscribe} className="sfs-newsletter-form">
              <input
                className="sfs-newsletter-input"
                type="email"
                required
                placeholder={submitted ? "Thanks for subscribing!" : "Enter your corporate email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitted}
              />
              <button type="submit" className="sfs-newsletter-btn" disabled={submitted}>
                {submitted ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>

          {/* MAIN COLUMN GRID */}
          <div className="sfs-footer-main">

            {/* COLUMN 1: BRAND INFORMATION */}
            <div className="sfs-footer-brand">
              <Link to="/" className="sfs-footer-logo-wrap" style={{ textDecoration: 'none' }}>
                <div className="sfs-footer-logo-box">
                  <img src={logo} alt="ScanForSafe Logo" className="sfs-footer-logo-img" />
                </div>
                <div>
                  <h2 className="sfs-footer-title">
                    Scan<span>ForSafe</span>
                  </h2>
                  <div className="sfs-footer-tagline">Smart Shield</div>
                </div>
              </Link>

              <p className="sfs-footer-desc">
                Pioneering secure QR code solutions, visual verification systems, and smart tracking technologies. Empowering a safer and more authentic world through trusted hardware and visual tags.
              </p>

              <div className="sfs-footer-socials">
                {socialLinks.map(({ Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sfs-social-icon"
                    data-platform={label}
                    title={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 2: NAVIGATION */}
            <div>
              <h4 className="sfs-footer-section-title">Navigation</h4>
              <div className="sfs-footer-links">
                {navLinks.map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    className="sfs-footer-link"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <span className="sfs-footer-link-dot"></span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* COLUMN 3: CONTACT INFORMATION */}
            <div>
              <h4 className="sfs-footer-section-title">Contact Us</h4>
              <div className="sfs-footer-contact-list">

                <div className="sfs-footer-contact-item">
                  <Phone className="sfs-footer-contact-icon" size={17} />
                  <div className="sfs-footer-contact-text">
                    <strong>Phone</strong>
                    +91 98765 43210
                  </div>
                </div>

                <div className="sfs-footer-contact-item">
                  <Mail className="sfs-footer-contact-icon" size={17} />
                  <div className="sfs-footer-contact-text">
                    <strong>Email</strong>
                    info@scanforsafe.com
                  </div>
                </div>

                <div className="sfs-footer-contact-item">
                  <MapPin className="sfs-footer-contact-icon" size={17} />
                  <div className="sfs-footer-contact-text">
                    <strong>Corporate Office</strong>
                    SFSI Innovations Tower, Phase-2,
                    Cyber Heights, Hyderabad, India
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* FOOTER BOTTOM ROW */}
          <div className="sfs-footer-bottom">
            <p className="sfs-footer-copy">
              &copy; {new Date().getFullYear()} <strong>ScanForSafe Innovations Pvt Ltd</strong>. All rights reserved.
            </p>

            <div className="sfs-footer-badges">
              <span className="sfs-footer-badge">
                <Lock size={14} className="sfs-footer-badge-icon" />
                SSL Secured
              </span>

              <span className="sfs-footer-badge">
                <ShieldCheck size={14} className="sfs-footer-badge-icon" />
                ISO 27001 Certified
              </span>

              <span className="sfs-footer-badge">
                <Leaf size={14} className="sfs-footer-badge-icon" />
                Eco Friendly tags
              </span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}