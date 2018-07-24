import React from 'react';
import { Link } from 'react-router-dom';

const NestedHerbsShow = (props) => {
  let displayHerbs = null;

  if (props.herbs) {
    //when user clicks on link, route defined on MedicinalUsesPage or PropertiesPage renders HerbShow component.
    displayHerbs = props.herbs.map(herb =>
      <li key={herb.id}>
        <Link to={`${props.url}/herbs/${herb.id}`} className='li-16px-style'>{herb.name}</Link>
      </li>
    );
  }

  return (
    <ul>
      {displayHerbs}
    </ul>
  )
}

export default NestedHerbsShow;
