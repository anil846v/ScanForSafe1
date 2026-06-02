import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Shield, Award, Landmark, TrendingUp, HelpCircle, MapPin, Send, DollarSign } from "lucide-react";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useCounter(target, duration = 1800, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - prog, 3);
      setVal(Math.floor(ease * target));
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

function StatItem({ num, suffix, label, active, delay }) {
  const count = useCounter(num, 1600, active);
  return (
    <div style={{
      textAlign: 'center',
      opacity: active ? 1 : 0,
      transform: active ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity .6s ease ${delay}s, transform .6s ease ${delay}s`,
    }}>
      <div style={{
        fontFamily: "'Clash Display', 'Cabinet Grotesk', sans-serif",
        fontSize: 28, fontWeight: 800, color: '#fff',
        lineHeight: 1, letterSpacing: '-0.04em',
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: 11, color: 'rgba(186,230,253,0.75)', fontWeight: 600, marginTop: 4, letterSpacing: '.06em', textTransform: 'uppercase' }}>
        {label}
      </div>
    </div>
  );
}

/* ── BENEFIT CARD COMPONENT ── */
function BenefitCard({ icon, title, description, accentColor, gradientFrom, gradientTo, index }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const active = clicked || hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setClicked((prev) => !prev)}
      style={{
        position: 'relative',
        borderRadius: 16,
        border: active
          ? `2px solid #22c55e`
          : `2px solid #bbf7d0`,
        background:  '#ffffff',
        padding: '22px 20px 28px',
        overflow: 'hidden',
        transition: 'border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease, transform 0.25s cubic-bezier(0.34,1.3,0.64,1)',
        transform: active ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: active
          ? '0 8px 24px rgba(34,197,94,0.13), 0 2px 8px rgba(0,0,0,0.06)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        cursor: 'pointer',
      }}
    >
      {/* bottom green accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 20, right: 20,
        height: 3,
        borderRadius: '3px 3px 0 0',
        background: '#22c55e',
        opacity: active ? 1 : 0.35,
        transition: 'opacity 0.22s ease',
      }} />

      <div style={{
        width: 48, height: 48,
        borderRadius: 12,
        background: '#dcfce7',
        color: '#16a34a',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16,
      }}>
        {icon}
      </div>

      <h3 style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 16,
        fontWeight: 700,
        color: '#111827',
        marginBottom: 8,
        letterSpacing: '-0.01em',
        lineHeight: 1.25,
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: 12.5,
        color: '#64748b',
        lineHeight: 1.65,
      }}>
        {description}
      </p>
    </div>
  );
}

export default function Franchise() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [errors, setErrors] = useState({});
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsRef, statsInView] = useInView(0.3);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    investment: "100000",
    experience: "None",
    shopAvailable: "No",
    message: "",
  });

  const investmentTiers = {
    "50000": {
      tierName: "Silver Partner",
      minInvestment: "₹50,000",
      margins: "10%",
      pincodes: "2 Pincodes",
      inventory: "200 Safety Tags",
      marketingSupport: "Basic Digital Flyers & Social Media Kit",
      potentialRoi: "₹5000 / month",
    },
    "100000": {
      tierName: "Gold Partner",
      minInvestment: "₹1,00,000",
      margins: "20%",
      pincodes: "4 Pincodes (Exclusive)",
      inventory: "500 Safety Tags",
      marketingSupport: "Brochures, Banners, Digital Ads Support",
      potentialRoi: "₹20,000 / month",
    },
    "300000": {
      tierName: "Platinum Master Franchise",
      minInvestment: "₹3,00,000+",
      margins: "30%",
      pincodes: "Entire City / District",
      inventory: "1500 Safety Tags + NFC Cards",
      marketingSupport: "Full Local Ad Campaigns, Store Signage, Dedicated Account Manager",
      potentialRoi: "₹90,000 / month",
    },
  };

  const handleInputChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email address";
    }
    if (!formData.mobile.trim()) {
      errs.mobile = "WhatsApp Number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errs.mobile = "Must be a 10-digit number";
    }
    if (!formData.city.trim()) errs.city = "City is required";
    if (!formData.state.trim()) errs.state = "State is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      const randomId = "SFS-FRANCHISE-" + Math.floor(1000 + Math.random() * 9000);
      setTicketId(randomId);
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1200);
  };

  const currentTier = investmentTiers[formData.investment] || investmentTiers["100000"];

  const benefitCards = [
    {
      icon: <TrendingUp size={20} />,
      title: "High ROI Model",
      description: "Earn up to 10%–30% profit margin on physical QR visual safety tags & smart NFC cards distributed in your region.",
      accentColor: "#16a34a",
      gradientFrom: "#16a34a",
      gradientTo: "#4ade80",
    },
    {
      icon: <Shield size={20} />,
      title: "Exclusive Territory",
      description: "Secure exclusive ownership rights for dedicated pincodes. Zero local brand competition.",
      accentColor: "#0284c7",
      gradientFrom: "#0284c7",
      gradientTo: "#38bdf8",
    },
    {
      icon: <Landmark size={20} />,
      title: "Innovative Tech",
      description: "India's leading cloud network mapping QR-codes for vehicle safety, senior citizens, children, and pets.",
      accentColor: "#7c3aed",
      gradientFrom: "#7c3aed",
      gradientTo: "#a78bfa",
    },
    {
      icon: <Award size={20} />,
      title: "Marketing Support",
      description: "Receive complete physical branding collaterals, digital flyers, and targeted local ad campaign execution.",
      accentColor: "#ea580c",
      gradientFrom: "#ea580c",
      gradientTo: "#fb923c",
    },
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        .fr-page {
          font-family: 'Space Grotesk', sans-serif;
          min-height: 100vh;
          background: #f1f5f9;
          padding-top: 80px;
          overflow-x: hidden;
        }

        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(18px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes morphBlob {
          0%,100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; }
          25%      { border-radius: 40% 60% 30% 70% / 60% 40% 70% 50%; }
          50%      { border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%; }
          75%      { border-radius: 30% 70% 60% 40% / 70% 30% 60% 40%; }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-18px); }
        }
        @keyframes floatYSlow {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-26px) rotate(6deg); }
        }
        @keyframes scanBeam {
          0%   { top: -4px; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: .5; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.08); }
        }
        @keyframes orbMove1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(60px,-40px) scale(1.1); }
          66%      { transform: translate(-30px,30px) scale(.95); }
        }
        @keyframes orbMove2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-70px,30px) scale(1.05); }
          66%      { transform: translate(40px,-50px) scale(1.1); }
        }

        .fr-section {
          padding: 20px 24px;
          max-width: 1240px;
          margin: 0 auto;
        }

        .fr-grid-split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: start;
        }

        .fr-benefits-title {
          font-family: 'Outfit', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .fr-benefits-subtitle {
          font-size: 13px;
          color: #64748b;
          margin-bottom: 22px;
          font-weight: 500;
          line-height: 1.5;
        }

        .fr-benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .fr-calc-box {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 20px;
          padding: 24px;
          color: white;
          margin-top: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .fr-calc-title {
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .fr-calc-selector {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 16px 0;
        }

        .fr-calc-btn {
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 10px 4px;
          color: #cbd5e1;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.22s ease;
          text-align: center;
        }

        .fr-calc-btn:hover {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.06);
          color: white;
        }

        .fr-calc-btn.active {
          border-color: #2ebd3a;
          background: rgba(22, 163, 74, 0.12);
          color: #4ade80;
          box-shadow: 0 0 12px rgba(22, 163, 74, 0.2);
        }

        .fr-calc-results {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 16px;
          border: 1px dashed rgba(255, 255, 255, 0.1);
        }

        .fr-calc-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 12px;
        }

        .fr-calc-row:last-child {
          border: none;
          padding-bottom: 0;
        }

        .fr-calc-label { color: #94a3b8; font-weight: 500; }
        .fr-calc-value { color: #e2e8f0; font-weight: 700; text-align: right; }
        .fr-roi-badge {
          background: rgba(34, 197, 94, 0.12);
          color: #4ade80;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 800;
        }

        .fr-form-card {
          background: white;
          border: 1px solid #e8edf3;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 20, 60, 0.02), 0 30px 60px rgba(0, 20, 60, 0.04);
        }

        .fr-form-head { margin-bottom: 24px; }

        .fr-form-title {
          font-family: 'Outfit', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }

        .fr-form-subtitle {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.5;
        }

        .fr-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
          text-align: left;
        }

        .fr-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .fr-input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1.5px solid #cbd5e1;
          background: #f8fafc;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          color: #0f172a;
          outline: none;
          transition: all 0.22s ease;
        }

        .fr-input:focus {
          border-color: #16a34a;
          background: white;
          box-shadow: 0 0 10px rgba(22, 163, 74, 0.1);
        }

        .fr-textarea { resize: none; height: 60px; }

        .fr-error {
          font-size: 10px;
          font-weight: 600;
          color: #ef4444;
          margin-top: 4px;
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .fr-btn-submit {
          width: 100%;
          padding: 14px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 100%);
          color: white;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(46, 189, 58, 0.15);
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .fr-btn-submit:hover {
          transform: translateY(-1.5px);
          box-shadow: 0 8px 18px rgba(46, 189, 58, 0.25);
        }

        .fr-btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

        .fr-success { text-align: center; padding: 30px 10px; }

        .fr-success-icon {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: #dcfce7;
          border: 3px solid #16a34a;
          display: flex; align-items: center; justify-content: center;
          color: #16a34a;
          margin: 0 auto 20px;
          box-shadow: 0 0 24px rgba(22, 163, 74, 0.2);
          animation: scaleUpSuccess 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes scaleUpSuccess {
          from { transform: scale(0.6); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .fr-success h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 26px; font-weight: 900;
          color: #0f172a; margin-bottom: 8px;
        }

        .fr-success p { font-size: 13.5px; color: #4b5563; line-height: 1.6; margin-bottom: 24px; }

        .fr-success-ticket {
          background: linear-gradient(135deg, rgba(22, 163, 74, 0.08) 0%, rgba(0, 136, 255, 0.04) 100%);
          border: 1.5px dashed #16a34a;
          border-radius: 14px;
          padding: 18px; margin-bottom: 24px;
          max-width: 440px;
          margin-left: auto; margin-right: auto;
        }

        .fr-ticket-code {
          font-family: 'Fira Code', monospace;
          font-size: 20px; font-weight: 700;
          color: #0f172a; margin-top: 4px;
          letter-spacing: 1px;
        }

        .fr-btn-home {
          padding: 12px 24px; border-radius: 8px; border: none;
          background: #0f172a; color: white;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px; font-weight: 700;
          cursor: pointer; transition: all 0.22s ease;
        }

        .fr-btn-home:hover { background: #1e293b; transform: translateY(-1px); }

        .fr-stats-counter {
          display: flex; align-items: center; justify-content: center;
          gap: 48px; padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .fr-stats-divider { width: 1px; height: 32px; background: rgba(255,255,255,0.1); }

        @media (max-width: 900px) {
          .fr-grid-split { grid-template-columns: 1fr; gap: 30px; }
        }
        @media (max-width: 768px) {
          .fr-stats-counter { flex-direction: column; gap: 24px; }
          .fr-stats-divider { display: none; }
        }
        @media (max-width: 580px) {
          .fr-benefits-grid { grid-template-columns: 1fr; }
          .fr-form-card { padding: 24px 18px; }
        }
      `}</style>

      <div className="fr-page">
        {/* ── HERO ── */}
        <section style={{
          position: 'relative', overflow: 'hidden',
          minHeight: 520, paddingTop: 10, paddingBottom: 40,
          background: 'linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #004b23 80%, #16a34a 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            position: 'absolute', width: 560, height: 560, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.18) 0%, transparent 65%)',
            top: -180, right: -120,
            animation: 'orbMove1 14s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', width: 480, height: 480, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,87,184,0.30) 0%, transparent 65%)',
            bottom: -160, left: -100,
            animation: 'orbMove2 18s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            <div style={{
              position: 'absolute', left: 0, right: 0, height: 3,
              background: 'linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.0) 15%, rgba(74,222,128,0.9) 50%, rgba(74,222,128,0.0) 85%, transparent 100%)',
              animation: 'scanBeam 4s ease-in-out infinite',
              filter: 'blur(1px)',
            }} />
          </div>
          <div style={{
            position: 'absolute', top: 70, left: '7%',
            width: 64, height: 64, border: '2px solid rgba(74,222,128,0.25)',
            borderRadius: 16, transform: 'rotate(15deg)',
            animation: 'floatYSlow 6s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: 80, right: '8%',
            width: 44, height: 44, border: '2px solid rgba(99,179,237,0.2)',
            borderRadius: '50%',
            animation: 'floatY 5s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: 120, right: '18%',
            width: 28, height: 28,
            background: 'rgba(74,222,128,0.12)',
            borderRadius: 8, transform: 'rotate(30deg)',
            animation: 'floatYSlow 7s ease-in-out .5s infinite',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: 720 }}>
            <h1 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 800, color: '#fff',
              lineHeight: 1.08, letterSpacing: '-0.04em',
              margin: '0 0 22px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0) skewY(0deg)' : 'translateY(40px) skewY(2deg)',
              transition: 'opacity .75s ease .12s, transform .75s cubic-bezier(.34,1.3,.64,1) .12s',
            }}>
              Own a<br />
              <span style={{
                background: 'linear-gradient(90deg, #4bd557 0%, #7ded88 50%, #4bd557 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                animation: heroVisible ? 'glowPulse 3s ease-in-out infinite' : 'none',
                display: 'inline-block',
              }}>
                ScanForSafe Franchise
              </span>
            </h1>

            <p style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 16, color: 'rgba(186,230,253,0.85)',
              lineHeight: 1.7, maxWidth: 580, margin: '0 auto 40px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity .7s ease .26s, transform .7s ease .26s',
            }}>
              Partner with India's smartest QR-based safety brand. Scale a high-yielding technology business with exclusive territories, high margins, and 100% advertising support.
            </p>

            <div ref={statsRef} className="fr-stats-counter">
              <StatItem num={30} suffix="%" label="Max Profit Margin" active={statsInView} delay={0} />
              <div className="fr-stats-divider" />
              <StatItem num={12} suffix=" hrs" label="Approval turnaround" active={statsInView} delay={0.15} />
              <div className="fr-stats-divider" />
              <StatItem num={90000} suffix="+" label="Est. Monthly ROI (₹)" active={statsInView} delay={0.3} />
            </div>
          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, pointerEvents: 'none' }}>
            <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
              <path d="M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,48 L1440,72 L0,72 Z" fill="#f1f5f9" />
            </svg>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="fr-section">
          <div className="fr-grid-split">
            {/* LEFT */}
            <div>
              <h2 className="fr-benefits-title">
                <Award style={{ color: "#16a34a" }} /> Why Partner With Us?
              </h2>
              <p className="fr-benefits-subtitle">
                Choose ScanForSafe and unlock a proven safety-tech business model with real territorial advantage.
              </p>

              <div className="fr-benefits-grid">
                {benefitCards.map((card, i) => (
                  <BenefitCard key={card.title} {...card} index={i} />
                ))}
              </div>

              {/* CALCULATOR */}
              <div className="fr-calc-box">
                <div className="fr-calc-title">
                  <DollarSign style={{ color: "#4ade80", width: 18, height: 18 }} /> Investment &amp; ROI Calculator
                </div>
                <p style={{ fontSize: 11, color: "#94a3b8" }}>
                  Select an investment tier to estimate your benefits, exclusive boundaries, and estimated returns:
                </p>

                <div className="fr-calc-selector">
                  {[["50000", "₹50K (Silver)"], ["100000", "₹1L (Gold)"], ["300000", "₹3L+ (Platinum)"]].map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      className={`fr-calc-btn ${formData.investment === val ? "active" : ""}`}
                      onClick={() => handleInputChange("investment", val)}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="fr-calc-results">
                  <div className="fr-calc-row">
                    <span className="fr-calc-label">Franchise Tier:</span>
                    <span className="fr-calc-value" style={{ color: "#4ade80", fontWeight: 800 }}>{currentTier.tierName}</span>
                  </div>
                  <div className="fr-calc-row">
                    <span className="fr-calc-label">Profit Margin:</span>
                    <span className="fr-calc-value">{currentTier.margins}</span>
                  </div>
                  <div className="fr-calc-row">
                    <span className="fr-calc-label">Pincode Allocation:</span>
                    <span className="fr-calc-value">{currentTier.pincodes}</span>
                  </div>
                  <div className="fr-calc-row">
                    <span className="fr-calc-label">Initial Inventory:</span>
                    <span className="fr-calc-value">{currentTier.inventory}</span>
                  </div>
                  <div className="fr-calc-row">
                    <span className="fr-calc-label">Marketing Support:</span>
                    <span className="fr-calc-value">{currentTier.marketingSupport}</span>
                  </div>
                  <div className="fr-calc-row" style={{ paddingTop: 10, marginTop: 4, borderTop: "1px dashed rgba(255,255,255,0.15)" }}>
                    <span className="fr-calc-label" style={{ color: "white" }}>Estimated Net Income:</span>
                    <span className="fr-roi-badge">{currentTier.potentialRoi}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="fr-form-card">
              {!submitted ? (
                <>
                  <div className="fr-form-head">
                    <h2 className="fr-form-title">Franchise Application Form</h2>
                    <p className="fr-form-subtitle">
                      Submit your regional business query below. Our Franchise Manager will contact you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="fr-group">
                      <label className="fr-label">Full Name *</label>
                      <input type="text" className="fr-input" placeholder="e.g. Rahul Sharma"
                        value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required />
                      {errors.name && <span className="fr-error">⚠️ {errors.name}</span>}
                    </div>

                    <div className="fr-group">
                      <label className="fr-label">WhatsApp Number *</label>
                      <input type="tel" className="fr-input" placeholder="10-digit WhatsApp number"
                        value={formData.mobile} onChange={(e) => handleInputChange("mobile", e.target.value)} maxLength={10} required />
                      {errors.mobile && <span className="fr-error">⚠️ {errors.mobile}</span>}
                    </div>

                    <div className="fr-group">
                      <label className="fr-label">Email Address *</label>
                      <input type="email" className="fr-input" placeholder="yourname@example.com"
                        value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
                      {errors.email && <span className="fr-error">⚠️ {errors.email}</span>}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      <div className="fr-group">
                        <label className="fr-label">City *</label>
                        <input type="text" className="fr-input" placeholder="e.g. Hyderabad"
                          value={formData.city} onChange={(e) => handleInputChange("city", e.target.value)} required />
                        {errors.city && <span className="fr-error">⚠️ {errors.city}</span>}
                      </div>
                      <div className="fr-group">
                        <label className="fr-label">State *</label>
                        <input type="text" className="fr-input" placeholder="e.g. Telangana"
                          value={formData.state} onChange={(e) => handleInputChange("state", e.target.value)} required />
                        {errors.state && <span className="fr-error">⚠️ {errors.state}</span>}
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "10px" }}>
                      <div className="fr-group">
                        <label className="fr-label">Business Experience</label>
                        <select className="fr-input" value={formData.experience}
                          onChange={(e) => handleInputChange("experience", e.target.value)} style={{ height: "40px" }}>
                          <option value="None">No prior business</option>
                          <option value="1-3 Years">1 - 3 Years</option>
                          <option value="3+ Years">3+ Years</option>
                        </select>
                      </div>
                      <div className="fr-group">
                        <label className="fr-label">Shop/Office Available?</label>
                        <select className="fr-input" value={formData.shopAvailable}
                          onChange={(e) => handleInputChange("shopAvailable", e.target.value)} style={{ height: "40px" }}>
                          <option value="No">No Space Yet</option>
                          <option value="Yes">Yes, I have</option>
                        </select>
                      </div>
                    </div>

                    <div className="fr-group">
                      <label className="fr-label">Investment Interest Level (₹)</label>
                      <select className="fr-input" value={formData.investment}
                        onChange={(e) => handleInputChange("investment", e.target.value)} style={{ height: "40px" }}>
                        <option value="50000">₹50,000 (Silver Partner)</option>
                        <option value="100000">₹1,00,000 (Gold Partner)</option>
                        <option value="300000">₹3,00,000+ (Platinum Master)</option>
                      </select>
                    </div>

                    <div className="fr-group">
                      <label className="fr-label">Message / Territory Details</label>
                      <textarea className="fr-input fr-textarea" placeholder="Mention proposed pincodes or query..."
                        value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} />
                    </div>

                    <button type="submit" className="fr-btn-submit" disabled={isSubmitting}>
                      {isSubmitting ? "Registering Application..." : (
                        <><Send style={{ width: 14, height: 14 }} /> Apply for Franchise ✔</>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="fr-success">
                  <div className="fr-success-icon">
                    <CheckCircle style={{ width: 34, height: 34 }} />
                  </div>
                  <h2>Application Submitted!</h2>
                  <p>
                    Thank you, <strong>{formData.name}</strong>, for your interest in ScanForSafe! <br />
                    Your franchise application for <strong>{formData.city}, {formData.state}</strong> has been securely logged.
                  </p>
                  <div className="fr-success-ticket">
                    <div style={{ fontSize: 10, color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>🎟️ Application Ticket ID</div>
                    <div className="fr-ticket-code">{ticketId}</div>
                    <div style={{ fontSize: 11, color: "#16a34a", fontWeight: 700, marginTop: 6 }}>
                      Our Franchise Manager will reach out on {formData.mobile}
                    </div>
                  </div>
                  <p style={{ fontSize: 11.5, color: "#64748b", lineHeight: 1.5 }}>
                    📞 WhatsApp Support: +91 86393 22479 &nbsp;|&nbsp; ✉ partners@scanforsafe.com
                  </p>
                  <button className="fr-btn-home" onClick={() => navigate("/")}>Back to Homepage</button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}