import HeroSection from "./HeroSection"
import StatsSection from "./StatsSection"
import FeaturesSection from "./FeaturesSection"
import HowItWorksSection from "./HowItWorksSection"
import FinalCTASection from "./FinalCTASection"
import Footer from "./Footer"

export default function FuturisticHome() {
  return (
    <div className="min-h-screen bg-linear-to-b from-black via-zinc-900 to-black text-white">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
