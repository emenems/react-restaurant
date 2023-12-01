// HamburgerMenu.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './App';
import Logout from './pages/Logout';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const navigateTo = (path) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <div className="container">
      <div className={`menu-icon ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
  
      <div className={`menu ${menuActive ? 'active' : ''}`}>
        <ul>
          <li onClick={() => navigateTo('/')}>Domov</li>
          {isAuthenticated && (
            <>
              <li onClick={() => navigateTo('/menu')}>Menu Admin</li>
              <li onClick={() => navigateTo('/stats')}>Štatistiky</li>
            </>
          )}
          {isAuthenticated ? <Logout /> : <li onClick={() => navigateTo('/login')}>Login</li>}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;