import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import FloatingCTA from './components/FloatingCTA'
import QrCodeForm from './components/QRCodeForm'

// Import standalone pages
import FeaturesPage from './pages/FeaturesPage'
import ProductsPage from './pages/ProductsPage'
import UseCasesPage from './pages/UseCasesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import TestimonialsPage from './pages/TestimonialsPage'
import LoginPage from './pages/LoginPage'
import PreRegistrationForm from './components/PreRegistrationForm'
import Franchise from './pages/Franchise'
import AboutUs from './pages/AboutUs'

export default function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'
  const [showPopup, setShowPopup] = useState(false)

  // Scroll to top of page and update SEO metadata on route change
  useEffect(() => {
    window.scrollTo(0, 0)

    let title = 'ScanForSafe – Smart QR Safety Tags & NFC Emergency Tags'
    let description = 'Protect your pets, vehicles, and valuables with ScanForSafe lifetime QR safety tags. Instant alerts, emergency contacts, real-time notifications, and zero monthly fees.'

    switch (location.pathname) {
      case '/':
        title = 'Best Smart QR Tags for Safety & Top Rated Lost & Found QR Stickers | ScanForSafe'
        description = 'Get the best smart QR tags for safety and top rated lost and found QR stickers for keys, luggage, pets, and valuables. ScanForSafe offers anti-theft stickers and emergency wristbands.'
        break
      case '/features':
        title = 'Top Smart QR Safety Tag Features & GPS Alerts | ScanForSafe'
        description = 'Explore the top features of ScanForSafe smart QR safety tags: instant owner notifications, dynamic medical profile management, live scan alerts, and zero monthly fees.'
        break
      case '/products':
        title = 'Best Smart QR Stickers, Pet Tags & Bike Safety Decals | ScanForSafe'
        description = 'Shop the best smart QR safety tags, pet tags with GPS location alerts, anti-theft security stickers for bikes & motorcycles, and emergency contact wristbands.'
        break
      case '/use-cases':
        title = 'Best QR Safety Decals for Vehicles, Kids & Senior Citizens | ScanForSafe'
        description = 'Discover the best safety use cases for ScanForSafe smart QR codes: child safety wristbands, senior citizen medical details, and anti-theft bike protection stickers.'
        break
      case '/how-it-works':
        title = 'How Our Top Lost and Found QR Code Stickers Work | ScanForSafe'
        description = 'Learn how our top lost and found QR code stickers keep your valuables safe in 3 simple steps: scan to register, attach to your items, and receive instant location scans.'
        break
      case '/testimonials':
        title = 'Best QR Safety Tag Reviews & Real Customer Stories | ScanForSafe'
        description = 'Read reviews from users who saved their belongings with our top rated lost and found QR stickers, vehicle emergency tags, and emergency contact wristbands.'
        break
      case '/login':
        title = 'Secure Member Login | ScanForSafe Smart QR Safety'
        description = 'Log in to your ScanForSafe profile to manage your smart QR safety stickers, update emergency phone numbers, and configure active alert preferences.'
        break
      case '/contact':
        title = 'Contact Us | Top Customer Support for QR Safety Tags | ScanForSafe'
        description = 'Get in touch with the ScanForSafe support team for orders, franchise options, or custom branding of our best smart QR safety stickers and tags.'
        break
      case '/privacy-policy':
        title = 'Privacy Policy | ScanForSafe Smart QR Safety Tags'
        description = 'Read the ScanForSafe Privacy Policy. Learn how we safeguard your profile data and handle GPS location coordinates during scan alerts.'
        break
      case '/terms':
        title = 'Terms & Conditions | ScanForSafe QR Safety Stickers'
        description = 'Review the Terms of Service and warranty rules for ScanForSafe smart QR tags, anti-theft motorcycle stickers, and child safety wristbands.'
        break
      case '/qr-form':
        title = 'Register Your Smart QR Code Safety Tag | ScanForSafe'
        description = 'Activate and register your new ScanForSafe smart QR code tag or vehicle contact sticker to secure your profile and enable instant notifications.'
        break
      case '/preregister':
        title = 'Pre-Register for Best Smart QR Safety Tag Launches | ScanForSafe'
        description = 'Pre-register for ScanForSafe product releases, exclusive discounts, and top early-bird deals on smart QR safety stickers and emergency tags.'
        break
      case '/franchise':
        title = 'Franchise Opportunities for Top Smart QR Safety Tags | ScanForSafe'
        description = 'Partner with ScanForSafe. Join the fastest-growing network offering best anti-theft stickers, pet tags, and emergency safety QR products in your region.'
        break
      default:
        break
    }

    document.title = title

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      metaDescription.setAttribute('content', description)
      document.head.appendChild(metaDescription)
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    const keywords = 'best smart qr tags for safety, top rated lost and found qr stickers, best anti theft sticker for motorcycle, top bike safety stickers with qr code, best vehicle owner contact qr sticker, best emergency contact qr wristbands, top safety tags for pets with best gps alerts, ScanForSafe, smart QR protection, QR code safety tags, smart qr safety tags, nfc emergency tags, qr code recovery system, qr code lost and found stickers, smart qr code protection, nfc scan for contact tags, lifetime qr safety tags, qr code sticker for bike security, smart qr tag for motorcycle, vehicle owner alert qr sticker, gps bike recovery sticker, anti theft vehicle qr code, no parking vehicle contact sticker, smart parking qr code for cars, emergency contact qr band, senior citizen medical id wristband, child safety qr code tag, sos qr code keychains, smart medical alert tags, qr safety bands for kids, qr code pet collar tag, smart dog collar tag with gps, lost pet recovery qr tag, nfc pet tag for cats, waterproof qr pet id tag, qr tag for luggage and bags, laptop security qr sticker, smart keyfinder qr code, lost item recovery stickers, waterproof smart qr labels, best nfc safety tags in India, best qr code emergency profile tags, best app free qr tracking tags, best qr code sticker for bikes, best smart parking sticker for cars, best gps bike alert stickers, best qr pet tags for dogs and cats, best smart dog collar tags with gps alerts, best waterproof qr pet id tags, best lost dog recovery tags, best qr luggage tags for international travel, best smart stickers for laptop security, best keyfinder qr tags, best lost item recovery stickers, best emergency contact qr wristbands, best senior citizen sos bands, best medical alert qr tags, best child safety id wristbands, top bike safety stickers with qr code, top vehicle safety qr stickers, top safety qr tags for pets, top nfc safety stickers in India, top emergency safety tags for senior citizens, top child safety gps qr bands, best safety qr codes for vehicles, best bike safety qr sticker online, best safety wristbands for kids and elders, best safety qr stickers for luggage and bags, best safety pet collar tags with notification, best nfc safety tag for keys and wallet, best personal safety qr code keychains, best top-rated qr stickers for vehicle safety, top safety tags for pets with best gps alerts, best smart nfc stickers for top luggage safety, top rated safety qr codes for emergency contacts, best anti-theft safety tags for top bike brands'
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    } else {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      metaKeywords.setAttribute('content', keywords)
      document.head.appendChild(metaKeywords)
    }
  }, [location.pathname])

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
          <Route path="/about" element={<AboutUs />} />
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
              max-width: min(90vw, 800px);
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