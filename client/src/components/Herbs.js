import React from 'react';
import { Link } from 'react-router-dom';


const Herbs = (props) => {
  const herbs = props.herbs.map(herb =>
    <h4 key={herb.id}><li role='presentation'><Link to={`/herbs/${herb.id}`}>{herb.name}</Link></li></h4>
  )

  return (
    <div className="col-sm-3">
      <ul className="nav nav-pills nav-stacked">
        {herbs}
      </ul>
    </div>
  )
}

export default Herbs;
