import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <header>
      <h1>Viego</h1>
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
