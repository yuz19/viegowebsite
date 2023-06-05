import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar({h1Color,setH1Color}) {
  const location = useLocation();
 
  const handleColorChange = () => {
    setH1Color('#43C176');
  };


  return (
    <header>
      <h1 style={{ color: h1Color }}>Viego</h1>
      <nav>
        <ul>
          <li className={location.pathname === '/Story' ? 'active' : ''} onClick={handleColorChange}>
            <Link to="/Story">Story</Link>
          </li>
          <li className={location.pathname === '/Build' ? 'active' : ''} onClick={handleColorChange}>
            <Link to="/Build">Build</Link>
          </li>
          <li className={location.pathname === '/Skins' ? 'active' : ''} onClick={()=>{setH1Color("blue")}}>
            <Link to="/Skins">Skins</Link>
          </li>
          <li className={location.pathname === '/Update' ? 'active' : ''} onClick={handleColorChange}>
            <Link to="/Update">Update Informations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
