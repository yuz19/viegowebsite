import logo from './logo.svg';
import './App.css';
import googleFonts from 'google-fonts';
import NavBar from './components/NavBar'
import Acceuil from './components/Acceuil'
import Skins from './components/Skins'
import {Route,Routes,useLocation} from "react-router-dom"
function App() {
  googleFonts.add({
    Inspiration: true,
  });
  const location = useLocation();
  return (
    <div  className={location.pathname != '/' ? 'App bg' : 'App'}>
       <NavBar></NavBar>
        
          <Routes>
            <Route path="/" element={<Acceuil/>}/>
            <Route path="/Skins" element={<Skins/>}/>
            <Route path="/Build" element={<Acceuil/>}/>
            <Route path="/Story" element={<Acceuil/>}/>
            <Route path="/Update" element={<Acceuil/>}/>

          </Routes>
      
       
    </div>
  );
}

export default App;
