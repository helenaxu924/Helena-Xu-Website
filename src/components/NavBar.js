import './NavBarStyles.css'
import React, {useState} from "react"
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa"
// import { Sling as Hamburger } from 'hamburger-react' 

const NavBar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click)
// function for when the hamburger is clicked to make it responsive
const [color] = useState(false);
// const changeColor = () => {
//     if(window.scrollY >= 100) {setColor(true);}
//     else {setColor(false);}
// }
// above lines are for making the navbar transparent when page is scrolled below Y value 

  return ( 
    <div className = {color ? "header header-bg" : "header"}>
    <Link to="/"> <h1>Helena Xu</h1>
    </Link>
    
    {/* creating the navbar below */}
    <ul className={click? "nav-menu active" : "nav-menu"}>
        {/* this is condition for css styling depending on whether nav menu has been clicked or not */}
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to="/about">About Me</Link>
        </li>
        {/* <li>
            <Link to="/extracurriculars">Extracurriculars</Link>
        </li> */}
    </ul>
    {/* the portfolio logo at the top is also a link that brings us to the homepage */}
    <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: 'ac3b61'}} />) :
        (<FaBars size={20} style={{color: 'ac3b61'}} />)}
        {/* condition describing to keep the hamburger or cross when user clicks so only one icon */}
        
        

    </div>
    </div>
  )
}

export default NavBar