import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import HowItWorks from '../components/HowItWorks'
import NFCSection from '../components/NFCSection'
import SeniorCitizenSection from '../components/SeniorCitizenSection'
import VehicleDetails from '../components/VehicleDetails'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <HowItWorks />
      <VehicleDetails />
      <SeniorCitizenSection />
      <NFCSection />
    </>
  )
}