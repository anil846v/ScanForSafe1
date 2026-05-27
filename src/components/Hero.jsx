import { useEffect, useState } from "react";

import carImg from "../../assets/car.png";
import bikeImg from "../../assets/bike.png";
import luggageImg from "../../assets/luggage.png";
import qrImg from "../../assets/qr.png";

/* ─────────────────────────────────────────────────────────────────
   TICKER DATA
───────────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────────
   ASSETS
───────────────────────────────────────────────────────────────── */
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
    color: "#22c55e",
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
    color: "#4ade80",
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
    color: "#86efac",
  },
];

/* ─────────────────────────────────────────────────────────────────
   CSS
───────────────────────────────────────────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }

:root {
  --g1: #22c55e;
  --g2: #16a34a;
  --g3: #4ade80;
  --g4: #dcfce7;
  --bg: #f0fdf4;
  --dark: #071a0b;
  --mid: #4b6357;
  --phone-bg: #061009;
}

/* ══ ROOT HERO ══ */
.sfs-hero {
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--dark);
}

/* ══ BACKGROUND ══ */
.sfs-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.sfs-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 1000px 700px at 115% 10%, rgba(34,197,94,.13) 0%, transparent 60%),
    radial-gradient(ellipse 700px 600px at -15% 100%, rgba(34,197,94,.09) 0%, transparent 58%),
    radial-gradient(ellipse 400px 300px at 60% 50%, rgba(134,239,172,.05) 0%, transparent 70%),
    linear-gradient(165deg, #f0fdf4 0%, #ecfdf5 45%, #f7fef9 100%);
}

.sfs-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(34,197,94,.35);
  pointer-events: none;
}

.sfs-waves {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.sfs-mesh {
  position: absolute;
  top: -80px; right: -80px;
  width: 600px; height: 600px;
  opacity: .45;
  animation: meshRotate 40s linear infinite;
}
@keyframes meshRotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.sfs-globe-wrap {
  position: absolute;
  bottom: -90px; left: -80px;
  width: 340px; height: 340px;
  animation: globePulse 7s ease-in-out infinite;
  z-index: 1;
}
@keyframes globePulse {
  0%,100% { transform: scale(1) rotate(-5deg); opacity:.50; }
  50%      { transform: scale(1.05) rotate(-2deg); opacity:.68; }
}

/* ══ LAYOUT ══ */
.sfs-grid {
  flex: 1;
  max-width: 1440px; width: 100%; margin: 0 auto;
  display: grid; grid-template-columns: 46% 54%;
  align-items: center;
  padding: 68px 88px 52px;
  position: relative; z-index: 2;
}

/* ══ LEFT ══ */
.sfs-left { padding-right: 32px; }

.sfs-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(34,197,94,.22);
  border-radius: 999px;
  padding: 7px 18px 7px 12px;
  margin-bottom: 24px;
  font-size: 10px; font-weight: 800;
  letter-spacing: .10em; color: #15803d;
  text-transform: uppercase;
  box-shadow: 0 2px 20px rgba(34,197,94,.14), 0 0 0 5px rgba(34,197,94,.06);
  animation: slideInLeft .7s cubic-bezier(.22,1,.36,1) both;
}
.sfs-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--g1);
  animation: livePulse 2s ease-out infinite;
}
@keyframes livePulse {
  0%   { box-shadow: 0 0 0 0 rgba(34,197,94,.7); }
  70%  { box-shadow: 0 0 0 9px rgba(34,197,94,0); }
  100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
}

.sfs-h1 {
  font-family: 'Sora', sans-serif;
  font-size: 76px; line-height: .90;
  letter-spacing: -4.5px; font-weight: 900;
  color: var(--dark); margin-bottom: 20px;
  animation: slideInLeft .85s .08s cubic-bezier(.22,1,.36,1) both;
}
.sfs-h1 .green {
  background: linear-gradient(125deg, #15803d 0%, #22c55e 55%, #4ade80 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}
.sfs-h1 .outline {
  color: transparent;
  -webkit-text-stroke: 2.5px rgba(34,197,94,.28);
  animation: outlinePulse 4s ease-in-out infinite 0.5s;
}
@keyframes outlinePulse {
  0%,100% { -webkit-text-stroke-color: rgba(34,197,94,.28); }
  50%      { -webkit-text-stroke-color: rgba(34,197,94,.50); }
}

.sfs-sub {
  font-size: 15.5px; line-height: 1.88; color: var(--mid);
  max-width: 510px; margin-bottom: 32px;
  font-weight: 400;
  animation: slideInLeft .9s .16s cubic-bezier(.22,1,.36,1) both;
}

/* Feature cards */
.sfs-feats { display: flex; gap: 12px; margin-bottom: 32px; }
.sfs-feat {
  flex: 1;
  background: rgba(255,255,255,.85);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(34,197,94,.10);
  border-radius: 22px; padding: 22px 16px 20px;
  box-shadow: 0 2px 20px rgba(0,0,0,.04), 0 0 0 1px rgba(255,255,255,.6);
  position: relative; overflow: hidden;
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  cursor: default;
}
.sfs-feat::before {
  content: "";
  position: absolute; top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(34,197,94,.4), transparent);
  transform: scaleX(0); transform-origin: center;
  transition: .35s ease;
}
.sfs-feat::after {
  content: "";
  position: absolute; inset-inline: 0; bottom: 0;
  height: 3px;
  background: linear-gradient(90deg, #22c55e, #16a34a);
  transform: scaleX(0); transform-origin: left;
  transition: .35s ease;
  border-radius: 0 0 22px 22px;
}
.sfs-feat:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 22px 48px rgba(34,197,94,.15), 0 0 0 1px rgba(34,197,94,.12); }
.sfs-feat:hover::before, .sfs-feat:hover::after { transform: scaleX(1); }
.sfs-feat-ico {
  width: 46px; height: 46px; border-radius: 14px;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  display: flex; align-items: center; justify-content: center;
  font-size: 21px; margin-bottom: 13px;
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  box-shadow: 0 4px 12px rgba(34,197,94,.18);
}
.sfs-feat:hover .sfs-feat-ico { transform: scale(1.12) rotate(-6deg); box-shadow: 0 8px 20px rgba(34,197,94,.25); }
.sfs-feat h4 { font-size: 13.5px; font-weight: 700; color: var(--dark); margin-bottom: 6px; }
.sfs-feat p  { font-size: 11px; line-height: 1.65; color: #688070; }
.sfs-feat:nth-child(1) { animation: fadeUp .6s .28s both; }
.sfs-feat:nth-child(2) { animation: fadeUp .6s .40s both; }
.sfs-feat:nth-child(3) { animation: fadeUp .6s .52s both; }

/* Buttons */
.sfs-actions {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 28px;
  animation: fadeUp .6s .62s both;
}
.sfs-btn-main {
  border: none;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 60%, #15803d 100%);
  color: white; padding: 17px 34px; border-radius: 16px;
  font-size: 15px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 9px;
  box-shadow: 0 12px 32px rgba(34,197,94,.35), 0 2px 8px rgba(34,197,94,.20);
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  position: relative; overflow: hidden;
  letter-spacing: -.01em;
}
.sfs-btn-main::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,.18) 0%, transparent 60%);
  pointer-events: none;
}
.sfs-btn-main:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 20px 48px rgba(34,197,94,.42); }
.sfs-btn-main:active { transform: translateY(-1px) scale(.99); }
.sfs-btn-sec {
  border: 1.5px solid rgba(34,197,94,.25);
  background: rgba(255,255,255,.80);
  backdrop-filter: blur(12px);
  padding: 16px 28px; border-radius: 16px;
  font-size: 14.5px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; color: var(--dark); transition: .28s ease;
}
.sfs-btn-sec:hover { transform: translateY(-4px); border-color: rgba(34,197,94,.50); box-shadow: 0 12px 28px rgba(34,197,94,.10); }
.sfs-play-ring {
  width: 30px; height: 30px; border-radius: 50%;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; color: white;
  box-shadow: 0 4px 12px rgba(34,197,94,.30);
  transition: .28s;
}
.sfs-btn-sec:hover .sfs-play-ring { transform: scale(1.12) rotate(8deg); }

/* Stats row */
.sfs-stats {
  display: flex; gap: 24px; align-items: center;
  margin-bottom: 22px;
  animation: fadeUp .6s .72s both;
}
.sfs-stat { display: flex; flex-direction: column; }
.sfs-stat-num {
  font-family: 'Sora', sans-serif;
  font-size: 22px; font-weight: 800;
  background: linear-gradient(125deg, #15803d, #22c55e);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  line-height: 1;
}
.sfs-stat-lbl { font-size: 10.5px; color: var(--mid); margin-top: 3px; font-weight: 500; }
.sfs-stat-div { width: 1px; height: 36px; background: rgba(34,197,94,.18); }

/* Scroll indicator */
.sfs-scroll {
  display: flex; align-items: center; gap: 10px;
  animation: fadeUp .6s .82s both; opacity: .55;
}
.sfs-scroll-mouse {
  width: 22px; height: 34px;
  border: 2px solid rgba(34,197,94,.40);
  border-radius: 11px;
  display: flex; justify-content: center;
}
.sfs-scroll-wheel {
  width: 4px; height: 8px;
  background: var(--g1); border-radius: 2px;
  margin-top: 5px;
  animation: scrollWheel 1.8s ease-in-out infinite;
}
@keyframes scrollWheel {
  0%,100% { transform: translateY(0); opacity: 1; }
  50%      { transform: translateY(8px); opacity: .25; }
}
.sfs-scroll span { font-size: 10.5px; color: var(--mid); letter-spacing: .07em; font-weight: 500; }

/* ══ RIGHT ══ */
.sfs-right {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  min-height: 740px;
}
.sfs-shield {
  position: absolute;
  top: 50px; right: 20px;
  width: 116px; height: 116px;
  z-index: 10;
  animation: shieldFloat 5s ease-in-out infinite;
  filter: drop-shadow(0 16px 32px rgba(34,197,94,.26));
}
@keyframes shieldFloat {
  0%,100% { transform: translateY(0) rotate(3deg) scale(1); }
  50%      { transform: translateY(-15px) rotate(-1deg) scale(1.03); }
}
.sfs-lock {
  position: absolute;
  right: -4px; top: 50%;
  transform: translateY(-50%);
  width: 58px; height: 58px;
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(12px);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 25px;
  box-shadow: 0 8px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(34,197,94,.12);
  z-index: 10;
  animation: lockFloat 5s ease-in-out infinite 1s;
}
@keyframes lockFloat {
  0%,100% { transform: translateY(-50%) scale(1); }
  50%      { transform: translateY(calc(-50% - 11px)) scale(1.06); }
}
.sfs-alert-badge {
  position: absolute;
  left: 8px; top: 105px;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 10px 14px;
  box-shadow: 0 8px 28px rgba(0,0,0,.09), 0 0 0 1px rgba(34,197,94,.08);
  z-index: 10;
  display: flex; align-items: center; gap: 9px;
  animation: alertFloat 6s ease-in-out infinite .8s;
}
@keyframes alertFloat {
  0%,100% { transform: translateY(0) rotate(-1deg); }
  50%      { transform: translateY(-9px) rotate(0deg); }
}
.sfs-alert-ico {
  width: 34px; height: 34px; border-radius: 10px;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; flex-shrink: 0;
}
.sfs-alert-text h5 { font-size: 11.5px; font-weight: 700; color: var(--dark); }
.sfs-alert-text p  { font-size: 9.5px; color: var(--mid); margin-top: 2px; }
.sfs-scan-badge {
  position: absolute;
  right: 15px; bottom: 120px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border-radius: 14px;
  padding: 10px 16px;
  z-index: 10;
  box-shadow: 0 10px 28px rgba(34,197,94,.35);
  animation: scanBadgeFloat 4.5s ease-in-out infinite 1.5s;
  color: white;
  display: flex; align-items: center; gap: 8px;
}
@keyframes scanBadgeFloat {
  0%,100% { transform: translateY(0) rotate(1deg); }
  50%      { transform: translateY(-8px) rotate(-1deg); }
}
.sfs-scan-badge-ico { font-size: 18px; }
.sfs-scan-badge-text h5 { font-size: 11.5px; font-weight: 800; }
.sfs-scan-badge-text p  { font-size: 9px; opacity: .85; margin-top: 1px; }

.sfs-stage {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  width: 100%;
}

/* Radial rings */
.sfs-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(34,197,94,.12);
  pointer-events: none;
  z-index: 1;
}
.sfs-ring-1 { width: 360px; height: 360px; animation: ringPulse 4s ease-in-out infinite; }
.sfs-ring-2 { width: 500px; height: 500px; animation: ringPulse 4s ease-in-out infinite .8s; }
.sfs-ring-3 { width: 640px; height: 640px; animation: ringPulse 4s ease-in-out infinite 1.6s; }
@keyframes ringPulse {
  0%,100% { opacity: .6; transform: scale(.96); }
  50%      { opacity: 1; transform: scale(1.04); }
}
.sfs-glow {
  position: absolute;
  width: 460px; height: 460px; border-radius: 50%;
  background: radial-gradient(circle, rgba(34,197,94,.18) 0%, rgba(34,197,94,.07) 40%, transparent 70%);
  filter: blur(4px);
  animation: glowPulse 4.5s ease-in-out infinite;
  z-index: 1;
}
@keyframes glowPulse {
  0%,100% { transform: scale(.88); opacity: .6; }
  50%      { transform: scale(1.08); opacity: 1; }
}

/* ══ PHONE ══ */
.sfs-phone {
  width: 300px;
  background: #0a1510;
  border-radius: 52px; padding: 8px;
  position: relative; z-index: 5;
  box-shadow:
    -20px 36px 90px rgba(0,0,0,.45),
    0 0 0 1px rgba(255,255,255,.06),
    0 0 80px rgba(34,197,94,.12),
    inset 0 1px 0 rgba(255,255,255,.08);
  animation: phoneRock 9s ease-in-out infinite;
}
.sfs-phone::before {
  content: "";
  position: absolute; inset: 0; border-radius: 52px;
  background: linear-gradient(135deg, rgba(255,255,255,.08) 0%, transparent 55%);
  pointer-events: none; z-index: 6;
}
.sfs-phone::after {
  content: "";
  position: absolute; inset: 0; border-radius: 52px;
  background: linear-gradient(to bottom, transparent 70%, rgba(34,197,94,.06));
  pointer-events: none; z-index: 6;
}
@keyframes phoneRock {
  0%,100% { transform: perspective(1200px) rotateY(-9deg) rotateX(3.5deg) translateY(0); }
  33%      { transform: perspective(1200px) rotateY(-7deg) rotateX(2deg) translateY(-8px); }
  66%      { transform: perspective(1200px) rotateY(-10deg) rotateX(5deg) translateY(-4px); }
}
.sfs-notch-row { height: 34px; display: flex; align-items: center; justify-content: center; }
.sfs-notch { width: 82px; height: 10px; background: #000; border-radius: 999px; }
.sfs-screen {
  background: linear-gradient(175deg, #071208, #020604, #061009);
  border-radius: 38px; overflow: hidden;
  padding: 16px 13px 18px;
  display: flex; flex-direction: column; align-items: center; text-align: center;
}
.sfs-verified {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(34,197,94,.12);
  border: 1px solid rgba(34,197,94,.25);
  border-radius: 999px; padding: 4px 12px;
  font-size: 8px; font-weight: 800;
  color: #4ade80; letter-spacing: .07em; text-transform: uppercase;
  margin-bottom: 12px;
}
.sfs-vdot { width: 5px; height: 5px; border-radius: 50%; background: var(--g1); animation: livePulse 1.5s infinite; }
.sfs-avatar {
  width: 70px; height: 70px; border-radius: 50%; object-fit: cover;
  margin-bottom: 11px;
  border: 3px solid rgba(34,197,94,.40);
  box-shadow: 0 0 24px rgba(34,197,94,.30), 0 0 0 6px rgba(34,197,94,.08);
}
.sfs-owner-name {
  color: white; font-size: 18px; font-weight: 800;
  margin-bottom: 3px; font-family: 'Sora', sans-serif;
  letter-spacing: -.4px;
}
.sfs-owner-label { color: #86efac; font-size: 11px; margin-bottom: 16px; font-weight: 500; }
.sfs-divider {
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(34,197,94,.15), transparent);
  margin-bottom: 10px;
}
.sfs-row {
  display: flex; align-items: center; gap: 8px;
  padding: 5.5px 0; border-bottom: 1px solid rgba(34,197,94,.06);
  width: 100%; text-align: left;
}
.sfs-row:last-child { border-bottom: none; }
.sfs-row-ico {
  width: 27px; height: 27px; border-radius: 8px;
  background: rgba(34,197,94,.09);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; flex-shrink: 0;
  transition: .2s;
}
.sfs-row:hover .sfs-row-ico { background: rgba(34,197,94,.18); transform: scale(1.08); }
.sfs-row-lbl { font-size: 7.5px; color: #4a8060; letter-spacing: .07em; text-transform: uppercase; font-weight: 600; }
.sfs-row-val { font-size: 10px; color: #bbf7d0; font-weight: 600; }

/* Scanline */
.sfs-scanline {
  position: absolute; left: -10%; width: 120%; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(34,197,94,.3), rgba(134,239,172,.9), rgba(255,255,255,.5), rgba(134,239,172,.9), rgba(34,197,94,.3), transparent);
  box-shadow: 0 0 16px rgba(34,197,94,.5), 0 0 32px rgba(34,197,94,.2);
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
  width: 480px; max-width: none;
  position: relative; z-index: 3;
  object-fit: contain;
  filter: drop-shadow(0 32px 64px rgba(0,0,0,.18)) drop-shadow(0 0 40px rgba(34,197,94,.24));
  animation: assetHover 4.5s ease-in-out infinite;
}
@keyframes assetHover {
  0%,100% { transform: translateY(0) scale(1.03) rotateY(-5deg); }
  50%      { transform: translateY(-15px) scale(1.05) rotateY(-3deg); }
}
.sfs-qr-card {
  position: absolute; right: -24px; bottom: 88px;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(14px);
  border-radius: 22px; padding: 15px 18px;
  box-shadow: 0 20px 56px rgba(0,0,0,.12), 0 0 0 1px rgba(34,197,94,.10);
  z-index: 10; display: flex; align-items: center; gap: 12px;
  min-width: 224px;
  transform: perspective(600px) rotateY(-10deg);
  animation: cardBob 5s ease-in-out infinite;
}
@keyframes cardBob {
  0%,100% { transform: perspective(600px) rotateY(-10deg) translateY(0); }
  50%      { transform: perspective(600px) rotateY(-13deg) translateY(-9px); }
}
.sfs-qr-icon {
  width: 54px; height: 54px; border-radius: 14px;
  background: linear-gradient(135deg, #dcfce7, #bbf7d0);
  display: flex; align-items: center; justify-content: center;
  font-size: 26px; flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(34,197,94,.20);
}
.sfs-qr-card h4 { font-size: 13px; font-weight: 800; color: var(--dark); margin-bottom: 4px; }
.sfs-qr-card p  { font-size: 10px; color: #5a7060; line-height: 1.4; }
.sfs-status-pill {
  position: absolute; top: 72px; left: 8px;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(14px);
  border-radius: 16px; padding: 10px 15px;
  box-shadow: 0 8px 28px rgba(0,0,0,.09), 0 0 0 1px rgba(34,197,94,.08);
  z-index: 10; display: flex; align-items: center; gap: 8px;
  animation: pillFloat 6s ease-in-out infinite .5s;
}
@keyframes pillFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}
.sfs-status-dot   { width: 8px; height: 8px; border-radius: 50%; background: var(--g1); animation: livePulse 1.8s infinite; }
.sfs-status-label { font-size: 11.5px; font-weight: 800; color: var(--dark); }
.sfs-status-sub   { font-size: 9px; color: var(--mid); margin-top: 1px; }

/* ══ TRANSITIONS ══ */
.sfs-entering  { animation: enterScene .85s cubic-bezier(.22,1,.36,1) both; }
.sfs-exiting   { animation: exitScene .35s ease forwards; }
.sfs-scan-in   { animation: scanIn .45s ease both; }
.sfs-scan-out  { animation: scanOut .30s ease forwards; }
@keyframes enterScene {
  from { opacity:0; transform: scale(.62) translateY(68px); filter:blur(10px); }
  to   { opacity:1; transform: none; filter:blur(0); }
}
@keyframes exitScene {
  from { opacity:1; transform: none; }
  to   { opacity:0; transform: scale(.86) translateY(-44px); filter:blur(6px); }
}
@keyframes scanIn  { from { opacity:0; transform:scale(.92) translateY(20px); } to { opacity:1; transform:none; } }
@keyframes scanOut { from { opacity:1; } to { opacity:0; transform:scale(.90) translateY(-20px); } }
@keyframes slideInLeft { from { opacity:0; transform: translateX(-36px); } to { opacity:1; transform: none; } }
@keyframes fadeUp      { from { opacity:0; transform: translateY(22px);  } to { opacity:1; transform: none; } }

/* ══ TICKER ══ */
.sfs-ticker {
  width:100%; position:relative; z-index:10; overflow:hidden;
  background: linear-gradient(90deg, #15803d 0%, #166534 35%, #15803d 70%, #166534 100%);
  box-shadow: 0 -1px 0 rgba(34,197,94,.15);
}
.sfs-ticker::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,.15) 0%, transparent 8%, transparent 92%, rgba(0,0,0,.15) 100%);
  z-index: 2; pointer-events: none;
}
.sfs-ticker-inner { display:flex; position: relative; z-index: 1; }
.sfs-ticker-label {
  flex-shrink:0; display:flex; align-items:center; padding:0 22px;
  background: rgba(0,0,0,.18); border-right: 1px solid rgba(255,255,255,.15);
  font-size:9px; font-weight:900; color:white; letter-spacing:2.5px;
  text-transform:uppercase; height:48px; white-space: nowrap;
}
.sfs-ticker-track { display:flex; animation: tickMove 36s linear infinite; }
.sfs-ticker-track:hover { animation-play-state: paused; }
@keyframes tickMove { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
.sfs-ti {
  display:flex; align-items:center; height:48px;
  padding:0 24px; font-size:12px; font-weight:600;
  color:rgba(255,255,255,.92); white-space:nowrap; gap:18px;
}
.sfs-td { width:4px; height:4px; border-radius:50%; background:rgba(255,255,255,.30); flex-shrink: 0; }

/* ══ RESPONSIVE ══ */
@media(max-width:1200px){
  .sfs-grid { grid-template-columns:1fr; padding:44px 32px 28px; gap:32px; }
  .sfs-h1 { font-size:56px; letter-spacing:-3px; }
  .sfs-right { min-height:600px; }
  .sfs-asset-img { width:360px; }
  .sfs-shield { width:86px; height:86px; top:28px; right:12px; }
  .sfs-ring-2, .sfs-ring-3 { display:none; }
}
@media(max-width:640px){
  .sfs-h1 { font-size:42px; letter-spacing:-2px; }
  .sfs-feats { flex-direction:column; }
  .sfs-right { min-height:500px; }
  .sfs-phone { width:268px; }
  .sfs-qr-card { right:-6px; transform:scale(.88); }
  .sfs-alert-badge { left:0; transform:scale(.85); }
  .sfs-scan-badge { right:0; transform:scale(.85); }
  .sfs-stats { gap:16px; flex-wrap: wrap; }
}
`;

/* ─────────────────────────────────────────────────────────────────
   PARTICLES
───────────────────────────────────────────────────────────────── */
const PARTICLE_DATA = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: `${(i * 37 + 11) % 100}%`,
  y: `${(i * 53 + 7) % 100}%`,
  size: `${(i % 3) + 2}px`,
  delay: `${(i * 0.7) % 6}s`,
  duration: `${8 + (i % 5)}s`,
  opacity: 0.1 + (i % 4) * 0.08,
}));

function Particles() {
  return (
    <>
      {PARTICLE_DATA.map((p) => (
        <div
          key={p.id}
          className="sfs-particle"
          style={{
            left: p.x, top: p.y,
            width: p.size, height: p.size,
            opacity: p.opacity,
            animation: `particleDrift ${p.duration} ease-in-out infinite ${p.delay}`,
          }}
        />
      ))}
      <style>{`
        @keyframes particleDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(8px,-12px) scale(1.3); }
          66%      { transform: translate(-6px,8px) scale(0.7); }
        }
      `}</style>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   WAVE BG
───────────────────────────────────────────────────────────────── */
function WaveBg() {
  return (
    <svg className="sfs-waves" viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>{`
          .w1{animation:waveA 16s ease-in-out infinite;}
          .w2{animation:waveB 20s ease-in-out infinite;}
          .w3{animation:waveC 13s ease-in-out infinite;}
          @keyframes waveA{
            0%,100%{d:path("M0,480 C220,415 440,568 640,480 C860,392 1068,548 1270,468 C1375,428 1440,446 1440,446 L1440,900 L0,900 Z");}
            50%{d:path("M0,504 C200,444 420,582 630,508 C848,430 1048,566 1252,494 C1368,456 1440,472 1440,472 L1440,900 L0,900 Z");}
          }
          @keyframes waveB{
            0%,100%{d:path("M0,594 C200,548 392,644 622,594 C848,544 1052,634 1268,582 C1386,556 1440,564 1440,564 L1440,900 L0,900 Z");}
            50%{d:path("M0,616 C178,564 392,660 610,618 C830,570 1028,650 1250,602 C1376,576 1440,584 1440,584 L1440,900 L0,900 Z");}
          }
          @keyframes waveC{
            0%,100%{d:path("M0,706 C244,668 452,742 686,706 C908,670 1112,736 1314,698 C1402,678 1440,682 1440,682 L1440,900 L0,900 Z");}
            50%{d:path("M0,724 C224,682 466,756 706,722 C928,684 1092,752 1330,712 C1408,694 1440,698 1440,698 L1440,900 L0,900 Z");}
          }
        `}</style>
      </defs>
      <path className="w1" d="M0,480 C220,415 440,568 640,480 C860,392 1068,548 1270,468 C1375,428 1440,446 1440,446 L1440,900 L0,900 Z" fill="rgba(34,197,94,.058)" />
      <path className="w2" d="M0,594 C200,548 392,644 622,594 C848,544 1052,634 1268,582 C1386,556 1440,564 1440,564 L1440,900 L0,900 Z" fill="rgba(34,197,94,.042)" />
      <path className="w3" d="M0,706 C244,668 452,742 686,706 C908,670 1112,736 1314,698 C1402,678 1440,682 1440,682 L1440,900 L0,900 Z" fill="rgba(34,197,94,.028)" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MESH LINES
───────────────────────────────────────────────────────────────── */
function MeshLines() {
  const lines = [];
  for (let i = 0; i <= 12; i++) {
    lines.push(
      <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} stroke="rgba(34,197,94,.08)" strokeWidth=".8" />,
      <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="600" stroke="rgba(34,197,94,.08)" strokeWidth=".8" />
    );
  }
  lines.push(
    <line key="d1" x1="0" y1="0" x2="600" y2="600" stroke="rgba(34,197,94,.05)" strokeWidth="1" />,
    <line key="d2" x1="600" y1="0" x2="0" y2="600" stroke="rgba(34,197,94,.05)" strokeWidth="1" />
  );
  return (
    <svg className="sfs-mesh" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      {lines}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   GLOBE
───────────────────────────────────────────────────────────────── */
function Globe() {
  return (
    <div className="sfs-globe-wrap">
      <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="gGrad2" cx="38%" cy="32%">
            <stop offset="0%"   stopColor="rgba(134,239,172,.30)" />
            <stop offset="55%"  stopColor="rgba(34,197,94,.12)" />
            <stop offset="100%" stopColor="rgba(34,197,94,.03)" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="150" r="138" fill="url(#gGrad2)" stroke="rgba(34,197,94,.16)" strokeWidth="1" />
        {[-90,-54,-18,18,54,90].map((lat, i) => {
          const y  = 150 + lat;
          const hw = Math.sqrt(Math.max(0, 138 * 138 - lat * lat));
          return <ellipse key={i} cx="150" cy={y} rx={hw} ry={hw * 0.26} fill="none" stroke="rgba(34,197,94,.12)" strokeWidth=".7" />;
        })}
        {[0, 30, 60, 90, 120, 150].map((deg, i) => (
          <ellipse key={i} cx="150" cy="150" rx="42" ry="138"
            fill="none" stroke="rgba(34,197,94,.10)" strokeWidth=".7"
            transform={`rotate(${deg} 150 150)`} />
        ))}
        <ellipse cx="150" cy="150" rx="175" ry="46"
          fill="none" stroke="rgba(34,197,94,.20)" strokeWidth="1.2"
          strokeDasharray="8 6"
          style={{ animation: "orbitSpin2 14s linear infinite", transformOrigin: "150px 150px" }} />
        <circle cx="325" cy="150" r="8" fill="rgba(34,197,94,.55)"
          style={{ animation: "orbitSpin2 14s linear infinite", transformOrigin: "150px 150px" }} />
        <style>{`@keyframes orbitSpin2{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}`}</style>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SHIELD SVG
───────────────────────────────────────────────────────────────── */
function ShieldBadge() {
  return (
    <svg className="sfs-shield" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="shGrad2" cx="40%" cy="30%">
          <stop offset="0%"   stopColor="rgba(134,239,172,.99)" />
          <stop offset="60%"  stopColor="rgba(34,197,94,.85)" />
          <stop offset="100%" stopColor="rgba(22,163,74,.75)" />
        </radialGradient>
        <filter id="shBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      <path d="M55 12 L87 25 L87 52 C87 70 72 84 55 92 C38 84 23 70 23 52 L23 25 Z"
        fill="rgba(34,197,94,.25)" filter="url(#shBlur)" />
      <path d="M55 10 L88 24 L88 52 C88 70 73 84 55 92 C37 84 22 70 22 52 L22 24 Z"
        fill="url(#shGrad2)"
        stroke="rgba(255,255,255,.40)" strokeWidth="1.5" />
      <path d="M55 16 L82 28 L82 52 C82 67 69 79 55 86 C41 79 28 67 28 52 L28 28 Z"
        fill="none" stroke="rgba(255,255,255,.20)" strokeWidth="1" />
      <polyline points="38,55 50,67 72,43"
        fill="none" stroke="white" strokeWidth="5.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SCAN STAGE  — uses real carImg / bikeImg / luggageImg
───────────────────────────────────────────────────────────────── */
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
          <div className="sfs-status-label">Scanning…</div>
          <div className="sfs-status-sub">SFS Shield Active</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PHONE DISPLAY  — uses real qrImg as avatar
───────────────────────────────────────────────────────────────── */
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
      <div className="sfs-notch-row"><div className="sfs-notch" /></div>
      <div className="sfs-screen">
        <div className="sfs-verified"><div className="sfs-vdot" /> Verified Owner</div>
        <img src={asset.avatar} alt="QR" className="sfs-avatar" />
        <div className="sfs-owner-name">{asset.owner}</div>
        <div className="sfs-owner-label">{asset.label}</div>
        <div className="sfs-divider" />
        <div style={{ width: "100%", textAlign: "left" }}>
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
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   COUNTER HOOK
───────────────────────────────────────────────────────────────── */
function useCounter(target, duration = 2200) {
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

/* ─────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────── */
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

        {/* ── BACKGROUND ── */}
        <div className="sfs-bg">
          <WaveBg />
          <MeshLines />
          <Globe />
          <Particles />
        </div>

        {/* ── MAIN GRID ── */}
        <div className="sfs-grid">

          {/* LEFT */}
          <div className="sfs-left">
            <div className="sfs-badge">
              <div className="sfs-badge-dot" />
              Live Protection Active
            </div>

            <h1 className="sfs-h1">
              Smart Protection<br />
              That <span className="green">Connects</span><br />
              <span className="outline">Your World</span>
            </h1>

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
                  <h4>{f.h}</h4>
                  <p>{f.p}</p>
                </div>
              ))}
            </div>

            <div className="sfs-actions">
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

            <div className="sfs-scroll">
              <div className="sfs-scroll-mouse"><div className="sfs-scroll-wheel" /></div>
              <span>Scroll Down</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="sfs-right">
            <ShieldBadge />
            <div className="sfs-lock">🔒</div>

            {/* Floating Alert Badge */}
            <div className="sfs-alert-badge">
              <div className="sfs-alert-ico">🔔</div>
              <div className="sfs-alert-text">
                <h5>Owner Alerted!</h5>
                <p>Scan detected · 2s ago</p>
              </div>
            </div>

            {/* Scan Count Badge */}
            <div className="sfs-scan-badge">
              <div className="sfs-scan-badge-ico">📲</div>
              <div className="sfs-scan-badge-text">
                <h5>15,234 Scans</h5>
                <p>Today worldwide</p>
              </div>
            </div>

            <div className="sfs-stage" style={{ minHeight: 700 }}>
              {phase === "scan"      && <ScanStage    asset={c} animClass="sfs-scan-in"  />}
              {phase === "scan-out"  && <ScanStage    asset={c} animClass="sfs-scan-out" />}
              {phase === "phone"     && <PhoneDisplay asset={c} animClass="sfs-entering" />}
              {phase === "phone-out" && <PhoneDisplay asset={c} animClass="sfs-exiting"  />}
            </div>
          </div>
        </div>

        {/* ── TICKER ── */}
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