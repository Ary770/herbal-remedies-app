import React from 'react';
// import { Link } from 'react-router-dom';
import MedicinalUseShow from '../containers/MedicinalUseShow';
import Aux from '../HOC/Aux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/medicinalUses';
// import Alert from './Alert'

class MedicinalUsesList extends React.Component {
  // state = {
  //   muId: ''
  // }

  // displayHerbsHandler = (medicinalUse) => {
  //   //set state.herbs = to medicinalUse.herbs
  //   //set state.displayHerbs =  !state.displayHerbs
  //   this.setState({
  //     displayHerbs: !this.displayHerbs,
  //   })
  // }

  render() {
    let medicinalUses = null;
  
    if (this.props.medicinalUses) {
      medicinalUses = this.props.medicinalUses.map(medicinalUse => {
        return (
          <Aux key={medicinalUse.id}>
            <h4>
              <li role='presentation'>
                <a href='/' onClick={(event) => this.props.fetchHerbsHandler(event, medicinalUse.id)}>
                  {medicinalUse.name}
                </a>
                <span>  </span>
              </li>
            </h4>
            { this.props.muId === medicinalUse.id ? <MedicinalUseShow url={this.props.url}/> : null}
          </Aux>
        )
      });
    }

    // { this.state.showHerbs ? <MedicinalUseShow herbs={this.state.mU.herbs}/> : null}
    // { this.state.muId === medicinalUse.id ? <MedicinalUseShow herbs={medicinalUse.herbs}/> : null}
    return (
      <div className="col-sm-5">
        <ul className="nav nav-pills nav-stacked">
          { medicinalUses }
        </ul>
      </div>
    )
  }
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
