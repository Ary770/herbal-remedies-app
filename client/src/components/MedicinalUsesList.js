import React from 'react';
// import { Link, Route } from 'react-router-dom';
import MedicinalUseShow from '../containers/MedicinalUseShow';
import Aux from '../HOC/Aux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/medicinalUses';
// import Alert from './Alert'

class MedicinalUsesList extends React.Component {
  state = {
    muId: ''
  }

  // displayHerbsHandler = (medicinalUse) => {
  //   //set state.herbs = to medicinalUse.herbs
  //   //set state.displayHerbs =  !state.displayHerbs
  //   this.setState({
  //     displayHerbs: !this.displayHerbs,
  //   })
  // }

  fetchHerbsHandler = (event, muId) => {
    event.preventDefault();
    //fetch giving errors, consider searching herbs in reducer that include medicinaluse
    this.props.actions.fetchMedicinalUseHerbs(muId)
    this.setState({muId: muId})
  }

  render() {
    let medicinalUses = null;

    if (this.props.medicinalUses) {
      medicinalUses = this.props.medicinalUses.map(medicinalUse => {
        return (
          <Aux key={medicinalUse.id}>
            <h4 >
              <li role='presentation'>
                <a href='/' onClick={(event) => this.fetchHerbsHandler(event, medicinalUse.id)}>
                  {medicinalUse.name}
                </a>
                <span>  </span>
              </li>
            </h4>
            { this.state.muId === medicinalUse.id ? <MedicinalUseShow /> : null}
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

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(MedicinalUsesList);
