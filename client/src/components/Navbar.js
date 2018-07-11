import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavLink className="navbar-brand" to="/herbs">Herbal Remedies</NavLink>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><NavLink to="/medicinal-uses">Medicinal Uses</NavLink></li>
            <li><NavLink to="/properties">Herbal Properties</NavLink></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="https://www.anniesremedy.com" className="navbar-link">Data from: anniesremedy.com</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default NavBar
