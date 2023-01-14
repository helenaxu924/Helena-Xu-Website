import NavBar from "../components/NavBar"
import HeroImage from "../components/HeroImage"
import Footer from "../components/Footer"
import Work from "../components/Work"

const Home = () => {
  return (
    <div>
        <NavBar /> 
        {/* importing the navbar into the home */}
        <HeroImage/>
        <Work first={3}/>
        <Footer />
    </div>
  )
}

export default Home