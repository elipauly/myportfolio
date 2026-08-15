import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/navbar.jsx';
import JumpToTop from './components/JumpToTop.jsx';
//pages
import Home from './Home.jsx'
import About from './About.jsx'
import Research from './Research.jsx'

//research
import SportsBettingReddit from './researchpages/SportsBettingReddit.jsx';
import CommercializationMMO from './researchpages/CommercializationMMO.jsx';

//interaction
import Amplication from './workspages/Amplication.jsx';
import Hausblend from './workspages/Hausblend.jsx';
import SummerJobs from './workspages/SummerJobs.jsx';
import Beers from './workspages/Beers.jsx';

import Subpage from './components/Subpage.jsx';
import { LightboxProvider } from './components/LightboxProvider.jsx';

function App() {
  return (
    <div className="bg-wrapper"> 
      <BrowserRouter>
        <LightboxProvider>      
          <main>
            <JumpToTop/ >         
            <Navbar/>
            <Routes>              
              <Route path="/" element={<Home />} />

              <Route element={<Subpage />}>
                <Route path="/amplication" element={<Amplication />} />
                <Route path="/hausblend" element={<Hausblend />} />
                <Route path="/summerjobs" element={<SummerJobs />} />
                <Route path="/beers" element={<Beers />} />
              
              </Route>

              <Route path="/research" element={<Research />} />
              
              <Route element={<Subpage />}>
                <Route path="/research/sports-betting-on-reddit" element={<SportsBettingReddit />} />
                <Route path="/research/commercialization-of-childrens-mmo-games" element={<CommercializationMMO />} />
              </Route>

              <Route path="/about" element={<div className="row"><About /></div>} />       
            </Routes>   
          </main>
        </LightboxProvider>      
      </BrowserRouter>
    </div>       
  ); 
}  

export default App;