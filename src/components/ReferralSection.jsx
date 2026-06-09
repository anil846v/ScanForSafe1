import { useNavigate } from "react-router-dom";

export default function ReferralSection() {
  const navigate = useNavigate();

  return (
    <section style={{
      width: "100%",
      background: "#f0f7f1",
      padding: "52px 0",
      fontFamily: "'DM Sans', sans-serif",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        .rs-wrap { max-width: 1060px; margin: 0 auto; padding: 0 24px; }

        .rs-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 18px 7px 12px; border-radius: 999px;
          border: 1.5px solid #c6e9c8; background: #fff; margin-bottom: 20px;
        }
        .rs-badge-icon {
          width: 26px; height: 26px; background: #dcfce7;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
        }
        .rs-badge-text {
          font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700;
          color: #166534; letter-spacing: 0.1em; text-transform: uppercase;
        }

        .rs-heading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.9rem, 4vw, 2.9rem);
          font-weight: 900; color: #0d1a0f; line-height: 1.08;
          letter-spacing: -0.03em; margin: 0 0 14px;
        }
        .rs-heading .green { color: #16a34a; }

        .rs-desc {
          font-size: 15px; color: #4b6453; line-height: 1.7;
          max-width: 580px; margin: 0 auto 36px;
        }

        .rs-row { display: flex; align-items: stretch; gap: 0; margin-bottom: 16px; }

        .rs-card {
          flex: 1; background: #fff; border: 1.5px solid #e2ece3;
          border-radius: 20px; padding: 32px 22px 28px;
          display: flex; flex-direction: column; align-items: center;
          text-align: center; position: relative;
          box-shadow: 0 2px 16px rgba(0,0,0,0.04); min-height: 420px;
        }

        .rs-step {
          position: absolute; top: 14px; left: 14px;
          width: 26px; height: 26px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 800;
        }

        .rs-icon-circle {
          width: 100px; height: 100px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 6px 0 20px;
        }

        .rs-card-title {
          font-family: 'Sora', sans-serif; font-size: 16px; font-weight: 800;
          color: #0d1a0f; margin: 0 0 10px; letter-spacing: -0.02em;
        }
        .rs-card-desc {
          font-size: 13.5px; color: #5a7060; line-height: 1.65;
          margin: 0 0 18px; flex: 1; max-width: 230px;
        }

        .rs-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 16px; border-radius: 999px;
          font-size: 12px; font-weight: 600; white-space: nowrap; margin-top: auto;
        }

        .rs-arrow {
          width: 40px; flex-shrink: 0; display: flex;
          align-items: center; justify-content: center; padding-bottom: 80px;
        }

        .rs-cats {
          display: flex; gap: 7px; align-items: flex-start;
          justify-content: center; flex-wrap: wrap; width: 100%; margin-top: 4px;
        }
        .rs-cat { display: flex; flex-direction: column; align-items: center; gap: 4px; min-width: 40px; }
        .rs-cat-box {
          width: 38px; height: 38px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
        }
        .rs-cat-box img { width: 24px; height: 24px; object-fit: contain; }
        .rs-cat-label { font-size: 9.5px; font-weight: 500; color: #5a7060; text-align: center; line-height: 1.3; }

        .rs-trust {
          display: flex; align-items: stretch; background: #fff;
          border: 1.5px solid #e2ece3; border-radius: 16px;
          margin-bottom: 32px; overflow: hidden;
        }
        .rs-trust-item {
          flex: 1; display: flex; align-items: center; gap: 11px;
          padding: 16px 18px; border-right: 1.5px solid #e8ede9;
        }
        .rs-trust-item:last-child { border-right: none; }
        .rs-trust-icon {
          width: 46px; height: 46px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .rs-trust-icon img { width: 28px; height: 28px; object-fit: contain; }
        .rs-trust-title { font-family: 'Sora', sans-serif; font-size: 12.5px; font-weight: 700; color: #0d1a0f; line-height: 1.25; }
        .rs-trust-sub { font-size: 11.5px; color: #7a9382; margin-top: 2px; }

        .rs-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 48px; border-radius: 999px;
          background: linear-gradient(135deg, #166534 0%, #16a34a 50%, #0f4a2a 100%);
          color: #fff; font-family: 'Sora', sans-serif; font-size: 16px;
          font-weight: 700; border: none; cursor: pointer; letter-spacing: -0.01em;
        }
        .rs-sub {
          display: flex; align-items: center; gap: 6px; justify-content: center;
          font-size: 13px; color: #5a7060; margin-top: 14px;
        }

        @media (max-width: 780px) {
          .rs-row { flex-direction: column; gap: 12px; }
          .rs-arrow { display: none; }
          .rs-card { min-height: unset; width: 100%; }
          .rs-trust { flex-wrap: wrap; }
          .rs-trust-item { flex: 0 0 calc(50% - 1px); border-right: none; border-bottom: 1.5px solid #e8ede9; }
          .rs-trust-item:nth-child(odd) { border-right: 1.5px solid #e8ede9; }
          .rs-trust-item:last-child { border-bottom: none; }
          .rs-cta { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="rs-wrap">

        {/* HEADER */}
        <div style={{ textAlign: "center" }}>
          <div className="rs-badge">
            <div className="rs-badge-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="rs-badge-text">Referral Program</span>
          </div>

          <h2 className="rs-heading">
            Share Safety. <span className="green">Earn Rewards.</span>
          </h2>

          <p className="rs-desc">
            Invite your friends and family to ScanForSafe and help them stay protected.<br />
            When they activate a product, you earn rewards credited directly to your wallet.
          </p>
        </div>

        {/* 3 CARDS */}
        <div className="rs-row">

          {/* Card 1 */}
          <div className="rs-card">
            <div className="rs-step" style={{ background: "#dbeafe", color: "#1d4ed8" }}>01</div>
            <div className="rs-icon-circle" style={{ background: "#e8eeff" }}>
              <img
                src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f517.png"
                alt="link"
                style={{ width: 68, height: 68 }}
              />
            </div>
            <h3 className="rs-card-title">Share Your Referral Link</h3>
            <p className="rs-card-desc">
              Get your unique referral link or code from your dashboard and share it with friends and family.
            </p>
            <div className="rs-pill" style={{ background: "#eff6ff", border: "1.5px solid #bfdbfe", color: "#1d4ed8" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
              Unique to You &nbsp;•&nbsp; Easy to Share
            </div>
          </div>

          {/* Arrow */}
          <div className="rs-arrow">
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <path d="M1 10h8M7 5l5 5-5 5" stroke="#c0d0c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 10h8M17 5l5 5-5 5" stroke="#d8e8da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Card 2 */}
          <div className="rs-card">
            <div className="rs-step" style={{ background: "#ede9fe", color: "#6d28d9" }}>02</div>
            <div className="rs-icon-circle" style={{ background: "#f0ebff" }}>
              <img
                src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f46b.png"
                alt="people"
                style={{ width: 68, height: 68 }}
              />
            </div>
            <h3 className="rs-card-title">They Activate ScanForSafe</h3>
            <p className="rs-card-desc">
              When your friends purchase and activate any ScanForSafe product, the activation is linked to your referral.
            </p>
            <div className="rs-cats">
              {[
                { img: "1f697", alt: "car", label: "Vehicle\nTags", bg: "#f0fdf4", border: "#bbf7d0" },
                { img: "1f474", alt: "senior", label: "Senior\nBands", bg: "#fffbeb", border: "#fde68a" },
                { img: "1f476", alt: "child", label: "Child Safety\nTags", bg: "#eff6ff", border: "#bfdbfe" },
                { img: "1f43e", alt: "paw", label: "Pet\nTags", bg: "#fdf2f8", border: "#fbcfe8" },
                { img: "1f9f3", alt: "luggage", label: "Luggage\nTags", bg: "#eff6ff", border: "#bfdbfe" },
              ].map((cat) => (
                <div className="rs-cat" key={cat.alt}>
                  <div className="rs-cat-box" style={{ background: cat.bg, border: `1.5px solid ${cat.border}` }}>
                    <img
                      src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/${cat.img}.png`}
                      alt={cat.alt}
                    />
                  </div>
                  <span className="rs-cat-label">
                    {cat.label.split("\n").map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="rs-arrow">
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <path d="M1 10h8M7 5l5 5-5 5" stroke="#c0d0c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 10h8M17 5l5 5-5 5" stroke="#d8e8da" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Card 3 */}
          <div className="rs-card">
            <div className="rs-step" style={{ background: "#dcfce7", color: "#16a34a" }}>03</div>
            <div className="rs-icon-circle" style={{ background: "#e8f8ee" }}>
              <img
                src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f381.png"
                alt="gift"
                style={{ width: 68, height: 68 }}
              />
            </div>
            <h3 className="rs-card-title">Earn Rewards</h3>
            <p className="rs-card-desc">
              You earn cash rewards or premium subscription benefits credited directly to your wallet.
            </p>
            <div className="rs-pill" style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", color: "#16a34a" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
              </svg>
              Direct to Wallet &nbsp;•&nbsp; Instant Credit
            </div>
          </div>

        </div>

        {/* TRUST BAR */}
        <div className="rs-trust">
          {[
            { img: "1f6e1-fe0f", alt: "shield", bg: "#dcfce7", title: "100% Safe", sub: "and Secure" },
            { img: "1f512",      alt: "lock",   bg: "#dbeafe", title: "Your Data", sub: "Remains Private" },
            { img: "2705",       alt: "check",  bg: "#dcfce7", title: "Trusted by", sub: "Thousands" },
            { img: "1f3f7-fe0f", alt: "tag",    bg: "#fef9c3", title: "Exclusive Rewards", sub: "& Offers" },
            { img: "1f3a7",      alt: "headphones", bg: "#ede9fe", title: "Dedicated", sub: "Support" },
          ].map((t, i) => (
            <div className="rs-trust-item" key={i}>
              <div className="rs-trust-icon" style={{ background: t.bg }}>
                <img
                  src={`https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/${t.img}.png`}
                  alt={t.alt}
                />
              </div>
              <div>
                <div className="rs-trust-title">{t.title}</div>
                <div className="rs-trust-sub">{t.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button className="rs-cta" onClick={() => navigate("/qr-form")}>
            <img
              src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f381.png"
              alt="gift"
              style={{ width: 20, height: 20 }}
            />
            Start Referring Today
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>

          <div className="rs-sub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Protect more people. Earn more rewards.
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#e74c3c">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}