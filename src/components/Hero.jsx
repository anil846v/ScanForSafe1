import { useEffect, useState } from "react";

import carImg from "../../assets/car.png";
import bikeImg from "../../assets/bike.png";
import luggageImg from "../../assets/luggage.png";
import qrImg from "../../assets/qr.png";

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
  min-height: calc(100vh - 96px);
  position: relative;
  overflow: hidden;
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
  background: linear-gradient(135deg, #e8f8eb, #d4f5d8);
  display: flex; align-items: center; justify-content: center;
  font-size: 19px; margin-bottom: 11px;
  transition: .32s cubic-bezier(.34,1.46,.64,1);
  box-shadow: 0 4px 10px rgba(46,189,58,0.15);
  border: 1px solid rgba(46,189,58,0.16);
}
.sfs-feat:hover .sfs-feat-ico { transform: scale(1.1) rotate(-5deg); }
.sfs-feat h4 { font-size: 12.5px; font-weight: 700; color: var(--dark); margin-bottom: 5px; }
.sfs-feat p  { font-size: 10.5px; line-height: 1.6; color: #6a8070; }
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
  font-size: 20px; font-weight: 800;
  background: linear-gradient(125deg, #0B2545, #2ebd3a);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  line-height: 1;
}
.sfs-stat-lbl { font-size: 10px; color: var(--mid); margin-top: 3px; font-weight: 500; }
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

/* ══ PREMIUM iPHONE SHELL ══ */
.sfs-phone {
  width: 290px;
  position: relative; z-index: 5;
  animation: phoneRock 9s ease-in-out infinite;
}

/* outer titanium frame */
.sfs-phone-frame {
  background: linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 40%, #111 100%);
  border-radius: 56px;
  padding: 3px;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.10),
    -18px 32px 80px rgba(0,0,0,0.50),
    0 0 0 2px rgba(0,0,0,0.60),
    0 0 60px rgba(46,189,58,0.10),
    inset 0 1px 0 rgba(255,255,255,0.12);
  position: relative;
}

/* titanium side sheen */
.sfs-phone-frame::before {
  content: "";
  position: absolute; inset: 0; border-radius: 56px;
  background: linear-gradient(135deg,
    rgba(255,255,255,0.10) 0%,
    transparent 30%,
    transparent 65%,
    rgba(255,255,255,0.05) 100%);
  pointer-events: none; z-index: 10;
}

/* inner bezel */
.sfs-phone-inner {
  background: #0a0a0a;
  border-radius: 53px;
  padding: 2px;
  overflow: hidden;
}

/* screen glass reflection */
.sfs-phone-glass {
  position: absolute; inset: 0; border-radius: 53px;
  background: linear-gradient(135deg,
    rgba(255,255,255,0.07) 0%,
    transparent 40%,
    transparent 75%,
    rgba(255,255,255,0.03) 100%);
  pointer-events: none; z-index: 20;
}

@keyframes phoneRock {
  0%,100% { transform: perspective(1100px) rotateY(-8deg) rotateX(3deg) translateY(0); }
  33%      { transform: perspective(1100px) rotateY(-6deg) rotateX(2deg) translateY(-7px); }
  66%      { transform: perspective(1100px) rotateY(-9deg) rotateX(4.5deg) translateY(-4px); }
}

/* side buttons */
.sfs-phone-btn-l {
  position: absolute; left: -3px; top: 120px;
  width: 3px; height: 32px; background: #333; border-radius: 2px 0 0 2px;
  box-shadow: inset 1px 0 0 rgba(255,255,255,0.08);
}
.sfs-phone-btn-l2 {
  position: absolute; left: -3px; top: 164px;
  width: 3px; height: 32px; background: #333; border-radius: 2px 0 0 2px;
  box-shadow: inset 1px 0 0 rgba(255,255,255,0.08);
}
.sfs-phone-btn-r {
  position: absolute; right: -3px; top: 140px;
  width: 3px; height: 58px; background: #333; border-radius: 0 2px 2px 0;
  box-shadow: inset -1px 0 0 rgba(255,255,255,0.06);
}

.sfs-notch-row { height: 32px; display: flex; align-items: center; justify-content: center; position: relative; z-index: 5; }
.sfs-notch {
  width: 90px; height: 26px;
  background: #000;
  border-radius: 0 0 20px 20px;
  display: flex; align-items: center; justify-content: center; gap: 5px;
}
.sfs-notch-cam { width: 10px; height: 10px; border-radius: 50%; background: #111; border: 1.5px solid #1a1a1a; box-shadow: 0 0 0 1px rgba(255,255,255,0.04); }
.sfs-notch-pill { width: 48px; height: 12px; background: #0a0a0a; border-radius: 8px; }

.sfs-screen {
  background: linear-gradient(170deg, #050d06 0%, #020904 50%, #060e14 100%);
  border-radius: 0 0 50px 50px;
  overflow: hidden;
  padding: 14px 12px 20px;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  position: relative;
}

/* screen ambient glow */
.sfs-screen::before {
  content: "";
  position: absolute; top: -40px; left: 50%; transform: translateX(-50%);
  width: 200px; height: 120px;
  background: radial-gradient(ellipse, rgba(46,189,58,0.18) 0%, transparent 70%);
  pointer-events: none; z-index: 0;
}

/* status bar */
.sfs-status-bar {
  display: flex; justify-content: space-between; align-items: center;
  width: 100%; padding: 0 6px 10px; position: relative; z-index: 2;
}
.sfs-status-time { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.70); letter-spacing: .02em; }
.sfs-status-icons { display: flex; align-items: center; gap: 4px; }
.sfs-signal { display: flex; align-items: flex-end; gap: 1.5px; }
.sfs-signal-bar { width: 2.5px; background: rgba(255,255,255,0.65); border-radius: 1px; }
.sfs-battery { width: 14px; height: 7px; border: 1px solid rgba(255,255,255,0.55); border-radius: 2px; position: relative; }
.sfs-battery::before { content: ""; position: absolute; right: -3px; top: 50%; transform: translateY(-50%); width: 2px; height: 4px; background: rgba(255,255,255,0.50); border-radius: 1px; }
.sfs-battery-fill { width: 70%; height: 100%; background: #2ebd3a; border-radius: 1px; }

.sfs-verified {
  display: inline-flex; align-items: center; gap: 5px;
  background: rgba(46,189,58,0.12);
  border: 1px solid rgba(46,189,58,0.28);
  border-radius: 999px; padding: 4px 11px;
  font-size: 8px; font-weight: 800;
  color: #4bd557; letter-spacing: .07em; text-transform: uppercase;
  margin-bottom: 11px; position: relative; z-index: 2;
}
.sfs-vdot { width: 5px; height: 5px; border-radius: 50%; background: var(--green); animation: livePulse 1.5s infinite; flex-shrink:0; }

/* avatar with premium glow ring */
.sfs-avatar-wrap {
  position: relative; margin-bottom: 10px; z-index: 2;
}
.sfs-avatar-glow {
  position: absolute; inset: -6px; border-radius: 50%;
  background: conic-gradient(from 0deg, #2ebd3a, #4bd557, #7ded88, #2ebd3a);
  animation: avatarSpin 4s linear infinite;
  filter: blur(1px);
}
@keyframes avatarSpin { to { transform: rotate(360deg); } }
.sfs-avatar-glow-inner {
  position: absolute; inset: 2px; border-radius: 50%;
  background: #050d06;
}
.sfs-avatar {
  width: 66px; height: 66px; border-radius: 50%; object-fit: cover;
  position: relative; z-index: 2;
  border: 2px solid rgba(46,189,58,0.30);
}

.sfs-owner-name {
  color: white; font-size: 17px; font-weight: 800;
  margin-bottom: 2px; font-family: 'Sora', sans-serif;
  letter-spacing: -.4px; position: relative; z-index: 2;
}
.sfs-owner-label { color: #7ded88; font-size: 10.5px; margin-bottom: 14px; font-weight: 500; position: relative; z-index: 2; }

.sfs-divider {
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(46,189,58,0.20), transparent);
  margin-bottom: 10px; position: relative; z-index: 2;
}

/* info rows */
.sfs-rows-wrap { width: 100%; text-align: left; position: relative; z-index: 2; }
.sfs-row {
  display: flex; align-items: center; gap: 7px;
  padding: 5px 0; border-bottom: 1px solid rgba(46,189,58,0.07);
}
.sfs-row:last-child { border-bottom: none; }
.sfs-row-ico {
  width: 26px; height: 26px; border-radius: 8px;
  background: rgba(46,189,58,0.09);
  border: 1px solid rgba(46,189,58,0.14);
  display: flex; align-items: center; justify-content: center;
  font-size: 10.5px; flex-shrink: 0;
  transition: .2s;
}
.sfs-row:hover .sfs-row-ico { background: rgba(46,189,58,0.18); transform: scale(1.08); }
.sfs-row-lbl { font-size: 7px; color: #3a7050; letter-spacing: .07em; text-transform: uppercase; font-weight: 700; }
.sfs-row-val { font-size: 9.5px; color: #e0f7e4; font-weight: 600; }

/* home indicator */
.sfs-home-ind {
  width: 100px; height: 4px; background: rgba(255,255,255,0.20);
  border-radius: 2px; margin: 14px auto 0;
  position: relative; z-index: 2;
}

/* Scanline */
.sfs-scanline {
  position: absolute; left: -10%; width: 120%; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(46,189,58,0.28), rgba(125,237,136,0.85), rgba(255,255,255,0.45), rgba(125,237,136,0.85), rgba(46,189,58,0.28), transparent);
  box-shadow: 0 0 14px rgba(46,189,58,0.45), 0 0 28px rgba(46,189,58,0.18);
  z-index: 8;
  animation: scanMove 2.8s cubic-bezier(.45,0,.55,1) infinite;
}
@keyframes scanMove {
  0%   { transform: translateY(-165px); opacity: 0; }
  6%   { opacity: 1; }
  94%  { opacity: 1; }
  100% { transform: translateY(165px); opacity: 0; }
}

/* ══ SCAN STAGE ══ */
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
  background: linear-gradient(90deg, rgba(0,0,0,0.18) 0%, transparent 7%, transparent 93%, rgba(0,0,0,0.18) 100%);
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

  /* Typography */
  .sfs-h1 { font-size: 38px; letter-spacing: -1.8px; line-height: 1.0; margin-bottom: 0; }
  .sfs-h1 .outline { -webkit-text-stroke-width: 1.5px; }
  .sfs-sub { font-size: 13.5px; line-height: 1.78; margin-bottom: 20px; }

  /* Badge below heading */
  .sfs-badge {
    font-size: 8.5px; margin-top: 12px; margin-bottom: 18px;
    padding: 7px 12px 7px 9px; border-radius: 10px;
  }
  .sfs-badge-sep { height: 12px; }
  .sfs-badge-count { font-size: 8.5px; }

  /* Feature cards — horizontal row on mobile */
  .sfs-feats { flex-direction: column; gap: 9px; margin-bottom: 20px; }
  .sfs-feat {
    padding: 14px 14px; border-radius: 16px;
    flex-direction: row; align-items: center; gap: 13px;
  }
  .sfs-feat-ico { margin-bottom: 0; flex-shrink: 0; width: 40px; height: 40px; border-radius: 12px; }
  .sfs-feat h4 { font-size: 13px; margin-bottom: 3px; }
  .sfs-feat p  { font-size: 11px; }

  /* Buttons */
  .sfs-hero-actions { flex-direction: column; gap: 10px; margin-bottom: 20px; align-items: stretch; }
  .sfs-btn-main { padding: 15px 20px; font-size: 14px; border-radius: 13px; justify-content: center; }
  .sfs-btn-sec  { padding: 14px 20px; font-size: 13.5px; border-radius: 13px; justify-content: center; }

  /* Stats */
  .sfs-stats { gap: 12px; flex-wrap: wrap; }
  .sfs-stat-num { font-size: 18px; }
  .sfs-stat-lbl { font-size: 9.5px; }
  .sfs-stat-div { height: 28px; }

  /* Right section — bigger, more breathing room */
  .sfs-right { min-height: 540px; overflow: visible; }
  .sfs-stage { min-height: 540px !important; }

  /* Phone — significantly bigger on mobile */
  .sfs-phone { width: 265px; }
  .sfs-phone-frame { border-radius: 50px; }
  .sfs-phone-inner { border-radius: 47px; }
  .sfs-screen { border-radius: 0 0 46px 46px; padding: 13px 11px 18px; }
  .sfs-notch { width: 78px; height: 23px; border-radius: 0 0 18px 18px; }
  .sfs-notch-cam { width: 9px; height: 9px; }
  .sfs-notch-row { height: 29px; }
  .sfs-status-bar { padding: 0 4px 8px; }
  .sfs-status-time { font-size: 9.5px; }
  .sfs-avatar { width: 62px; height: 62px; }
  .sfs-avatar-wrap { margin-bottom: 9px; }
  .sfs-verified { font-size: 7.5px; margin-bottom: 9px; padding: 4px 10px; }
  .sfs-owner-name { font-size: 16px; }
  .sfs-owner-label { font-size: 10px; margin-bottom: 12px; }
  .sfs-row { padding: 4.5px 0; }
  .sfs-row-ico { width: 25px; height: 25px; font-size: 10px; border-radius: 8px; }
  .sfs-row-lbl { font-size: 6.5px; }
  .sfs-row-val { font-size: 9px; }
  .sfs-home-ind { margin-top: 12px; width: 80px; }

  /* Right floating elements */
  .sfs-shield-badge { width: 72px; height: 72px; top: 16px; right: 10px; }
  .sfs-lock { width: 46px; height: 46px; font-size: 20px; right: -4px; }
  .sfs-ring-1 { width: 280px; height: 280px; }
  .sfs-ring-2, .sfs-ring-3 { display: none; }

  /* Floating cards — well positioned, not clipped */
  .sfs-alert-badge { left: 2px; top: 76px; padding: 8px 11px; border-radius: 13px; transform: none; }
  .sfs-alert-ico { width: 30px; height: 30px; font-size: 14px; border-radius: 9px; }
  .sfs-alert-text h5 { font-size: 10.5px; }
  .sfs-alert-text p  { font-size: 8.5px; }

  .sfs-scan-badge { right: 2px; bottom: 80px; padding: 9px 13px; border-radius: 12px; transform: none; }
  .sfs-scan-badge-ico { font-size: 15px; }
  .sfs-scan-badge-text h5 { font-size: 10.5px; }
  .sfs-scan-badge-text p  { font-size: 8.5px; }

  /* Scan stage */
  .sfs-asset-img { width: 300px; }
  .sfs-qr-card {
    right: -6px; bottom: 68px; min-width: 185px;
    padding: 10px 13px; border-radius: 17px; transform: none;
  }
  .sfs-qr-icon { width: 44px; height: 44px; font-size: 22px; border-radius: 11px; }
  .sfs-qr-card h4 { font-size: 12px; }
  .sfs-qr-card p  { font-size: 9px; }

  .sfs-status-pill { top: 52px; left: 4px; padding: 8px 12px; border-radius: 12px; transform: none; }
  .sfs-status-dot { width: 6px; height: 6px; }
  .sfs-hero-status-label { font-size: 10.5px; }
  .sfs-status-sub { font-size: 8.5px; }

  /* Ticker */
  .sfs-ticker { border-radius: 0 0 18px 18px; }
  .sfs-ticker-label { padding: 0 12px; font-size: 8px; letter-spacing: 1.5px; height: 42px; }
  .sfs-ti { font-size: 11px; padding: 0 14px; height: 42px; }

  /* BG */
  .sfs-globe-wrap { width: 200px; height: 200px; bottom: -60px; left: -50px; }
  .sfs-mesh { width: 300px; height: 300px; top: -30px; right: -30px; }
  .sfs-left { padding-right: 0; }
}

@media(max-width:380px){
  .sfs-h1 { font-size: 31px; letter-spacing: -1.2px; }
  .sfs-grid { padding: 22px 14px 16px; }
  .sfs-phone { width: 232px; }
  .sfs-phone-frame { border-radius: 44px; }
  .sfs-phone-inner { border-radius: 41px; }
  .sfs-screen { border-radius: 0 0 40px 40px; }
  .sfs-asset-img { width: 250px; }
  .sfs-right { min-height: 460px; }
  .sfs-shield-badge { width: 60px; height: 60px; top: 10px; right: 6px; }
  .sfs-lock { display: none; }
  .sfs-alert-badge { transform: scale(0.88); transform-origin: top left; }
  .sfs-scan-badge { transform: scale(0.88); transform-origin: bottom right; }
}
`;

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

/* ─── PREMIUM PHONE ─── */
function PhoneDisplay({ asset, animClass }) {
  const rows = [
    { ico: "📞", lbl: "Phone",      val: asset.phone },
    { ico: "📧", lbl: "Email",      val: asset.email },
    { ico: "📍", lbl: "Address",    val: asset.address },
    { ico: "🆔", lbl: "Asset ID",   val: asset.asset },
    { ico: "🚨", lbl: "Emergency",  val: asset.emergency },
    { ico: "📅", lbl: "Registered", val: asset.registered },
  ];
  return (
    <div className={`sfs-phone ${animClass}`}>
      <div className="sfs-phone-frame">
        <div className="sfs-phone-btn-l" />
        <div className="sfs-phone-btn-l2" />
        <div className="sfs-phone-btn-r" />
        <div className="sfs-phone-glass" />
        <div className="sfs-phone-inner">
          <div className="sfs-notch-row">
            <div className="sfs-notch">
              <div className="sfs-notch-cam" />
              <div className="sfs-notch-pill" />
            </div>
          </div>
          <div className="sfs-screen">
            {/* status bar */}
            <div className="sfs-status-bar">
              <span className="sfs-status-time">9:41</span>
              <div className="sfs-status-icons">
                <div className="sfs-signal">
                  {[6,9,12,15].map((h,i) => <div key={i} className="sfs-signal-bar" style={{height:`${h}px`}} />)}
                </div>
                <div className="sfs-battery"><div className="sfs-battery-fill" /></div>
              </div>
            </div>
            <div className="sfs-verified"><div className="sfs-vdot" /> Verified Owner</div>
            <div className="sfs-avatar-wrap">
              <div className="sfs-avatar-glow" />
              <div className="sfs-avatar-glow-inner" />
              <img src={asset.avatar} alt="Owner" className="sfs-avatar" />
            </div>
            <div className="sfs-owner-name">{asset.owner}</div>
            <div className="sfs-owner-label">{asset.label}</div>
            <div className="sfs-divider" />
            <div className="sfs-rows-wrap">
              {rows.map((r) => (
                <div className="sfs-row" key={r.lbl}>
                  <div className="sfs-row-ico">{r.ico}</div>
                  <div>
                    <div className="sfs-row-lbl">{r.lbl}</div>
                    <div className="sfs-row-val">{r.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sfs-home-ind" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SCAN STAGE ─── */
function ScanStage({ asset, animClass }) {
  return (
    <div className={`sfs-scan-stage ${animClass}`}>
      <div className="sfs-glow" />
      <div className="sfs-ring sfs-ring-1" />
      <div className="sfs-ring sfs-ring-2" />
      <div className="sfs-ring sfs-ring-3" />
      <img src={asset.img} alt={asset.label} className="sfs-asset-img" />
      <div className="sfs-scanline" />
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

/* ─── MAIN ─── */
export default function ScanForSafeHero() {
  const [active, setActive] = useState(0);
  const [phase,  setPhase]  = useState("scan");

  useEffect(() => {
    const t0 = setTimeout(() => setPhase("phone"), 2400);
    const iv = setInterval(() => {
      setPhase("phone-out");
      setTimeout(() => {
        setActive((p) => (p + 1) % ASSETS.length);
        setPhase("scan");
      }, 360);
      setTimeout(() => setPhase("phone"), 2800);
    }, 7800);
    return () => { clearTimeout(t0); clearInterval(iv); };
  }, []);

  const tickerAll = [...TICKER, ...TICKER];
  const c = ASSETS[active];

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
              {[
                { ico: "🛡️", h: "Secure QR & NFC",  p: "Military-grade encrypted ID protection system" },
                { ico: "📡", h: "Live Tracking",      p: "Real-time alerts & continuous monitoring" },
                { ico: "🚨", h: "Emergency Access",   p: "Instant verified owner identification" },
              ].map((f) => (
                <div className="sfs-feat" key={f.h}>
                  <div className="sfs-feat-ico">{f.ico}</div>
                  <div><h4>{f.h}</h4><p>{f.p}</p></div>
                </div>
              ))}
            </div>

            <div className="sfs-hero-actions">
              <button className="sfs-btn-main">🔐 Protect Your Assets</button>
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
              {phase === "scan"      && <ScanStage    asset={c} animClass="sfs-scan-in"  />}
              {phase === "scan-out"  && <ScanStage    asset={c} animClass="sfs-scan-out" />}
              {phase === "phone"     && <PhoneDisplay asset={c} animClass="sfs-entering" />}
              {phase === "phone-out" && <PhoneDisplay asset={c} animClass="sfs-exiting"  />}
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