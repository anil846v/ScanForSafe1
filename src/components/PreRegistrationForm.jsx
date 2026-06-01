import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function PreRegistrationForm() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const iframeRef = useRef(null);

  // Form states matching the parsed fields
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    mobile: "",
    address: "",
    city: "",
    pinCode: "",
    qrType: [], // Array to support multiselect!
    emergencyName: "",
    emergencyMobile: "",
    referredBy: "",
    referralMobile: "",
    declaration: false,
    password: "", // NEW
    confirmPassword: "", // NEW
  });

  const [errors, setErrors] = useState({});

  const qrTypes = [
    {
      value: "Car",
      label: "Car",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      )
    },
    {
      value: "Bike / Scooty",
      label: "Bike / Scooty",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="18" r="3" />
          <circle cx="19" cy="18" r="3" />
          <path d="M12 18V12l-3-4M19 18l-4-6h-3" />
          <path d="M12 8h5M17 8l-1-3" />
        </svg>
      )
    },
    {
      value: "Cycle / Bicycle",
      label: "Cycle",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5.5" cy="17.5" r="2.5"/>
          <circle cx="18.5" cy="17.5" r="2.5"/>
          <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L8.5 12H15L12 17.5zM12 12h3L18.5 17.5M8.5 12L5.5 17.5M12 12V7l-3-1"/>
        </svg>
      )
    },
    {
      value: "Truck / Commercial Vehicle",
      label: "Truck",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },
    {
      value: "Auto Rickshaw",
      label: "Auto Rickshaw",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="18" r="3" />
          <circle cx="5" cy="10" r="2" />
          <circle cx="19" cy="10" r="2" />
          <path d="M5 10h14v4H5z" />
          <path d="M12 14v4" />
        </svg>
      )
    },
    {
      value: "Senior citizen",
      label: "Senior citizen",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M19 8v6M16 11h6" />
        </svg>
      )
    },
    {
      value: "Support needed persons",
      label: "Support needed",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    },
    {
      value: "Pets",
      label: "Pets",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="13" r="3" />
          <circle cx="12" cy="6" r="2" />
          <circle cx="7" cy="9" r="2" />
          <circle cx="17" cy="9" r="2" />
        </svg>
      )
    },
    {
      value: "School kids",
      label: "School kids",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
          <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M8 11h8M8 15h8" />
        </svg>
      )
    },
  ];

  const handleInputChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleToggleQRType = (val) => {
    let current = Array.isArray(formData.qrType) ? [...formData.qrType] : [];
    if (current.includes(val)) {
      current = current.filter((item) => item !== val);
    } else {
      current.push(val);
    }
    handleInputChange("qrType", current);
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email";
    }
    if (!formData.mobile.trim()) {
      errs.mobile = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errs.mobile = "Must be 10 digits";
    }
    if (!formData.address.trim()) errs.address = "Address is required";
    if (!formData.city.trim()) errs.city = "City is required";
    if (!formData.pinCode.trim()) errs.pinCode = "PIN Code is required";
    if (!formData.qrType || formData.qrType.length === 0) {
      errs.qrType = "Please select at least one tag type";
    }
    if (!formData.emergencyName.trim()) errs.emergencyName = "Emergency Name is required";
    if (!formData.emergencyMobile.trim()) {
      errs.emergencyMobile = "Emergency Phone is required";
    } else if (!/^\d{10}$/.test(formData.emergencyMobile)) {
      errs.emergencyMobile = "Must be 10 digits";
    }
    if (!formData.password) {
      errs.password = "Password is required";
    } else if (formData.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }
    if (!formData.confirmPassword) {
      errs.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = "Passwords do not match";
    }
    if (!formData.declaration) {
      errs.declaration = "Consent is required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const triggerSubmit = (e) => {
    if (!validateForm()) {
      e.preventDefault();
      return;
    }
    // Defer disabling the button so the browser can finish scheduling the form POST submission
    setTimeout(() => {
      setIsSubmitting(true);
    }, 10);
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .pr-page {
          font-family: 'Space Grotesk', sans-serif;
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 95px 24px 35px;
          background: linear-gradient(180deg, #f4f8f4 0%, #f0fdf2 100%);
          position: relative;
          overflow: hidden;
        }

        .pr-page::before {
          content: "";
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 900px 600px at 100% 0%, rgba(46,189,58,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 600px 500px at 0% 100%, rgba(46,189,58,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        /* ── SINGLE COLUMN WIDE DECK CARD ── */
        .pr-card {
          width: 100%; max-width: 1240px;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(46, 189, 58, 0.16);
          box-shadow: 0 10px 30px rgba(11, 37, 69, 0.02), 0 30px 60px rgba(6, 78, 59, 0.04);
          position: relative;
          z-index: 2;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ── MAIN CONTENT CONTAINER ── */
        .pr-main {
          padding: 30px 40px;
          display: flex; flex-direction: column; justify-content: space-between;
        }

        /* ── BRAND HEADER ── */
        .pr-form-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .pr-header-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(22, 163, 74, 0.08);
          border: 1px solid rgba(22, 163, 74, 0.16);
          border-radius: 99px; padding: 3px 12px;
          font-size: 9.5px; font-weight: 800; text-transform: uppercase;
          color: #16a34a; letter-spacing: 0.08em; width: fit-content;
          margin-bottom: 8px;
        }
        .pr-form-title {
          font-family: 'Outfit', sans-serif;
          font-size: 24px; font-weight: 900; color: #0B2545;
          letter-spacing: -0.5px; margin-bottom: 4px; line-height: 1.1;
        }
        .pr-form-subtitle {
          font-size: 12.5px; color: #4b5563; line-height: 1.4;
          max-width: 780px; margin: 0 auto;
        }
        .pr-green-text {
          color: #16a34a; font-weight: 700;
        }

        /* ── DASHBOARD SECTION TITLES ── */
        .pr-section-title {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 14.5px; font-weight: 800; color: #0B2545;
          margin-bottom: 12px; border-bottom: 1px dashed rgba(22, 163, 74, 0.15);
          padding-bottom: 5px; text-align: left;
        }
        .pr-sec-num {
          background: rgba(22, 163, 74, 0.1);
          color: #16a34a;
          font-size: 9.5px; font-weight: 900;
          padding: 2px 6px; border-radius: 4px;
        }

        /* ── MNC-GRADE COMPACT HORIZONTAL GRID SYSTEM ── */
        .pr-grid-fields {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px 20px;
          text-align: left;
        }
        .pr-span-2-desktop { grid-column: span 2; }
        .pr-span-3-desktop { grid-column: span 3; }
        .pr-span-4-desktop { grid-column: span 4; }

        .pr-group { display: flex; flex-direction: column; justify-content: flex-end; }
        .pr-label {
          font-size: 11.5px; font-weight: 700; color: #0B2545;
          margin-bottom: 5px; letter-spacing: -0.01em;
        }
        .pr-input {
          width: 100%; padding: 8px 12px; border-radius: 8px;
          border: 1.5px solid #cbd5e1; background: #f8fafc;
          font-family: 'Space Grotesk', sans-serif; font-size: 13px;
          color: #0f172a; outline: none; transition: all 0.22s ease;
        }
        .pr-input:focus {
          border-color: #16a34a; background: white;
          box-shadow: 0 0 10px rgba(22, 163, 74, 0.1);
        }
        .pr-textarea { resize: none; height: 34px; min-height: 34px; padding: 7px 12px; }
        
        .pr-error {
          font-size: 10.5px; font-weight: 600; color: #ef4444;
          margin-top: 3px; display: flex; align-items: center; gap: 3px;
        }

        /* ── COMPACT QR TYPE HORIZONTAL SELECTION GRID ── */
        .pr-qr-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: 10px;
          margin-top: 6px;
        }
        .pr-qr-item {
          border: 1.5px solid #e2e8f0; border-radius: 12px;
          padding: 8px 4px; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 5px;
          cursor: pointer; background: #f8fafc; transition: all 0.22s ease;
          color: #475569;
        }
        .pr-qr-item:hover {
          border-color: #cbd5e1; transform: translateY(-1.5px);
          color: #0B2545;
        }
        .pr-qr-item.selected {
          border-color: #16a34a; background: rgba(22, 163, 74, 0.04);
          color: #16a34a;
          box-shadow: 0 3px 10px rgba(22, 163, 74, 0.08);
        }
        .pr-qr-icon {
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.22s ease;
        }
        .pr-qr-item.selected .pr-qr-icon {
          color: #16a34a;
        }
        .pr-qr-item:hover .pr-qr-icon {
          transform: scale(1.1);
        }
        .pr-qr-name { font-size: 10px; font-weight: 700; text-align: center; }

        /* ── DECLARATION ── */
        .pr-dec-box {
          display: flex; gap: 10px; background: #f8fafc;
          border: 1px solid #cbd5e1; padding: 10px 14px; border-radius: 10px;
          cursor: pointer; align-items: center;
          transition: all 0.2s ease;
          min-height: 44px;
        }
        .pr-dec-box:hover { border-color: #16a34a; background: rgba(22, 163, 74, 0.01); }
        .pr-dec-box.checked { border-color: rgba(22, 163, 74, 0.4); background: rgba(22, 163, 74, 0.02); }
        .pr-dec-check {
          width: 18px; height: 18px; border-radius: 5px;
          border: 2px solid #cbd5e1; background: white;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: all 0.2s ease;
        }
        .pr-dec-box.checked .pr-dec-check {
          background: #16a34a; border-color: #16a34a; color: white;
        }
        .pr-dec-text { font-size: 11px; line-height: 1.4; color: #475569; text-align: left; font-weight: 500; }

        /* ── ACTION BUTTONS ── */
        .pr-btn-prev {
          padding: 0; border-radius: 10px;
          border: 1.5px solid #cbd5e1; background: white;
          color: #64748b; font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px; font-weight: 700; cursor: pointer;
          transition: all 0.22s ease;
        }
        .pr-btn-prev:hover { background: #f8fafc; color: #16a34a; border-color: #16a34a; }
        .pr-btn-submit {
          padding: 0; border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #1fa82a 0%, #2ebd3a 50%, #0B2545 100%);
          color: white; font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px; font-weight: 700; cursor: pointer;
          box-shadow: 0 4px 12px rgba(46, 189, 58, 0.15);
          transition: all 0.25s ease-in-out;
        }
        .pr-btn-submit:hover {
          transform: translateY(-1.5px);
          box-shadow: 0 8px 18px rgba(46, 189, 58, 0.25);
        }

        /* ── SUCCESS SCREEN ── */
        .pr-success { text-align: center; padding: 16px 0; }
        .pr-success-icon {
          width: 64px; height: 64px; border-radius: 50%;
          background: #dcfce7; border: 3px solid #16a34a;
          display: flex; align-items: center; justify-content: center;
          color: #16a34a; margin: 0 auto 20px;
          box-shadow: 0 0 20px rgba(22, 163, 74, 0.15);
          animation: scaleUpSuccess 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes scaleUpSuccess {
          from { transform: scale(0.6); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .pr-success h2 {
          font-family: 'Outfit', sans-serif; font-size: 26px; font-weight: 900;
          color: #0B2545; letter-spacing: -0.02em; margin-bottom: 8px;
        }
        .pr-success p { font-size: 13.5px; color: #4A5568; line-height: 1.5; margin-bottom: 24px; }
        
        .pr-offer-box {
          background: linear-gradient(135deg, rgba(22, 163, 74, 0.08) 0%, rgba(0, 136, 255, 0.04) 100%);
          border: 1.5px dashed #16a34a; border-radius: 14px;
          padding: 18px; margin-bottom: 24px; position: relative;
          max-width: 480px; margin-left: auto; margin-right: auto;
        }
        .pr-offer-badge {
          position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
          background: #16a34a; color: white; font-size: 8.5px; font-weight: 900;
          letter-spacing: 0.1em; text-transform: uppercase; padding: 3px 10px;
          border-radius: 99px;
        }
        .pr-offer-code {
          font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 900;
          color: #0B2545; letter-spacing: 1.5px; text-transform: uppercase;
          margin-top: 4px; margin-bottom: 4px;
        }
        
        .pr-btn-home {
          padding: 12px 24px; border-radius: 10px; border: none;
          background: #0B2545; color: white; font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px; font-weight: 700; cursor: pointer; transition: all 0.22s ease;
        }
        .pr-btn-home:hover { background: #081a30; transform: translateY(-1px); }

        /* ── RESPONSIVE ADAPTATIONS ── */
        @media (max-width: 900px) {
          .pr-grid-fields { grid-template-columns: repeat(2, 1fr); }
          .pr-span-3-desktop { grid-column: span 2; }
          .pr-span-4-desktop { grid-column: span 2; }
          .pr-span-2-desktop { grid-column: span 2; }
        }
        @media (max-width: 520px) {
          .pr-grid-fields { grid-template-columns: 1fr; gap: 12px; }
          .pr-span-3-desktop { grid-column: span 1; }
          .pr-span-4-desktop { grid-column: span 1; }
          .pr-span-2-desktop { grid-column: span 1; }
          .pr-main { padding: 24px 16px; }
        }
      `}</style>

      <div className="pr-page">
        <div className="pr-card">
          
          <div className="pr-main">
            {!submitted ? (
              <>
                {/* Brand Header */}
                <div className="pr-form-header">
                  <div className="pr-header-badge">🔒 Secure Pre-Registration</div>
                  <h2 className="pr-form-title">Join ScanForSafe Early Bird Campaign</h2>
                  <p className="pr-form-subtitle">
                    Get an exclusive <span className="pr-green-text">₹20 instant discount code</span> and protect your family, vehicles, and loved ones with India's smartest QR safety platform.
                  </p>
                </div>

                {/* Hidden submission target iframe */}
                <iframe
                  name="hidden_iframe"
                  id="hidden_iframe"
                  ref={iframeRef}
                  style={{ display: "none" }}
                  onLoad={handleIframeLoad}
                />

                {/* Form Action connects directly to parsed Google Form */}
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSd9A7Dl1-VyVYOpzuSFH1dy_vWdsYBxjFUqh6h3LpmicZwKRg/formResponse"
                  method="POST"
                  target="hidden_iframe"
                  onSubmit={triggerSubmit}
                >
                  
                  {/* ── SECTION 01: CONTACT & DELIVERY DETAILS ── */}
                  <div className="pr-section-title">
                    <span className="pr-sec-num">01</span> Contact &amp; Shipping Details
                  </div>
                  <div className="pr-grid-fields" style={{ marginBottom: 20 }}>
                    
                    <div className="pr-group">
                      <label className="pr-label">Full Name *</label>
                      <input
                        type="text"
                        name="entry.13820436"
                        className="pr-input"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                      {errors.name && (
                        <span className="pr-error">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="pr-group">
                      <label className="pr-label">Mobile Number *</label>
                      <input
                        type="tel"
                        name="entry.975997504"
                        className="pr-input"
                        placeholder="10-digit Mobile Number"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange("mobile", e.target.value)}
                        maxLength={10}
                        required
                      />
                      {errors.mobile && (
                        <span className="pr-error">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          {errors.mobile}
                        </span>
                      )}
                    </div>

                    <div className="pr-group">
                      <label className="pr-label">Email Address *</label>
                      <input
                        type="email"
                        name="emailAddress"
                        className="pr-input"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                      {errors.email && (
                        <span className="pr-error">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="pr-group">
                      <label className="pr-label">City *</label>
                      <input
                        type="text"
                        name="entry.757584940"
                        className="pr-input"
                        placeholder="e.g. Hyderabad"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        required
                      />
                      {errors.city && (
                        <span className="pr-error">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          {errors.city}
                        </span>
                      )}
                    </div>

                    <div className="pr-group pr-span-3-desktop">
                      <label className="pr-label">Full Shipping Address *</label>
                      <textarea
                        name="entry.761001486"
                        className="pr-input pr-textarea"
                        placeholder="Door No., Street name, Area / Locality"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        required
                      />
                      {errors.address && (
                        <span className="pr-error">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          {errors.address}
                        </span>
                      )}
                    </div>

                    <div className="pr-group">
                      <label className="pr-label">PIN Code *</label>
                      <input
                        type="text"
                        name="entry.459245871"
                        className="pr-input"
                        placeholder="6-digit PIN code"
                        value={formData.pinCode}
                        onChange={(e) => handleInputChange("pinCode", e.target.value)}
                        maxLength={6}
                        required
                      />
                      {errors.pinCode && (
                        <span className="pr-error">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          {errors.pinCode}
                        </span>
                      )}
                    </div>

                    <div className="pr-group pr-span-4-desktop">
                      <label className="pr-label" style={{ marginBottom: 2 }}>Select QR Visual Tag Type *</label>
                      <input type="hidden" name="entry.1359574010" value={formData.qrType} />
                      
                      <div className="pr-qr-grid">
                        {qrTypes.map((q) => (
                          <div
                            key={q.value}
                            className={`pr-qr-item ${formData.qrType === q.value ? "selected" : ""}`}
                            onClick={() => handleInputChange("qrType", q.value)}
                          >
                            <span className="pr-qr-icon">{q.icon}</span>
                            <span className="pr-qr-name">{q.label}</span>
                          </div>
                        ))}
                      </div>
                      {errors.qrType && (
                        <span className="pr-error">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          {errors.qrType}
                        </span>
                      )}
                    </div>

                  </div>

                  {/* ── SECTION 02: EMERGENCY CONTACTS & REFERRAL ── */}
                  <div className="pr-section-title">
                    <span className="pr-sec-num">02</span> Emergency &amp; Referral Details
                  </div>
                  <div className="pr-grid-fields">
                    
                    <div className="pr-group">
                      <label className="pr-label">Emergency Contact Name *</label>
                      <input
                        type="text"
                        name="entry.243129998"
                        className="pr-input"
                        placeholder="Emergency contact name"
                        value={formData.emergencyName}
                        onChange={(e) => handleInputChange("emergencyName", e.target.value)}
                        required
                      />
                      {errors.emergencyName && (
                        <span className="pr-error">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          {errors.emergencyName}
                        </span>
                      )}
                    </div>

                    <div className="pr-group">
                      <label className="pr-label">Emergency Contact Phone *</label>
                      <input
                        type="tel"
                        name="entry.1663966446"
                        className="pr-input"
                        placeholder="10-digit emergency phone"
                        value={formData.emergencyMobile}
                        onChange={(e) => handleInputChange("emergencyMobile", e.target.value)}
                        maxLength={10}
                        required
                      />
                      {errors.emergencyMobile && (
                        <span className="pr-error">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          {errors.emergencyMobile}
                        </span>
                      )}
                    </div>

                    <div className="pr-group">
                      <label className="pr-label">Who referred you? (Optional)</label>
                      <input
                        type="text"
                        name="entry.1089812369"
                        className="pr-input"
                        placeholder="Referrer's name"
                        value={formData.referredBy}
                        onChange={(e) => handleInputChange("referredBy", e.target.value)}
                      />
                    </div>

                    <div className="pr-group">
                      <label className="pr-label">Referral Contact Number (Optional)</label>
                      <input
                        type="tel"
                        name="entry.1221855533"
                        className="pr-input"
                        placeholder="Referrer's phone"
                        value={formData.referralMobile}
                        onChange={(e) => handleInputChange("referralMobile", e.target.value)}
                        maxLength={10}
                      />
                    </div>

                    {/* Declaration Consent box */}
                    <div className="pr-group pr-span-2-desktop" style={{ marginTop: 6 }}>
                      <input 
                        type="hidden" 
                        name="entry.2049827878" 
                        value={formData.declaration ? "I confirm that the details provided are correct and I consent to being contacted by ScanForSafe for order confirmation and activation." : ""} 
                      />
                      
                      <div 
                        className={`pr-dec-box ${formData.declaration ? "checked" : ""}`}
                        onClick={() => handleInputChange("declaration", !formData.declaration)}
                      >
                        <div className="pr-dec-check">
                          {formData.declaration && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          )}
                        </div>
                        <div className="pr-dec-text">
                          I confirm that the details provided are correct and I consent to being contacted by ScanForSafe for order confirmation and activation. *
                        </div>
                      </div>
                      {errors.declaration && (
                        <span className="pr-error">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          {errors.declaration}
                        </span>
                      )}
                    </div>

                    <div className="pr-group" style={{ marginTop: 6, justifyContent: "center" }}>
                      <button 
                        type="button" 
                        className="pr-btn-prev" 
                        onClick={() => navigate("/")}
                        style={{ width: "100%", height: "46px" }}
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="pr-group" style={{ marginTop: 6, justifyContent: "center" }}>
                      <button 
                        type="submit" 
                        className="pr-btn-submit"
                        disabled={isSubmitting}
                        style={{ width: "100%", height: "46px" }}
                      >
                        {isSubmitting ? "Registering..." : "Confirm & Pre-Register ✔"}
                      </button>
                    </div>

                  </div>
                </form>
              </>
            ) : (
              /* ── SUCCESS SCREEN ── */
              <div className="pr-success sfs-hiw-fade-in">
                <div className="pr-success-icon">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2>Registration Confirmed!</h2>
                <p>
                  Thank you, <strong>{formData.name}</strong>, for joining India's smartest safety platform! <br />
                  Your details have been securely logged in our pre-registration system.
                </p>

                <div className="pr-offer-box">
                  <div className="pr-offer-badge">Discount Code Unlocked</div>
                  <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700 }}>🎁 EARLY BIRD OFFER APPLIED</div>
                  <div className="pr-offer-code">SFS20OFF</div>
                  <div style={{ fontSize: 11, color: "#16a34a", fontWeight: 700 }}>
                    ₹20 OFF credit has been mapped to {formData.mobile}
                  </div>
                </div>

                <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7, marginBottom: 28 }}>
                  📞 Support: +91 86393 22479 &nbsp;|&nbsp; ✉ customercare@scanforsafe.com
                </div>

                <button className="pr-btn-home" onClick={() => navigate("/")}>
                  Back to Home Page
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
