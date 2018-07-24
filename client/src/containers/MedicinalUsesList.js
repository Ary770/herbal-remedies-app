import React from 'react';
import NestedHerbsShow from '../components/NestedHerbsShow';
import Aux from '../HOC/Aux'
import { connect } from 'react-redux';
// import Alert from './Alert'

const MedicinalUsesList = (props) => {
  let medicinalUses = null;

  if (props.medicinalUses) {
    medicinalUses = props.medicinalUses.map(mu => {
      return (
        <Aux key={mu.id}>
          <h4>
            <li role='presentation'>
              <a href='/' onClick={(event) => props.fetchHerbsHandler(event, mu.id)}>
                {mu.name}
              </a>
              <span>  </span>
            </li>
          </h4>
          { props.muId === mu.id ? <NestedHerbsShow herbs={mu.herbs} url={props.url}/> : null }
        </Aux>
      )
    });
  }

  return (
    <div className="col-sm-5">
      <ul className="nav nav-pills nav-stacked">
        { medicinalUses }
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return({
    muId: state.medicinalUses.muId
  })
}

export default connect(mapStateToProps)(MedicinalUsesList);
