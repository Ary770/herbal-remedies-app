import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="page-header">
      <ul className="nav nav-pills">
        <li role="presentation" className="active"><NavLink to="/herbs">Healing Herbs</NavLink></li>
        <li role="presentation"><NavLink to="/">Link</NavLink></li>
        <li role="presentation"><NavLink to="/">Link</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar
