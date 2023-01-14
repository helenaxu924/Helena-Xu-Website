import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    // browserRouter calls our app 
    document.getElementById('root')
);