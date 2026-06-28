import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/navbar.jsx'

//pages
import Home from './Home.jsx'
import About from './About.jsx'
import Research from './research.jsx' //dont know why this needs to be lowercase, but it works either way

function App() {
  return (     
      <BrowserRouter>       
        <main>         
          <Navbar/>
          <Routes>              
            <Route path="/" element={<div className="row"><Home /></div>} />       
            <Route path="/research" element={<div className="row"><Research /></div>} />           
            <Route path="/about" element={<div className="row"><About /></div>} />       
          </Routes>   
        </main>     
      </BrowserRouter>   
  ); 
}  

export default App;