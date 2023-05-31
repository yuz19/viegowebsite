import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  const [h1Color, setH1Color] = useState('#43C176');

  useEffect(() => {
    const infoSkins = document.querySelectorAll('.infoSkin');
    infoSkins.forEach((infoSkin) => {
      const className = infoSkin.classList;
      if (className.length > 1) {
        if (className.contains('Penta')) {
          setH1Color('red');
        } else if (className.contains('king')) {
          setH1Color('yellow');
        } else if (className.contains('edg')) {
          setH1Color('blue');
        }
      }
    });
  });

  return (
    <header>
      <h1 style={{ color: h1Color }}>Viego</h1>
      <nav>
        <ul>
          <li className={location.pathname === '/Story' ? 'active' : ''}>
            <Link to="/Story">Story</Link>
          </li>
          <li className={location.pathname === '/Build' ? 'active' : ''}>
            <Link to="/Build">Build</Link>
          </li>
          <li className={location.pathname === '/Skins' ? 'active' : ''}>
            <Link to="/Skins">Skins</Link>
          </li>
          <li className={location.pathname === '/Update' ? 'active' : ''}>
            <Link to="/Update">Update Informations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
