import Hero from '../components/home/Hero'
import Welcome from '../components/home/Welcome'
import WhyChooseUs from '../components/home/WhyChooseUs'
import StatsCounter from '../components/home/StatsCounter'
import DailyProgramme from '../components/home/DailyProgramme'
import AboutUs from '../components/home/AboutUs'
import SchoolRules from '../components/home/SchoolRules'
import VideoSection from '../components/home/VideoSection'
import ContactSection from '../components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <StatsCounter />
      <DailyProgramme />
      <AboutUs />
      <SchoolRules />
      <VideoSection />
      <ContactSection />
    </>
  )
}
