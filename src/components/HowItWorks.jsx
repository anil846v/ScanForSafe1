import { useState, useEffect, useRef } from "react";
import {
  ShoppingBag, QrCode, ShieldCheck, ArrowRight,
  Truck, Clock, Zap, MapPin, MessageCircle,
  Shield, ChevronLeft, CheckCircle, Bell,
  Phone, AlertTriangle, Send, Car,
  PackageSearch, ScanLine, ShieldHalf, Users, Lock
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
  { title: "Vehicle Information", sub: "ScanForSafe · Verified",    prog: "25%" },
  { title: "Message Owner",       sub: "Compose · No login needed", prog: "50%" },
  { title: "Message Delivered",   sub: "Sent securely",             prog: "75%" },
  { title: "Owner Notified",      sub: "Via SMS · Instant reply",   prog: "100%" },
];

const COMPOSE_MSG =
  "Hi,\nI would like to inform you about your vehicle. It is parked in a no parking area. Please check.\n\nThank you!";

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

/* ─── PAGE 1: scrollable with bigger text ─── */
function Page1({ onNavigate }) {
  const actions = [
    { key:"call",  icon:<Phone size={16} color="white"/>,                       iconBg:"#185fa5", cardBg:"#e8f3ff", cardBorder:"#b5d4f4", label:"Call Vehicle Owner",  desc:"Tap to call the owner immediately",  arrColor:"#0c447c" },
    { key:"msg",   icon:<MessageCircle size={16} color="white" fill="white"/>,   iconBg:BRAND.green, cardBg:BRAND.softGreen, cardBorder:BRAND.borderGreen, label:"Message Owner",       desc:"Send a quick message to the owner",   arrColor:"#27500a", onClick:()=>onNavigate(2) },
    { key:"emerg", icon:<AlertTriangle size={16} color="white"/>,                iconBg:"#e07b00", cardBg:"#fff3e0", cardBorder:"#facc75", label:"Report Emergency",    desc:"Report suspicious activity",         arrColor:"#633806" },
  ];
  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, overflowY:"auto", overflowX:"hidden" }}>

      {/* Vehicle card */}
      <div style={{ background:"linear-gradient(135deg,#e8f8eb,#f0fdf4)", margin:"12px 12px 0", borderRadius:14, padding:"14px 14px", border:`1.5px solid ${BRAND.borderGreen}`, display:"flex", alignItems:"center", gap:11, flexShrink:0 }}>
        <div style={{ width:44, height:44, borderRadius:12, background:"white", display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid #ddd", flexShrink:0, boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
          <Car size={24} color={BRAND.navy} />
        </div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:10, color:BRAND.green, fontWeight:700, marginBottom:2, letterSpacing:"0.02em" }}>Two-Wheeler · KA 05 MX 2847</div>
          <div style={{ fontSize:13, fontWeight:900, color:BRAND.navy, letterSpacing:"-0.4px" }}>VEH-4K9P-2X7R</div>
          <div style={{ marginTop:5 }}>
            <span style={{ display:"inline-flex", alignItems:"center", gap:4, background:BRAND.green, borderRadius:5, padding:"3px 8px", fontSize:9, fontWeight:700, color:"white" }}>
              <CheckCircle size={9} color="white" fill="white"/> Verified & Active
            </span>
          </div>
        </div>
      </div>

      {/* Section label */}
      <div style={{ padding:"12px 12px 6px", fontSize:10, fontWeight:700, color:"#aaa", letterSpacing:"0.08em", textTransform:"uppercase", flexShrink:0 }}>
        Choose an action
      </div>

      {/* Action cards */}
      <div style={{ display:"flex", flexDirection:"column", gap:8, padding:"0 12px 10px" }}>
        {actions.map(a=>(
          <div key={a.key} onClick={a.onClick}
            style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:13, background:a.cardBg, border:`1.5px solid ${a.cardBorder}`, cursor:a.onClick?"pointer":"default", transition:"transform 0.15s, box-shadow 0.15s", boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}
            onMouseDown={e=>{if(a.onClick)e.currentTarget.style.transform="scale(0.97)"}}
            onMouseUp={e=>{e.currentTarget.style.transform="scale(1)"}}>
            <div style={{ width:36, height:36, borderRadius:10, background:a.iconBg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:`0 3px 10px ${a.iconBg}55` }}>{a.icon}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:12, fontWeight:800, color:"#111", marginBottom:2 }}>{a.label}</div>
              <div style={{ fontSize:10, color:"#888", lineHeight:1.4 }}>{a.desc}</div>
            </div>
            <ChevronLeft size={15} color={a.arrColor} style={{ transform:"rotate(180deg)", opacity:0.5 }}/>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div style={{ background:"#f8f8f8", margin:"0 12px 12px", borderRadius:10, padding:"9px 12px", fontSize:9, color:"#bbb", textAlign:"center", border:"1px solid #eee", flexShrink:0, lineHeight:1.5 }}>
        🔒 Registered with ScanForSafe. Info shown only for genuine situations. Thank you! ❤️
      </div>
    </div>
  );
}

/* ─── PAGE 2: scrollable compose ─── */
function Page2({ onNavigate }) {
  const [typed, setTyped] = useState("");
  const [done,  setDone]  = useState(false);
  const timerRef = useRef(null);
  useEffect(()=>{
    let i=0; setTyped(""); setDone(false);
    timerRef.current=setInterval(()=>{ i++; setTyped(COMPOSE_MSG.slice(0,i)); if(i>=COMPOSE_MSG.length){clearInterval(timerRef.current);setDone(true);} },28);
    return ()=>clearInterval(timerRef.current);
  },[]);
  const chips=["Owner details hidden","Your number visible","No login required"];
  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, overflowY:"auto", overflowX:"hidden" }}>

      {/* To field */}
      <div style={{ background:"#f8f9fa", margin:"10px 12px 0", borderRadius:10, padding:"10px 12px", flexShrink:0, border:"1px solid #eee" }}>
        <div style={{ fontSize:9, color:"#bbb", marginBottom:2, fontWeight:600, letterSpacing:"0.06em", textTransform:"uppercase" }}>To:</div>
        <div style={{ fontSize:13, fontWeight:800, color:BRAND.navy }}>Vehicle Owner</div>
      </div>

      {/* Chips */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:5, margin:"8px 12px 0", flexShrink:0 }}>
        {chips.map(c=>(
          <div key={c} style={{ fontSize:9, padding:"4px 9px", borderRadius:12, background:BRAND.softGreen, color:"#27500a", fontWeight:700, display:"flex", alignItems:"center", gap:4, border:`1px solid ${BRAND.borderGreen}` }}>
            <CheckCircle size={9} color="#27500a"/> {c}
          </div>
        ))}
      </div>

      {/* Message box */}
      <div style={{ margin:"8px 12px 0", background:"#fafafa", borderRadius:12, padding:"11px 12px", fontSize:11, color:"#333", lineHeight:1.65, border:`1.5px solid ${done?BRAND.borderGreen:"#eee"}`, transition:"border-color 0.3s", minHeight:90, fontFamily:"'DM Sans',sans-serif" }}>
        {typed.split("\n").map((line,i,arr)=><span key={i}>{line}{i<arr.length-1&&<br/>}</span>)}
        {!done&&<span style={{ display:"inline-block", width:1.5, height:12, background:"#555", marginLeft:1, verticalAlign:"middle", animation:"blink 0.8s infinite" }}/>}
      </div>
      <div style={{ fontSize:9, color:"#ccc", textAlign:"right", margin:"3px 12px 0", flexShrink:0 }}>{typed.length} / 160 characters</div>

      {/* Send button */}
      <div onClick={done?()=>onNavigate(3):undefined}
        style={{ margin:"10px 12px 0", background:done?"linear-gradient(135deg,#0B2545,#2ebd3a)":"#ddd", borderRadius:12, padding:"13px", display:"flex", alignItems:"center", justifyContent:"center", gap:7, fontSize:13, fontWeight:800, color:"white", cursor:done?"pointer":"not-allowed", transition:"all 0.3s", flexShrink:0, boxShadow:done?"0 4px 16px rgba(46,189,58,0.35)":"none" }}>
        <Send size={15} color="white"/> Send Message
      </div>
      <div style={{ fontSize:9, color:"#bbb", textAlign:"center", margin:"6px 12px 12px", flexShrink:0, lineHeight:1.4 }}>Your phone number will be visible to the owner.</div>
    </div>
  );
}

/* ─── PAGE 3: success ─── */
function Page3({ onNavigate }) {
  const [show,setShow]=useState(false);
  useEffect(()=>{ setTimeout(()=>setShow(true),120); },[]);
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flex:1, padding:"24px 16px 16px", gap:0, overflowY:"auto" }}>
      <div style={{ width:68, height:68, borderRadius:"50%", background:"linear-gradient(135deg,#0B2545,#2ebd3a)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14, transform:show?"scale(1)":"scale(0.5)", opacity:show?1:0, transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)", boxShadow:"0 8px 24px rgba(46,189,58,0.4)" }}>
        <CheckCircle size={32} color="white" fill="white"/>
      </div>
      <div style={{ fontSize:16, fontWeight:900, color:"#111", textAlign:"center", marginBottom:8, opacity:show?1:0, transition:"opacity 0.3s 0.2s", fontFamily:"Georgia,serif" }}>Message Sent!</div>
      <div style={{ fontSize:11, color:"#888", textAlign:"center", lineHeight:1.6, marginBottom:16, maxWidth:190, opacity:show?1:0, transition:"opacity 0.3s 0.3s" }}>Your message has been delivered to the vehicle owner securely via ScanForSafe.</div>
      <div onClick={()=>onNavigate(4)} style={{ background:"#f0f0f0", borderRadius:10, padding:"10px 36px", fontSize:13, fontWeight:700, color:"#333", marginBottom:14, cursor:"pointer", opacity:show?1:0, transition:"opacity 0.3s 0.35s", border:"1.5px solid #e0e0e0" }}>OK</div>
      <div style={{ width:"100%", background:BRAND.softGreen, borderRadius:12, padding:"12px 14px", display:"flex", flexDirection:"column", gap:7, opacity:show?1:0, transition:"opacity 0.3s 0.4s", border:`1px solid ${BRAND.borderGreen}` }}>
        {["Owner details remain hidden","Your number shared with owner only","Messages not stored by ScanForSafe"].map(t=>(
          <div key={t} style={{ display:"flex", alignItems:"center", gap:8, fontSize:10.5, color:BRAND.navy, fontWeight:600 }}>
            <CheckCircle size={13} color={BRAND.green} fill={BRAND.green}/> {t}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── PAGE 4: chat thread ─── */
function Page4() {
  const [shown,setShown]=useState(0);
  const scrollRef = useRef(null);
  const msgs=[
    { type:"recv", text:"You have a new message from a ScanForSafe user about your vehicle.", time:"10:30 AM" },
    { type:"recv", text:"Hi, I would like to inform you about your vehicle. It is parked in a no parking area. Please check. Thank you!", time:"10:30 AM", caller:"+91 98XXX XXXXX" },
    { type:"sent", text:"Thank you for letting me know. I will check and move it.", time:"10:35 AM · Delivered" },
    { type:"recv", text:"You're welcome! Have a great day. Stay safe! 🙏", time:"10:40 AM" },
  ];
  useEffect(()=>{
    let i=0;
    const t=setInterval(()=>{ i++; setShown(i); if(i>=msgs.length)clearInterval(t); },700);
    return ()=>clearInterval(t);
  },[]);
  useEffect(()=>{
    if(scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  },[shown]);

  return (
    <div style={{ display:"flex", flexDirection:"column", flex:1, overflow:"hidden" }}>
      {/* Chat header */}
      <div style={{ background:"linear-gradient(135deg,#0B2545,#1a3a6e)", margin:"8px 10px 0", borderRadius:12, padding:"10px 12px", display:"flex", alignItems:"center", gap:9, flexShrink:0 }}>
        <div style={{ width:32, height:32, borderRadius:"50%", background:BRAND.green, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:800, color:"white", flexShrink:0 }}>SS</div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:12, fontWeight:800, color:"white" }}>ScanForSafe</div>
          <div style={{ fontSize:9, color:"rgba(255,255,255,0.6)", display:"flex", alignItems:"center", gap:4 }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:BRAND.green }}/>
            Secure Message · Today
          </div>
        </div>
        <div style={{ width:28, height:28, borderRadius:"50%", background:"rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <Phone size={13} color="white"/>
        </div>
      </div>

      {/* Messages — scrollable */}
      <div ref={scrollRef} style={{ flex:1, padding:"10px 12px", display:"flex", flexDirection:"column", gap:7, overflowY:"auto" }}>
        {msgs.slice(0,shown).map((m,i)=>(
          <div key={i} style={{ display:"flex", justifyContent:m.type==="sent"?"flex-end":"flex-start", animation:"fadeUp 0.3s ease" }}>
            <div style={{
              maxWidth:"84%",
              background: m.type==="sent" ? "linear-gradient(135deg,#0B2545,#2ebd3a)" : "#f0f0f0",
              color: m.type==="sent" ? "white" : "#222",
              borderRadius: m.type==="sent" ? "13px 13px 3px 13px" : "13px 13px 13px 3px",
              padding:"9px 12px", fontSize:10.5, lineHeight:1.55,
              boxShadow: m.type==="sent" ? "0 3px 12px rgba(46,189,58,0.25)" : "0 1px 4px rgba(0,0,0,0.06)",
            }}>
              {m.text}
              {m.caller&&<div style={{ marginTop:4, fontSize:9, color:"#4ade80", cursor:"pointer", fontWeight:700, display:"flex", alignItems:"center", gap:4 }}><Phone size={9} color="#4ade80"/> {m.caller} · Tap to call</div>}
              <div style={{ fontSize:8, opacity:0.5, marginTop:4, textAlign:"right" }}>{m.time}</div>
            </div>
          </div>
        ))}
        {shown<msgs.length&&(
          <div style={{ display:"flex", alignItems:"center", gap:4, alignSelf:"flex-start", padding:"4px 10px" }}>
            {[0,1,2].map(d=><div key={d} style={{ width:6, height:6, borderRadius:"50%", background:"#bbb", animation:`bounce 1.2s ${d*0.2}s infinite` }}/>)}
          </div>
        )}
      </div>

      {/* Input bar */}
      <div style={{ display:"flex", gap:7, padding:"7px 12px 10px", borderTop:"1px solid #f0f0f0", alignItems:"center", flexShrink:0 }}>
        <div style={{ flex:1, background:"#f3f4f6", borderRadius:20, padding:"8px 13px", fontSize:10.5, color:"#bbb", border:"1px solid #eee" }}>Type a message…</div>
        <div style={{ width:30, height:30, borderRadius:"50%", background:"linear-gradient(135deg,#0B2545,#2ebd3a)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 2px 8px rgba(46,189,58,0.35)" }}>
          <Send size={13} color="white"/>
        </div>
      </div>
    </div>
  );
}

function IPhoneMockup() {
  const [page,setPage]     = useState(1);
  const [prevPage,setPrev] = useState(null);
  const [dir,setDir]       = useState(1);
  const autoRef            = useRef(null);
  const PAGE_DURATIONS     = [3200,5000,3000,4000];

  const goPage=(n)=>{ if(n===page)return; setDir(n>page?1:-1); setPrev(page); setPage(n); };
  useEffect(()=>{ const t=setTimeout(()=>setPrev(null),500); return ()=>clearTimeout(t); },[page]);
  useEffect(()=>{
    const schedule=()=>{ autoRef.current=setTimeout(()=>{ setPage(p=>{ const next=p<4?p+1:1; setDir(1); setPrev(p); return next; }); schedule(); },PAGE_DURATIONS[page-1]); };
    schedule(); return ()=>clearTimeout(autoRef.current);
  },[page]);

  const pageStyle=(p)=>{
    const isActive=p===page, isPrev=p===prevPage;
    let tx="100%";
    if(isActive) tx="0%"; else if(isPrev) tx=dir>0?"-100%":"100%"; else if(p<page) tx="-100%";
    return { position:"absolute", inset:0, transform:`translateX(${tx})`, opacity:isActive?1:0, transition:"transform 0.45s cubic-bezier(.77,0,.18,1), opacity 0.35s ease", pointerEvents:isActive?"auto":"none", display:"flex", flexDirection:"column", background:"white", overflow:"hidden" };
  };
  const meta=PAGE_META[page-1];

  return (
    <div style={{ position:"relative", width:290, height:590, flexShrink:0 }}>
      {/* Phone shell */}
      <div style={{ position:"absolute", inset:0, borderRadius:46, background:"linear-gradient(160deg,#5a5a5a 0%,#3a3a3a 30%,#2a2a2a 60%,#1e1e1e 100%)", boxShadow:"inset 0 0 0 1px #666, inset 2px 4px 0 0 #555, inset -1px -2px 0 0 #111, 0 30px 80px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.35)" }}>
        <div style={{ position:"absolute", inset:0, borderRadius:46, background:"linear-gradient(135deg,rgba(255,255,255,0.18) 0%,transparent 40%)", pointerEvents:"none" }}/>
        {/* Buttons */}
        {[{l:true,t:120,h:34},{l:true,t:165,h:34},{l:true,t:88,h:22}].map((b,i)=>(
          <div key={i} style={{ position:"absolute", [b.l?"left":"right"]:-3, top:b.t, width:3, height:b.h, background:"linear-gradient(180deg,#555,#3a3a3a)", borderRadius:b.l?"2px 0 0 2px":"0 2px 2px 0" }}/>
        ))}
        <div style={{ position:"absolute", right:-3, top:140, width:3, height:70, background:"linear-gradient(180deg,#555,#3a3a3a)", borderRadius:"0 2px 2px 0" }}/>

        {/* Screen */}
        <div style={{ position:"absolute", inset:6, borderRadius:41, background:"#0a0a0a", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:3, borderRadius:38, background:"white", overflow:"hidden", display:"flex", flexDirection:"column" }}>

            {/* Notch */}
            <div style={{ position:"absolute", top:8, left:"50%", transform:"translateX(-50%)", width:90, height:26, background:"#0a0a0a", borderRadius:18, zIndex:30 }}/>

            {/* Status bar */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 18px 0", fontSize:10, fontWeight:700, color:"#111", flexShrink:0, zIndex:10 }}>
              <span>9:41</span><StatusIcons/>
            </div>

            {/* App header */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"7px 14px 6px", borderBottom:"1.5px solid #f0f0f0", flexShrink:0, zIndex:10 }}>
              <div onClick={()=>page>1&&goPage(page-1)} style={{ cursor:page>1?"pointer":"default", opacity:page>1?1:0.25, width:28, height:28, borderRadius:8, background:page>1?"#f0f0f0":"transparent", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <ChevronLeft size={17} color="#333" strokeWidth={2.5}/>
              </div>
              <div style={{ textAlign:"center" }}>
                <div style={{ fontSize:13, fontWeight:900, color:"#111", letterSpacing:"-0.3px" }}>{meta.title}</div>
                <div style={{ fontSize:9, color:"#999", marginTop:1, display:"flex", alignItems:"center", justifyContent:"center", gap:3 }}>
                  <QrCode size={8} color="#999"/> {meta.sub}
                </div>
              </div>
              <div style={{ width:28 }}/>
            </div>

            {/* Progress bar */}
            <div style={{ height:3, background:"#f0f0f0", margin:"0 12px", flexShrink:0, borderRadius:2 }}>
              <div style={{ height:"100%", background:"linear-gradient(90deg,#0B2545,#2ebd3a)", borderRadius:2, width:meta.prog, transition:"width 0.5s ease" }}/>
            </div>

            {/* Pages */}
            <div style={{ position:"relative", flex:1, overflow:"hidden" }}>
              <div style={pageStyle(1)}><Page1 onNavigate={goPage}/></div>
              <div style={pageStyle(2)}><Page2 onNavigate={goPage}/></div>
              <div style={pageStyle(3)}><Page3 onNavigate={goPage}/></div>
              <div style={pageStyle(4)}><Page4/></div>
            </div>
          </div>
        </div>
      </div>

      {/* Page dots */}
      <div style={{ position:"absolute", bottom:-26, left:"50%", transform:"translateX(-50%)", display:"flex", gap:6 }}>
        {[1,2,3,4].map(p=>(
          <div key={p} onClick={()=>goPage(p)} style={{ width:p===page?18:6, height:6, borderRadius:3, background:p===page?BRAND.green:"#ccc", cursor:"pointer", transition:"all 0.3s ease" }}/>
        ))}
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
      `}</style>
    </div>
  );
}

/* ─── STEP CARD ─── */
const STEP_THEMES = [
  { accent:"#1a56db", accentLight:"#eff6ff", accentBorder:"#bfdbfe", iconBg:"linear-gradient(135deg,#1e40af 0%,#3b82f6 100%)", numberBg:"linear-gradient(135deg,#0B2545 0%,#1a56db 100%)", badgeBg:"#eff6ff", badgeColor:"#1e40af", shadowColor:"rgba(26,86,219,0.18)", pill:"Step 1", highlight:"3–5 Days", bullets:["Weatherproof & durable","Multiple size options","QR + NFC enabled"] },
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

/* ─── COLORFUL STATS BAR ─── */
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
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#f8fafc 0%,#fafcfa 50%,#f8fafc 100%)", fontFamily:"'DM Sans','Segoe UI',system-ui,sans-serif", overflow:"hidden" }}>
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, backgroundImage:"radial-gradient(circle,#7ded88 1px,transparent 1px)", backgroundSize:"28px 28px", opacity:0.35 }}/>

      <div style={{ position:"relative", zIndex:1, maxWidth:1200, margin:"0 auto", padding:"52px 28px 48px" }}>

        {/* Pill */}
        <div style={{ display:"flex", justifyContent:"center", marginBottom:22, opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(-12px)", transition:"all 0.5s ease" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:"white", borderRadius:40, padding:"7px 18px", fontSize:11, fontWeight:700, color:BRAND.green, letterSpacing:"0.08em", textTransform:"uppercase", boxShadow:"0 2px 10px rgba(0,0,0,0.08)", border:`1px solid ${BRAND.borderGreen}` }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:BRAND.green, boxShadow:"0 0 0 3px rgba(22,101,52,0.2)" }}/>
            Simple Process
          </div>
        </div>

        {/* Two-column */}
        <div style={{ display:"flex", alignItems:"flex-start", gap:48, flexWrap:"wrap" }}>

          {/* LEFT */}
          <div style={{ flex:"1 1 520px", opacity:visible?1:0, transform:visible?"translateX(0)":"translateX(-24px)", transition:"all 0.6s ease 0.1s" }}>
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

          {/* RIGHT: iPhone */}
          <div style={{ flex:"0 0 auto", display:"flex", justifyContent:"center", paddingTop:20, opacity:visible?1:0, transform:visible?"translateX(0)":"translateX(24px)", transition:"all 0.6s ease 0.15s" }}>
            <IPhoneMockup/>
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
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
      `}</style>
    </div>
  );
}