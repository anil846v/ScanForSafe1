import { useState, useEffect, useRef } from "react";
import {
  ShoppingBag, QrCode, ShieldCheck, ArrowRight,
  Truck, Clock, Zap, MapPin, MessageCircle,
  Shield, ChevronLeft, CheckCircle,
  Phone, AlertTriangle, Car, Lock,
  PhoneOff, MicOff, Volume2, User, Send,
  MessageSquare, ChevronRight
} from "lucide-react";

const BRAND = {
  green: "#2ebd3a", softGreen: "#e8f8eb", navy: "#0B2545",
  textMain: "#11355e", inputBg: "#f3f4f6", borderGreen: "#7ded88",
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
        <div key={i} style={{ width:28, height:28, borderRadius:"50%", background:av.bg, color:av.color, fontSize:8, fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center", border:"2px solid white", marginLeft:i===0?0:-9, zIndex:AVATARS.length-i, position:"relative", flexShrink:0, boxShadow:"0 1px 4px rgba(0,0,0,0.12)" }}>{av.initials}</div>
      ))}
      <div style={{ width:28, height:28, borderRadius:"50%", background:"#0B2545", color:"white", fontSize:7, fontWeight:800, display:"flex", alignItems:"center", justifyContent:"center", border:"2px solid white", marginLeft:-9, flexShrink:0, boxShadow:"0 1px 4px rgba(0,0,0,0.12)" }}>+9K</div>
    </div>
  );
}

function IndiaFlag() {
  return (
    <svg width="32" height="21" viewBox="0 0 900 600" style={{ borderRadius:3, display:"block" }}>
      <rect width="900" height="600" fill="#FF9933"/>
      <rect y="200" width="900" height="200" fill="#fff"/>
      <rect y="400" width="900" height="200" fill="#138808"/>
      <circle cx="450" cy="300" r="70" fill="none" stroke="#000080" strokeWidth="7"/>
      <g stroke="#000080" strokeWidth="2.5">
        <line x1="450" y1="230" x2="450" y2="370"/><line x1="380" y1="300" x2="520" y2="300"/>
        <line x1="400.5" y1="249.5" x2="499.5" y2="350.5"/><line x1="499.5" y1="249.5" x2="400.5" y2="350.5"/>
        <line x1="380" y1="267" x2="520" y2="333"/><line x1="380" y1="333" x2="520" y2="267"/>
      </g>
      <circle cx="450" cy="300" r="11" fill="#000080"/>
    </svg>
  );
}

function WhatsAppIcon({ size=22, color="white" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill={color}/>
      <path d="M12 2C6.477 2 6.477 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.402A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.073-1.115l-.292-.174-3.027.852.815-2.981-.19-.306A7.944 7.944 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" fill={color}/>
    </svg>
  );
}

const PAGE_META = [
  { title:"Scan Successful",     sub:"ScanForSafe · Verified",   prog:"16%" },
  { title:"Vehicle Information", sub:"ScanForSafe · Verified",   prog:"33%" },
  { title:"Calling Securely",    sub:"Secure Call · Connecting", prog:"50%" },
  { title:"Incoming Call",       sub:"Vehicle Owner · Ringing",  prog:"66%" },
  { title:"Active Call",         sub:"Secure · Encrypted",       prog:"83%" },
  { title:"Call Connected",      sub:"Mission Accomplished",     prog:"100%" },
  { title:"Scan Successful",     sub:"ScanForSafe · Verified",   prog:"16%" },
  { title:"Message Owner",       sub:"ScanForSafe · Direct SMS", prog:"40%" },
  { title:"Message Sent",        sub:"Delivered to Owner",       prog:"75%" },
  { title:"Owner Received",      sub:"Direct SMS · No App",      prog:"100%" },
];

function StatusIcons({ light=false }) {
  const c = light ? "rgba(255,255,255,0.9)" : "#111";
  return (
    <div style={{ display:"flex", gap:3, alignItems:"center" }}>
      <svg width="12" height="8" viewBox="0 0 13 9">
        <rect x="0" y="5.5" width="2.2" height="3.5" rx="0.4" fill={c}/>
        <rect x="3.2" y="3.5" width="2.2" height="5.5" rx="0.4" fill={c}/>
        <rect x="6.4" y="1.5" width="2.2" height="7.5" rx="0.4" fill={c}/>
        <rect x="9.6" y="0" width="2.2" height="9" rx="0.4" fill={c}/>
      </svg>
      <svg width="11" height="8" viewBox="0 0 12 9">
        <path d="M6 7L6 8.5" stroke={c} strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M3.5 5Q6 3 8.5 5" stroke={c} strokeWidth="1.1" fill="none" strokeLinecap="round"/>
        <path d="M1 2.5Q6 -0.5 11 2.5" stroke={c} strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      </svg>
      <svg width="19" height="9" viewBox="0 0 21 10">
        <rect x="0" y="1" width="18" height="8" rx="1.8" stroke={c} strokeWidth="0.9" fill="none"/>
        <rect x="18.5" y="3.2" width="2" height="3.6" rx="0.9" fill={c}/>
        <rect x="1.2" y="2.2" width="14" height="5.6" rx="0.8" fill={c}/>
      </svg>
    </div>
  );
}

function Ripple({ color="#2ebd3a", size=72 }) {
  return (
    <div style={{ position:"relative", width:size, height:size, flexShrink:0 }}>
      {[0,1,2].map(i=>(
        <div key={i} style={{ position:"absolute", inset:-(i*12), borderRadius:"50%", border:`1.5px solid ${color}`, opacity:0.22-i*0.06, animation:`rippleOut 2s ${i*0.55}s infinite ease-out` }}/>
      ))}
      <div style={{ width:size, height:size, borderRadius:"50%", background:`linear-gradient(135deg,${color}22,${color}44)`, border:`3px solid ${color}`, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 0 24px ${color}66` }}>
        <CheckCircle size={size*0.44} color={color} fill={color}/>
      </div>
    </div>
  );
}

function Page1({ onNavigate }) {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(()=>setShow(true),100); }, []);
  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, overflowY:"auto", background:"linear-gradient(160deg,#f0fdf4 0%,#fff 60%,#f0f8ff 100%)" }}>
      <div style={{ display:"flex", justifyContent:"center", marginTop:14, opacity:show?1:0, transition:"opacity 0.4s" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:5, background:BRAND.softGreen, borderRadius:20, padding:"4px 10px", fontSize:8, fontWeight:800, color:"#166534", border:`1px solid ${BRAND.borderGreen}`, letterSpacing:"0.06em" }}>
          <div style={{ width:5, height:5, borderRadius:"50%", background:BRAND.green, animation:"pulse 1.5s infinite" }}/> SCANFORSAFE · SECURE
        </div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginTop:16, opacity:show?1:0, transform:show?"scale(1)":"scale(0.7)", transition:"all 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.1s" }}>
        <Ripple color={BRAND.green} size={68}/>
      </div>
      <div style={{ textAlign:"center", marginTop:14, opacity:show?1:0, transition:"opacity 0.4s 0.3s" }}>
        <div style={{ fontSize:15, fontWeight:900, color:BRAND.navy, fontFamily:"'Sora',sans-serif", letterSpacing:"-0.4px" }}>Scan Successful!</div>
        <div style={{ fontSize:9, color:"#888", marginTop:3, fontFamily:"'DM Sans',sans-serif" }}>QR code verified & authenticated</div>
      </div>
      <div style={{ margin:"10px 12px 0", background:"white", borderRadius:12, padding:"10px 12px", border:`1.5px solid ${BRAND.borderGreen}`, display:"flex", alignItems:"center", gap:9, boxShadow:"0 4px 16px rgba(46,189,58,0.1)", opacity:show?1:0, transition:"opacity 0.4s 0.45s" }}>
        <div style={{ width:36, height:36, borderRadius:10, background:BRAND.softGreen, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><Car size={17} color={BRAND.green}/></div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:8, color:BRAND.green, fontWeight:700, marginBottom:1, textTransform:"uppercase", letterSpacing:"0.05em", fontFamily:"'Sora',sans-serif" }}>Two-Wheeler · KA 05 MX 2847</div>
          <div style={{ fontSize:11, fontWeight:900, color:BRAND.navy, fontFamily:"'Sora',sans-serif" }}>VEH-4K9P-2X7R</div>
        </div>
        <div style={{ background:BRAND.green, borderRadius:5, padding:"2px 7px", fontSize:7, fontWeight:800, color:"white" }}>✓ LIVE</div>
      </div>
      <div style={{ display:"flex", gap:6, margin:"8px 12px 0", opacity:show?1:0, transition:"opacity 0.4s 0.55s" }}>
        {["🔒 Encrypted","✓ Verified","🛡 Safe"].map(t=>(
          <div key={t} style={{ flex:1, background:"#f8f9fa", borderRadius:7, padding:"5px 4px", textAlign:"center", fontSize:7.5, fontWeight:700, color:"#555", border:"1px solid #eee" }}>{t}</div>
        ))}
      </div>
      <div onClick={()=>onNavigate(2)} style={{ margin:"10px 12px 12px", background:`linear-gradient(135deg,${BRAND.navy},${BRAND.green})`, borderRadius:11, padding:"11px", display:"flex", alignItems:"center", justifyContent:"center", gap:6, fontSize:11, fontWeight:800, color:"white", cursor:"pointer", boxShadow:"0 6px 20px rgba(46,189,58,0.35)", opacity:show?1:0, transition:"opacity 0.4s 0.65s", fontFamily:"'Sora',sans-serif" }}>
        View Vehicle Details <ArrowRight size={13}/>
      </div>
    </div>
  );
}

function Page2({ onNavigate, onMsgNavigate }) {
  const actions = [
    { key:"call", icon:<Phone size={14} color="white"/>, iconBg:"#185fa5", cardBg:"#e8f3ff", cardBorder:"#b5d4f4", label:"Call Vehicle Owner", desc:"Connect securely · No number revealed", onClick:()=>onNavigate(3) },
    { key:"msg",  icon:<MessageCircle size={14} color="white" fill="white"/>, iconBg:BRAND.green, cardBg:BRAND.softGreen, cardBorder:BRAND.borderGreen, label:"Message Owner", desc:"Send a quick SMS · Phone visible to owner", onClick:()=>onMsgNavigate() },
    { key:"loc",  icon:<MapPin size={14} color="white"/>, iconBg:"#e07b00", cardBg:"#fff3e0", cardBorder:"#facc75", label:"Share My Location", desc:"Let owner know exactly where you are" },
    { key:"emerg",icon:<AlertTriangle size={14} color="white"/>, iconBg:"#dc2626", cardBg:"#fff1f2", cardBorder:"#fca5a5", label:"Report Emergency", desc:"Alert owner · Contact authorities" },
  ];
  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, overflowY:"auto" }}>
      <div style={{ background:`linear-gradient(135deg,${BRAND.navy} 0%,#1a3a6e 100%)`, margin:"8px 10px 0", borderRadius:12, padding:"12px", display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:38, height:38, borderRadius:10, background:"rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, border:"1px solid rgba(255,255,255,0.25)" }}><Car size={19} color="white"/></div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:8, color:"rgba(255,255,255,0.6)", fontWeight:700, marginBottom:1, textTransform:"uppercase", letterSpacing:"0.06em", fontFamily:"'Sora',sans-serif" }}>Two-Wheeler</div>
          <div style={{ fontSize:13, fontWeight:900, color:"white", letterSpacing:"-0.3px", fontFamily:"'Sora',sans-serif" }}>KA 05 MX 2847</div>
          <div style={{ marginTop:4, display:"flex", gap:4 }}>
            <span style={{ background:BRAND.green, borderRadius:4, padding:"2px 6px", fontSize:7, fontWeight:800, color:"white", display:"inline-flex", alignItems:"center", gap:2 }}><CheckCircle size={6} color="white" fill="white"/> Verified</span>
            <span style={{ background:"rgba(255,255,255,0.15)", borderRadius:4, padding:"2px 6px", fontSize:7, fontWeight:700, color:"rgba(255,255,255,0.85)" }}>🔒 Owner ID Hidden</span>
          </div>
        </div>
      </div>
      <div style={{ padding:"8px 10px 4px", fontSize:8, fontWeight:700, color:"#aaa", letterSpacing:"0.08em", textTransform:"uppercase", fontFamily:"'Sora',sans-serif" }}>Choose an action</div>
      <div style={{ display:"flex", flexDirection:"column", gap:6, padding:"0 10px 10px" }}>
        {actions.map(a=>(
          <div key={a.key} onClick={a.onClick} style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 11px", borderRadius:11, background:a.cardBg, border:`1.5px solid ${a.cardBorder}`, cursor:a.onClick?"pointer":"default", boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ width:30, height:30, borderRadius:9, background:a.iconBg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{a.icon}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:10.5, fontWeight:800, color:"#111", marginBottom:1, fontFamily:"'Sora',sans-serif" }}>{a.label}</div>
              <div style={{ fontSize:8.5, color:"#888", lineHeight:1.4, fontFamily:"'DM Sans',sans-serif" }}>{a.desc}</div>
            </div>
            <ChevronRight size={12} color="#bbb"/>
          </div>
        ))}
      </div>
      <div style={{ background:"#f8f8f8", margin:"0 10px 10px", borderRadius:9, padding:"7px 10px", fontSize:8, color:"#bbb", textAlign:"center", border:"1px solid #eee", lineHeight:1.5 }}>🔒 All communications are fully encrypted.</div>
    </div>
  );
}

function Page3({ onNavigate }) {
  const [dots, setDots] = useState(0);
  useEffect(() => {
    const d = setInterval(()=>setDots(p=>(p+1)%4),500);
    const nav = setTimeout(()=>onNavigate(4),4000);
    return ()=>{ clearInterval(d); clearTimeout(nav); };
  }, []);
  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, background:"linear-gradient(160deg,#0B2545 0%,#0d3b2e 60%,#0a2218 100%)", alignItems:"center", justifyContent:"center", padding:"14px" }}>
      <div style={{ position:"relative", marginBottom:16 }}>
        {[0,1].map(i=>(<div key={i} style={{ position:"absolute", inset:-(i+1)*14, borderRadius:"50%", border:"1px solid rgba(46,189,58,0.25)", animation:`rippleOut 2s ${i*0.7}s infinite` }}/>))}
        <div style={{ width:70, height:70, borderRadius:"50%", background:"linear-gradient(135deg,#0B2545,#2ebd3a)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 36px rgba(46,189,58,0.4)" }}><Phone size={28} color="white"/></div>
      </div>
      <div style={{ fontSize:14, fontWeight:900, color:"white", marginBottom:5, fontFamily:"'Sora',sans-serif" }}>Calling Securely</div>
      <div style={{ fontSize:10, color:"rgba(255,255,255,0.6)", marginBottom:5 }}>Connecting to vehicle owner{".".repeat(dots)}</div>
      <div style={{ display:"inline-flex", alignItems:"center", gap:5, background:"rgba(46,189,58,0.15)", borderRadius:20, padding:"4px 11px", fontSize:8, fontWeight:700, color:BRAND.green, border:"1px solid rgba(46,189,58,0.3)", marginBottom:16 }}>
        <Shield size={8} color={BRAND.green}/> 100% Secure · Owner ID Hidden
      </div>
      <div style={{ background:"rgba(255,255,255,0.07)", borderRadius:12, padding:"10px 14px", width:"100%", marginBottom:16, border:"1px solid rgba(255,255,255,0.1)" }}>
        {[["Caller ID","Hidden from owner"],["Encryption","End-to-end 256-bit"],["Route","ScanForSafe Secure"]].map(([k,v])=>(
          <div key={k} style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
            <span style={{ fontSize:8.5, color:"rgba(255,255,255,0.5)" }}>{k}</span>
            <span style={{ fontSize:8.5, color:"white", fontWeight:700 }}>{v}</span>
          </div>
        ))}
      </div>
      <div onClick={()=>onNavigate(2)} style={{ width:46, height:46, borderRadius:"50%", background:"#ef4444", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", boxShadow:"0 6px 20px rgba(239,68,68,0.45)" }}><PhoneOff size={19} color="white"/></div>
      <div style={{ fontSize:8, color:"rgba(255,255,255,0.3)", marginTop:6 }}>Tap to cancel</div>
    </div>
  );
}

function Page4({ onNavigate }) {
  const [ring, setRing] = useState(0);
  useEffect(() => { const t = setInterval(()=>setRing(p=>(p+1)%3),600); return ()=>clearInterval(t); }, []);
  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, background:"linear-gradient(160deg,#111 0%,#1a1a2e 50%,#0d0d0d 100%)", alignItems:"center", justifyContent:"space-between", padding:"16px 14px 20px" }}>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:3, width:"100%" }}>
        <div style={{ fontSize:9, color:"rgba(255,255,255,0.45)", fontWeight:600, marginBottom:8 }}>Incoming Call</div>
        <div style={{ position:"relative", marginBottom:12 }}>
          {[0,1,2].map(i=>(<div key={i} style={{ position:"absolute", inset:-(i+1)*10, borderRadius:"50%", background:`rgba(46,189,58,${0.08-i*0.025})`, animation:`rippleOut 2.4s ${i*0.6}s infinite` }}/>))}
          <div style={{ width:62, height:62, borderRadius:"50%", background:"linear-gradient(135deg,#0B2545,#2ebd3a)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 28px rgba(46,189,58,0.5)", position:"relative", zIndex:1 }}>
            <div style={{ fontSize:12, fontWeight:900, color:"white", fontFamily:"'Sora',sans-serif" }}>SS</div>
          </div>
        </div>
        <div style={{ fontSize:15, fontWeight:900, color:"white", fontFamily:"'Sora',sans-serif" }}>Vehicle Owner</div>
        <div style={{ fontSize:9, color:"rgba(255,255,255,0.5)", marginBottom:3 }}>ScanForSafe Secure Call</div>
        <div style={{ display:"flex", alignItems:"center", gap:4, background:"rgba(46,189,58,0.12)", borderRadius:20, padding:"4px 10px", border:"1px solid rgba(46,189,58,0.25)", marginBottom:10 }}>
          <div style={{ display:"flex", gap:3 }}>
            {[0,1,2].map(i=>(<div key={i} style={{ width:4, height:4, borderRadius:"50%", background:i<=ring?BRAND.green:"rgba(255,255,255,0.2)", transition:"background 0.3s" }}/>))}
          </div>
          <span style={{ fontSize:8, color:"rgba(255,255,255,0.6)", fontWeight:600 }}>Ringing securely…</span>
        </div>
        <div style={{ background:"rgba(255,255,255,0.05)", borderRadius:10, padding:"8px 12px", width:"100%", border:"1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontSize:9, color:"rgba(255,255,255,0.65)", lineHeight:1.6 }}>Someone scanned your ScanForSafe QR tag. Their identity is verified by ScanForSafe.</div>
        </div>
      </div>
      <div style={{ display:"flex", justifyContent:"space-around", width:"100%", paddingTop:6 }}>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
          <div onClick={()=>onNavigate(2)} style={{ width:46, height:46, borderRadius:"50%", background:"#ef4444", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}><PhoneOff size={19} color="white"/></div>
          <span style={{ fontSize:9, color:"rgba(255,255,255,0.45)", fontWeight:600 }}>Decline</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
          <div onClick={()=>onNavigate(5)} style={{ width:46, height:46, borderRadius:"50%", background:BRAND.green, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", boxShadow:"0 6px 20px rgba(46,189,58,0.5)", animation:"acceptPulse 1.2s infinite" }}><Phone size={19} color="white"/></div>
          <span style={{ fontSize:9, color:"rgba(255,255,255,0.45)", fontWeight:600 }}>Accept</span>
        </div>
      </div>
    </div>
  );
}

function Page5({ onNavigate }) {
  const [secs, setSecs] = useState(0);
  const [muted, setMuted] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  useEffect(() => {
    const t = setInterval(()=>setSecs(p=>p+1),1000);
    const nav = setTimeout(()=>onNavigate(6),5000);
    return ()=>{ clearInterval(t); clearTimeout(nav); };
  }, []);
  const fmt = s=>`${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, background:"linear-gradient(160deg,#0B2545 0%,#0d3b2e 100%)", alignItems:"center", justifyContent:"space-between", padding:"16px 14px 20px" }}>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:"100%" }}>
        <div style={{ fontSize:8, color:"rgba(255,255,255,0.4)", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:12 }}>Secure Call Active</div>
        <div style={{ width:62, height:62, borderRadius:"50%", background:"linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05))", border:"2px solid rgba(255,255,255,0.25)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:10 }}><User size={27} color="rgba(255,255,255,0.8)"/></div>
        <div style={{ fontSize:15, fontWeight:900, color:"white", fontFamily:"'Sora',sans-serif" }}>Vehicle Owner</div>
        <div style={{ fontSize:9, color:"rgba(255,255,255,0.45)", marginBottom:5 }}>Connected via ScanForSafe</div>
        <div style={{ fontSize:22, fontWeight:900, color:BRAND.green, fontFamily:"monospace", letterSpacing:"2px", marginBottom:5 }}>{fmt(secs)}</div>
        <div style={{ display:"inline-flex", alignItems:"center", gap:4, background:"rgba(46,189,58,0.15)", borderRadius:20, padding:"3px 9px", border:"1px solid rgba(46,189,58,0.3)", marginBottom:14 }}>
          <div style={{ width:4, height:4, borderRadius:"50%", background:BRAND.green, animation:"pulse 1s infinite" }}/>
          <span style={{ fontSize:7.5, color:BRAND.green, fontWeight:700 }}>End-to-end encrypted</span>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:2.5, height:24, marginBottom:14 }}>
          {Array.from({length:16},(_,i)=>(<div key={i} style={{ width:2.5, borderRadius:2, background:`rgba(46,189,58,${0.4+Math.random()*0.6})`, height:`${Math.random()*16+4}px`, animation:`waveBar 0.8s ${i*0.06}s infinite alternate ease-in-out` }}/>))}
        </div>
      </div>
      <div style={{ width:"100%" }}>
        <div style={{ display:"flex", justifyContent:"space-around", marginBottom:12 }}>
          {[
            { icon:<MicOff size={16} color={muted?"white":"rgba(255,255,255,0.5)"}/>, label:"Mute", action:()=>setMuted(p=>!p), active:muted },
            { icon:<Volume2 size={16} color={speaker?"white":"rgba(255,255,255,0.5)"}/>, label:"Speaker", action:()=>setSpeaker(p=>!p), active:speaker },
          ].map(c=>(<div key={c.label} onClick={c.action} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4, cursor:"pointer" }}>
            <div style={{ width:40, height:40, borderRadius:"50%", background:c.active?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>{c.icon}</div>
            <span style={{ fontSize:8, color:"rgba(255,255,255,0.4)" }}>{c.label}</span>
          </div>))}
        </div>
        <div style={{ display:"flex", justifyContent:"center" }}>
          <div onClick={()=>onNavigate(6)} style={{ width:50, height:50, borderRadius:"50%", background:"#ef4444", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}><PhoneOff size={21} color="white"/></div>
        </div>
        <div style={{ textAlign:"center", fontSize:8, color:"rgba(255,255,255,0.25)", marginTop:5 }}>Tap red button to end call</div>
      </div>
    </div>
  );
}

function Page6() {
  const [show, setShow] = useState(false);
  useEffect(()=>{ setTimeout(()=>setShow(true),120); },[]);
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flex:1, padding:"16px 14px" }}>
      <div style={{ width:66, height:66, borderRadius:"50%", background:`linear-gradient(135deg,${BRAND.navy},${BRAND.green})`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12, transform:show?"scale(1)":"scale(0.4)", opacity:show?1:0, transition:"all 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}><CheckCircle size={30} color="white" fill="white"/></div>
      <div style={{ fontSize:15, fontWeight:900, color:"#111", fontFamily:"'Sora',sans-serif", marginBottom:4, opacity:show?1:0, transition:"opacity 0.4s 0.25s" }}>Call Connected!</div>
      <div style={{ fontSize:9.5, color:"#888", textAlign:"center", lineHeight:1.6, marginBottom:14, maxWidth:180, opacity:show?1:0, transition:"opacity 0.4s 0.35s" }}>You successfully reached the vehicle owner through ScanForSafe's secure network.</div>
      <div style={{ width:"100%", background:BRAND.softGreen, borderRadius:12, padding:"10px 12px", display:"flex", flexDirection:"column", gap:6, border:`1px solid ${BRAND.borderGreen}`, opacity:show?1:0, transition:"opacity 0.4s 0.45s", marginBottom:12 }}>
        {["Your identity was protected throughout","Call was end-to-end encrypted","Owner's info was never exposed","No data stored by ScanForSafe"].map(t=>(
          <div key={t} style={{ display:"flex", alignItems:"center", gap:7, fontSize:9, color:BRAND.navy, fontWeight:600 }}><CheckCircle size={10} color={BRAND.green} fill={BRAND.green}/> {t}</div>
        ))}
      </div>
      <div style={{ fontSize:9, color:"#aaa", marginBottom:7, opacity:show?1:0, transition:"opacity 0.4s 0.55s" }}>Rate your experience</div>
      <div style={{ display:"flex", gap:5, opacity:show?1:0, transition:"opacity 0.4s 0.6s" }}>
        {["⭐","⭐","⭐","⭐","⭐"].map((s,i)=>(<div key={i} style={{ fontSize:18, cursor:"pointer" }}>{s}</div>))}
      </div>
    </div>
  );
}

function Page7({ onNavigate }) {
  const [show, setShow] = useState(false);
  useEffect(()=>{ setTimeout(()=>setShow(true),100); },[]);
  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, overflowY:"auto", background:"linear-gradient(160deg,#f0fdf4 0%,#fff 60%,#f0f8ff 100%)" }}>
      <div style={{ display:"flex", justifyContent:"center", marginTop:14, opacity:show?1:0, transition:"opacity 0.4s" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:5, background:BRAND.softGreen, borderRadius:20, padding:"4px 10px", fontSize:8, fontWeight:800, color:"#166534", border:`1px solid ${BRAND.borderGreen}`, letterSpacing:"0.06em" }}>
          <div style={{ width:5, height:5, borderRadius:"50%", background:BRAND.green, animation:"pulse 1.5s infinite" }}/> SCANFORSAFE · SECURE
        </div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginTop:16, opacity:show?1:0, transform:show?"scale(1)":"scale(0.7)", transition:"all 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.1s" }}><Ripple color={BRAND.green} size={68}/></div>
      <div style={{ textAlign:"center", marginTop:14, opacity:show?1:0, transition:"opacity 0.4s 0.3s" }}>
        <div style={{ fontSize:15, fontWeight:900, color:BRAND.navy, fontFamily:"'Sora',sans-serif", letterSpacing:"-0.4px" }}>Scan Successful!</div>
        <div style={{ fontSize:9, color:"#888", marginTop:3 }}>QR code verified & authenticated</div>
      </div>
      <div style={{ margin:"10px 12px 0", background:"white", borderRadius:12, padding:"10px 12px", border:`1.5px solid ${BRAND.borderGreen}`, display:"flex", alignItems:"center", gap:9, opacity:show?1:0, transition:"opacity 0.4s 0.45s" }}>
        <div style={{ width:36, height:36, borderRadius:10, background:BRAND.softGreen, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><Car size={17} color={BRAND.green}/></div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:8, color:BRAND.green, fontWeight:700, marginBottom:1, textTransform:"uppercase", letterSpacing:"0.05em" }}>Two-Wheeler · KA 05 MX 2847</div>
          <div style={{ fontSize:11, fontWeight:900, color:BRAND.navy, fontFamily:"'Sora',sans-serif" }}>VEH-4K9P-2X7R</div>
        </div>
        <div style={{ background:BRAND.green, borderRadius:5, padding:"2px 7px", fontSize:7, fontWeight:800, color:"white" }}>✓ LIVE</div>
      </div>
      <div onClick={()=>onNavigate(8)} style={{ margin:"10px 12px 12px", background:`linear-gradient(135deg,${BRAND.navy},${BRAND.green})`, borderRadius:11, padding:"11px", display:"flex", alignItems:"center", justifyContent:"center", gap:6, fontSize:11, fontWeight:800, color:"white", cursor:"pointer", opacity:show?1:0, transition:"opacity 0.4s 0.65s", fontFamily:"'Sora',sans-serif" }}>
        View Vehicle Details <ArrowRight size={13}/>
      </div>
    </div>
  );
}

function Page8({ onNavigate }) {
  const [msg, setMsg] = useState("Hi,\nI would like to inform you about your vehicle.\nIt is parked in a no parking area.\nPlease check.\nThank you!");
  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, overflowY:"auto", background:"#fff" }}>
      <div style={{ background:`linear-gradient(135deg,${BRAND.navy},#1a3a6e)`, margin:"8px 10px 0", borderRadius:12, padding:"10px 12px", display:"flex", alignItems:"center", gap:9 }}>
        <div style={{ width:36, height:36, borderRadius:10, background:BRAND.softGreen, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><MessageSquare size={17} color={BRAND.green}/></div>
        <div style={{ fontSize:11, fontWeight:900, color:"white", fontFamily:"'Sora',sans-serif" }}>Send a message to the vehicle owner.</div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:5, margin:"8px 10px 0" }}>
        {["Owner details are hidden","Your number will be visible to the owner","No app or login required"].map((t,i)=>(
          <div key={i} style={{ display:"flex", alignItems:"center", gap:7, padding:"6px 10px", background:i===1?"#fff8e1":BRAND.softGreen, borderRadius:8, border:`1px solid ${i===1?"#facc75":BRAND.borderGreen}` }}>
            <CheckCircle size={11} color={i===1?"#d97706":BRAND.green} fill={i===1?"#d97706":BRAND.green}/>
            <span style={{ fontSize:9, color:"#333", fontWeight:600 }}>{t}</span>
          </div>
        ))}
      </div>
      <div style={{ margin:"8px 10px 0", padding:"8px 10px", background:"#f8f9fa", borderRadius:9, border:"1px solid #eee" }}>
        <div style={{ fontSize:8, color:"#aaa", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:2 }}>To</div>
        <div style={{ fontSize:10, fontWeight:700, color:"#333" }}>Vehicle Owner</div>
      </div>
      <div style={{ margin:"6px 10px 0", flex:1, position:"relative" }}>
        <textarea value={msg} onChange={e=>setMsg(e.target.value)} maxLength={160}
          style={{ width:"100%", minHeight:88, padding:"8px 10px", fontSize:9.5, color:"#333", lineHeight:1.6, borderRadius:9, border:"1.5px solid #ddd", resize:"none", outline:"none", background:"#fafafa", boxSizing:"border-box" }}/>
        <div style={{ position:"absolute", bottom:6, right:8, fontSize:7.5, color:"#bbb" }}>{msg.length}/160</div>
      </div>
      <div onClick={()=>onNavigate(9)} style={{ margin:"8px 10px 4px", background:BRAND.green, borderRadius:11, padding:"12px", display:"flex", alignItems:"center", justifyContent:"center", gap:7, fontSize:12, fontWeight:800, color:"white", cursor:"pointer", fontFamily:"'Sora',sans-serif" }}>
        <Send size={14}/> Send Message
      </div>
      <div style={{ margin:"0 10px 10px", textAlign:"center", fontSize:8, color:"#bbb", lineHeight:1.5 }}>Your phone number will be visible to the owner.<br/>Standard SMS charges may apply.</div>
    </div>
  );
}

function Page9({ onNavigate }) {
  const [show, setShow] = useState(false);
  useEffect(()=>{
    setTimeout(()=>setShow(true),120);
    const nav=setTimeout(()=>onNavigate(10),4000);
    return ()=>clearTimeout(nav);
  },[]);
  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, background:"linear-gradient(160deg,#0B2545 0%,#0d3b2e 100%)", alignItems:"center", justifyContent:"center", padding:"20px 16px" }}>
      <div style={{ width:72, height:72, borderRadius:"50%", background:BRAND.green, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14, transform:show?"scale(1)":"scale(0.3)", opacity:show?1:0, transition:"all 0.55s cubic-bezier(0.34,1.56,0.64,1)" }}><CheckCircle size={36} color="white" fill="white"/></div>
      <div style={{ fontSize:17, fontWeight:900, color:"white", textAlign:"center", marginBottom:6, opacity:show?1:0, transition:"opacity 0.4s 0.25s", fontFamily:"'Sora',sans-serif" }}>Message Sent Successfully!</div>
      <div style={{ fontSize:10, color:"rgba(255,255,255,0.65)", textAlign:"center", lineHeight:1.65, marginBottom:20, maxWidth:200, opacity:show?1:0, transition:"opacity 0.4s 0.35s" }}>Your message has been delivered to the vehicle owner.</div>
      <div style={{ background:"rgba(255,255,255,0.08)", borderRadius:12, padding:"12px 14px", width:"100%", border:"1px solid rgba(255,255,255,0.12)", opacity:show?1:0, transition:"opacity 0.4s 0.45s", marginBottom:16 }}>
        {[["Status","✅ Delivered"],["Method","Direct SMS"],["Your Number","Visible to owner"],["Owner Details","Kept hidden"]].map(([k,v])=>(
          <div key={k} style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
            <span style={{ fontSize:9, color:"rgba(255,255,255,0.5)" }}>{k}</span>
            <span style={{ fontSize:9, color:"white", fontWeight:700 }}>{v}</span>
          </div>
        ))}
      </div>
      <div onClick={()=>onNavigate(10)} style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:10, padding:"10px 20px", fontSize:10, fontWeight:700, color:"white", cursor:"pointer", fontFamily:"'Sora',sans-serif", opacity:show?1:0, transition:"opacity 0.4s 0.55s" }}>OK</div>
    </div>
  );
}

function Page10() {
  const [show, setShow] = useState(false);
  useEffect(()=>{ setTimeout(()=>setShow(true),100); },[]);
  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, background:"#f0f0f0", overflow:"hidden" }}>
      <div style={{ background:"#fff", padding:"8px 12px", display:"flex", alignItems:"center", gap:9, borderBottom:"1px solid #eee" }}>
        <div style={{ width:34, height:34, borderRadius:"50%", background:`linear-gradient(135deg,${BRAND.navy},${BRAND.green})`, display:"flex", alignItems:"center", justifyContent:"center" }}><Shield size={16} color="white"/></div>
        <div>
          <div style={{ fontSize:11, fontWeight:900, color:"#111", fontFamily:"'Sora',sans-serif" }}>ScanForSafe</div>
          <div style={{ fontSize:8, color:"#888" }}>Secure Message</div>
        </div>
      </div>
      <div style={{ flex:1, overflowY:"auto", padding:"10px 10px 4px", display:"flex", flexDirection:"column", gap:8 }}>
        <div style={{ textAlign:"center", fontSize:8, color:"#aaa", marginBottom:4 }}>Today 10:30 AM</div>
        <div style={{ alignSelf:"flex-start", maxWidth:"85%", opacity:show?1:0, transform:show?"translateX(0)":"translateX(-20px)", transition:"all 0.4s ease 0.1s" }}>
          <div style={{ background:"white", borderRadius:"12px 12px 12px 3px", padding:"9px 11px", boxShadow:"0 1px 4px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize:9, color:"#333", lineHeight:1.65, whiteSpace:"pre-line" }}>{`You have a new message from a ScanForSafe user regarding your vehicle.\n\nMessage:\nHi, I would like to inform you about your vehicle. It is parked in a no parking area. Please check. Thank you!`}</div>
            <div style={{ marginTop:8, padding:"6px 8px", background:BRAND.softGreen, borderRadius:7, border:`1px solid ${BRAND.borderGreen}` }}>
              <div style={{ fontSize:8, color:BRAND.green, fontWeight:700 }}>From: +91 98XXX XXXXX</div>
              <div style={{ fontSize:7.5, color:"#888", marginTop:1 }}>Tap to call</div>
            </div>
          </div>
          <div style={{ fontSize:7.5, color:"#bbb", marginTop:3, marginLeft:4 }}>Delivered</div>
        </div>
        <div style={{ alignSelf:"flex-end", maxWidth:"78%", opacity:show?1:0, transform:show?"translateX(0)":"translateX(20px)", transition:"all 0.4s ease 0.6s" }}>
          <div style={{ background:BRAND.green, borderRadius:"12px 12px 3px 12px", padding:"9px 11px" }}>
            <div style={{ fontSize:9, color:"white", lineHeight:1.65 }}>Thank you for letting me know. I will check and move it.</div>
          </div>
          <div style={{ fontSize:7.5, color:"#bbb", marginTop:3, textAlign:"right" }}>Delivered</div>
        </div>
      </div>
      <div style={{ background:"white", padding:"8px 10px", display:"flex", alignItems:"center", gap:7, borderTop:"1px solid #eee" }}>
        <div style={{ flex:1, background:"#f5f5f5", borderRadius:20, padding:"7px 12px", fontSize:9, color:"#bbb" }}>Reply to respond to the user</div>
        <div style={{ width:30, height:30, borderRadius:"50%", background:BRAND.green, display:"flex", alignItems:"center", justifyContent:"center" }}><Send size={13} color="white"/></div>
      </div>
    </div>
  );
}

function IPhoneMockup({ targetHeight }) {
  const [page, setPage] = useState(1);
  const [prevPage, setPrev] = useState(null);
  const [dir, setDir] = useState(1);
  const [mode, setMode] = useState("call");
  const PAGE_DURATIONS = [2800,3000,4200,4000,5200,3200,2800,5000,3500,4000];

  const goPage = (n) => {
    if (n===page) return;
    setDir(n>page?1:-1); setPrev(page); setPage(n);
    setMode(n<=6?"call":"msg");
  };

  useEffect(()=>{ const t=setTimeout(()=>setPrev(null),500); return()=>clearTimeout(t); },[page]);

  useEffect(()=>{
    const duration=PAGE_DURATIONS[page-1]??3500;
    const t=setTimeout(()=>{
      let next = page<6?page+1:page===6?7:page<10?page+1:1;
      setDir(1); setPrev(page); setPage(next); setMode(next<=6?"call":"msg");
    },duration);
    return()=>clearTimeout(t);
  },[page]);

  const pageStyle = (p) => {
    const isActive=p===page, isPrev=p===prevPage;
    let tx="100%";
    if(isActive) tx="0%";
    else if(isPrev) tx=dir>0?"-100%":"100%";
    else if(p<page) tx="-100%";
    return { position:"absolute", inset:0, transform:`translateX(${tx})`, opacity:isActive?1:0, transition:"transform 0.45s cubic-bezier(.77,0,.18,1), opacity 0.35s ease", pointerEvents:isActive?"auto":"none", display:"flex", flexDirection:"column", background:"white", overflow:"hidden" };
  };

  const meta=PAGE_META[page-1];
  const darkPages=[3,4,5,9];
  const PHONE_H=targetHeight||520;
  const PHONE_W=Math.min(260,Math.max(200,Math.round(PHONE_H*0.47)));
  const SHELL_RADIUS=Math.round(PHONE_W*0.163);
  const INNER_RADIUS=SHELL_RADIUS-6;

  return (
    <div style={{ position:"relative", width:PHONE_W, flexShrink:0 }}>
      {/* Flow labels above phone */}
      <div style={{ position:"absolute", top:-28, left:"50%", transform:"translateX(-50%)", display:"flex", gap:8, whiteSpace:"nowrap" }}>
        <div style={{ fontSize:9, fontWeight:800, color:mode==="call"?BRAND.green:"#bbb", fontFamily:"'Sora',sans-serif", transition:"color 0.3s", letterSpacing:"0.06em", textTransform:"uppercase" }}>📞 Call Flow</div>
        <div style={{ fontSize:9, color:"#ccc" }}>·</div>
        <div style={{ fontSize:9, fontWeight:800, color:mode==="msg"?BRAND.green:"#bbb", fontFamily:"'Sora',sans-serif", transition:"color 0.3s", letterSpacing:"0.06em", textTransform:"uppercase" }}>💬 Message Flow</div>
      </div>
      <div style={{ width:PHONE_W, height:PHONE_H, borderRadius:SHELL_RADIUS, background:"linear-gradient(160deg,#5a5a5a 0%,#3a3a3a 30%,#2a2a2a 60%,#1e1e1e 100%)", boxShadow:"inset 0 0 0 1px #666,inset 2px 4px 0 0 #555,inset -1px -2px 0 0 #111,0 24px 64px rgba(0,0,0,0.55)", position:"relative" }}>
        <div style={{ position:"absolute", inset:0, borderRadius:SHELL_RADIUS, background:"linear-gradient(135deg,rgba(255,255,255,0.18) 0%,transparent 40%)", pointerEvents:"none" }}/>
        {[{l:true,t:96,h:28},{l:true,t:133,h:28},{l:true,t:70,h:17}].map((b,i)=>(
          <div key={i} style={{ position:"absolute", [b.l?"left":"right"]:-3, top:b.t, width:3, height:b.h, background:"linear-gradient(180deg,#555,#3a3a3a)", borderRadius:b.l?"2px 0 0 2px":"0 2px 2px 0" }}/>
        ))}
        <div style={{ position:"absolute", right:-3, top:110, width:3, height:56, background:"linear-gradient(180deg,#555,#3a3a3a)", borderRadius:"0 2px 2px 0" }}/>
        <div style={{ position:"absolute", inset:5, borderRadius:SHELL_RADIUS-2, background:"#0a0a0a", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:2.5, borderRadius:INNER_RADIUS, background:"white", overflow:"hidden", display:"flex", flexDirection:"column" }}>
            <div style={{ position:"absolute", top:6, left:"50%", transform:"translateX(-50%)", width:72, height:20, background:"#0a0a0a", borderRadius:14, zIndex:30 }}/>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"9px 14px 0", fontSize:9, fontWeight:700, color:darkPages.includes(page)?"white":"#111", flexShrink:0, zIndex:10, position:"relative", fontFamily:"'Sora',sans-serif" }}>
              <span>9:41</span><StatusIcons light={darkPages.includes(page)}/>
            </div>
            {!darkPages.includes(page)&&page!==9&&(
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 11px 4px", borderBottom:"1.5px solid #f0f0f0", flexShrink:0, zIndex:10 }}>
                <div onClick={()=>page>1&&goPage(page-1)} style={{ cursor:page>1?"pointer":"default", opacity:page>1?1:0.25, width:24, height:24, borderRadius:7, background:page>1?"#f0f0f0":"transparent", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <ChevronLeft size={14} color="#333" strokeWidth={2.5}/>
                </div>
                <div style={{ textAlign:"center" }}>
                  <div style={{ fontSize:11, fontWeight:800, color:"#111", letterSpacing:"-0.3px", fontFamily:"'Sora',sans-serif" }}>{meta.title}</div>
                  <div style={{ fontSize:7.5, color:"#999", marginTop:1, display:"flex", alignItems:"center", justifyContent:"center", gap:2 }}><QrCode size={7} color="#999"/> {meta.sub}</div>
                </div>
                <div style={{ width:24 }}/>
              </div>
            )}
            {!darkPages.includes(page)&&page!==9&&(
              <div style={{ height:2.5, background:"#f0f0f0", margin:"0 9px", flexShrink:0, borderRadius:2 }}>
                <div style={{ height:"100%", background:"linear-gradient(90deg,#0B2545,#2ebd3a)", borderRadius:2, width:meta.prog, transition:"width 0.5s ease" }}/>
              </div>
            )}
            <div style={{ position:"relative", flex:1, overflow:"hidden" }}>
              <div style={pageStyle(1)}><Page1 onNavigate={goPage}/></div>
              <div style={pageStyle(2)}><Page2 onNavigate={goPage} onMsgNavigate={()=>goPage(7)}/></div>
              <div style={pageStyle(3)}><Page3 onNavigate={goPage}/></div>
              <div style={pageStyle(4)}><Page4 onNavigate={goPage}/></div>
              <div style={pageStyle(5)}><Page5 onNavigate={goPage}/></div>
              <div style={pageStyle(6)}><Page6/></div>
              <div style={pageStyle(7)}><Page7 onNavigate={goPage}/></div>
              <div style={pageStyle(8)}><Page8 onNavigate={goPage}/></div>
              <div style={pageStyle(9)}><Page9 onNavigate={goPage}/></div>
              <div style={pageStyle(10)}><Page10/></div>
            </div>
          </div>
        </div>
      </div>
      {/* Page dots below phone */}
      <div style={{ position:"absolute", bottom:-26, left:"50%", transform:"translateX(-50%)", display:"flex", gap:4, alignItems:"center" }}>
        {[1,2,3,4,5,6].map(p=>(<div key={p} onClick={()=>goPage(p)} style={{ width:p===page?14:4, height:4, borderRadius:3, background:mode==="call"&&p===page?BRAND.green:p===page?"#aaa":"#ddd", cursor:"pointer", transition:"all 0.3s ease" }}/>))}
        <div style={{ width:1, height:8, background:"#ccc", margin:"0 2px" }}/>
        {[7,8,9,10].map(p=>(<div key={p} onClick={()=>goPage(p)} style={{ width:p===page?14:4, height:4, borderRadius:3, background:mode==="msg"&&p===page?BRAND.green:p===page?"#aaa":"#ddd", cursor:"pointer", transition:"all 0.3s ease" }}/>))}
      </div>
    </div>
  );
}

const STEP_THEMES = [
  {
    accent:"#1a56db", accentLight:"#eff6ff", accentBorder:"#bfdbfe",
    iconBg:"linear-gradient(135deg,#1e40af 0%,#3b82f6 100%)",
    numberBg:"linear-gradient(135deg,#0B2545 0%,#1a56db 100%)",
    badgeBg:"#eff6ff", badgeColor:"#1e40af", shadowColor:"rgba(26,86,219,0.18)",
    pill:"Step 1", highlight:"Register & Login",
    bullets:["Weatherproof & durable","Multiple size options","QR + NFC enabled"]
  },
  {
    accent:"#0891b2", accentLight:"#ecfeff", accentBorder:"#a5f3fc",
    iconBg:"linear-gradient(135deg,#0e7490 0%,#22d3ee 100%)",
    numberBg:"linear-gradient(135deg,#0B2545 0%,#0891b2 100%)",
    badgeBg:"#ecfeff", badgeColor:"#0e7490", shadowColor:"rgba(8,145,178,0.18)",
    pill:"Step 2", highlight:"3 Minutes",
    bullets:["No tech skills needed","Add emergency contacts","Instant activation"]
  },
  {
    accent:"#2ebd3a", accentLight:"#e8f8eb", accentBorder:"#7ded88",
    iconBg:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 100%)",
    numberBg:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 100%)",
    badgeBg:"#e8f8eb", badgeColor:"#166534", shadowColor:"rgba(46,189,58,0.18)",
    pill:"Step 3", highlight:"24 / 7",
    bullets:["Instant WhatsApp alert","Works without an app","Location pinned"]
  },
];

function StepCard({ icon:Icon, title, description, badge, badgeIcon:BadgeIcon, themeIndex }) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const T = STEP_THEMES[themeIndex]||STEP_THEMES[0];
  return (
    <div className="hiw-step-card"
      onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>{setHovered(false);setActive(false);}}
      onMouseDown={()=>setActive(true)} onMouseUp={()=>setActive(false)}
      onTouchStart={()=>setActive(true)} onTouchEnd={()=>setActive(false)}
      style={{ background:active?T.accentLight:hovered?T.accentLight:"white", borderRadius:22, padding:"0 0 20px", flex:1, minWidth:0, position:"relative", overflow:"hidden", boxShadow:hovered?`0 20px 56px ${T.shadowColor}`:"0 4px 20px rgba(0,0,0,0.05)", transform:active?"translateY(-2px) scale(0.98)":hovered?"translateY(-8px) scale(1.02)":"none", transition:"all 0.28s cubic-bezier(0.4,0,0.2,1)", border:hovered||active?`2px solid ${T.accentBorder}`:"2px solid #f0f4f8", cursor:"pointer", display:"flex", flexDirection:"column" }}>
      <div style={{ height:6, background:T.iconBg, borderRadius:"20px 20px 0 0", flexShrink:0 }}/>
      <div style={{ position:"absolute", top:18, left:16, display:"inline-flex", alignItems:"center", gap:4, background:T.numberBg, borderRadius:20, padding:"3px 10px", fontSize:9, fontWeight:800, color:"white", letterSpacing:"0.04em", textTransform:"uppercase", fontFamily:"'Sora',sans-serif" }}>{T.pill}</div>
      <div style={{ width:68, height:68, borderRadius:"50%", background:hovered?T.iconBg:`linear-gradient(135deg,${T.accentLight} 0%,#f8fafc 100%)`, display:"flex", alignItems:"center", justifyContent:"center", margin:"36px auto 0", border:hovered?"none":`2px solid ${T.accentBorder}`, transition:"all 0.28s ease", flexShrink:0 }}>
        <Icon size={28} color={hovered?"white":T.accent} strokeWidth={1.7}/>
      </div>
      <div style={{ textAlign:"center", margin:"10px 0 4px", fontSize:28, fontWeight:900, color:T.accent, fontFamily:"'Sora',sans-serif", lineHeight:1, flexShrink:0 }}>{T.highlight}</div>
      <h3 style={{ fontSize:15, fontWeight:900, color:"#06160A", textAlign:"center", margin:"0 16px 8px", lineHeight:1.3, fontFamily:"'Sora',sans-serif", flexShrink:0 }}>{title}</h3>
      <p style={{ fontSize:12, color:"#1a2e22", fontWeight:500, textAlign:"center", lineHeight:1.65, margin:"0 18px 14px", flex:1, fontFamily:"'DM Sans',sans-serif" }}>{description}</p>
      <div style={{ margin:"0 14px 14px", background:hovered?"rgba(255,255,255,0.7)":T.accentLight, borderRadius:12, padding:"10px 12px", display:"flex", flexDirection:"column", gap:6, border:`1px solid ${T.accentBorder}`, flexShrink:0 }}>
        {T.bullets.map(b=>(<div key={b} style={{ display:"flex", alignItems:"center", gap:7, fontSize:11, color:"#0B2545", fontWeight:700 }}>
          <div style={{ width:16, height:16, borderRadius:"50%", background:T.iconBg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><CheckCircle size={9} color="white" fill="white"/></div>{b}
        </div>))}
      </div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:5, background:active?"white":T.badgeBg, borderRadius:20, padding:"7px 14px", margin:"0 14px", fontSize:11, fontWeight:700, color:T.badgeColor, border:`1px solid ${T.accentBorder}`, flexShrink:0 }}>
        <BadgeIcon size={12} color={T.badgeColor}/>{badge}
      </div>
    </div>
  );
}

const STAT_CARDS = [
  { id:"families", gradient:"linear-gradient(135deg,#0B2545 0%,#1a3a6e 100%)", labelColor:"rgba(255,255,255,0.65)", valueColor:"#ffffff", borderColor:"rgba(74,222,128,0.35)", glowColor:"rgba(74,222,128,0.2)", label:"Happy families", value:"10,000+", flex:"1 1 170px" },
  { id:"india",    gradient:"linear-gradient(135deg,#FF9933 0%,#e67d22 50%,#138808 100%)", labelColor:"rgba(255,255,255,0.8)", valueColor:"#ffffff", borderColor:"rgba(255,255,255,0.25)", glowColor:"rgba(255,153,51,0.3)", label:"Proudly made in", value:"India", flex:"1 1 130px" },
  { id:"delivery", gradient:"linear-gradient(135deg,#185fa5 0%,#2563eb 100%)", labelColor:"rgba(255,255,255,0.65)", valueColor:"#ffffff", borderColor:"rgba(147,197,253,0.35)", glowColor:"rgba(37,99,235,0.25)", label:"Delivery across India", value:"3–5 days", flex:"1 1 140px" },
  { id:"whatsapp", gradient:"linear-gradient(135deg,#128C7E 0%,#25D366 100%)", labelColor:"rgba(255,255,255,0.7)", valueColor:"#ffffff", borderColor:"rgba(255,255,255,0.25)", glowColor:"rgba(37,211,102,0.25)", label:"Instant alerts via", value:"WhatsApp", flex:"1 1 140px" },
  { id:"security", gradient:"linear-gradient(135deg,#4c1d95 0%,#7c3aed 60%,#a855f7 100%)", labelColor:"rgba(255,255,255,0.65)", valueColor:"#ffffff", borderColor:"rgba(233,213,255,0.3)", glowColor:"rgba(124,58,237,0.25)", label:"Your data security", value:"Bank-grade 256-bit · Zero data selling · GDPR-aligned", isWide:true, flex:"2 1 300px" },
];

function StatCard({ card }) {
  const [hovered, setHovered] = useState(false);
  const iconEl = () => {
    if(card.id==="families") return <AvatarGroup/>;
    if(card.id==="india")    return <div style={{ width:40,height:40,borderRadius:10,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.3)" }}><IndiaFlag/></div>;
    if(card.id==="delivery") return <div style={{ width:40,height:40,borderRadius:10,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.25)" }}><Truck size={20} color="white"/></div>;
    if(card.id==="whatsapp") return <div style={{ width:40,height:40,borderRadius:10,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.25)" }}><WhatsAppIcon size={24}/></div>;
    if(card.id==="security") return <div style={{ width:40,height:40,borderRadius:10,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"1px solid rgba(255,255,255,0.25)" }}><Lock size={20} color="white"/></div>;
    return null;
  };
  return (
    <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{ flex:card.flex, minWidth:0, background:card.gradient, borderRadius:18, padding:"14px 16px", display:"flex", flexDirection:card.id==="families"?"column":"row", alignItems:card.id==="families"?"flex-start":"center", gap:card.id==="families"?9:12, border:`1px solid ${card.borderColor}`, boxShadow:hovered?`0 16px 48px ${card.glowColor}`:`0 4px 20px ${card.glowColor}`, transform:hovered?"translateY(-4px) scale(1.015)":"none", transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)", position:"relative", overflow:"hidden", cursor:"default" }}>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(255,255,255,0.12) 0%,transparent 50%)", borderRadius:18, pointerEvents:"none" }}/>
      {iconEl()}
      <div style={{ position:"relative", zIndex:1 }}>
        <p style={{ margin:0, fontSize:9.5, fontWeight:500, color:card.labelColor, letterSpacing:"0.02em", lineHeight:1.3 }}>{card.label}</p>
        <p style={{ margin:"3px 0 0", fontSize:card.isWide?10.5:13, fontWeight:card.isWide?700:800, color:card.valueColor, lineHeight:1.35, letterSpacing:card.isWide?"0":"-0.3px", fontFamily:"'Sora',sans-serif" }}>{card.value}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const cardsColRef = useRef(null);
  const [cardsHeight, setCardsHeight] = useState(520);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 960);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(()=>{ setTimeout(()=>setVisible(true),80); },[]);

  useEffect(()=>{
    if(!cardsColRef.current) return;
    const ro = new ResizeObserver(entries=>{
      for(const entry of entries){
        setCardsHeight(Math.max(400, Math.round(entry.contentRect.height - 130)));
      }
    });
    ro.observe(cardsColRef.current);
    return()=>ro.disconnect();
  },[]);

  const steps = [
    { icon:ShoppingBag, title:"Order Your QR Tag",      description:"Choose the right protection plan for your need and place your order. We deliver premium weatherproof QR tags to your doorstep within 3–5 business days.", badge:"Delivered across India", badgeIcon:Truck,  themeIndex:0 },
    { icon:QrCode,      title:"Activate & Personalise", description:"Scan your tag to activate it, then fill in your contact details, emergency info, and any important notes. Takes less than 3 minutes — no tech skills needed.", badge:"Set up in 3 minutes",   badgeIcon:Clock,  themeIndex:1 },
    { icon:ShieldCheck, title:"Stay Protected 24/7",    description:"Attach the tag to your pet, vehicle, or valuables and you're done. Anyone who finds your item scans the code — you get a WhatsApp alert instantly.",  badge:"Always-on protection", badgeIcon:Zap,    themeIndex:2 },
  ];

  return (
    <div style={{      paddingTop: "30px",  background:"linear-gradient(160deg,#f8fafc 0%,#fafcfa 50%,#f8fafc 100%)", fontFamily:"'DM Sans',system-ui,sans-serif" }}>
      {/* dot grid */}
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, backgroundImage:"radial-gradient(circle,#7ded88 1px,transparent 1px)", backgroundSize:"28px 28px", opacity:0.35 }}/>

      <div style={{ position:"relative", zIndex:1, maxWidth:1200, margin:"0 auto", padding:"48px 24px 44px" }}>

        {/* pill */}
        <div style={{ display:"flex", justifyContent:"center", marginBottom:20, opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(-12px)", transition:"all 0.5s ease" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"white", borderRadius:40, padding:"6px 16px", fontSize:10, fontWeight:700, color:BRAND.green, letterSpacing:"0.08em", textTransform:"uppercase", boxShadow:"0 2px 10px rgba(0,0,0,0.08)", border:`1px solid ${BRAND.borderGreen}`, fontFamily:"'Sora',sans-serif" }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:BRAND.green, boxShadow:"0 0 0 3px rgba(22,101,52,0.2)" }}/>
            Simple Process
          </div>
        </div>

        {/* two-column */}
        <div className="hiw-row" style={{ display:"flex", alignItems:"stretch", gap:32 }}>

          {/* LEFT */}
          <div ref={cardsColRef} className="hiw-left" style={{ flex:"1 1 0", minWidth:0, opacity:visible?1:0, transform:visible?"translateX(0)":"translateX(-24px)", transition:"all 0.6s ease 0.1s" }}>
            <h1 style={{ fontSize:"clamp(26px,4vw,44px)", fontWeight:900, color:BRAND.navy, lineHeight:1.12, marginBottom:10, fontFamily:"'Sora',sans-serif", letterSpacing:"-0.03em" }}>
              Register & Activate in<br/>
              <span style={{ background:"linear-gradient(125deg,#0a2e10 0%,#2ebd3a 52%,#4bd557 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>3 Easy Steps</span>
            </h1>
            <p style={{ fontSize:13.5, color:"#1a2e22", fontWeight:500, marginBottom:28, lineHeight:1.7, maxWidth:500 }}>No complicated setup. No technical knowledge needed.<br/>Just order, activate, and relax.</p>

            <div className="hiw-steps-container" style={{ position:"relative", display:"flex", gap:12, flexWrap:"wrap", alignItems:"stretch" }}>
              <div className="hiw-steps-line" style={{ position:"absolute", top:"30%", left:"calc(33.33% - 8px)", right:"calc(33.33% - 8px)", height:0, borderTop:`2px dashed ${BRAND.borderGreen}`, zIndex:0, pointerEvents:"none" }}/>
              {steps.map((s,i)=><StepCard key={i} {...s}/>)}
            </div>
          </div>

          {/* ── RIGHT: phone column — FIXED padding ── */}
          {/* paddingTop reduced from 130 → 40 so phone sits inside the section, not behind the header */}
          <div className="hiw-phone" style={{ flex:"0 0 auto", opacity:visible?1:0, transition:"opacity 0.6s ease 0.15s", display:"flex", alignItems:"center", justifyContent:"center", paddingTop:40, paddingBottom:0 }}>
            <IPhoneMockup targetHeight={isMobile ? 460 : cardsHeight}/>
          </div>
        </div>

        {/* stats bar */}
        <div style={{ marginTop:48, opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(20px)", transition:"all 0.7s ease 0.4s" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <div style={{ height:2, flex:1, background:"linear-gradient(90deg,transparent,#7ded88 40%,transparent)" }}/>
            <span style={{ fontSize:9, fontWeight:700, color:"#aaa", letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Sora',sans-serif" }}>Trusted by thousands</span>
            <div style={{ height:2, flex:1, background:"linear-gradient(90deg,transparent,#7ded88 40%,transparent)" }}/>
          </div>
          <div className="hiw-stat-row" style={{ display:"flex", alignItems:"stretch", gap:10, flexWrap:"wrap" }}>
            {STAT_CARDS.map(card=><StatCard key={card.id} card={card}/>)}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');
        @keyframes rippleOut   { 0%{transform:scale(0.8);opacity:0.6} 100%{transform:scale(1.8);opacity:0} }
        @keyframes pulse       { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.85)} }
        @keyframes acceptPulse { 0%,100%{box-shadow:0 6px 20px rgba(46,189,58,0.5)} 50%{box-shadow:0 6px 36px rgba(46,189,58,0.9),0 0 0 8px rgba(46,189,58,0.15)} }
        @keyframes waveBar     { from{transform:scaleY(0.3)} to{transform:scaleY(1)} }
        .hiw-row { flex-direction: row; }
        @media (max-width: 960px) {
          .hiw-row { flex-direction:column!important; align-items:center!important; gap:48px!important; }
          .hiw-left { flex:none!important; width:100%!important; }
          .hiw-phone { flex:none!important; width:100%!important; padding-top:0!important; padding-bottom:52px!important; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .hiw-left h1 {
            font-size: 38px !important;
            line-height: 1.15 !important;
            margin-bottom: 12px !important;
          }
          .hiw-left p {
            font-size: 16px !important;
            margin-bottom: 32px !important;
          }
          .hiw-step-card h3 {
            font-size: 17px !important;
          }
          .hiw-step-card p {
            font-size: 13.5px !important;
            line-height: 1.7 !important;
          }
          .hiw-step-card div {
            font-size: 12.5px !important;
          }
          .hiw-stat-row p {
            font-size: 13.5px !important;
          }
        }
        @media (max-width: 640px) {
          .hiw-left h1 {
            text-align: center !important;
            font-size: 28px !important;
            line-height: 1.2 !important;
          }
          .hiw-left p {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 24px !important;
            font-size: 13.5px !important;
          }
          .hiw-steps-container {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .hiw-steps-line {
            display: none !important;
          }
          .hiw-step-card {
            flex: none !important;
            width: 100% !important;
            min-width: 0 !important;
          }
          .hiw-stat-row {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .hiw-stat-row > div {
            flex: none !important;
            width: 100% !important;
            min-width: 0 !important;
          }
          .hiw-stat-row > div:nth-child(5) {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 540px) {
          .hiw-row { gap:32px!important; }
          .hiw-phone { padding-bottom:48px!important; }
        }
      `}</style>
    </div>
  );
}