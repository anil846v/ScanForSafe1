import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Lock, Cloud, Shield } from 'lucide-react'

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
    color: '#0057b8',
    bg: 'linear-gradient(135deg,#eff6ff,#dbeafe)',
    border: '#bfdbfe',
    emoji: '📞',
    desc: 'Mon - Sat, 9am to 7pm',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    href: 'https://wa.me/91XXXXXXXXXX',
    color: '#2ebd3a',
    bg: 'linear-gradient(135deg,#f8fafc,#e8f8eb)',
    border: '#e8f8eb',
    emoji: '💬',
    desc: 'Fastest - reply under 10 min',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@scanforsafe.in',
    href: 'mailto:hello@scanforsafe.in',
    color: '#7c3aed',
    bg: 'linear-gradient(135deg,#f8fafc,#ede9fe)',
    border: '#ddd6fe',
    emoji: '✉️',
    desc: 'Reply within 2 business hours',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Your City, State - 000000',
    href: null,
    color: '#e11d48',
    bg: 'linear-gradient(135deg,#fff1f2,#ffe4e6)',
    border: '#fecdd3',
    emoji: '📍',
    desc: 'Headquarters, India',
  },
]

function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function useCounter(target, duration = 1800, active = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const prog = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - prog, 3)
      setVal(Math.floor(ease * target))
      if (prog < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return val
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const [formRef, formInView] = useInView()
  const [infoRef, infoInView] = useInView()

  const scrollToForm = (e) => {
    if (e) e.preventDefault()
    const el = document.getElementById('contact-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const serviceId = "service_ncit63l"
    const templateId = "template_dg0onu8"
    const publicKey = "IhorqTYFIEM5OnvfI"
    const privateKey = "5kxT8tPwZqUL0m7jD1ANA"

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          accessToken: privateKey,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            name: form.name,
            email: form.email,
            phone: form.phone || "Not provided",
            message: form.message,
            title: "New Website message",
            to_name: "ScanForSafe Team",
          },
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const errorText = await response.text()
        alert(`Failed to send message: ${errorText || response.statusText}`)
      }
    } catch (error) {
      alert("A network error occurred. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ fontFamily: "'Instrument Sans', 'Cabin', sans-serif", overflowX: 'hidden' }}>

      {/* ── FONTS ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        /* ── Keyframes — identical to Franchise page ── */
        @keyframes morphBlob {
          0%,100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; }
          25%      { border-radius: 40% 60% 30% 70% / 60% 40% 70% 50%; }
          50%      { border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%; }
          75%      { border-radius: 30% 70% 60% 40% / 70% 30% 60% 40%; }
        }
        @keyframes scanBeam {
          0%   { top: -4px; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: .5; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.08); }
        }
        @keyframes orbMove1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(60px,-40px) scale(1.1); }
          66%      { transform: translate(-30px,30px) scale(.95); }
        }
        @keyframes orbMove2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-70px,30px) scale(1.05); }
          66%      { transform: translate(40px,-50px) scale(1.1); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 64px; }
        }
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-30deg); opacity: 0; }
          65%  { transform: scale(1.2) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── Hero section — matches Franchise exactly ── */
        .cu-hero-section {
          position: relative;
          overflow: hidden;
          /* EXACT same gradient as Franchise hero */
          background: linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #004b23 80%, #031a07 100%) ;
          padding-top: 110px;
          padding-bottom: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Force the gradient to paint behind everything */
          isolation: isolate;
        }

        /* Ensure the wave SVG at the bottom doesn't clip the background */
        .cu-hero-section::after {
          content: '';
          position: absolute;
          inset: 0;
          /* Repeat the gradient so nothing bleeds through */
          background: inherit;
          z-index: 0;
          pointer-events: none;
        }

        /* Dot grid overlay — z-index 1, same as Franchise */
        .cu-dot-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 32px 32px;
          z-index: 1;
        }

        /* Glowing orbs — z-index 1 */
        .cu-orb-1 {
          position: absolute;
          width: 560px; height: 560px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(34,197,94,0.16) 0%, transparent 65%);
          top: -180px; right: -120px;
          animation: orbMove1 14s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }
        .cu-orb-2 {
          position: absolute;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,87,184,0.22) 0%, transparent 65%);
          bottom: -160px; left: -100px;
          animation: orbMove2 18s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        /* Scan beam */
        .cu-scan-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 2;
        }
        .cu-scan-beam {
          position: absolute;
          left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent 0%, rgba(74,222,128,0) 15%, rgba(74,222,128,0.9) 50%, rgba(74,222,128,0) 85%, transparent 100%);
          animation: scanBeam 4s ease-in-out infinite;
          filter: blur(1px);
        }

        /* Content z-index 3 so it sits above all bg layers */
        .cu-hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
        }

        /* Bottom wave — z-index 3 */
        .cu-wave-wrap {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          pointer-events: none;
          z-index: 3;
        }

        /* ── Hero grid ── */
        .cu-hero-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 48px;
          align-items: center;
          max-width: 1240px;
          margin: 0 auto;
          padding: 20px 24px;
          width: 100%;
          text-align: left;
        }

        .cu-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          z-index: 3;
        }

        /* Support agent image — absolutely positioned to bottom-right, same approach as before */
        .cu-hero-right {
          position: absolute;
          bottom: 0;
          right: 0;
          height: 100%;
          width: 44%;
          pointer-events: none;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        /* ── Channel cards ── */
        .cu-channels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          margin-top: 10px;
          margin-bottom: 24px;
        }

        .cu-channel-card {
          background: rgba(4, 15, 37, 0.70);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.5px solid rgba(26, 54, 93, 0.5);
          border-radius: 16px;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.30);
          transition: all 0.25s ease;
        }
        .cu-channel-card:hover {
          transform: translateY(-4px);
          border-color: rgba(74,222,128,0.4);
          box-shadow: 0 12px 40px rgba(74,222,128,0.15);
        }

        .cu-channel-icon-box {
          width: 68px; height: 68px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .cu-channel-title {
          font-family: 'Outfit', sans-serif;
          font-size: 16.5px; font-weight: 700;
          color: #ffffff; margin-bottom: 4px;
        }
        .cu-channel-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          line-height: 1.5;
          margin-bottom: 20px;
          max-width: 210px;
          flex-grow: 1;
        }
        .cu-channel-btn {
          border-radius: 30px;
          padding: 8px 18px;
          font-size: 13px; font-weight: 600;
          font-family: 'Space Grotesk', sans-serif;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.22s ease;
          background: transparent;
          margin: 0 auto;
        }

        /* ── Trust bar ── */
        .cu-trust-bar {
          background: rgba(4,15,37,0.60);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1.5px solid rgba(26,54,93,0.4);
          border-radius: 14px;
          padding: 12px 24px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 16px;
        }
        .cu-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.8);
        }

        /* ── Field styles ── */
        .cf-field { position: relative; }
        .cf-field label {
          display: block;
          font-family: 'Fira Code', monospace;
          font-size: 10.5px; font-weight: 500;
          letter-spacing: .14em; text-transform: uppercase;
          color: #64748b; margin-bottom: 7px;
          transition: color .2s;
        }
        .cf-field:focus-within label { color: #0057b8; }
        .cf-input {
          width: 100%; border: 2px solid #e2e8f0; border-radius: 14px;
          padding: 13px 16px; font-size: 14px; font-weight: 500;
          color: #0B2545; background: #f8fafc; outline: none;
          font-family: 'Instrument Sans', sans-serif;
          transition: all .25s cubic-bezier(.4,0,.2,1);
          box-sizing: border-box;
        }
        .cf-input::placeholder { color: #94a3b8; font-weight: 400; }
        .cf-input:focus {
          border-color: #0057b8; background: #fff;
          box-shadow: 0 0 0 4px rgba(0,87,184,0.10);
          transform: translateY(-2px);
        }

        /* ── Info card ── */
        .cf-info-card {
          position: relative; overflow: hidden;
          border-radius: 18px; padding: 18px 20px;
          border-width: 1.5px; border-style: solid;
          display: flex; align-items: flex-start; gap: 15px;
          cursor: default;
          transition: transform .3s cubic-bezier(.34,1.3,.64,1), box-shadow .3s ease;
        }
        .cf-info-card::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(105deg, transparent, rgba(255,255,255,0.6), transparent);
          transition: left .5s ease;
        }
        .cf-info-card:hover { transform: translateY(-5px) scale(1.01); box-shadow: 0 18px 48px rgba(0,0,0,0.10); }
        .cf-info-card:hover::before { left: 150%; }

        /* ── Submit button ── */
        .cf-submit {
          width: 100%; padding: 16px; border-radius: 14px;
          background: linear-gradient(135deg, #0057b8 0%, #003580 100%);
          color: white; font-size: 15px; font-weight: 700;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 9px;
          transition: all .25s ease; position: relative; overflow: hidden;
          font-family: 'Instrument Sans', sans-serif;
          letter-spacing: .02em;
        }
        .cf-submit::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%);
          background-size: 200% 100%; background-position: -200% center;
          transition: background-position .6s ease;
        }
        .cf-submit:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(0,87,184,0.40);
        }
        .cf-submit:not(:disabled):hover::after { background-position: 200% center; }
        .cf-submit:disabled { opacity: .65; cursor: not-allowed; }

        /* ── Layout grid ── */
        .cu-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.65fr;
          gap: 36px;
          align-items: start;
        }
        .cf-fields-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        /* ── Responsive ── */
        .cu-hero-agent-img {
          transition: all 0.3s ease;
        }

        @media (max-width: 990px) {
          .cu-hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 32px;
            padding: 40px 20px 0;
          }
          .cu-hero-left { align-items: center; }
          .cu-hero-right {
            position: relative !important;
            display: flex !important;
            width: 100% !important;
            height: 300px !important;
            margin-top: 24px;
            justify-content: center !important;
            align-items: flex-end !important;
            bottom: 0 !important;
            right: 0 !important;
            pointer-events: none;
            z-index: 2;
          }
          .cu-hero-agent-img {
            height: 100% !important;
            width: auto !important;
            max-width: 320px !important;
            object-position: bottom center !important;
            transform: translateY(16px) translateX(0) !important;
          }
          .cu-channels-grid { grid-template-columns: repeat(3,1fr); gap: 12px; }
          .cu-trust-bar { justify-content: center; gap: 20px; }
        }
        @media (max-width: 900px) {
          .cu-layout-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 768px) {
          .cu-channels-grid { grid-template-columns: 1fr; gap: 12px; }
          .cu-trust-divider { display: none !important; }
        }
        @media (max-width: 600px) {
          .cf-fields-row { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>

      {/* ══════════════════════════════
          HERO  — background identical to Franchise
      ══════════════════════════════ */}
      <section className="cu-hero-section">

        {/* Layer 1: glowing orbs */}
        <div className="cu-orb-1" />
        <div className="cu-orb-2" />

        {/* Layer 2: dot grid */}
        <div className="cu-dot-grid" />

        {/* Layer 3: scan beam */}
        <div className="cu-scan-wrap">
          <div className="cu-scan-beam" />
        </div>

        {/* Layer 4: all real content */}
        <div className="cu-hero-content">
          <div className="cu-hero-grid">

            {/* ── LEFT ── */}
            <div className="cu-hero-left">

              {/* Monospace label */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                marginBottom: 16,
                fontFamily: "'Fira Code', monospace",
                fontSize: 10, fontWeight: 600,
                color: '#4ade80', letterSpacing: '.18em', textTransform: 'uppercase',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(-14px)',
                transition: 'opacity .6s ease .05s, transform .6s ease .05s',
              }}>
                <span style={{ width: 16, height: 1.5, background: '#4ade80' }} />
                SUPPORT CHANNELS
              </div>

              {/* Heading */}
              <h1 style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 800, color: '#ffffff',
                lineHeight: 1.1, letterSpacing: '-0.03em',
                margin: '0 0 18px',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity .75s ease .12s, transform .75s cubic-bezier(.34,1.3,.64,1) .12s',
              }}>
                Need Help?<br />
                <span style={{
                  background: 'linear-gradient(90deg, #2ebd3a 0%, #4ade80 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}>
                  We're Here.
                </span>
              </h1>

              {/* Subtext */}
              <p style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: 15.5, color: 'rgba(241,245,249,0.85)',
                lineHeight: 1.6, maxWidth: 540, margin: '0 0 28px',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity .7s ease .24s, transform .7s ease .24s',
              }}>
                Questions about activation, tags, bulk orders, or partnerships? Contact our team through WhatsApp, email, or phone.
              </p>

              {/* 3 channel cards */}
              <div className="cu-channels-grid"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity .7s ease .32s, transform .7s ease .32s',
                }}
              >
                {/* WhatsApp */}
                <div className="cu-channel-card">
                  <div className="cu-channel-icon-box" style={{ background: '#24b13b', color: '#ffffff' }}>
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.378 0 12.013 0c3.218.001 6.243 1.253 8.517 3.527 2.273 2.274 3.52 5.3 3.518 8.518-.004 6.643-5.379 12.013-12.012 12.013-.001 0-.001 0 0 0-2.002-.001-3.968-.5-5.713-1.45L0 24zm6.59-19.139c-.279-.62-.573-.63-.839-.641l-.712-.008c-.248 0-.651.093-.992.465-.341.372-1.302 1.271-1.302 3.1 0 1.829 1.333 3.597 1.519 3.845.186.248 2.624 4.009 6.357 5.621 3.102 1.339 3.733 1.074 4.414.992.682-.082 2.2-.899 2.51-1.767.31-.869.31-1.614.217-1.767-.093-.153-.341-.248-.713-.434s-2.2-1.085-2.541-1.209c-.341-.124-.589-.186-.839.186-.25.372-.961 1.209-1.178 1.457-.217.248-.434.279-.806.093-.372-.186-1.57-.579-2.99-1.847-1.102-.982-1.847-2.196-2.064-2.568-.217-.372-.023-.573.163-.758.167-.166.372-.434.558-.651.186-.217.248-.372.372-.62.124-.248.062-.465-.031-.651-.093-.186-.819-1.97-1.123-2.695z"/>
                    </svg>
                  </div>
                  <div className="cu-channel-title">WhatsApp Support</div>
                  <div style={{ width: 24, height: 2, background: '#24b13b', margin: '4px auto 12px' }} />
                  <div className="cu-channel-desc">Chat with us on WhatsApp for quick assistance.</div>
                  <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
                    className="cu-channel-btn"
                    style={{ border: '1px solid #24b13b', color: '#24b13b' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#24b13b'; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#24b13b' }}
                  >
                    <MessageCircle size={14} /> Chat on WhatsApp
                  </a>
                </div>

                {/* Email */}
                <div className="cu-channel-card" style={{ cursor: 'pointer' }} onClick={scrollToForm}>
                  <div className="cu-channel-icon-box" style={{ background: '#0b57d0', color: '#ffffff' }}>
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div className="cu-channel-title">Email Support</div>
                  <div style={{ width: 24, height: 2, background: '#0b57d0', margin: '4px auto 12px' }} />
                  <div className="cu-channel-desc">Send us an email for detailed support and inquiries.</div>
                  <a href="#contact-form" onClick={scrollToForm}
                    className="cu-channel-btn"
                    style={{ border: '1px solid #0b57d0', color: '#0b57d0' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#0b57d0'; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0b57d0' }}
                  >
                    <Mail size={14} /> Send an Email
                  </a>
                </div>

                {/* Call */}
                <div className="cu-channel-card">
                  <div className="cu-channel-icon-box" style={{ background: '#24b13b', color: '#ffffff' }}>
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4.03C3.48 3 3 3.48 3 4.03 3 13.4 10.6 21 19.97 21c.55 0 1.03-.48 1.03-1.03v-3.59c0-.55-.45-1-1-1z"/>
                    </svg>
                  </div>
                  <div className="cu-channel-title">Call Support</div>
                  <div style={{ width: 24, height: 2, background: '#24b13b', margin: '4px auto 12px' }} />
                  <div className="cu-channel-desc">Speak with our team during business hours.</div>
                  <a href="tel:+91XXXXXXXXXX"
                    className="cu-channel-btn"
                    style={{ border: '1px solid #24b13b', color: '#24b13b' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#24b13b'; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#24b13b' }}
                  >
                    <Phone size={14} /> Call Us Now
                  </a>
                </div>
              </div>

              {/* Trust bar */}
              <div className="cu-trust-bar"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transition: 'opacity .8s ease .4s',
                }}
              >
                <div className="cu-trust-item"><Shield size={15} color="#2ebd3a" /><span>Secure & Trusted</span></div>
                <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.15)' }} className="cu-trust-divider" />
                <div className="cu-trust-item"><Lock size={15} color="#2ebd3a" /><span>Privacy Focused</span></div>
                <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.15)' }} className="cu-trust-divider" />
                <div className="cu-trust-item"><Cloud size={15} color="#2ebd3a" /><span>Protected Data</span></div>
                <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.15)' }} className="cu-trust-divider" />
                <div className="cu-trust-item"><CheckCircle size={15} color="#2ebd3a" /><span>Reliable Support</span></div>
              </div>
            </div>

            {/* ── RIGHT: support agent image ── */}
            <div className="cu-hero-right">
              <img
                src="/support_agent.png"
                alt="ScanForSafe Support Agent"
                className="cu-hero-agent-img"
                style={{
                  height: '112%',
                  width: '100%',
                  objectFit: 'contain',
                  objectPosition: 'bottom right',
                  zIndex: 5,
                  transform: 'translateY(16px) translateX(-30px)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom wave — sits on top of everything, same fill as body bg */}
        <div className="cu-wave-wrap">
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <path d="M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,48 L1440,72 L0,72 Z" fill="#f1f5f9" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════
          BODY
      ══════════════════════════════ */}
      <section style={{ background: '#f1f5f9', padding: '68px 24px 88px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="cu-layout-grid">

            {/* ── LEFT: Office info ── */}
            <div ref={infoRef} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{
                opacity: infoInView ? 1 : 0,
                transform: infoInView ? 'translateX(0)' : 'translateX(-24px)',
                transition: 'opacity .55s ease, transform .55s ease',
                marginBottom: 12,
              }}>
                <span style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 10, fontWeight: 500, letterSpacing: '.18em',
                  textTransform: 'uppercase', color: '#0057b8',
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
                }}>
                  <span style={{ width: 20, height: 1.5, background: '#0057b8', display: 'inline-block' }} />
                  our headquarters
                </span>
                <h2 style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 26, fontWeight: 800, color: '#0B2545',
                  letterSpacing: '-0.03em', margin: '0 0 10px',
                }}>
                  Visit Our<br />Office
                </h2>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.75, fontWeight: 400 }}>
                  For institutional queries, partnership proposals, or pre-scheduled visits, you can connect with our central office.
                </p>
              </div>

              {/* Office card */}
              <div
                className="cf-info-card"
                style={{
                  background: 'linear-gradient(135deg,#fff1f2,#ffe4e6)',
                  borderColor: '#fecdd3',
                  opacity: infoInView ? 1 : 0,
                  transform: infoInView ? 'translateX(0)' : 'translateX(-28px)',
                  transition: 'opacity .5s ease .1s, transform .5s cubic-bezier(.34,1.3,.64,1) .1s, box-shadow .3s ease',
                  padding: '24px',
                  borderRadius: 18,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'rgba(255,255,255,0.8)', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: '1.5px solid #fecdd3',
                }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#e11d48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 9.5, fontWeight: 500, letterSpacing: '.14em',
                    textTransform: 'uppercase', color: '#e11d48', marginBottom: 4,
                    display: 'flex', alignItems: 'center', gap: 5,
                  }}>
                    <span style={{ width: 14, height: 1.5, background: '#e11d48', display: 'inline-block' }} />
                    OFFICE
                  </div>
                  <div style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 15, fontWeight: 700, color: '#0B2545',
                    lineHeight: 1.4, marginBottom: 4,
                  }}>
                    Your City, State - 000000
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 500, marginBottom: 8 }}>
                    Headquarters, India
                  </div>
                  <div style={{ fontSize: 11.5, color: '#e11d48', fontWeight: 600 }}>
                    🕒 Visits by appointment only
                  </div>
                </div>
              </div>

              {/* Operating Hours card */}
              <div
                className="cf-info-card"
                style={{
                  background: 'linear-gradient(135deg,#f0fdf4,#dcfce7)',
                  borderColor: '#bbf7d0',
                  opacity: infoInView ? 1 : 0,
                  transform: infoInView ? 'translateX(0)' : 'translateX(-28px)',
                  transition: 'opacity .5s ease .2s, transform .5s cubic-bezier(.34,1.3,.64,1) .2s, box-shadow .3s ease',
                  padding: '24px',
                  borderRadius: 18,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'rgba(255,255,255,0.8)', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: '1.5px solid #bbf7d0',
                }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 9.5, fontWeight: 500, letterSpacing: '.14em',
                    textTransform: 'uppercase', color: '#16a34a', marginBottom: 4,
                    display: 'flex', alignItems: 'center', gap: 5,
                  }}>
                    <span style={{ width: 14, height: 1.5, background: '#16a34a', display: 'inline-block' }} />
                    OPERATING HOURS
                  </div>
                  <div style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 15, fontWeight: 700, color: '#0B2545',
                    lineHeight: 1.4, marginBottom: 4,
                  }}>
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 500, marginBottom: 8 }}>
                    Standard Business Hours (IST)
                  </div>
                  <div style={{ fontSize: 11.5, color: '#16a34a', fontWeight: 600 }}>
                    ⚡ Emergency support active 24/7
                  </div>
                </div>
              </div>

              {/* Corporate Inquiries card */}
              {/* <div
                className="cf-info-card"
                style={{
                  background: 'linear-gradient(135deg,#f5f3ff,#ede9fe)',
                  borderColor: '#ddd6fe',
                  opacity: infoInView ? 1 : 0,
                  transform: infoInView ? 'translateX(0)' : 'translateX(-28px)',
                  transition: 'opacity .5s ease .3s, transform .5s cubic-bezier(.34,1.3,.64,1) .3s, box-shadow .3s ease',
                  padding: '24px',
                  borderRadius: 18,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'rgba(255,255,255,0.8)', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: '1.5px solid #ddd6fe',
                }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 9.5, fontWeight: 500, letterSpacing: '.14em',
                    textTransform: 'uppercase', color: '#7c3aed', marginBottom: 4,
                    display: 'flex', alignItems: 'center', gap: 5,
                  }}>
                    <span style={{ width: 14, height: 1.5, background: '#7c3aed', display: 'inline-block' }} />
                    PARTNERSHIPS & PRESS
                  </div>
                  <div style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 15, fontWeight: 700, color: '#0B2545',
                    lineHeight: 1.4, marginBottom: 4,
                  }}>
                    partners@scanforsafe.in
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 500, marginBottom: 8 }}>
                    Institutional sales and media contracts
                  </div>
                  <div style={{ fontSize: 11.5, color: '#7c3aed', fontWeight: 600 }}>
                    🤝 Response within 1 business day
                  </div>
                </div>
              </div> */}

              {/* Security & Data Abuse card */}
              {/* <div
                className="cf-info-card"
                style={{
                  background: 'linear-gradient(135deg,#eff6ff,#dbeafe)',
                  borderColor: '#bfdbfe',
                  opacity: infoInView ? 1 : 0,
                  transform: infoInView ? 'translateX(0)' : 'translateX(-28px)',
                  transition: 'opacity .5s ease .4s, transform .5s cubic-bezier(.34,1.3,.64,1) .4s, box-shadow .3s ease',
                  padding: '24px',
                  borderRadius: 18,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: 'rgba(255,255,255,0.8)', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: '1.5px solid #bfdbfe',
                }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0057b8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 9.5, fontWeight: 500, letterSpacing: '.14em',
                    textTransform: 'uppercase', color: '#0057b8', marginBottom: 4,
                    display: 'flex', alignItems: 'center', gap: 5,
                  }}>
                    <span style={{ width: 14, height: 1.5, background: '#0057b8', display: 'inline-block' }} />
                    SECURITY & DATA ABUSE
                  </div>
                  <div style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 15, fontWeight: 700, color: '#0B2545',
                    lineHeight: 1.4, marginBottom: 4,
                  }}>
                    abuse@scanforsafe.in
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 500, marginBottom: 8 }}>
                    Report vulnerabilities or visual tag issues
                  </div>
                  <div style={{ fontSize: 11.5, color: '#0057b8', fontWeight: 600 }}>
                    🛡️ Verified security reports rewarded
                  </div>
                </div>
              </div> */}
            </div>

            {/* ── RIGHT: Contact form ── */}
            <div
              ref={formRef}
              id="contact-form"
              style={{
                background: 'white', borderRadius: 26,
                padding: '40px 38px',
                boxShadow: '0 24px 64px rgba(0,40,120,0.10), 0 4px 16px rgba(0,40,120,0.05)',
                border: '1.5px solid #e8edf3',
                opacity: formInView ? 1 : 0,
                transform: formInView ? 'translateY(0)' : 'translateY(36px)',
                transition: 'opacity .65s ease .1s, transform .65s cubic-bezier(.34,1.3,.64,1) .1s',
              }}
            >
              {submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '44px 0', textAlign: 'center' }}>
                  <div style={{
                    width: 88, height: 88, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#f8fafc,#e8f8eb)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 22, border: '2px solid #e8f8eb',
                    animation: 'checkPop .65s cubic-bezier(.34,1.3,.64,1) both',
                    boxShadow: '0 0 0 8px rgba(46,189,58,0.08)',
                  }}>
                    <CheckCircle style={{ width: 40, height: 40, color: '#2ebd3a' }} />
                  </div>
                  <h3 style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 28, fontWeight: 800, color: '#0B2545',
                    letterSpacing: '-0.03em', marginBottom: 12,
                  }}>
                    Message Sent! 🎉
                  </h3>
                  <p style={{ fontSize: 14.5, color: '#64748b', lineHeight: 1.8, maxWidth: 340 }}>
                    We've got your message and will reply within 2 hours. Check your inbox for a confirmation shortly.
                  </p>
                  <div style={{
                    marginTop: 24, padding: '12px 28px', borderRadius: 12,
                    background: 'linear-gradient(135deg,#f8fafc,#e8f8eb)',
                    border: '1.5px solid #e8f8eb',
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: 13.5, fontWeight: 700, color: '#0B2545',
                  }}>
                    Thanks, {form.name || 'friend'}! We'll be in touch 👋
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: 30 }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      background: '#eff6ff', border: '1px solid #bfdbfe',
                      borderRadius: 99, padding: '5px 14px', marginBottom: 14,
                    }}>
                      <span style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 10, fontWeight: 500, color: '#0057b8', letterSpacing: '.1em',
                      }}>
                        &gt;_ send_message.tsx
                      </span>
                    </div>
                    <h2 style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: 25, fontWeight: 800, color: '#0B2545',
                      letterSpacing: '-0.03em', margin: 0,
                    }}>
                      We'd Love to Hear<br />From You
                    </h2>
                    <div style={{
                      height: 3, borderRadius: 99, marginTop: 10,
                      background: 'linear-gradient(90deg, #0057b8, #2ebd3a)',
                      animation: formInView ? 'lineGrow .8s cubic-bezier(.34,1.3,.64,1) .4s both' : 'none',
                    }} />
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div className="cf-fields-row">
                      <div className="cf-field">
                        <label>Full Name *</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Rahul Sharma" className="cf-input" />
                      </div>
                      <div className="cf-field">
                        <label>Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX" className="cf-input" />
                      </div>
                    </div>

                    <div className="cf-field">
                      <label>Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="rahul@example.com" className="cf-input" />
                    </div>

                    <div className="cf-field">
                      <label>Message *</label>
                      <textarea name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us how we can help — setup, bulk orders, feedback..."
                        className="cf-input" style={{ resize: 'none' }} />
                    </div>

                    <button type="submit" disabled={loading} className="cf-submit">
                      {loading ? (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin 1s linear infinite', flexShrink: 0 }}>
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                          Sending your message...
                        </>
                      ) : (
                        <><Send style={{ width: 16, height: 16, flexShrink: 0 }} /> Send Message</>
                      )}
                    </button>

                    <p style={{
                      textAlign: 'center',
                      fontFamily: "'Fira Code', monospace",
                      fontSize: 10.5, color: '#94a3b8', fontWeight: 400, letterSpacing: '.04em',
                    }}>
                      🔒 encrypted • never shared • gdpr safe
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}