import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/navbar.jsx'

//pages
import Home from './Home.jsx'
import About from './About.jsx'
import Research from './research.jsx' //dont know why this needs to be lowercase, but it works either way
import SportsBettingReddit from './researchpages/SportsBettingReddit.jsx';
import CommercializationMMO from './researchpages/CommercializationMMO.jsx';
import Subpage from './components/Subpage.jsx'

function App() {
  return (     
      <BrowserRouter>       
        <main>         
          <Navbar/>
          <Routes>              
            <Route path="/" element={<Home />} />

            <Route path="/research" element={<Research />} />
            
            <Route element={<Subpage />}>
              <Route path="/research/sports-betting-on-reddit" element={<SportsBettingReddit />} />
              <Route path="/research/commercialization-of-childrens-mmo-games" element={<CommercializationMMO />} />
            </Route>

            <Route path="/about" element={<div className="row"><About /></div>} />       
          </Routes>   
        </main>     
      </BrowserRouter>   
  ); 
}  

export default App;