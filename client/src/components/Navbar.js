import React from 'react';
import { NavLink } from 'react-router-dom';
import leafLogo from '../assets/images/leaf-logo.png';

const NavBar = () => {
  const style = {
    width: '40px'
  }

  return (
    <nav className="page-header">
      <ul className="nav nav-pills">
        <li role="presentation"><NavLink to="/herbs"><img id='logo-align'alt='logo' src={leafLogo} style={style}/></NavLink></li>
        <li className="li-align" role="presentation">
          <NavLink className="nav-font-style" to="/medicinal_uses">Medicinal Uses</NavLink>
        </li>
        <li className="li-align" role="presentation">
          <NavLink className="nav-font-style" to="/favorite_herbs">Favorite Herbs</NavLink>
        </li>
        <p id="nav-p-padding" className="navbar-text navbar-right"><a id='nav-link-gray' href="https://www.anniesremedy.com" className="navbar-link">Data From: anniesremedy.com</a></p>
      </ul>
    </nav>
  )
};

export default NavBar
