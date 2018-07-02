import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Welcome = () =>
<Jumbotron>
  <h1>Welcome To Herbal Remedies</h1>

    <blockquote className="blockquote">
      <p className="mb-0">No Illness which can be treated by the diet should be treated by any other means.
      </p>
      <footer className="blockquote-footer">Maimonides</footer>
    </blockquote>
  <p>
    <NavLink to='/herbs'>Top 65 Most Commonly Used Herbs</NavLink>
  </p>

</Jumbotron>


export default Welcome
