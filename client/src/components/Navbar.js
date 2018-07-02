import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="page-header">
      <ul className="nav nav-pills">
        <li role="presentation" className="active"><NavLink to="/herbs">Herbal Remedies</NavLink></li>
        <li role="presentation"><NavLink to="/medicinal-uses">Medicinal Uses</NavLink></li>
        <li role="presentation"><NavLink to="/properties">Herbal Properties</NavLink></li>
        <p className="navbar-text navbar-right">Data From: <a href="https://www.anniesremedy.com" className="navbar-link">anniesremedy.com</a></p>
      </ul>
    </nav>

  )
};

export default NavBar
