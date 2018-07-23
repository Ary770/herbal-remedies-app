import React from 'react';
// import { Link } from 'react-router-dom';
import MedicinalUseShow from '../containers/MedicinalUseShow';
import Aux from '../HOC/Aux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/medicinalUses';
// import Alert from './Alert'

const MedicinalUsesList = (props) => {
  let medicinalUses = null;

  if (props.medicinalUses) {
    medicinalUses = props.medicinalUses.map(medicinalUse => {
      return (
        <Aux key={medicinalUse.id}>
          <h4>
            <li role='presentation'>
              <a href='/' onClick={(event) => props.fetchHerbsHandler(event, medicinalUse.id)}>
                {medicinalUse.name}
              </a>
              <span>  </span>
            </li>
          </h4>
          { props.muId === medicinalUse.id ? <MedicinalUseShow url={props.url}/> : null}
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

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicinalUsesList);
