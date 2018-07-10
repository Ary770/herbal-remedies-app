import React from 'react';
import { Link } from 'react-router-dom';


const Herbs = (props) => {
  let herbs = null;

  if (props.herbs) {
    herbs = props.herbs.map(herb =>
      <h4 key={herb.id}><li role='presentation'><Link to={`${props.url}/${herb.id}`}>{herb.name}</Link></li></h4>
    )
  }

  return (

    <ul className="nav nav-pills nav-stacked">
      {herbs}
    </ul>

  )
}

export default Herbs;
