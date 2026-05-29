import { useEffect, useState } from "react";

import carImg from "../../assets/car.png";
import bikeImg from "../../assets/bike.png";
import luggageImg from "../../assets/luggage.png";
import qrImg from "../../assets/qr.png";

const TICKER = [
  { ico: "🛡️", text: "10,000+ Assets Protected" },
  { ico: "📡", text: "Live QR & NFC Scanning" },
  { ico: "🚨", text: "Instant Owner Alerts" },
  { ico: "🔐", text: "End-to-End Encrypted" },
  { ico: "⚡", text: "Scan in Under 2 Seconds" },
  { ico: "🌍", text: "Available in 50+ Countries" },
  { ico: "✅", text: "4.9 / 5 User Rating" },
  { ico: "📲", text: "15,000+ Scans Today" },
  { ico: "🏆", text: "#1 Asset Protection Platform" },
  { ico: "🔔", text: "8,000+ Alerts Sent Today" },
  { ico: "🔒", text: "Encrypted Data" },
  { ico: "🕵️", text: "Privacy First" },
  { ico: "📷", text: "Works with Any Camera App" },
  { ico: "📶", text: "NFC Tap Support" },
  { ico: "💧", text: "100% Waterproof" },
  { ico: "✏️", text: "Update Info Anytime" },
  { ico: "🆘", text: "Emergency Access in Seconds" },
  { ico: "🇮🇳", text: "Made for India" },
];

const ASSETS = [
  {
    label: "Vehicle",
    assetType: "CAR",
    tagId: "SFS-CAR-4587",
    owner: "Rahul Verma",
    avatar: qrImg,
    maskedPhone: "+91 98765 •••••",
    maskedEmail: "rahul.v•••@mail.com",
    address: "23, Green Park, New Delhi",
    emergency: "+91 99887 •••••",
    registered: "12 May 2024",
    img: carImg,
    emoji: "🚗",
    callLabel: "Call Vehicle Owner",
    msgLabel: "Message Owner",
  },
  {
    label: "Bike",
    assetType: "BIKE",
    tagId: "SFS-BIKE-7712",
    owner: "Aarav Sharma",
    avatar: qrImg,
    maskedPhone: "+91 98345 •••••",
    maskedEmail: "aarav.s•••@mail.com",
    address: "Plot 7, Andheri West, Mumbai",
    emergency: "+91 88774 •••••",
    registered: "15 May 2024",
    img: bikeImg,
    emoji: "🏍️",
    callLabel: "Call Bike Owner",
    msgLabel: "Message Owner",
  },
  {
    label: "Luggage",
    assetType: "LUGGAGE",
    tagId: "SFS-LUG-1123",
    owner: "Priya Kapoor",
    avatar: qrImg,
    maskedPhone: "+91 93456 •••••",
    maskedEmail: "priya.k•••@mail.com",
    address: "12, Koramangala, Bangalore",
    emergency: "+91 90909 •••••",
    registered: "28 Mar 2024",
    img: luggageImg,
    emoji: "🧳",
    callLabel: "Call Luggage Owner",
    msgLabel: "Message Owner",
  },
];

const SEO_TAGS = [
  "QR + NFC Enabled",
  "No App Required",
  "Waterproof Tags",
  "Secure Emergency Access",
  "Works with Any Camera App",
  "NFC Tap Support",
  "100% Waterproof",
  "Update Info Anytime",
  "Emergency Access in Seconds",
  "Made for India",
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
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
  --ticker-dark: #0a2e1a;
  --ticker-mid: #12452a;
  --ticker-green: #1a6b3a;
}

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

.sfs-grid {
  flex: 1;
  max-width: 1440px; width: 100%; margin: 0 auto;
  display: grid; grid-template-columns: 44% 56%;
  align-items: center;
  padding: 72px 72px 52px;
  position: relative; z-index: 2;
  gap: 0;
}

.sfs-left { padding-right: 28px; }

.sfs-seo-heading {
  font-size: 11px; font-weight: 700; letter-spacing: .12em;
  text-transform: uppercase; color: #1a6b3a;
  margin-bottom: 10px; opacity: .85;
  animation: fadeUp .5s .02s both;
}

.sfs-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--glass); backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(46,189,58,0.24); border-radius: 12px;
  padding: 8px 14px 8px 10px; margin-bottom: 20px;
  font-size: 10px; font-weight: 700; letter-spacing: .08em;
  color: #1a4a1e; text-transform: uppercase;
  box-shadow: 0 2px 14px rgba(46,189,58,0.10), 0 1px 0 rgba(255,255,255,0.9) inset;
  animation: fadeUp .6s .10s cubic-bezier(.22,1,.36,1) both;
  width: fit-content;
}
.sfs-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--green); animation: livePulse 2s ease-out infinite; flex-shrink: 0;
}
.sfs-badge-sep { width: 1px; height: 14px; background: rgba(46,189,58,0.30); display: inline-block; }
.sfs-badge-count { font-size: 9.5px; font-weight: 800; color: var(--green); letter-spacing: .04em; }

@keyframes livePulse {
  0%   { box-shadow: 0 0 0 0 rgba(46,189,58,.7); }
  70%  { box-shadow: 0 0 0 8px rgba(46,189,58,0); }
  100% { box-shadow: 0 0 0 0 rgba(46,189,58,0); }
}

.sfs-h1 {
  font-family: 'Sora', sans-serif;
  font-size: 58px; line-height: .92; letter-spacing: -3px;
  font-weight: 900; color: var(--dark); margin-bottom: 12px;
  animation: slideInLeft .8s .04s cubic-bezier(.22,1,.36,1) both;
}
.sfs-h1 .green {
  background: linear-gradient(125deg, #0a2e10 0%, #2ebd3a 52%, #4bd557 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; display: inline-block;
}
.sfs-h1 .outline {
  color: transparent; -webkit-text-stroke: 2px rgba(46,189,58,0.25);
  animation: outlinePulse 4s ease-in-out infinite .5s;
}
@keyframes outlinePulse {
  0%,100% { -webkit-text-stroke-color: rgba(46,189,58,0.25); }
  50%      { -webkit-text-stroke-color: rgba(46,189,58,0.45); }
}

.sfs-seo-sub {
  font-size: 13px; font-weight: 600; color: var(--mid);
  margin-bottom: 14px; letter-spacing: -.01em;
  animation: slideInLeft .82s .09s cubic-bezier(.22,1,.36,1) both;
}
.sfs-seo-sub em { font-style: normal; color: #1a6b3a; }

.sfs-sub {
  font-size: 14px; line-height: 1.82; color: var(--mid);
  max-width: 460px; margin-bottom: 20px; font-weight: 400;
  animation: slideInLeft .85s .14s cubic-bezier(.22,1,.36,1) both;
}

.sfs-tags {
  display: flex; flex-wrap: wrap; gap: 7px;
  margin-bottom: 22px; animation: fadeUp .55s .20s both;
}
.sfs-tag {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 5px 11px;
  background: rgba(46,189,58,0.07); border: 1px solid rgba(46,189,58,0.20);
  border-radius: 99px; font-size: 10.5px; font-weight: 600;
  color: #1a5a26; letter-spacing: .01em; transition: .22s ease;
}
.sfs-tag:hover { background: rgba(46,189,58,0.14); border-color: rgba(46,189,58,0.38); transform: translateY(-1px); }
.sfs-tag-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--green); flex-shrink: 0; }

.sfs-actions {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 24px; animation: fadeUp .55s .56s both;
}
.sfs-btn-main {
  border: none;
  background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 50%, #0B2545 100%);
  color: white; padding: 15px 30px; border-radius: 14px;
  font-size: 14px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 8px;
  box-shadow: 0 10px 28px rgba(46,189,58,0.32), 0 2px 6px rgba(46,189,58,0.18);
  transition: .32s cubic-bezier(.34,1.46,.64,1);
  position: relative; overflow: hidden; letter-spacing: -.01em;
  text-decoration: none;
}
.sfs-btn-main::before {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.16) 0%, transparent 55%);
  pointer-events: none;
}
.sfs-btn-main:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 16px 40px rgba(46,189,58,0.40); }
.sfs-btn-main:active { transform: translateY(0) scale(.99); }

.sfs-btn-sec {
  border: 1px solid rgba(46,189,58,0.26); background: var(--glass);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  padding: 14px 24px; border-radius: 14px;
  font-size: 13.5px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  display: flex; align-items: center; gap: 9px;
  cursor: pointer; color: var(--dark); transition: .26s ease;
  box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset; text-decoration: none;
}
.sfs-btn-sec:hover { transform: translateY(-3px); border-color: rgba(46,189,58,0.50); box-shadow: 0 10px 24px rgba(46,189,58,0.10), 0 1px 0 rgba(255,255,255,0.8) inset; }
.sfs-play-ring {
  width: 28px; height: 28px; border-radius: 50%;
  background: linear-gradient(135deg, #2ebd3a, #1fa82a);
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; color: white;
  box-shadow: 0 3px 10px rgba(46,189,58,0.28); transition: .26s;
  border: 1px solid rgba(255,255,255,0.28);
}
.sfs-btn-sec:hover .sfs-play-ring { transform: scale(1.1) rotate(8deg); }

.sfs-stats {
  display: flex; gap: 20px; align-items: center;
  margin-bottom: 0; animation: fadeUp .55s .65s both;
}
.sfs-stat { display: flex; flex-direction: column; }
.sfs-stat-num {
  font-family: 'Sora', sans-serif; font-size: 20px; font-weight: 800;
  background: linear-gradient(125deg, #0B2545, #2ebd3a);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; line-height: 1;
}
.sfs-stat-lbl { font-size: 10px; color: var(--mid); margin-top: 3px; font-weight: 500; }
.sfs-stat-div { width: 1px; height: 32px; background: rgba(46,189,58,0.20); }

.sfs-right {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  min-height: 700px;
}

/* ════════════════════════════════════════
   REDESIGNED PHONE — LARGER, DARK FRAME
════════════════════════════════════════ */
.sfs-phone {
  width: 340px;
  position: relative; z-index: 5;
  animation: phoneRock 9s ease-in-out infinite;
}

/* Green glow border rings */
.sfs-phone-glow-ring {
  position: absolute; inset: -14px;
  border-radius: 76px;
  border: 1.5px solid rgba(46,189,58,0.28);
  pointer-events: none; z-index: 0;
}
.sfs-phone-glow-ring2 {
  position: absolute; inset: -26px;
  border-radius: 84px;
  border: 1px solid rgba(46,189,58,0.12);
  pointer-events: none; z-index: 0;
}

.sfs-phone-frame {
  position: relative; z-index: 1;
  background: linear-gradient(160deg, #2c2c2e 0%, #1a1a1c 55%, #111113 100%);
  border-radius: 64px;
  padding: 5px;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.14),
    0 0 0 2.5px rgba(0,0,0,0.55),
    -28px 48px 110px rgba(0,0,0,0.38),
    0 0 80px rgba(46,189,58,0.10),
    inset 0 1px 0 rgba(255,255,255,0.18);
}
.sfs-phone-frame::before {
  content: "";
  position: absolute; inset: 0; border-radius: 64px;
  background: linear-gradient(135deg, rgba(255,255,255,0.11) 0%, transparent 38%);
  pointer-events: none; z-index: 10;
}
.sfs-phone-inner {
  background: #1c1c1e;
  border-radius: 60px;
  padding: 3px;
  overflow: hidden;
}

/* Side buttons */
.sfs-phone-btn-l  { position: absolute; left: -4px; top: 130px; width: 4px; height: 36px; background: #2a2a2c; border-radius: 2px 0 0 2px; }
.sfs-phone-btn-l2 { position: absolute; left: -4px; top: 178px; width: 4px; height: 36px; background: #2a2a2c; border-radius: 2px 0 0 2px; }
.sfs-phone-btn-r  { position: absolute; right: -4px; top: 154px; width: 4px; height: 64px; background: #2a2a2c; border-radius: 0 2px 2px 0; }

/* Dynamic Island */
.sfs-dynamic-island {
  position: absolute; left: 50%; transform: translateX(-50%);
  top: 10px; width: 110px; height: 30px;
  background: #111113; border-radius: 20px; z-index: 30;
  display: flex; align-items: center; justify-content: center; gap: 8px;
}
.sfs-island-cam { width: 10px; height: 10px; border-radius: 50%; background: #222224; border: 1.5px solid #333; }
.sfs-island-mic { width: 6px; height: 6px; border-radius: 50%; background: #1a1a1c; }

/* Status bar */
.sfs-notch-row {
  height: 48px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 24px 8px;
  position: relative; z-index: 5;
  background: white;
}
.sfs-notch-row-time { font-size: 13px; font-weight: 700; color: #0d1f10; font-family: 'Sora', sans-serif; letter-spacing: -.3px; }
.sfs-notch-row-icons { display: flex; align-items: center; gap: 5px; font-size: 12px; color: #0d1f10; }

/* ── SFSI SCREEN ── */
.sfs-sfsi-screen {
  background: #f5f7f5;
  border-radius: 0 0 56px 56px;
  overflow: hidden;
  position: relative;
  display: flex; flex-direction: column;
  font-family: 'DM Sans', sans-serif;
}

/* SFSI Header */
.sfs-sfsi-header {
  background: white;
  padding: 16px 20px 14px;
  display: flex; flex-direction: column; align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.07);
}
.sfs-sfsi-logo-row {
  display: flex; align-items: center; gap: 9px; margin-bottom: 3px;
}
.sfs-sfsi-shield {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, #1a9926, #2ebd3a);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px;
  box-shadow: 0 4px 12px rgba(46,189,58,0.28);
}
.sfs-sfsi-wordmark {
  font-family: 'Sora', sans-serif;
  font-size: 24px; font-weight: 900; color: #0d1f10; letter-spacing: -0.5px;
}
.sfs-sfsi-wordmark span { color: #2ebd3a; }
.sfs-sfsi-company {
  font-size: 9.5px; color: #5a7060; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase; text-align: center;
}
.sfs-sfsi-divider {
  display: flex; align-items: center; gap: 10px;
  margin-top: 8px; width: 100%; justify-content: center;
}
.sfs-sfsi-divline {
  height: 1px; width: 64px;
  background: linear-gradient(to right, transparent, rgba(46,189,58,0.38));
}
.sfs-sfsi-divline.rev { background: linear-gradient(to left, transparent, rgba(46,189,58,0.38)); }
.sfs-sfsi-divlabel {
  font-size: 8px; font-weight: 900; letter-spacing: 0.18em;
  color: #2ebd3a; text-transform: uppercase;
}

/* Vehicle card */
.sfs-sfsi-veh-card {
  margin: 14px 14px 0;
  background: linear-gradient(135deg, #0d2818 0%, #1a4a2a 100%);
  border-radius: 20px; padding: 18px 16px 16px;
  border: 1.5px solid rgba(46,189,58,0.32);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}
.sfs-sfsi-veh-icon {
  width: 58px; height: 58px; border-radius: 50%;
  background: rgba(46,189,58,0.16);
  border: 1.5px solid rgba(46,189,58,0.38);
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; margin: 0 auto 12px;
}
.sfs-sfsi-veh-title {
  font-family: 'Sora', sans-serif;
  font-size: 18px; font-weight: 900; color: white;
  text-align: center; margin-bottom: 7px;
}
.sfs-sfsi-veh-pill {
  display: flex; align-items: center; gap: 6px;
  background: rgba(46,189,58,0.18);
  border: 1px solid rgba(46,189,58,0.38);
  border-radius: 99px; padding: 4px 14px;
  font-size: 10px; font-weight: 800; color: #7ded88;
  letter-spacing: 0.08em; text-transform: uppercase;
  width: fit-content; margin: 0 auto 12px;
}
.sfs-sfsi-veh-dot { width: 7px; height: 7px; border-radius: 50%; background: #4bd557; animation: livePulse 1.6s infinite; }
.sfs-sfsi-veh-desc { font-size: 11.5px; color: rgba(255,255,255,0.60); text-align: center; line-height: 1.55; }

/* Action rows */
.sfs-sfsi-actions { padding: 12px 14px; display: flex; flex-direction: column; gap: 9px; }
.sfs-sfsi-act {
  display: flex; align-items: center; gap: 12px;
  padding: 13px 14px; border-radius: 15px; border: 1.5px solid; cursor: pointer;
}
.sfs-sfsi-act.green { background: #f0fdf4; border-color: rgba(46,189,58,0.26); }
.sfs-sfsi-act.blue  { background: #f0f4ff; border-color: rgba(37,99,235,0.22); }
.sfs-sfsi-act.orange{ background: #fff7f0; border-color: rgba(234,130,40,0.25); }
.sfs-sfsi-act-ico {
  width: 42px; height: 42px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px; flex-shrink: 0;
}
.sfs-sfsi-act-ico.green { background: #2ebd3a; }
.sfs-sfsi-act-ico.blue  { background: #2563eb; }
.sfs-sfsi-act-ico.orange{ background: #ea8428; }
.sfs-sfsi-act-title { font-size: 13px; font-weight: 700; color: #0d1f10; }
.sfs-sfsi-act-sub   { font-size: 10px; color: #5a7060; margin-top: 2px; }
.sfs-sfsi-act-arr   { font-size: 18px; color: #bbb; margin-left: auto; }

/* Why box */
.sfs-sfsi-why {
  margin: 4px 14px 10px;
  background: rgba(46,189,58,0.06);
  border: 1px solid rgba(46,189,58,0.18);
  border-radius: 14px; padding: 11px 13px;
  display: flex; gap: 10px;
}
.sfs-sfsi-why-ico {
  width: 32px; height: 32px; border-radius: 9px;
  background: rgba(46,189,58,0.15);
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; flex-shrink: 0;
}
.sfs-sfsi-why-t { font-size: 11px; font-weight: 700; color: #1a5226; }
.sfs-sfsi-why-b { font-size: 9.5px; color: #3a6040; margin-top: 3px; line-height: 1.45; }

.sfs-sfsi-footer { text-align: center; padding: 8px 16px 16px; font-size: 10px; color: #5a7060; font-weight: 500; }

/* ── POPUP OVERLAY SCREEN ── */
.sfs-popup-screen {
  background: #f5f7f5;
  border-radius: 0 0 56px 56px;
  overflow: hidden;
  position: relative;
  font-family: 'DM Sans', sans-serif;
}
.sfs-popup-bg { padding: 20px 14px 10px; opacity: 0.38; }
.sfs-popup-mini-card {
  background: white; border-radius: 14px;
  padding: 13px; display: flex; gap: 11px; align-items: center;
  border: 1px solid rgba(46,189,58,0.18); margin-bottom: 10px;
}
.sfs-popup-mini-ico {
  width: 48px; height: 48px; border-radius: 12px;
  background: #f0fdf4; border: 1.5px solid rgba(46,189,58,0.22);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; flex-shrink: 0;
}
.sfs-popup-mini-tag { font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 800; color: #1a6b3a; }
.sfs-popup-mini-type { font-size: 10px; color: #5a7060; }
.sfs-popup-mini-steps { display: flex; flex-direction: column; gap: 7px; }
.sfs-popup-mini-step {
  display: flex; gap: 9px; align-items: center;
  background: white; border-radius: 11px;
  padding: 9px 11px; border: 1px solid rgba(0,0,0,0.05);
}
.sfs-popup-mini-step-ico {
  width: 30px; height: 30px; border-radius: 8px;
  background: #f0fdf4; display: flex; align-items: center;
  justify-content: center; font-size: 14px; flex-shrink: 0;
}
.sfs-popup-mini-step-t { font-size: 11.5px; font-weight: 700; color: #0d1f10; }
.sfs-popup-mini-step-s { font-size: 9.5px; color: #5a7060; }

/* Overlay */
.sfs-popup-overlay {
  position: absolute; inset: 0;
  background: rgba(4,18,8,0.60);
  border-radius: 56px;
  display: flex; align-items: flex-end; z-index: 20;
  animation: popIn .40s cubic-bezier(.22,1,.36,1) both;
}
@keyframes popIn { from { opacity:0; } to { opacity:1; } }
.sfs-popup-sheet {
  width: 100%; background: white;
  border-radius: 26px 26px 56px 56px;
  padding: 7px 16px 20px;
  animation: sheetUp .46s cubic-bezier(.22,1,.36,1) both;
}
@keyframes sheetUp { from { transform: translateY(80px); opacity:0; } to { transform:none; opacity:1; } }
.sfs-popup-handle { width: 44px; height: 5px; background: #dde8dd; border-radius: 3px; margin: 0 auto 14px; }
.sfs-popup-owner-row {
  display: flex; align-items: center; gap: 12px;
  background: linear-gradient(135deg, #f0fdf4, #e8f5ec);
  border: 1.5px solid rgba(46,189,58,0.22);
  border-radius: 16px; padding: 12px 13px; margin-bottom: 11px;
}
.sfs-popup-avatar {
  width: 50px; height: 50px; border-radius: 50%;
  background: linear-gradient(135deg, #c8f0cc, #a0e8a8);
  border: 2px solid rgba(46,189,58,0.30);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; flex-shrink: 0;
}
.sfs-popup-owner-name { font-family: 'Sora', sans-serif; font-size: 16px; font-weight: 800; color: #0d1f10; }
.sfs-popup-owner-label {
  font-size: 10px; color: #3a7040; font-weight: 600;
  display: flex; align-items: center; gap: 5px; margin-top: 3px;
}
.sfs-popup-verified-badge {
  background: rgba(46,189,58,0.12); border: 1px solid rgba(46,189,58,0.28);
  border-radius: 99px; padding: 2px 8px;
  font-size: 9px; font-weight: 800; color: #166534;
  text-transform: uppercase; letter-spacing: 0.05em;
}
.sfs-popup-actions { display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px; }
.sfs-popup-btn {
  display: flex; align-items: center; gap: 10px;
  padding: 12px 13px; border-radius: 14px;
  cursor: pointer; border: none; width: 100%; text-align: left;
}
.sfs-popup-btn.primary {
  background: linear-gradient(135deg, #1a9926, #2ebd3a);
  box-shadow: 0 5px 16px rgba(46,189,58,0.30);
}
.sfs-popup-btn.secondary { background: rgba(46,189,58,0.07); border: 1.5px solid rgba(46,189,58,0.22); }
.sfs-popup-btn.danger    { background: rgba(220,38,38,0.06); border: 1.5px solid rgba(220,38,38,0.18); }
.sfs-popup-btn-ico {
  width: 32px; height: 32px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; flex-shrink: 0;
}
.sfs-popup-btn.primary .sfs-popup-btn-ico { background: rgba(255,255,255,0.22); }
.sfs-popup-btn.secondary .sfs-popup-btn-ico { background: rgba(46,189,58,0.12); }
.sfs-popup-btn.danger .sfs-popup-btn-ico { background: rgba(220,38,38,0.10); }
.sfs-popup-btn-main { font-size: 13px; font-weight: 700; display: block; line-height: 1.2; }
.sfs-popup-btn-sub  { font-size: 9.5px; display: block; margin-top: 1.5px; }
.sfs-popup-btn.primary .sfs-popup-btn-main { color: white; }
.sfs-popup-btn.primary .sfs-popup-btn-sub  { color: rgba(255,255,255,0.72); }
.sfs-popup-btn.secondary .sfs-popup-btn-main { color: #1a5226; }
.sfs-popup-btn.secondary .sfs-popup-btn-sub  { color: #3a7040; }
.sfs-popup-btn.danger .sfs-popup-btn-main { color: #991b1b; }
.sfs-popup-btn.danger .sfs-popup-btn-sub  { color: #b91c1c; opacity: 0.75; }
.sfs-popup-btn-arrow { font-size: 16px; margin-left: auto; flex-shrink: 0; }
.sfs-popup-btn.primary .sfs-popup-btn-arrow { color: rgba(255,255,255,0.55); }
.sfs-popup-btn.secondary .sfs-popup-btn-arrow,
.sfs-popup-btn.danger .sfs-popup-btn-arrow { color: rgba(0,0,0,0.20); }

.sfs-popup-shield {
  background: linear-gradient(135deg, #081f10, #123820);
  border-radius: 14px; padding: 11px 13px;
  display: flex; align-items: center; gap: 10px;
}
.sfs-popup-shield-ico {
  width: 38px; height: 38px; border-radius: 10px;
  background: rgba(46,189,58,0.18); border: 1px solid rgba(46,189,58,0.30);
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; flex-shrink: 0;
}
.sfs-popup-shield-title { font-size: 12.5px; font-weight: 800; color: white; }
.sfs-popup-shield-sub   { font-size: 9.5px; color: rgba(255,255,255,0.52); margin-top: 2px; }
.sfs-popup-shield-check {
  width: 26px; height: 26px; border-radius: 50%;
  background: #2ebd3a;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; color: white; margin-left: auto; flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(46,189,58,0.40);
}

.sfs-home-ind { width: 120px; height: 5px; background: rgba(0,0,0,0.11); border-radius: 3px; margin: 10px auto 14px; }

/* ── SCAN STAGE (asset image view) ── */
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
  position: absolute; right: 0; top: 50%; transform: translateY(-50%);
  width: 52px; height: 52px; background: var(--glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-size: 22px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.10), 0 0 0 1px rgba(46,189,58,0.16);
  border: 1px solid rgba(255,255,255,0.70); z-index: 10;
  animation: lockFloat 5s ease-in-out infinite 1s;
}
@keyframes lockFloat {
  0%,100% { transform: translateY(-50%) scale(1); }
  50%      { transform: translateY(calc(-50% - 10px)) scale(1.05); }
}
.sfs-alert-badge {
  position: absolute; left: 4px; top: 90px;
  background: var(--card-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 16px; padding: 10px 13px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.8) inset;
  border: 1px solid rgba(46,189,58,0.14); z-index: 10;
  display: flex; align-items: center; gap: 8px;
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
  font-size: 15px; flex-shrink: 0; border: 1px solid rgba(46,189,58,0.18);
}
.sfs-alert-text h5 { font-size: 11px; font-weight: 700; color: var(--dark); }
.sfs-alert-text p  { font-size: 9px; color: var(--mid); margin-top: 1.5px; }
.sfs-scan-badge {
  position: absolute; right: 12px; bottom: 110px;
  background: linear-gradient(135deg, #2ebd3a, #1c9926);
  border-radius: 14px; padding: 9px 14px; z-index: 10;
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
  position: relative; display: flex; align-items: center; justify-content: center; width: 100%;
}
.sfs-ring { position: absolute; border-radius: 50%; border: 1px solid rgba(46,189,58,0.12); pointer-events: none; z-index: 1; }
.sfs-ring-1 { width: 340px; height: 340px; animation: ringPulse 4s ease-in-out infinite; }
.sfs-ring-2 { width: 490px; height: 490px; animation: ringPulse 4s ease-in-out infinite .8s; }
.sfs-ring-3 { width: 640px; height: 640px; animation: ringPulse 4s ease-in-out infinite 1.6s; }
@keyframes ringPulse {
  0%,100% { opacity:.5; transform: scale(.96); }
  50%      { opacity:.9; transform: scale(1.04); }
}
.sfs-glow {
  position: absolute; width: 460px; height: 460px; border-radius: 50%;
  background: radial-gradient(circle, rgba(46,189,58,0.16) 0%, rgba(46,189,58,0.06) 40%, transparent 70%);
  filter: blur(6px); animation: glowPulse 4.5s ease-in-out infinite; z-index: 1;
}
@keyframes glowPulse {
  0%,100% { transform: scale(.88); opacity: .55; }
  50%      { transform: scale(1.08); opacity: 1; }
}
.sfs-asset-img {
  width: 480px; max-width: none; position: relative; z-index: 3; object-fit: contain;
  filter: drop-shadow(0 28px 56px rgba(0,0,0,0.16)) drop-shadow(0 0 36px rgba(46,189,58,0.22));
  animation: assetHover 4.5s ease-in-out infinite;
}
@keyframes assetHover {
  0%,100% { transform: translateY(0) scale(1.02) rotateY(-4deg); }
  50%      { transform: translateY(-12px) scale(1.04) rotateY(-2deg); }
}
.sfs-scanline {
  position: absolute; left: -10%; width: 120%; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(46,189,58,0.28), rgba(125,237,136,0.85), rgba(255,255,255,0.45), rgba(125,237,136,0.85), rgba(46,189,58,0.28), transparent);
  box-shadow: 0 0 14px rgba(46,189,58,0.45), 0 0 28px rgba(46,189,58,0.18);
  z-index: 8; animation: scanMove 2.8s cubic-bezier(.45,0,.55,1) infinite;
}
@keyframes scanMove {
  0%   { transform: translateY(-175px); opacity: 0; }
  6%   { opacity: 1; }
  94%  { opacity: 1; }
  100% { transform: translateY(175px); opacity: 0; }
}
.sfs-scan-stage { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.sfs-qr-card {
  position: absolute; right: -20px; bottom: 80px;
  background: var(--card-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 20px; padding: 13px 16px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.10), 0 0 0 1px rgba(255,255,255,0.80) inset;
  border: 1px solid rgba(46,189,58,0.16); z-index: 10;
  display: flex; align-items: center; gap: 10px; min-width: 210px;
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
  box-shadow: 0 4px 12px rgba(46,189,58,0.18); border: 1px solid rgba(46,189,58,0.18);
}
.sfs-qr-card h4 { font-size: 12.5px; font-weight: 800; color: var(--dark); margin-bottom: 3px; }
.sfs-qr-card p  { font-size: 9.5px; color: #5a7060; line-height: 1.4; }
.sfs-status-pill {
  position: absolute; top: 68px; left: 6px;
  background: var(--card-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-radius: 14px; padding: 9px 13px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.80) inset;
  border: 1px solid rgba(46,189,58,0.14); z-index: 10;
  display: flex; align-items: center; gap: 7px;
  animation: pillFloat 6s ease-in-out infinite .5s;
}
@keyframes pillFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-7px); }
}
.sfs-status-dot   { width: 7px; height: 7px; border-radius: 50%; background: var(--green); animation: livePulse 1.8s infinite; flex-shrink: 0; }
.sfs-status-label { font-size: 11px; font-weight: 800; color: var(--dark); }
.sfs-status-sub   { font-size: 8.5px; color: var(--mid); margin-top: 1px; }

/* Animations */
@keyframes phoneRock {
  0%,100% { transform: perspective(1200px) rotateY(-8deg) rotateX(3deg) translateY(0); }
  33%      { transform: perspective(1200px) rotateY(-6deg) rotateX(2deg) translateY(-8px); }
  66%      { transform: perspective(1200px) rotateY(-9deg) rotateX(4.5deg) translateY(-4px); }
}
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
@keyframes fadeUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: none; } }

/* ══ TICKER ══ */
.sfs-ticker {
  width: 100%; position: relative; z-index: 10; overflow: hidden;
  background: linear-gradient(105deg, #0b2e1a 0%, #0f4028 28%, #145c34 55%, #1c7a3e 78%, #2a9e4a 100%);
  border-top: 1px solid rgba(46,189,58,0.25);
  border-radius: 0 0 30px 30px;
  box-shadow: inset 0 1px 0 rgba(46,189,58,0.20);
}
.sfs-ticker::before {
  content: ""; position: absolute; left:0; top:0; bottom:0; width:120px;
  background: linear-gradient(to right, #0b2e1a 30%, transparent); z-index:3; pointer-events:none;
}
.sfs-ticker::after {
  content: ""; position: absolute; right:0; top:0; bottom:0; width:120px;
  background: linear-gradient(to left, #2a9e4a 10%, transparent); z-index:3; pointer-events:none;
}
.sfs-ticker-dots {
  position: absolute; inset:0; z-index:1; pointer-events:none;
  background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
  background-size: 18px 18px;
}
.sfs-ticker-inner { display:flex; align-items:center; position:relative; z-index:2; }
.sfs-ticker-label {
  flex-shrink:0; display:flex; align-items:center; gap:7px;
  padding:0 18px; background:rgba(0,0,0,0.25);
  border-right:1px solid rgba(255,255,255,0.12);
  font-size:9px; font-weight:900; color:rgba(255,255,255,0.90);
  letter-spacing:2.5px; text-transform:uppercase;
  height:50px; white-space:nowrap; z-index:4; position:relative;
}
.sfs-ticker-live-dot {
  width:7px; height:7px; border-radius:50%; background:#4bd557;
  animation:livePulse 2s infinite; flex-shrink:0; box-shadow:0 0 6px rgba(75,213,87,0.60);
}
.sfs-ticker-track { display:flex; animation:tickMove 48s linear infinite; }
.sfs-ticker-track:hover { animation-play-state:paused; }
@keyframes tickMove { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.sfs-ti {
  display:flex; align-items:center; height:50px; padding:0 6px; gap:9px; white-space:nowrap;
}
.sfs-ti-ico {
  width:28px; height:28px; border-radius:8px;
  background:rgba(255,255,255,0.10); border:1px solid rgba(255,255,255,0.14);
  display:flex; align-items:center; justify-content:center; font-size:14px; flex-shrink:0;
}
.sfs-ti-text { font-size:12px; font-weight:600; color:rgba(255,255,255,0.90); letter-spacing:.01em; }
.sfs-td { width:4px; height:4px; border-radius:50%; background:rgba(75,213,87,0.50); flex-shrink:0; margin:0 8px; }

/* Background decorations */
.sfs-mesh { position:absolute; top:-60px; right:-60px; width:520px; height:520px; opacity:.35; animation:meshRotate 40s linear infinite; }
@keyframes meshRotate { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
.sfs-globe-wrap {
  position:absolute; bottom:-80px; left:-70px; width:300px; height:300px;
  animation:globePulse 7s ease-in-out infinite; z-index:1;
}
@keyframes globePulse {
  0%,100% { transform:scale(1) rotate(-5deg); opacity:.45; }
  50%      { transform:scale(1.04) rotate(-2deg); opacity:.62; }
}

/* ══ RESPONSIVE ══ */
@media(max-width:1200px){
  .sfs-hero { border-radius:22px; margin-top:16px; }
  .sfs-grid { grid-template-columns:1fr; padding:48px 32px 28px; gap:28px; }
  .sfs-h1 { font-size:50px; letter-spacing:-2.5px; }
  .sfs-right { min-height:740px; }
  .sfs-asset-img { width:360px; }
  .sfs-shield-badge { width:80px; height:80px; top:20px; right:10px; }
  .sfs-ring-2, .sfs-ring-3 { display:none; }
}
@media(max-width:640px){
  .sfs-hero { border-radius:20px; border-width:1px; margin-top:12px; }
  .sfs-grid { grid-template-columns:1fr; padding:36px 18px 24px; gap:28px; }
  .sfs-h1 { font-size:38px; letter-spacing:-1.8px; line-height:1.0; margin-bottom:8px; }
  .sfs-sub { font-size:13.5px; line-height:1.78; margin-bottom:14px; }
  .sfs-badge { font-size:8.5px; margin-bottom:18px; padding:7px 12px 7px 9px; }
  .sfs-tags { gap:6px; margin-bottom:18px; }
  .sfs-tag { font-size:9.5px; padding:4px 9px; }
  .sfs-actions { flex-direction:column; gap:10px; margin-bottom:20px; align-items:stretch; }
  .sfs-btn-main { padding:15px 20px; font-size:14px; justify-content:center; }
  .sfs-btn-sec  { padding:14px 20px; font-size:13.5px; justify-content:center; }
  .sfs-stats { gap:12px; flex-wrap:wrap; }
  .sfs-stat-num { font-size:18px; }
  .sfs-right { min-height:680px; overflow:visible; }
  .sfs-stage { min-height:680px !important; }
  .sfs-phone { width:300px; }
  .sfs-phone-frame { border-radius:52px; }
  .sfs-phone-inner { border-radius:48px; }
  .sfs-phone-glow-ring { border-radius:64px; }
  .sfs-phone-glow-ring2 { border-radius:72px; }
  .sfs-sfsi-screen { border-radius:0 0 44px 44px; }
  .sfs-popup-screen { border-radius:0 0 44px 44px; }
  .sfs-popup-overlay { border-radius:48px; }
  .sfs-popup-sheet { border-radius:22px 22px 44px 44px; }
  .sfs-asset-img { width:300px; }
  .sfs-qr-card { right:-6px; bottom:68px; min-width:185px; padding:10px 13px; transform:none; }
  .sfs-status-pill { top:52px; left:4px; }
  .sfs-ticker { border-radius:0 0 18px 18px; }
  .sfs-ticker-label { padding:0 14px; font-size:8px; height:44px; }
  .sfs-ti { height:44px; }
  .sfs-left { padding-right:0; }
}
@media(max-width:380px){
  .sfs-h1 { font-size:31px; letter-spacing:-1.2px; }
  .sfs-grid { padding:22px 14px 16px; }
  .sfs-phone { width:270px; }
  .sfs-asset-img { width:250px; }
  .sfs-right { min-height:560px; }
}
`;

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

/* ── REDESIGNED PHONE DISPLAY: SFSI screen + dark frame ── */
function PhoneDisplay({ asset, animClass, showPopup }) {
  return (
    <div className={`sfs-phone ${animClass}`}>
      {/* Green glow border rings */}
      <div className="sfs-phone-glow-ring" />
      <div className="sfs-phone-glow-ring2" />

      <div className="sfs-phone-frame">
        {/* Side buttons */}
        <div className="sfs-phone-btn-l" />
        <div className="sfs-phone-btn-l2" />
        <div className="sfs-phone-btn-r" />

        {/* Dynamic Island */}
        <div className="sfs-dynamic-island">
          <div className="sfs-island-cam" />
          <div className="sfs-island-mic" />
        </div>

        <div className="sfs-phone-inner">
          {/* Status bar */}
          <div className="sfs-notch-row">
            <span className="sfs-notch-row-time">9:41</span>
            <span style={{ width: 110, display: "inline-block" }} />
            <span className="sfs-notch-row-icons">▲ 🔋</span>
          </div>

          {/* SFSI branded screen */}
          <div className="sfs-sfsi-screen">

            {/* Header */}
            <div className="sfs-sfsi-header">
              <div className="sfs-sfsi-logo-row">
                <div className="sfs-sfsi-shield">🛡️</div>
                <div className="sfs-sfsi-wordmark">SF<span>SI</span></div>
              </div>
              <div className="sfs-sfsi-company">ScanForSafe Innovations Pvt Ltd</div>
              <div className="sfs-sfsi-divider">
                <div className="sfs-sfsi-divline rev" />
                <div className="sfs-sfsi-divlabel">Smart Shield</div>
                <div className="sfs-sfsi-divline" />
              </div>
            </div>

            {/* Vehicle / asset info card */}
            <div className="sfs-sfsi-veh-card">
              <div className="sfs-sfsi-veh-icon">{asset.emoji}</div>
              <div className="sfs-sfsi-veh-title">{asset.label} Information</div>
              <div className="sfs-sfsi-veh-pill">
                <span className="sfs-sfsi-veh-dot" />
                Verified
              </div>
              <div className="sfs-sfsi-veh-desc">
                This {asset.label.toLowerCase()} is registered with ScanForSafe. You can connect with the owner or report an issue.
              </div>
            </div>

            {/* Action buttons */}
            <div className="sfs-sfsi-actions">
              <div className="sfs-sfsi-act green">
                <div className="sfs-sfsi-act-ico green">📞</div>
                <div>
                  <div className="sfs-sfsi-act-title">{asset.callLabel}</div>
                  <div className="sfs-sfsi-act-sub">Tap to call the owner immediately</div>
                </div>
                <div className="sfs-sfsi-act-arr">→</div>
              </div>
              <div className="sfs-sfsi-act blue">
                <div className="sfs-sfsi-act-ico blue">💬</div>
                <div>
                  <div className="sfs-sfsi-act-title">{asset.msgLabel}</div>
                  <div className="sfs-sfsi-act-sub">Send a quick message to the owner</div>
                </div>
                <div className="sfs-sfsi-act-arr">→</div>
              </div>
              <div className="sfs-sfsi-act orange">
                <div className="sfs-sfsi-act-ico orange">🔔</div>
                <div>
                  <div className="sfs-sfsi-act-title" style={{ color: "#b45309" }}>Report Emergency</div>
                  <div className="sfs-sfsi-act-sub" style={{ color: "#92400e" }}>Report suspicious activity</div>
                </div>
                <div className="sfs-sfsi-act-arr" style={{ color: "#d97706" }}>→</div>
              </div>
            </div>

            {/* Why box */}
            <div className="sfs-sfsi-why">
              <div className="sfs-sfsi-why-ico">🛡️</div>
              <div>
                <div className="sfs-sfsi-why-t">Why am I seeing this?</div>
                <div className="sfs-sfsi-why-b">
                  This {asset.label.toLowerCase()} is part of the ScanForSafe safety network. Info shown only to help in genuine situations.
                </div>
              </div>
            </div>

            <div className="sfs-sfsi-footer">Thank you for helping keep our community safe. ♥</div>
            <div className="sfs-home-ind" />

            {/* POPUP OVERLAY — slides up after delay */}
            {showPopup && (
              <div className="sfs-popup-overlay">
                <div className="sfs-popup-sheet">
                  <div className="sfs-popup-handle" />

                  {/* Owner row */}
                  <div className="sfs-popup-owner-row">
                    <div className="sfs-popup-avatar">👤</div>
                    <div>
                      <div className="sfs-popup-owner-name">{asset.owner}</div>
                      <div className="sfs-popup-owner-label">
                        {asset.label} Owner &nbsp;
                        <span className="sfs-popup-verified-badge">✓ Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="sfs-popup-actions">
                    <button className="sfs-popup-btn primary">
                      <div className="sfs-popup-btn-ico">📞</div>
                      <div style={{ flex: 1 }}>
                        <span className="sfs-popup-btn-main">Contact Owner</span>
                        <span className="sfs-popup-btn-sub">Masked · Privacy Protected</span>
                      </div>
                      <span className="sfs-popup-btn-arrow">›</span>
                    </button>
                    <button className="sfs-popup-btn secondary">
                      <div className="sfs-popup-btn-ico">📍</div>
                      <div style={{ flex: 1 }}>
                        <span className="sfs-popup-btn-main">Share My Location</span>
                        <span className="sfs-popup-btn-sub">Help return safely</span>
                      </div>
                      <span className="sfs-popup-btn-arrow">›</span>
                    </button>
                    <button className="sfs-popup-btn danger">
                      <div className="sfs-popup-btn-ico">🚨</div>
                      <div style={{ flex: 1 }}>
                        <span className="sfs-popup-btn-main">Report Lost / Stolen</span>
                        <span className="sfs-popup-btn-sub">Alert authorities instantly</span>
                      </div>
                      <span className="sfs-popup-btn-arrow">›</span>
                    </button>
                  </div>

                  {/* Shield footer */}
                  <div className="sfs-popup-shield">
                    <div className="sfs-popup-shield-ico">🛡️</div>
                    <div>
                      <div className="sfs-popup-shield-title">SFS Shield Active</div>
                      <div className="sfs-popup-shield-sub">End-to-end encrypted · 24/7 coverage</div>
                    </div>
                    <div className="sfs-popup-shield-check">✓</div>
                  </div>

                  <div className="sfs-home-ind" style={{ marginTop: 12, marginBottom: 4 }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <h4>{asset.label} Verified</h4>
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

export default function ScanForSafeHero() {
  const [active, setActive]       = useState(0);
  const [phase,  setPhase]        = useState("scan");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const t0 = setTimeout(() => setPhase("phone"), 2400);
    const t1 = setTimeout(() => setShowPopup(true), 3700);

    const iv = setInterval(() => {
      setShowPopup(false);
      setPhase("phone-out");
      setTimeout(() => {
        setActive((p) => (p + 1) % ASSETS.length);
        setPhase("scan");
      }, 360);
      setTimeout(() => setPhase("phone"), 2800);
      setTimeout(() => setShowPopup(true), 4100);
    }, 8200);

    return () => { clearTimeout(t0); clearTimeout(t1); clearInterval(iv); };
  }, []);

  const tickerAll = [...TICKER, ...TICKER];
  const c = ASSETS[active];

  return (
    <>
      <style>{css}</style>
      <div className="sfs-hero">

        <div className="sfs-bg">
          <MeshLines />
          <Globe />
          <Particles />
        </div>

        <div className="sfs-grid">
          {/* ── LEFT ── */}
          <div className="sfs-left">
            <div className="sfs-seo-heading">
              Smart Asset Protection · No App Download Needed, Ever
            </div>
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
            <p className="sfs-seo-sub">
              Protect vehicles, bikes, luggage &amp; valuables —{" "}
              <em>no app download needed, ever.</em>
            </p>
            <p className="sfs-sub">
              Next-generation QR + NFC verification with instant owner alerts
              and live smart protection. Works with any camera app, with one scan.
            </p>
            <div className="sfs-tags">
              {SEO_TAGS.map((tag) => (
                <span key={tag} className="sfs-tag">
                  <span className="sfs-tag-dot" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="sfs-actions">
              <a href="#register" className="sfs-btn-main">🔐 Pre-Register Free</a>
              <a href="#how" className="sfs-btn-sec">
                <div className="sfs-play-ring">▶</div>
                See How It Works
              </a>
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

          {/* ── RIGHT ── */}
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
            <div className="sfs-stage" style={{ minHeight: 740 }}>
              {phase === "scan"     && <ScanStage   asset={c} animClass="sfs-scan-in"  />}
              {phase === "scan-out" && <ScanStage   asset={c} animClass="sfs-scan-out" />}
              {(phase === "phone" || phase === "phone-out") && (
                <PhoneDisplay
                  asset={c}
                  animClass={phase === "phone" ? "sfs-entering" : "sfs-exiting"}
                  showPopup={showPopup}
                />
              )}
            </div>
          </div>
        </div>

        {/* ── DARK TICKER ── */}
        <div className="sfs-ticker">
          <div className="sfs-ticker-dots" />
          <div className="sfs-ticker-inner">
            <div className="sfs-ticker-label">
              <span className="sfs-ticker-live-dot" />
              Live
            </div>
            <div className="sfs-ticker-track">
              {tickerAll.map((item, i) => (
                <div key={i} className="sfs-ti">
                  <div className="sfs-ti-ico">{item.ico}</div>
                  <span className="sfs-ti-text">{item.text}</span>
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