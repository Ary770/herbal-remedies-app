import React from 'react';
import { Link } from 'react-router-dom';
import MedicinalUseShow from '../containers/MedicinalUseShow';
import Aux from '../HOC/Aux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/medicinalUses';

class MedicinalUsesList extends React.Component {
  // state = {
  //   displayHerbs: false
  // }

  // displayHerbsHandler = (medicinalUse) => {
  //   //set state.herbs = to medicinalUse.herbs
  //   //set state.displayHerbs =  !state.displayHerbs
  //   this.setState({
  //     displayHerbs: !this.displayHerbs,
  //   })
  // }

  fetchHerbsHandler = (muId) => {
    //fetch giving errors, consider searching herbs in reducer that include medicinaluse
    this.props.actions.fetchMedicinalUseHerbs(muId)
  }

  render() {
    let medicinalUses = null;
    let displayHerbs = null;

    if (this.props.medicinalUses) {
      medicinalUses = this.props.medicinalUses.map(medicinalUse => {
        return (
          <Aux key={medicinalUse.id}>
            <h4 >
              <li role='presentation'>
                <Link onClick={() => this.fetchHerbsHandler(medicinalUse.id)} to={`${this.props.url}/${medicinalUse.id}`}>{medicinalUse.name}</Link>
                <span>  </span>
              </li>
            </h4>
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

// const MedicinalUsesList = (props) => {
//   let medicinalUses = null;
//   let displayHerbs = null;
//
//   const displayHerbsHandler = (medicinalUse) => {
//     displayHerbs =
//   }
//
//   if (props.medicinalUses) {
//     medicinalUses = props.medicinalUses.map(medicinalUse =>
//       <h4 key={medicinalUse.id}>
//         <li role='presentation'>
//           <Link onClick={displayHerbsHandler(medicinalUse)} to={`${props.url}/${medicinalUse.id}`}>{medicinalUse.name}</Link>
//           <span>  </span>
//         </li>
//       </h4>
//     );
//   }
//
//   return (
//     <div className="col-sm-5">
//       <ul className="nav nav-pills nav-stacked">
//         { medicinalUses }
//       </ul>
//     </div>
//   )
// };
const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}


export default connect(null, mapDispatchToProps)(MedicinalUsesList);
