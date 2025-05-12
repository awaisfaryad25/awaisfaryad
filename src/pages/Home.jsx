import Navbar from "../components/global/Navbar"
import HeroSection from "../components/hero/HeroSection"
import About from "../components/about/About"
import Resume from "../assets/resume/Resume"
import Portfolio from "../components/portfolio/Portfolio"
import Services from "../components/services/Services"
import Feedback from "../components/feedback/Feedback"
import ContactUs from "../components/contact/ContactUs"
import Footer from "../components/global/Footer"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="space-y-4 md:space-y-8 mb-4 md:mb-8">
        <HeroSection/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Services/>
        <Feedback/>
        <ContactUs/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home