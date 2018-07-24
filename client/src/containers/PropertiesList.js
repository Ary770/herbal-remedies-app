import React from 'react';
import MedicinalUseShow from '../containers/MedicinalUseShow';
import Aux from '../HOC/Aux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/properties';
// import Alert from './Alert'

const PropertiesList = (props) => {
  let properties = null;

  if (props.properties) {
    properties = props.properties.map(property => {
      return (
        <Aux key={property.id}>
          <h4>
            <li role='presentation'>
              <a href='/' onClick={(event) => props.fetchHerbsHandler(event, property.id)}>
                {property.name}
              </a>
              <span>  </span>
            </li>
          </h4>
            { props.propId === property.id ?
              <MedicinalUseShow herbs={property.herbs} url={props.url}/>
              :
              null
            }
        </Aux>
      )
    });
  }

  return (
    <div className="col-sm-5">
      <ul className="nav nav-pills nav-stacked">
        { properties }
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return({
    propId: state.properties.propId
  })
}

export default connect(mapStateToProps)(PropertiesList);
