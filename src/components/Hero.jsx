import { useEffect, useState } from "react";

import carImg    from "../../assets/car.png";
import luggageImg from "../../assets/luggage1.png";
import dogimg    from "../../assets/dog.png";
import seniorimg from "../../assets/senior.png";
import kidImg    from "../../assets/kid.png";
import qrImg     from "../../assets/qr.png";


const ASSETS = [
  {
    label: "Vehicle",
    verified: "Car Verified",
    owner: "Rahul Verma",
    phone: "+91 98765 XXXXX",
    email: "r***@mail.com",
    address: "Green Park, New Delhi",
    asset: "SFS-CAR-4587",
    emergency: "Protected",
    registered: "12 May 2024",
    img: carImg,
    qrImg: qrImg,
    tagline: "QR tag on windshield",
    accentColor: "#2ebd3a",
    type: "Vehicle",
  },
  {
    label: "Bike",
    verified: "Bike Verified",
    owner: "Aarav Sharma",
    phone: "+91 98345 XXXXX",
    email: "a***@mail.com",
    address: "Andheri West, Mumbai",
    asset: "SFS-BIKE-7712",
    emergency: "Protected",
    registered: "15 May 2024",
    img: carImg,
    qrImg: qrImg,
    tagline: "NFC chip embedded",
    accentColor: "#4bd557",
    type: "Bike",
  },
  {
    label: "Luggage",
    verified: "Luggage Verified",
    owner: "Priya Kapoor",
    phone: "+91 93456 XXXXX",
    email: "p***@mail.com",
    address: "Koramangala, Bangalore",
    asset: "SFS-LUG-1123",
    emergency: "Protected",
    registered: "28 Mar 2024",
    img: luggageImg,
    qrImg: qrImg,
    tagline: "Tag inside handle",
    accentColor: "#7ded88",
    type: "Luggage",
  },
  {
    label: "Pet",
    verified: "Pet Verified",
    owner: "Meera Nair",
    phone: "+91 94567 XXXXX",
    email: "m***@mail.com",
    address: "Indiranagar, Bangalore",
    asset: "SFS-DOG-2291",
    emergency: "Protected",
    registered: "02 Apr 2024",
    img: dogimg,
    qrImg: qrImg,
    tagline: "Collar tag protected",
    accentColor: "#2ebd3a",
    type: "Pet",
  },
  {
    label: "Senior",
    verified: "Senior Verified",
    owner: "Suresh Kumar",
    phone: "+91 96789 XXXXX",
    email: "s***@mail.com",
    address: "Velachery, Chennai",
    asset: "SFS-SEN-0084",
    emergency: "Protected",
    registered: "18 Jun 2024",
    img: seniorimg,
    qrImg: qrImg,
    tagline: "Wearable ID band",
    accentColor: "#4bd557",
    type: "Senior",
  },
];

/* ─── CSS ─── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

.sfs-hero, .sfs-hero *, .sfs-hero *::before, .sfs-hero *::after {
  margin: 0; padding: 0; box-sizing: border-box;
}

:root {
  --green: #2ebd3a;
  --green2: #4bd557;
  --green3: #7ded88;
  --dark: #06160A;
  --mid: #4b6357;
  --bg: #f4f8f4;
  --card-bg: rgba(255,255,255,0.92);
  --glass: rgba(255,255,255,0.68);
  --navbar-height: 106px;
  --navbar-height-mobile: 98px;
}

/* ── Page wrapper: only clears the fixed navbar, zero extra gap ── */
.sfs-page {
  padding-top: var(--navbar-height);
}
@media (max-width: 1060px) {
  .sfs-page { padding-top: var(--navbar-height-mobile); }
}

/* ══════════════════════════════════════
   HERO CARD  — tight, no dead air
══════════════════════════════════════ */
.sfs-hero {
  font-family: 'DM Sans', sans-serif;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--dark);
  border: 1.5px solid rgba(46,189,58,0.22);
  border-radius: 32px;
  /* No margin-top — sfs-page padding handles the gap */
  box-shadow:
    0 0 0 1px rgba(46,189,58,0.08),
    0 8px 64px rgba(46,189,58,0.12),
    inset 0 1px 0 rgba(255,255,255,0.9);
}

.sfs-bg {
  position: absolute; inset: 0;
  pointer-events: none; z-index: 0;
  border-radius: 30px; overflow: hidden;
}
.sfs-bg::before {
  content: "";
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 900px 600px at 110% 0%, rgba(46,189,58,0.13) 0%, transparent 58%),
    radial-gradient(ellipse 600px 500px at -10% 100%, rgba(46,189,58,0.09) 0%, transparent 55%),
    linear-gradient(160deg, #f5f9f5 0%, #f5f9f5 40%, #f0fdf2 100%);
}

/* ── Grid: tighter vertical padding, columns stretch to match ── */
.sfs-grid {
  flex: 1;
  max-width: 1440px; width: 100%; margin: 0 auto;
  display: grid;
  grid-template-columns: 46% 54%;
  align-items: stretch;          /* both cols same height */
  padding: 40px 56px 40px;       /* was 72px top/bottom — reduced */
  gap: 0;
  position: relative; z-index: 2;
}

/* ══ LEFT col ══ */
.sfs-left {
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sfs-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(46,189,58,0.26);
  border-radius: 12px; padding: 8px 14px 8px 10px;
  margin-bottom: 18px;
  font-size: 10px; font-weight: 700; letter-spacing: .08em; color: #1a4a1e;
  text-transform: uppercase;
  box-shadow: 0 2px 16px rgba(46,189,58,0.12), 0 1px 0 rgba(255,255,255,0.9) inset;
  animation: fadeUp .6s .10s cubic-bezier(.22,1,.36,1) both;
  width: fit-content;
}
.sfs-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--green); animation: livePulse 2s ease-out infinite; flex-shrink: 0;
}
.sfs-badge-sep { width: 1px; height: 14px; background: rgba(46,189,58,0.30); }
.sfs-badge-count { font-size: 9.5px; font-weight: 800; color: var(--green); letter-spacing: .04em; }

@keyframes livePulse {
  0%   { box-shadow: 0 0 0 0 rgba(46,189,58,.7); }
  70%  { box-shadow: 0 0 0 8px rgba(46,189,58,0); }
  100% { box-shadow: 0 0 0 0 rgba(46,189,58,0); }
}

.sfs-h1 {
  font-family: 'Sora', sans-serif;
  font-size: 62px; line-height: .91; letter-spacing: -3.5px; font-weight: 900;
  color: var(--dark); margin-bottom: 18px;
  animation: slideInLeft .8s .04s cubic-bezier(.22,1,.36,1) both;
}
.sfs-h1 .green {
  background: linear-gradient(125deg, #0a2e10 0%, #2ebd3a 52%, #4bd557 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.sfs-sub {
  font-size: 14.5px; line-height: 1.75; color: var(--mid);
  max-width: 460px; margin-bottom: 24px; font-weight: 400;
  animation: slideInLeft .85s .14s cubic-bezier(.22,1,.36,1) both;
}

.sfs-feats { display: flex; gap: 9px; margin-bottom: 24px; }
.sfs-feat {
  flex: 1; background: var(--card-bg);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(46,189,58,0.14); border-radius: 18px; padding: 16px 12px 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.7) inset;
  position: relative; overflow: hidden; transition: .32s cubic-bezier(.34,1.46,.64,1); cursor: default;
}
.sfs-feat::before {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(46,189,58,0.6), transparent);
  transform: scaleX(0); transform-origin: center; transition: .32s ease;
}
.sfs-feat:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 18px 40px rgba(46,189,58,0.14), 0 0 0 1px rgba(46,189,58,0.22); }
.sfs-feat:hover::before { transform: scaleX(1); }
.sfs-feat-ico {
  width: 42px; height: 42px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 10px;
  transition: .32s cubic-bezier(.34,1.46,.64,1);
  box-shadow: 0 4px 12px rgba(46,189,58,0.15); border: 1px solid rgba(46,189,58,0.16); flex-shrink: 0;
}
.sfs-feat:hover .sfs-feat-ico { transform: scale(1.12) rotate(-5deg); }
.sfs-feat h4 { font-size: 12.5px; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
.sfs-feat p  { font-size: 10.5px; line-height: 1.5; color: #6a8070; }
.sfs-feat:nth-child(1) { animation: fadeUp .55s .25s both; }
.sfs-feat:nth-child(2) { animation: fadeUp .55s .36s both; }
.sfs-feat:nth-child(3) { animation: fadeUp .55s .47s both; }

.sfs-hero-actions {
  display: flex; align-items: center; gap: 12px;
  animation: fadeUp .55s .56s both;
}
.sfs-btn-main {
  border: none;
  background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 50%, #0B2545 100%);
  color: white; padding: 15px 30px; border-radius: 14px;
  font-size: 14px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 8px;
  box-shadow: 0 12px 32px rgba(46,189,58,0.34), 0 2px 6px rgba(46,189,58,0.18);
  transition: .32s cubic-bezier(.34,1.46,.64,1); position: relative; overflow: hidden;
}
.sfs-btn-main::before {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%); pointer-events: none;
}
.sfs-btn-main:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 18px 44px rgba(46,189,58,0.42); }
.sfs-btn-sec {
  border: 1px solid rgba(46,189,58,0.28); background: var(--glass);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  padding: 14px 24px; border-radius: 14px;
  font-size: 13px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  display: flex; align-items: center; gap: 9px;
  cursor: pointer; color: var(--dark); transition: .26s ease;
  box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset;
}
.sfs-btn-sec:hover { transform: translateY(-3px); border-color: rgba(46,189,58,0.52); }
.sfs-play-ring {
  width: 28px; height: 28px; border-radius: 50%;
  background: linear-gradient(135deg, #2ebd3a, #1fa82a);
  display: flex; align-items: center; justify-content: center; font-size: 8px; color: white;
  box-shadow: 0 3px 10px rgba(46,189,58,0.30); transition: .26s; border: 1px solid rgba(255,255,255,0.28);
}
.sfs-btn-sec:hover .sfs-play-ring { transform: scale(1.1) rotate(8deg); }

/* ══ RIGHT col ══ */
.sfs-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* No fixed min-height — grows with content naturally */
  padding: 24px 0 24px 16px;
}

.sfs-stage {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ══════════════════════════════════════
   IMAGE FRAME  — large, fills the column
══════════════════════════════════════ */
.sfs-img-frame {
  position: relative;
  z-index: 3;
  width: 100%;               /* fills the right column */
  max-width: 560px;
  border-radius: 28px;
  padding: 5px;
  background: linear-gradient(145deg,
    rgba(46,189,58,0.60) 0%,
    rgba(125,237,136,0.35) 35%,
    rgba(46,189,58,0.20) 65%,
    rgba(11,37,69,0.55) 100%);
  box-shadow:
    0 0 0 1px rgba(46,189,58,0.18),
    0 0 40px rgba(46,189,58,0.32),
    0 0 90px rgba(46,189,58,0.16),
    0 28px 70px rgba(0,0,0,0.26),
    inset 0 1px 0 rgba(255,255,255,0.35);
  animation: frameFloat 5s ease-in-out infinite;
  transition: box-shadow .4s ease;
}
.sfs-img-frame:hover {
  box-shadow:
    0 0 0 1px rgba(46,189,58,0.35),
    0 0 56px rgba(46,189,58,0.48),
    0 0 110px rgba(46,189,58,0.22),
    0 34px 80px rgba(0,0,0,0.30),
    inset 0 1px 0 rgba(255,255,255,0.45);
}
@keyframes frameFloat {
  0%,100% { transform: translateY(0) rotateY(-2deg) rotateX(0.5deg); }
  50%      { transform: translateY(-10px) rotateY(-0.5deg) rotateX(0deg); }
}

/* ══ HOW-IT-WORKS STYLE iPHONE MOCKUP ══ */
.sfs-hiw-phone-wrap {
  position: absolute;
  width: 280px;
  flex-shrink: 0;
  z-index: 5;
  animation: phoneRock 9s ease-in-out infinite;
  scale: 0.78;
}
@keyframes phoneRock {
  0%,100% { transform: perspective(1100px) rotateY(-8deg) rotateX(3deg) translateY(0); }
  33%      { transform: perspective(1100px) rotateY(-6deg) rotateX(2deg) translateY(-7px); }
  66%      { transform: perspective(1100px) rotateY(-9deg) rotateX(4.5deg) translateY(-4px); }
}

.sfs-hiw-frame {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(160deg, #0c1e0f 0%, #091508 100%);
  box-shadow:
    inset 0 0 0 1px rgba(46,189,58,0.28),
    inset 0 0 30px rgba(46,189,58,0.10);
}

/* Other 2 corner ticks (top-right, bottom-left) */
.sfs-img-frame-inner::before {
  content: "";
  position: absolute;
  top: 8px; right: 8px;
  width: 20px; height: 20px;
  border-color: rgba(75,213,87,0.75);
  border-style: solid;
  border-width: 2.5px 2.5px 0 0;
  border-radius: 0 6px 0 0;
  z-index: 8; pointer-events: none;
}
.sfs-img-frame-inner::after {
  content: "";
  position: absolute;
  bottom: 8px; left: 8px;
  width: 20px; height: 20px;
  border-color: rgba(75,213,87,0.75);
  border-style: solid;
  border-width: 0 0 2.5px 2.5px;
  border-radius: 0 0 6px 0;
  z-index: 8; pointer-events: none;
}

/* Scan beam inside frame */
.sfs-frame-scanline {
  position: absolute;
  inset: 0; z-index: 6; pointer-events: none; border-radius: 24px; overflow: hidden;
}
.sfs-frame-scanline::after {
  content: "";
  position: absolute;
  left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(46,189,58,0.4) 20%,
    rgba(125,237,136,0.98) 50%,
    rgba(46,189,58,0.4) 80%,
    transparent 100%);
  box-shadow: 0 0 14px rgba(46,189,58,0.8), 0 0 36px rgba(46,189,58,0.35);
  animation: inFrameScan 2.6s ease-in-out infinite;
}
@keyframes inFrameScan {
  0%   { top: 12%; opacity: 0; }
  8%   { opacity: 1; }
  92%  { opacity: 1; }
  100% { top: 88%; opacity: 0; }
}

/* Status bar at bottom of frame */
.sfs-frame-status {
  position: absolute;
  bottom: 0; left: 0; right: 0; z-index: 7;
  background: linear-gradient(180deg, transparent 0%, rgba(6,22,10,0.92) 100%);
  padding: 36px 16px 14px;
  display: flex; align-items: center; justify-content: space-between;
  border-radius: 0 0 24px 24px;
}
.sfs-frame-status-left { display: flex; align-items: center; gap: 7px; }
.sfs-frame-status-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #2ebd3a; animation: livePulse 1.8s infinite; flex-shrink: 0;
}
.sfs-frame-status-txt { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.92); letter-spacing: .06em; }
.sfs-frame-status-id  { font-size: 10px; font-weight: 600; color: rgba(125,237,136,0.85); letter-spacing: .05em; }

/* The asset image — fills the frame width */
.sfs-asset-img {
  width: 100%;
  max-width: none;
  display: block;
  object-fit: cover;
  position: relative;
  z-index: 4;
  aspect-ratio: 4/3;
}
.sfs-asset-entering { animation: assetEnter .65s cubic-bezier(.22,1,.36,1) both; }
.sfs-asset-exiting  { animation: assetExit .25s ease forwards; }
.sfs-asset-idle     { animation: none; }
@keyframes assetEnter {
  from { opacity:0; transform:scale(.82) translateY(24px); filter:blur(6px); }
  to   { opacity:1; transform:none; filter:none; }
}
@keyframes assetExit {
  from { opacity:1; transform:none; }
  to   { opacity:0; transform:scale(.90) translateY(-18px); filter:blur(3px); }
}

/* Ambient glow rings behind the frame */
.sfs-glow {
  position: absolute; width: 500px; height: 500px; border-radius: 50%;
  background: radial-gradient(circle, rgba(46,189,58,0.14) 0%, rgba(46,189,58,0.05) 40%, transparent 70%);
  filter: blur(12px); animation: glowPulse 4.5s ease-in-out infinite; z-index: 1; pointer-events: none;
}
@keyframes glowPulse { 0%,100%{transform:scale(.88);opacity:.5;}50%{transform:scale(1.07);opacity:.95;} }
.sfs-ring {
  position: absolute; border-radius: 50%; border: 1px solid rgba(46,189,58,0.07);
  pointer-events: none; z-index: 1;
}
.sfs-ring-1 { width:560px; height:560px; animation:ringPulse 4s ease-in-out infinite; }
.sfs-ring-2 { width:720px; height:720px; animation:ringPulse 4s ease-in-out infinite .9s; }
@keyframes ringPulse { 0%,100%{opacity:.30;transform:scale(.97);}50%{opacity:.70;transform:scale(1.03);} }

/* ══ QR float card ══ */
.sfs-qr-float {
  position: absolute; right: -14px; top: 60px;
  background: var(--card-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 18px; padding: 12px 14px;
  box-shadow: 0 16px 52px rgba(0,0,0,0.10), 0 0 0 1px rgba(255,255,255,0.85) inset;
  border: 1px solid rgba(46,189,58,0.16); z-index: 12;
  display: flex; align-items: center; gap: 10px;
  animation: qrFloat 5.5s ease-in-out infinite .8s;
  transform: perspective(600px) rotateY(-6deg);
}
@keyframes qrFloat {
  0%,100%{transform:perspective(600px) rotateY(-6deg) translateY(0);}
  50%{transform:perspective(600px) rotateY(-9deg) translateY(-10px);}
}
.sfs-qr-float-inner { background:white;border-radius:8px;padding:5px;border:1px solid #e0e0e0;flex-shrink:0; }
.sfs-qr-float-title { font-size:11.5px;font-weight:800;color:var(--dark);margin-bottom:2px; }
.sfs-qr-float-sub   { font-size:8.5px;color:#5a7060;line-height:1.4; }
.sfs-qr-live { display:flex;align-items:center;gap:4px;margin-top:4px;font-size:8px;font-weight:700;color:#2ebd3a;letter-spacing:.04em; }
.sfs-qr-live-dot { width:5px;height:5px;border-radius:50%;background:#2ebd3a;animation:livePulse 1.8s infinite; }

/* ══ ALERT float ══ */
.sfs-alert-float {
  position: absolute; right: 6px; bottom: 70px;
  background: var(--card-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 14px; padding: 9px 13px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.82) inset;
  border: 1px solid rgba(46,189,58,0.14); z-index: 12;
  display: flex; align-items: center; gap: 9px;
  animation: alertFloat 6s ease-in-out infinite 1.2s;
}
@keyframes alertFloat { 0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);} }
.sfs-alert-ico {
  width: 32px; height: 32px; border-radius: 10px;
  background: linear-gradient(135deg, #e8f8eb, #d4f5d8);
  display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0;
  border: 1px solid rgba(46,189,58,0.18);
}
.sfs-alert-h { font-size:10.5px;font-weight:700;color:var(--dark); }
.sfs-alert-p { font-size:8.5px;color:var(--mid);margin-top:1px; }

/* ══ ASSET LABEL pill ══ */
.sfs-asset-label {
  position: absolute; top: 12px; left: -8px;
  background: var(--card-bg); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border-radius: 11px; padding: 7px 11px; border: 1px solid rgba(46,189,58,0.14); z-index: 12;
  display: flex; align-items: center; gap: 7px;
  animation: pillFloat 6s ease-in-out infinite .4s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
}
@keyframes pillFloat { 0%,100%{transform:translateY(0);}50%{transform:translateY(-7px);} }
.sfs-alabel-dot { width:6px;height:6px;border-radius:50%;background:#2ebd3a;animation:livePulse 1.9s infinite;flex-shrink:0; }
.sfs-alabel-text { font-size:11px;font-weight:700;color:var(--dark); }
.sfs-alabel-sub  { font-size:9px;color:var(--mid); }

/* ══ SHIELD ══ */
.sfs-shield-badge {
  position:absolute; top:14px; right:8px; width:82px; height:82px; z-index:12;
  animation:shieldFloat 5s ease-in-out infinite;
  filter:drop-shadow(0 12px 28px rgba(46,189,58,0.32));
}
@keyframes shieldFloat { 0%,100%{transform:translateY(0) rotate(2deg);}50%{transform:translateY(-13px) rotate(-1deg);} }

/* ══ NAV DOTS ══ */
.sfs-asset-nav {
  position:absolute; bottom:10px; left:50%; transform:translateX(-50%);
  display:flex; align-items:center; gap:7px; z-index:12;
}
.sfs-nav-dot {
  width:7px; height:7px; border-radius:50%; background:rgba(46,189,58,0.25); cursor:pointer;
  transition:.3s cubic-bezier(.34,1.46,.64,1); border:1px solid rgba(46,189,58,0.20);
}
.sfs-td { width:3px; height:3px; border-radius:50%; background:rgba(255,255,255,0.28); flex-shrink: 0; }

/* ══ BG DECORATION ══ */
.sfs-mesh {
  position:absolute; top:-60px; right:-60px; width:520px; height:520px; opacity:.28;
  animation:meshRotate 40s linear infinite; pointer-events:none; z-index:0;
}
@keyframes meshRotate{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
.sfs-globe-wrap {
  position:absolute; bottom:-80px; left:-70px; width:300px; height:300px;
  animation:globePulse 7s ease-in-out infinite; z-index:1; pointer-events:none;
}
@keyframes globePulse{0%,100%{transform:scale(1) rotate(-5deg);opacity:.45;}50%{transform:scale(1.04) rotate(-2deg);opacity:.62;}}
.sfs-particle { position:absolute; border-radius:50%; background:rgba(46,189,58,0.28); pointer-events:none; }

/* ══ KEYFRAMES ══ */
@keyframes slideInLeft{from{opacity:0;transform:translateX(-32px);}to{opacity:1;transform:none;}}
@keyframes fadeUp{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:none;}}

/* ══ RESPONSIVE ══ */
@media(max-width:1200px){
  .sfs-hero{border-radius:22px;}
  .sfs-grid{grid-template-columns:1fr;padding:36px 32px 32px;gap:28px;}
  .sfs-h1{font-size:48px;letter-spacing:-2.2px;}
  .sfs-right{padding:0;}
  .sfs-img-frame{max-width:480px;}
}
@media(max-width:640px){
  .sfs-hero{border-radius:18px;border-width:1px;}
  .sfs-grid{grid-template-columns:1fr;padding:24px 16px 20px;gap:20px;}
  .sfs-h1{font-size:34px;letter-spacing:-1.6px;}
  .sfs-sub{font-size:13px;margin-bottom:16px;}
  .sfs-feats{flex-direction:column;gap:8px;margin-bottom:18px;}
  .sfs-feat{flex-direction:row;align-items:center;gap:12px;padding:12px;border-radius:14px;}
  .sfs-feat-ico{margin-bottom:0;flex-shrink:0;}
  .sfs-hero-actions{flex-direction:column;gap:9px;align-items:stretch;}
  .sfs-btn-main,.sfs-btn-sec{justify-content:center;border-radius:12px;}
  .sfs-right{padding:0;}
  .sfs-img-frame{max-width:100%;}
  .sfs-shield-badge{width:60px;height:60px;top:8px;right:4px;}
  .sfs-ring-1{width:380px;height:380px;}
  .sfs-ring-2{display:none;}
  .sfs-qr-float{right:-2px;top:50px;}
  .sfs-left{padding-right:0;}
  .sfs-asset-label{left:-4px;}
}
@media(max-width:380px){
  .sfs-h1{font-size:28px;letter-spacing:-1.1px;}
  .sfs-grid{padding:16px 12px 14px;}
}
`;

/* ─── QR SVG ─── */
function QRCodeSVG({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 21 21" fill="none">
      <rect x="0" y="0" width="7" height="7" rx="1" fill="#0B2545"/>
      <rect x="1" y="1" width="5" height="5" rx="0.5" fill="white"/>
      <rect x="2" y="2" width="3" height="3" fill="#0B2545"/>
      <rect x="14" y="0" width="7" height="7" rx="1" fill="#0B2545"/>
      <rect x="15" y="1" width="5" height="5" rx="0.5" fill="white"/>
      <rect x="16" y="2" width="3" height="3" fill="#0B2545"/>
      <rect x="0" y="14" width="7" height="7" rx="1" fill="#0B2545"/>
      <rect x="1" y="15" width="5" height="5" rx="0.5" fill="white"/>
      <rect x="2" y="16" width="3" height="3" fill="#0B2545"/>
      <rect x="8" y="0" width="1" height="1" fill="#0B2545"/><rect x="10" y="0" width="1" height="1" fill="#0B2545"/>
      <rect x="12" y="0" width="1" height="1" fill="#0B2545"/><rect x="8" y="2" width="2" height="1" fill="#0B2545"/>
      <rect x="11" y="2" width="1" height="1" fill="#0B2545"/><rect x="9" y="4" width="1" height="1" fill="#0B2545"/>
      <rect x="11" y="4" width="2" height="1" fill="#0B2545"/><rect x="8" y="6" width="1" height="1" fill="#0B2545"/>
      <rect x="10" y="6" width="2" height="1" fill="#0B2545"/><rect x="0" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="3" y="8" width="1" height="1" fill="#0B2545"/><rect x="5" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="8" width="1" height="2" fill="#0B2545"/><rect x="10" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="13" y="8" width="1" height="1" fill="#0B2545"/><rect x="15" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="18" y="8" width="1" height="2" fill="#0B2545"/><rect x="0" y="10" width="1" height="1" fill="#0B2545"/>
      <rect x="2" y="10" width="2" height="1" fill="#0B2545"/><rect x="5" y="10" width="1" height="1" fill="#0B2545"/>
      <rect x="9" y="10" width="1" height="1" fill="#0B2545"/><rect x="11" y="10" width="3" height="1" fill="#0B2545"/>
      <rect x="15" y="10" width="1" height="1" fill="#0B2545"/><rect x="17" y="10" width="2" height="1" fill="#0B2545"/>
      <rect x="0" y="12" width="3" height="1" fill="#0B2545"/><rect x="4" y="12" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="12" width="2" height="1" fill="#0B2545"/><rect x="11" y="12" width="1" height="1" fill="#0B2545"/>
      <rect x="13" y="12" width="2" height="1" fill="#0B2545"/><rect x="16" y="12" width="1" height="1" fill="#0B2545"/>
      <rect x="18" y="12" width="1" height="1" fill="#0B2545"/><rect x="8" y="14" width="1" height="1" fill="#0B2545"/>
      <rect x="10" y="14" width="2" height="1" fill="#0B2545"/><rect x="13" y="14" width="1" height="2" fill="#0B2545"/>
      <rect x="15" y="14" width="1" height="1" fill="#0B2545"/><rect x="17" y="14" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="16" width="2" height="1" fill="#0B2545"/><rect x="11" y="16" width="1" height="2" fill="#0B2545"/>
      <rect x="14" y="16" width="1" height="1" fill="#0B2545"/><rect x="16" y="16" width="1" height="2" fill="#0B2545"/>
      <rect x="18" y="16" width="2" height="1" fill="#0B2545"/><rect x="8" y="18" width="1" height="2" fill="#0B2545"/>
      <rect x="10" y="18" width="1" height="2" fill="#0B2545"/><rect x="14" y="18" width="1" height="2" fill="#0B2545"/>
      <rect x="19" y="18" width="1" height="2" fill="#0B2545"/>
    </svg>
  );
}

/* ─── PARTICLES ─── */
const PDATA = Array.from({ length: 18 }, (_, i) => ({
  id: i, x:`${(i*37+11)%100}%`, y:`${(i*53+7)%100}%`,
  size:`${(i%3)+2}px`, delay:`${(i*.7)%6}s`, dur:`${8+(i%5)}s`, op:0.09+(i%4)*.07,
}));
function Particles() {
  return (
    <>
      {PDATA.map(p=>(
        <div key={p.id} className="sfs-particle" style={{left:p.x,top:p.y,width:p.size,height:p.size,opacity:p.op,animation:`pd ${p.dur} ease-in-out infinite ${p.delay}`}}/>
      ))}
      <style>{`@keyframes pd{0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(8px,-11px) scale(1.3);}66%{transform:translate(-6px,7px) scale(0.7);}}`}</style>
    </>
  );
}

function MeshLines() {
  const lines=[];
  for(let i=0;i<=12;i++){
    lines.push(
      <line key={`h${i}`} x1="0" y1={i*50} x2="600" y2={i*50} stroke="rgba(46,189,58,.07)" strokeWidth=".8"/>,
      <line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="600" stroke="rgba(46,189,58,.07)" strokeWidth=".8"/>
    );
  }
  return <svg className="sfs-mesh" viewBox="0 0 600 600">{lines}</svg>;
}

function Globe() {
  return (
    <div className="sfs-globe-wrap">
      <svg viewBox="0 0 300 300">
        <defs><radialGradient id="gg5" cx="38%" cy="32%">
          <stop offset="0%" stopColor="rgba(125,237,136,.28)"/>
          <stop offset="55%" stopColor="rgba(46,189,58,.10)"/>
          <stop offset="100%" stopColor="rgba(46,189,58,.02)"/>
        </radialGradient></defs>
        <circle cx="150" cy="150" r="136" fill="url(#gg5)" stroke="rgba(46,189,58,.14)" strokeWidth="1"/>
        {[-90,-54,-18,18,54,90].map((lat,i)=>{
          const y=150+lat, hw=Math.sqrt(Math.max(0,136*136-lat*lat));
          return <ellipse key={i} cx="150" cy={y} rx={hw} ry={hw*.26} fill="none" stroke="rgba(46,189,58,.09)" strokeWidth=".7"/>;
        })}
        {[0,30,60,90,120,150].map((deg,i)=>(
          <ellipse key={i} cx="150" cy="150" rx="40" ry="136" fill="none" stroke="rgba(46,189,58,.07)" strokeWidth=".7" transform={`rotate(${deg} 150 150)`}/>
        ))}
        <ellipse cx="150" cy="150" rx="172" ry="44" fill="none" stroke="rgba(46,189,58,.18)" strokeWidth="1.2" strokeDasharray="7 6"
          style={{animation:"os5 14s linear infinite",transformOrigin:"150px 150px"}}/>
        <circle cx="322" cy="150" r="7" fill="rgba(46,189,58,.50)"
          style={{animation:"os5 14s linear infinite",transformOrigin:"150px 150px"}}/>
        <style>{`@keyframes os5{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}`}</style>
      </svg>
    </div>
  );
}

function ShieldBadge() {
  return (
    <svg className="sfs-shield-badge" viewBox="0 0 110 110">
      <defs>
        <radialGradient id="sg5" cx="40%" cy="30%">
          <stop offset="0%" stopColor="rgba(125,237,136,.99)"/>
          <stop offset="60%" stopColor="rgba(46,189,58,.87)"/>
          <stop offset="100%" stopColor="rgba(30,150,36,.77)"/>
        </radialGradient>
        <filter id="sb3"><feGaussianBlur in="SourceGraphic" stdDeviation="2.5"/></filter>
      </defs>
      <path d="M55 12 L87 25 L87 52 C87 70 72 84 55 92 C38 84 23 70 23 52 L23 25 Z" fill="rgba(46,189,58,0.22)" filter="url(#sb3)"/>
      <path d="M55 10 L88 24 L88 52 C88 70 73 84 55 92 C37 84 22 70 22 52 L22 24 Z" fill="url(#sg5)" stroke="rgba(255,255,255,.40)" strokeWidth="1.5"/>
      <path d="M55 16 L82 28 L82 52 C82 67 69 79 55 86 C41 79 28 67 28 52 L28 28 Z" fill="none" stroke="rgba(255,255,255,.20)" strokeWidth="1"/>
      <polyline points="38,55 50,67 72,43" fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─── FEATURE SVGs ─── */
function SVGSecureQR() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#0B2545" stroke="#0B2545" strokeWidth="0.5"/>
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function SVGTracking() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2" fill="#0d7a8a"/>
      <path d="M6.34 6.34a8 8 0 0 0 0 11.32" stroke="#0d7a8a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.66 6.34a8 8 0 0 1 0 11.32" stroke="#0d7a8a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9.17 9.17a4 4 0 0 0 0 5.66" stroke="#0d7a8a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14.83 9.17a4 4 0 0 1 0 5.66" stroke="#0d7a8a" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function SVGEmergency() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="#c0392b" stroke="#c0392b" strokeWidth="0.5"/>
      <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="16.5" r="0.8" fill="white"/>
    </svg>
  );
}

/* ─── ASSET SCENE ─── */
function AssetScene({ asset, imgClass }) {
  return (
    <>
      <div className="sfs-glow" />
      <div className="sfs-ring sfs-ring-1" />
      <div className="sfs-ring sfs-ring-2" />

      {/* Large bordered image frame */}
      <div className="sfs-img-frame">
        <div className="sfs-img-frame-inner">
          <img src={asset.img} alt={asset.label} className={`sfs-asset-img ${imgClass}`} />
          <div className="sfs-frame-scanline" />
          <div className="sfs-frame-status">
            <div className="sfs-frame-status-left">
              <div className="sfs-frame-status-dot" />
              <span className="sfs-frame-status-txt">{asset.verified}</span>
            </div>
            <span className="sfs-frame-status-id">{asset.asset}</span>
          </div>
        </div>
      </div>

      <div className="sfs-asset-label">
        <div className="sfs-alabel-dot" />
        <div>
          <div className="sfs-alabel-text">{asset.verified}</div>
          <div className="sfs-alabel-sub">{asset.tagline}</div>
        </div>
      </div>

      <div className="sfs-qr-float">
        <div className="sfs-qr-float-inner"><QRCodeSVG size={40} /></div>
        <div>
          <div className="sfs-qr-float-title">{asset.asset}</div>
          <div className="sfs-qr-float-sub">QR · NFC Protected</div>
          <div className="sfs-qr-live">
            <div className="sfs-qr-live-dot" />
            Live Active
          </div>
        </div>
      </div>

      <div className="sfs-alert-float">
        <div className="sfs-alert-ico">🔔</div>
        <div>
          <div className="sfs-alert-h">Owner Alerted!</div>
          <div className="sfs-alert-p">Scan detected · 2s ago</div>
        </div>
      </div>
    </>
  );
}

/* ─── MAIN ─── */
export default function ScanForSafeHero() {
  const [active, setActive]     = useState(0);
  const [imgClass, setImgClass] = useState("sfs-asset-entering");

  useEffect(() => {
    const t0 = setTimeout(() => setImgClass("sfs-asset-idle"), 700);
    return () => clearTimeout(t0);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      setImgClass("sfs-asset-exiting");
      setTimeout(() => {
        setActive(p => (p + 1) % ASSETS.length);
        setImgClass("sfs-asset-entering");
        setTimeout(() => setImgClass("sfs-asset-idle"), 700);
      }, 300);
    }, 5500);
    return () => clearInterval(iv);
  }, []);

  const c = ASSETS[active];

  const features = [
    { ico:<SVGSecureQR/>, bg:"linear-gradient(135deg,#e8eef8,#d0dcf0)", border:"rgba(11,37,69,0.18)", h:"Secure QR & NFC", p:"Military-grade encrypted ID protection" },
    { ico:<SVGTracking/>, bg:"linear-gradient(135deg,#e0f5f7,#c0eaed)", border:"rgba(13,122,138,0.18)", h:"Live Tracking",    p:"Real-time alerts & continuous monitoring" },
    { ico:<SVGEmergency/>, bg:"linear-gradient(135deg,#fdecea,#f9d0cc)", border:"rgba(192,57,43,0.18)", h:"Emergency Access", p:"Instant verified owner identification" },
  ];

  const switchTo = (i) => {
    setImgClass("sfs-asset-exiting");
    setTimeout(() => {
      setActive(i);
      setImgClass("sfs-asset-entering");
      setTimeout(() => setImgClass("sfs-asset-idle"), 700);
    }, 300);
  };

  return (
    <>
      <style>{css}</style>
      <div className="sfs-page">
        <div className="sfs-hero">
          <div className="sfs-bg"><MeshLines /><Globe /><Particles /></div>

          <div className="sfs-grid">
            {/* LEFT */}
            <div className="sfs-left">
              <div className="sfs-badge">
                <div className="sfs-badge-dot" />
                Live Protection Active
                <span className="sfs-badge-sep" />
                <span className="sfs-badge-count">10,000+ Secured</span>
              </div>

              <h1 className="sfs-h1">
                Smart Protection<br />
                That <span className="green">Connects</span><br />
                <span className="green">Your World</span>
              </h1>

              <p className="sfs-sub">
                Protect vehicles, bikes, luggage, pets and loved ones with next-generation
                QR + NFC verification. Instant owner alerts and live smart protection — all with a single scan.
              </p>

              <div className="sfs-feats">
                {features.map((f, i) => (
                  <div className="sfs-feat" key={i}>
                    <div className="sfs-feat-ico" style={{background:f.bg, borderColor:f.border}}>{f.ico}</div>
                    <div><h4>{f.h}</h4><p>{f.p}</p></div>
                  </div>
                ))}
              </div>

              <div className="sfs-hero-actions">
                <button className="sfs-btn-main">
                  Pre-Registration
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </button>
                <button className="sfs-btn-sec">
                  <div className="sfs-play-ring">▶</div>
                  See How It Works
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="sfs-right">
              <ShieldBadge />
              <div className="sfs-stage">
                <AssetScene asset={c} imgClass={imgClass} />
              </div>
              <div className="sfs-asset-nav">
                {ASSETS.map((a, i) => (
                  <div
                    key={i}
                    className={`sfs-nav-dot${i===active?" active":""}`}
                    onClick={() => switchTo(i)}
                    title={a.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TICKER */}
        <div className="sfs-ticker">
          <div className="sfs-ticker-inner">
            <div className="sfs-ticker-label">Live Updates</div>
            <div className="sfs-ticker-track">
              {tickerAll.map((item, i) => (
                <div key={i} className="sfs-ti">
                  {item}
                  {i < tickerAll.length - 1 && <div className="sfs-td" />}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}