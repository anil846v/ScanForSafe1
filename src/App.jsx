import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import FloatingCTA from './components/FloatingCTA'
import QrCodeForm from './components/QrCodeForm'

// Import standalone pages
import FeaturesPage from './pages/FeaturesPage'
import ProductsPage from './pages/ProductsPage'
import UseCasesPage from './pages/UseCasesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import TestimonialsPage from './pages/TestimonialsPage'
import LoginPage from './pages/LoginPage'
import PreRegistrationForm from './components/PreRegistrationForm'
import Franchise from './pages/Franchise'

export default function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Show popup every time the website initially opens or loads
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 600) // Polished 600ms entry delay after initial load
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {!isLoginPage && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/qr-form" element={<QrCodeForm />} />
          <Route path="/preregister" element={<PreRegistrationForm />} />
          <Route path="/franchise" element={<Franchise />} />
        </Routes>
      </main>
      {!isLoginPage && <Footer />}
      {!isLoginPage && <FloatingCTA />}

      {/* INITIAL POPUP MODAL */}
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(11, 37, 69, 0.70)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            animation: 'fadeInOverlay 0.35s ease-out forwards',
          }}
        >
          <style>{`
            @keyframes fadeInOverlay {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes zoomInModal {
              from { transform: scale(0.92) translateY(20px); opacity: 0; }
              to { transform: scale(1) translateY(0); opacity: 1; }
            }
            .sfs-popup-close {
              position: absolute;
              top: 16px;
              right: 16px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              background: white;
              border: 1px solid #e2e8f0;
              box-shadow: 0 4px 12px rgba(0,0,0,0.12);
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 16px;
              color: #64748b;
              transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
              z-index: 10;
              outline: none;
            }
            .sfs-popup-close:hover {
              background: #fee2e2;
              border-color: #fca5a5;
              color: #dc2626;
              transform: scale(1.1) rotate(90deg);
            }
            .sfs-popup-card {
              position: relative;
              max-width: min(90vw, 550px);
              width: 100%;
              border-radius: 28px;
              background: white;
              box-shadow: 0 30px 80px rgba(11, 37, 69, 0.45);
              border: 2px solid #2ebd3a;
              overflow: hidden;
              animation: zoomInModal 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
          `}</style>
          
          <div className="sfs-popup-card" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="sfs-popup-close" onClick={() => setShowPopup(false)}>
              ✕
            </button>
            
            {/* Popup Image */}
            <img
              src="/popup.png"
              alt="ScanForSafe Announcement"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '80vh',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
