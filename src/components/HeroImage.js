import "./HeroImgStyles.css"
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from 'react-router-dom'

const HeroImage = () => {
  return (
    <div className="hero">
        <div className='mask'>
            <img className="intro-img"
            src={IntroImg} alt= "Intro" />
            </div>
            <div className="content">
                <p>Welcome! I'm Helena Xu, nice to meet you!</p>
                <h1>I am an ambitious 1B CS student attending the University of Waterloo, currently looking for spring co-op and internship opportunities. <br></br></h1>
                <div> 
                    <Link to ="/projects" className="btn"> View my projects</Link>
                    <Link to ="/about" className="btn btn-light"> About & Contact Me</Link>
                    </div></div></div>
  )
}

export default HeroImage