import { useState, useEffect, useRef } from "react";
import {
  ShoppingBag, QrCode, ShieldCheck, ArrowRight,
  Truck, Clock, Zap, MapPin, MessageCircle,
  Shield, ChevronLeft, CheckCircle,
  Phone, AlertTriangle, Car, Lock,
  PhoneOff, MicOff, Volume2, User
} from "lucide-react";

const BRAND = {
  green: "#2ebd3a",
  softGreen: "#e8f8eb",
  navy: "#0B2545",
  textMain: "#11355e",
  inputBg: "#f3f4f6",
  borderGreen: "#7ded88",
};

const AVATARS = [
  { initials: "RS", bg: "#fde8d8", color: "#712b13" },
  { initials: "PM", bg: "#e8f8eb", color: "#27500a" },
  { initials: "AK", bg: "#e3f2fd", color: "#0c447c" },
  { initials: "NV", bg: "#f3e5f5", color: "#534ab7" },
  { initials: "SK", bg: "#fff8e1", color: "#633806" },
];

function AvatarGroup() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {AVATARS.map((av, i) => (
        <div key={i} style={{
          width: 30, height: 30, borderRadius: "50%",
          background: av.bg, color: av.color,
          fontSize: 9, fontWeight: 800,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "2.5px solid white",
          marginLeft: i === 0 ? 0 : -10,
          zIndex: AVATARS.length - i,
          position: "relative", flexShrink: 0,
          boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
        }}>{av.initials}</div>
      ))}
      <div style={{
        width: 30, height: 30, borderRadius: "50%",
        background: "#0B2545", color: "white",
        fontSize: 8, fontWeight: 800,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: "2.5px solid white", marginLeft: -10, flexShrink: 0,
        boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
      }}>+9K</div>
    </div>
  );
}

function IndiaFlag() {
  return (
    <svg width="36" height="24" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 3, display: "block" }}>
      <rect width="900" height="600" fill="#FF9933" />
      <rect y="200" width="900" height="200" fill="#fff" />
      <rect y="400" width="900" height="200" fill="#138808" />
      <circle cx="450" cy="300" r="70" fill="none" stroke="#000080" strokeWidth="7" />
      <g stroke="#000080" strokeWidth="2.5">
        <line x1="450" y1="230" x2="450" y2="370" />
        <line x1="380" y1="300" x2="520" y2="300" />
        <line x1="400.5" y1="249.5" x2="499.5" y2="350.5" />
        <line x1="499.5" y1="249.5" x2="400.5" y2="350.5" />
        <line x1="380" y1="267" x2="520" y2="333" />
        <line x1="380" y1="333" x2="520" y2="267" />
      </g>
      <circle cx="450" cy="300" r="11" fill="#000080" />
    </svg>
  );
}

function WhatsAppIcon({ size = 22, color = "white" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill={color} />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.402A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.073-1.115l-.292-.174-3.027.852.815-2.981-.19-.306A7.944 7.944 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" fill={color} />
    </svg>
  );
}

const PAGE_META = [
  { title: "Scan Successful",      sub: "ScanForSafe · Verified",      prog: "16%" },
  { title: "Vehicle Information",  sub: "ScanForSafe · Verified",      prog: "33%" },
  { title: "Calling Securely",     sub: "Secure Call · Connecting",    prog: "50%" },
  { title: "Incoming Call",        sub: "Vehicle Owner · Ringing",     prog: "66%" },
  { title: "Active Call",          sub: "Secure · Encrypted",          prog: "83%" },
  { title: "Call Connected",       sub: "Mission Accomplished",        prog: "100%" },
];

function StatusIcons() {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
      <svg width="13" height="9" viewBox="0 0 13 9">
        <rect x="0"   y="5.5" width="2.2" height="3.5" rx="0.4" fill="#111" />
        <rect x="3.2" y="3.5" width="2.2" height="5.5" rx="0.4" fill="#111" />
        <rect x="6.4" y="1.5" width="2.2" height="7.5" rx="0.4" fill="#111" />
        <rect x="9.6" y="0"   width="2.2" height="9"   rx="0.4" fill="#111" />
      </svg>
      <svg width="12" height="9" viewBox="0 0 12 9">
        <path d="M6 7L6 8.5" stroke="#111" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M3.5 5Q6 3 8.5 5" stroke="#111" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
        <path d="M1 2.5Q6 -0.5 11 2.5" stroke="#111" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      </svg>
      <svg width="21" height="10" viewBox="0 0 21 10">
        <rect x="0" y="1" width="18" height="8" rx="1.8" stroke="#111" strokeWidth="0.9" fill="none"/>
        <rect x="18.5" y="3.2" width="2" height="3.6" rx="0.9" fill="#111"/>
        <rect x="1.2" y="2.2" width="14" height="5.6" rx="0.8" fill="#111"/>
      </svg>
    </div>
  );
}

function Ripple({ color = "#2ebd3a", size = 90 }) {
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          position: "absolute",
          inset: -(i * 14),
          borderRadius: "50%",
          border: `1.5px solid ${color}`,
          opacity: 0.25 - i * 0.07,
          animation: `rippleOut 2s ${i * 0.55}s infinite ease-out`,
        }} />
      ))}
      <div style={{
        width: size, height: size, borderRadius: "50%",
        background: `linear-gradient(135deg, ${color}22, ${color}44)`,
        border: `3px solid ${color}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: `0 0 28px ${color}66`,
      }}>
        <CheckCircle size={size * 0.45} color={color} fill={color} />
      </div>
    </div>
  );
}

/* ── PAGE 1 ── */
function Page1({ onNavigate }) {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, overflowY: "auto", background: "linear-gradient(160deg,#f0fdf4 0%,#fff 60%,#f0f8ff 100%)" }}>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 18, opacity: show ? 1 : 0, transition: "opacity 0.4s" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: BRAND.softGreen, borderRadius: 20, padding: "5px 12px", fontSize: 9, fontWeight: 800, color: "#166534", border: `1px solid ${BRAND.borderGreen}`, letterSpacing: "0.06em" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: BRAND.green, animation: "pulse 1.5s infinite" }} />
          SCANFORSAFE · SECURE
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 22, opacity: show ? 1 : 0, transform: show ? "scale(1)" : "scale(0.7)", transition: "all 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.1s" }}>
        <Ripple color={BRAND.green} size={80} />
      </div>
      <div style={{ textAlign: "center", marginTop: 18, opacity: show ? 1 : 0, transition: "opacity 0.4s 0.3s" }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: BRAND.navy, fontFamily: "Georgia,serif", letterSpacing: "-0.4px" }}>Scan Successful!</div>
        <div style={{ fontSize: 10, color: "#888", marginTop: 4 }}>QR code verified & authenticated</div>
      </div>
      <div style={{ margin: "14px 14px 0", background: "white", borderRadius: 14, padding: "12px 14px", border: `1.5px solid ${BRAND.borderGreen}`, display: "flex", alignItems: "center", gap: 10, boxShadow: "0 4px 16px rgba(46,189,58,0.1)", opacity: show ? 1 : 0, transition: "opacity 0.4s 0.45s" }}>
        <div style={{ width: 40, height: 40, borderRadius: 11, background: BRAND.softGreen, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Car size={20} color={BRAND.green} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: BRAND.green, fontWeight: 700, marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>Two-Wheeler · KA 05 MX 2847</div>
          <div style={{ fontSize: 12, fontWeight: 900, color: BRAND.navy }}>VEH-4K9P-2X7R</div>
        </div>
        <div style={{ background: BRAND.green, borderRadius: 6, padding: "3px 8px", fontSize: 8, fontWeight: 800, color: "white" }}>✓ LIVE</div>
      </div>
      <div style={{ display: "flex", gap: 7, margin: "10px 14px 0", opacity: show ? 1 : 0, transition: "opacity 0.4s 0.55s" }}>
        {["🔒 Encrypted", "✓ Verified", "🛡 Safe"].map(t => (
          <div key={t} style={{ flex: 1, background: "#f8f9fa", borderRadius: 8, padding: "6px 4px", textAlign: "center", fontSize: 8.5, fontWeight: 700, color: "#555", border: "1px solid #eee" }}>{t}</div>
        ))}
      </div>
      <div onClick={() => onNavigate(2)} style={{ margin: "14px 14px 14px", background: `linear-gradient(135deg,${BRAND.navy},${BRAND.green})`, borderRadius: 12, padding: "13px", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, fontSize: 12, fontWeight: 800, color: "white", cursor: "pointer", boxShadow: "0 6px 20px rgba(46,189,58,0.35)", opacity: show ? 1 : 0, transition: "opacity 0.4s 0.65s" }}>
        View Vehicle Details <ArrowRight size={14} />
      </div>
    </div>
  );
}

/* ── PAGE 2 ── */
function Page2({ onNavigate }) {
  const actions = [
    { key: "call",  icon: <Phone size={15} color="white" />,                      iconBg: "#185fa5", cardBg: "#e8f3ff", cardBorder: "#b5d4f4", label: "Call Vehicle Owner",    desc: "Connect securely · No number revealed",   onClick: () => onNavigate(3) },
    { key: "msg",   icon: <MessageCircle size={15} color="white" fill="white" />, iconBg: BRAND.green, cardBg: BRAND.softGreen, cardBorder: BRAND.borderGreen, label: "Message Owner", desc: "Send a quick message · No login needed" },
    { key: "loc",   icon: <MapPin size={15} color="white" />,                     iconBg: "#e07b00", cardBg: "#fff3e0", cardBorder: "#facc75", label: "Share My Location",    desc: "Let owner know exactly where you are" },
    { key: "emerg", icon: <AlertTriangle size={15} color="white" />,              iconBg: "#dc2626", cardBg: "#fff1f2", cardBorder: "#fca5a5", label: "Report Emergency",      desc: "Alert owner · Contact authorities" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, overflowY: "auto" }}>
      <div style={{ background: `linear-gradient(135deg,${BRAND.navy} 0%,#1a3a6e 100%)`, margin: "10px 12px 0", borderRadius: 14, padding: "14px", display: "flex", alignItems: "center", gap: 11 }}>
        <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,255,255,0.25)" }}>
          <Car size={22} color="white" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", fontWeight: 700, marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.06em" }}>Two-Wheeler</div>
          <div style={{ fontSize: 14, fontWeight: 900, color: "white", letterSpacing: "-0.3px" }}>KA 05 MX 2847</div>
          <div style={{ marginTop: 5, display: "flex", gap: 5, flexWrap: "wrap" }}>
            <span style={{ background: BRAND.green, borderRadius: 5, padding: "2px 7px", fontSize: 8, fontWeight: 800, color: "white", display: "inline-flex", alignItems: "center", gap: 3 }}>
              <CheckCircle size={7} color="white" fill="white" /> Verified Active
            </span>
            <span style={{ background: "rgba(255,255,255,0.15)", borderRadius: 5, padding: "2px 7px", fontSize: 8, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
              🔒 Owner ID Hidden
            </span>
          </div>
        </div>
      </div>
      <div style={{ padding: "10px 12px 5px", fontSize: 9, fontWeight: 700, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase" }}>Choose an action</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, padding: "0 12px 12px" }}>
        {actions.map(a => (
          <div key={a.key} onClick={a.onClick}
            style={{ display: "flex", alignItems: "center", gap: 11, padding: "11px 13px", borderRadius: 13, background: a.cardBg, border: `1.5px solid ${a.cardBorder}`, cursor: a.onClick ? "pointer" : "default", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            onMouseDown={e => { if (a.onClick) e.currentTarget.style.transform = "scale(0.97)"; }}
            onMouseUp={e => { e.currentTarget.style.transform = "scale(1)"; }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: a.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 3px 10px ${a.iconBg}55` }}>{a.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11.5, fontWeight: 800, color: "#111", marginBottom: 1 }}>{a.label}</div>
              <div style={{ fontSize: 9.5, color: "#888", lineHeight: 1.4 }}>{a.desc}</div>
            </div>
            <ChevronLeft size={14} color="#999" style={{ transform: "rotate(180deg)", opacity: 0.5 }} />
          </div>
        ))}
      </div>
      <div style={{ background: "#f8f8f8", margin: "0 12px 12px", borderRadius: 10, padding: "8px 12px", fontSize: 9, color: "#bbb", textAlign: "center", border: "1px solid #eee", lineHeight: 1.5 }}>
        🔒 Owner's identity is never revealed. All calls and messages are fully encrypted.
      </div>
    </div>
  );
}

/* ── PAGE 3 ── */
function Page3({ onNavigate }) {
  const [dots, setDots] = useState(0);
  useEffect(() => {
    const d = setInterval(() => setDots(p => (p + 1) % 4), 500);
    const nav = setTimeout(() => onNavigate(4), 4000);
    return () => { clearInterval(d); clearTimeout(nav); };
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, background: "linear-gradient(160deg,#0B2545 0%,#0d3b2e 60%,#0a2218 100%)", alignItems: "center", justifyContent: "center", padding: "16px", gap: 0 }}>
      <div style={{ position: "relative", marginBottom: 20 }}>
        {[0, 1].map(i => (
          <div key={i} style={{ position: "absolute", inset: -(i + 1) * 16, borderRadius: "50%", border: "1px solid rgba(46,189,58,0.25)", animation: `rippleOut 2s ${i * 0.7}s infinite` }} />
        ))}
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,#0B2545,#2ebd3a)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(46,189,58,0.4)" }}>
          <Phone size={32} color="white" />
        </div>
      </div>
      <div style={{ fontSize: 16, fontWeight: 900, color: "white", marginBottom: 6, fontFamily: "Georgia,serif" }}>Calling Securely</div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>Connecting you to vehicle owner{".".repeat(dots)}</div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(46,189,58,0.15)", borderRadius: 20, padding: "5px 12px", fontSize: 9, fontWeight: 700, color: BRAND.green, border: "1px solid rgba(46,189,58,0.3)", marginBottom: 20 }}>
        <Shield size={9} color={BRAND.green} /> 100% Secure · Owner ID Hidden
      </div>
      <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 14, padding: "12px 16px", width: "100%", marginBottom: 20, border: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Call Details</div>
        {[["Caller ID", "Hidden from owner"], ["Encryption", "End-to-end 256-bit"], ["Route", "ScanForSafe Secure"]].map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.5)" }}>{k}</span>
            <span style={{ fontSize: 9.5, color: "white", fontWeight: 700 }}>{v}</span>
          </div>
        ))}
      </div>
      <div onClick={() => onNavigate(2)} style={{ width: 52, height: 52, borderRadius: "50%", background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 6px 20px rgba(239,68,68,0.45)" }}>
        <PhoneOff size={22} color="white" />
      </div>
      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginTop: 7 }}>Tap to cancel</div>
    </div>
  );
}

/* ── PAGE 4 ── */
function Page4({ onNavigate }) {
  const [ring, setRing] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRing(p => (p + 1) % 3), 600);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, background: "linear-gradient(160deg,#111 0%,#1a1a2e 50%,#0d0d0d 100%)", alignItems: "center", justifyContent: "space-between", padding: "20px 16px 24px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, width: "100%" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", fontWeight: 600, marginBottom: 10 }}>Incoming Call</div>
        <div style={{ position: "relative", marginBottom: 14 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ position: "absolute", inset: -(i + 1) * 12, borderRadius: "50%", background: `rgba(46,189,58,${0.08 - i * 0.025})`, animation: `rippleOut 2.4s ${i * 0.6}s infinite` }} />
          ))}
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#0B2545,#2ebd3a)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 32px rgba(46,189,58,0.5)", position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 900, color: "white" }}>SS</div>
          </div>
        </div>
        <div style={{ fontSize: 17, fontWeight: 900, color: "white", fontFamily: "Georgia,serif" }}>Vehicle Owner</div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>ScanForSafe Secure Call</div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(46,189,58,0.12)", borderRadius: 20, padding: "5px 12px", border: "1px solid rgba(46,189,58,0.25)" }}>
          <div style={{ display: "flex", gap: 3 }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: i <= ring ? BRAND.green : "rgba(255,255,255,0.2)", transition: "background 0.3s" }} />
            ))}
          </div>
          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>Ringing securely…</span>
        </div>
        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "10px 14px", width: "100%", marginTop: 14, border: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", marginBottom: 6, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>About this call</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
            Someone scanned your ScanForSafe QR tag and is trying to reach you. Their identity is verified by ScanForSafe.
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", width: "100%", paddingTop: 8 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div onClick={() => onNavigate(2)} style={{ width: 52, height: 52, borderRadius: "50%", background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 6px 20px rgba(239,68,68,0.4)" }}>
            <PhoneOff size={22} color="white" />
          </div>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>Decline</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div onClick={() => onNavigate(5)} style={{ width: 52, height: 52, borderRadius: "50%", background: BRAND.green, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 6px 20px rgba(46,189,58,0.5)", animation: "acceptPulse 1.2s infinite" }}>
            <Phone size={22} color="white" />
          </div>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>Accept</span>
        </div>
      </div>
    </div>
  );
}

/* ── PAGE 5 ── */
function Page5({ onNavigate }) {
  const [secs, setSecs] = useState(0);
  const [muted, setMuted] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setSecs(p => p + 1), 1000);
    const nav = setTimeout(() => onNavigate(6), 5000);
    return () => { clearInterval(t); clearTimeout(nav); };
  }, []);
  const fmt = s => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, background: "linear-gradient(160deg,#0B2545 0%,#0d3b2e 100%)", alignItems: "center", justifyContent: "space-between", padding: "20px 16px 24px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Secure Call Active</div>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))", border: "2px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, boxShadow: "0 0 30px rgba(46,189,58,0.3)" }}>
          <User size={32} color="rgba(255,255,255,0.8)" />
        </div>
        <div style={{ fontSize: 17, fontWeight: 900, color: "white", fontFamily: "Georgia,serif" }}>Vehicle Owner</div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", marginBottom: 6 }}>Connected via ScanForSafe</div>
        <div style={{ fontSize: 26, fontWeight: 900, color: BRAND.green, fontFamily: "monospace", letterSpacing: "2px", marginBottom: 6 }}>{fmt(secs)}</div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(46,189,58,0.15)", borderRadius: 20, padding: "4px 10px", border: "1px solid rgba(46,189,58,0.3)", marginBottom: 18 }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: BRAND.green, animation: "pulse 1s infinite" }} />
          <span style={{ fontSize: 8.5, color: BRAND.green, fontWeight: 700 }}>End-to-end encrypted</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 3, height: 28, marginBottom: 18 }}>
          {Array.from({ length: 18 }, (_, i) => (
            <div key={i} style={{ width: 3, borderRadius: 2, background: `rgba(46,189,58,${0.4 + Math.random() * 0.6})`, height: `${Math.random() * 20 + 4}px`, animation: `waveBar 0.8s ${i * 0.06}s infinite alternate ease-in-out` }} />
          ))}
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 16 }}>
          {[
            { icon: muted ? <MicOff size={18} color="white" /> : <MicOff size={18} color="rgba(255,255,255,0.5)" />, label: "Mute", action: () => setMuted(p => !p), active: muted },
            { icon: <Volume2 size={18} color={speaker ? "white" : "rgba(255,255,255,0.5)"} />, label: "Speaker", action: () => setSpeaker(p => !p), active: speaker },
          ].map(c => (
            <div key={c.label} onClick={c.action} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, cursor: "pointer" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: c.active ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>{c.icon}</div>
              <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>{c.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div onClick={() => onNavigate(6)} style={{ width: 56, height: 56, borderRadius: "50%", background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 6px 24px rgba(239,68,68,0.45)" }}>
            <PhoneOff size={24} color="white" />
          </div>
        </div>
        <div style={{ textAlign: "center", fontSize: 9, color: "rgba(255,255,255,0.25)", marginTop: 7 }}>Tap red button to end call</div>
      </div>
    </div>
  );
}

/* ── PAGE 6 ── */
function Page6() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 120); }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, padding: "20px 16px", gap: 0 }}>
      <div style={{ width: 76, height: 76, borderRadius: "50%", background: `linear-gradient(135deg,${BRAND.navy},${BRAND.green})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, transform: show ? "scale(1)" : "scale(0.4)", opacity: show ? 1 : 0, transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)", boxShadow: "0 10px 32px rgba(46,189,58,0.4)" }}>
        <CheckCircle size={36} color="white" fill="white" />
      </div>
      <div style={{ fontSize: 17, fontWeight: 900, color: "#111", fontFamily: "Georgia,serif", marginBottom: 5, opacity: show ? 1 : 0, transition: "opacity 0.4s 0.25s" }}>Call Connected!</div>
      <div style={{ fontSize: 10.5, color: "#888", textAlign: "center", lineHeight: 1.6, marginBottom: 18, maxWidth: 200, opacity: show ? 1 : 0, transition: "opacity 0.4s 0.35s" }}>You successfully reached the vehicle owner through ScanForSafe's secure network.</div>
      <div style={{ width: "100%", background: BRAND.softGreen, borderRadius: 14, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8, border: `1px solid ${BRAND.borderGreen}`, opacity: show ? 1 : 0, transition: "opacity 0.4s 0.45s", marginBottom: 14 }}>
        {["Your identity was protected throughout", "Call was end-to-end encrypted", "Owner's info was never exposed", "No data stored by ScanForSafe"].map(t => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10, color: BRAND.navy, fontWeight: 600 }}>
            <CheckCircle size={12} color={BRAND.green} fill={BRAND.green} /> {t}
          </div>
        ))}
      </div>
      <div style={{ fontSize: 10, color: "#aaa", marginBottom: 8, opacity: show ? 1 : 0, transition: "opacity 0.4s 0.55s" }}>Rate your experience</div>
      <div style={{ display: "flex", gap: 6, opacity: show ? 1 : 0, transition: "opacity 0.4s 0.6s" }}>
        {["⭐", "⭐", "⭐", "⭐", "⭐"].map((s, i) => (
          <div key={i} style={{ fontSize: 20, cursor: "pointer" }}>{s}</div>
        ))}
      </div>
    </div>
  );
}

/* ── IPHONE MOCKUP ──
   - Always auto-scrolls through pages on a timer
   - Hovering over the phone does NOT pause it — it keeps going
   - Manual dot clicks still work
*/
function IPhoneMockup() {
  const [page, setPage] = useState(1);
  const [prevPage, setPrev] = useState(null);
  const [dir, setDir] = useState(1);

  // Page display durations (ms) — how long each page is visible before advancing
  const PAGE_DURATIONS = [3000, 3500, 4200, 4000, 5200, 3500];

  const goPage = (n) => {
    if (n === page) return;
    setDir(n > page ? 1 : -1);
    setPrev(page);
    setPage(n);
  };

  // Clear ghost slide after transition
  useEffect(() => {
    const t = setTimeout(() => setPrev(null), 500);
    return () => clearTimeout(t);
  }, [page]);

  // Always-on auto-scroll — restarts whenever page changes
  useEffect(() => {
    const duration = PAGE_DURATIONS[page - 1] ?? 3500;
    const t = setTimeout(() => {
      const next = page < 6 ? page + 1 : 1;
      setDir(1);
      setPrev(page);
      setPage(next);
    }, duration);
    return () => clearTimeout(t);
  }, [page]);

  const pageStyle = (p) => {
    const isActive = p === page;
    const isPrev   = p === prevPage;
    let tx = "100%";
    if (isActive)      tx = "0%";
    else if (isPrev)   tx = dir > 0 ? "-100%" : "100%";
    else if (p < page) tx = "-100%";
    return {
      position: "absolute", inset: 0,
      transform: `translateX(${tx})`,
      opacity: isActive ? 1 : 0,
      transition: "transform 0.45s cubic-bezier(.77,0,.18,1), opacity 0.35s ease",
      pointerEvents: isActive ? "auto" : "none",
      display: "flex", flexDirection: "column",
      background: "white", overflow: "hidden",
    };
  };

  const meta = PAGE_META[page - 1];

  return (
    <div style={{ position: "relative", width: 290, height: 590, flexShrink: 0 }}>
      {/* Phone shell */}
      <div style={{ position: "absolute", inset: 0, borderRadius: 46, background: "linear-gradient(160deg,#5a5a5a 0%,#3a3a3a 30%,#2a2a2a 60%,#1e1e1e 100%)", boxShadow: "inset 0 0 0 1px #666, inset 2px 4px 0 0 #555, inset -1px -2px 0 0 #111, 0 30px 80px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.35)" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: 46, background: "linear-gradient(135deg,rgba(255,255,255,0.18) 0%,transparent 40%)", pointerEvents: "none" }} />
        {[{ l: true, t: 120, h: 34 }, { l: true, t: 165, h: 34 }, { l: true, t: 88, h: 22 }].map((b, i) => (
          <div key={i} style={{ position: "absolute", [b.l ? "left" : "right"]: -3, top: b.t, width: 3, height: b.h, background: "linear-gradient(180deg,#555,#3a3a3a)", borderRadius: b.l ? "2px 0 0 2px" : "0 2px 2px 0" }} />
        ))}
        <div style={{ position: "absolute", right: -3, top: 140, width: 3, height: 70, background: "linear-gradient(180deg,#555,#3a3a3a)", borderRadius: "0 2px 2px 0" }} />

        {/* Screen */}
        <div style={{ position: "absolute", inset: 6, borderRadius: 41, background: "#0a0a0a", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 3, borderRadius: 38, background: "white", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            {/* Notch */}
            <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 90, height: 26, background: "#0a0a0a", borderRadius: 18, zIndex: 30 }} />
            {/* Status bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 18px 0", fontSize: 10, fontWeight: 700, color: [3, 4, 5].includes(page) ? "white" : "#111", flexShrink: 0, zIndex: 10, position: "relative" }}>
              <span>9:41</span><StatusIcons />
            </div>
            {/* App header */}
            {![3, 4, 5].includes(page) && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 14px 6px", borderBottom: "1.5px solid #f0f0f0", flexShrink: 0, zIndex: 10 }}>
                <div onClick={() => page > 1 && goPage(page - 1)} style={{ cursor: page > 1 ? "pointer" : "default", opacity: page > 1 ? 1 : 0.25, width: 28, height: 28, borderRadius: 8, background: page > 1 ? "#f0f0f0" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ChevronLeft size={17} color="#333" strokeWidth={2.5} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, color: "#111", letterSpacing: "-0.3px" }}>{meta.title}</div>
                  <div style={{ fontSize: 9, color: "#999", marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}>
                    <QrCode size={8} color="#999" /> {meta.sub}
                  </div>
                </div>
                <div style={{ width: 28 }} />
              </div>
            )}
            {/* Progress bar */}
            {![3, 4, 5].includes(page) && (
              <div style={{ height: 3, background: "#f0f0f0", margin: "0 12px", flexShrink: 0, borderRadius: 2 }}>
                <div style={{ height: "100%", background: "linear-gradient(90deg,#0B2545,#2ebd3a)", borderRadius: 2, width: meta.prog, transition: "width 0.5s ease" }} />
              </div>
            )}
            {/* Pages */}
            <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
              <div style={pageStyle(1)}><Page1 onNavigate={goPage} /></div>
              <div style={pageStyle(2)}><Page2 onNavigate={goPage} /></div>
              <div style={pageStyle(3)}><Page3 onNavigate={goPage} /></div>
              <div style={pageStyle(4)}><Page4 onNavigate={goPage} /></div>
              <div style={pageStyle(5)}><Page5 onNavigate={goPage} /></div>
              <div style={pageStyle(6)}><Page6 /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Page dots */}
      <div style={{ position: "absolute", bottom: -26, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5 }}>
        {[1, 2, 3, 4, 5, 6].map(p => (
          <div key={p} onClick={() => goPage(p)} style={{ width: p === page ? 16 : 5, height: 5, borderRadius: 3, background: p === page ? BRAND.green : "#ccc", cursor: "pointer", transition: "all 0.3s ease" }} />
        ))}
      </div>

      <style>{`
        @keyframes rippleOut    { 0%{transform:scale(0.8);opacity:0.6} 100%{transform:scale(1.8);opacity:0} }
        @keyframes pulse        { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.85)} }
        @keyframes acceptPulse  { 0%,100%{box-shadow:0 6px 20px rgba(46,189,58,0.5)} 50%{box-shadow:0 6px 36px rgba(46,189,58,0.9),0 0 0 8px rgba(46,189,58,0.15)} }
        @keyframes waveBar      { from{transform:scaleY(0.3)} to{transform:scaleY(1)} }
      `}</style>
    </div>
  );
}

/* ─── STEP CARD ─── */
const STEP_THEMES = [
  { accent:"#1a56db", accentLight:"#eff6ff", accentBorder:"#bfdbfe", iconBg:"linear-gradient(135deg,#1e40af 0%,#3b82f6 100%)", numberBg:"linear-gradient(135deg,#0B2545 0%,#1a56db 100%)", badgeBg:"#eff6ff", badgeColor:"#1e40af", shadowColor:"rgba(26,86,219,0.18)", pill:"Step 1", highlight:"Login and Register", bullets:["Weatherproof & durable","Multiple size options","QR + NFC enabled"] },
  { accent:"#0891b2", accentLight:"#ecfeff", accentBorder:"#a5f3fc", iconBg:"linear-gradient(135deg,#0e7490 0%,#22d3ee 100%)", numberBg:"linear-gradient(135deg,#0B2545 0%,#0891b2 100%)", badgeBg:"#ecfeff", badgeColor:"#0e7490", shadowColor:"rgba(8,145,178,0.18)", pill:"Step 2", highlight:"3 Minutes", bullets:["No tech skills needed","Add emergency contacts","Instant activation"] },
  { accent:"#2ebd3a", accentLight:"#e8f8eb", accentBorder:"#7ded88", iconBg:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 100%)", numberBg:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 100%)", badgeBg:"#e8f8eb", badgeColor:"#166534", shadowColor:"rgba(46,189,58,0.18)", pill:"Step 3", highlight:"24 / 7", bullets:["Instant WhatsApp alert","Works without an app","Location pinned"] },
];

function StepCard({ icon: Icon, title, description, badge, badgeIcon: BadgeIcon, themeIndex }) {
  const [hovered, setHovered] = useState(false);
  const [active,  setActive]  = useState(false);
  const T = STEP_THEMES[themeIndex] || STEP_THEMES[0];
  return (
    <div
      onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>{setHovered(false);setActive(false);}}
      onMouseDown={()=>setActive(true)} onMouseUp={()=>setActive(false)}
      onTouchStart={()=>setActive(true)} onTouchEnd={()=>setActive(false)}
      style={{ background:active?T.accentLight:(hovered?T.accentLight:"white"), borderRadius:22, padding:"0 0 20px", flex:1, minWidth:0, position:"relative", overflow:"hidden", boxShadow:hovered?`0 20px 56px ${T.shadowColor},0 2px 8px rgba(0,0,0,0.06)`:"0 4px 20px rgba(0,0,0,0.05),0 1px 4px rgba(0,0,0,0.02)", transform:active?"translateY(-2px) scale(0.98)":hovered?"translateY(-8px) scale(1.02)":"translateY(0) scale(1)", transition:"all 0.28s cubic-bezier(0.4,0,0.2,1)", border:hovered||active?`2px solid ${T.accentBorder}`:`2px solid #f0f4f8`, cursor:"pointer", display:"flex", flexDirection:"column" }}>
      <div style={{ height:6, background:T.iconBg, borderRadius:"20px 20px 0 0", flexShrink:0 }}/>
      <div style={{ position:"absolute", top:18, left:16, display:"inline-flex", alignItems:"center", gap:4, background:T.numberBg, borderRadius:20, padding:"3px 10px", fontSize:9, fontWeight:800, color:"white", letterSpacing:"0.04em", textTransform:"uppercase", boxShadow:`0 2px 8px ${T.shadowColor}` }}>{T.pill}</div>
      <div style={{ width:68, height:68, borderRadius:"50%", background:hovered?T.iconBg:`linear-gradient(135deg,${T.accentLight} 0%,#f8fafc 100%)`, display:"flex", alignItems:"center", justifyContent:"center", margin:"36px auto 0", border:hovered?"none":`2px solid ${T.accentBorder}`, boxShadow:hovered?`0 8px 24px ${T.shadowColor}`:"none", transition:"all 0.28s ease", flexShrink:0 }}>
        <Icon size={28} color={hovered?"white":T.accent} strokeWidth={1.7}/>
      </div>
      <div style={{ textAlign:"center", margin:"10px 0 4px", fontSize:28, fontWeight:900, color:T.accent, fontFamily:"Georgia,'Times New Roman',serif", lineHeight:1, opacity:hovered?1:0.85, transition:"opacity 0.25s", flexShrink:0 }}>{T.highlight}</div>
      <h3 style={{ fontSize:15, fontWeight:800, color:BRAND.navy, textAlign:"center", margin:"0 16px 8px", lineHeight:1.3, fontFamily:"Georgia,'Times New Roman',serif", flexShrink:0 }}>{title}</h3>
      <p style={{ fontSize:12, color:BRAND.textMain, textAlign:"center", lineHeight:1.65, margin:"0 18px 14px", opacity:0.72, flex:1 }}>{description}</p>
      <div style={{ margin:"0 14px 14px", background:hovered?"rgba(255,255,255,0.7)":T.accentLight, borderRadius:12, padding:"10px 12px", display:"flex", flexDirection:"column", gap:6, border:`1px solid ${T.accentBorder}`, transition:"background 0.25s", flexShrink:0 }}>
        {T.bullets.map(b=>(
          <div key={b} style={{ display:"flex", alignItems:"center", gap:7, fontSize:11, color:BRAND.navy, fontWeight:500 }}>
            <div style={{ width:16, height:16, borderRadius:"50%", background:T.iconBg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <CheckCircle size={9} color="white" fill="white"/>
            </div>{b}
          </div>
        ))}
      </div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:5, background:active?"white":T.badgeBg, borderRadius:20, padding:"7px 14px", margin:"0 14px", fontSize:11, fontWeight:700, color:T.badgeColor, border:`1px solid ${T.accentBorder}`, transition:"all 0.25s ease", flexShrink:0 }}>
        <BadgeIcon size={12} color={T.badgeColor}/>{badge}
      </div>
    </div>
  );
}

/* ─── STATS BAR ─── */
const STAT_CARDS = [
  { id:"families", gradient:"linear-gradient(135deg,#0B2545 0%,#1a3a6e 100%)", labelColor:"rgba(255,255,255,0.65)", valueColor:"#ffffff", borderColor:"rgba(74,222,128,0.35)", glowColor:"rgba(74,222,128,0.2)", label:"Happy families", value:"10,000+", flex:"1 1 170px" },
  { id:"india",    gradient:"linear-gradient(135deg,#FF9933 0%,#e67d22 50%,#138808 100%)", labelColor:"rgba(255,255,255,0.8)", valueColor:"#ffffff", borderColor:"rgba(255,255,255,0.25)", glowColor:"rgba(255,153,51,0.3)", label:"Proudly made in", value:"India", flex:"1 1 130px" },
  { id:"delivery", gradient:"linear-gradient(135deg,#185fa5 0%,#2563eb 100%)", labelColor:"rgba(255,255,255,0.65)", valueColor:"#ffffff", borderColor:"rgba(147,197,253,0.35)", glowColor:"rgba(37,99,235,0.25)", label:"Delivery across India", value:"3–5 days", flex:"1 1 140px" },
  { id:"whatsapp", gradient:"linear-gradient(135deg,#128C7E 0%,#25D366 100%)", labelColor:"rgba(255,255,255,0.7)", valueColor:"#ffffff", borderColor:"rgba(255,255,255,0.25)", glowColor:"rgba(37,211,102,0.25)", label:"Instant alerts via", value:"WhatsApp", flex:"1 1 140px" },
  { id:"security", gradient:"linear-gradient(135deg,#4c1d95 0%,#7c3aed 60%,#a855f7 100%)", labelColor:"rgba(255,255,255,0.65)", valueColor:"#ffffff", borderColor:"rgba(233,213,255,0.3)", glowColor:"rgba(124,58,237,0.25)", label:"Your data security", value:"Bank-grade 256-bit · Zero data selling · GDPR-aligned", isWide:true, flex:"2 1 300px" },
];

function StatCard({ card }) {
  const [hovered, setHovered] = useState(false);
  const iconEl = ()=>{
    if(card.id==="families") return <AvatarGroup/>;
    if(card.id==="india")    return <div style={{ width:44,height:44,borderRadius:12,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.3)" }}><IndiaFlag/></div>;
    if(card.id==="delivery") return <div style={{ width:44,height:44,borderRadius:12,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.25)" }}><Truck size={22} color="white"/></div>;
    if(card.id==="whatsapp") return <div style={{ width:44,height:44,borderRadius:12,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.25)" }}><WhatsAppIcon size={26}/></div>;
    if(card.id==="security") return <div style={{ width:44,height:44,borderRadius:12,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.25)" }}><Lock size={22} color="white"/></div>;
    return null;
  };
  return (
    <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{ flex:card.flex, minWidth:0, background:card.gradient, borderRadius:18, padding:"16px 18px", display:"flex", flexDirection:card.id==="families"?"column":"row", alignItems:card.id==="families"?"flex-start":"center", gap:card.id==="families"?10:14, border:`1px solid ${card.borderColor}`, boxShadow:hovered?`0 16px 48px ${card.glowColor},0 4px 16px rgba(0,0,0,0.15),inset 0 1px 0 rgba(255,255,255,0.15)`:`0 4px 20px ${card.glowColor},0 1px 4px rgba(0,0,0,0.08),inset 0 1px 0 rgba(255,255,255,0.1)`, transform:hovered?"translateY(-4px) scale(1.015)":"translateY(0) scale(1)", transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)", position:"relative", overflow:"hidden", cursor:"default" }}>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(255,255,255,0.12) 0%,transparent 50%)", borderRadius:18, pointerEvents:"none" }}/>
      <div style={{ position:"absolute", top:-20, right:-20, width:80, height:80, borderRadius:"50%", background:"rgba(255,255,255,0.06)", pointerEvents:"none" }}/>
      {iconEl()}
      <div style={{ position:"relative", zIndex:1 }}>
        <p style={{ margin:0, fontSize:10.5, fontWeight:600, color:card.labelColor, letterSpacing:"0.02em", lineHeight:1.3 }}>{card.label}</p>
        <p style={{ margin:"3px 0 0", fontSize:card.isWide?11.5:14, fontWeight:card.isWide?700:800, color:card.valueColor, lineHeight:1.35, letterSpacing:card.isWide?"0":"-0.3px" }}>{card.value}</p>
      </div>
    </div>
  );
}

/* ─── MAIN EXPORT ─── */
export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  useEffect(()=>{ setTimeout(()=>setVisible(true),80); },[]);

  const steps = [
    { icon:ShoppingBag, title:"Order Your QR Tag",       description:"Choose the right protection plan for your need and place your order. We deliver premium weatherproof QR tags to your doorstep within 3–5 business days.", badge:"Delivered across India", badgeIcon:Truck,  themeIndex:0 },
    { icon:QrCode,       title:"Activate & Personalise", description:"Scan your tag to activate it, then fill in your contact details, emergency info, and any important notes. Takes less than 3 minutes — no tech skills needed.", badge:"Set up in 3 minutes",    badgeIcon:Clock,  themeIndex:1 },
    { icon:ShieldCheck,  title:"Stay Protected 24/7",    description:"Attach the tag to your pet, vehicle, or valuables and you're done. Anyone who finds your item scans the code — you get a WhatsApp alert instantly.",  badge:"Always-on protection",  badgeIcon:Zap,    themeIndex:2 },
  ];

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#f8fafc 0%,#fafcfa 50%,#f8fafc 100%)", fontFamily:"'DM Sans','Segoe UI',system-ui,sans-serif" }}>
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, backgroundImage:"radial-gradient(circle,#7ded88 1px,transparent 1px)", backgroundSize:"28px 28px", opacity:0.35 }}/>

      <div style={{ position:"relative", zIndex:1, maxWidth:1200, margin:"0 auto", padding:"52px 28px 48px" }}>

        {/* ── "Simple Process" pill — always visible ── */}
        <div style={{ display:"flex", justifyContent:"center", marginBottom:22, opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(-12px)", transition:"all 0.5s ease" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"white", borderRadius:40, padding:"7px 18px", fontSize:11, fontWeight:700, color:BRAND.green, letterSpacing:"0.08em", textTransform:"uppercase", boxShadow:"0 2px 10px rgba(0,0,0,0.08)", border:`1px solid ${BRAND.borderGreen}` }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:BRAND.green, boxShadow:"0 0 0 3px rgba(22,101,52,0.2)" }}/>
            Simple Process
          </div>
        </div>

        {/* Two-column layout */}
        <div style={{ display:"flex", alignItems:"flex-start", gap:48, flexWrap:"wrap" }}>

          {/* LEFT */}
          <div style={{ flex:"1 1 520px", minWidth:0, opacity:visible?1:0, transform:visible?"translateX(0)":"translateX(-24px)", transition:"all 0.6s ease 0.1s" }}>
            <h1 style={{ fontSize:"clamp(32px,5vw,52px)", fontWeight:900, color:BRAND.navy, lineHeight:1.15, marginBottom:14, fontFamily:"Georgia,'Times New Roman',serif" }}>
              Up and Running in<br/><span style={{ color:BRAND.green }}>3 Easy Steps</span>
            </h1>
            <p style={{ fontSize:15, color:BRAND.textMain, marginBottom:36, lineHeight:1.6, maxWidth:520, opacity:0.7 }}>
              No complicated setup. No technical knowledge needed.<br/>Just order, activate, and relax.
            </p>
            <div style={{ position:"relative", display:"flex", gap:16, flexWrap:"wrap", alignItems:"stretch" }}>
              <div style={{ position:"absolute", top:"30%", left:"calc(33.33% - 8px)", right:"calc(33.33% - 8px)", height:0, borderTop:`2px dashed ${BRAND.borderGreen}`, zIndex:0, pointerEvents:"none" }}/>
              {steps.map((s,i)=><StepCard key={i} {...s}/>)}
            </div>
            {/* CTA */}
            <div style={{ marginTop:28, background:"white", borderRadius:18, padding:"18px 22px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, flexWrap:"wrap", boxShadow:"0 4px 20px rgba(0,0,0,0.07)", border:`1px solid ${BRAND.softGreen}` }}>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:40, height:40, borderRadius:"50%", background:BRAND.softGreen, display:"flex", alignItems:"center", justifyContent:"center" }}><Shield size={20} color={BRAND.green}/></div>
                <div>
                  <div style={{ fontSize:14, fontWeight:800, color:BRAND.navy }}>Peace of mind in 3 simple steps</div>
                  <div style={{ fontSize:11.5, color:BRAND.textMain, opacity:0.6 }}>Join thousands of smart families who trust our QR protection.</div>
                </div>
              </div>
              <button style={{ background:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 100%)", color:"white", border:"none", borderRadius:12, padding:"13px 24px", fontSize:13.5, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", gap:8, boxShadow:"0 4px 16px rgba(6,78,59,0.35)", whiteSpace:"nowrap", transition:"transform 0.15s ease" }}
                onMouseEnter={e=>e.currentTarget.style.transform="scale(1.03)"}
                onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
                Start Protecting Now <ArrowRight size={16}/>
              </button>
            </div>
          </div>

          {/* RIGHT: iPhone sticky */}
          <div style={{ flex:"0 0 290px", opacity:visible?1:0, transition:"opacity 0.6s ease 0.15s" }}>
            <div style={{ position:"sticky", top:24, paddingBottom:32, paddingTop:20, display:"flex", justifyContent:"center" }}>
              <IPhoneMockup/>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div style={{ marginTop:72, opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(20px)", transition:"all 0.7s ease 0.4s" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
            <div style={{ height:2, flex:1, background:"linear-gradient(90deg,transparent,#7ded88 40%,transparent)" }}/>
            <span style={{ fontSize:10, fontWeight:700, color:"#aaa", letterSpacing:"0.12em", textTransform:"uppercase" }}>Trusted by thousands</span>
            <div style={{ height:2, flex:1, background:"linear-gradient(90deg,transparent,#7ded88 40%,transparent)" }}/>
          </div>
          <div style={{ display:"flex", alignItems:"stretch", gap:12, flexWrap:"wrap" }}>
            {STAT_CARDS.map(card=><StatCard key={card.id} card={card}/>)}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes rippleOut    { 0%{transform:scale(0.8);opacity:0.6} 100%{transform:scale(1.8);opacity:0} }
        @keyframes pulse        { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.85)} }
        @keyframes acceptPulse  { 0%,100%{box-shadow:0 6px 20px rgba(46,189,58,0.5)} 50%{box-shadow:0 6px 36px rgba(46,189,58,0.9),0 0 0 8px rgba(46,189,58,0.15)} }
        @keyframes waveBar      { from{transform:scaleY(0.3)} to{transform:scaleY(1)} }
      `}</style>
    </div>
  
  );
}