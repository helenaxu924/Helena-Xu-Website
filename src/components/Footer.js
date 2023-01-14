import "./FooterStyles.css"
import {FaRegMoon, FaHeart, FaLinkedin, FaGithub} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="madeWith">
                <FaRegMoon size={20} style={{ marginTop: "0.3rem", color: "#000000", marginRight:"2rem"}}/>
                <div> 
                    <p>made with <FaHeart size={15} style={{color: "#FF0000"}}/> by helena xu</p></div>
                </div>
            </div>
            <div className="right">
                <h4>Feel free to reach out!</h4>
                <div className="email">
                    <MdEmail size={30} style={{color: "#000000", marginRight:"2rem"}} />
                    h32xu@uwaterloo.ca
                <div className="social"> <a href="https://www.linkedin.com/in/helenaxu924"> <FaLinkedin size={30} style={{color: "#000000", marginRight:"2rem"}}/> </a>
                <a href="https://github.com/helenaxu924"> <FaGithub size={30} style={{color: "#000000", marginRight:"2rem"}}/> </a> </div>
            </div>
            {/* we have two different sections of the footer, one for contact and other about me */}
        </div>
        </div>
        </div>
  )
}

export default Footer