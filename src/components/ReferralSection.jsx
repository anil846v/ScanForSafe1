import { useNavigate } from "react-router-dom";

// ─── MAIN CARD ICONS (large, bold, 72×72 viewBox) ────────────────────────────

const IconLink = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="44" r="12" stroke="#3b82f6" strokeWidth="3.2" strokeLinecap="round"/>
    <circle cx="44" cy="28" r="12" stroke="#3b82f6" strokeWidth="3.2" strokeLinecap="round"/>
    <line x1="34" y1="38" x2="38" y2="34" stroke="#3b82f6" strokeWidth="3.2" strokeLinecap="round"/>
    <path d="M50 18 L56 12 M56 22 L62 22 M50 12 L50 6" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const IconActivation = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="22" r="10" stroke="#7c3aed" strokeWidth="3.2" strokeLinecap="round"/>
    <path d="M10 58 C10 44 46 44 46 58" stroke="#7c3aed" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="52" cy="46" r="14" fill="#ede9fe" stroke="#7c3aed" strokeWidth="3"/>
    <path d="M45 46 L50 51 L59 41" stroke="#7c3aed" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconWallet = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="22" width="52" height="36" rx="7" fill="#dcfce7" stroke="#16a34a" strokeWidth="3.2"/>
    <path d="M10 34 L62 34" stroke="#16a34a" strokeWidth="3" strokeLinecap="round"/>
    <rect x="42" y="40" width="16" height="11" rx="5.5" fill="#16a34a"/>
    <circle cx="50" cy="45.5" r="2.5" fill="#dcfce7"/>
    <path d="M20 18 L20 15 C20 12 24 10 28 10 L44 10 C48 10 52 12 52 15 L52 18" stroke="#16a34a" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

// ─── CATEGORY ICONS (compact, 36×36 viewBox, bold lines) ─────────────────────

const CatVehicle = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="18" width="30" height="13" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.2"/>
    <path d="M8 18 L12 9 H28 L32 18" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="13" cy="31" r="4" fill="#16a34a"/>
    <circle cx="13" cy="31" r="1.8" fill="#dcfce7"/>
    <circle cx="27" cy="31" r="4" fill="#16a34a"/>
    <circle cx="27" cy="31" r="1.8" fill="#dcfce7"/>
    <line x1="5" y1="23" x2="35" y2="23" stroke="#16a34a" strokeWidth="1.6" strokeLinecap="round"/>
    <rect x="14" y="10" width="12" height="8" rx="2" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5"/>
  </svg>
);

const CatSenior = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="10" r="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2.2"/>
    <path d="M8 35 C8 26 32 26 32 35" stroke="#ca8a04" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="20" cy="10" r="2.5" fill="#fde68a"/>
    <path d="M16 7 C17 4 23 4 24 7" stroke="#ca8a04" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M13 22 L16 25 L21 20" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="27" y="17" width="10" height="6" rx="3" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.8"/>
  </svg>
);

const CatChild = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="10" r="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2.2"/>
    <path d="M8 35 C8 26 32 26 32 35" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="17" cy="11" r="1.2" fill="#3b82f6"/>
    <circle cx="23" cy="11" r="1.2" fill="#3b82f6"/>
    <path d="M17 14 C18 16 22 16 23 14" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 20 L16 23 L21 18" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 5 L32 9 L27 14" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CatPet = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="10" cy="12" rx="4" ry="5" fill="#fce7f3" stroke="#ec4899" strokeWidth="2"/>
    <ellipse cx="30" cy="12" rx="4" ry="5" fill="#fce7f3" stroke="#ec4899" strokeWidth="2"/>
    <ellipse cx="16" cy="8" rx="3.5" ry="4.5" fill="#fce7f3" stroke="#ec4899" strokeWidth="2"/>
    <ellipse cx="24" cy="8" rx="3.5" ry="4.5" fill="#fce7f3" stroke="#ec4899" strokeWidth="2"/>
    <path d="M13 22 C13 31 20 37 20 37 C20 37 27 31 27 22 A7 7 0 0 0 13 22 Z" fill="#fce7f3" stroke="#ec4899" strokeWidth="2.2" strokeLinejoin="round"/>
    <ellipse cx="20" cy="27" rx="3.5" ry="2.5" fill="#ec4899" opacity="0.45"/>
  </svg>
);

const CatLuggage = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="14" width="24" height="20" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2.2"/>
    <path d="M25 14 L25 10 C25 8 22 7 20 7 C18 7 15 8 15 10 L15 14" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="20" y1="20" x2="20" y2="28" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="24" x2="24" y2="24" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="20" x2="32" y2="20" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2.5 2.5"/>
    <rect x="6" y="29" width="4" height="6" rx="2" fill="#93c5fd"/>
    <rect x="30" y="29" width="4" height="6" rx="2" fill="#93c5fd"/>
  </svg>
);

// ─── TRUST BAR ICONS ──────────────────────────────────────────────────────────

const TrustShield = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 3 L22 6.5 V12.5 C22 18 17.5 22 13 24 C8.5 22 4 18 4 12.5 V6.5 Z" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 13 L12 16 L17 10" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrustLock = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="5" y="12" width="16" height="11" rx="3" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.8"/>
    <path d="M9 12 V9 C9 6.2 17 6.2 17 9 V12" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="13" cy="17" r="2" fill="#3b82f6"/>
    <line x1="13" y1="19" x2="13" y2="21" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const TrustCheck = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.8"/>
    <path d="M8 13 L11.5 16.5 L18 9" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrustTag = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 3 H7 C5 3 4 4 4 6 V12 L14 22 L22 14 Z" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="9" cy="9" r="1.8" fill="#ca8a04"/>
    <path d="M16 7 L20 11" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const TrustHeadset = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M4 13 C4 7.5 9 3 13 3 C17 3 22 7.5 22 13" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
    <rect x="3" y="12" width="4" height="7" rx="2" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.6"/>
    <rect x="19" y="12" width="4" height="7" rx="2" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.6"/>
    <path d="M23 18 V20 C23 21.7 21.7 23 20 23 H16" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round"/>
    <rect x="13" y="21" width="5" height="3.5" rx="1.75" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.4"/>
  </svg>
);

const IconGiftBtn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="9" width="18" height="13" rx="2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="13" x2="21" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="9" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8.5 9 C8.5 6 10 4 12 4 C14 4 15.5 6 15.5 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 4 C7 2 5 4 7 6 L9 9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M15 4 C17 2 19 4 17 6 L15 9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ReferralSection() {
  const navigate = useNavigate();

  const categories = [
    { Icon: CatVehicle,  label: "Vehicle\nTags",       bg: "#f0fdf4", border: "#bbf7d0" },
    { Icon: CatSenior,   label: "Senior\nBands",       bg: "#fffbeb", border: "#fde68a" },
    { Icon: CatChild,    label: "Child\nTags",         bg: "#eff6ff", border: "#bfdbfe" },
    { Icon: CatPet,      label: "Pet\nTags",           bg: "#fdf2f8", border: "#fbcfe8" },
    { Icon: CatLuggage,  label: "Luggage\nTags",       bg: "#eff6ff", border: "#bfdbfe" },
  ];

  const trustItems = [
    { Icon: TrustShield,  bg: "#dcfce7", title: "100% Safe",         sub: "and Secure" },
    { Icon: TrustLock,    bg: "#dbeafe", title: "Your Data",         sub: "Remains Private" },
    { Icon: TrustCheck,   bg: "#dcfce7", title: "Trusted by",        sub: "Thousands" },
    { Icon: TrustTag,     bg: "#fef9c3", title: "Exclusive Rewards", sub: "& Offers" },
    { Icon: TrustHeadset, bg: "#ede9fe", title: "Dedicated",         sub: "Support" },
  ];

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

        .rs-row {
          display: flex; align-items: stretch; gap: 0; margin-bottom: 16px;
        }

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
          width: 110px; height: 110px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 6px 0 22px;
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

        /* ── Category icons: single row, no wrap ── */
        .rs-cats {
          display: flex; gap: 6px; align-items: flex-start;
          justify-content: center; width: 100%; margin-top: 6px;
          flex-wrap: nowrap;
        }
        .rs-cat {
          display: flex; flex-direction: column; align-items: center;
          gap: 5px; flex: 1; min-width: 0;
        }
        .rs-cat-box {
          width: 48px; height: 48px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .rs-cat-label {
          font-size: 9px; font-weight: 600; color: #5a7060;
          text-align: center; line-height: 1.3; white-space: pre-line;
        }

        .rs-trust {
          display: flex; align-items: stretch; background: #fff;
          border: 1.5px solid #e2ece3; border-radius: 16px;
          margin-bottom: 32px; overflow: hidden;
        }
        .rs-trust-item {
          flex: 1; display: flex; align-items: center; gap: 10px;
          padding: 14px 14px; border-right: 1.5px solid #e8ede9;
        }
        .rs-trust-item:last-child { border-right: none; }
        .rs-trust-icon {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .rs-trust-title {
          font-family: 'Sora', sans-serif; font-size: 12px;
          font-weight: 700; color: #0d1a0f; line-height: 1.25;
        }
        .rs-trust-sub { font-size: 11px; color: #7a9382; margin-top: 2px; }

        .rs-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 48px; border-radius: 999px;
          background: linear-gradient(135deg, #166534 0%, #16a34a 50%, #0f4a2a 100%);
          color: #fff; font-family: 'Sora', sans-serif; font-size: 16px;
          font-weight: 700; border: none; cursor: pointer; letter-spacing: -0.01em;
          transition: opacity 0.2s, transform 0.15s;
        }
        .rs-cta:hover { opacity: 0.9; transform: translateY(-2px); }

        .rs-sub {
          display: flex; align-items: center; gap: 6px; justify-content: center;
          font-size: 13px; color: #5a7060; margin-top: 14px;
        }

        @media (max-width: 780px) {
          .rs-row { flex-direction: column; gap: 12px; }
          .rs-arrow { display: none; }
          .rs-card { min-height: unset; width: 100%; }
          .rs-cats { flex-wrap: wrap; }
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
            <div className="rs-icon-circle" style={{ background: "#dbeafe" }}>
              <IconLink />
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
            <div className="rs-icon-circle" style={{ background: "#ede9fe" }}>
              <IconActivation />
            </div>
            <h3 className="rs-card-title">They Activate ScanForSafe</h3>
            <p className="rs-card-desc">
              When your friends purchase and activate any ScanForSafe product, the activation is linked to your referral.
            </p>
            <div className="rs-cats">
              {categories.map(({ Icon, label, bg, border }) => (
                <div className="rs-cat" key={label}>
                  <div className="rs-cat-box" style={{ background: bg, border: `1.5px solid ${border}` }}>
                    <Icon />
                  </div>
                  <span className="rs-cat-label">{label}</span>
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
            <div className="rs-icon-circle" style={{ background: "#dcfce7" }}>
              <IconWallet />
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
          {trustItems.map(({ Icon, bg, title, sub }, i) => (
            <div className="rs-trust-item" key={i}>
              <div className="rs-trust-icon" style={{ background: bg }}>
                <Icon />
              </div>
              <div>
                <div className="rs-trust-title">{title}</div>
                <div className="rs-trust-sub">{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button className="rs-cta" onClick={() => navigate("/qr-form")}>
            <IconGiftBtn />
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