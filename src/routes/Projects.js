import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroImage2 from "../components/HeroImage2"
import Work from "../components/Work"

const Projects = () => {
  return (
    <div>
      <NavBar/>
      <HeroImage2 heading="My Project Portfolio" text="Take a tour and learn about some of my most recent projects!" />
      <Work /> 
      <Footer /> 
      {/* importing navbar and footer into the projects page */}
    </div>
  )
}
// react is what allows us to do this, we make one component and pass component into multiple pages

export default Projects