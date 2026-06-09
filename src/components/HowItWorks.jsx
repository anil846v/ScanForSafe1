import { useState, useEffect } from "react";
import {
  ShoppingBag, QrCode, ShieldCheck, ArrowRight,
  Truck, Clock, Zap, CheckCircle, ChevronLeft,
  Car, Shield
} from "lucide-react";

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  const steps = [
    {
      badge: "STEP 1",
      badgeClass: "badge-blue",
      topClass: "top-blue",
      iconWrapClass: "ic-blue",
      Icon: ShoppingBag,
      highlight: "Register & Login",
      highlightClass: "hl-blue",
      title: "Order Your QR Tag",
      desc: "Choose the right protection plan for your need and place your order. We deliver premium weatherproof QR tags to your doorstep within 3–5 business days.",
      checklistClass: "cl-blue",
      dotClass: "cd-blue",
      checks: ["Weatherproof & durable", "Multiple size options", "QR + NFC enabled"],
      footerClass: "cf-blue",
      FooterIcon: Truck,
      footerText: "Delivered across India",
    },
    {
      badge: "STEP 2",
      badgeClass: "badge-cyan",
      topClass: "top-cyan",
      iconWrapClass: "ic-cyan",
      Icon: QrCode,
      highlight: "3 Minutes",
      highlightClass: "hl-cyan",
      title: "Activate & Personalise",
      desc: "Scan your tag to activate it, then fill in your contact details, emergency info, and any important notes. Takes less than 3 minutes — no tech skills needed.",
      checklistClass: "cl-cyan",
      dotClass: "cd-cyan",
      checks: ["No tech skills needed", "Add emergency contacts", "Instant activation"],
      footerClass: "cf-cyan",
      FooterIcon: Clock,
      footerText: "Set up in 3 minutes",
    },
    {
      badge: "STEP 3",
      badgeClass: "badge-green",
      topClass: "top-green",
      iconWrapClass: "ic-green",
      Icon: ShieldCheck,
      highlight: "24 / 7",
      highlightClass: "hl-green",
      title: "Stay Protected 24/7",
      desc: "Attach the tag to your pet, vehicle, or valuables and you're done. Anyone who finds your item scans the code — you get a WhatsApp alert instantly.",
      checklistClass: "cl-green",
      dotClass: "cd-green",
      checks: ["Instant WhatsApp alert", "Works without an app", "Location pinned"],
      footerClass: "cf-green",
      FooterIcon: Zap,
      footerText: "Always-on protection",
    },
  ];

  return (
    <div style={{ padding: "64px 24px 72px", background: "linear-gradient(160deg,#f8fafc 0%,#fafcfa 50%,#f8fafc 100%)", fontFamily: "'DM Sans',system-ui,sans-serif", position: "relative" }}>

      {/* dot grid background */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "radial-gradient(circle,#7ded88 1px,transparent 1px)", backgroundSize: "28px 28px", opacity: 0.35 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto" }}>

        {/* Heading */}
        <h1 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, color: "#0B2545", lineHeight: 1.12, marginBottom: 10, fontFamily: "'Sora',sans-serif", letterSpacing: "-0.03em", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(-12px)", transition: "all 0.5s ease" }}>
          Protect What Matters<br />
          in{" "}
          <span style={{ background: "linear-gradient(125deg,#0a2e10 0%,#2ebd3a 52%,#4bd557 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            3 Simple Steps
          </span>
        </h1>
        <p style={{ fontSize: 14, color: "#1a2e22", fontWeight: 500, marginBottom: 44, lineHeight: 1.7, opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.1s" }}>
          Order your tag, activate it and stay protected.<br />
          One scan can <span style={{ color: "#2ebd3a", fontWeight: 700 }}>connect you</span> when it matters most.
        </p>

        {/* Main row */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 32, flexWrap: "wrap" }}>

          {/* LEFT: Cards */}
          <div style={{ flex: "1 1 0", minWidth: 0, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-24px)", transition: "all 0.6s ease 0.1s" }}>
            <div style={{ display: "flex", alignItems: "stretch", gap: 0, justifyContent: "center" }}>
              {steps.map((step, idx) => (
                <>
                  <StepCard key={step.badge} step={step} />
                  {idx < steps.length - 1 && (
                    <div key={`arrow-${idx}`} style={{ width: 40, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 5 }}>
                      <ArrowButton />
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>

          {/* RIGHT: Phone mockup */}
          <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 8, opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.15s" }}>
            <PhoneWithAnnotation />
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;900&family=DM+Sans:wght@400;600;700&family=Caveat:wght@600&display=swap');
        @keyframes rippleOut { 0%{transform:scale(0.8);opacity:0.6} 100%{transform:scale(1.8);opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.85)} }
        .badge-blue{background:#0B2545} .badge-cyan{background:#0e7490} .badge-green{background:#166534}
        .top-blue{background:linear-gradient(90deg,#0B2545,#1a56db)}
        .top-cyan{background:linear-gradient(90deg,#0B2545,#0891b2)}
        .top-green{background:linear-gradient(90deg,#0B2545,#2ebd3a)}
        .ic-blue{background:#eff6ff;border-color:#bfdbfe} .ic-cyan{background:#ecfeff;border-color:#a5f3fc} .ic-green{background:#e8f8eb;border-color:#7ded88}
        .ic-blue svg{color:#1a56db} .ic-cyan svg{color:#0891b2} .ic-green svg{color:#2ebd3a}
        .hl-blue{color:#1a56db} .hl-cyan{color:#0891b2} .hl-green{color:#2ebd3a}
        .cl-blue{background:#eff6ff;border:1px solid #bfdbfe} .cl-cyan{background:#ecfeff;border:1px solid #a5f3fc} .cl-green{background:#e8f8eb;border:1px solid #7ded88}
        .cd-blue{border-color:#1a56db;color:#1a56db} .cd-cyan{border-color:#0891b2;color:#0891b2} .cd-green{border-color:#2ebd3a;color:#2ebd3a}
        .cf-blue{background:#f8faff;color:#1a56db;border-color:#bfdbfe}
        .cf-cyan{background:#f0fdff;color:#0e7490;border-color:#a5f3fc}
        .cf-green{background:#f0fdf4;color:#166534;border-color:#7ded88}
        .step-card{background:#fff;border-radius:20px;border:1.5px solid #e5e7eb;box-shadow:0 4px 24px rgba(0,0,0,0.07);flex:1;min-width:0;display:flex;flex-direction:column;overflow:hidden;transition:transform 0.25s,box-shadow 0.25s}
        .step-card:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(0,0,0,0.12)}
        .arrow-btn{width:42px;height:42px;border-radius:9999px;background:#fff;border:1.5px solid #e5e7eb;box-shadow:0 4px 16px rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:center;transition:box-shadow 0.2s}
        .arrow-btn:hover{box-shadow:0 6px 22px rgba(0,0,0,0.18)}
        .arrow-btn:hover .arrow-icon{transform:translateX(3px)}
        .arrow-icon{color:#1a56db;transition:transform 0.2s ease}
        @media(max-width:900px){
          .main-row{flex-direction:column!important;align-items:center!important}
        }
        @media(max-width:700px){
          .cards-row{flex-direction:column!important;gap:16px!important}
          .arrow-gap{display:none!important}
        }
      `}</style>
    </div>
  );
}

function StepCard({ step }) {
  return (
    <div className="step-card">
      <div className={`card-top ${step.topClass}`} style={{ height: 7, width: "100%" }} />
      <div style={{ padding: "20px 20px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
        <span className={`badge ${step.badgeClass}`} style={{ display: "inline-flex", alignItems: "center", padding: "4px 14px", borderRadius: 9999, fontSize: 11, fontWeight: 700, marginBottom: 14, alignSelf: "flex-start", letterSpacing: "0.04em", color: "#fff" }}>
          {step.badge}
        </span>
        <div className={`icon-circle ${step.iconWrapClass}`} style={{ width: 72, height: 72, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", border: "2px solid" }}>
          <step.Icon size={30} />
        </div>
        <div className={`highlight ${step.highlightClass}`} style={{ fontSize: 26, fontWeight: 900, textAlign: "center", lineHeight: 1, marginBottom: 4, fontFamily: "'Sora',sans-serif" }}>
          {step.highlight}
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#111", textAlign: "center", marginBottom: 8 }}>{step.title}</div>
        <p style={{ fontSize: 11, color: "#555", lineHeight: 1.65, textAlign: "center", marginBottom: 14 }}>{step.desc}</p>
        <div className={`checklist ${step.checklistClass}`} style={{ borderRadius: 10, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 7, marginBottom: 14 }}>
          {step.checks.map((c) => (
            <div key={c} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 600, color: "#111" }}>
              <span className={`check-dot ${step.dotClass}`} style={{ width: 17, height: 17, borderRadius: "50%", border: "2.5px solid", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CheckCircle size={9} />
              </span>
              {c}
            </div>
          ))}
        </div>
        <div className={`card-footer ${step.footerClass}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, borderRadius: 9999, padding: "9px 14px", fontSize: 11, fontWeight: 600, marginTop: "auto", border: "1.5px solid" }}>
          <step.FooterIcon size={14} />
          {step.footerText}
        </div>
      </div>
    </div>
  );
}

function ArrowButton() {
  return (
    <div className="arrow-btn">
      <ArrowRight size={19} className="arrow-icon" style={{ color: "#1a56db" }} />
    </div>
  );
}

function PhoneWithAnnotation() {
  return (
    <div style={{ position: "relative", width: 220, paddingTop: 90 }}>

      {/* Handwritten annotation top-left */}
      <div style={{ position: "absolute", top: 0, left: -10, zIndex: 20, pointerEvents: "none" }}>
        <span style={{ fontFamily: "'Caveat',cursive", fontSize: 15, fontWeight: 600, color: "#2ebd3a", lineHeight: 1.35, display: "block" }}>
          This is what<br />people see<br />when they scan<br />your tag
        </span>
        <svg width="60" height="44" viewBox="0 0 60 44" fill="none" style={{ marginTop: 2, marginLeft: 30 }}>
          <path d="M4 4 C16 4, 42 10, 52 36" stroke="#2ebd3a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M46 40 L53 38 L54 30" stroke="#2ebd3a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Phone shell */}
      <div style={{ width: 200, height: 400, borderRadius: 34, background: "linear-gradient(160deg,#4a4a4a,#2a2a2a)", boxShadow: "inset 0 0 0 1px #666, 0 20px 50px rgba(0,0,0,0.5)", position: "relative", margin: "0 auto" }}>
        <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 64, height: 18, background: "#111", borderRadius: 12, zIndex: 10 }} />
        <div style={{ position: "absolute", inset: 4, borderRadius: 30, background: "#fff", overflow: "hidden", display: "flex", flexDirection: "column" }}>

          {/* Status bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px 0", fontSize: 9, fontWeight: 700, color: "#111", flexShrink: 0 }}>
            <span>9:41</span>
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Shield size={10} color="#111" />
            </div>
          </div>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 10px 5px", borderBottom: "1px solid #f0f0f0", flexShrink: 0 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChevronLeft size={12} color="#333" />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#111", fontFamily: "'Sora',sans-serif" }}>Scan Successful</div>
              <div style={{ fontSize: 7, color: "#999" }}>ScanForSafe · Verified</div>
            </div>
            <div style={{ width: 22 }} />
          </div>

          {/* Progress */}
          <div style={{ height: 2, background: "#f0f0f0", margin: "0 8px", flexShrink: 0 }}>
            <div style={{ height: "100%", background: "linear-gradient(90deg,#0B2545,#2ebd3a)", borderRadius: 2, width: "16%" }} />
          </div>

          {/* Body */}
          <div style={{ flex: 1, overflow: "hidden", padding: "10px 10px 8px", display: "flex", flexDirection: "column", alignItems: "center", background: "linear-gradient(160deg,#f0fdf4,#fff 60%,#f0f8ff)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#e8f8eb", borderRadius: 20, padding: "3px 9px", fontSize: 7, fontWeight: 700, color: "#166534", border: "1px solid #7ded88", marginBottom: 10 }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2ebd3a", animation: "pulse 1.5s infinite" }} />
              SCANFORSAFE · SECURE
            </div>

            {/* Ripple */}
            <div style={{ position: "relative", width: 60, height: 60, marginBottom: 10 }}>
              <div style={{ position: "absolute", inset: -10, borderRadius: "50%", border: "1.5px solid #2ebd3a", opacity: 0.15, animation: "rippleOut 2s infinite ease-out" }} />
              <div style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "1.5px solid #2ebd3a", opacity: 0.22, animation: "rippleOut 2s 0.5s infinite ease-out" }} />
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg,#e8f8eb,#d1fae5)", border: "2.5px solid #2ebd3a", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
                <CheckCircle size={26} color="#2ebd3a" fill="#2ebd3a" />
              </div>
            </div>

            <div style={{ fontSize: 12, fontWeight: 700, color: "#0B2545", fontFamily: "'Sora',sans-serif", marginBottom: 2 }}>Scan Successful!</div>
            <div style={{ fontSize: 7.5, color: "#888", marginBottom: 10 }}>QR code verified &amp; authenticated</div>

            {/* Vehicle card */}
            <div style={{ background: "#fff", borderRadius: 10, border: "1.5px solid #7ded88", padding: "8px 10px", width: "100%", display: "flex", alignItems: "center", gap: 7, boxShadow: "0 3px 12px rgba(46,189,58,0.1)", marginBottom: 8 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "#e8f8eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Car size={14} color="#2ebd3a" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 7, color: "#2ebd3a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Two-Wheeler · KA 05 MX 2847</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#0B2545", fontFamily: "'Sora',sans-serif" }}>VEH-4K9P-2X7R</div>
              </div>
              <div style={{ background: "#2ebd3a", borderRadius: 4, padding: "2px 5px", fontSize: 6, fontWeight: 700, color: "#fff", marginLeft: "auto", flexShrink: 0 }}>✓ LIVE</div>
            </div>

            {/* CTA button */}
            <div style={{ background: "linear-gradient(135deg,#0B2545,#2ebd3a)", borderRadius: 9, padding: 9, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 5, fontSize: 10, fontWeight: 700, color: "#fff", fontFamily: "'Sora',sans-serif" }}>
              View Vehicle Details <ArrowRight size={12} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}