import { useState, useRef, useEffect, useCallback } from 'react'

/* =========================================
   FIXES APPLIED:
   1. Added 'anthropic-version' and 'anthropic-dangerous-direct-browser-access' headers → fixes "Something went wrong"
   2. Messages body uses flex:1, minHeight:0, overflowY:'auto' → fixes scroll issue
   3. scrollToBottom uses scrollHeight directly and fires on every message/loading change
   4. Typewriter tied to scrollHeight so it auto-scrolls as text streams in
   5. Typing indicator properly shown/hidden
========================================= */

/* =========================================
   SVG ICONS
========================================= */
function BotSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="20" height="14" rx="3" stroke="white" strokeWidth="1.8"/>
      <circle cx="8.5" cy="14" r="1.5" fill="white"/>
      <circle cx="15.5" cy="14" r="1.5" fill="white"/>
      <path d="M8 18h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 7V4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="3" r="1.2" fill="white"/>
    </svg>
  )
}
function SendSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M22 2L15 22l-4-9-9-4 20-7z" fill="white" stroke="white" strokeWidth="1.5"/>
    </svg>
  )
}
function LoaderSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5"/>
      <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}
function XSvg({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  )
}
function ClipSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function SparklesSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l2.4 7.2H22l-6.2 4.5 2.4 7.3L12 16.5 5.8 21l2.4-7.3L2 9.2h7.6L12 2z" fill="#60a5fa" stroke="#60a5fa" strokeWidth="0.5"/>
    </svg>
  )
}
function WhatsAppSVG({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/>
      <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.771.464 3.432 1.268 4.877L2 22l5.232-1.243A9.953 9.953 0 0012.004 22C17.531 22 22 17.523 22 12.004 22 6.477 17.531 2 12.004 2zm0 18.18a8.165 8.165 0 01-4.163-1.14l-.298-.177-3.105.738.766-3.024-.195-.31a8.12 8.12 0 01-1.248-4.263c0-4.504 3.666-8.17 8.17-8.17 4.504 0 8.17 3.666 8.17 8.17 0 4.504-3.666 8.176-8.097 8.176z" fill="white"/>
    </svg>
  )
}

/* =========================================
   TOPIC ICONS
========================================= */
function GearIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#60a5fa" strokeWidth="1.8"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/></svg>
}
function CarIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 11l1.5-4.5h11L19 11" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/><rect x="2" y="11" width="20" height="7" rx="2" stroke="#60a5fa" strokeWidth="1.6"/><circle cx="7" cy="18" r="2" stroke="#60a5fa" strokeWidth="1.6"/><circle cx="17" cy="18" r="2" stroke="#60a5fa" strokeWidth="1.6"/></svg>
}
function TargetIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#60a5fa" strokeWidth="1.6"/><circle cx="12" cy="12" r="6" stroke="#60a5fa" strokeWidth="1.6"/><circle cx="12" cy="12" r="2" fill="#60a5fa"/></svg>
}
function ShieldIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#60a5fa" strokeWidth="1.6" strokeLinejoin="round"/></svg>
}
function QRIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#60a5fa" strokeWidth="1.6"/><rect x="5" y="5" width="3" height="3" fill="#60a5fa"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#60a5fa" strokeWidth="1.6"/><rect x="16" y="5" width="3" height="3" fill="#60a5fa"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#60a5fa" strokeWidth="1.6"/><rect x="5" y="16" width="3" height="3" fill="#60a5fa"/><path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" fill="#60a5fa"/></svg>
}
function NFCIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12a7 7 0 017-7" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/><path d="M5 12a7 7 0 007 7" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/><path d="M8 12a4 4 0 014-4" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/><path d="M8 12a4 4 0 004 4" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round"/><circle cx="12" cy="12" r="1.5" fill="#60a5fa"/></svg>
}

const QUICK_TOPICS = [
  { label: 'How ScanForSafe works', Icon: GearIcon },
  { label: 'Vehicle Protection', Icon: CarIcon },
  { label: 'Lost Item Recovery', Icon: TargetIcon },
  { label: 'Emergency Support', Icon: ShieldIcon },
  { label: 'QR Smart Tags', Icon: QRIcon },
  { label: 'NFC Technology', Icon: NFCIcon },
]

/* =========================================
   TIME HELPER
========================================= */
function getTime() {
  const d = new Date()
  let h = d.getHours()
  const m = String(d.getMinutes()).padStart(2, '0')
  const ampm = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  return `${h}:${m} ${ampm}`
}

/* =========================================
   TYPEWRITER — with scroll callback
========================================= */
function useTypewriter(text, speed = 12, onProgress) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    setDisplayed('')
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (onProgress) onProgress()
      if (i >= text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text]) // eslint-disable-line
  return displayed
}

function TypingMessage({ text, onProgress }) {
  const typed = useTypewriter(text, 12, onProgress)
  return <>{typed}</>
}

/* =========================================
/* =========================================
   SMALL BOT AVATAR (reused inside messages)
========================================= */
function SmallBotAvatar() {
  return (
    <div style={{
      width: '36px', height: '36px', borderRadius: '50%',
      background: 'linear-gradient(135deg, #2563eb, #1e40af)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="3" stroke="white" strokeWidth="1.8"/>
        <circle cx="8.5" cy="14" r="1.5" fill="white"/>
        <circle cx="15.5" cy="14" r="1.5" fill="white"/>
        <path d="M8 18h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 7V4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="3" r="1.2" fill="white"/>
      </svg>
    </div>
  )
}

/* =========================================
   PREDEFINED CLIENT-SIDE RESPONSES
========================================= */
function getPredefinedResponse(query) {
  const q = query.toLowerCase().trim();

  // Greetings
  if (q === 'hi' || q === 'hello' || q === 'hey' || q === 'greetings' || q === 'hai') {
    return `👋 Hello! Welcome to ScanForSafe.

I can assist you with:
• How ScanForSafe works
• Vehicle & family protection
• Lost item recovery
• QR tag pricing & delivery
• Emergency support & SOS alerts
• Missing vehicle reports

What would you like to know today?`;
  }

  // How ScanForSafe works
  if (q.includes('how scanforsafe works') || q.includes('how it works') || q.includes('how does it work') || q.includes('how to use') || q.includes('steps')) {
    return `🔧 How ScanForSafe Works:

• Purchase & Receive: Buy a ScanForSafe QR code tag online  from an authorized retailer.
• Activate: Scan the code to register your vehicle/item, owner details, emergency contacts, blood group, and insurance info.
• Apply the Tag: Stick the weatherproof radium tag on your vehicle or attach it to your luggage, pet collar, or family member's lanyard/wristband.
• Scan in Emergency: In an emergency or if lost, anyone can scan the QR code using their phone camera (no app needed).
• Instant Alert & Call: The scanner can securely call you (with contact masking) or trigger an SOS alert to your emergency contacts with the scan location.`;
  }

  // Vehicle Protection
  if (q.includes('vehicle protection') || q.includes('vehicle') || q.includes('car') || q.includes('bike') || q.includes('scooter') || q.includes('motorcycle')) {
    return `🚗 Vehicle Protection:

• Radium Smart Sticker: Apply our weather-resistant, tamper-evident radium QR tag onto your car windshield, bike, or scooter.
• Accident SOS: If an accident occurs, bystanders can scan the QR tag to alert your emergency contacts with your live location.
• Masked Calls: People can contact you to report issues (like blocking parking, open doors, or windows left open) without seeing your actual phone number.
• Missing Vehicle Alerts: If your vehicle is stolen, flag it in the portal to publish an alert to our community of 100,000+ subscribers.`;
  }

  // Lost Item Recovery
  if (q.includes('lost item recovery') || q.includes('lost') || q.includes('find') || q.includes('recovery') || q.includes('luggage') || q.includes('bag') || q.includes('pet') || q.includes('dog') || q.includes('cat')) {
    return `🎒 Lost Item & Asset Recovery:

• Smart Luggage & Bag Tags: Attach durable, weatherproof tags to your travel luggage, laptop bags, or everyday valuables.
• Instant Notification: When a finder scans the QR tag, the system logs the scan event (location, time, device type) and alerts you immediately.
• Masked Contact: The finder can call you directly through our masked relay system, ensuring your privacy while facilitating quick returns.
• Pet Protection: Keep your pets safe with smart collar tags containing owner contacts and vital vet info.`;
  }

  // Emergency Support
  if (q.includes('emergency support') || q.includes('emergency') || q.includes('sos') || q.includes('accident') || q.includes('alert') || q.includes('medical') || q.includes('hospital')) {
    return `🚨 Emergency Support & SOS:

• Public Scan: Bystanders scan the QR code on the vehicle/item with a smartphone camera.
• Verified Scanner: Scanner enters their mobile number and verifies it with a quick SMS OTP.
• SOS Alert: Scanner can trigger an emergency alert, which automatically alerts your 3 registered contacts with your live location.
• First Responders: Displays crucial information like blood group, medical profile, and health/vehicle insurance for immediate medical assistance.`;
  }

  // QR Smart Tags
  if (q.includes('qr smart tags') || q.includes('qr tags') || q.includes('qr tag') || q.includes('sticker') || q.includes('stickers') || q.includes('labels')) {
    return `🏷️ QR Smart Tags:

• Physical Design: Premium white background stickers with green QR codes. Made from radium and tamper-evident materials.
• Secure Lifecycle: Each tag has a unique QR Code, Batch No, Series No, Vendor Code, and Order ID.
• Easy Activation: Self-activation takes under 2 minutes on our responsive web portal.
• Validity: Active for 2 years from the date of activation.`;
  }

  // NFC Technology
  if (q.includes('nfc technology') || q.includes('nfc') || q.includes('tap') || q.includes('near field')) {
    return `⚡ NFC (Near Field Communication) Technology:

• Tap to Connect: In addition to scanning the QR code, select tags include NFC chips for tap-and-connect ease.
• No App Required: Finders can simply tap their NFC-enabled smartphone against the tag to open the safety profile instantly.
• Dual Protection: Combining both QR and NFC ensures maximum compatibility with all smartphone devices.`;
  }

  // Pricing & Shipping
  if (q.includes('price') || q.includes('pricing') || q.includes('cost') || q.includes('buy') || q.includes('order') || q.includes('delivery') || q.includes('shipping') || q.includes('fees') || q.includes('charges')) {
    return `💳 Pricing & Delivery:

• Base Price: A ScanForSafe smart tag costs ₹199 (includes 2-year activation).
• Regional Delivery Charges:
  • South India (AP, Telangana, Karnataka, TN, Kerala): ₹40 (5-7 days)
  • Central India (MP, Chhattisgarh): ₹55 (7-10 days)
  • West India (Maharashtra, Goa, Gujarat): ₹50 (5-7 days)
  • North India (Delhi, UP, Punjab, Rajasthan, etc.): ₹60 (7-10 days)
  • East India (West Bengal, Bihar, Odisha, etc.): ₹65 (7-10 days)
  • North-East India (Assam, Meghalaya, etc.): ₹80 (10-14 days)
• Payment Methods: Razorpay (UPI, Credit/Debit cards, Net Banking, Wallets).`;
  }

  // Contact Information
  if (q.includes('contact') || q.includes('support') || q.includes('email') || q.includes('phone') || q.includes('whatsapp') || q.includes('address') || q.includes('office') || q.includes('kurnool')) {
    return `📞 Contact Information:

• Support Phone/WhatsApp: +91 8639322479
• Support Email: customercare@scanforsafe.com
• Corporate Email: support@geniusmindstech.com
• Corporate Office Address:
  R/o 87/1151-4-a-vf-501, Nagireddy Revenue Colony, Revenue Ward No. 87, Kurnool, Andhra Pradesh, PIN Code: 518002
• WhatsApp Channel: https://whatsapp.com/channel/0029VbCNFw0JP2105GmsoT0H`;
  }

  // About & Developer
  if (q.includes('about') || q.includes('developer') || q.includes('who made') || q.includes('company') || q.includes('genius minds') || q.includes('madanapalle')) {
    return `🏢 About the Developer & Company:

• Platform Operator: ScanForSafe is developed and operated by Genius Minds Making Code Pvt. Ltd.
• Corporate Address: Door No. 3-161-21-A-3, SBI Colony, Madanapalle – 517325.
• Focus: Creating advanced IoT, QR, and NFC-based safety systems to protect lives and secure assets.
• Support: support@geniusmindstech.com`;
  }

  // Missing Vehicle Reporting
  if (q.includes('missing') || q.includes('stolen') || q.includes('theft') || q.includes('report missing')) {
    return `🚗 Missing Vehicle Reporting:

• Portal Dashboard: Log in to the customer portal and select "Report Missing Vehicle".
• Required Steps: Upload photos of your vehicle, select from registered vehicles, input missing location, and upload an FIR copy (or mark "Pending FIR" with a 48-hour validation grace period).
• Community Reach: Once verified, customer support publishes the alert to our community of 100,000+ subscribers via WhatsApp and social channels.
• Recovery: Community subscribers and local authorities help locate the vehicle to resolve the case.`;
  }

  // Privacy & Security
  if (q.includes('secure') || q.includes('security') || q.includes('privacy') || q.includes('safety') || q.includes('mask') || q.includes('masking') || q.includes('data') || q.includes('gdpr')) {
    return `🛡️ Security & Privacy:

• Contact Masking: Call routing hides your actual mobile number from finders. Finder check-ins and emergency SOS triggers require SMS OTP verification.
• Platform Security: Role-Based Access Control (RBAC) manages Admin, Retailer, Franchise, Marketing, and Customer actions.
• Compliance: Designed to align with OWASP Top 10 guidelines and uses a PCI-DSS compliant Razorpay gateway (no raw credit card data is stored).`;
  }

  // Refund Policy
  if (q.includes('refund') || q.includes('satisfaction') || q.includes('return') || q.includes('cancel')) {
    return `📦 Refund & Satisfaction Policy:

• 30-Day Guarantee: We offer a 30-day satisfaction guarantee on all physical QR tags.
• Full Refund: If you are unsatisfied, contact customer support within 30 days of delivery for a full refund of physical items.
• Exclusions: Digital activation services are non-refundable once activated.`;
  }

  // Project Timeline
  if (q.includes('timeline') || q.includes('weeks') || q.includes('schedule') || q.includes('duration') || q.includes('phase')) {
    return `📅 Project Timeline & Launch Schedule:

• Official Launch: Scheduled for July.
• Total Duration: 20 weeks (5 months).
• Timeline Phases:
  • Phase 1 (Weeks 1-4): Foundation & Admin Portal.
  • Phase 2 (Weeks 5-8): Retailer, Franchise & Marketing Dashboard. (Native mobile apps are slated for Phase 2).
  • Phase 3 (Weeks 9-13): Customer Portal & Online purchasing.
  • Phase 4 (Weeks 14-17): Missing Vehicle Alerts & Security.
  • Phase 5 (Weeks 18-20): UAT, Go-Live, & Handover.`;
  }

  // Pre-Registration
  if (q.includes('preregistration') || q.includes('pre-registration') || q.includes('early bird') || q.includes('campaign') || q.includes('discount') || q.includes('offer')) {
    return `📝 ScanForSafe Early Bird Pre-Registration:

• Campaign Offer: Join our pre-registration campaign to get an exclusive ₹20 instant discount code on launch!
• Required Fields: To register, you will provide:
  • Contact & Shipping: Full Name, 10-digit Mobile Number, Email, City, Address, and PIN Code.
  • Visual Tag Types: Choose from Car, Bike/Scooty, Cycle, Truck, Auto Rickshaw, Senior Citizen, Support Needed, Pets, or School Kids (you can select multiple).
  • Emergency Contacts: Emergency Name and Phone number (used for instant alerts and SOS calls).
• Account Setup: You will also set up a password to manage your tags after launch.
• Secure Setup: All form data is encrypted and saved securely. Go to the Pre-Registration page to join!`;
  }

  // Franchise & Partnership
  if (q.includes('franchise') || q.includes('partner') || q.includes('partnership') || q.includes('invest') || q.includes('investment') || q.includes('margins') || q.includes('tier') || q.includes('exclusive')) {
    return `🤝 ScanForSafe Partnership & Franchise Models:

We offer three exclusive investment tiers to partner with ScanForSafe:

• Silver Partner:
  • Investment: ₹50,000 | Margin: 10%
  • Territory: 2 Pincodes | Inventory: 200 Safety Tags
  • Support: Basic digital flyers & social media kit
  • Potential ROI: ₹5,000 / month

• Gold Partner:
  • Investment: ₹1,00,000 | Margin: 20%
  • Territory: 4 Pincodes (Exclusive) | Inventory: 500 Safety Tags
  • Support: Brochures, banners, and digital ads support
  • Potential ROI: ₹20,000 / month

• Platinum Master Franchise:
  • Investment: ₹3,00,000+ | Margin: 30%
  • Territory: Entire City / District (Exclusive) | Inventory: 1,500 Tags + NFC Cards
  • Support: Store signage, full local ad campaigns, dedicated account manager
  • Potential ROI: ₹90,000 / month

• Key Benefits: High ROI model, exclusive territory protection, marketing support, and ongoing business training. Go to the Franchise page to apply!`;
  }

  // Universal Fallback Response
  return `🔍 Welcome to ScanForSafe Support!

I couldn't find a specific match for your question. Here is a quick guide on what you can ask:
• "how does it work" — Steps to purchase and activate tags
• "vehicle protection" — Info on car, bike, and scooter stickers
• "lost item recovery" — Info on luggage and pet recovery
• "pricing & delivery" — Cost and shipping fees by region
• "missing vehicle" — Stolen vehicle reporting workflow
• "pre-registration" — Early bird ₹20 discount and tag registration
• "franchise" — Silver, Gold, and Platinum partnership tiers
• "contact info" or "office" — Support phone/WhatsApp, email, and locations

For direct assistance, feel free to email customercare@scanforsafe.com or call +91 8639322479.`;
}

/* =========================================
   CHAT WINDOW
========================================= */
function AIChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '👋 Hi! Welcome to ScanForSafe.\n\nI can help you with:\n• How ScanForSafe works\n• Vehicle & family protection\n• Lost item recovery\n• QR tag pricing & delivery\n• Emergency support\n• Missing vehicle alerts\n\nWhat would you like to know?',
      time: getTime(),
      isNew: false, // greeting doesn't typewrite
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesBodyRef = useRef(null)
  const conversationHistory = useRef([])

  // FIX 2: Reliable scroll-to-bottom helper
  const scrollToBottom = useCallback(() => {
    if (messagesBodyRef.current) {
      messagesBodyRef.current.scrollTop = messagesBodyRef.current.scrollHeight
    }
  }, [])

  // Scroll on every message or loading change
  useEffect(() => {
    scrollToBottom()
  }, [messages, loading, scrollToBottom])

  async function sendMessage(customText = null) {
    const text = customText || input.trim()
    if (!text || loading) return
    if (!customText) setInput('')

    const userTime = getTime()
    setMessages(prev => [...prev, { role: 'user', content: text, time: userTime }])
    conversationHistory.current.push({ role: 'user', content: text })
    setLoading(true)

    // Check for predefined client-side responses
    const cleanQuery = text.toLowerCase().trim()
    const reply = getPredefinedResponse(cleanQuery)

    // Simulate a natural typing delay of 450ms
    setTimeout(() => {
      conversationHistory.current.push({ role: 'assistant', content: reply })
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: reply,
        time: getTime(),
        isNew: true, // triggers typewriter
      }])
      setLoading(false)
    }, 450)
  }

  return (
    <div className="sfs-chat-window-override" style={{
      position: 'fixed',
      bottom: '100px',
      right: '24px',
      width: '420px',
      // Dynamically calculate height so top edge is always below 106px (navbar)
      height: 'calc(100vh - 210px)',
      maxHeight: '620px',
      zIndex: 10000,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '20px',
      background: '#0d1b2e',
      border: '1px solid rgba(255,255,255,0.07)',
      boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
      overflow: 'hidden',
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <style>{`
        .sfs-msgs::-webkit-scrollbar { width: 4px; }
        .sfs-msgs::-webkit-scrollbar-track { background: transparent; }
        .sfs-msgs::-webkit-scrollbar-thumb { background: rgba(99,179,255,0.2); border-radius: 4px; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce { 0%,80%,100% { transform: translateY(0); } 40% { transform: translateY(-5px); } }
        @media (max-width: 480px) {
          .sfs-chat-window-override {
            width: calc(100% - 32px) !important;
            right: 16px !important;
            left: 16px !important;
            bottom: 96px !important;
            // Sit below mobile navbar (98px)
            height: calc(100vh - 200px) !important;
          }
        }
      `}</style>

      {/* HEADER — flexShrink:0 so it never collapses */}
      <div style={{
        padding: '16px 20px',
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2047 50%, #0f2d6b 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #2563eb, #1e40af)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid rgba(99,179,255,0.3)', flexShrink: 0,
          }}>
            <BotSVG />
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '17px', letterSpacing: '-0.3px' }}>
              ScanForSafe AI Assistant
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }}/>
              <span style={{ fontSize: '12px', color: '#60a5fa', fontWeight: 500 }}>Online • AI Powered</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} style={{
          width: '34px', height: '34px', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
        }}>
          <XSvg size={15} />
        </button>
      </div>

      {/* FIX 4: MESSAGES BODY — flex:1, minHeight:0 so it takes remaining space and scrolls */}
      <div
        className="sfs-msgs"
        ref={messagesBodyRef}
        style={{
          flex: '1 1 0',
          minHeight: 0,           // ← CRITICAL: without this, flex child won't shrink & scroll
          overflowY: 'auto',
          padding: '20px 16px 12px',
          display: 'flex', flexDirection: 'column', gap: '6px',
          background: '#0d1b2e',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(99,179,255,0.2) transparent',
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            alignItems: 'flex-end', gap: '10px',
          }}>
            {msg.role === 'assistant' && (
              <div style={{ alignSelf: 'flex-end', marginBottom: '18px' }}>
                <SmallBotAvatar />
              </div>
            )}
            <div style={{ maxWidth: '75%', display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                padding: '13px 16px',
                borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                background: msg.role === 'user' ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : 'rgba(255,255,255,0.07)',
                border: msg.role === 'assistant' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                color: '#e2e8f0', whiteSpace: 'pre-line', lineHeight: 1.75,
                fontSize: '13.5px', wordBreak: 'break-word',
              }}>
                {/* FIX 5: Only typewrite the latest assistant message */}
                {msg.role === 'assistant' && msg.isNew && index === messages.length - 1
                  ? <TypingMessage text={msg.content} onProgress={scrollToBottom} />
                  : msg.content
                }
              </div>
              <div style={{
                fontSize: '11px', color: 'rgba(148,163,184,0.6)', marginTop: '5px',
                display: 'flex', alignItems: 'center', gap: '4px',
              }}>
                {msg.time}
                {msg.role === 'user' && (
                  <svg width="14" height="10" viewBox="0 0 18 12" fill="none">
                    <path d="M1 6l4 4L17 1" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 6l4 4" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* TYPING INDICATOR */}
        {loading && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', marginTop: '4px' }}>
            <SmallBotAvatar />
            <div style={{
              padding: '14px 18px', borderRadius: '18px 18px 18px 4px',
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', gap: '5px', alignItems: 'center',
            }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  width: '7px', height: '7px', borderRadius: '50%', background: '#60a5fa',
                  animation: `bounce 1.2s infinite ${i * 0.2}s`, display: 'inline-block',
                }}/>
              ))}
            </div>
          </div>
        )}

        {/* QUICK TOPICS — nested inside the scrollable area */}
        <div style={{
          marginTop: '16px',
          padding: '0 4px',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <SparklesSVG />
            <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#94a3b8' }}>Quick Topics</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {QUICK_TOPICS.map(({ label, Icon }, i) => (
              <button key={i} onClick={() => sendMessage(label)} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '7px 13px', borderRadius: '999px',
                border: '1px solid rgba(99,179,255,0.2)', background: 'rgba(255,255,255,0.04)',
                color: '#cbd5e1', cursor: 'pointer', fontSize: '12px', fontWeight: 500,
                transition: 'all 0.2s', fontFamily: 'inherit',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.2)'; e.currentTarget.style.borderColor = 'rgba(99,179,255,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(99,179,255,0.2)' }}
              >
                <Icon />{label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* INPUT BAR — flexShrink:0 */}
      <div style={{
        padding: '12px 14px 14px', background: '#0d1b2e',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0,
      }}>
        <button style={{
          width: '38px', height: '38px', borderRadius: '50%', border: 'none',
          background: 'transparent', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <ClipSVG />
        </button>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !loading && sendMessage()}
          placeholder="Ask anything about ScanForSafe..."
          disabled={loading}
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            color: '#e2e8f0', fontSize: '13.5px', fontFamily: 'inherit', padding: '0',
          }}
        />
        <button
          onClick={() => sendMessage()}
          disabled={!input.trim() || loading}
          style={{
            width: '42px', height: '42px', borderRadius: '50%', border: 'none',
            cursor: input.trim() && !loading ? 'pointer' : 'default',
            background: input.trim() && !loading ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : 'rgba(37,99,235,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            transition: 'all 0.2s',
            boxShadow: input.trim() && !loading ? '0 4px 14px rgba(37,99,235,0.4)' : 'none',
          }}
        >
          {loading ? <LoaderSVG /> : <SendSVG />}
        </button>
      </div>
    </div>
  )
}

/* =========================================
   WHATSAPP FLOATING BUTTON
========================================= */
const WA_CHANNEL_URL = 'https://whatsapp.com/channel/0029VbCNFw0JP2105GmsoT0H'

function WhatsAppFloatingButton() {
  const [tooltip, setTooltip] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      {tooltip && (
        <div style={{
          position: 'absolute', bottom: '72px', right: '0',
          background: '#1a2e1a', border: '1px solid rgba(37,211,102,0.3)',
          borderRadius: '10px', padding: '8px 12px', whiteSpace: 'nowrap',
          fontSize: '12px', color: '#4ade80', fontWeight: 600,
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)', pointerEvents: 'none', zIndex: 200,
        }}>
          Follow ScanForSafe on WhatsApp
          <div style={{
            position: 'absolute', bottom: '-6px', right: '20px',
            width: '10px', height: '10px', background: '#1a2e1a',
            border: '1px solid rgba(37,211,102,0.3)', borderTop: 'none', borderLeft: 'none',
            transform: 'rotate(45deg)',
          }}/>
        </div>
      )}
      <a
        href={WA_CHANNEL_URL} target="_blank" rel="noopener noreferrer"
        onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)}
        style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d366, #128c7e)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
          cursor: 'pointer', textDecoration: 'none',
          animation: 'wa-pulse 2.5s ease-in-out infinite',
        }}
      >
        <WhatsAppSVG size={26} />
      </a>
    </div>
  )
}

/* =========================================
   MAIN EXPORT
========================================= */
export default function ScanForSafeChatWidget() {
  const [chatOpen, setChatOpen] = useState(false)
  return (
    <>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce { 0%,80%,100% { transform: translateY(0); } 40% { transform: translateY(-5px); } }
        @keyframes wa-pulse {
          0%,100% { transform: scale(1); box-shadow: 0 6px 24px rgba(37,211,102,0.45); }
          50% { transform: scale(1.06); box-shadow: 0 8px 32px rgba(37,211,102,0.6); }
        }
      `}</style>

      {chatOpen && <AIChatWindow onClose={() => setChatOpen(false)} />}

      <div style={{
        position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px',
      }}>
        <WhatsAppFloatingButton />

        <button
          onClick={() => setChatOpen(!chatOpen)}
          style={{
            height: '62px', borderRadius: '999px', border: 'none', cursor: 'pointer',
            padding: '0 22px 0 8px', display: 'flex', alignItems: 'center', gap: '12px',
            background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', color: '#fff',
            boxShadow: '0 8px 32px rgba(37,99,235,0.5)',
            fontFamily: "'Segoe UI', -apple-system, sans-serif",
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,99,235,0.6)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.5)' }}
        >
          <div style={{
            width: '46px', height: '46px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
          }}>
            {chatOpen ? <XSvg size={18} /> : <BotSVG />}
            {!chatOpen && (
              <span style={{
                position: 'absolute', top: '0px', right: '0px',
                width: '12px', height: '12px', borderRadius: '50%',
                background: '#22c55e', border: '2px solid #1d4ed8',
              }}/>
            )}
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: '14px', letterSpacing: '-0.2px' }}>AI Assistant</div>
            <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '1px' }}>Ask anything</div>
          </div>
        </button>
      </div>
    </>
  )
}