import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import NFCSection from '../components/NFCSection'
import SeniorCitizenSection from '../components/SeniorCitizenSection'
import VehicleDetails from '../components/VehicleDetails'
import PrivacySecuritySection from '../components/PrivacySecuritySection'
import ReferralSection from '../components/ReferralSection'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
     <SEO
        title="Smart QR & NFC Safety Tags for Family & Vehicles"
        description="ScanForSafe smart shield QR & NFC safety tags protect children, senior citizens, pets, vehicles & luggage across India. Scan to call emergency contact instantly, no app required."
        keywords="QR safety tag India, NFC safety tag India, smart shield tag, child safety QR tag, senior citizen safety band, pet ID tag India, vehicle NFC sticker India, smart luggage tag India, special needs ID tag India, emergency contact QR tag, lost and found tag India, QR safety tag Hyderabad, QR safety tag Bangalore, QR safety tag Chennai"        url="https://www.scanforsafe.com/"
      />
      <Hero />
 
      <section id="how-it-works">
        <HowItWorks />
      </section>
 
      <section id="vehicle-safety">
        <VehicleDetails />
      </section>
 
      <section id="senior-citizen-safety">
        <SeniorCitizenSection />
      </section>
 
      <section id="nfc-technology">
        <NFCSection />
      </section>
 
      {/* NEW */}
      <section id="privacy-security">
        <PrivacySecuritySection />
      </section>
 
      {/* LAST BEFORE FOOTER */}
      <section id="referral-program">
        <ReferralSection />
      </section>
    </>
  )
}