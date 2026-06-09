import React from "react";

// ── Icons ────────────────────────────────────────────────────────────────────
const ShieldCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
  </svg>
);
const RefreshCw = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);
const Lock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);
const TargetIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const EyeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const CheckIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
);
const UsersIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const BulbIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
  </svg>
);
const HeartIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);
const Globe = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
  </svg>
);
const UserGroup = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const HeadSet = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0118 0v6" />
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
  </svg>
);
const ShieldStat = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
  </svg>
);
const PeopleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);

// ── Logo ─────────────────────────────────────────────────────────────────────
const Logo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <svg width="32" height="32" viewBox="0 0 40 40">
      <polygon points="20,2 38,10 38,24 20,38 2,24 2,10" fill="#1a2332" stroke="#22c55e" strokeWidth="2.5" />
      <text x="20" y="27" textAnchor="middle" fontSize="17" fontWeight="bold" fill="#22c55e" fontFamily="sans-serif">S</text>
    </svg>
    <span style={{ fontWeight: 700, fontSize: 17, color: "#fff" }}>
      Scan<span style={{ color: "#22c55e" }}>For</span>Safe
    </span>
  </div>
);

// ── Avatar placeholder ────────────────────────────────────────────────────────
const Avatar = () => (
  <div style={{
    width: 120, height: 140,
    background: "linear-gradient(160deg, #b8ccd8 0%, #8fa8b8 100%)",
    borderRadius: 8, flexShrink: 0,
    display: "flex", alignItems: "flex-end", justifyContent: "center",
    overflow: "hidden"
  }}>
    <svg viewBox="0 0 80 95" width="80" height="95" fill="#6b8a9a">
      <circle cx="40" cy="28" r="20" />
      <ellipse cx="40" cy="90" rx="34" ry="24" />
    </svg>
  </div>
);

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AboutUs() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, Arial, sans-serif", color: "#1a2332", background: "#fff", margin: 0, padding: 0 }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        background: "#1a2332", display: "flex", alignItems: "center",
        justifyContent: "space-between", padding: "0 48px", height: 62,
        position: "sticky", top: 0, zIndex: 100,
        borderBottom: "1px solid #243040"
      }}>
        <Logo />
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {["Home", "How It Works", "Features", "Solutions"].map(item => (
            <a key={item} href="#" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 13.5, fontWeight: 500 }}>{item}</a>
          ))}
          <a href="#" style={{ color: "#22c55e", textDecoration: "none", fontSize: 13.5, fontWeight: 700, borderBottom: "2px solid #22c55e", paddingBottom: 2 }}>About Us</a>
          <a href="#" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 13.5, fontWeight: 500 }}>Contact Us</a>
          <a href="#" style={{
            background: "transparent", border: "2px solid #22c55e",
            color: "#fff", padding: "7px 20px", borderRadius: 6,
            textDecoration: "none", fontSize: 13.5, fontWeight: 700
          }}>Get in Touch</a>
        </div>
      </nav>

      {/* ── HERO — full aboutus.png image, no overlay ── */}
      <div style={{ width: "100%", lineHeight: 0 }}>
        <img
          src="/aboutus.png"
          alt="About ScanForSafe"
          style={{ width: "100%", maxHeight: 520, objectFit: "cover", objectPosition: "center top", display: "block" }}
        />
      </div>

      {/* ── MISSION & VISION ── */}
      <section style={{ padding: "52px 48px 44px", background: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 920, margin: "0 auto" }}>

          {/* Mission */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 10, background: "#f0fdf4",
              border: "1px solid #bbf7d0", display: "flex", alignItems: "center",
              justifyContent: "center", flexShrink: 0
            }}>
              <TargetIcon />
            </div>
            <div>
              <h2 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 700, color: "#1a2332" }}>
                Our <span style={{ color: "#22c55e" }}>Mission</span>
              </h2>
              <p style={{ margin: 0, color: "#5a6472", fontSize: 13.5, lineHeight: 1.75 }}>
                To empower people and businesses with innovative, easy-to-use, and reliable solutions that enhance security, build trust, and create peace of mind.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 10, background: "#eef2ff",
              border: "1px solid #c7d2fe", display: "flex", alignItems: "center",
              justifyContent: "center", flexShrink: 0
            }}>
              <EyeIcon />
            </div>
            <div>
              <h2 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 700, color: "#1a2332" }}>
                Our <span style={{ color: "#6366f1" }}>Vision</span>
              </h2>
              <p style={{ margin: 0, color: "#5a6472", fontSize: 13.5, lineHeight: 1.75 }}>
                To be the world's most trusted platform for digital identity and asset protection, enabling a safer and more transparent tomorrow.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ height: 1, background: "#e5e7eb" }} />
      </div>

      {/* ── CORE VALUES ── */}
      <section style={{ padding: "44px 48px 52px", background: "#fff" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          {/* heading */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 36 }}>
            <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#1a2332", whiteSpace: "nowrap" }}>
              Our <span style={{ color: "#1a2332" }}>Core Values</span>
            </h2>
            <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
          </div>

          {/* 4 value columns */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {[
              { icon: <CheckIcon />, iconBg: "#f0fdf4", iconBorder: "#bbf7d0", label: "Integrity", desc: "We uphold honesty and transparency in everything we do." },
              { icon: <UsersIcon />, iconBg: "#eef2ff", iconBorder: "#c7d2fe", label: "Customer Focus", desc: "Our customers are at the heart of our innovation and decisions." },
              { icon: <BulbIcon />, iconBg: "#f0fdf4", iconBorder: "#bbf7d0", label: "Innovation", desc: "We continuously innovate to deliver smarter and more secure solutions." },
              { icon: <HeartIcon />, iconBg: "#eef2ff", iconBorder: "#c7d2fe", label: "Commitment", desc: "We are committed to quality, reliability, and long-term partnerships." },
            ].map(({ icon, iconBg, iconBorder, label, desc }) => (
              <div key={label} style={{ textAlign: "center", padding: "8px 12px" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%", background: iconBg,
                  border: `1.5px solid ${iconBorder}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 14px"
                }}>{icon}</div>
                <h3 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: "#1a2332" }}>{label}</h3>
                <p style={{ margin: 0, color: "#5a6472", fontSize: 12.5, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section style={{ padding: "48px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 700, color: "#1a2332" }}>
              Leadership <span style={{ color: "#22c55e" }}>Team</span>
            </h2>
            <p style={{ margin: 0, color: "#6b7280", fontSize: 13.5 }}>
              Experienced leaders driving innovation and trust at ScanForSafe.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              {
                name: "Sudharani M", role: "Director",
                quals: ["MBA", "PG Diploma in Computer Applications"],
                desc: "Experienced in business operations, customer engagement, and strategic planning. Passionate about delivering solutions that make the world safer and more connected."
              },
              {
                name: "Sailajeswari devi M", role: "Director",
                quals: ["MA Economics", "PG Diploma in Computer Applications"],
                desc: "Specialized in finance, administration, and business development. Focused on building sustainable growth and strong relationships."
              },
            ].map(({ name, role, quals, desc }) => (
              <div key={name} style={{
                background: "#fff", borderRadius: 12, padding: "20px",
                boxShadow: "0 1px 8px rgba(0,0,0,0.07)", border: "1px solid #e8edf2",
                display: "flex", gap: 16
              }}>
                <Avatar />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 3px", fontSize: 16, fontWeight: 700, color: "#1a2332" }}>{name}</h3>
                  <div style={{ color: "#22c55e", fontWeight: 600, fontSize: 12.5, marginBottom: 10 }}>{role}</div>
                  <ul style={{ margin: "0 0 10px", padding: "0 0 0 16px", color: "#374151", fontSize: 12.5, lineHeight: 1.7 }}>
                    {quals.map(q => <li key={q} style={{ marginBottom: 2 }}>• {q}</li>)}
                  </ul>
                  <p style={{ margin: 0, color: "#6b7280", fontSize: 12.5, lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WE EXIST ── */}
      <section style={{ padding: "0 48px 52px", background: "#f8fafc" }}>
        <div style={{
          maxWidth: 920, margin: "0 auto",
          background: "#fff", borderRadius: 12,
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
          padding: "24px 28px",
          display: "flex", alignItems: "center", gap: 20,
          position: "relative", overflow: "hidden"
        }}>
          {/* faint watermark shield */}
          <div style={{
            position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)",
            opacity: 0.05, pointerEvents: "none"
          }}>
            <svg width="110" height="110" viewBox="0 0 100 110">
              <polygon points="50,5 95,22 95,58 50,105 5,58 5,22" fill="#22c55e" />
            </svg>
          </div>
          <div style={{
            width: 48, height: 48, borderRadius: 10, background: "#f0fdf4",
            border: "1px solid #bbf7d0",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
          }}>
            <PeopleIcon />
          </div>
          <div style={{ zIndex: 1 }}>
            <h3 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 700, color: "#1a2332" }}>Why We Exist</h3>
            <p style={{ margin: 0, color: "#5a6472", fontSize: 13.5, lineHeight: 1.75 }}>
              We believe security is not just a feature, it's a promise. ScanForSafe was created to empower individuals and organizations with smart, simple, and secure technology that protects, connects, and gives peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS FOOTER ── */}
      <section style={{
        background: "#1a2332",
        padding: "28px 48px",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16, borderTop: "1px solid #243040"
      }}>
        {[
          { icon: <UserGroup />, value: "10K+", label: "Happy Customers" },
          { icon: <Globe />, value: "50+", label: "Countries Served" },
          { icon: <ShieldStat />, value: "99.9%", label: "Trust & Reliability" },
          { icon: <HeadSet />, value: "24/7", label: "Customer Support" },
        ].map(({ icon, value, label }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ color: "#22c55e", opacity: 0.85 }}>{icon}</div>
            <div>
              <div style={{ color: "#22c55e", fontWeight: 800, fontSize: 22, lineHeight: 1 }}>{value}</div>
              <div style={{ color: "#64748b", fontSize: 12.5, marginTop: 3 }}>{label}</div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}