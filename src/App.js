import logo from './logo.svg';
import './App.css';
import googleFonts from 'google-fonts';
import NavBar from './components/NavBar'
import Acceuil from './components/Acceuil'
function App() {
  googleFonts.add({
    Inspiration: true,
  });
  
  return (
    <div className="App">
       <NavBar></NavBar>
       <Acceuil></Acceuil>
    </div>
  );
}

export default App;
