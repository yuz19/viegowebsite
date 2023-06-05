import './App.css';
import googleFonts from 'google-fonts';
import NavBar from './components/NavBar'
import Acceuil from './components/Acceuil'
import Skins from './components/Skins'
import {Route,Routes,useLocation} from "react-router-dom"
import React, { useState, useEffect } from 'react';
function App() {
  googleFonts.add({
    Inspiration: true,
  });
  const location = useLocation();
  
  const [h1Color, setH1Color] = useState('#43C176');
  useEffect(() => {
    const infoSkins = document.querySelectorAll('.infoSkin');
    infoSkins.forEach((infoSkin) => {
      const className = infoSkin.classList;
      if (className.length > 1  && className.contains('active')) {
        if (className.contains('Penta')) {
          setH1Color('#820609');
           
        } else if (className.contains('King')) {
          setH1Color('#E4C26C');
        } else if (className.contains('edg')) {
          setH1Color('blue');
        } 
      }
    });
  },[h1Color]);
  return (
    <div  className={location.pathname !== '/' ? 'App bg' : 'App'}>
      
       <NavBar setH1Color={setH1Color} h1Color={h1Color}></NavBar>
        
          <Routes>
            <Route path="/" element={<Acceuil/>}/>
            <Route path="/Skins" element={<Skins setH1Color={setH1Color} h1Color={h1Color}/>}/>
            <Route path="/Build" element={<Acceuil/>}/>
            <Route path="/Story" element={<Acceuil/>}/>
            <Route path="/Update" element={<Acceuil/>}/>

          </Routes>
      
       
    </div>
  );
}

export default App;
