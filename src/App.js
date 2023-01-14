import "./index.css"
import Home from "./routes/Home"
import Extracurriculars from "./routes/Extracurriculars"
import About from "./routes/About"
import Projects from "./routes/Projects"
// importing each of the pages in the app
import {Route, Routes} from "react-router-dom"


const App = () => {
  return (
    <Routes>
        <Route path="/" element = {<Home />}/> 
        <Route path="/projects" element = {<Projects/>}/> 
        <Route path="/about" element = {<About />}/> 
        <Route path="/extracurriculars" element = {<Extracurriculars />}/> 
        {/* Route is self-closing */}
    </Routes>
  )
}

export default App