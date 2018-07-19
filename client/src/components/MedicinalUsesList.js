import React from 'react';
import { Link } from 'react-router-dom';

const MedicinalUsesList = (props) => {
  let medicinalUses = null;

  if (props.medicinalUses) {
    medicinalUses = props.medicinalUses.map(medicinalUse =>
      <h4 key={medicinalUse.id}>
        <li role='presentation'>
          <Link to={`${props.url}/${medicinalUse.id}`}>{medicinalUse.name}</Link>
          <span>  </span>
        </li>
      </h4>
    );
  }

  return (
    <div className="col-sm-5">
      <ul className="nav nav-pills nav-stacked">
        { medicinalUses }
      </ul>
    </div>
  )
};

export default MedicinalUsesList;
