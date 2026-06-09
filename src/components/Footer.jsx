import { useState } from "react";
import { Link } from "react-router-dom";

const logo = "/logo.png";

// Social icons
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const TwitterXIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); setEmail(""); }, 3000);
    }
  };

  const navLinks = [
    { label: "Home",         to: "/" },
    { label: "Features",     to: "/features" },
    { label: "Use Cases",    to: "/use-cases" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "About Us",     to: "/about" },
    { label: "Franchise",    to: "/franchise" },
    { label: "Contact",      to: "/contact" },
  ];

  const socials = [
    { Icon: FacebookIcon,  href: "https://facebook.com/Scanforsafeinnovations",      label: "Facebook",  bg: "#1877F2" },
    { Icon: InstagramIcon, href: "https://www.instagram.com/scanforsafeinnovations", label: "Instagram", bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" },
    { Icon: TwitterXIcon,  href: "https://x.com/Scanforsafe99",                      label: "X",         bg: "#000" },
    { Icon: LinkedInIcon,  href: "https://linkedin.com",                             label: "LinkedIn",  bg: "#0A66C2" },
    { Icon: YoutubeIcon,   href: "https://www.youtube.com/@Scanforsafe",             label: "YouTube",   bg: "#FF0000" },
    { Icon: TelegramIcon,  href: "https://t.me/scanforsafe",                         label: "Telegram",  bg: "#26A5E4" },
  ];

  const categories = [
    {
      label: "Vehicle Protection", sub: "Smart Tags for Vehicles",
      svg: <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="#2ebd3a" strokeWidth="1.8" strokeLinecap="round"><rect x="6" y="18" width="36" height="18" rx="4"/><circle cx="14" cy="36" r="4"/><circle cx="34" cy="36" r="4"/><path d="M6 22l4-8h28l4 8"/><path d="M18 14h12"/><path d="M10 26h28"/></svg>,
    },
    {
      label: "Senior Citizen Protection", sub: "Safety Bands",
      svg: <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="#2ebd3a" strokeWidth="1.8" strokeLinecap="round"><circle cx="24" cy="13" r="6"/><path d="M10 42v-6a14 14 0 0 1 28 0v6"/><path d="M16 26l3 3 5-5"/><circle cx="35" cy="20" r="8" fill="rgba(46,189,58,0.1)" stroke="#2ebd3a"/><path d="M35 17v3l2 2"/></svg>,
    },
    {
      label: "Child Safety", sub: "Smart ID Tags",
      svg: <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="#2ebd3a" strokeWidth="1.8" strokeLinecap="round"><circle cx="24" cy="12" r="6"/><path d="M12 42v-6a12 12 0 0 1 24 0v6"/><path d="M15 24l3 3 5-5"/><path d="M32 6l4 4-6 6"/></svg>,
    },
    {
      label: "Pet Safety", sub: "Smart Pet Tags",
      svg: <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="#2ebd3a" strokeWidth="1.8" strokeLinecap="round"><circle cx="10" cy="14" r="4"/><circle cx="38" cy="14" r="4"/><circle cx="24" cy="8" r="4"/><path d="M14 24c0 7 10 16 10 16s10-9 10-16a10 10 0 0 0-20 0z"/></svg>,
    },
    {
      label: "Luggage Protection", sub: "Smart Luggage Tags",
      svg: <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="#2ebd3a" strokeWidth="1.8" strokeLinecap="round"><rect x="10" y="16" width="28" height="26" rx="4"/><path d="M30 16v-4a6 6 0 0 0-12 0v4"/><line x1="24" y1="24" x2="24" y2="34"/><line x1="19" y1="29" x2="29" y2="29"/></svg>,
    },
    {
      label: "Valuable Protection", sub: "For Everyday Essentials",
      svg: <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="#2ebd3a" strokeWidth="1.8" strokeLinecap="round"><path d="M24 6l5 10h11l-9 8 3 11-10-6-10 6 3-11-9-8h11z"/></svg>,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .ft-root {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          color: #e2e8f0;
          width: 100%;
          overflow: hidden;
        }

        /* ── Background image layer ── */
        .ft-bg {
          position: absolute;
          inset: 0;
          background-image: url('/footer_bg.png');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          z-index: 0;
        }
        /* Dark overlay so text stays readable */
        .ft-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(6,20,42,0.88) 0%,
            rgba(6,20,42,0.82) 40%,
            rgba(4,14,30,0.92) 80%,
            rgba(3,10,22,0.97) 100%
          );
        }

        /* top shimmer line */
        .ft-root::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #2ebd3a 40%, #4ade80 50%, #2ebd3a 60%, transparent);
          z-index: 2;
        }

        .ft-wrap {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 56px);
        }

        /* ── Newsletter ── */
        .ft-newsletter {
          border: 1.5px solid rgba(46,189,58,0.28);
          border-radius: 18px;
          background: rgba(6,20,42,0.55);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: 20px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin: 28px 0 0;
          flex-wrap: wrap;
        }
        .ft-nl-left { display: flex; align-items: center; gap: 16px; }
        .ft-nl-icon-box {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(46,189,58,0.10);
          border: 1.5px solid rgba(46,189,58,0.22);
          display: flex; align-items: center; justify-content: center;
          color: #2ebd3a; flex-shrink: 0; position: relative;
        }
        .ft-nl-badge {
          position: absolute; bottom: -4px; right: -4px;
          width: 18px; height: 18px; border-radius: 50%;
          background: #2ebd3a; border: 2px solid #06142A;
          display: flex; align-items: center; justify-content: center; color: white;
        }
        .ft-nl-title { font-family: 'Sora', sans-serif; font-size: 16px; font-weight: 700; color: #fff; margin: 0 0 3px; }
        .ft-nl-title span { color: #2ebd3a; }
        .ft-nl-desc { font-size: 12.5px; color: #94a3b8; margin: 0; line-height: 1.5; }
        .ft-nl-right { display: flex; flex-direction: column; gap: 6px; flex: 1; max-width: 480px; min-width: 260px; }
        .ft-nl-form {
          display: flex;
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.10);
          border-radius: 12px; overflow: hidden;
          transition: border-color 0.2s;
        }
        .ft-nl-form:focus-within { border-color: #2ebd3a; }
        .ft-nl-form-inner { display: flex; align-items: center; gap: 8px; padding: 0 14px; flex: 1; color: #64748b; }
        .ft-nl-input {
          background: transparent; border: none; outline: none;
          color: #fff; font-size: 13px; font-family: 'DM Sans', sans-serif;
          padding: 11px 0; width: 100%;
        }
        .ft-nl-input::placeholder { color: #64748b; }
        .ft-nl-btn {
          background: linear-gradient(135deg, #1a8a24, #2ebd3a);
          color: #fff; border: none; padding: 0 18px;
          font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 700;
          cursor: pointer; display: flex; align-items: center; gap: 6px;
          transition: opacity 0.2s; white-space: nowrap;
        }
        .ft-nl-btn:hover { opacity: 0.88; }
        .ft-nl-hint { display: flex; align-items: center; gap: 5px; font-size: 11.5px; color: rgba(46,189,58,0.65); }

        /* ── Category row ── */
        .ft-cats {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border: 1.5px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          margin: 20px 0;
          overflow: hidden;
          background: rgba(6,20,42,0.45);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .ft-cat-item {
          padding: 18px 12px 16px;
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          border-right: 1px solid rgba(255,255,255,0.07);
          transition: background 0.2s; cursor: default;
        }
        .ft-cat-item:last-child { border-right: none; }
        .ft-cat-item:hover { background: rgba(46,189,58,0.08); }
        .ft-cat-icon {
          width: 54px; height: 54px; border-radius: 14px;
          background: rgba(46,189,58,0.08);
          border: 1.5px solid rgba(46,189,58,0.18);
          display: flex; align-items: center; justify-content: center;
        }
        .ft-cat-title { font-family: 'Sora', sans-serif; font-size: 11.5px; font-weight: 700; color: #fff; text-align: center; line-height: 1.3; }
        .ft-cat-sub { font-size: 10.5px; color: #64748b; text-align: center; line-height: 1.3; margin-top: -4px; }

        /* ── Main grid ── */
        .ft-main-grid {
          display: grid;
          grid-template-columns: 1.7fr 1fr 1.3fr 1.4fr;
          gap: clamp(20px, 3vw, 48px);
          padding: 8px 0 32px;
        }

        .ft-col-title {
          font-family: 'Sora', sans-serif;
          font-size: 11px; font-weight: 800; color: #2ebd3a;
          letter-spacing: 0.1em; text-transform: uppercase;
          margin: 0 0 18px; position: relative; padding-bottom: 10px;
        }
        .ft-col-title::after {
          content: ''; position: absolute; left: 0; bottom: 0;
          width: 28px; height: 2px; background: #2ebd3a; border-radius: 2px;
        }

        /* Brand col */
        .ft-brand-logo-row { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; text-decoration: none; }
        .ft-logo-box {
          width: 54px; height: 54px; border-radius: 14px;
          background: rgba(255,255,255,0.92);
          border: 2px solid #2ebd3a;
          box-shadow: 0 0 18px rgba(46,189,58,0.22);
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; flex-shrink: 0;
        }
        .ft-logo-box img { width: 80%; height: auto; object-fit: contain; }
        .ft-brand-name { font-family: 'Sora', sans-serif; font-size: 20px; font-weight: 800; color: #fff; margin: 0; letter-spacing: -0.02em; }
        .ft-brand-name span { color: #2ebd3a; }
        .ft-brand-tag { font-size: 9.5px; font-weight: 700; color: #2ebd3a; letter-spacing: 0.12em; text-transform: uppercase; margin-top: 2px; }
        .ft-brand-desc { font-size: 13px; color: #94a3b8; line-height: 1.7; margin: 0 0 18px; max-width: 320px; }
        .ft-socials { display: flex; gap: 9px; flex-wrap: wrap; }
        .ft-social-btn {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: #fff; text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          flex-shrink: 0; position: relative; overflow: hidden;
        }
        .ft-social-btn::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 42%; background: linear-gradient(180deg,rgba(255,255,255,0.18),transparent);
          pointer-events: none; border-radius: 9px 9px 40% 40%;
        }
        .ft-social-btn:hover { transform: translateY(-4px) scale(1.08); box-shadow: 0 8px 22px rgba(0,0,0,0.45); }

        /* Nav */
        .ft-nav-links { display: flex; flex-direction: column; gap: 10px; }
        .ft-nav-link {
          display: flex; align-items: center; gap: 8px;
          color: #94a3b8; text-decoration: none;
          font-size: 13.5px; font-weight: 500;
          transition: color 0.2s, transform 0.2s;
        }
        .ft-nav-link:hover { color: #fff; transform: translateX(4px); }
        .ft-nav-dot { width: 5px; height: 5px; border-radius: 50%; background: #2ebd3a; flex-shrink: 0; }

        /* Contact */
        .ft-contact-list { display: flex; flex-direction: column; gap: 13px; }
        .ft-contact-item { display: flex; align-items: flex-start; gap: 10px; }
        .ft-contact-icon-box {
          width: 30px; height: 30px; border-radius: 8px;
          background: rgba(46,189,58,0.10);
          display: flex; align-items: center; justify-content: center;
          color: #2ebd3a; flex-shrink: 0;
        }
        .ft-contact-label { font-family: 'Sora', sans-serif; font-size: 10.5px; font-weight: 700; color: #2ebd3a; margin-bottom: 1px; }
        .ft-contact-val { font-size: 12.5px; color: #cbd5e1; line-height: 1.5; }

        /* QR Card */
        .ft-qr-card {
          background: rgba(6,20,42,0.60);
          border: 1.5px solid rgba(46,189,58,0.22);
          border-radius: 16px; padding: 18px 16px; height: fit-content;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .ft-qr-heading { font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 800; color: #2ebd3a; margin: 0 0 4px; letter-spacing: -0.01em; }
        .ft-qr-sub { font-size: 12px; color: #94a3b8; margin: 0 0 14px; line-height: 1.5; }
        .ft-qr-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 0 0 12px; }
        .ft-qr-row { display: flex; align-items: center; gap: 12px; padding: 8px 0; }
        .ft-qr-row + .ft-qr-row { border-top: 1px solid rgba(255,255,255,0.06); }
        .ft-qr-icon-box {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(46,189,58,0.10);
          border: 1.5px solid rgba(46,189,58,0.18);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: #2ebd3a;
        }
        .ft-qr-row-title { font-family: 'Sora', sans-serif; font-size: 12.5px; font-weight: 700; color: #fff; margin: 0 0 2px; }
        .ft-qr-row-sub { font-size: 11px; color: #64748b; margin: 0; }

        /* Bottom bar */
        .ft-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 18px 0;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
        }
        .ft-copy { font-size: 12.5px; color: #64748b; margin: 0; }
        .ft-copy strong { color: #2ebd3a; font-weight: 600; }
        .ft-trust-items { display: flex; align-items: center; gap: 0; }
        .ft-trust-item {
          display: flex; align-items: center; gap: 8px;
          padding: 0 18px; border-right: 1px solid rgba(255,255,255,0.08);
        }
        .ft-trust-item:first-child { padding-left: 0; }
        .ft-trust-item:last-child { border-right: none; padding-right: 0; }
        .ft-trust-icon { color: #2ebd3a; }
        .ft-trust-title { font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; color: #fff; }
        .ft-trust-sub { font-size: 10px; color: #64748b; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .ft-main-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
          .ft-cats { grid-template-columns: repeat(3, 1fr); }
          .ft-cat-item:nth-child(3) { border-right: none; }
        }
        @media (max-width: 700px) {
          .ft-main-grid { grid-template-columns: 1fr; }
          .ft-cats { grid-template-columns: repeat(2, 1fr); }
          .ft-cat-item:nth-child(2) { border-right: none; }
          .ft-newsletter { flex-direction: column; align-items: flex-start; }
          .ft-nl-right { max-width: 100%; width: 100%; }
          .ft-bottom { flex-direction: column; align-items: flex-start; }
          .ft-trust-items { flex-wrap: wrap; gap: 10px; }
          .ft-trust-item { border-right: none; padding: 0; }
        }
      `}</style>

      <footer className="ft-root">

        {/* Background image with overlay */}
        <div className="ft-bg" />

        <div className="ft-wrap">

          {/* ── Newsletter ── */}
          <div className="ft-newsletter">
            <div className="ft-nl-left">
              <div className="ft-nl-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div className="ft-nl-badge">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
              </div>
              <div>
                <p className="ft-nl-title">Stay Connected with <span>ScanForSafe</span></p>
                <p className="ft-nl-desc">Get product updates, safety tips, launch announcements,<br />and exclusive offers.</p>
              </div>
            </div>
            <div className="ft-nl-right">
              <form onSubmit={handleSubscribe} className="ft-nl-form">
                <div className="ft-nl-form-inner">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <input
                    className="ft-nl-input"
                    type="email"
                    required
                    placeholder={submitted ? "Thanks for subscribing!" : "Enter your email address"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={submitted}
                  />
                </div>
                <button type="submit" className="ft-nl-btn" disabled={submitted}>
                  {submitted ? "Subscribed!" : "Get Updates"}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
              <div className="ft-nl-hint">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                No spam. Unsubscribe anytime.
              </div>
            </div>
          </div>

          {/* ── Categories ── */}
          <div className="ft-cats">
            {categories.map((c, i) => (
              <div className="ft-cat-item" key={i}>
                <div className="ft-cat-icon">{c.svg}</div>
                <div className="ft-cat-title">{c.label}</div>
                <div className="ft-cat-sub">{c.sub}</div>
              </div>
            ))}
          </div>

          {/* ── Main Grid ── */}
          <div className="ft-main-grid">

            {/* Brand */}
            <div>
              <Link to="/" className="ft-brand-logo-row">
                <div className="ft-logo-box">
                  <img src={logo} alt="ScanForSafe" />
                </div>
                <div>
                  <p className="ft-brand-name">Scan<span>ForSafe</span></p>
                  <p className="ft-brand-tag">Smart Shield</p>
                </div>
              </Link>
              <p className="ft-brand-desc">
                ScanForSafe helps people connect safely during emergencies and everyday situations through smart QR + NFC technology for vehicles, children, senior citizens, pets, luggage, and valuables.
              </p>
              <div className="ft-socials">
                {socials.map(({ Icon, href, label, bg }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="ft-social-btn" title={label} style={{ background: bg }}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="ft-col-title">Navigation</p>
              <div className="ft-nav-links">
                {navLinks.map((l, i) => (
                  <Link key={i} to={l.to} className="ft-nav-link"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="ft-nav-dot" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="ft-col-title">Contact Us</p>
              <div className="ft-contact-list">
                {[
                  {
                    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                    label: 'Phone', val: '+91 98765 43210',
                  },
                  {
                    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                    label: 'Email', val: 'customercare@scanforsafe.com',
                  },
                  {
                    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                    label: 'Website', val: 'www.scanforsafe.com',
                  },
                  {
                    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
                    label: 'WhatsApp Support', val: '+91 98765 43210',
                  },
                  {
                    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                    label: 'Corporate Office', val: 'SFSI Innovations Tower, Phase-2,\nCyber Heights, Hyderabad, India',
                  },
                ].map((c, i) => (
                  <div className="ft-contact-item" key={i}>
                    <div className="ft-contact-icon-box">{c.icon}</div>
                    <div>
                      <div className="ft-contact-label">{c.label}</div>
                      <div className="ft-contact-val">{c.val.split('\n').map((l, j) => <span key={j} style={{ display: 'block' }}>{l}</span>)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* QR Card */}
            <div className="ft-qr-card">
              <p className="ft-qr-heading">Scan. Connect. Protect.</p>
              <p className="ft-qr-sub">No App Needed.<br />Works on any smartphone.</p>
              <div className="ft-qr-divider" />
              <div className="ft-qr-row">
                <div className="ft-qr-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
                    <rect x="5" y="5" width="3" height="3" fill="currentColor"/><rect x="16" y="5" width="3" height="3" fill="currentColor"/><rect x="5" y="16" width="3" height="3" fill="currentColor"/>
                    <path d="M14 14h3v3h-3zM17 17h3v3h-3z"/>
                  </svg>
                </div>
                <div>
                  <p className="ft-qr-row-title">QR Code</p>
                  <p className="ft-qr-row-sub">Scan to connect instantly</p>
                </div>
              </div>
              <div className="ft-qr-row">
                <div className="ft-qr-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                    <circle cx="12" cy="20" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="ft-qr-row-title">NFC Technology</p>
                  <p className="ft-qr-row-sub">Tap & connect in a second</p>
                </div>
              </div>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="ft-bottom">
            <p className="ft-copy">
              © 2026 <strong>ScanForSafe Innovations Pvt. Ltd.</strong> All rights reserved.
            </p>
            <div className="ft-trust-items">
              {[
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Privacy First', sub: 'Your data is safe' },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM17 17h3v3h-3z"/></svg>, title: 'QR + NFC', sub: 'Smart Technology' },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, title: 'Secure Access', sub: 'Only when needed' },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, title: 'Works Worldwide', sub: 'Trusted Everywhere' },
              ].map((t, i) => (
                <div className="ft-trust-item" key={i}>
                  <span className="ft-trust-icon">{t.icon}</span>
                  <div>
                    <div className="ft-trust-title">{t.title}</div>
                    <div className="ft-trust-sub">{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}