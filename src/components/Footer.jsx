import {
  Facebook,
  Instagram,
  Send,
  Home,
  Users,
  Briefcase,
  Package,
  FileText,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Handshake,
  Star,
  Target,
  BookOpen,
  Lock,
  Leaf,
  ArrowRight,
  Zap,
  Lightbulb,
  Sparkles,
  Twitter,
  Linkedin,
  Globe,
} from "lucide-react";

const logo = "/logo.png";

const quickLinks = [
  { icon: <Home size={15} />, label: "Home" },
  { icon: <Users size={15} />, label: "About Us" },
  { icon: <Briefcase size={15} />, label: "Services" },
  { icon: <Package size={15} />, label: "Products" },
  { icon: <Lightbulb size={15} />, label: "Use Cases" },
  { icon: <Sparkles size={15} />, label: "Features" },
  { icon: <FileText size={15} />, label: "Blog" },
  { icon: <Send size={15} />, label: "Contact" },
];

const resources = [
  { icon: <ShieldCheck size={15} />, label: "Safety Guide" },
  { icon: <BookOpen size={15} />, label: "Scan Manual" },
  { icon: <Users size={15} />, label: "FAQ" },
  { icon: <Lock size={15} />, label: "Privacy Policy" },
  { icon: <FileText size={15} />, label: "Terms of Use" },
  { icon: <Globe size={15} />, label: "API Docs" },
];

const stats = [
  {
    icon: <ShieldCheck size={22} />,
    number: "50K+",
    label: "Products verified",
  },
  {
    icon: <Handshake size={22} />,
    number: "120+",
    label: "Partner brands",
  },
  {
    icon: <Star size={22} />,
    number: "4.9★",
    label: "User rating",
  },
  {
    icon: <Target size={22} />,
    number: "99.8%",
    label: "Scan accuracy",
  },
];

const socialLinks = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Send, label: "Telegram" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&display=swap');

        .footer-root * {
          font-family: 'Plus Jakarta Sans', sans-serif;
          box-sizing: border-box;
        }

        .footer-brand-font {
          font-family: 'Syne', sans-serif;
        }

        .footer-link-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 12px;
          cursor: pointer;
          color: #374151;
          transition: all 0.17s ease;
          border-bottom: 1px solid #edf2ee;
          gap: 12px;
        }

        .footer-link-row:last-child {
          border-bottom: none;
        }

        .footer-link-row:hover {
          background: #f0fdf4;
          color: #16a34a;
          padding-left: 16px;
        }

        .footer-link-row:hover .fl-arrow {
          transform: translateX(3px);
          color: #16a34a;
        }

        .fl-arrow {
          transition: transform 0.17s ease;
          color: #9ca3af;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          border: 1.5px solid #dce5de;
          background: white;
          color: #16a34a;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .social-btn:hover {
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(22,163,74,0.3);
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 22px;
          position: relative;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: #e5ece7;
        }

        .stat-card:last-child::after {
          display: none;
        }

        .stat-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 16px;
          background: linear-gradient(135deg, #22c55e 0%, #15803d 100%);
          color: white;
          box-shadow: 0 4px 14px rgba(22,163,74,0.3);
          flex-shrink: 0;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border-radius: 18px;
          border: 1px solid #e5ece7;
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .contact-card:hover {
          border-color: #bbf7d0;
          box-shadow: 0 4px 16px rgba(22,163,74,0.1);
          transform: translateX(3px);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: #dcfce7;
          color: #15803d;
          flex-shrink: 0;
        }

        .cta-footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 14px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .cta-footer-btn.primary {
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          border: none;
          box-shadow: 0 4px 16px rgba(22,163,74,0.35);
        }

        .cta-footer-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(22,163,74,0.45);
        }

        .cta-footer-btn.outline {
          background: transparent;
          color: #16a34a;
          border: 1.5px solid #16a34a;
        }

        .cta-footer-btn.outline:hover {
          background: #f0fdf4;
        }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
        }

        .newsletter-input {
          flex: 1;
          border: 1.5px solid #e5ece7;
          border-radius: 14px 0 0 14px;
          padding: 12px 14px;
          font-size: 13px;
          color: #374151;
          background: white;
          outline: none;
        }

        .newsletter-input:focus {
          border-color: #16a34a;
        }

        .newsletter-btn {
          padding: 12px 20px;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          border: none;
          border-radius: 0 14px 14px 0;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .logo-footer-img {
          height: 52px;
          width: auto;
          object-fit: contain;
        }

        .section-label {
          font-size: 11px;
          font-weight: 800;
          color: #16a34a;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        @media (max-width: 768px) {
          .footer-mobile-stack {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .newsletter-mobile {
            width: 100% !important;
          }

          .newsletter-mobile input {
            width: 100%;
          }

          .stat-card::after {
            display: none;
          }

          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>

      <footer
        className="footer-root"
        style={{
          background: "#f4f6f5",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            background: "white",
            boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
          }}
        >
          {/* TOP GREEN BAR */}
          <div
            style={{
              height: 5,
              background:
                "linear-gradient(90deg, #16a34a 0%, #22c55e 50%, #15803d 100%)",
            }}
          />

          {/* NEWSLETTER */}
          <div
            className="footer-mobile-stack"
            style={{
              background:
                "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              borderBottom: "1px solid #e5ece7",
              padding: "28px clamp(20px, 5vw, 60px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: 4 }}>
                Stay Updated
              </p>

              <h3
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#111827",
                  margin: 0,
                }}
              >
                Get product safety alerts & news
              </h3>
            </div>

            <div
              className="newsletter-mobile"
              style={{
                display: "flex",
                maxWidth: 480,
                width: "100%",
              }}
            >
              <input
                className="newsletter-input"
                type="email"
                placeholder="Enter your email address"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>

          {/* MAIN GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              padding: "clamp(24px, 5vw, 60px)",
            }}
          >
            {/* BRAND */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 18,
                }}
              >
                <img
                  src={logo}
                  alt="ScanForSafe"
                  className="logo-footer-img"
                />

                <div>
                  <h2
                    className="footer-brand-font"
                    style={{
                      fontSize: 26,
                      fontWeight: 800,
                      color: "#111827",
                      margin: 0,
                    }}
                  >
                    Scan<span style={{ color: "#16a34a" }}>ForSafe</span>
                  </h2>

                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#16a34a",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    Scan Smarter · Stay Safer
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "#4b5563",
                  maxWidth: 320,
                  marginBottom: 24,
                }}
              >
                Innovations in product safety & verification.
                Empowering a safer world through trusted technology.
              </p>

              {/* SOCIALS */}
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginBottom: 24,
                }}
              >
                {socialLinks.map(({ Icon, label }, i) => (
                  <button key={i} className="social-btn" title={label}>
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div
              style={{
                background: "#fafcfb",
                border: "1px solid #e5ece7",
                borderRadius: 18,
                padding: 24,
              }}
            >
              <p className="section-label">Navigation</p>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#111827",
                  margin: "0 0 18px",
                }}
              >
                Quick Links
              </h3>

              {quickLinks.map((item, i) => (
                <div key={i} className="footer-link-row">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "#16a34a",
                        display: "flex",
                      }}
                    >
                      {item.icon}
                    </span>

                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </span>
                  </div>

                  <ArrowRight size={14} className="fl-arrow" />
                </div>
              ))}
            </div>

            {/* RESOURCES */}
            <div
              style={{
                background: "#fafcfb",
                border: "1px solid #e5ece7",
                borderRadius: 18,
                padding: 24,
              }}
            >
              <p className="section-label">Help Center</p>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#111827",
                  margin: "0 0 18px",
                }}
              >
                Resources
              </h3>

              {resources.map((item, i) => (
                <div key={i} className="footer-link-row">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "#16a34a",
                        display: "flex",
                      }}
                    >
                      {item.icon}
                    </span>

                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </span>
                  </div>

                  <ArrowRight size={14} className="fl-arrow" />
                </div>
              ))}
            </div>

            {/* CONTACT */}
            <div>
              <p className="section-label">Get In Touch</p>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#111827",
                  margin: "0 0 18px",
                }}
              >
                Contact Us
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {[
                  {
                    icon: <Mail size={17} />,
                    title: "Email",
                    value: "info@scanforsafe.com",
                  },
                  {
                    icon: <Phone size={17} />,
                    title: "Phone",
                    value: "+91 98765 43210",
                  },
                  {
                    icon: <MapPin size={17} />,
                    title: "Location",
                    value: "India",
                  },
                ].map((item, i) => (
                  <div key={i} className="contact-card">
                    <div className="contact-icon">{item.icon}</div>

                    <div>
                      <h4
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#111827",
                          margin: "0 0 2px",
                        }}
                      >
                        {item.title}
                      </h4>

                      <p
                        style={{
                          fontSize: 13,
                          color: "#6b7280",
                          margin: 0,
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STATS */}
          <div
            style={{
              margin: "0 clamp(20px, 5vw, 60px) 30px",
              borderRadius: 18,
              border: "1px solid #e5ece7",
              background: "#f8faf9",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              {stats.map((item, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-icon-wrap">{item.icon}</div>

                  <div>
                    <h4
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#15803d",
                        margin: "0 0 2px",
                      }}
                    >
                      {item.number}
                    </h4>

                    <p
                      style={{
                        fontSize: 12,
                        color: "#6b7280",
                        margin: 0,
                      }}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="footer-mobile-stack"
            style={{
              margin: "0 clamp(20px, 5vw, 60px) 30px",
              borderRadius: 18,
              border: "1px solid #e5ece7",
              background:
                "linear-gradient(135deg, #fafcfb 0%, #f0fdf4 100%)",
              padding: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: 4 }}>
                Join Thousands of Users
              </p>

              <h2
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: "#111827",
                  margin: "0 0 8px",
                }}
              >
                Ready to scan{" "}
                <span style={{ color: "#16a34a" }}>
                  smarter?
                </span>
              </h2>

              <p
                style={{
                  fontSize: 14,
                  color: "#6b7280",
                  margin: 0,
                }}
              >
                Join thousands verifying product safety with
                ScanForSafe.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <button className="cta-footer-btn primary">
                <Zap size={15} />
                Get Started Free
              </button>

              <button className="cta-footer-btn outline">
                Learn More
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div
            className="footer-bottom"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              borderTop: "1px solid #e5ece7",
              padding: "20px clamp(20px, 5vw, 60px)",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: "#6b7280",
                margin: 0,
              }}
            >
              © 2025{" "}
              <strong style={{ color: "#374151" }}>
                ScanForSafe Innovations
              </strong>
              . All rights reserved.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              <span className="trust-badge">
                <Lock
                  size={14}
                  style={{ color: "#16a34a" }}
                />
                SSL Secured
              </span>

              <span className="trust-badge">
                <ShieldCheck
                  size={14}
                  style={{ color: "#16a34a" }}
                />
                ISO Certified
              </span>

              <span className="trust-badge">
                <Leaf
                  size={14}
                  style={{ color: "#16a34a" }}
                />
                Eco Friendly
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}