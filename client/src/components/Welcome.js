import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Welcome = () =>
<Jumbotron>
  <h1>Welcome To Herbal Remedies</h1>

    <p>Quickly find the natural remedies that are best for you! Search for ailments, herbal properties or herbs that you enjoy.</p>

    <p>Start by clicking on the button below and use the smart search to discover your herbs.</p>

    <p>
      <NavLink to='/herbs' type='button' className='btn btn-success btn-lg'>Get Started!</NavLink>
    </p>

</Jumbotron>

export default Welcome
