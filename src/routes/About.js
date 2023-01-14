import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroImage2 from "../components/HeroImage2"
import AboutContent from "../components/AboutContent"

const About = () => {
  return (
    <div> 
        <NavBar/>
        <HeroImage2 heading="About and Contact" text="Learn more about me and find out my contact details below." />
        <AboutContent />
    <Footer /> </div>
  )
}

export default About