import { useEffect, useState } from "react";

import carImg from "../../assets/car.png";
import bikeImg from "../../assets/bike.png";
import luggageImg from "../../assets/luggage.png";
import qrImg from "../../assets/qr.png";
// import logoImg from "/public/logo.png";

const TICKER = [
  "🛡️  10,000+ Assets Protected",
  "📡  Live QR & NFC Scanning",
  "🚨  Instant Owner Alerts",
  "🔐  End-to-End Encrypted",
  "⚡  Scan in Under 2 Seconds",
  "🌍  Available in 50+ Countries",
  "✅  4.9 / 5 User Rating",
  "📲  15,000+ Scans Today",
  "🏆  #1 Asset Protection Platform",
  "🔔  8,000+ Alerts Sent Today",
];

const ASSETS = [
  {
    label: "Vehicle Verified",
    owner: "Rahul Verma",
    avatar: qrImg,
    phone: "+91 98765 43210",
    email: "rahul.verma@mail.com",
    address: "23, Green Park, New Delhi",
    asset: "SFS-CAR-4587",
    emergency: "+91 99887 77665",
    registered: "12 May 2024, 09:15 AM",
    img: carImg,
    color: "#2ebd3a",
  },
  {
    label: "Bike Verified",
    owner: "Aarav Sharma",
    avatar: qrImg,
    phone: "+91 98345 22119",
    email: "aarav.sharma@mail.com",
    address: "Plot 7, Andheri West, Mumbai",
    asset: "SFS-BIKE-7712",
    emergency: "+91 88774 66332",
    registered: "15 May 2024, 10:30 AM",
    img: bikeImg,
    color: "#4bd557",
  },
  {
    label: "Luggage Verified",
    owner: "Priya Kapoor",
    avatar: qrImg,
    phone: "+91 93456 77889",
    email: "priya.kapoor@mail.com",
    address: "12, Koramangala, Bangalore",
    asset: "SFS-LUG-1123",
    emergency: "+91 90909 88776",
    registered: "28 Mar 2024, 02:45 PM",
    img: luggageImg,
    color: "#7ded88",
  },
];

/* ─── CSS ─── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

.sfs-hero, .sfs-hero *, .sfs-hero *::before, .sfs-hero *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }

:root {
  --green: #2ebd3a;
  --green2: #4bd557;
  --green3: #7ded88;
  --green-pale: #e8f8eb;
  --dark: #06160A;
  --mid: #4b6357;
  --bg: #f4f8f4;
  --card-bg: rgba(255,255,255,0.80);
  --glass: rgba(255,255,255,0.60);
  --glass-border: rgba(46,189,58,0.16);
}

/* ══ ROOT ══ */
.sfs-hero {
  font-family: 'DM Sans', sans-serif;
  min-height: auto;
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--dark);
  border: 1.5px solid rgba(46,189,58,0.22);
  border-radius: 32px;
  margin-top: 20px;
  box-shadow:
    0 0 0 1px rgba(46,189,58,0.08),
    0 8px 48px rgba(46,189,58,0.10),
    inset 0 1px 0 rgba(255,255,255,0.9);
}

/* ══ BACKGROUND ══ */
.sfs-bg {
  position: absolute; inset: 0;
  pointer-events: none; z-index: 0;
  border-radius: 30px; overflow: hidden;
}
.sfs-bg::before {
  content: "";
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 900px 600px at 110% 0%, rgba(46,189,58,0.11) 0%, transparent 58%),
    radial-gradient(ellipse 600px 500px at -10% 100%, rgba(46,189,58,0.08) 0%, transparent 55%),
    radial-gradient(ellipse 350px 260px at 55% 45%, rgba(125,237,136,0.04) 0%, transparent 70%),
    linear-gradient(160deg, #f5f9f5 0%, #f5f9f5 40%, #f0fdf2 100%);
}

.sfs-particle {
  position: absolute; border-radius: 50%;
  background: rgba(46,189,58,0.30);
  pointer-events: none;
}

/* ══ GRID ══ */
.sfs-grid {
  flex: 1;
  max-width: 1440px; width: 100%; margin: 0 auto;
  display: grid; grid-template-columns: 44% 56%;
  align-items: center;
  padding: 72px 72px 52px;
  position: relative; z-index: 2;
  gap: 0;
}

/* ══ LEFT ══ */
.sfs-left { padding-right: 28px; }

.sfs-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(46,189,58,0.24);
  border-radius: 12px;
  padding: 8px 14px 8px 10px;
  margin-top: 14px;
  margin-bottom: 20px;
  font-size: 10px; font-weight: 700;
  letter-spacing: .08em; color: #1a4a1e;
  text-transform: uppercase;
  box-shadow: 0 2px 14px rgba(46,189,58,0.10), 0 1px 0 rgba(255,255,255,0.9) inset;
  animation: fadeUp .6s .10s cubic-bezier(.22,1,.36,1) both;
  width: fit-content;
}
.sfs-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--green);
  animation: livePulse 2s ease-out infinite;
  flex-shrink: 0;
}
.sfs-badge-sep {
  width: 1px; height: 14px;
  background: rgba(46,189,58,0.30);
  display: inline-block;
}
.sfs-badge-count {
  font-size: 9.5px; font-weight: 800;
  color: var(--green); letter-spacing: .04em;
}
@keyframes livePulse {
  0%   { box-shadow: 0 0 0 0 rgba(46,189,58,.7); }
  70%  { box-shadow: 0 0 0 8px rgba(46,189,58,0); }
  100% { box-shadow: 0 0 0 0 rgba(46,189,58,0); }
}

.sfs-h1 {
  font-family: 'Sora', sans-serif;
  font-size: 64px; line-height: .92;
  letter-spacing: -3.5px; font-weight: 900;
  color: var(--dark); margin-bottom: 0;
  animation: slideInLeft .8s .04s cubic-bezier(.22,1,.36,1) both;
}
.sfs-h1 .green {
  background: linear-gradient(125deg, #0a2e10 0%, #2ebd3a 52%, #4bd557 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; display: inline-block;
}
.sfs-h1 .outline {
  color: transparent;
  -webkit-text-stroke: 2px rgba(46,189,58,0.25);
  animation: outlinePulse 4s ease-in-out infinite .5s;
}
@keyframes outlinePulse {
  0%,100% { -webkit-text-stroke-color: rgba(46,189,58,0.25); }
  50%      { -webkit-text-stroke-color: rgba(46,189,58,0.45); }
}

.sfs-sub {
  font-size: 14.5px; line-height: 1.82; color: var(--mid);
  max-width: 480px; margin-bottom: 26px;
  font-weight: 400;
  animation: slideInLeft .85s .14s cubic-bezier(.22,1,.36,1) both;
}

/* ── Feature cards ── */
.sfs-feats { display: flex; gap: 10px; margin-bottom: 26px; }
.sfs-feat {
  flex: 1;
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(46,189,58,0.14);
  border-radius: 20px; padding: 18px 14px 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.7) inset;
  position: relative; overflow: hidden;
  transition: .32s cubic-bezier(.34,1.46,.64,1);
  cursor: default;
}
.sfs-feat::before {
  content: "";
  position: absolute; top: 0; left: 0; right: 0; height: 1.5px;
  background: linear-gradient(90deg, transparent, rgba(46,189,58,0.5), transparent);
  transform: scaleX(0); transform-origin: center; transition: .32s ease;
}
.sfs-feat:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 18px 40px rgba(46,189,58,0.13), 0 0 0 1px rgba(46,189,58,0.20);
  border-color: rgba(46,189,58,0.26);
  background: rgba(255,255,255,0.88);
}
.sfs-feat:hover::before { transform: scaleX(1); }
.sfs-feat-ico {
  width: 42px; height: 42px; border-radius: 13px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 11px;
  transition: .32s cubic-bezier(.34,1.46,.64,1);
  box-shadow: 0 4px 10px rgba(46,189,58,0.15);
  border: 1px solid rgba(46,189,58,0.16);
  flex-shrink: 0;
}
.sfs-feat:hover .sfs-feat-ico { transform: scale(1.1) rotate(-5deg); }
.sfs-feat h4 { font-size: 13px; font-weight: 700; color: var(--dark); margin-bottom: 5px; }
.sfs-feat p  { font-size: 11px; line-height: 1.6; color: #6a8070; }
.sfs-feat:nth-child(1) { animation: fadeUp .55s .25s both; }
.sfs-feat:nth-child(2) { animation: fadeUp .55s .36s both; }
.sfs-feat:nth-child(3) { animation: fadeUp .55s .47s both; }

/* ── Buttons ── */
.sfs-hero-actions {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 24px;
  animation: fadeUp .55s .56s both;
}
.sfs-btn-main {
  border: none;
  background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 50%, #0B2545 100%);
  color: white; padding: 15px 30px; border-radius: 14px;
  font-size: 14px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 8px;
  box-shadow: 0 10px 28px rgba(46,189,58,0.32), 0 2px 6px rgba(46,189,58,0.18);
  transition: .32s cubic-bezier(.34,1.46,.64,1);
  position: relative; overflow: hidden;
  letter-spacing: -.01em;
}
.sfs-btn-main::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.16) 0%, transparent 55%);
  pointer-events: none;
}
.sfs-btn-main:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 16px 40px rgba(46,189,58,0.40); }
.sfs-btn-main:active { transform: translateY(0) scale(.99); }

.sfs-btn-sec {
  border: 1px solid rgba(46,189,58,0.26);
  background: var(--glass);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  padding: 14px 24px; border-radius: 14px;
  font-size: 13.5px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  display: flex; align-items: center; gap: 9px;
  cursor: pointer; color: var(--dark); transition: .26s ease;
  box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset;
}
.sfs-btn-sec:hover { transform: translateY(-3px); border-color: rgba(46,189,58,0.50); box-shadow: 0 10px 24px rgba(46,189,58,0.10), 0 1px 0 rgba(255,255,255,0.8) inset; }
.sfs-play-ring {
  width: 28px; height: 28px; border-radius: 50%;
  background: linear-gradient(135deg, #2ebd3a, #1fa82a);
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; color: white;
  box-shadow: 0 3px 10px rgba(46,189,58,0.28);
  transition: .26s;
  border: 1px solid rgba(255,255,255,0.28);
}
.sfs-btn-sec:hover .sfs-play-ring { transform: scale(1.1) rotate(8deg); }

/* ── Stats ── */
.sfs-stats {
  display: flex; gap: 20px; align-items: center;
  margin-bottom: 0;
  animation: fadeUp .55s .65s both;
}
.sfs-stat { display: flex; flex-direction: column; }
.sfs-stat-num {
  font-family: 'Sora', sans-serif;
  font-size: 22px; font-weight: 800;
  background: linear-gradient(125deg, #0B2545, #2ebd3a);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  line-height: 1;
}
.sfs-stat-lbl { font-size: 11px; color: var(--mid); margin-top: 3px; font-weight: 500; }
.sfs-stat-div { width: 1px; height: 32px; background: rgba(46,189,58,0.20); }

/* ══ RIGHT ══ */
.sfs-right {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  min-height: 640px;
}

/* Floating badges */
.sfs-shield-badge {
  position: absolute; top: 32px; right: 24px;
  width: 100px; height: 100px; z-index: 10;
  animation: shieldFloat 5s ease-in-out infinite;
  filter: drop-shadow(0 12px 28px rgba(46,189,58,0.28));
}
@keyframes shieldFloat {
  0%,100% { transform: translateY(0) rotate(2deg); }
  50%      { transform: translateY(-12px) rotate(-1deg); }
}

.sfs-lock {
  position: absolute; right: 0; top: 50%;
  transform: translateY(-50%);
  width: 52px; height: 52px;
  background: var(--glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.10), 0 0 0 1px rgba(46,189,58,0.16);
  border: 1px solid rgba(255,255,255,0.70);
  z-index: 10;
  animation: lockFloat 5s ease-in-out infinite 1s;
}
@keyframes lockFloat {
  0%,100% { transform: translateY(-50%) scale(1); }
  50%      { transform: translateY(calc(-50% - 10px)) scale(1.05); }
}

/* Alert + Scan floating cards */
.sfs-alert-badge {
  position: absolute; left: 4px; top: 90px;
  background: var(--card-bg);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 16px; padding: 10px 13px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.8) inset;
  border: 1px solid rgba(46,189,58,0.14);
  z-index: 10; display: flex; align-items: center; gap: 8px;
  animation: alertFloat 6s ease-in-out infinite .8s;
}
@keyframes alertFloat {
  0%,100% { transform: translateY(0) rotate(-0.5deg); }
  50%      { transform: translateY(-8px) rotate(0deg); }
}
.sfs-alert-ico {
  width: 32px; height: 32px; border-radius: 10px;
  background: linear-gradient(135deg, #e8f8eb, #d4f5d8);
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; flex-shrink: 0;
  border: 1px solid rgba(46,189,58,0.18);
}
.sfs-alert-text h5 { font-size: 11px; font-weight: 700; color: var(--dark); }
.sfs-alert-text p  { font-size: 9px; color: var(--mid); margin-top: 1.5px; }

.sfs-scan-badge {
  position: absolute; right: 12px; bottom: 110px;
  background: linear-gradient(135deg, #2ebd3a, #1c9926);
  border-radius: 14px; padding: 9px 14px;
  z-index: 10;
  box-shadow: 0 10px 26px rgba(46,189,58,0.36);
  border: 1px solid rgba(255,255,255,0.18);
  animation: scanBadgeFloat 4.5s ease-in-out infinite 1.5s;
  color: white; display: flex; align-items: center; gap: 7px;
}
@keyframes scanBadgeFloat {
  0%,100% { transform: translateY(0) rotate(.5deg); }
  50%      { transform: translateY(-7px) rotate(-.5deg); }
}
.sfs-scan-badge-ico { font-size: 16px; }
.sfs-scan-badge-text h5 { font-size: 11px; font-weight: 800; }
.sfs-scan-badge-text p  { font-size: 8.5px; opacity: .85; margin-top: 1px; }

.sfs-stage {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  width: 100%;
}

/* Radial rings */
.sfs-ring {
  position: absolute; border-radius: 50%;
  border: 1px solid rgba(46,189,58,0.12);
  pointer-events: none; z-index: 1;
}
.sfs-ring-1 { width: 320px; height: 320px; animation: ringPulse 4s ease-in-out infinite; }
.sfs-ring-2 { width: 460px; height: 460px; animation: ringPulse 4s ease-in-out infinite .8s; }
.sfs-ring-3 { width: 600px; height: 600px; animation: ringPulse 4s ease-in-out infinite 1.6s; }
@keyframes ringPulse {
  0%,100% { opacity: .5; transform: scale(.96); }
  50%      { opacity: .9; transform: scale(1.04); }
}
.sfs-glow {
  position: absolute;
  width: 420px; height: 420px; border-radius: 50%;
  background: radial-gradient(circle, rgba(46,189,58,0.16) 0%, rgba(46,189,58,0.06) 40%, transparent 70%);
  filter: blur(6px);
  animation: glowPulse 4.5s ease-in-out infinite;
  z-index: 1;
}
@keyframes glowPulse {
  0%,100% { transform: scale(.88); opacity: .55; }
  50%      { transform: scale(1.08); opacity: 1; }
}

/* ══ HOW-IT-WORKS STYLE iPHONE MOCKUP ══ */
.sfs-hiw-phone-wrap {
  position: relative;
  width: 280px;
  flex-shrink: 0;
  z-index: 5;
  animation: phoneRock 9s ease-in-out infinite;
    margin-top: -85px;   /* move phone up */
     scale: 0.85;

}
@keyframes phoneRock {
  0%,100% { transform: perspective(1100px) rotateY(-8deg) rotateX(3deg) translateY(0); }
  33%      { transform: perspective(1100px) rotateY(-6deg) rotateX(2deg) translateY(-7px); }
  66%      { transform: perspective(1100px) rotateY(-9deg) rotateX(4.5deg) translateY(-4px); }
}

.sfs-hiw-frame {
  position: relative;
  width: 280px; height: 560px;
  border-radius: 46px;
  background: linear-gradient(160deg, #5a5a5a 0%, #3a3a3a 30%, #2a2a2a 60%, #1e1e1e 100%);
  box-shadow:
    0 0 0 1px #666 inset,
    2px 4px 0 0 #555 inset,
    -1px -2px 0 0 #111 inset,
    0 30px 80px rgba(0,0,0,0.55),
    0 8px 24px rgba(0,0,0,0.35),
    0 2px 6px rgba(0,0,0,0.25),
    0 0 60px rgba(46,189,58,0.10);
}
.sfs-hiw-frame::before {
  content: "";
  position: absolute; inset: 0; border-radius: 46px;
  background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 40%);
  pointer-events: none; z-index: 10;
}

/* side buttons */
.sfs-hiw-btn-vl  { position: absolute; left: -3px; top: 120px; width: 3px; height: 34px; background: linear-gradient(180deg,#555,#3a3a3a); border-radius: 2px 0 0 2px; box-shadow: -1px 0 3px rgba(0,0,0,0.4); }
.sfs-hiw-btn-vl2 { position: absolute; left: -3px; top: 165px; width: 3px; height: 34px; background: linear-gradient(180deg,#555,#3a3a3a); border-radius: 2px 0 0 2px; box-shadow: -1px 0 3px rgba(0,0,0,0.4); }
.sfs-hiw-btn-mute{ position: absolute; left: -3px; top: 88px;  width: 3px; height: 22px; background: linear-gradient(180deg,#555,#3a3a3a); border-radius: 2px 0 0 2px; box-shadow: -1px 0 3px rgba(0,0,0,0.4); }
.sfs-hiw-btn-pwr { position: absolute; right:-3px; top: 140px; width: 3px; height: 70px; background: linear-gradient(180deg,#555,#3a3a3a); border-radius: 0 2px 2px 0; box-shadow: 1px 0 3px rgba(0,0,0,0.4); }

/* inner glass */
.sfs-hiw-inner {
  position: absolute; inset: 6px;
  border-radius: 41px; background: #0a0a0a; overflow: hidden;
}
.sfs-hiw-screen {
  position: absolute; inset: 3px;
  border-radius: 38px; background: white; overflow: hidden;
  display: flex; flex-direction: column;
}

/* top notch row */
.sfs-hiw-notch-bar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 20px 0; font-size: 10px; font-weight: 700; color: #111;
  position: relative; z-index: 20; flex-shrink: 0;
}
.sfs-hiw-notch-pill {
  position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
  width: 100px; height: 30px; background: #0a0a0a; border-radius: 20px;
}
.sfs-hiw-status-icons { display: flex; gap: 4px; align-items: center; }

/* ── SCAN PHASE (QR code card on screen) ── */
.sfs-hiw-scan-screen {
  flex: 1; display: flex; flex-direction: column; overflow: hidden;
}
.sfs-hiw-scan-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 16px 6px; border-bottom: 1px solid #f0f0f0; flex-shrink: 0;
}
.sfs-hiw-scan-title { font-size: 13px; font-weight: 700; color: #111; text-align: center; }
.sfs-hiw-scan-sub   { font-size: 9px; color: #777; text-align: center; }

.sfs-hiw-qr-card {
  margin: 10px 12px 6px;
  background: #e8f8eb; border-radius: 12px;
  padding: 10px 12px; border: 1px solid #d0f0d4;
  display: flex; align-items: center; gap: 10px; flex-shrink: 0;
}
.sfs-hiw-qr-inner {
  background: white; border-radius: 8px; padding: 4px;
  border: 1px solid #ddd; flex-shrink: 0;
}
.sfs-hiw-qr-id    { font-size: 13px; font-weight: 800; color: #0B2545; letter-spacing: -0.3px; }
.sfs-hiw-qr-type  { font-size: 10px; color: #2ebd3a; margin-bottom: 4px; }
.sfs-hiw-verified {
  display: inline-flex; align-items: center; gap: 3px;
  background: #2ebd3a; border-radius: 4px; padding: 2px 6px;
  font-size: 9px; font-weight: 700; color: white;
}

/* scan beam animation */
.sfs-hiw-scan-area {
  flex: 1; position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(180deg, #f8fff8 0%, #ffffff 100%);
}
.sfs-hiw-scan-beam {
  position: absolute; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(46,189,58,0.4), rgba(46,189,58,0.9), rgba(125,237,136,0.9), rgba(46,189,58,0.9), rgba(46,189,58,0.4), transparent);
  box-shadow: 0 0 10px rgba(46,189,58,0.5);
  animation: beamScan 1.8s ease-in-out infinite;
  z-index: 5;
}
@keyframes beamScan {
  0%   { top: 10%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 90%; opacity: 0; }
}
.sfs-hiw-scan-corners {
  position: absolute; inset: 20px; z-index: 3;
}
.sfs-hiw-corner {
  position: absolute; width: 20px; height: 20px;
  border-color: #2ebd3a; border-style: solid; border-width: 0;
}
.sfs-hiw-corner-tl { top: 0; left: 0; border-top-width: 3px; border-left-width: 3px; border-radius: 4px 0 0 0; }
.sfs-hiw-corner-tr { top: 0; right: 0; border-top-width: 3px; border-right-width: 3px; border-radius: 0 4px 0 0; }
.sfs-hiw-corner-bl { bottom: 0; left: 0; border-bottom-width: 3px; border-left-width: 3px; border-radius: 0 0 0 4px; }
.sfs-hiw-corner-br { bottom: 0; right: 0; border-bottom-width: 3px; border-right-width: 3px; border-radius: 0 0 4px 0; }
.sfs-hiw-scan-hint { font-size: 9px; color: #aaa; position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; }

/* ── RESULT PHASE (after scan) ── */
.sfs-hiw-result-screen {
  flex: 1; display: flex; flex-direction: column; overflow: hidden;
}
.sfs-hiw-result-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 16px 6px; border-bottom: 1px solid #f0f0f0; flex-shrink: 0;
}
/* success flash animation */
.sfs-hiw-success-flash {
  animation: successFlash 0.5s ease;
}
@keyframes successFlash {
  0%   { background: #e8f8eb; }
  50%  { background: #b8f0c0; }
  100% { background: white; }
}

/* logo + verified section */
.sfs-hiw-logo-section {
  padding: 12px 16px 8px;
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  flex-shrink: 0;
}
.sfs-hiw-logo-wrap {
  width: 54px; height: 54px; border-radius: 14px;
  background: linear-gradient(135deg, #e8f8eb, #d4f5d8);
  border: 2px solid #2ebd3a;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(46,189,58,0.25);
}
.sfs-hiw-logo-wrap img { width: 44px; height: 44px; object-fit: contain; }
.sfs-hiw-result-badge {
  display: inline-flex; align-items: center; gap: 4px;
  background: #e8f8eb; border: 1px solid #2ebd3a;
  border-radius: 20px; padding: 4px 10px;
  font-size: 10px; font-weight: 700; color: #0B2545;
}
.sfs-hiw-result-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #2ebd3a; animation: livePulse 1.5s infinite; }
.sfs-hiw-asset-id {
  font-size: 11px; font-weight: 800; color: #0B2545;
  letter-spacing: 0.5px; text-align: center;
}

/* action buttons */
.sfs-hiw-actions {
  padding: 0 12px 8px;
  display: flex; flex-direction: column; gap: 7px;
  flex-shrink: 0;
}
.sfs-hiw-btn-call {
  background: linear-gradient(135deg, #0B2545, #1a3a6e);
  border-radius: 10px; padding: 11px 14px;
  display: flex; align-items: center; gap: 8px;
  cursor: pointer; border: none; width: 100%;
}
.sfs-hiw-btn-call-ico {
  width: 28px; height: 28px; border-radius: 8px;
  background: rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.sfs-hiw-btn-call-text { text-align: left; }
.sfs-hiw-btn-call-label { font-size: 12px; font-weight: 700; color: white; }
.sfs-hiw-btn-call-sub   { font-size: 9px; color: rgba(255,255,255,0.65); margin-top: 1px; }

.sfs-hiw-btn-emergency {
  background: linear-gradient(135deg, #c62828, #e53935);
  border-radius: 10px; padding: 11px 14px;
  display: flex; align-items: center; gap: 8px;
  cursor: pointer; border: none; width: 100%;
}
.sfs-hiw-btn-emg-ico {
  width: 28px; height: 28px; border-radius: 8px;
  background: rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}

/* hidden data section */
.sfs-hiw-hidden-section {
  flex: 1; padding: 0 12px 8px;
  display: flex; flex-direction: column; gap: 4px; overflow: hidden;
}
.sfs-hiw-hidden-label {
  font-size: 8.5px; font-weight: 700; color: #aaa;
  letter-spacing: 0.08em; text-transform: uppercase;
  display: flex; align-items: center; gap: 4px; margin-bottom: 2px;
}
.sfs-hiw-hidden-row {
  display: flex; align-items: center; gap: 6px;
  padding: 4px 8px; background: #f8f8f8; border-radius: 7px;
}
.sfs-hiw-hidden-row-ico {
  width: 18px; height: 18px; border-radius: 5px;
  background: #f0f0f0; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.sfs-hiw-hidden-blur {
  flex: 1; height: 8px; background: #e0e0e0; border-radius: 4px;
  filter: blur(3px); opacity: 0.7;
}
.sfs-hiw-lock-ico {
  flex-shrink: 0;
}

/* protection bar */
.sfs-hiw-protection-bar {
  margin: 0 10px 8px;
  background: linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%);
  border-radius: 12px; padding: 10px 12px;
  display: flex; align-items: center; gap: 8px; flex-shrink: 0;
}
.sfs-hiw-protection-ico {
  width: 28px; height: 28px; border-radius: 50%;
  background: rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.sfs-hiw-protection-title { font-size: 11px; font-weight: 800; color: white; }
.sfs-hiw-protection-sub   { font-size: 8.5px; color: rgba(255,255,255,0.7); }

/* ── phase transitions ── */
.sfs-hiw-fade-in  { animation: hiwFadeIn  .5s cubic-bezier(.22,1,.36,1) both; }
.sfs-hiw-fade-out { animation: hiwFadeOut .3s ease forwards; }
@keyframes hiwFadeIn  { from { opacity:0; transform:scale(.95) translateY(10px); } to { opacity:1; transform:none; } }
@keyframes hiwFadeOut { from { opacity:1; } to { opacity:0; transform:scale(.95) translateY(-10px); } }

/* ══ SCAN STAGE (car/bike/luggage) ══ */
.sfs-scan-stage {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
}
.sfs-asset-img {
  width: 460px; max-width: none;
  position: relative; z-index: 3; object-fit: contain;
  filter: drop-shadow(0 28px 56px rgba(0,0,0,0.16)) drop-shadow(0 0 36px rgba(46,189,58,0.22));
  animation: assetHover 4.5s ease-in-out infinite;
}
@keyframes assetHover {
  0%,100% { transform: translateY(0) scale(1.02) rotateY(-4deg); }
  50%      { transform: translateY(-12px) scale(1.04) rotateY(-2deg); }
}
.sfs-qr-card {
  position: absolute; right: -20px; bottom: 80px;
  background: var(--card-bg);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 20px; padding: 13px 16px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.10), 0 0 0 1px rgba(255,255,255,0.80) inset;
  border: 1px solid rgba(46,189,58,0.16);
  z-index: 10; display: flex; align-items: center; gap: 10px;
  min-width: 210px;
  transform: perspective(600px) rotateY(-8deg);
  animation: cardBob 5s ease-in-out infinite;
}
@keyframes cardBob {
  0%,100% { transform: perspective(600px) rotateY(-8deg) translateY(0); }
  50%      { transform: perspective(600px) rotateY(-11deg) translateY(-8px); }
}
.sfs-qr-icon {
  width: 48px; height: 48px; border-radius: 13px;
  background: linear-gradient(135deg, #e8f8eb, #d4f5d8);
  display: flex; align-items: center; justify-content: center;
  font-size: 23px; flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(46,189,58,0.18);
  border: 1px solid rgba(46,189,58,0.18);
}
.sfs-qr-card h4 { font-size: 12.5px; font-weight: 800; color: var(--dark); margin-bottom: 3px; }
.sfs-qr-card p  { font-size: 9.5px; color: #5a7060; line-height: 1.4; }

.sfs-status-pill {
  position: absolute; top: 68px; left: 6px;
  background: var(--card-bg);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 14px; padding: 9px 13px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.80) inset;
  border: 1px solid rgba(46,189,58,0.14);
  z-index: 10; display: flex; align-items: center; gap: 7px;
  animation: pillFloat 6s ease-in-out infinite .5s;
}
@keyframes pillFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-7px); }
}
.sfs-status-dot   { width: 7px; height: 7px; border-radius: 50%; background: var(--green); animation: livePulse 1.8s infinite; flex-shrink: 0; }
.sfs-hero-status-label { font-size: 11px; font-weight: 800; color: var(--dark); }
.sfs-status-sub   { font-size: 8.5px; color: var(--mid); margin-top: 1px; }

/* ══ TRANSITIONS ══ */
.sfs-entering  { animation: enterScene .80s cubic-bezier(.22,1,.36,1) both; }
.sfs-exiting   { animation: exitScene .32s ease forwards; }
.sfs-scan-in   { animation: scanIn .42s ease both; }
.sfs-scan-out  { animation: scanOut .28s ease forwards; }
@keyframes enterScene {
  from { opacity:0; transform: scale(.65) translateY(60px); filter:blur(8px); }
  to   { opacity:1; transform: none; filter:blur(0); }
}
@keyframes exitScene {
  from { opacity:1; transform: none; }
  to   { opacity:0; transform: scale(.88) translateY(-40px); filter:blur(5px); }
}
@keyframes scanIn  { from { opacity:0; transform:scale(.93) translateY(18px); } to { opacity:1; transform:none; } }
@keyframes scanOut { from { opacity:1; } to { opacity:0; transform:scale(.91) translateY(-18px); } }
@keyframes slideInLeft { from { opacity:0; transform: translateX(-32px); } to { opacity:1; transform: none; } }
@keyframes fadeUp      { from { opacity:0; transform: translateY(20px);  } to { opacity:1; transform: none; } }

/* ══ TICKER ══ */
.sfs-ticker {
  width:100%; position:relative; z-index:10; overflow:hidden;
  background: linear-gradient(90deg, #061A0A 0%, #2ebd3a 40%, #061A0A 70%, #2ebd3a 100%);
  border-top: 1px solid rgba(46,189,58,0.22);
  border-radius: 0 0 30px 30px;
}
.sfs-ticker::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(91, 19, 19, 0.18) 0%,  rgba(173, 31, 31, 0.18) 100%);
  z-index: 2; pointer-events: none;
}
.sfs-ticker-inner { display:flex; position: relative; z-index: 1; }
.sfs-ticker-label {
  flex-shrink:0; display:flex; align-items:center; padding:0 20px;
  background: rgba(0,0,0,0.20); border-right: 1px solid rgba(255,255,255,0.18);
  font-size:8.5px; font-weight:900; color:white; letter-spacing:2.5px;
  text-transform:uppercase; height:44px; white-space: nowrap;
}
.sfs-ticker-track { display:flex; animation: tickMove 36s linear infinite; }
.sfs-ticker-track:hover { animation-play-state: paused; }
@keyframes tickMove { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
.sfs-ti {
  display:flex; align-items:center; height:44px;
  padding:0 20px; font-size:11.5px; font-weight:600;
  color:rgba(255,255,255,0.90); white-space:nowrap; gap:16px;
}
.sfs-td { width:3px; height:3px; border-radius:50%; background:rgba(255,255,255,0.28); flex-shrink: 0; }

/* ══ BACKGROUND DECORATIONS ══ */
.sfs-mesh {
  position: absolute; top: -60px; right: -60px;
  width: 520px; height: 520px; opacity: .35;
  animation: meshRotate 40s linear infinite;
}
@keyframes meshRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.sfs-globe-wrap {
  position: absolute; bottom: -80px; left: -70px;
  width: 300px; height: 300px;
  animation: globePulse 7s ease-in-out infinite; z-index: 1;
}
@keyframes globePulse {
  0%,100% { transform: scale(1) rotate(-5deg); opacity:.45; }
  50%      { transform: scale(1.04) rotate(-2deg); opacity:.62; }
}

/* ══ RESPONSIVE ══ */
@media(max-width:1200px){
  .sfs-hero { border-radius: 22px; margin-top: 16px; }
  .sfs-grid { grid-template-columns:1fr; padding:48px 32px 28px; gap:28px; }
  .sfs-h1 { font-size:50px; letter-spacing:-2.5px; }
  .sfs-right { min-height:560px; }
  .sfs-asset-img { width:340px; }
  .sfs-shield-badge { width:80px; height:80px; top:20px; right:10px; }
  .sfs-ring-2, .sfs-ring-3 { display:none; }
}

@media(max-width:640px){
  .sfs-hero { border-radius: 20px; border-width: 1px; margin-top: 12px; }
  .sfs-grid { grid-template-columns: 1fr; padding: 36px 18px 24px; gap: 28px; }
  .sfs-h1 { font-size: 38px; letter-spacing: -1.8px; line-height: 1.0; margin-bottom: 0; }
  .sfs-h1 .outline { -webkit-text-stroke-width: 1.5px; }
  .sfs-sub { font-size: 13.5px; line-height: 1.78; margin-bottom: 20px; }
  .sfs-badge { font-size: 8.5px; margin-top: 12px; margin-bottom: 18px; padding: 7px 12px 7px 9px; border-radius: 10px; }
  .sfs-badge-sep { height: 12px; }
  .sfs-badge-count { font-size: 8.5px; }
  .sfs-feats { flex-direction: column; gap: 9px; margin-bottom: 20px; }
  .sfs-feat { padding: 14px 14px; border-radius: 16px; flex-direction: row; align-items: center; gap: 13px; }
  .sfs-feat-ico { margin-bottom: 0; }
  .sfs-feat h4 { font-size: 13px; margin-bottom: 3px; }
  .sfs-feat p  { font-size: 11px; }
  .sfs-hero-actions { flex-direction: column; gap: 10px; margin-bottom: 20px; align-items: stretch; }
  .sfs-btn-main { padding: 15px 20px; font-size: 14px; border-radius: 13px; justify-content: center; }
  .sfs-btn-sec  { padding: 14px 20px; font-size: 13.5px; border-radius: 13px; justify-content: center; }
  .sfs-stats { gap: 12px; flex-wrap: wrap; }
  .sfs-stat-num { font-size: 18px; }
  .sfs-stat-lbl { font-size: 10px; }
  .sfs-stat-div { height: 28px; }
  .sfs-right { min-height: 580px; overflow: visible; }
  .sfs-stage { min-height: 580px !important; }
  .sfs-hiw-phone-wrap { width: 200px; }
  .sfs-hiw-frame { width: 260px; height: 520px; border-radius: 42px; }
  .sfs-hiw-inner { border-radius: 37px; }
  .sfs-hiw-screen { border-radius: 34px; }
  .sfs-shield-badge { width: 72px; height: 72px; top: 16px; right: 10px; }
  .sfs-lock { width: 46px; height: 46px; font-size: 20px; right: -4px; }
  .sfs-ring-1 { width: 280px; height: 280px; }
  .sfs-ring-2, .sfs-ring-3 { display: none; }
  .sfs-alert-badge { left: 2px; top: 76px; padding: 8px 11px; border-radius: 13px; }
  .sfs-alert-ico { width: 30px; height: 30px; font-size: 14px; border-radius: 9px; }
  .sfs-scan-badge { right: 2px; bottom: 80px; padding: 9px 13px; border-radius: 12px; }
  .sfs-asset-img { width: 300px; }
  .sfs-qr-card { right: -6px; bottom: 68px; min-width: 185px; padding: 10px 13px; border-radius: 17px; transform: none; }
  .sfs-qr-icon { width: 44px; height: 44px; font-size: 22px; border-radius: 11px; }
  .sfs-status-pill { top: 52px; left: 4px; padding: 8px 12px; border-radius: 12px; }
  .sfs-ticker { border-radius: 0 0 18px 18px; }
  .sfs-ticker-label { padding: 0 12px; font-size: 8px; letter-spacing: 1.5px; height: 42px; }
  .sfs-ti { font-size: 11px; padding: 0 14px; height: 42px; }
  .sfs-globe-wrap { width: 200px; height: 200px; bottom: -60px; left: -50px; }
  .sfs-mesh { width: 300px; height: 300px; top: -30px; right: -30px; }
  .sfs-left { padding-right: 0; }
}

@media(max-width:380px){
  .sfs-h1 { font-size: 31px; letter-spacing: -1.2px; }
  .sfs-grid { padding: 22px 14px 16px; }
  .sfs-hiw-phone-wrap { width: 200px; }
  .sfs-hiw-frame { width: 230px; height: 460px; border-radius: 38px; }
  .sfs-hiw-inner { border-radius: 33px; }
  .sfs-hiw-screen { border-radius: 30px; }
  .sfs-asset-img { width: 250px; }
  .sfs-right { min-height: 460px; }
  .sfs-shield-badge { width: 60px; height: 60px; top: 10px; right: 6px; }
  .sfs-lock { display: none; }
}
`;

/* ─── INLINE QR CODE SVG ─── */
function QRCodeSVG() {
  return (
    <svg width="56" height="56" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="7" height="7" rx="1" fill="#0B2545"/>
      <rect x="1" y="1" width="5" height="5" rx="0.5" fill="white"/>
      <rect x="2" y="2" width="3" height="3" fill="#0B2545"/>
      <rect x="14" y="0" width="7" height="7" rx="1" fill="#0B2545"/>
      <rect x="15" y="1" width="5" height="5" rx="0.5" fill="white"/>
      <rect x="16" y="2" width="3" height="3" fill="#0B2545"/>
      <rect x="0" y="14" width="7" height="7" rx="1" fill="#0B2545"/>
      <rect x="1" y="15" width="5" height="5" rx="0.5" fill="white"/>
      <rect x="2" y="16" width="3" height="3" fill="#0B2545"/>
      <rect x="8" y="0" width="1" height="1" fill="#0B2545"/>
      <rect x="10" y="0" width="1" height="1" fill="#0B2545"/>
      <rect x="12" y="0" width="1" height="1" fill="#0B2545"/>
      <rect x="8" y="2" width="2" height="1" fill="#0B2545"/>
      <rect x="11" y="2" width="1" height="1" fill="#0B2545"/>
      <rect x="9" y="4" width="1" height="1" fill="#0B2545"/>
      <rect x="11" y="4" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="6" width="1" height="1" fill="#0B2545"/>
      <rect x="10" y="6" width="2" height="1" fill="#0B2545"/>
      <rect x="0" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="3" y="8" width="1" height="1" fill="#0B2545"/>
      <rect x="5" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="8" width="1" height="2" fill="#0B2545"/>
      <rect x="10" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="13" y="8" width="1" height="1" fill="#0B2545"/>
      <rect x="15" y="8" width="2" height="1" fill="#0B2545"/>
      <rect x="18" y="8" width="1" height="2" fill="#0B2545"/>
      <rect x="0" y="10" width="1" height="1" fill="#0B2545"/>
      <rect x="2" y="10" width="2" height="1" fill="#0B2545"/>
      <rect x="5" y="10" width="1" height="1" fill="#0B2545"/>
      <rect x="9" y="10" width="1" height="1" fill="#0B2545"/>
      <rect x="11" y="10" width="3" height="1" fill="#0B2545"/>
      <rect x="15" y="10" width="1" height="1" fill="#0B2545"/>
      <rect x="17" y="10" width="2" height="1" fill="#0B2545"/>
      <rect x="0" y="12" width="3" height="1" fill="#0B2545"/>
      <rect x="4" y="12" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="12" width="2" height="1" fill="#0B2545"/>
      <rect x="11" y="12" width="1" height="1" fill="#0B2545"/>
      <rect x="13" y="12" width="2" height="1" fill="#0B2545"/>
      <rect x="16" y="12" width="1" height="1" fill="#0B2545"/>
      <rect x="18" y="12" width="1" height="1" fill="#0B2545"/>
      <rect x="8" y="14" width="1" height="1" fill="#0B2545"/>
      <rect x="10" y="14" width="2" height="1" fill="#0B2545"/>
      <rect x="13" y="14" width="1" height="2" fill="#0B2545"/>
      <rect x="15" y="14" width="1" height="1" fill="#0B2545"/>
      <rect x="17" y="14" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="16" width="2" height="1" fill="#0B2545"/>
      <rect x="11" y="16" width="1" height="2" fill="#0B2545"/>
      <rect x="14" y="16" width="1" height="1" fill="#0B2545"/>
      <rect x="16" y="16" width="1" height="2" fill="#0B2545"/>
      <rect x="18" y="16" width="2" height="1" fill="#0B2545"/>
      <rect x="8" y="18" width="1" height="2" fill="#0B2545"/>
      <rect x="10" y="18" width="1" height="2" fill="#0B2545"/>
      <rect x="14" y="18" width="1" height="2" fill="#0B2545"/>
      <rect x="19" y="18" width="1" height="2" fill="#0B2545"/>
    </svg>
  );
}

/* ─── HIWS-TYLE PHONE with QR scan → result animation ─── */
function HIWPhone({ asset, animClass }) {
  const [screenPhase, setScreenPhase] = useState("scan"); // "scan" | "result"

  useEffect(() => {
    setScreenPhase("scan");
    const t = setTimeout(() => setScreenPhase("result"), 2200);
    return () => clearTimeout(t);
  }, [asset]);

  return (
    <div className={`sfs-hiw-phone-wrap ${animClass}`}>
      <div className="sfs-hiw-frame">
        {/* side buttons */}
        <div className="sfs-hiw-btn-mute" />
        <div className="sfs-hiw-btn-vl" />
        <div className="sfs-hiw-btn-vl2" />
        <div className="sfs-hiw-btn-pwr" />

        <div className="sfs-hiw-inner">
          <div className="sfs-hiw-screen">
            {/* status bar */}
            <div className="sfs-hiw-notch-bar">
              <span style={{ fontSize: 10, fontWeight: 700, color: "#111", position: "relative", zIndex: 21 }}>9:41</span>
              <div className="sfs-hiw-notch-pill" />
              <div className="sfs-hiw-status-icons" style={{ position: "relative", zIndex: 21 }}>
                {/* signal bars SVG */}
                <svg width="14" height="10" viewBox="0 0 14 10">
                  <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="#111"/>
                  <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="#111"/>
                  <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="#111"/>
                  <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="#111"/>
                </svg>
                {/* wifi SVG */}
                <svg width="12" height="10" viewBox="0 0 13 10">
                  <path d="M6.5 7.5 L6.5 9.5" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M4 5.5 Q6.5 3.5 9 5.5" stroke="#111" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                  <path d="M1.5 3 Q6.5 -0.5 11.5 3" stroke="#111" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                </svg>
                {/* battery SVG */}
                <svg width="22" height="11" viewBox="0 0 22 11">
                  <rect x="0" y="1" width="19" height="9" rx="2" stroke="#111" strokeWidth="1" fill="none"/>
                  <rect x="19.5" y="3.5" width="2" height="4" rx="1" fill="#111"/>
                  <rect x="1.5" y="2.5" width="15" height="6" rx="1" fill="#111"/>
                </svg>
              </div>
            </div>

            {/* Header nav bar */}
            <div className="sfs-hiw-scan-header">
              {/* back chevron SVG */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              <div style={{ textAlign: "center" }}>
                <div className="sfs-hiw-scan-title">
                  {screenPhase === "scan" ? "Scan QR Code" : "Asset Found"}
                </div>
                <div className="sfs-hiw-scan-sub">
                  {screenPhase === "scan" ? "Align QR within frame" : "ScanForSafe Verified"}
                </div>
              </div>
              <div style={{ width: 18 }} />
            </div>

            {/* SCREEN CONTENT */}
            {screenPhase === "scan" && (
              <div className="sfs-hiw-scan-screen sfs-hiw-fade-in">
                {/* QR tag info card */}
                <div className="sfs-hiw-qr-card">
                  <div className="sfs-hiw-qr-inner">
                    <QRCodeSVG />
                  </div>
                  <div>
                    <div className="sfs-hiw-qr-id">{asset.asset}</div>
                    <div className="sfs-hiw-qr-type">{asset.label}</div>
                    <div className="sfs-hiw-verified">
                      {/* check SVG */}
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Verified
                    </div>
                  </div>
                </div>

                {/* scan viewfinder */}
                <div className="sfs-hiw-scan-area">
                  <div className="sfs-hiw-scan-beam" />
                  <div className="sfs-hiw-scan-corners">
                    <div className="sfs-hiw-corner sfs-hiw-corner-tl" />
                    <div className="sfs-hiw-corner sfs-hiw-corner-tr" />
                    <div className="sfs-hiw-corner sfs-hiw-corner-bl" />
                    <div className="sfs-hiw-corner sfs-hiw-corner-br" />
                  </div>
                  {/* large QR in center */}
                  <div style={{ opacity: 0.25 }}>
                    <QRCodeSVG />
                  </div>
                  <div className="sfs-hiw-scan-hint">Hold steady · Auto-detecting</div>
                </div>
              </div>
            )}

            {screenPhase === "result" && (
              <div className="sfs-hiw-result-screen sfs-hiw-fade-in sfs-hiw-success-flash">
                {/* Logo + verified */}
                <div className="sfs-hiw-logo-section">
                  <div className="sfs-hiw-logo-wrap">
                    <img src="/logo.png" alt="ScanForSafe" />
                  </div>
                  <div className="sfs-hiw-result-badge">
                    <div className="sfs-hiw-result-badge-dot" />
                    Owner Notified via WhatsApp
                  </div>
                  <div className="sfs-hiw-asset-id">{asset.asset}</div>
                </div>

                {/* Action buttons */}
                <div className="sfs-hiw-actions">
                  {/* Call owner */}
                  <button className="sfs-hiw-btn-call">
                    <div className="sfs-hiw-btn-call-ico">
                      {/* phone SVG */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.42 2 2 0 0 1 3.56 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.74 16.92z"/>
                      </svg>
                    </div>
                    <div className="sfs-hiw-btn-call-text">
                      <div className="sfs-hiw-btn-call-label">Call Vehicle Owner</div>
                      <div className="sfs-hiw-btn-call-sub">Number hidden · Secure relay</div>
                    </div>
                  </button>

                  {/* Report emergency */}
                  <button className="sfs-hiw-btn-emergency">
                    <div className="sfs-hiw-btn-emg-ico">
                      {/* alert SVG */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                    </div>
                    <div className="sfs-hiw-btn-call-text">
                      <div className="sfs-hiw-btn-call-label">Report Emergency</div>
                      <div className="sfs-hiw-btn-call-sub">Alert nearest authorities</div>
                    </div>
                  </button>
                </div>

                {/* Hidden data rows */}
                <div className="sfs-hiw-hidden-section">
                  <div className="sfs-hiw-hidden-label">
                    {/* lock SVG */}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    Owner details protected
                  </div>
                  {[
                    { ico: "📱" },
                    { ico: "📧" },
                    { ico: "📍" },
                    { ico: "🚨" },
                  ].map((r, i) => (
                    <div className="sfs-hiw-hidden-row" key={i}>
                      <div className="sfs-hiw-hidden-row-ico" style={{ fontSize: 10 }}>{r.ico}</div>
                      <div className="sfs-hiw-hidden-blur" style={{ width: `${55 + (i * 13) % 30}%` }} />
                      <svg className="sfs-hiw-lock-ico" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                  ))}
                </div>

                {/* Protection active bar */}
                <div className="sfs-hiw-protection-bar">
                  <div className="sfs-hiw-protection-ico">
                    {/* shield SVG */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <polyline points="9 12 11 14 15 10"/>
                    </svg>
                  </div>
                  <div>
                    <div className="sfs-hiw-protection-title">Protection Active</div>
                    <div className="sfs-hiw-protection-sub">We've got it covered 24/7</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PARTICLES ─── */
const PARTICLE_DATA = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: `${(i * 37 + 11) % 100}%`,
  y: `${(i * 53 + 7) % 100}%`,
  size: `${(i % 3) + 2}px`,
  delay: `${(i * 0.7) % 6}s`,
  duration: `${8 + (i % 5)}s`,
  opacity: 0.09 + (i % 4) * 0.07,
}));

function Particles() {
  return (
    <>
      {PARTICLE_DATA.map((p) => (
        <div key={p.id} className="sfs-particle" style={{
          left: p.x, top: p.y,
          width: p.size, height: p.size,
          opacity: p.opacity,
          animation: `particleDrift ${p.duration} ease-in-out infinite ${p.delay}`,
        }} />
      ))}
      <style>{`@keyframes particleDrift{0%,100%{transform:translate(0,0) scale(1);}33%{transform:translate(8px,-11px) scale(1.3);}66%{transform:translate(-6px,7px) scale(0.7);}}`}</style>
    </>
  );
}

/* ─── MESH ─── */
function MeshLines() {
  const lines = [];
  for (let i = 0; i <= 12; i++) {
    lines.push(
      <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} stroke="rgba(46,189,58,.08)" strokeWidth=".8" />,
      <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="600" stroke="rgba(46,189,58,.08)" strokeWidth=".8" />
    );
  }
  lines.push(
    <line key="d1" x1="0" y1="0" x2="600" y2="600" stroke="rgba(46,189,58,.05)" strokeWidth="1" />,
    <line key="d2" x1="600" y1="0" x2="0" y2="600" stroke="rgba(46,189,58,.05)" strokeWidth="1" />
  );
  return <svg className="sfs-mesh" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">{lines}</svg>;
}

/* ─── GLOBE ─── */
function Globe() {
  return (
    <div className="sfs-globe-wrap">
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="gGrad3" cx="38%" cy="32%">
            <stop offset="0%" stopColor="rgba(125,237,136,.28)" />
            <stop offset="55%" stopColor="rgba(46,189,58,.10)" />
            <stop offset="100%" stopColor="rgba(46,189,58,.02)" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="150" r="136" fill="url(#gGrad3)" stroke="rgba(46,189,58,.14)" strokeWidth="1" />
        {[-90,-54,-18,18,54,90].map((lat, i) => {
          const y = 150 + lat;
          const hw = Math.sqrt(Math.max(0, 136*136 - lat*lat));
          return <ellipse key={i} cx="150" cy={y} rx={hw} ry={hw*.26} fill="none" stroke="rgba(46,189,58,.10)" strokeWidth=".7" />;
        })}
        {[0,30,60,90,120,150].map((deg, i) => (
          <ellipse key={i} cx="150" cy="150" rx="40" ry="136" fill="none" stroke="rgba(46,189,58,.08)" strokeWidth=".7" transform={`rotate(${deg} 150 150)`} />
        ))}
        <ellipse cx="150" cy="150" rx="172" ry="44" fill="none" stroke="rgba(46,189,58,.18)" strokeWidth="1.2" strokeDasharray="7 6" style={{animation:"orbitSpin3 14s linear infinite",transformOrigin:"150px 150px"}} />
        <circle cx="322" cy="150" r="7" fill="rgba(46,189,58,.50)" style={{animation:"orbitSpin3 14s linear infinite",transformOrigin:"150px 150px"}} />
        <style>{`@keyframes orbitSpin3{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}`}</style>
      </svg>
    </div>
  );
}

/* ─── SHIELD SVG ─── */
function ShieldBadge() {
  return (
    <svg className="sfs-shield-badge" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="shGrad3" cx="40%" cy="30%">
          <stop offset="0%" stopColor="rgba(125,237,136,.99)" />
          <stop offset="60%" stopColor="rgba(46,189,58,.85)" />
          <stop offset="100%" stopColor="rgba(30,150,36,.75)" />
        </radialGradient>
        <filter id="shBlur2"><feGaussianBlur in="SourceGraphic" stdDeviation="2" /></filter>
      </defs>
      <path d="M55 12 L87 25 L87 52 C87 70 72 84 55 92 C38 84 23 70 23 52 L23 25 Z" fill="rgba(46,189,58,0.22)" filter="url(#shBlur2)" />
      <path d="M55 10 L88 24 L88 52 C88 70 73 84 55 92 C37 84 22 70 22 52 L22 24 Z" fill="url(#shGrad3)" stroke="rgba(255,255,255,.38)" strokeWidth="1.5" />
      <path d="M55 16 L82 28 L82 52 C82 67 69 79 55 86 C41 79 28 67 28 52 L28 28 Z" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
      <polyline points="38,55 50,67 72,43" fill="none" stroke="white" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── SCAN STAGE (asset image + floating cards) ─── */
function ScanStage({ asset, animClass }) {
  return (
    <div className={`sfs-scan-stage ${animClass}`}>
      <div className="sfs-glow" />
      <div className="sfs-ring sfs-ring-1" />
      <div className="sfs-ring sfs-ring-2" />
      <div className="sfs-ring sfs-ring-3" />
      <img src={asset.img} alt={asset.label} className="sfs-asset-img" />
      <div className="sfs-qr-card">
        <div className="sfs-qr-icon">🔐</div>
        <div>
          <h4>{asset.label}</h4>
          <p>QR &amp; NFC Protected<br />Secure Identification</p>
        </div>
      </div>
      <div className="sfs-status-pill">
        <div className="sfs-status-dot" />
        <div>
          <div className="sfs-hero-status-label">Scanning…</div>
          <div className="sfs-status-sub">SFS Shield Active</div>
        </div>
      </div>
    </div>
  );
}

/* ─── COUNTER ─── */
function useCounter(target, duration = 2000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return val;
}

function AnimatedStat({ num, suffix, label }) {
  const val = useCounter(num);
  return (
    <div className="sfs-stat">
      <div className="sfs-stat-num">{val.toLocaleString()}{suffix}</div>
      <div className="sfs-stat-lbl">{label}</div>
    </div>
  );
}

/* ─── FEATURE CARD SVGs ─── */

// Shield/NFC icon — deep navy blue
function SVGSecureQR() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#0B2545" stroke="#0B2545" strokeWidth="0.5"/>
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Radar/tracking icon — teal/cyan
function SVGLiveTracking() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="#0d7a8a"/>
      <path d="M6.34 6.34a8 8 0 0 0 0 11.32" stroke="#0d7a8a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17.66 6.34a8 8 0 0 1 0 11.32" stroke="#0d7a8a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9.17 9.17a4 4 0 0 0 0 5.66" stroke="#0d7a8a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14.83 9.17a4 4 0 0 1 0 5.66" stroke="#0d7a8a" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// Emergency siren icon — vivid red/orange
function SVGEmergency() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="#c0392b" stroke="#c0392b" strokeWidth="0.5"/>
      <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="16.5" r="0.8" fill="white"/>
    </svg>
  );
}

/* ─── MAIN ─── */
export default function ScanForSafeHero() {
  const [active, setActive] = useState(0);
  const [phase,  setPhase]  = useState("scan");

  useEffect(() => {
    // show asset scan for 2.4s, then show phone
    const t0 = setTimeout(() => setPhase("phone"), 2400);
    const iv = setInterval(() => {
      setPhase("phone-out");
      setTimeout(() => {
        setActive((p) => (p + 1) % ASSETS.length);
        setPhase("scan");
      }, 360);
      setTimeout(() => setPhase("phone"), 2800);
    }, 9000); // longer cycle to allow QR→result animation inside phone
    return () => { clearTimeout(t0); clearInterval(iv); };
  }, []);

  const tickerAll = [...TICKER, ...TICKER];
  const c = ASSETS[active];

  const features = [
    {
      ico: <SVGSecureQR />,
      bg: "linear-gradient(135deg, #e8eef8, #d0dcf0)",
      border: "rgba(11,37,69,0.18)",
      h: "Secure QR & NFC",
      p: "Military-grade encrypted ID protection system",
    },
    {
      ico: <SVGLiveTracking />,
      bg: "linear-gradient(135deg, #e0f5f7, #c0eaed)",
      border: "rgba(13,122,138,0.18)",
      h: "Live Tracking",
      p: "Real-time alerts & continuous monitoring",
    },
    {
      ico: <SVGEmergency />,
      bg: "linear-gradient(135deg, #fdecea, #f9d0cc)",
      border: "rgba(192,57,43,0.18)",
      h: "Emergency Access",
      p: "Instant verified owner identification",
    },
  ];

  return (
    <>
      <style>{css}</style>
      <div className="sfs-hero">

        {/* BG */}
        <div className="sfs-bg">
          <MeshLines />
          <Globe />
          <Particles />
        </div>

        {/* GRID */}
        <div className="sfs-grid">

          {/* LEFT */}
          <div className="sfs-left">

            <h1 className="sfs-h1">
              Smart Protection<br />
              That <span className="green">Connects</span><br />
              <span className="green">Your World</span>
            </h1>

            <div className="sfs-badge">
              <div className="sfs-badge-dot" />
              Live Protection Active
              <span className="sfs-badge-sep" />
              <span className="sfs-badge-count">10,000+ Secured</span>
            </div>

            <p className="sfs-sub">
              Protect vehicles, bikes, luggage and valuables with next-generation QR + NFC
              verification. Instant owner alerts and live smart protection — all with a single scan.
            </p>

            <div className="sfs-feats">
              {features.map((f, i) => (
                <div className="sfs-feat" key={i}>
                  <div
                    className="sfs-feat-ico"
                    style={{ background: f.bg, borderColor: f.border }}
                  >
                    {f.ico}
                  </div>
                  <div><h4>{f.h}</h4><p>{f.p}</p></div>
                </div>
              ))}
            </div>

            <div className="sfs-hero-actions">
              <button className="sfs-btn-main">Pre-Registration</button>
              <button className="sfs-btn-sec">
                <div className="sfs-play-ring">▶</div>
                See How It Works
              </button>
            </div>

            <div className="sfs-stats">
              <AnimatedStat num={10000} suffix="+" label="Assets Protected" />
              <div className="sfs-stat-div" />
              <AnimatedStat num={15000} suffix="+" label="Scans Today" />
              <div className="sfs-stat-div" />
              <AnimatedStat num={50} suffix="+" label="Countries" />
              <div className="sfs-stat-div" />
              <div className="sfs-stat">
                <div className="sfs-stat-num">4.9★</div>
                <div className="sfs-stat-lbl">User Rating</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="sfs-right">
            <ShieldBadge />
            <div className="sfs-lock">🔒</div>

            <div className="sfs-alert-badge">
              <div className="sfs-alert-ico">🔔</div>
              <div className="sfs-alert-text">
                <h5>Owner Alerted!</h5>
                <p>Scan detected · 2s ago</p>
              </div>
            </div>

            <div className="sfs-scan-badge">
              <div className="sfs-scan-badge-ico">📲</div>
              <div className="sfs-scan-badge-text">
                <h5>15,234 Scans</h5>
                <p>Today worldwide</p>
              </div>
            </div>

            <div className="sfs-stage" style={{ minHeight: 660 }}>
              {phase === "scan"      && <ScanStage asset={c} animClass="sfs-scan-in"  />}
              {phase === "scan-out"  && <ScanStage asset={c} animClass="sfs-scan-out" />}
              {phase === "phone"     && <HIWPhone  asset={c} animClass="sfs-entering" />}
              {phase === "phone-out" && <HIWPhone  asset={c} animClass="sfs-exiting"  />}
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