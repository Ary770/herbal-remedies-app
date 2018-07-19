import React from 'react';
import { Link } from 'react-router-dom';

const MedicinalUsesList = (props) => {
  let medicinal_uses = null;

  if (props.medicinal_uses) {
    medicinal_uses = props.medicinal_uses.map(medicinal_use =>
      <h4 key={medicinal_use.id}>
        <li role='presentation'>
          <Link to={`${props.url}/${medicinal_use.id}`}>{medicinal_use.name}</Link>
          <span>  </span>
        </li>
      </h4>
    );
  }

  return (
    <div className="col-sm-5">
      <ul className="nav nav-pills nav-stacked">
        { medicinal_uses }
      </ul>
    </div>
  )
};

export default MedicinalUsesList;
